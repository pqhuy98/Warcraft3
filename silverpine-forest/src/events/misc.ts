import {
  neutralHostile, neutralPassive,
  playerForsaken,
  playerHumanAlliance,
  playerMain, UNIT_Butcher,
  UNIT_Child_1a,
  UNIT_Child_2a,
  UNIT_Child_girl1,
  UNIT_Child_girl2,
  UNIT_Child_girl3,
  UNIT_Villager_AgedFemale,
  UNIT_Villager_AgedMale,
  UNIT_Villager_Female1,
  UNIT_Villager_Female2,
  UNIT_Villager_Female3,
  UNIT_Villager_Female4,
  UNIT_Villager_Male1a,
  UNIT_Villager_Male1b,
  UNIT_Villager_Male1c,
  UNIT_Villager_Male1d,
  UNIT_Villager_Male2a,
  UNIT_Villager_Male2b,
  UNIT_Villager_Male2c,
  UNIT_Villager_Male2d,
  UNIT_Villager_oldguy1,
  UNIT_Villager_oldguy2,
  UNIT_Villager_oldguy3,
  UNIT_Villager_oldguy4,
  UNIT_Villager_oldguy5,
} from 'lib/constants';
import { getDestructablesInRect } from 'lib/destructable';
import {
  Angle,
  centerLocRect,
  currentLoc, fromTempLocation, isLocInRect, isPointReachable, PolarProjection,
  randomLocRect,
  tempLocation,
} from 'lib/location';
import { log } from 'lib/log';
import { isComputer, isUser, setAllianceState2Way } from 'lib/player';
import { dialogue } from 'lib/quests/dialogue_sound';
import {
  ABILITY_Harvest, ABILITY_PaladinHolyLight, ABILITY_Wander,
} from 'lib/resources/war3-abilities';
import { MODEL_BrewmasterTarget, MODEL_FrostNovaTarget, MODEL_InnerFireTarget } from 'lib/resources/war3-models';
import { ORDER_AutoHarvestGold, ORDER_AutoHarvestLumber } from 'lib/resources/war3-orders';
import {
  UNIT_Abomination,
  UNIT_Footman,
  UNIT_GargoyleMorphed,
  UNIT_Ghoul,
  UNIT_HeroShadowHunter,
  UNIT_Militia,
  UNIT_Peasant, UNIT_Shaman, UNIT_TYPE, UNIT_VillagerKid, UNIT_VillagerKid2, UNIT_VillagerMan,
  UNIT_VillagerMan2, UNIT_VillagerWoman, UNIT_WitchDoctor,
  UNIT_Zombie,
} from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { guardCurrentPosition, removeGuardPosition } from 'lib/systems/unit_guard_position';
import { createTextTag, TTSetting } from 'lib/texttag';
import {
  buildTrigger, setIntervalFixedCount, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  getUnitsInRangeOfLoc, getUnitsInRect, getUnitsOfPlayer, isBuilding, isOrganic,
} from 'lib/unit';
import { pickRandom, range } from 'lib/utils';
import {
  Effect, MapPlayer, sleep, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { onChatCommand } from './chat_commands/chat_commands.model';

const defaultGuardDistance = 1200;

export class MiscEvents {
  static register(): void {
    setTimeout(0.0, () => this.run());
  }

  static run(): void {
    // All pre-placed non-neutral units guard their positions
    getUnitsInRect(GetWorldBounds(), (u) => u.isAlive()
      && !isBuilding(u)
      && isComputer(u.owner)
      && !u.getAbility(ABILITY_Wander.id)
      && !u.isUnitType(UNIT_TYPE_PEON)
      && u.owner !== neutralHostile && u.owner !== neutralPassive)
      .forEach((u) => {
        guardCurrentPosition(u, { maxRadius: defaultGuardDistance });
        u.setUseFood(false);
      });

    // Keeper casting Transquil
    setIntervalIndefinite(30, () => {
      const keeperGrove = Unit.fromHandle(gg_unit_Ekee_0551);
      keeperGrove.issueImmediateOrder(OrderId.Stop);
      keeperGrove.resetCooldown();
      setTimeout(5, () => {
        keeperGrove.mana = keeperGrove.maxMana;
        keeperGrove.issueImmediateOrder(OrderId.Tranquility);
      });
    });

    // Harvest Golems in farm deteriorating
    setIntervalIndefinite(10, () => {
      [gg_unit_n008_0942, gg_unit_n008_0095, gg_unit_n008_0096].forEach((gs) => {
        const harvestGolem = Unit.fromHandle(gs);
        harvestGolem.life = Math.min(harvestGolem.life, harvestGolem.maxLife - 85);
      });
    });

    // Villagers chopping woods
    getUnitsInRect(gg_rct_Farm_villagers_working, (u) => [UNIT_VillagerMan.id, UNIT_VillagerMan2.id].includes(u.typeId))
      .forEach((u) => guardCurrentPosition(u, { maxRadius: defaultGuardDistance, animation: 'stand work' }));

    // Peasants repairing broken wheelbarrow
    getUnitsInRect(gg_rct_Town_peasants_repair_wheelbarrow)
      .forEach((u) => guardCurrentPosition(u, { maxRadius: defaultGuardDistance, animation: 'stand work lumber' }));

    // Undead ghouls eating
    [
      ...getUnitsInRect(gg_rct_Undead_lumber_ghouls_eating_1),
      ...getUnitsInRect(gg_rct_Undead_lumber_ghouls_eating_2),
    ].forEach((u) => guardCurrentPosition(u, { maxRadius: defaultGuardDistance, animation: 'stand channel' }));

    // Harvests
    [
      ...getUnitsInRect(gg_rct_Shore_Peon_harvest_gold),
    ].forEach((u) => u.issueImmediateOrder(ORDER_AutoHarvestGold));
    [
      ...getUnitsInRect(gg_rct_Shore_Peon_harvest_lumber),
      ...getUnitsInRect(gg_rct_Jungle_peon_harvest_lumber),
    ].forEach((u) => u.issueImmediateOrder(ORDER_AutoHarvestLumber));

    // Shore caster channeling
    getUnitsInRect(gg_rct_Shore_caster_ritual)
      .forEach((u) => {
        if (u.typeId === UNIT_HeroShadowHunter.id) {
          guardCurrentPosition(u, { maxRadius: defaultGuardDistance, animation: 'stand channel' });
        } else if (u.typeId === UNIT_Shaman.id) {
          guardCurrentPosition(u, { maxRadius: defaultGuardDistance, animation: 'spell 1' });
        } else if (u.typeId === UNIT_WitchDoctor.id) {
          guardCurrentPosition(u, { maxRadius: defaultGuardDistance, animation: 'spell 1' });
        }
      });

    // Shadowfang training footmen
    this.footmanPractice();

    // Mayor Ambermill casts holy light
    const mayor = Unit.fromHandle(gg_unit_Hpb1_0145);
    setIntervalIndefinite(3, () => {
      if (mayor.getAbilityCooldownRemaining(ABILITY_PaladinHolyLight.id) > 0) return;
      const nearbyUnhealthy = pickRandom(getUnitsInRangeOfLoc(
        600,
        mayor,
        (unit) => unit.isAlive() && unit.isAlly(mayor.owner) && unit.life < unit.maxLife - 100 && isOrganic(unit),
      ));
      if (nearbyUnhealthy) {
        mayor.issueTargetOrder(OrderId.Holybolt, nearbyUnhealthy);
      }
    });

    // Testing isPointReachable
    onChatCommand('-ipr', true, () => {
      const hero = getUnitsOfPlayer(playerMain)[0];
      buildTrigger((t) => {
        t.registerUnitEvent(hero, EVENT_UNIT_ISSUED_POINT_ORDER);
        t.addAction(() => {
          const loc = fromTempLocation(GetOrderPointLoc());
          if (!isPointReachable(hero, loc)) {
            Effect.create(MODEL_FrostNovaTarget, loc.x, loc.y).destroy();
          }
          ClearTextMessages();
          log(`neutral passive ${neutralPassive.coordsVisible(loc.x, loc.y) ? 'see' : 'not see'}`);
          log(`hero ${hero.owner.coordsVisible(loc.x, loc.y) ? 'see' : 'not see'}`);
        });
      });
    });

    // Thalandor's' barrels
    const barrelTypeIds = ['LTbx', 'LTbs', 'LTbr'].map((code) => FourCC(code));
    getDestructablesInRect(gg_rct_Thalandor_home, (d) => barrelTypeIds.includes(d.typeId))
      .forEach((b) => {
        const eff = Effect.create(MODEL_BrewmasterTarget, b.x, b.y);
        eff.setHeight(50 + Unit.fromHandle(gg_unit_nhem_0557).z);
        buildTrigger((t) => {
          t.registerDeathEvent(b);
          t.addAction(() => eff.destroy());
        });
      });

    // Gargoyle
    const gargoyleCount = 20;
    const centerLoc = centerLocRect(gg_rct_Gargoyle);
    const gargoyles = range(gargoyleCount).map((i) => {
      const loc = PolarProjection(centerLoc, 400, i * 360 / gargoyleCount);
      const garg = Unit.create(neutralHostile, UNIT_GargoyleMorphed.id, loc.x, loc.y, Angle(centerLoc, loc));
      garg.paused = true;
      return garg;
    });
    buildTrigger((t) => {
      gargoyles.forEach((u) => t.registerDeathEvent(u));
      t.addAction(() => {
        gargoyles.forEach((u) => {
          u.paused = false;
          u.issueImmediateOrder(OrderId.Stoneform);
          BlzQueueTargetOrderById(u.handle, OrderId.Attack, GetKillingUnit());
        });
        t.destroy();
      });
    });

    // Others
    this.preventFriendlyFire();
    this.castleEvents();
    this.shadowFangCitizens();
    this.villagerSkinReplace();
    Unit.fromHandle(gg_unit_htow_1131).name = 'Ambermill Town Hall';
  }

  // 9 footmen in Shadowfang practice
  static footmanPractice(): void {
    const trainingFootmen = getUnitsInRect(gg_rct_Shadowfang_soldier_training, (u) => u.typeId === UNIT_Footman.id);
    const initialLoc = new Map(trainingFootmen.map((u) => [u, currentLoc(u)]));
    removeGuardPosition(...trainingFootmen);
    // Footman
    // 0: stand, 1: stand look around, 2: stand victory
    // 3: sheath and drink, 4: attack shield, 5: attack sweep
    // 6: walk, 7: shield up, 8: shield walk
    // 9: death, 10: decay, 11: attack normal
    const usedAnimationIndices = [2, 3, 4, 5, 7, 11];
    // onChatCommand('-ta $1', false, (msg) => {
    //   animationIndex = parseInt(msg.split(' ')[1], 10);
    // });

    const leaderEffect = Effect.createAttachment(MODEL_InnerFireTarget, trainingFootmen[0], 'overhead');

    const timer = setIntervalIndefinite((50 / 200 + 0.5) + 1, (i) => {
      if (trainingFootmen.every((u) => isLocInRect(u, gg_rct_Shadowfang_soldier_training))) {
        trainingFootmen.forEach((u) => {
          u.moveSpeed = 200;
          const loc = PolarProjection(initialLoc.get(u), i % 2 === 0 ? -50 : 50, 0);
          u.issueOrderAt(OrderId.Attack, loc.x, loc.y);
        });
        setTimeout(50 / 200 + 0.5, () => {
          const animationIndex = pickRandom(usedAnimationIndices);
          trainingFootmen.forEach((u) => {
            ResetUnitAnimation(u.handle);
            SetUnitAnimationByIndex(u.handle, animationIndex);
            u.queueAnimation('stand first');
          });

          createTextTag({
            2: 'Warcry!',
            3: 'Sheath!',
            4: 'Strike with shield!',
            5: 'Strike sweep!',
            7: 'Shield up!',
            11: 'Strike!',
          }[animationIndex], trainingFootmen[0], TTSetting.info);
        });
      } else {
        leaderEffect.destroy();
        timer.pause();
        timer.destroy();
      }
    });
  }

  static shadowFangCitizens(): void {
    const citizenIds = [
      UNIT_VillagerMan,
      UNIT_VillagerMan2,
      UNIT_VillagerWoman,
      UNIT_VillagerKid,
      UNIT_VillagerKid2,
    ].map((t) => t.id);

    getUnitsInRect(gg_rct_Shadowfang_region)
      .forEach((u) => {
        if (citizenIds.includes(u.typeId)) {
          u.addAbility(ABILITY_Wander.id);
          removeGuardPosition(u);
        }
        u.removeAbility(ABILITY_Harvest.id);
      });

    buildTrigger((t) => {
      TriggerRegisterEnterRectSimple(t.handle, gg_rct_Shadowfang_region);
      t.addCondition(() => citizenIds.includes(Unit.fromEvent().typeId));
      t.addAction(() => {
        const u = Unit.fromEvent();
        u.addAbility(ABILITY_Wander.id);
        removeGuardPosition(u);
      });
    });
  }

  static preventFriendlyFire(): void {
    // Players become hostile if being friendly fired
    false && buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const killer = Unit.fromHandle(GetKillingUnit());
        const victim = Unit.fromHandle(GetDyingUnit());
        if (victim.owner === neutralPassive) return false;
        return victim.owner !== killer.owner && victim.isAlly(killer.owner);
      });
      t.addAction(() => {
        const killer = Unit.fromHandle(GetKillingUnit());
        const victim = Unit.fromHandle(GetDyingUnit());
        setAllianceState2Way(victim.owner, killer.owner, 'enemy');
      });
    });

    // All players cannot attack allies
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED);
      t.addCondition(() => {
        const attacker = Unit.fromHandle(GetAttacker());
        const victim = Unit.fromEvent();
        return isUser(attacker.owner)
          && victim.owner !== attacker.owner
          && attacker.owner.isPlayerAlly(victim.owner)
          && victim.owner !== neutralPassive;
      });
      t.addAction(() => {
        const attacker = Unit.fromHandle(GetAttacker());
        attacker.issueImmediateOrder(OrderId.Stop);
      });
    });
  }

  static castleEvents(): void {
    const corpses = 70;

    // Corpses
    const rects = [
      gg_rct_Castle_corpses_1,
      gg_rct_Castle_corpses_2,
      gg_rct_Castle_corpses_3,
    ];

    const corpseTypes: [MapPlayer, number[]][] = [
      [playerHumanAlliance, [
        UNIT_Footman, UNIT_Peasant, UNIT_Militia, UNIT_VillagerMan, UNIT_VillagerMan2, UNIT_VillagerWoman,
      ].map((t) => t.id)],
      [playerForsaken, [
        UNIT_Ghoul, UNIT_Zombie, UNIT_Abomination,
      ].map((t) => t.id)],
    ];

    const rectAreas = rects.map((r) => GetRectWidthBJ(r) * GetRectHeightBJ(r));
    const rectTotalArea = rectAreas.reduce((acc, v) => acc + v, 0);

    setIntervalFixedCount(0.05, corpses, () => {
      const dice = GetRandomReal(0, rectTotalArea);
      let accumArea = 0;
      for (const curRect of rects) {
        accumArea += GetRectWidthBJ(curRect) * GetRectHeightBJ(curRect);
        if (accumArea >= dice) {
          const [player, types] = pickRandom(corpseTypes);
          CreatePermanentCorpseLocBJ(
            GetRandomInt(1, 50) === 1 ? bj_CORPSETYPE_FLESH : bj_CORPSETYPE_BONE,
            pickRandom(types),
            player.handle,
            tempLocation(randomLocRect(curRect)),
            GetRandomDirectionDeg(),
          );
          break;
        }
      }
    });

    // Butcher kills heroes
    const freshMeatSound = dialogue('Sound\\Dialogue\\HumanExpCamp\\Human06x\\BUTCHER.WAV', 'Butcher', '...');
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const killer = Unit.fromHandle(GetKillingUnit());
        const victim = Unit.fromHandle(GetDyingUnit());
        return killer.typeId === UNIT_Butcher.id && victim.isHero() && !victim.isIllusion();
      });
      t.addAction(() => {
        const killer = Unit.fromHandle(GetKillingUnit());
        void playSpeech(killer, freshMeatSound);
        killer.life = killer.maxLife;
      });
    });

    buildTrigger((t) => {
      TriggerRegisterEnterRectSimple(t.handle, gg_rct_Casle_entry);
      t.addCondition(() => Unit.fromEvent().owner === playerMain);
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      t.addAction(async () => {
        ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_LTg3_8382);
        const shadowfangGateBlockers = getDestructablesInRect(gg_rct_Casle_entry);
        shadowfangGateBlockers.forEach((d) => d.kill());
        t.enabled = false;
        await sleep(10);
        ModifyGateBJ(bj_GATEOPERATION_CLOSE, gg_dest_LTg3_8382);
        shadowfangGateBlockers.forEach((d) => d.kill());
        await sleep(10);
        t.enabled = true;
      });
    });
  }

  static villagerSkinReplace(): void {
    const exceptionUnits = [
      gg_unit_nvil_0035,
      gg_unit_nvil_0414,
      gg_unit_nvl2_0413,
      gg_unit_nvk2_0064,
    ];

    const villagerIds = [
      UNIT_VillagerMan,
      UNIT_VillagerMan2,
      UNIT_VillagerWoman,
      UNIT_VillagerKid,
      UNIT_VillagerKid2,
    ].map((t) => t.id);

    const replacementMap: Record<number, UNIT_TYPE[]> = {
      [UNIT_VillagerMan.id]: [
        UNIT_VillagerMan,
        UNIT_Villager_Male1a,
        UNIT_Villager_Male1b,
        UNIT_Villager_Male1c,
        UNIT_Villager_Male1d,
        UNIT_Villager_oldguy1,
        UNIT_Villager_oldguy2,
      ],
      [UNIT_VillagerMan2.id]: [
        UNIT_VillagerMan2,
        UNIT_Villager_Male2a,
        UNIT_Villager_Male2b,
        UNIT_Villager_Male2c,
        UNIT_Villager_Male2d,
        UNIT_Villager_AgedMale,
        UNIT_Villager_oldguy3,
        UNIT_Villager_oldguy4,
        UNIT_Villager_oldguy5,
      ],
      [UNIT_VillagerWoman.id]: [
        UNIT_VillagerWoman,
        UNIT_Villager_Female1,
        UNIT_Villager_Female2,
        UNIT_Villager_Female3,
        UNIT_Villager_Female4,
        UNIT_Villager_AgedFemale,
      ],
      [UNIT_VillagerKid.id]: [
        UNIT_VillagerKid,
        UNIT_Child_1a,
        UNIT_Child_girl1,
      ],
      [UNIT_VillagerKid2.id]: [
        UNIT_VillagerKid2,
        UNIT_Child_2a,
        UNIT_Child_girl2,
        UNIT_Child_girl3,
      ],
    };

    const prototypes = new Map<number, Unit>();
    const loc = centerLocRect(gg_rct_Unit_experiments);

    for (const originalId of Object.keys(replacementMap)) {
      const typeId = Number(originalId);
      const replacements = replacementMap[typeId];
      for (const replacement of replacements) {
        const replacementTypeId = replacement.id;
        prototypes.set(replacementTypeId, Unit.create(neutralPassive, replacementTypeId, loc.x, loc.y));
      }
    }

    getUnitsInRect(GetWorldBounds(), (u) => villagerIds.includes(u.typeId))
      .forEach((u) => {
        if (exceptionUnits.includes(u.handle)) return;
        const replacementId = pickRandom(replacementMap[u.typeId]).id;
        u.skin = prototypes.get(replacementId).skin;
      });

    for (const u of prototypes.values()) {
      u.destroy();
    }
  }
}
