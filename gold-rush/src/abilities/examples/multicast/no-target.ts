import { ABILITY_ID_LOCUST, UNIT_ID_DUMMY } from 'lib/constants';
import { getUnitLocation, locX, locY } from 'lib/location';
import { getSpellType } from 'lib/spell';
import { buildTrigger, setTimeout } from 'lib/trigger';
import { fadeUnit, growUnit } from 'lib/unit';
import { Timer, Unit } from 'w3ts';

const REPEAT_CAST = 2;

function isNotMorphAbility() {
  return BlzGetAbilityStringLevelField(
    GetSpellAbility(),
    ABILITY_SLF_NORMAL_FORM_UNIT_EME1,
    GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()) - 1,
  ) === '';
}

export class MulticastNoTarget {
  static register(abilityId?: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetUnitTypeId(GetSpellAbilityUnit()) !== UNIT_ID_DUMMY
        && getSpellType().noTarget
        && IsHeroUnitId(GetUnitTypeId(GetSpellAbilityUnit()))
        && isNotMorphAbility());
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      t.addAction(() => {
        const abiId = GetSpellAbilityId();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abiLevel = GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()) - 1;
        const order = GetUnitCurrentOrder(caster.handle);

        const loc = getUnitLocation(caster);
        const castPoint = caster.getField(UNIT_RF_CAST_POINT) as number;
        const castBackSwing = caster.getField(UNIT_RF_CAST_BACK_SWING) as number;

        const dummy = new Unit(caster.owner, UNIT_ID_DUMMY, locX(loc), locY(loc), caster.facing);
        dummy.addAbility(ABILITY_ID_LOCUST);
        dummy.setPathing(false);
        dummy.setflyHeight(caster.getflyHeight(), 999999);
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

        growUnit(dummy, scale * 1.5, REPEAT_CAST * castPoint);
        const targetLoc = GetSpellTargetLoc();

        const dummyCast = () => {
          IssueImmediateOrderById(dummy.handle, order);
        };

        let castRemain = REPEAT_CAST;
        dummyCast();

        const tLimit = new Timer();
        tLimit.start(3, false, null);

        buildTrigger((t2) => {
          t2.registerUnitEvent(dummy, EVENT_UNIT_SPELL_ENDCAST);
          t2.registerTimerExpireEvent(tLimit.handle);
          t2.addAction(() => {
            castRemain--;
            if (castRemain === 0) {
              t2.destroy();
              RemoveLocation(targetLoc);
              return;
            }
            setTimeout(0, dummyCast);
            if (castRemain <= 1) {
              fadeUnit(dummy, 255, 255, 0, 128, 128 / (castPoint + castBackSwing), () => false, () => dummy.destroy());
            }
          });
        });
      });
    });
  }
}
