/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty-function */
import { ABILITY_ID_BOOK_OF_TELEPORTATION, getGlobalUnitColor } from 'lib/constants';
import { getUnitXY } from 'lib/location';
import { log } from 'lib/log';
import { findBestCircleCoverMostLocations } from 'lib/maths/circle_cover_most_points';
import { isComputer } from 'lib/player';
import { ABILITY_ArchMageMassTeleport, ABILITY_ItemTownPortal } from 'lib/resources/war3-abilities';
import { SummonManager } from 'lib/systems/summon_manager';
import { systemConfig } from 'lib/systems/system-config';
import {
  buildTrigger, getTimeS, onChatLocal, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import { GetUnitsInRangeOfXYMatching, orderUnitUseItemAbilityAtLoc } from 'lib/unit';
import { shuffleArray } from 'lib/utils';
import {
  MapPlayer,
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { getSkillBuilds } from './ai_skill_builds';
import { BaseAiObserver } from './observer/base_ai_observer';
import { InterestingEventType } from './observer/interesting_events/interesting_events.model';

const debug = false;
const playerControllBufferTimeS = 3;

export interface Config {
  followAllyHeroes: boolean
  defendAllyBases: boolean
  siegeEnemyHeroes: boolean
  siegeEnemyBases: boolean
  retreatWhenAlone: boolean
  firstAttackDelay: number
}

const defaultConfig: Config = {
  followAllyHeroes: true,
  defendAllyBases: true,
  siegeEnemyHeroes: true,
  siegeEnemyBases: true,
  retreatWhenAlone: true,
  firstAttackDelay: 60,
};

export class BaseAi {
  _isPaused = false;

  config: Config;

  dbShouldRetreatToAllies = false;

  thinkFastCycle: number = 0;

  thinkSlowCycle: number = 0;

  summons: Unit[] = [];

  skillBuildOrder: number[];

  constructor(protected hero: Unit, protected observer = new BaseAiObserver(hero), config?: Partial<Config>) {
    this.config = {
      ...defaultConfig,
      ...config,
    };

    this.hero.removeGuardPosition();
    this.reviveHeroWhenDeath();

    if (!isComputer(hero.owner.handle)) {
      return;
    }

    this.freezeStartingItems();
    setTimeout(GetRandomReal(0, 10), () => {
      setIntervalIndefinite(GetRandomReal(0.3, 0.6), () => this.thinkFast());
      setIntervalIndefinite(GetRandomReal(1.8, 2.2), () => this.thinkSlow());
    });

    this.skillBuildOrder = getSkillBuilds(this.hero);

    this.registerSummons();
    this.buildSkills();

    onChatLocal('-u', true, () => {
      if (this.hero.isSelected(MapPlayer.fromLocal())) {
        log('lvlup', this.hero.name);
        this.hero.setHeroLevel(this.hero.level + 1, true);
      }
    });
  }

  isPaused() {
    return this._isPaused;
  }

  setPause(isPaused: boolean) {
    this._isPaused = isPaused;
  }

  private lastControlledTimeS: number = -99;

  protected isPlayerControlled() {
    if (systemConfig.autoPlay) return false;

    const isControlledNow = this.hero.isSelected(MapPlayer.fromLocal())
      && this.hero.owner.compareAlliance(MapPlayer.fromLocal(), ALLIANCE_SHARED_ADVANCED_CONTROL);

    if (isControlledNow) {
      this.lastControlledTimeS = getTimeS();
    }

    return isControlledNow || getTimeS() - this.lastControlledTimeS < playerControllBufferTimeS;
  }

  protected thinkFast() {
    if (this.isPaused() || this.isPlayerControlled()) return;

    this.thinkFastCycle++;

    const retreatLifeThreshold = Math.max(300, this.hero.maxLife / 5);
    const retreatManaThreshold = 100;
    const attackLifeThreshold = this.hero.maxLife * 0.85;
    const attackManaThreshold = this.hero.maxMana * 0.85;

    const currentState = this.observer.getState();
    if (currentState === 'attack') {
      if (this.hero.life < retreatLifeThreshold || this.hero.mana < retreatManaThreshold) {
        this.observer.setState('retreat');
        this.observer.setDestination(this.observer.getHome());
      }
    } else if (currentState === 'retreat') {
      if (this.hero.life > attackLifeThreshold && this.hero.mana > attackManaThreshold) {
        this.observer.setState('attack');
      }
    }
    this.thinkFastExtra();
  }

  protected thinkFastExtra() {
    // to be inherited by children classes
  }

  protected thinkSlow() {
    if (this.isPaused() || this.isPlayerControlled()) return;

    this.thinkSlowCycle++;

    debug && log('check action, current order = ', OrderId2String(this.hero.currentOrder));

    switch (this.observer.getState()) {
      case 'retreat': {
        this.tryRetreat();
        break;
      }
      case 'attack': {
        this.tryAttack();
        break;
      }
      default:
    }

    this.tryTeleport();

    this.thinkSlowExtra();
  }

  protected thinkSlowExtra() {
    // to be inherited by children classes
  }

  protected tryRetreat() {
    debug && log('Hero is retreating to home.');
    if (this.observer.getDistanceToHome() > 500) {
      const homeLoc = this.observer.getHome();
      this.hero.issueOrderAt(OrderId.Move, homeLoc.x, homeLoc.y);
    }
  }

  private tryAttack() {
    if (![OrderId.Standdown, OrderId.Move, 0].includes(this.observer.getCurrentOrder())) return;

    debug && log('Hero is idle, find new target');

    const nearbyAllyHeroesCount = this.observer.getNearbyAllyHeroes().length;
    const allyHeroes = this.config.followAllyHeroes ? this.observer.getGlobalAllyHeroes() : [];

    const shouldRetreatToAllies = nearbyAllyHeroesCount === 0 && allyHeroes.length > 0 && this.config.retreatWhenAlone;

    const canAssault = getTimeS() > this.config.firstAttackDelay;

    const enemiesHeroes = canAssault && !shouldRetreatToAllies && this.config.siegeEnemyHeroes ? this.observer.getGlobalEnemyHeroes() : [];

    const enemiesTownHalls = canAssault && this.config.siegeEnemyBases ? this.observer.getGlobalEnemyTownHalls() : [];

    const interestingUnitsLocs = [
      ...allyHeroes,
      ...enemiesTownHalls,
      ...enemiesHeroes,
    ].map((u) => getUnitXY(u));

    const locs = [
      ...interestingUnitsLocs,
      ...this.observer.getRecentInterestingEvents(40)
        .filter((t) => this.config.defendAllyBases && t.type === InterestingEventType.AllyBuildingAttacked
          || this.config.followAllyHeroes && t.type === InterestingEventType.AllyHeroAttack)
        .map((event) => event.location),
    ];
    shuffleArray(locs);

    if (locs.length === 0) {
      locs.push(this.observer.getHome());
    }

    debug && log('findBestCircleCoverMostLocations with', locs.length, 'locations');

    const result = findBestCircleCoverMostLocations(locs, this.observer.getAcquisitionRange());

    if (!result) {
      return;
    }

    const randomAngleRad = GetRandomReal(0, 2 * Math.PI);
    const randomDistance = Math.random() * this.observer.getAcquisitionRange();
    const x = result.x + Math.cos(randomAngleRad) * randomDistance;
    const y = result.y + Math.sin(randomAngleRad) * randomDistance;

    debug && log('found new target, issueing order at', x, y, ', should retreat', shouldRetreatToAllies ? 'true' : 'false');

    this.observer.setDestination({ x, y });

    this.dbShouldRetreatToAllies = shouldRetreatToAllies;

    if (this.observer.getDistanceToDestination() > this.observer.getAcquisitionRange()) {
      const destinationLoc = this.observer.getDestination();
      this.hero.issueOrderAt(shouldRetreatToAllies ? OrderId.Move : OrderId.Attack, destinationLoc.x, destinationLoc.y);
      for (const unit of this.summons) {
        if (unit.isAlive()) {
          unit.issueOrderAt(shouldRetreatToAllies ? OrderId.Move : OrderId.Attack, destinationLoc.x, destinationLoc.y);
        }
      }
    }
  }

  protected reviveHeroWhenDeath() {
    buildTrigger((t) => {
      t.registerUnitEvent(this.hero, EVENT_UNIT_DEATH);
      t.addAction(() => {
        setTimeout(10, () => {
          const point = this.observer.getHome();
          PingMinimapEx(point.x, point.y, 5, 255, 255, 255, false);
          this.hero.revive(point.x, point.y, true);
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

  protected tryTeleport() {
    if (this.observer.getState() !== 'retreat' && this.thinkSlowCycle % 3 !== 0) return;
    if (this.observer.getDistanceToDestination() < 4000) return;

    let abilityId: number | null = null;
    let isAbilityItem: boolean = false;

    for (const { id: candidateAbility, isItem } of teleportAbilities) {
      if (this.observer.getCanCastSpellNow(candidateAbility)) {
        abilityId = candidateAbility;
        isAbilityItem = isItem;
        break;
      }
    }
    if (abilityId === null) {
      return;
    }

    const loc = this.observer.getDestination();
    const nearbyAllies = GetUnitsInRangeOfXYMatching(800, loc, () => Unit.fromFilter().isAlly(this.hero.owner)
        && Unit.fromFilter().isAlive()
        && !Unit.fromFilter().isHero()
        && !Unit.fromFilter().isUnitType(UNIT_TYPE_FLYING));
    if (nearbyAllies.length > 0) {
      if (isAbilityItem) {
        orderUnitUseItemAbilityAtLoc(this.hero, abilityId, loc);
      } else {
        this.hero.issueOrderAt(OrderId.Massteleport, loc.x, loc.y);
      }
      this.setPause(true);
      const ability = this.hero.getAbility(abilityId);
      const delay = BlzGetAbilityRealLevelField(ability, ABILITY_RLF_CASTING_DELAY, 0);
      setTimeout(delay + 0.1, () => this.setPause(false));
    }
  }

  protected registerSummons() {
    SummonManager.subscribe((summoner, summoned) => {
      if (summoner !== this.hero) return;
      this.summons.push(summoned);
      summoned.color = getGlobalUnitColor(summoner);
    });

    setTimeout(GetRandomReal(0, 10), () => setIntervalIndefinite(10, () => {
      for (let i = 0; i < this.summons.length; i++) {
        if (!this.summons[i].isAlive()) {
          this.summons[i] = this.summons[this.summons.length - 1];
          this.summons.pop();
        }
      }
    }));
  }

  protected buildSkills() {
    const tryLearnSkills = () => {
      const skillCounts: Record<number, number> = {};

      for (let i = 0; i < Math.min(this.hero.level, this.skillBuildOrder.length); i++) {
        const abilityId = this.skillBuildOrder[i];

        // Update the skill count for the current ability
        if (!skillCounts[abilityId]) {
          skillCounts[abilityId] = 0;
        }
        skillCounts[abilityId]++;

        if (this.hero.getAbilityLevel(abilityId) < skillCounts[abilityId]) {
          this.hero.selectSkill(abilityId);
        }
      }
    };

    buildTrigger((t) => {
      t.registerUnitEvent(this.hero, EVENT_UNIT_HERO_LEVEL);
      t.addAction(() => tryLearnSkills());
    });
    tryLearnSkills();
  }
}

const teleportAbilities = [
  { id: ABILITY_ID_BOOK_OF_TELEPORTATION, isItem: true },
  { id: FourCC(ABILITY_ItemTownPortal.code), isItem: true },
  { id: FourCC(ABILITY_ArchMageMassTeleport.code), isItem: false },
];
