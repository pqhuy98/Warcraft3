import {
  mainPlayer, neutralHostile, neutralPassive, playerBlackTurban,
} from 'lib/constants';
import { getDestructablesInRect } from 'lib/destructable';
import {
  currentLoc, fromTempLocation, isLocInRect, isPointReachable, PolarProjection,
} from 'lib/location';
import { log } from 'lib/log';
import { isComputer, setAllianceState2Way } from 'lib/player';
import { ABILITY_PaladinHolyLight, ABILITY_Wander } from 'lib/resources/war3-abilities';
import { MODEL_BrewmasterTarget, MODEL_FrostNovaTarget, MODEL_InnerFireTarget } from 'lib/resources/war3-models';
import {
  UNIT_Footman,
  UNIT_HeroShadowHunter, UNIT_Shaman, UNIT_VillagerMan, UNIT_VillagerMan2, UNIT_WitchDoctor,
} from 'lib/resources/war3-units';
import { guardCurrentPosition, removeGuardPosition } from 'lib/systems/unit_guard_position';
import { createFloatText, TTSetting } from 'lib/texttag';
import { buildTrigger, setIntervalIndefinite, setTimeout } from 'lib/trigger';
import {
  getUnitsInRangeOfLoc, getUnitsInRect, getUnitsOfPlayer, isBuilding, isOrganic,
} from 'lib/unit';
import { pickRandom } from 'lib/utils';
import { Effect, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { onChatCommand } from './chat_commands/chat_commands.model';

const OrderAutoHarvestGold = 'autoharvestgold';
const OrderAutoHarvestLumber = 'autoharvestlumber';

const defaultGuardDistance = 1000;

export class MiscEvents {
  static register() {
    setTimeout(0.0, () => this.run());
  }

  static run() {
    // All pre-placed non-neutral units guard their positions
    getUnitsInRect(GetWorldBounds(), (u) => u.isAlive()
      && !isBuilding(u)
      && isComputer(u.owner.handle)
      && !u.getAbility(ABILITY_Wander.id)
      && !u.isUnitType(UNIT_TYPE_PEON)
      && u.owner !== neutralHostile && u.owner !== neutralPassive)
      .forEach((u) => {
        let guardRange: number | undefined = defaultGuardDistance;
        if (u.owner === playerBlackTurban) guardRange = undefined;
        guardCurrentPosition(u, guardRange);
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

    // Goblin Shredder in farm deteriorating
    setIntervalIndefinite(10, () => {
      [gg_unit_ngir_0095, gg_unit_ngir_0096, gg_unit_ngir_0097].forEach((gs) => {
        const goblinShredder = Unit.fromHandle(gs);
        goblinShredder.life = Math.min(goblinShredder.life, goblinShredder.maxLife - 80);
      });
    });

    // Villagers chopping woods
    getUnitsInRect(gg_rct_Farm_villagers_working, (u) => [UNIT_VillagerMan.id, UNIT_VillagerMan2.id].includes(u.typeId))
      .forEach((u) => guardCurrentPosition(u, defaultGuardDistance, 'stand work'));

    // Peasants repairing broken wheelbarrow
    getUnitsInRect(gg_rct_Town_peasants_repair_wheelbarrow)
      .forEach((u) => guardCurrentPosition(u, defaultGuardDistance, 'stand work lumber'));

    // Undead ghouls eating
    [
      ...getUnitsInRect(gg_rct_Undead_lumber_ghouls_eating_1),
      ...getUnitsInRect(gg_rct_Undead_lumber_ghouls_eating_2),
    ].forEach((u) => guardCurrentPosition(u, defaultGuardDistance, 'stand channel'));

    // Harvests
    [
      ...getUnitsInRect(gg_rct_Shore_Peon_harvest_gold),
    ].forEach((u) => u.issueImmediateOrder(OrderAutoHarvestGold));
    [
      ...getUnitsInRect(gg_rct_Shore_Peon_harvest_lumber),
      ...getUnitsInRect(gg_rct_Jungle_peon_harvest_lumber),
      ...getUnitsInRect(gg_rct_Shadowfang_peasants_lumber),
    ].forEach((u) => u.issueImmediateOrder(OrderAutoHarvestLumber));

    // Shore caster channeling
    getUnitsInRect(gg_rct_Shore_caster_ritual)
      .forEach((u) => {
        if (u.typeId === UNIT_HeroShadowHunter.id) {
          guardCurrentPosition(u, defaultGuardDistance, 'stand channel');
        } else if (u.typeId === UNIT_Shaman.id) {
          guardCurrentPosition(u, defaultGuardDistance, 'spell 1');
        } else if (u.typeId === UNIT_WitchDoctor.id) {
          guardCurrentPosition(u, defaultGuardDistance, 'spell 1');
        }
      });

    // Shadowfang training footmen
    this.footmanPractice();

    // Shadowfang gate open
    const shadowfangGateBlockers = getDestructablesInRect(gg_rct_Shadowfang_gate_sight_blocker);
    onChatCommand('-open', true, () => {
      ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_LTg3_4633);
      shadowfangGateBlockers.forEach((d) => d.kill());
    });
    onChatCommand('-close', true, () => {
      ModifyGateBJ(bj_GATEOPERATION_CLOSE, gg_dest_LTg3_4633);
      shadowfangGateBlockers.forEach((d) => d.heal(d.maxLife, false));
    });

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
      const hero = getUnitsOfPlayer(mainPlayer)[0];
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

    // Players become hostile if being friendly fired
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const killer = Unit.fromHandle(GetKillingUnit());
        const victim = Unit.fromHandle(GetDyingUnit());
        return victim.owner !== killer.owner && victim.isAlly(killer.owner);
      });
      t.addAction(() => {
        const killer = Unit.fromHandle(GetKillingUnit());
        const victim = Unit.fromHandle(GetDyingUnit());
        setAllianceState2Way(victim.owner, killer.owner, 'enemy');
      });
    });
  }

  // 9 footmen in Shadowfang practice
  static footmanPractice() {
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

          createFloatText({
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
}
