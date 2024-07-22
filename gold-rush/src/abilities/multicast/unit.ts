import { syncDummyAbilityEffectRange, toScale as _toScale } from 'events/small_unit_model/small_unit_model.constant';
import { getUnitXY } from 'lib/location';
import { ABILITY_BloodMageSiphonMana } from 'lib/resources/war3-abilities';
import { getSpellType } from 'lib/spell';
import { buildTrigger } from 'lib/trigger';
import {
  createDummy, enumUnitsWithDelay, getUnitScale, GetUnitsInRangeOfXYMatching, isBuilding, isDummy,
  isWard,
  setUnitScale,
  tieUnitToUnit,
} from 'lib/unit';
import { Unit } from 'w3ts';

const shouldScaleAbility = false;
function toScale(value: number) {
  return shouldScaleAbility ? _toScale(value) : value;
}

export class MulticastUnit {
  static Data = {
    getEffectRadius: () => toScale(500),
  };

  static register(abilityId?: number, caster?: Unit, singleDummy: boolean = true) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      if (caster) {
        t.addCondition(() => GetSpellAbilityUnit() === caster.handle);
      }
      t.addCondition(() => {
        const caster = GetSpellAbilityUnit();
        return getSpellType().onUnit
          && !isDummy(Unit.fromHandle(GetSpellAbilityUnit()))
          && !IsUnitOwnedByPlayer(caster, Player(PLAYER_NEUTRAL_AGGRESSIVE));
      });
      t.addAction(() => {
        const radius = this.Data.getEffectRadius();

        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const target = Unit.fromHandle(GetSpellTargetUnit());
        const abilityId = GetSpellAbilityId();
        const abilityLevel = caster.getAbilityLevel(abilityId);
        const order = caster.currentOrder;

        const loc = getUnitXY(target);

        const nearby = GetUnitsInRangeOfXYMatching(radius, loc, () => {
          const u = Unit.fromFilter();
          return u.isAlive()
            && u !== caster
            && !isBuilding(u)
            && !isWard(u)
            && u !== target;
        });

        const backSwing = caster.getField(UNIT_RF_CAST_BACK_SWING) as number;

        const dummyCastDuration = abilityId === FourCC(ABILITY_BloodMageSiphonMana.code)
          ? BlzGetAbilityRealLevelField(caster.getAbility(abilityId), ABILITY_RLF_DURATION_NORMAL, abilityLevel - 1)
          : 0.25;

        const delayPerCast = nearby.length > 0 ? Math.max(0.05, Math.min(0.3, backSwing / nearby.length)) : 0.3;

        let dummy: Unit;
        if (singleDummy) {
          dummy = this.createDummyWithAbility(caster, Math.max(dummyCastDuration, delayPerCast * nearby.length + 0.25), abilityId, abilityLevel);
          tieUnitToUnit(dummy, caster)
        }

        enumUnitsWithDelay(nearby, (unit) => {
          if (!singleDummy || !dummy) {
            dummy = this.createDummyWithAbility(caster, dummyCastDuration, abilityId, abilityLevel);
          }

          dummy.issueTargetOrder(order, unit);
        }, delayPerCast);
      });
    });
  }

  private static createDummyWithAbility(caster: Unit, duration: number, abiId: number, abiLevel: number) {
    const dummy = createDummy(caster.owner, caster.x, caster.y, caster, duration, caster.facing);
    dummy.addAbility(abiId);
    dummy.setAbilityLevel(abiId, abiLevel);
    setUnitScale(dummy, getUnitScale(caster));
    BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_COOLDOWN, abiLevel - 1, 0);
    BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 999999);
    syncDummyAbilityEffectRange(dummy, caster, abiId, abiLevel);
    return dummy;
  }
}
