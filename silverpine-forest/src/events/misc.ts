import { getDestructablesInRect } from 'lib/destructable';
import { currentLoc, isLocInRect, PolarProjection } from 'lib/location';
import { isComputer } from 'lib/player';
import { ABILITY_PaladinHolyLight, ABILITY_Wander } from 'lib/resources/war3-abilities';
import { MODEL_InnerFireTarget } from 'lib/resources/war3-models';
import {
  UNIT_Footman,
  UNIT_HeroShadowHunter, UNIT_Shaman, UNIT_VillagerMan, UNIT_VillagerMan2, UNIT_WitchDoctor,
} from 'lib/resources/war3-units';
import { guardCurrentPosition, removeGuardPosition } from 'lib/systems/unit_guard_position';
import { setIntervalIndefinite, setTimeout } from 'lib/trigger';
import {
  getUnitsInRangeOfXYMatching, getUnitsInRect, isBuilding, isOrganic,
} from 'lib/unit';
import { pickRandom } from 'lib/utils';
import { TextTag, Unit } from 'w3ts';
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
    // All pre-placed units guard their positions
    getUnitsInRect(GetWorldBounds(), (u) => u.isAlive()
      && !isBuilding(u)
      && isComputer(u.owner.handle)
      && !u.getAbility(ABILITY_Wander.id)
      && !u.isUnitType(UNIT_TYPE_PEON))
      .forEach((u) => {
        guardCurrentPosition(u, defaultGuardDistance);
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

    // Ghouls eating corpses
    [
      gg_unit_ugho_0190,
      gg_unit_ugho_0194,
      gg_unit_ugho_0208,
      gg_unit_ugho_0209,
      gg_unit_ugho_0210,
    ].forEach((u) => guardCurrentPosition(Unit.fromHandle(u), defaultGuardDistance, 'stand channel'));

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
      const nearbyUnhealthy = pickRandom(getUnitsInRangeOfXYMatching(600, mayor, () => {
        const unit = Unit.fromFilter();
        return unit.isAlive() && unit.isAlly(mayor.owner) && unit.life < unit.maxLife - 100
          && isOrganic(unit);
      }));
      if (nearbyUnhealthy) {
        mayor.issueTargetOrder(OrderId.Holybolt, nearbyUnhealthy);
      }
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

    let r = 255;
    let g = 255;
    let b = 255;
    let heightOffset = -50;
    let fontSize = 7;
    let lifespan = 1.5;
    let fadepoint = 0;
    let vy = 0.005;
    onChatCommand('-ttc $r $g $b', false, (msg) => {
      r = parseInt(msg.split(' ')[1], 10);
      g = parseInt(msg.split(' ')[2], 10);
      b = parseInt(msg.split(' ')[3], 10);
    });

    onChatCommand('-ttho $1', false, (msg) => {
      heightOffset = parseFloat(msg.split(' ')[1]);
    });
    onChatCommand('-ttf $1', false, (msg) => {
      fontSize = parseFloat(msg.split(' ')[1]);
    });
    onChatCommand('-ttvy $1', false, (msg) => {
      vy = parseFloat(msg.split(' ')[1]);
    });
    onChatCommand('-ttl $1', false, (msg) => {
      lifespan = parseFloat(msg.split(' ')[1]);
    });
    onChatCommand('-ttf $1', false, (msg) => {
      fadepoint = parseFloat(msg.split(' ')[1]);
    });
    const leaderEffect = AddSpecialEffectTarget(MODEL_InnerFireTarget, trainingFootmen[0].handle, 'overhead');

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

          const tt = TextTag.create();
          tt.setColor(r, g, b, 255);
          tt.setLifespan(lifespan);
          tt.setFadepoint(fadepoint);
          tt.setPosUnit(trainingFootmen[0], heightOffset);
          tt.setText({
            2: 'Warcry!',
            3: 'Sheath!',
            4: 'Strike with shield!',
            5: 'Strike sweep!',
            7: 'Shield up!',
            11: 'Strike!',
          }[animationIndex], fontSize, true);
          tt.setVelocity(0, vy);
          tt.setVisible(true);
          tt.setPermanent(false);
        });
      } else {
        DestroyEffect(leaderEffect);
        timer.pause();
        timer.destroy();
      }
    });
  }
}
