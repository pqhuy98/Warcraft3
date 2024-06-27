import { k0, k1 } from 'lib/debug/key_counter';
import { fromTempLocation, PolarProjection } from 'lib/location';
import { getSpellType } from 'lib/spell';
import { buildTrigger, setTimeout } from 'lib/trigger';
import {
  createDummy, fadeUnit, isDummy, unitPolarProjection,
} from 'lib/unit';
import { Unit } from 'w3ts';

export class MulticastPoint {
  static Data = {
    REPEAT_CAST: 3,
    FACING_OFFSET: [0, -90, -90, 360 / 3],
  };

  static register(abilityId?: number, caster?: unit) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      if (caster) {
        t.addCondition(() => GetSpellAbilityUnit() === caster);
      }
      t.addCondition(() => !isDummy(Unit.fromHandle(GetSpellAbilityUnit()))
        && getSpellType().onPoint);
      t.addAction(() => {
        const abiId = GetSpellAbilityId();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abiLevel = caster.getAbilityLevel(abiId);
        const order = caster.currentOrder;

        const castPoint = caster.getField(UNIT_RF_CAST_POINT) as number;

        const aoe = BlzGetAbilityRealLevelField(caster.getAbility(abiId), ABILITY_RLF_AREA_OF_EFFECT, abiLevel - 1);
        const offsetDistance = Math.max(aoe, 300);
        const phase = caster.facing - (this.Data.FACING_OFFSET[this.Data.REPEAT_CAST] || 0);

        for (let i = 0; i < this.Data.REPEAT_CAST; i++) {
          const offsetAngle = phase + i * 360.0 / this.Data.REPEAT_CAST;
          const dummyLoc = unitPolarProjection(caster, 150, offsetAngle);

          const dummy = createDummy('MulticastPoint', caster.owner, dummyLoc.x, dummyLoc.y, caster, 999, caster.facing);
          dummy.setPathing(false);
          dummy.setflyHeight(caster.getflyHeight(), 0);
          dummy.skin = caster.skin;
          const scale = (caster.getField(UNIT_RF_SCALING_VALUE) as number);
          dummy.setScale(scale, scale, scale);
          dummy.setVertexColor(255, 255, 0, 128);
          dummy.setField(UNIT_RF_CAST_POINT, castPoint);
          dummy.addAbility(abiId);
          dummy.setAbilityLevel(abiId, abiLevel);
          dummy.setAbilityCooldown(abiId, abiLevel, 0);
          BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 99999);

          const targetLoc = fromTempLocation(GetSpellTargetLoc());
          const newLoc = PolarProjection(targetLoc, offsetDistance, offsetAngle);
          dummy.issueOrderAt(order, newLoc.x, newLoc.y);

          // eslint-disable-next-line no-loop-func
          k0('mcpt');
          buildTrigger((t2) => {
            t2.registerUnitEvent(dummy, EVENT_UNIT_SPELL_ENDCAST);
            t2.addAction(() => {
              t2.destroy();
              k1('mcpt');
              k0('mcpt-f');
              fadeUnit(dummy, 255, 255, 0, 128, 128 / 1, () => false, () => {
                dummy.destroy();
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
