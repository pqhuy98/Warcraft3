import { getUnitLocation, trimLocationArrayToLength } from 'lib/location';
import { setIntervalIndefinite } from 'lib/trigger';
import {
  getUnitsFromGroup,
} from 'lib/unit';
import {
  MapPlayer, Point, Unit,
} from 'w3ts';

type State = 'retreat' | 'attack'

export class AiObserver {
  private state: State = 'attack';

  private homeLoc: location;

  private owner: player;

  private allies: player[] = [];

  private enemies: player[] = [];

  private recentInterestingLocs: location[] = [];

  private destination: location;

  private heroLoc: location;

  constructor(protected readonly hero: Unit) {
    this.owner = this.hero.getOwner().handle;
    this.homeLoc = GetPlayerStartLocationLoc(this.owner);

    for (let playerId = 0; playerId < 24; playerId++) {
      const player = Player(playerId);
      if (player === this.owner) continue;
      if (IsPlayerAlly(player, this.owner)) {
        this.allies.push(player);
      } else if (IsPlayerEnemy(player, this.owner)) {
        this.enemies.push(player);
      }
    }

    // buildTrigger((t) => {
    //   this.allies.forEach((p) => {
    //     t.registerPlayerUnitEvent(MapPlayer.fromHandle(p), EVENT_PLAYER_UNIT_DAMAGED, undefined);
    //   });
    //   t.addCondition(() => isBuilding(BlzGetEventDamageTarget()));
    //   t.addAction(() => {
    //     log('Building damaged, source', GetEventDamageSource(), ', target', BlzGetEventDamageTarget());
    //     log('target is building', isBuilding(BlzGetEventDamageTarget()) ? 'yes' : 'no');
    //     this.recentInterestingLocs.push(getUnitLocation(Unit.fromHandle(BlzGetEventDamageTarget())));
    //   });
    // });

    // buildTrigger((t) => {
    //   this.allies.forEach((p) => {
    //     t.registerPlayerUnitEvent(MapPlayer.fromHandle(p), EVENT_PLAYER_UNIT_DAMAGING, undefined);
    //   });
    //   t.addCondition(() => Unit.fromHandle(GetEventDamageSource()).isHero() && GetEventDamageSource() !== this.hero.handle);
    //   t.addAction(() => {
    //     log('Hero damaging, source', GetEventDamageSource(), ', target', BlzGetEventDamageTarget());
    //     this.recentInterestingLocs.push(getUnitLocation(Unit.fromHandle(GetEventDamageSource())));
    //   });
    // });

    // Bookkeeping
    setIntervalIndefinite(0.5, () => {
      if (this.heroLoc) {
        RemoveLocation(this.heroLoc);
      }
      this.heroLoc = getUnitLocation(this.hero);

      trimLocationArrayToLength(this.recentInterestingLocs, 40, (oldLocs) => {
        oldLocs.forEach((l) => RemoveLocation(l));
      });
    });
  }

  getState() {
    return this.state;
  }

  setState(state: State) {
    this.state = state;
  }

  getHomePoint() {
    return Point.fromHandle(this.homeLoc);
  }

  getDestinationPoint() {
    return Point.fromHandle(this.destination);
  }

  getDistanceToHome() {
    return DistanceBetweenPoints(this.heroLoc, this.homeLoc);
  }

  getDistanceToDestination() {
    return DistanceBetweenPoints(this.heroLoc, this.destination);
  }

  getCurrentOrder() {
    return this.hero.currentOrder;
  }

  // eslint-disable-next-line class-methods-use-this
  getAcquisitionRange() {
    return 800;
  }

  getNearbyAllyHeroes() {
    const nearbyAllyHeroes = GetUnitsInRangeOfLocMatching(this.getAcquisitionRange() + 500, this.heroLoc, Condition(() => {
      const unit = Unit.fromFilter();
      return unit.isAlly(MapPlayer.fromHandle(this.owner))
        && unit.isHero()
        && unit.handle !== this.hero.handle
        && unit.isAlive()
        && !unit.getField(UNIT_BF_IS_A_BUILDING);
    }));
    const result = getUnitsFromGroup(nearbyAllyHeroes);
    DestroyGroup(nearbyAllyHeroes);
    return result;
  }

  getGlobalAllyHeroes() {
    return this.allies.flatMap((p) => getHeroesForPlayer(p));
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
    const nearbyEnemies = GetUnitsInRangeOfLocMatching(range, this.heroLoc, Condition(() => filter(Unit.fromFilter())));
    const units = getUnitsFromGroup(nearbyEnemies);
    DestroyGroup(nearbyEnemies);
    return units;
  }

  getRecentInterestingLocs() {
    return this.recentInterestingLocs;
  }

  getDestination() {
    return this.destination;
  }

  setDestination(loc: location) {
    if (this.destination) {
      RemoveLocation(this.destination);
    }
    this.destination = loc;
  }
}

function getHeroesForPlayer(p: player) {
  const group = GetUnitsOfPlayerMatching(p, Condition(() => {
    const unit = Unit.fromFilter();
    return unit.isHero() && unit.isAlive() && !unit.getField(UNIT_BF_IS_A_BUILDING);
  }));

  const units = getUnitsFromGroup(group).map((u) => Unit.fromHandle(u));
  DestroyGroup(group);
  return units;
}
