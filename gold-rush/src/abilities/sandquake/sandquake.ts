import {
  AngleBetweenLocs,
  DistanceBetweenLocs,
  fromLocation, getUnitXY, Loc,
  PolarProjection,
  tempLocation,
} from 'lib/location';
import { log } from 'lib/log';
import {
  MODEL_AncientProtectorMissile, MODEL_EarthquakeTarget, MODEL_Tornado,
} from 'lib/resources/war3-models';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import {
  createDummy, GetUnitsInRangeOfXYMatching, isBuilding,
} from 'lib/unit';
import {
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { MODEL_Sand_Tornado, SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE } from '../../lib/constants';

export default class Sandquake {
  static Data = {
    ABILITY_IDS: <number[]>[],
    RADIUS: 500,
    targetMatching: (caster: Unit, unit: Unit) => unit.isAlive()
      && unit.isEnemy(caster.getOwner())
      && !isBuilding(unit.handle)
      && (ConvertTargetFlag(unit.getField(UNIT_IF_TARGETED_AS) as number)) !== TARGET_FLAG_WARD,
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
          fromLocation(GetSpellTargetLoc()),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()),
        );
      });
    });

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER);
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER);
      t.addCondition(() => GetUnitAbilityLevel(GetTriggerUnit(), abilityId) > 0
        && [
          OrderId.Smart,
          OrderId.Move,
          OrderId.Attack,
          OrderId.Aimove,
          0,
        ].includes(GetIssuedOrderId()));
      t.addAction(() => {
        const caster = Unit.fromEvent();

        let loc = fromLocation(GetOrderPointLoc());
        const targUnit = GetOrderTargetUnit();
        if (targUnit && !loc) {
          loc = getUnitXY(Unit.fromHandle(targUnit));
        }

        if (!loc) return;

        if (Sandquake.unitDestination.has(caster.handle)) {
          Sandquake.unitDestination.set(caster.handle, loc);
        } else {
          BlzUnitForceStopOrder(caster.handle, true);
          caster.endAbilityCooldown(abilityId);
          caster.issueOrderAt(OrderId.Shockwave, loc.x, loc.y);
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
    let tgloc = targetLocation;
    if (targetUnit && !tgloc) {
      tgloc = getUnitXY(Unit.fromHandle(targetUnit));
    }
    Sandquake.unitDestination.set(caster.handle, tgloc);

    caster.setVertexColor(255, 255, 255, 0);
    caster.setPathing(false);

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

      for (let i = 0; i < 3; i++) {
        const angle = GetRandomDirectionDeg();
        const distance = GetRandomReal(0, radius);
        const loc = PolarProjection(newLoc, distance, angle);
        DestroyEffect(AddSpecialEffect(MODEL_AncientProtectorMissile, loc.x, loc.y));
      }

      if (idx % 6 === 0) {
        TerrainDeformationRandomBJ(0.5, tempLocation(newLoc), radius, -30, 30, 0.15);
        const effect = AddSpecialEffect(MODEL_EarthquakeTarget, newLoc.x, newLoc.y);
        BlzSetSpecialEffectYaw(effect, Math.random() * 2 * Math.PI);
        // setTimeout(0.95, () => DestroyEffect(effect));
        DestroyEffect(effect);

        const nearbyEnemies = GetUnitsInRangeOfXYMatching(
          radius,
          casterLoc,
          () => Sandquake.Data.targetMatching(caster, Unit.fromFilter()),
        );

        for (const enumUnit of nearbyEnemies) {
          if (affectedEnemies.has(enumUnit.handle)) return;
          const dummy = createDummy(caster.owner, enumUnit.x, enumUnit.y, caster, 2);
          dummy.addAbility(SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE);
          dummy.setAbilityLevel(SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE, abilityLevel);
          dummy.issueTargetOrder(OrderId2String(OrderId.Impale), enumUnit);
        }

        affectedEnemies.clear();
        for (const enumUnit of nearbyEnemies) {
          affectedEnemies.add(enumUnit.handle);
        }
      }

      if (!caster.isAlive() || DistanceBetweenLocs(newLoc, targetLoc) < distancePerStep) {
        caster.setVertexColor(255, 255, 255, 255);
        caster.setPathing(true);
        caster.endAbilityCooldown(abilityId);
        SetUnitPosition(caster.handle, targetLoc.x, targetLoc.y);

        Sandquake.unitDestination.delete(caster.handle);
        DestroyEffect(sandstormEffect);
        DestroyEffect(sandstormEffect2);
        timer.destroy();
        affectedEnemies.clear();

        if (caster.isAlive()) {
          caster.setAnimation('morph alternate');
          caster.queueAnimation('stand');
        }
      }
    });
  }
}