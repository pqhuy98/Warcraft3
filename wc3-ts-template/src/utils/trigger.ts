import { Timer, Trigger, Unit } from 'w3ts';

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

export function setTimeout(duration: number, callback: () => void): Timer {
  const t = new Timer();
  t.start(duration, false, () => {
    callback();
    t.pause();
    t.destroy();
  });
  return t;
}

export function setInterval(
  duration: number,
  callback: () => void,
  repeat?: number,
  cleanup?:()=>void,
): Timer {
  const t = new Timer();
  if (repeat !== undefined) {
    let remain = repeat;
    if (remain <= 0) {
      t.destroy();
      return t;
    }
    callback();
    remain--;
    if (remain <= 0) {
      t.destroy();
      return t;
    }
    t.start(duration, true, () => {
      callback();
      remain--;
      if (remain <= 0) {
        t.pause();
        t.destroy();
        cleanup();
      }
    });
  } else {
    callback();
    t.start(duration, true, callback);
  }
  return t;
}
