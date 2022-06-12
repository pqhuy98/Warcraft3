import { ABILITY_ID_LOCUST, BUFF_ID_GENERIC, UNIT_ID_DUMMY } from 'utils/constants';
import { getUnitLocation } from 'utils/location';
import { getSpellType } from 'utils/spell';
import { buildTrigger } from 'utils/trigger';
import { Unit } from 'w3ts';

export class MulticastUnit {
  static register() {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => {
        const caster = GetSpellAbilityUnit();
        return getSpellType().onUnit
            && GetUnitTypeId(GetSpellAbilityUnit()) !== UNIT_ID_DUMMY
            && !IsUnitOwnedByPlayer(caster, Player(PLAYER_NEUTRAL_AGGRESSIVE));
      });
      t.addAction(() => {
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const target = Unit.fromHandle(GetSpellTargetUnit());
        const abiId = GetSpellAbilityId();
        const abiLevel = GetUnitAbilityLevel(caster.handle, abiId);
        const order = OrderId2String(GetUnitCurrentOrder(caster.handle));

        const ability = BlzGetUnitAbility(caster.handle, abiId);
        const castRange = BlzGetAbilityRealLevelField(ability, ABILITY_RLF_CAST_RANGE, abiLevel - 1);
        const loc = getUnitLocation(target);

        const nearby = GetUnitsInRangeOfLocMatching(Math.min(300, castRange), loc, Condition(() => {
          const u = Unit.fromFilter();
          return u.isAlive()
            && u.handle !== caster.handle
            && u.handle !== target.handle;
        }));

        const dummy = new Unit(caster.owner, UNIT_ID_DUMMY, caster.x, caster.y, 0);
        dummy.applyTimedLife(BUFF_ID_GENERIC, 0.2);
        dummy.addAbility(abiId);
        dummy.setAbilityLevel(abiId, abiLevel);
        dummy.addAbility(ABILITY_ID_LOCUST);
        BlzSetAbilityRealLevelField(BlzGetUnitAbility(dummy.handle, abiId), ABILITY_RLF_COOLDOWN, abiLevel - 1, 0);
        BlzSetAbilityRealLevelField(BlzGetUnitAbility(dummy.handle, abiId), ABILITY_RLF_CAST_RANGE, abiLevel - 1, 999999);

        ForGroup(nearby, () => {
          IssueTargetOrder(dummy.handle, order, GetEnumUnit());
        });

        RemoveLocation(loc);
        DestroyGroup(nearby);
      });
    });
  }
}
