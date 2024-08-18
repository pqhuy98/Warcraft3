import { temp } from 'lib/location';
import { buildTrigger } from 'lib/trigger';
import { getDummyMaster } from 'lib/unit';
import { Group, Unit } from 'w3ts';

export class ChainLightningLifesteal {
  static register(abilityId: number) {
    const trackedUnits = Group.create();

    const lifestealTrigger = buildTrigger((t) => {
      t.addCondition(() => getDummyMaster(GetEventDamageSource()).getAbilityLevel(abilityId) > 0
        && !IsUnitAlly(BlzGetEventDamageTarget(), GetOwningPlayer(GetEventDamageSource())));
      t.addAction(() => {
        const sourceUnit = getDummyMaster(GetEventDamageSource());
        const heal = GetEventDamage() * 0.015 * sourceUnit.getAbilityLevel(abilityId);
        sourceUnit.life += heal;
      });
    });

    buildTrigger((t) => {
      TriggerRegisterEnterRectSimple(t.handle, GetEntireMapRect());
      t.registerAnyUnitEvent(EVENT_PLAYER_HERO_SKILL);
      t.addCondition(() => Unit.fromEvent().getAbilityLevel(abilityId) > 0 && !trackedUnits.hasUnit(Unit.fromEvent()));
      t.addAction(() => {
        trackedUnits.addUnit(Unit.fromEvent());
        lifestealTrigger.registerUnitEvent(Unit.fromEvent(), EVENT_UNIT_DAMAGING);
      });
    });

    temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds()))).for(() => {
      if (Unit.fromEnum().getAbilityLevel(abilityId) > 0) {
        trackedUnits.addUnit(Unit.fromEnum());
        lifestealTrigger.registerUnitEvent(Unit.fromEnum(), EVENT_UNIT_DAMAGED);
      }
    });
  }
}
