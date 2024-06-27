import { buildTrigger } from 'lib/trigger';
import { getDummyMaster } from 'lib/unit';
import { Unit } from 'w3ts';

export class ChainLightningLifesteal {
  static register(abilityId: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED);
      t.addCondition(() => GetUnitAbilityLevel(getDummyMaster(GetEventDamageSource()), abilityId) > 0
        && !IsUnitAlly(BlzGetEventDamageTarget(), GetOwningPlayer(GetEventDamageSource())));
      t.addAction(() => {
        const sourceUnit = Unit.fromHandle(getDummyMaster(GetEventDamageSource()));
        const heal = GetEventDamage() * 0.005 * sourceUnit.getAbilityLevel(abilityId);
        sourceUnit.life += heal;
      });
    });
  }
}
