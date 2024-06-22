import { ABILITY_BladeMasterBladestorm } from 'lib/resources/war3-abilities';
import { getSpellType } from 'lib/spell';
import { buildTrigger, setTimeout } from 'lib/trigger';
import {
  createDummy, fadeUnit, growUnit, isDummy,
} from 'lib/unit';
import { Timer, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

function isNotMorphAbility() {
  return BlzGetAbilityStringLevelField(
    GetSpellAbility(),
    ABILITY_SLF_NORMAL_FORM_UNIT_EME1,
    GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()) - 1,
  ) === '';
}

export class MulticastNoTarget {
  static Data = {
    REPEAT_CAST: 3,
  };

  static register(abilityId?: number, caster?: unit) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => !isDummy(Unit.fromHandle(GetSpellAbilityUnit()))
        && getSpellType().noTarget
        && IsHeroUnitId(GetUnitTypeId(GetSpellAbilityUnit()))
        && isNotMorphAbility());
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      if (caster) {
        t.addCondition(() => GetSpellAbilityUnit() === caster);
      }
      t.addAction(() => {
        const abiId = GetSpellAbilityId();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abiLevel = caster.getAbilityLevel(abiId);
        let order = caster.currentOrder;
        if (abiId === FourCC(ABILITY_BladeMasterBladestorm.code)) order = OrderId.Whirlwind;

        const castPoint = caster.getField(UNIT_RF_CAST_POINT) as number;
        const castBackSwing = caster.getField(UNIT_RF_CAST_BACK_SWING) as number;

        const dummy = createDummy('MulticastNoTarget', caster.owner, caster.x, caster.y, caster, 999, caster.facing);
        dummy.setflyHeight(caster.getflyHeight(), 0);
        dummy.skin = caster.skin;
        const scale = (caster.getField(UNIT_RF_SCALING_VALUE) as number);
        dummy.setScale(scale, scale, scale);
        dummy.setVertexColor(255, 255, 0, 128);
        dummy.setField(UNIT_RF_CAST_POINT, castPoint);
        dummy.addAbility(abiId);
        dummy.setAbilityLevel(abiId, abiLevel);
        dummy.setAbilityCooldown(abiId, abiLevel - 1, 0);
        BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 99999);

        growUnit(dummy, scale * 1.5, this.Data.REPEAT_CAST * castPoint);
        const targetLoc = GetSpellTargetLoc();

        const dummyCast = () => {
          dummy.issueImmediateOrder(order);
        };

        let castRemain = this.Data.REPEAT_CAST;
        dummyCast();

        let tLimitDuration = 2 * (castPoint + castBackSwing);
        if (abiId === FourCC(ABILITY_BladeMasterBladestorm.code)) {
          tLimitDuration = BlzGetAbilityRealLevelField(caster.getAbility(abiId), ABILITY_RLF_DURATION_NORMAL, abiLevel - 1);
        }

        buildTrigger((t2) => {
          let tLimit = Timer.create();
          const startCleanUp = () => {
            t2.destroy();
            tLimit.pause();
            tLimit.destroy();
            RemoveLocation(targetLoc);
            fadeUnit(dummy, 255, 255, 0, 128, 128 / (castPoint + castBackSwing + 0.1), () => false, () => {
              dummy.destroy();
            });
          };

          tLimit.start(tLimitDuration, false, () => startCleanUp());
          t2.registerUnitEvent(dummy, EVENT_UNIT_SPELL_ENDCAST);
          t2.addAction(() => {
            tLimit.pause();
            tLimit.destroy();
            tLimit = Timer.create();
            tLimit.start(tLimitDuration, false, () => startCleanUp());
            castRemain--;
            setTimeout(0, () => dummyCast());
            if (castRemain <= 1) {
              startCleanUp();
            }
          });
        });
      });
    });
  }
}
