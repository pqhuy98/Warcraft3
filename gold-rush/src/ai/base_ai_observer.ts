import { DamageObserver } from 'lib/data_structures/damage_observer';
import { TimestampedQueue } from 'lib/data_structures/timestamped_queue';
import {
  DistanceBetweenLocs,
  getUnitXY, Loc,
} from 'lib/location';
import { getTimeS, setIntervalIndefinite } from 'lib/trigger';
import {
  getUnitsFromGroup,
  GetUnitsInRangeOfXYMatching,
  isBuilding,
} from 'lib/unit';
import {
  MapPlayer, Unit,
} from 'w3ts';

type State = 'retreat' | 'attack'

type InterestingEventType = 'ally_hero_attack' | 'ally_building_attacked'

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
            type: 'ally_building_attacked',
          },
        });
      }
    });

    DamageObserver.subscribeHeroDamaging((_victim, attacker) => {
      if (attacker.owner.isPlayerAlly(this.owner) && attacker.handle !== this.hero.handle) {
        this.recentInterestingEvents.push({
          timestamp: getTimeS(),
          value: {
            location: getUnitXY(attacker),
            type: 'ally_hero_attack',
          },
        });
      }
    });

    // Bookkeeping
    setIntervalIndefinite(0.5, () => {
      this.heroLoc = getUnitXY(this.hero);
    });
  }

  setHomeLocation(loc: Loc) {
    this.homeLoc = loc;
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
        && unit.handle !== this.hero.handle
        && unit.isAlive()
        && !isBuilding(unit.handle);
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
    const level = this.hero.getAbilityLevel(abilityId) - 1;
    if (level < 0) {
      return false;
    }

    const cooldown = this.hero.getAbilityCooldownRemaining(abilityId);
    const manaCost = this.hero.getAbilityManaCost(abilityId, level);
    if (cooldown > 0 && this.hero.mana < manaCost) {
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
