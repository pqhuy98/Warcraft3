/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty-function */
import { getUnitLocation } from 'lib/location';
import { log } from 'lib/log';
import { findBestCircleCoverMostLocations, isLocked } from 'lib/maths/circle_cover_most_points';
import { isComputer } from 'lib/player';
import { buildTrigger, setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { shuffleArray } from 'lib/utils';
import {
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseAiObserver } from './base_ai_observer';

const debug = false;

interface Config {
  supportAllyHeroes: boolean
  defendAllyBases: boolean
  siegeEnemyHeroes: boolean
  siegeEnemyBases: boolean
  allowRetreatToAllies: boolean
}

const defaultConfig: Config = {
  supportAllyHeroes: true,
  defendAllyBases: true,
  siegeEnemyHeroes: true,
  siegeEnemyBases: true,
  allowRetreatToAllies: true,
};

export class BaseAi {
  _isPaused = false;

  config: Config;

  constructor(protected hero: Unit, protected observer = new BaseAiObserver(hero), config?: Config) {
    if (!isComputer(hero.owner.handle)) {
      return;
    }

    this.config = {
      ...defaultConfig,
      ...config,
    };

    this.hero.removeGuardPosition();
    this.reviveHeroWhenDeath();
    this.freezeStartingItems();

    setTimeout(GetRandomReal(0, 10), () => {
      setIntervalIndefinite(GetRandomReal(0.1, 0.2), () => this.thinkFast());
      setIntervalIndefinite(GetRandomReal(1.8, 2.2), () => this.thinkSlow());
    });
  }

  isPaused() {
    return this._isPaused;
  }

  setPause(isPaused: boolean) {
    this._isPaused = isPaused;
  }

  protected thinkFast() {
    if (this._isPaused) return;

    const retreatLifeThreshold = 300;
    const retreatManaThreshold = 200;
    const attackLifeThreshold = this.hero.maxLife * 0.9;
    const attackManaThreshold = this.hero.maxMana * 0.9;

    const currentState = this.observer.getState();
    if (currentState === 'attack') {
      if (this.hero.life < retreatLifeThreshold || this.hero.mana < retreatManaThreshold) {
        this.observer.setState('retreat');
      }
    } else if (currentState === 'retreat') {
      if (this.hero.life > attackLifeThreshold && this.hero.mana > attackManaThreshold) {
        this.observer.setState('attack');
      }
    }
    this.thinkFastExtra();
  }

  protected thinkFastExtra() { }

  protected async thinkSlow() {
    if (this._isPaused) return;

    debug && log('check action, current order = ', OrderId2String(this.hero.currentOrder));

    switch (this.observer.getState()) {
      case 'retreat': {
        this.tryRetreat();
        break;
      }
      case 'attack': {
        await this.tryAttack();
        break;
      }
      default:
    }

    await this.thinkSlowExtra();
  }

  protected async thinkSlowExtra() { }

  protected tryRetreat() {
    debug && log('Hero is retreating to home.');
    if (this.observer.getDistanceToHome() > 500) {
      this.hero.issuePointOrder(OrderId.Move, this.observer.getHomePoint());
    }
  }

  private async tryAttack() {
    if (isLocked()) {
      debug && log('find circle is locked');
      return;
    }

    if (![OrderId.Standdown, OrderId.Move, 0].includes(this.observer.getCurrentOrder())) return;

    debug && log('Hero is idle, find new target');

    const nearbyAllyHeroesCount = this.observer.getNearbyAllyHeroes().length;
    const allyHeroes = this.config.supportAllyHeroes ? this.observer.getGlobalAllyHeroes() : [];

    const shouldRetreatToAllies = nearbyAllyHeroesCount === 0 && allyHeroes.length > 0 && this.config.allowRetreatToAllies;

    const enemiesHeroes = !shouldRetreatToAllies && this.config.siegeEnemyHeroes ? this.observer.getGlobalEnemyHeroes() : [];

    const enemiesTownHalls = this.config.siegeEnemyBases ? this.observer.getGlobalEnemyTownHalls() : [];

    const interestingUnitsLocs = [
      ...enemiesTownHalls,
      ...allyHeroes,
      ...enemiesHeroes,
    ].map((u) => getUnitLocation(u));

    const locs = [
      ...interestingUnitsLocs,
      ...this.observer.getRecentInterestingEvents(40)
        .filter((t) => this.config.defendAllyBases && t.type === 'ally_building_attacked'
          || this.config.supportAllyHeroes && t.type === 'ally_hero_attack')
        .map((event) => event.location),
    ];
    shuffleArray(locs);

    if (locs.length === 0) {
      locs.push(Location(this.observer.getHomePoint().x, this.observer.getHomePoint().y));
    }

    debug && log('findBestCircleCoverMostLocations with', locs.length, 'locations');

    const result = await findBestCircleCoverMostLocations(locs, this.observer.getAcquisitionRange());
    interestingUnitsLocs.forEach((l) => RemoveLocation(l));

    if (!result) {
      return;
    }

    const randomAngleRad = GetRandomReal(0, 2 * Math.PI);
    const randomDistance = Math.random() * this.observer.getAcquisitionRange();
    const x = result.x + Math.cos(randomAngleRad) * randomDistance;
    const y = result.y + Math.sin(randomAngleRad) * randomDistance;

    debug && log('found new target, issueing order at', x, y, ', should retreat', shouldRetreatToAllies ? 'true' : 'false');

    this.observer.setDestination(Location(x, y));

    if (DistanceBetweenPoints(this.observer.getHeroLocation(), this.observer.getDestination()) > this.observer.getAcquisitionRange()) {
      this.hero.issuePointOrder(shouldRetreatToAllies ? OrderId.Move : OrderId.Attack, this.observer.getDestinationPoint());
    }
    if (this.hero.handle === gg_unit_U000_0322) {
      log('sand king', this.observer.getCurrentOrder(), OrderId2String(this.observer.getCurrentOrder()));
      PingMinimapEx(x, y, 5, 0, 0, 255, false);
    }

    // no need to RemoveLocation(loc)
  }

  protected reviveHeroWhenDeath() {
    buildTrigger((t) => {
      t.registerUnitEvent(this.hero, EVENT_UNIT_DEATH);
      t.addAction(() => {
        setTimeout(10, () => {
          const point = this.observer.getHomePoint();
          PingMinimapEx(point.x, point.y, 5, 255, 255, 255, false);
          this.hero.reviveAtPoint(point, true);
        });
      });
    });
  }

  protected freezeStartingItems() {
    for (let i = 0; i < 6; i++) {
      const item = this.hero.getItemInSlot(i);
      if (item) {
        item.setDroppable(false);
      }
    }
  }
}
