import { getUnitXY } from 'lib/location';
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

  static register(abilityId?: number, caster?: Unit) {
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

        const ability = caster.getAbility(abiId);
        const castRange = BlzGetAbilityRealLevelField(ability, ABILITY_RLF_CAST_RANGE, abiLevel - 1);
        const loc = getUnitXY(target);

        const nearby = GetUnitsInRangeOfXYMatching(Math.min(500, castRange), loc, () => {
          const u = Unit.fromFilter();
          return u.isAlive()
            && u !== caster
            && !isBuilding(u)
            && !isWard(u)
            && u !== target;
        });

        const backSwing = caster.getField(UNIT_RF_CAST_BACK_SWING) as number;

        enumUnitsWithDelay(nearby, (unit) => {
          const dummy = createDummy(caster.owner, caster.x, caster.y, caster, 0.25, caster.facing);
          dummy.addAbility(abiId);
          dummy.setAbilityLevel(abiId, abiLevel);
          const scale = (caster.getField(UNIT_RF_SCALING_VALUE) as number);
          dummy.setScale(scale, scale, scale);
          BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_COOLDOWN, abiLevel - 1, 0);
          BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 999999);
          dummy.issueTargetOrder(order, unit);
        }, Math.min(0.3, backSwing / nearby.length));
      });
    });
  }
}
