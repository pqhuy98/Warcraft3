import { Impale } from 'abilities/impale/impale';
import { k0, k1 } from 'lib/debug/key_counter';
import {
  AngleBetweenLocs,
  DistanceBetweenLocs, fromTempLocation, getUnitXY, Loc,
  PolarProjection,
  tempLocation,
} from 'lib/location';
import { log } from 'lib/log';
import {
  MODEL_AncientProtectorMissile, MODEL_EarthquakeTarget, MODEL_ImpaleHitTarget, MODEL_Tornado,
} from 'lib/resources/war3-models';
import { buildTrigger, setIntervalIndefinite, setTimeout } from 'lib/trigger';
import {
  getUnitsInRangeOfLoc, isBuilding,
  isWard,
} from 'lib/unit';
import { classic } from 'lib/utils';
import {
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { MODEL_Sand_Tornado } from '../../lib/constants';

const MODEL_EarthquakeTarget_classic = classic(MODEL_EarthquakeTarget);
const MODEL_AncientProtectorMissile_classic = classic(MODEL_AncientProtectorMissile);

export default class Sandquake {
  static Data = {
    ABILITY_IDS: <number[]>[],
    getEffectRadius: () => (500),
    targetMatching: (caster: Unit, unit: Unit) => unit.isAlive()
      && unit.isEnemy(caster.getOwner())
      && !unit.invulnerable
      && !isBuilding(unit)
      && !unit.isUnitType(UNIT_TYPE_FLYING)
      && !isWard(unit),
  };

  static unitDestination = new Map<Unit, Loc>();

  static register(abilityId: number) {
    Sandquake.Data.ABILITY_IDS.push(abilityId);
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        new Sandquake(
          GetSpellAbilityId(),
          Unit.fromHandle(GetSpellAbilityUnit()),
          Unit.fromHandle(GetSpellTargetUnit()),
          fromTempLocation(GetSpellTargetLoc()),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()),
        );
      });
    });

    const allowedOrders = [
      OrderId.Smart,
      OrderId.Move,
      OrderId.Attack,
      OrderId.Aimove,
      0,
    ];

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER);
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER);
      t.addCondition(() => GetUnitAbilityLevel(GetTriggerUnit(), abilityId) > 0
        && allowedOrders.includes(GetIssuedOrderId()));
      t.addAction(() => {
        const caster = Unit.fromEvent();

        let locXY = fromTempLocation(GetOrderPointLoc());
        const targUnit = GetOrderTargetUnit();
        if (targUnit && !locXY) {
          locXY = getUnitXY(Unit.fromHandle(targUnit));
        }

        if (!locXY) return;

        if (Sandquake.unitDestination.has(caster)) {
          Sandquake.unitDestination.set(caster, locXY);
        } else {
          BlzUnitForceStopOrder(caster.handle, true);
          caster.endAbilityCooldown(abilityId);
          caster.issueOrderAt(OrderId.Shockwave, locXY.x, locXY.y);
        }
      });
    });
  }

  affectedEnemies = new Set<Unit>();

  constructor(
    abilityId: number,
    caster: Unit,
    targetUnit: Unit,
    targetLocation: Loc,
    abilityLevel: number,
  ) {
    k0('sndq');
    let tgloc = targetLocation;
    if (targetUnit && !tgloc) {
      tgloc = getUnitXY(targetUnit);
    }
    Sandquake.unitDestination.set(caster, tgloc);

    caster.setVertexColor(255, 255, 255, 0);
    caster.setPathing(false);
    caster.disableAbility(abilityId, true, false);

    const radius = Sandquake.Data.getEffectRadius();
    const intervalS = 0.03;
    const ability = caster.getAbility(abilityId);
    const speed = (BlzGetAbilityIntegerField(ability, ABILITY_IF_MISSILE_SPEED));
    const distancePerStep = speed * intervalS;

    const sandstormEffect = AddSpecialEffect(MODEL_Sand_Tornado, caster.x, caster.y);
    BlzSetSpecialEffectScale(sandstormEffect, (2));
    BlzSetSpecialEffectTime(sandstormEffect, 0.51);
    BlzSetSpecialEffectTimeScale(sandstormEffect, 0.6);

    const sandstormEffect2 = AddSpecialEffect(MODEL_Tornado, caster.x, caster.y);
    BlzSetSpecialEffectTimeScale(sandstormEffect2, 1);

    const timer = setIntervalIndefinite(intervalS, (idx) => {
      const targetLoc = Sandquake.unitDestination.get(caster);
      if (!targetLoc) {
        log('Error: Sandquake cannot find destination for caster. This should not happen');
        return;
      }

      const casterLoc = getUnitXY(caster);
      const timeToReach = DistanceBetweenLocs(casterLoc, targetLoc) / speed;
      const newLoc = PolarProjection(casterLoc, distancePerStep, timeToReach > 0.15 ? caster.facing : AngleBetweenLocs(casterLoc, targetLoc));

      caster.x = newLoc.x;
      caster.y = newLoc.y;

      BlzSetSpecialEffectPosition(sandstormEffect, newLoc.x, newLoc.y, 0);
      BlzSetSpecialEffectPosition(sandstormEffect2, newLoc.x, newLoc.y, 0);

      SetUnitFacingTimed(caster.handle, AngleBetweenLocs(casterLoc, targetLoc), 0.1 * timeToReach);

      for (let i = 0; i < 2; i++) {
        const angle = GetRandomDirectionDeg();
        const distance = GetRandomReal(0, radius);
        const effLoc = PolarProjection(newLoc, distance, angle);
        const eff = AddSpecialEffect(MODEL_AncientProtectorMissile_classic, effLoc.x, effLoc.y);
        BlzSetSpecialEffectScale(eff, (1));
        DestroyEffect(eff);
      }

      if (idx % 8 === 0) {
        TerrainDeformationRandomBJ(0.5, tempLocation(newLoc), radius, -30, 30, 0.15);
        const effect = AddSpecialEffect(MODEL_EarthquakeTarget_classic, newLoc.x, newLoc.y);
        BlzSetSpecialEffectScale(effect, (1));
        BlzSetSpecialEffectYaw(effect, Math.random() * 2 * Math.PI);
        setTimeout(0.95, () => DestroyEffect(effect));
      }

      if (idx % 6 === 0) {
        const nearbyEnemies = getUnitsInRangeOfLoc(
          radius,
          casterLoc,
          (u) => Sandquake.Data.targetMatching(caster, u) && !this.affectedEnemies.has(u),
        );

        for (const enumUnit of nearbyEnemies) {
          if (this.affectedEnemies.has(enumUnit)) return;
          Impale.create({
            caster,
            target: enumUnit,
            tossDurationS: 0.8,
            maxHeight: (400),
            stunDurationS: 1,
            onStart: () => {
              const eff = AddSpecialEffect(classic(MODEL_ImpaleHitTarget), enumUnit.x, enumUnit.y);
              BlzSetSpecialEffectScale(eff, (1));
              DestroyEffect(eff);
            },
            onComplete: () => caster.damageTarget(enumUnit.handle, 75 + abilityLevel * 25, false, false, ATTACK_TYPE_MAGIC, DAMAGE_TYPE_FORCE, WEAPON_TYPE_WHOKNOWS),
          });
        }

        this.affectedEnemies.clear();
        for (const enumUnit of nearbyEnemies) {
          this.affectedEnemies.add(enumUnit);
        }
      }

      if (!caster.isAlive() || DistanceBetweenLocs(caster, targetLoc) < distancePerStep) {
        caster.setVertexColor(255, 255, 255, 255);
        caster.setPathing(true);
        caster.disableAbility(abilityId, false, false);
        caster.endAbilityCooldown(abilityId);

        if (caster.isAlive()) {
          caster.setPosition(targetLoc.x, targetLoc.y);
        }

        Sandquake.unitDestination.delete(caster);
        DestroyEffect(sandstormEffect);
        DestroyEffect(sandstormEffect2);
        timer.pause();
        timer.destroy();
        k1('setitv');

        this.affectedEnemies.clear();

        if (caster.isAlive()) {
          caster.setAnimation('morph alternate');
          caster.queueAnimation('stand');
        }
        k1('sndq');
      }
    });
  }

  static isCasting(unit: Unit) {
    return this.unitDestination.has(unit);
  }
}
