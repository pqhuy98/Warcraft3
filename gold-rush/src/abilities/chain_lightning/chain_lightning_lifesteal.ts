import { buildTrigger } from 'lib/trigger';
import { getDummyMaster } from 'lib/unit';

export class ChainLightningLifesteal {
  static register(abilityId: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED);
      t.addCondition(() => getDummyMaster(GetEventDamageSource()).getAbilityLevel(abilityId) > 0
        && !IsUnitAlly(BlzGetEventDamageTarget(), GetOwningPlayer(GetEventDamageSource())));
      t.addAction(() => {
        const sourceUnit = getDummyMaster(GetEventDamageSource());
        const heal = GetEventDamage() * 0.015 * sourceUnit.getAbilityLevel(abilityId);
        sourceUnit.life += heal;
      });
    });
  }
}
