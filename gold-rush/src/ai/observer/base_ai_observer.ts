import {
  DistanceBetweenLocs, getUnitXY, Loc,
} from 'lib/location';
import {
  getUnitsFromGroup,
  GetUnitsInRangeOfXYMatching,
  isBuilding,
} from 'lib/unit';
import {
  MapPlayer, Unit,
} from 'w3ts';

import { FactionInterestingEvents } from './interesting_events/faction_interesting_events';
import { InterestingEvent } from './interesting_events/interesting_events.model';

type State = 'retreat' | 'attack'

export class BaseAiObserver {
  private state: State = 'attack';

  private homeLoc: Loc;

  private owner: MapPlayer;

  private allies: MapPlayer[] = [];

  private enemies: MapPlayer[] = [];

  private destination: Loc;

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
  }

  getState() {
    return this.state;
  }

  setState(state: State) {
    this.state = state;
  }

  getDistanceToHome() {
    return DistanceBetweenLocs(getUnitXY(this.hero), this.homeLoc);
  }

  getDistanceToDestination() {
    return DistanceBetweenLocs(getUnitXY(this.hero), this.destination);
  }

  getCurrentOrder() {
    return this.hero.currentOrder;
  }

  getAcquisitionRange() {
    return 800;
  }

  getNearbyAllyHeroes() {
    return GetUnitsInRangeOfXYMatching(this.getAcquisitionRange() + 500, getUnitXY(this.hero), () => {
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
    return GetUnitsInRangeOfXYMatching(range, getUnitXY(this.hero), () => filter(Unit.fromFilter()));
  }

  getRecentInterestingEvents(): InterestingEvent[] {
    return FactionInterestingEvents.getRecentInterestingEvents(this.owner);
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
