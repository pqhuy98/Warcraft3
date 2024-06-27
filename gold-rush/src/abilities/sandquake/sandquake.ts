import { k0, k1 } from 'lib/debug/key_counter';
import {
  AngleBetweenLocs,
  DistanceBetweenLocs, fromTempLocation, getUnitXY, Loc,
  PolarProjection,
  tempLocation,
} from 'lib/location';
import { log } from 'lib/log';
import {
  MODEL_AncientProtectorMissile, MODEL_EarthquakeTarget, MODEL_Tornado,
} from 'lib/resources/war3-models';
import { buildTrigger, setIntervalIndefinite, setTimeout } from 'lib/trigger';
import {
  createDummy, GetUnitsInRangeOfXYMatching, isBuilding,
  isWard,
} from 'lib/unit';
import { classic } from 'lib/utils';
import {
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { MODEL_Sand_Tornado, SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE } from '../../lib/constants';

const MODEL_EarthquakeTarget_classic = classic(MODEL_EarthquakeTarget);
const MODEL_AncientProtectorMissile_classic = classic(MODEL_AncientProtectorMissile);

export default class Sandquake {
  static Data = {
    ABILITY_IDS: <number[]>[],
    RADIUS: 500,
    targetMatching: (caster: Unit, unit: Unit) => unit.isAlive()
      && unit.isEnemy(caster.getOwner())
      && !isBuilding(unit)
      && !isWard(unit),
  };

  static unitDestination = new Map<unit, Loc>();

  static register(abilityId: number) {
    Sandquake.Data.ABILITY_IDS.push(abilityId);
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        new Sandquake(
          GetSpellAbilityId(),
          Unit.fromHandle(GetSpellAbilityUnit()),
          GetSpellTargetUnit(),
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

        if (Sandquake.unitDestination.has(caster.handle)) {
          Sandquake.unitDestination.set(caster.handle, locXY);
        } else {
          BlzUnitForceStopOrder(caster.handle, true);
          caster.endAbilityCooldown(abilityId);
          caster.issueOrderAt(OrderId.Shockwave, locXY.x, locXY.y);
        }
      });
    });
  }

  constructor(
    abilityId: number,
    caster: Unit,
    targetUnit: unit,
    targetLocation: Loc,
    abilityLevel: number,
  ) {
    k0('sndq');
    let tgloc = targetLocation;
    if (targetUnit && !tgloc) {
      tgloc = getUnitXY(Unit.fromHandle(targetUnit));
    }
    Sandquake.unitDestination.set(caster.handle, tgloc);

    caster.setVertexColor(255, 255, 255, 0);
    caster.setPathing(false);
    caster.invulnerable = true;

    const radius = Sandquake.Data.RADIUS;
    const intervalS = 0.03;
    const ability = caster.getAbility(abilityId);
    const speed = BlzGetAbilityIntegerField(ability, ABILITY_IF_MISSILE_SPEED);
    const distancePerStep = speed * intervalS;

    const affectedEnemies = new Set<unit>();

    const sandstormEffect = AddSpecialEffect(MODEL_Sand_Tornado, caster.x, caster.y);
    BlzSetSpecialEffectMatrixScale(sandstormEffect, 2, 2, 2);
    BlzSetSpecialEffectTime(sandstormEffect, 0.51);
    BlzSetSpecialEffectTimeScale(sandstormEffect, 0.6);

    const sandstormEffect2 = AddSpecialEffect(MODEL_Tornado, caster.x, caster.y);
    BlzSetSpecialEffectTimeScale(sandstormEffect2, 1);

    const timer = setIntervalIndefinite(intervalS, (idx) => {
      const targetLoc = Sandquake.unitDestination.get(caster.handle);
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
        const loc = PolarProjection(newLoc, distance, angle);
        DestroyEffect(AddSpecialEffect(MODEL_AncientProtectorMissile_classic, loc.x, loc.y));
      }

      if (idx % 8 === 0) {
        TerrainDeformationRandomBJ(0.5, tempLocation(newLoc).handle, radius, -30, 30, 0.15);
        const effect = AddSpecialEffect(MODEL_EarthquakeTarget_classic, newLoc.x, newLoc.y);
        BlzSetSpecialEffectYaw(effect, Math.random() * 2 * Math.PI);
        setTimeout(0.95, () => DestroyEffect(effect));

        const nearbyEnemies = GetUnitsInRangeOfXYMatching(
          radius,
          casterLoc,
          () => Sandquake.Data.targetMatching(caster, Unit.fromFilter()),
        );

        for (const enumUnit of nearbyEnemies) {
          if (affectedEnemies.has(enumUnit.handle)) return;
          const dummy = createDummy('Sandquake-impale', caster.owner, enumUnit.x, enumUnit.y, caster, 1);
          dummy.addAbility(SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE);
          dummy.setAbilityLevel(SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE, abilityLevel);
          dummy.issueTargetOrder(OrderId.Impale, enumUnit);
        }

        affectedEnemies.clear();
        for (const enumUnit of nearbyEnemies) {
          affectedEnemies.add(enumUnit.handle);
        }
      }

      if (!caster.isAlive() || DistanceBetweenLocs(newLoc, targetLoc) < distancePerStep) {
        caster.setVertexColor(255, 255, 255, 255);
        caster.setPathing(true);
        caster.invulnerable = false;
        caster.endAbilityCooldown(abilityId);
        SetUnitPosition(caster.handle, targetLoc.x, targetLoc.y);

        Sandquake.unitDestination.delete(caster.handle);
        DestroyEffect(sandstormEffect);
        DestroyEffect(sandstormEffect2);
        timer.pause();
        timer.destroy();
        k1('setitv');

        affectedEnemies.clear();

        if (caster.isAlive()) {
          caster.setAnimation('morph alternate');
          caster.queueAnimation('stand');
        }
        k1('sndq');
      }
    });
  }
}
