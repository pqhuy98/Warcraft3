import { getUnitXY } from 'lib/location';
import { ABILITY_BloodMageSiphonMana } from 'lib/resources/war3-abilities';
import { getSpellType } from 'lib/spell';
import { buildTrigger } from 'lib/trigger';
import {
  createDummy, enumUnitsWithDelay, GetUnitsInRangeOfXYMatching, isBuilding, isDummy,
  isWard,
} from 'lib/unit';
import { Unit } from 'w3ts';

export class MulticastUnit {
  static Data = {
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
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const target = Unit.fromHandle(GetSpellTargetUnit());
        const abiId = GetSpellAbilityId();
        const abiLevel = caster.getAbilityLevel(abiId);
        const order = caster.currentOrder;

        const loc = getUnitXY(target);

        const nearby = GetUnitsInRangeOfXYMatching(500, loc, () => {
          const u = Unit.fromFilter();
          return u.isAlive()
            && u !== caster
            && !isBuilding(u)
            && !isWard(u)
            && u !== target;
        });

        const backSwing = caster.getField(UNIT_RF_CAST_BACK_SWING) as number;

        const dummyDuration = abilityId === FourCC(ABILITY_BloodMageSiphonMana.code)
          ? BlzGetAbilityRealLevelField(caster.getAbility(abilityId), ABILITY_RLF_DURATION_NORMAL, abiLevel - 1)
          : (singleDummy ? Math.max(0.3 * nearby.length, backSwing) + 0.25 : 0.25);

        let dummy: Unit;
        if (singleDummy) {
          dummy = this.createDummyWithAbility(caster, dummyDuration, abiId, abiLevel);
        }

        enumUnitsWithDelay(nearby, (unit) => {
          if (!singleDummy || !dummy) {
            dummy = this.createDummyWithAbility(caster, dummyDuration, abiId, abiLevel);
          }

          dummy.issueTargetOrder(order, unit);
        }, Math.min(0.3, backSwing / nearby.length));
      });
    });
  }

  private static createDummyWithAbility(caster: Unit, duration: number, abiId: number, abiLevel: number) {
    const dummy = createDummy(caster.owner, caster.x, caster.y, caster, duration, caster.facing);
    dummy.addAbility(abiId);
    dummy.setAbilityLevel(abiId, abiLevel);
    const scale = (caster.getField(UNIT_RF_SCALING_VALUE) as number);
    dummy.setScale(scale, scale, scale);
    BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_COOLDOWN, abiLevel - 1, 0);
    BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 999999);
    return dummy;
  }
}
