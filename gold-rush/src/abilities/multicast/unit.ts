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

  static register(abilityId?: number, caster?: unit) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      if (caster) {
        t.addCondition(() => GetSpellAbilityUnit() === caster);
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
            && u.handle !== caster.handle
            && !isBuilding(u)
            && !isWard(u)
            && u.handle !== target.handle;
        });

        enumUnitsWithDelay(nearby, (unit) => {
          const dummy = createDummy('MulticastUnit', caster.owner, caster.x, caster.y, caster, 0.5, caster.facing);
          dummy.addAbility(abiId);
          dummy.setAbilityLevel(abiId, abiLevel);
          const scale = (caster.getField(UNIT_RF_SCALING_VALUE) as number);
          dummy.setScale(scale, scale, scale);
          BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_COOLDOWN, abiLevel - 1, 0);
          BlzSetAbilityRealLevelField(dummy.getAbility(abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 999999);
          dummy.issueTargetOrder(order, unit);
        }, Math.min(0.2, 0.5 / nearby.length));
      });
    });
  }
}
