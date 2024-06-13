import { getUnitLocation, locX, locY } from 'lib/location';
import { MODEL_AncientProtectorMissile, MODEL_EarthquakeTarget } from 'lib/resources/war3-models';
import { buildTrigger, setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { createDummy } from 'lib/unit';
import {
  Group, Point, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE } from '../../lib/constants';

export default class Sandquake {
  static Data = {
    ABILITY_IDS: <number[]>[],
    RADIUS: 500,
    targetMatching: (caster: Unit, unit: Unit) => unit.isAlive()
      && unit.isEnemy(caster.getOwner())
      && !unit.getField(UNIT_BF_IS_A_BUILDING)
      && (ConvertTargetFlag(unit.getField(UNIT_IF_TARGETED_AS) as number)) !== TARGET_FLAG_WARD,
  };

  static unitsInCast = Group.create();

  static unitDestination = new Map<unit, location>();

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
          GetSpellTargetLoc(),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()),
        );
      });
    });

    const triggeringOrderIds = [OrderId.Smart, OrderId.Move, OrderId.Attack, OrderId.Aimove, 0];

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER);
      t.addCondition(() => GetUnitAbilityLevel(GetTriggerUnit(), abilityId) > 0
        && triggeringOrderIds.includes(GetIssuedOrderId())
        && !Sandquake.unitsInCast.hasUnit(Unit.fromEvent()));
      t.addAction(() => {
        const caster = Unit.fromEvent();

        let loc = GetOrderPointLoc();
        const targUnit = GetOrderTargetUnit();
        if (targUnit && !loc) {
          loc = getUnitLocation(Unit.fromHandle(targUnit));
        }

        if (!loc) return;

        if (Sandquake.unitDestination.has(caster.handle)) {
          Sandquake.updateTargetLocation(caster, loc);
        } else {
          BlzUnitForceStopOrder(caster.handle, true);
          caster.endAbilityCooldown(abilityId);
          caster.issuePointOrder(OrderId.Shockwave, Point.fromHandle(loc));
          RemoveLocation(loc);
        }
      });
    });
  }

  static updateTargetLocation(caster: Unit, loc: location) {
    if (Sandquake.unitDestination.has(caster.handle)) {
      RemoveLocation(Sandquake.unitDestination.get(caster.handle));
    }
    Sandquake.unitDestination.set(caster.handle, loc);
  }

  static removeTargetLocation(caster: Unit) {
    if (Sandquake.unitDestination.has(caster.handle)) {
      RemoveLocation(Sandquake.unitDestination.get(caster.handle));
    }
    Sandquake.unitDestination.delete(caster.handle);
  }

  constructor(
    abilityId: number,
    caster: Unit,
    targetUnit: unit,
    targetLocation: location,
    abilityLevel: number,
  ) {
    let tgloc = targetLocation;
    if (targetUnit && !tgloc) {
      tgloc = getUnitLocation(Unit.fromHandle(targetUnit));
    }
    Sandquake.updateTargetLocation(caster, tgloc);

    caster.setVertexColor(255, 255, 255, 0);
    caster.setPathing(false);
    const originalShadow = <string>caster.getField(UNIT_SF_SHADOW_IMAGE_UNIT);
    const originalShadowWidth = <number>caster.getField(UNIT_RF_SHADOW_IMAGE_WIDTH);
    const originalShadowHeight = <number>caster.getField(UNIT_RF_SHADOW_IMAGE_HEIGHT);
    caster.setField(UNIT_SF_SHADOW_IMAGE_UNIT, '');
    caster.setField(UNIT_RF_SHADOW_IMAGE_WIDTH, 0);
    caster.setField(UNIT_RF_SHADOW_IMAGE_HEIGHT, 0);

    const radius = Sandquake.Data.RADIUS;
    const intervalS = 0.03;
    const ability = caster.getAbility(abilityId);
    const speed = BlzGetAbilityIntegerField(ability, ABILITY_IF_MISSILE_SPEED);
    const distancePerStep = speed * intervalS;

    let affectedEnemies = Group.create();

    const timer = setIntervalIndefinite(intervalS, (idx) => {
      const targetLoc = Sandquake.unitDestination.get(caster.handle);
      const casterLoc = getUnitLocation(caster);
      const timeToReach = DistanceBetweenPoints(casterLoc, targetLoc) / speed;
      const newLoc = PolarProjectionBJ(casterLoc, distancePerStep, timeToReach > 0.2 ? caster.facing : AngleBetweenPoints(casterLoc, targetLoc));

      caster.x = locX(newLoc);
      caster.y = locY(newLoc);

      SetUnitFacingToFaceLocTimed(caster.handle, targetLoc, 0.1 * timeToReach);

      const nearbyEnemies = GetUnitsInRangeOfLocMatching(radius, casterLoc, Condition(() => {
        const matchingUnit = Unit.fromFilter();
        return Sandquake.Data.targetMatching(caster, matchingUnit);
      }));

      ForGroup(nearbyEnemies, () => {
        const enumUnit = Unit.fromEnum();
        if (enumUnit.inGroup(affectedEnemies)) return;
        const dummy = createDummy(caster.owner, enumUnit.x, enumUnit.y, caster, 2);
        dummy.addAbility(SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE);
        dummy.setAbilityLevel(SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE, abilityLevel);
        dummy.issueTargetOrder(OrderId2String(OrderId.Impale), enumUnit);
      });

      affectedEnemies.destroy();
      affectedEnemies = Group.fromHandle(nearbyEnemies);

      for (let i = 0; i < 5; i++) {
        const angle = GetRandomDirectionDeg();
        const distance = GetRandomReal(0, radius);
        const loc = PolarProjectionBJ(newLoc, distance, angle);
        DestroyEffect(AddSpecialEffectLoc(MODEL_AncientProtectorMissile, loc));
        RemoveLocation(loc);
      }

      if (idx % 5 === 0) {
        TerrainDeformationRandomBJ(0.5, newLoc, radius, -10, 10, 0.1);
        const effect = AddSpecialEffectLoc(MODEL_EarthquakeTarget, newLoc);
        setTimeout(0.5, () => DestroyEffect(effect));
      }

      if (!caster.isAlive() || DistanceBetweenPoints(newLoc, targetLoc) < distancePerStep) {
        caster.setVertexColor(255, 255, 255, 255);
        caster.setPathing(true);
        caster.setField(UNIT_SF_SHADOW_IMAGE_UNIT, originalShadow);
        caster.setField(UNIT_RF_SHADOW_IMAGE_WIDTH, originalShadowWidth);
        caster.setField(UNIT_RF_SHADOW_IMAGE_HEIGHT, originalShadowHeight);

        SetUnitPositionLoc(caster.handle, targetLoc);

        Sandquake.unitsInCast.removeUnit(caster);
        Sandquake.removeTargetLocation(caster);

        timer.destroy();
        if (targetLocation) {
          RemoveLocation(targetLocation);
        }
        affectedEnemies.destroy();
      }

      RemoveLocation(casterLoc);
      RemoveLocation(newLoc);
    });
  }
}
