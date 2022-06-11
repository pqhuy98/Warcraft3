import { Unit } from 'w3ts';
import { buildTrigger, setInterval } from 'utils/trigger';
import { ABILITY_ID_LOCUST, UNIT_ID_DUMMY } from 'utils/constants';
import { getUnitLocation, locX, locY } from 'utils/location';
import { fadeUnit } from 'utils/unit';

export class MulticastNoTarget {
  static register(abilityId?: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      t.addAction(() => {
        const abiId = GetSpellAbilityId();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abiLevel = GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()) - 1;
        const order = GetUnitCurrentOrder(caster.handle);

        if (caster.typeId === UNIT_ID_DUMMY) return;

        const loc = getUnitLocation(caster);
        const castPoint = caster.getField(UNIT_RF_CAST_POINT) as number;
        const castBackSwing = caster.getField(UNIT_RF_CAST_BACK_SWING) as number;

        const dummy = new Unit(caster.owner, UNIT_ID_DUMMY, locX(loc), locY(loc), caster.facing);
        dummy.addAbility(ABILITY_ID_LOCUST);
        dummy.setPathing(false);
        dummy.setflyHeight(caster.getflyHeight(), 0);
        dummy.skin = caster.skin;
        const scale = 1.5 * (caster.getField(UNIT_RF_SCALING_VALUE) as number);
        dummy.setScale(scale, scale, scale);
        dummy.setVertexColor(255, 255, 0, 128);
        dummy.setField(UNIT_RF_CAST_POINT, castPoint);
        dummy.addAbility(abiId);
        dummy.setAbilityLevel(abiId, abiLevel);
        dummy.setAbilityCooldown(abiId, abiLevel - 1, 0);
        dummy.color = PLAYER_COLOR_YELLOW;
        RemoveLocation(loc);

        // print(caster.getField(UNIT_RF_CAST_POINT), dummy.getField(UNIT_RF_CAST_POINT));

        setInterval(castPoint + 0.01, () => {
          IssueImmediateOrderById(dummy.handle, order);
        }, 2, () => {
          fadeUnit(dummy, 255, 255, 0, 128, 128 / (castPoint + castBackSwing), () => false, () => dummy.destroy());
        });
      });
    });
  }
}
