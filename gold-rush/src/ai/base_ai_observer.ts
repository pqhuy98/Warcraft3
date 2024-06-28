import { TimestampedQueue } from 'lib/data_structures/timestamped_queue';
import {
  DistanceBetweenLocs,
  getUnitXY, Loc,
} from 'lib/location';
import { log } from 'lib/log';
import { DamageObserver } from 'lib/systems/damage_observer';
import { getTimeS, onChatLocal, setIntervalIndefinite } from 'lib/trigger';
import {
  getUnitsFromGroup,
  GetUnitsInRangeOfXYMatching,
  isBuilding,
} from 'lib/unit';
import {
  MapPlayer, Unit,
} from 'w3ts';

type State = 'retreat' | 'attack'

export enum InterestingEventType {
  AllyHeroAttack = 0,
  AllyBuildingAttacked = 1
}

interface InterestingEvent {
  location: Loc
  type: InterestingEventType
}

export class BaseAiObserver {
  private state: State = 'attack';

  private homeLoc: Loc;

  private owner: MapPlayer;

  private allies: MapPlayer[] = [];

  private enemies: MapPlayer[] = [];

  private recentInterestingEvents: TimestampedQueue<InterestingEvent> = new TimestampedQueue({
    itemExpireS: 10,
  });

  private destination: Loc;

  private heroLoc: Loc;

  constructor(protected readonly hero: Unit) {
    this.owner = this.hero.getOwner();
    this.homeLoc = {
      x: this.owner.startLocationX,
      y: this.owner.startLocationY,
    };
    this.destination = {
      x: this.hero.x,
      y: this.hero.y,
    };

    for (let playerId = 0; playerId < 24; playerId++) {
      const player = MapPlayer.fromIndex(playerId);
      if (player === this.owner) continue;
      if (player.isPlayerAlly(this.owner)) {
        this.allies.push(player);
      } else if (player.isPlayerEnemy(this.owner)) {
        this.enemies.push(player);
      }
    }

    DamageObserver.subscribeBuildingDamaged((victim) => {
      if (victim.owner.isPlayerAlly(this.owner)) {
        this.recentInterestingEvents.push({
          timestamp: getTimeS(),
          value: {
            location: getUnitXY(victim),
            type: InterestingEventType.AllyBuildingAttacked,
          },
        });
      }
    });

    DamageObserver.subscribeHeroDamaging((_victim, attacker) => {
      if (attacker.owner.isPlayerAlly(this.owner) && attacker !== this.hero) {
        this.recentInterestingEvents.push({
          timestamp: getTimeS(),
          value: {
            location: getUnitXY(attacker),
            type: InterestingEventType.AllyHeroAttack,
          },
        });
      }
    });

    // Bookkeeping
    setIntervalIndefinite(0.5, () => {
      this.heroLoc = getUnitXY(this.hero);
    });

    onChatLocal('-qs', true, () => {
      log('Queue size:', this.recentInterestingEvents.getValidLength(), this.recentInterestingEvents.getTrueLength());
    });
  }

  getState() {
    return this.state;
  }

  setState(state: State) {
    this.state = state;
  }

  getDistanceToHome() {
    return DistanceBetweenLocs(this.heroLoc, this.homeLoc);
  }

  getDistanceToDestination() {
    return DistanceBetweenLocs(this.heroLoc, this.destination);
  }

  getCurrentOrder() {
    return this.hero.currentOrder;
  }

  getAcquisitionRange() {
    return 800;
  }

  getNearbyAllyHeroes() {
    return GetUnitsInRangeOfXYMatching(this.getAcquisitionRange() + 500, this.heroLoc, () => {
      const unit = Unit.fromFilter();
      return unit.isAlly(this.owner)
        && unit.isHero()
        && unit !== this.hero
        && unit.isAlive()
        && !isBuilding(unit);
    });
  }

  getGlobalAllyHeroes() {
    return this.allies.flatMap((p) => getHeroesForPlayer(p));
  }

  getGlobalEnemyTownHalls() {
    return this.enemies.flatMap((p) => getTownHallsForPlayer(p));
  }

  getGlobalEnemyHeroes() {
    return this.enemies.flatMap((p) => getHeroesForPlayer(p));
  }

  getCanCastSpellNow(abilityId: number) {
    if (!this.hero.isAlive()) return false;
    const level = this.hero.getAbilityLevel(abilityId) - 1;
    if (level < 0) {
      return false;
    }

    const cooldown = this.hero.getAbilityCooldownRemaining(abilityId);
    const manaCost = this.hero.getAbilityManaCost(abilityId, level);
    if (cooldown > 0 || this.hero.mana < manaCost) {
      return false;
    }

    return true;
  }

  getUnitsInRangeMatching(range: number, filter: (u: Unit) => boolean) {
    return GetUnitsInRangeOfXYMatching(range, this.heroLoc, () => filter(Unit.fromFilter()));
  }

  getRecentInterestingEvents(limit?: number): InterestingEvent[] {
    return this.recentInterestingEvents.get(limit).map((item) => item.value);
  }

  getHome() {
    return this.homeLoc;
  }

  setHome(loc: Loc) {
    this.homeLoc = loc;
  }

  getDestination() {
    return this.destination;
  }

  setDestination(loc: Loc) {
    this.destination = loc;
  }

  getHeroLocation() {
    return this.heroLoc;
  }
}

function getHeroesForPlayer(p: MapPlayer) {
  let cond: conditionfunc;
  const group = GetUnitsOfPlayerMatching(p.handle, cond = Condition(() => {
    const unit = Unit.fromFilter();
    return unit.isHero() && unit.isAlive();
  }));
  DestroyBoolExpr(cond);

  const units = getUnitsFromGroup(group);
  DestroyGroup(group);
  return units;
}

function getTownHallsForPlayer(p: MapPlayer) {
  let cond: conditionfunc;
  const group = GetUnitsOfPlayerMatching(p.handle, cond = Condition(() => {
    const unit = Unit.fromFilter();
    return unit.isUnitType(UNIT_TYPE_TOWNHALL) && unit.isAlive();
  }));
  DestroyBoolExpr(cond);

  const units = getUnitsFromGroup(group);
  DestroyGroup(group);
  return units;
}
