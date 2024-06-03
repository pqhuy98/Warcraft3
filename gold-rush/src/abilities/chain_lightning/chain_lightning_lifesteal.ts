import { buildTrigger } from 'lib/trigger';
import { getDamageSourceMaster } from 'lib/unit';
import { Unit } from 'w3ts';

export class ChainLightningLifesteal {
  static register(abilityId: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED);
      t.addCondition(() => GetUnitAbilityLevel(getDamageSourceMaster(GetEventDamageSource()), abilityId) > 0
        && !IsUnitAlly(BlzGetEventDamageTarget(), GetOwningPlayer(GetEventDamageSource())));
      t.addAction(() => {
        const sourceUnit = Unit.fromHandle(getDamageSourceMaster(GetEventDamageSource()));
        const heal = GetEventDamage() * 0.04 * sourceUnit.getAbilityLevel(abilityId);
        sourceUnit.life += heal;
      });
    });
  }
}
