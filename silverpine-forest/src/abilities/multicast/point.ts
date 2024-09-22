import { k0, k1 } from 'lib/debug/key_counter';
import { AngleBetweenLocs, fromTempLocation, PolarProjection } from 'lib/location';
import { getSpellType } from 'lib/spell';
import { buildTrigger, setTimeout } from 'lib/trigger';
import {
  createDummy, fadeUnit, getUnitScale, isDummy, safeRemoveDummy, setUnitScale, unitPolarProjection,
} from 'lib/unit';
import { Trigger, Unit } from 'w3ts';

export class MulticastPoint {
  static Data = {
    REPEAT_CAST: 3,
    FACING_OFFSET: [0, -90, -90, 360 / 3],
  };

  static register(registeredAbilityId?: number, specificCaster?: Unit): Trigger {
    return buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (registeredAbilityId) {
        t.addCondition(() => GetSpellAbilityId() === registeredAbilityId);
      }
      if (specificCaster) {
        t.addCondition(() => GetSpellAbilityUnit() === specificCaster.handle);
      }
      t.addCondition(() => !isDummy(Unit.fromHandle(GetSpellAbilityUnit()))
        && getSpellType().onPoint);
      t.addAction(() => {
        const abilityId = GetSpellAbilityId();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abilityLevel = caster.getAbilityLevel(abilityId);
        const order = caster.currentOrder;

        const targetLoc = fromTempLocation(GetSpellTargetLoc());

        const castPoint = caster.getField(UNIT_RF_CAST_POINT) as number;

        const aoe = BlzGetAbilityRealLevelField(caster.getAbility(abilityId), ABILITY_RLF_AREA_OF_EFFECT, abilityLevel - 1);
        const offsetDistance = Math.max(aoe, 300);
        const phase = caster.facing - (this.Data.FACING_OFFSET[this.Data.REPEAT_CAST] || 0);

        for (let i = 0; i < this.Data.REPEAT_CAST; i++) {
          const offsetAngle = phase + i * 360.0 / this.Data.REPEAT_CAST;
          const dummyLoc = unitPolarProjection(caster, 150, offsetAngle);
          const dummyCastLoc = PolarProjection(targetLoc, offsetDistance, offsetAngle);

          const dummy = createDummy(caster.owner, dummyLoc.x, dummyLoc.y, caster, 999, AngleBetweenLocs(dummyLoc, dummyCastLoc));
          dummy.setflyHeight(caster.getflyHeight(), 0);
          dummy.skin = caster.skin;
          setUnitScale(dummy, getUnitScale(caster));
          dummy.setVertexColor(255, 255, 0, 128);
          dummy.setField(UNIT_RF_CAST_POINT, castPoint);
          dummy.addAbility(abilityId);
          dummy.setAbilityLevel(abilityId, abilityLevel);
          BlzSetAbilityRealLevelField(dummy.getAbility(abilityId), ABILITY_RLF_CAST_RANGE, abilityLevel - 1, 99999);

          dummy.issueOrderAt(order, dummyCastLoc.x, dummyCastLoc.y);

          k0('mcpt');
          buildTrigger((t2) => {
            t2.registerUnitEvent(caster, EVENT_UNIT_SPELL_ENDCAST);
            t2.registerUnitEvent(dummy, EVENT_UNIT_SPELL_ENDCAST);
            t2.addCondition(() => GetSpellAbilityId() === abilityId);
            t2.addAction(() => {
              t2.destroy();
              k1('mcpt');
              k0('mcpt-f');
              fadeUnit(dummy, 255, 255, 0, 128, 0, 1, () => {
                safeRemoveDummy(dummy);
                k1('mcpt-f');
              });
            });
            if (OrderId2String(order) === 'forceofnature'
              || OrderId2String(order) === 'blink') {
              setTimeout(castPoint, () => t2.exec());
            }
          });
        }
      });
    });
  }
}
