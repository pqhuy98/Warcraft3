import { syncDummyAbilityEffectRange } from 'events/small_unit_model/small_unit_model.constant';
import { k0, k1 } from 'lib/debug/key_counter';
import { PolarProjection } from 'lib/location';
import { ABILITY_BladeMasterBladestorm } from 'lib/resources/war3-abilities';
import { getSpellType } from 'lib/spell';
import { buildTrigger, setTimeout } from 'lib/trigger';
import {
  createDummy, fadeUnit, getUnitScale, growUnit, isDummy,
  safeRemoveDummy,
  setUnitScale,
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

  static register(abilityId?: number, specificCaster?: Unit) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => !isDummy(Unit.fromHandle(GetSpellAbilityUnit()))
        && getSpellType().noTarget
        && IsHeroUnitId(GetUnitTypeId(GetSpellAbilityUnit()))
        && isNotMorphAbility());
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      if (specificCaster) {
        t.addCondition(() => GetSpellAbilityUnit() === specificCaster.handle);
      }
      t.addAction(() => {
        k0('mcnt');
        const abiId = GetSpellAbilityId();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const ability = caster.getAbility(abiId);
        const abiLevel = caster.getAbilityLevel(abiId);
        let order = caster.currentOrder;
        if (abiId === FourCC(ABILITY_BladeMasterBladestorm.code)) order = OrderId.Whirlwind;

        const castPoint = caster.getField(UNIT_RF_CAST_POINT) as number;
        const castBackSwing = caster.getField(UNIT_RF_CAST_BACK_SWING) as number;

        const dummy = createDummy(caster.owner, caster.x, caster.y, caster, 999, caster.facing);
        dummy.setflyHeight(caster.getflyHeight(), 0);
        dummy.skin = caster.skin;
        const scale = getUnitScale(caster);
        setUnitScale(dummy, scale);
        dummy.setVertexColor(255, 255, 0, 128);
        dummy.setField(UNIT_RF_CAST_POINT, castPoint);
        dummy.addAbility(abiId);
        dummy.setAbilityLevel(abiId, abiLevel);
        dummy.setAbilityCooldown(abiId, abiLevel - 1, 0);
        BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 99999);
        syncDummyAbilityEffectRange(dummy, caster, abiId, abiLevel);

        growUnit(dummy, scale * 1.5, this.Data.REPEAT_CAST * castPoint);
        const targetLoc = GetSpellTargetLoc();

        const dummyCast = () => {
          dummy.issueImmediateOrder(order);
        };

        let castRemain = this.Data.REPEAT_CAST;
        dummyCast();

        const fadeDuration = (castPoint + castBackSwing + 0.1);
        let tLimitDuration = 2 * (castPoint + castBackSwing) - fadeDuration;
        if (abiId === FourCC(ABILITY_BladeMasterBladestorm.code)) {
          tLimitDuration = BlzGetAbilityRealLevelField(ability, ABILITY_RLF_DURATION_NORMAL, abiLevel - 1) - fadeDuration;
          dummy.moveSpeed = 522;
          const patrolLoc = PolarProjection(dummy, 7 * 522 / 3, dummy.facing);
          dummy.issueOrderAt(OrderId.Patrol, patrolLoc.x, patrolLoc.y);
        }

        buildTrigger((t2) => {
          let tLimit = Timer.create();
          const startCleanUp = () => {
            t2.destroy();
            tLimit.pause();
            tLimit.destroy();
            RemoveLocation(targetLoc);
            k0('mcnt-f');
            fadeUnit(dummy, 255, 255, 0, 128, 128 / fadeDuration, () => false, () => {
              safeRemoveDummy(dummy);
              k1('mcnt-f');
            });
            k1('mcnt');
          };

          tLimit.start(tLimitDuration, false, () => startCleanUp());
          t2.registerUnitEvent(dummy, EVENT_UNIT_SPELL_ENDCAST);
          t2.addAction(() => {
            tLimit.pause();
            tLimit.destroy();
            tLimit = Timer.create();
            tLimit.start(tLimitDuration, false, () => startCleanUp());
            castRemain--;
            if (castRemain > 0) {
              setTimeout(0, () => dummyCast());
            }
            if (castRemain <= 1) {
              startCleanUp();
            }
          });
        });
      });
    });
  }
}
