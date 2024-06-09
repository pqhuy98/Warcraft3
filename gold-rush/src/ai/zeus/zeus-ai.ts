import { EFFECT_RADIUS, targetMatching } from 'abilities/thunder_blink/thunder_blink';
import { ABILITY_ID_THUNDER_BLINK } from 'lib/constants';
import { getUnitLocation } from 'lib/location';
import { log } from 'lib/log';
import { findBestCircleCoverMostLocations, findBestCircleCoverMostUnits, isLocked } from 'lib/maths/circle_cover_most_points';
import { setIntervalIndefinite } from 'lib/trigger';
import { shuffleArray } from 'lib/utils';
import {
  Group,
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { AiObserver } from '../ai_observer';

const debug = false;

export class ZeusAi extends AiObserver {
  static register(player: player, unitTypeId: number) {
    const heroes = GetUnitsOfPlayerAndTypeId(player, unitTypeId);
    Group.fromHandle(heroes).for(() => {
      new ZeusAi(Unit.fromHandle(GetEnumUnit()));
    });
    DestroyGroup(heroes);
  }

  constructor(protected hero: Unit) {
    super(hero);

    this.hero.removeGuardPosition();

    setIntervalIndefinite(0.5, () => this.thinkFast());
    setIntervalIndefinite(2, () => this.thinkSlow());
  }

  thinkFast() {
    const retreatLifeThreshold = 300;
    const retreatManaThreshold = 200;
    const attackLifeThreshold = this.hero.maxLife * 0.9;
    const attackManaThreshold = this.hero.maxMana * 0.9;

    const currentState = this.getState();
    if (currentState === 'attack') {
      if (this.hero.life < retreatLifeThreshold || this.hero.mana < retreatManaThreshold) {
        this.setState('retreat');
      }
    } else if (currentState === 'retreat') {
      if (this.hero.life > attackLifeThreshold && this.hero.mana > attackManaThreshold) {
        this.setState('attack');
      }
    }
  }

  async thinkSlow() {
    debug && log('check action, current order = ', OrderId2String(this.hero.currentOrder));

    switch (this.getState()) {
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

    await this.tryThunderBlink();
  }

  tryRetreat() {
    debug && log('Hero is retreating to home.');
    if (this.getDistanceToHome() > 500) {
      this.hero.issuePointOrder(OrderId.Move, this.getHomePoint());
    }
  }

  async tryAttack() {
    if (isLocked()) {
      debug && log('find circle is locked');
      return;
    }

    if (![OrderId.Standdown, OrderId.Move, 0].includes(this.getCurrentOrder())) return;

    debug && log('Hero is idle, find new target');

    const nearbyAllyHeroesCount = this.getNearbyAllyHeroes().length;
    const shouldRetreat = nearbyAllyHeroesCount === 0;
    debug && log('nearbyAllyHeroesCount', nearbyAllyHeroesCount);

    const allyHeroesLocs = this.getGlobalAllyHeroes().map((u) => getUnitLocation(u));
    const enemiesHeroesLocs = !shouldRetreat ? this.getGlobalEnemyHeroes().map((u) => getUnitLocation(u)) : [];

    debug && log('global ally heroes', allyHeroesLocs.length, 'global enemy heroes', enemiesHeroesLocs.length);

    const locs = [
      ...allyHeroesLocs,
      ...enemiesHeroesLocs,
      ...this.getRecentInterestingLocs(),
    ];
    shuffleArray(locs);

    if (locs.length === 0) {
      locs.push(Location(this.getHomePoint().x, this.getHomePoint().y));
    }

    debug && log('findBestCircleCoverMostLocations with', locs.length, 'locations');

    const result = await findBestCircleCoverMostLocations(locs, this.getAcquisitionRange());
    [...allyHeroesLocs, ...enemiesHeroesLocs].forEach((l) => RemoveLocation(l));

    if (!result) {
      return;
    }

    const randomAngleRad = GetRandomReal(0, 2 * Math.PI);
    const randomDistance = Math.random() * this.getAcquisitionRange();
    const x = result.x + Math.cos(randomAngleRad) * randomDistance;
    const y = result.y + Math.sin(randomAngleRad) * randomDistance;

    debug && log('found new target, issueing order at', x, y, ', should retreat', shouldRetreat ? 'true' : 'false');

    PingMinimapEx(x, y, 5, 255, 255, 255, false);
    this.hero.issueOrderAt(shouldRetreat ? OrderId.Move : OrderId.Attack, x, y);
    this.setDestination(Location(x, y));
  }

  async tryThunderBlink() {
    const abilityId = ABILITY_ID_THUNDER_BLINK;
    const level = this.hero.getAbilityLevel(abilityId) - 1;
    if (level < 0) {
      return;
    }

    if (!this.getCanCastSpellNow(abilityId)) {
      return;
    }

    const maxRange = BlzGetAbilityRealLevelField(this.hero.getAbility(abilityId), ABILITY_RLF_MAXIMUM_RANGE, level);

    const currentState = this.getState();

    if (currentState === 'retreat') {
      if (this.getDistanceToHome() > maxRange) {
        this.hero.issuePointOrder(OrderId.Blink, this.getHomePoint());
      }
      return;
    }

    if (currentState === 'attack') {
      if (this.getCurrentOrder() === OrderId.Move) {
        if (this.getDistanceToDestination() > maxRange) {
          this.hero.issuePointOrder(OrderId.Blink, this.getDestinationPoint());
        }
      } else {
        const nearbyEnemies = this.getUnitsInRangeMatching(maxRange, (u) => targetMatching(this.hero, u));
        if (nearbyEnemies.length > 0) {
          const targetLoc = await findBestCircleCoverMostUnits(nearbyEnemies, EFFECT_RADIUS);
          this.hero.issueOrderAt(OrderId.Blink, targetLoc.x, targetLoc.y);
        }
      }
    }
  }
}
