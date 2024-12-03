import { ABILITY_ID_DEATH_COIL_LICH_KING } from 'lib/constants';
import { Angle, PolarProjection } from 'lib/location';
import { ABILITY_BloodMageSiphonMana } from 'lib/resources/war3-abilities';
import { getSpellType } from 'lib/spell';
import { buildTrigger } from 'lib/trigger';
import {
  createDummy, enumUnitsWithDelay, getUnitScale, getUnitsInRangeOfLoc, isBuilding, isDummy,
  isWard,
  makeFlyable,
  setUnitScale,
  tieUnitToUnit,
} from 'lib/unit';
import { Trigger, Unit } from 'w3ts';

export class MulticastUnit {
  static Data = {
    getEffectRadius: (): number => (500),
  };

  static register(registeredAbilityId?: number, registeredCaster?: Unit, singleDummy: boolean = true): Trigger {
    return buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (registeredAbilityId) {
        t.addCondition(() => GetSpellAbilityId() === registeredAbilityId);
      }
      if (registeredCaster) {
        t.addCondition(() => GetSpellAbilityUnit() === registeredCaster.handle);
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

        const nearby = getUnitsInRangeOfLoc(
          radius,
          target,
          (u) => u.isAlive()
            && u !== caster
            && !isBuilding(u)
            && !isWard(u)
            && u !== target,
        );

        const backSwing = caster.getField(UNIT_RF_CAST_BACK_SWING) as number;

        const dummyCastDuration = abilityId === ABILITY_BloodMageSiphonMana.id
          ? BlzGetAbilityRealLevelField(caster.getAbility(abilityId), ABILITY_RLF_DURATION_NORMAL, abilityLevel - 1)
          : 0.25;

        const delayPerCast = nearby.length > 0 ? Math.max(0.05, Math.min(0.3, backSwing / nearby.length)) : 0.3;

        let dummy: Unit;
        if (singleDummy) {
          dummy = this.createDummyWithAbility(caster, Math.max(dummyCastDuration, delayPerCast * nearby.length + 0.25), abilityId, abilityLevel);
          tieUnitToUnit(dummy, caster);
        }

        enumUnitsWithDelay(nearby, (unit) => {
          if (!singleDummy || !dummy || abilityId === ABILITY_ID_DEATH_COIL_LICH_KING) {
            dummy = this.createDummyWithAbility(caster, dummyCastDuration, abilityId, abilityLevel);
          }

          if (abilityId === ABILITY_ID_DEATH_COIL_LICH_KING) {
            const loc = PolarProjection(caster, GetRandomReal(300, 400), 2 * Angle(caster, target) - Angle(caster, unit) + 180);
            dummy.x = loc.x;
            dummy.y = loc.y;
            makeFlyable(dummy);
            dummy.setflyHeight(GetRandomReal(caster.defaultFlyHeight + 200, caster.defaultFlyHeight + 400), 0);
          }

          dummy.issueTargetOrder(order, unit);
        }, delayPerCast);
      });
    });
  }

  private static createDummyWithAbility(
    caster: Unit,
    duration: number,
    abiId: number,
    abiLevel: number,
  ): Unit {
    const dummy = createDummy(caster.owner, caster.x, caster.y, caster, duration, caster.facing);
    dummy.setflyHeight(caster.getflyHeight(), 0);
    dummy.addAbility(abiId);
    dummy.setAbilityLevel(abiId, abiLevel);
    setUnitScale(dummy, getUnitScale(caster));
    BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_COOLDOWN, abiLevel - 1, 0);
    BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 999999);
    tieUnitToUnit(dummy, caster);
    return dummy;
  }
}
