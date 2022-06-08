import { Trigger, Unit } from 'w3ts';

export function buildTrigger(wrapper: (t: Trigger) => void): Trigger {
  const t = new Trigger();
  wrapper(t);
  return t;
}

const removeOnDeathTrigger = buildTrigger((t) => {
  t.addAction(() => RemoveUnit(GetDyingUnit()));
});

export function removeOnDeath(whichUnit: Unit) {
  removeOnDeathTrigger.registerUnitEvent(whichUnit, EVENT_UNIT_DEATH);
}
