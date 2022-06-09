import { Unit } from 'w3ts';
import { buildTrigger } from 'utils/trigger';
import { ABILITY_ID_LOCUST, BUFF_ID_GENERIC, UNIT_ID_DUMMY } from 'utils/constants';
import { getUnitLocation } from 'utils/location';

export function multicastUnit() {
  buildTrigger((t) => {
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
    t.addCondition(() => {
      const caster = GetSpellAbilityUnit();
      return GetSpellTargetUnit() !== null
            && GetUnitTypeId(GetSpellAbilityUnit()) !== UNIT_ID_DUMMY
            && !IsUnitOwnedByPlayer(caster, Player(PLAYER_NEUTRAL_AGGRESSIVE));
    });
    t.addAction(() => {
      const caster = Unit.fromHandle(GetSpellAbilityUnit());
      const abilityId = GetSpellAbilityId();
      const abilityLevel = GetUnitAbilityLevel(caster.handle, abilityId);
      const order = OrderId2String(GetUnitCurrentOrder(caster.handle));

      const ability = BlzGetUnitAbility(caster.handle, abilityId);
      const castRange = BlzGetAbilityRealLevelField(ability, ABILITY_RLF_CAST_RANGE, abilityLevel - 1);
      const loc = getUnitLocation(caster);

      const nearby = GetUnitsInRangeOfLocMatching(Math.min(500, castRange), loc, Condition(() => {
        const u = Unit.fromFilter();
        return u.isAlive() && u.handle !== caster.handle && u.handle !== GetSpellTargetUnit();
      }));

      const dummy = new Unit(caster.owner, UNIT_ID_DUMMY, caster.x, caster.y, 0);
      dummy.applyTimedLife(BUFF_ID_GENERIC, 0.1);
      dummy.addAbility(abilityId);
      dummy.setAbilityLevel(abilityId, abilityLevel);
      dummy.addAbility(ABILITY_ID_LOCUST);
      BlzSetAbilityRealLevelField(BlzGetUnitAbility(dummy.handle, abilityId), ABILITY_RLF_COOLDOWN, abilityLevel - 1, 0);
      BlzSetAbilityRealLevelField(BlzGetUnitAbility(dummy.handle, abilityId), ABILITY_RLF_CAST_RANGE, abilityLevel - 1, 999999);

      ForGroup(nearby, () => {
        IssueTargetOrder(dummy.handle, order, GetEnumUnit());
      });

      RemoveLocation(loc);
      DestroyGroup(nearby);
    });
  });
}
