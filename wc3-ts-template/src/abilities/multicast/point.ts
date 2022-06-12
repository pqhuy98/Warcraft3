import { ABILITY_ID_LOCUST, UNIT_ID_DUMMY } from 'utils/constants';
import { getUnitLocation, locX, locY } from 'utils/location';
import { getSpellType } from 'utils/spell';
import { buildTrigger, setTimeout } from 'utils/trigger';
import { fadeUnit, unitPolarProjection } from 'utils/unit';
import { Unit } from 'w3ts';

const REPEAT_CAST = 3;
const FACING_OFFSET = [0, -90, -90, 360 / 3];

export class MulticastPoint {
  static register() {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);

      t.addCondition(() => GetUnitTypeId(GetSpellAbilityUnit()) !== UNIT_ID_DUMMY
        && getSpellType().onPoint);
      t.addAction(() => {
        const abiId = GetSpellAbilityId();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abiLevel = GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()) - 1;
        const order = GetUnitCurrentOrder(caster.handle);

        const loc = getUnitLocation(caster);
        const castPoint = caster.getField(UNIT_RF_CAST_POINT) as number;

        const aoe = BlzGetAbilityRealLevelField(caster.getAbility(abiId), ABILITY_RLF_AREA_OF_EFFECT, abiLevel);
        const offsetDistance = Math.max(aoe, 300);
        const phase = caster.facing - (FACING_OFFSET[REPEAT_CAST] || 0);

        for (let i = 0; i < REPEAT_CAST; i++) {
          const offsetAngle = phase + i * 360.0 / REPEAT_CAST;
          const dummyLoc = unitPolarProjection(caster, 150, offsetAngle);

          const dummy = new Unit(caster.owner, UNIT_ID_DUMMY, locX(dummyLoc), locY(dummyLoc), caster.facing);
          dummy.addAbility(ABILITY_ID_LOCUST);
          dummy.setPathing(false);
          dummy.setflyHeight(caster.getflyHeight(), 0);
          dummy.skin = caster.skin;
          const scale = (caster.getField(UNIT_RF_SCALING_VALUE) as number);
          dummy.setScale(scale, scale, scale);
          dummy.setVertexColor(255, 255, 0, 128);
          dummy.setField(UNIT_RF_CAST_POINT, castPoint);
          dummy.addAbility(abiId);
          dummy.setAbilityLevel(abiId, abiLevel + 1);
          dummy.setAbilityCooldown(abiId, abiLevel, 0);
          BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel, 99999);
          dummy.color = PLAYER_COLOR_YELLOW;
          RemoveLocation(loc);

          const targetLoc = GetSpellTargetLoc();
          const newLoc = PolarProjectionBJ(targetLoc, offsetDistance, offsetAngle);
          IssuePointOrderByIdLoc(dummy.handle, order, newLoc);
          RemoveLocation(newLoc);

          // eslint-disable-next-line no-loop-func
          buildTrigger((t2) => {
            t2.registerUnitEvent(dummy, EVENT_UNIT_SPELL_ENDCAST);
            t2.addAction(() => {
              t2.destroy();
              RemoveLocation(targetLoc);
              fadeUnit(dummy, 255, 255, 0, 128, 128 / 0.5, () => false, () => dummy.destroy());
            });
            if (OrderId2String(order) === 'forceofnature') {
              setTimeout(castPoint, () => t2.exec());
            }
          });
        }
      });
    });
  }
}
