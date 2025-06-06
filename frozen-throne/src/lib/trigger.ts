import { Timer, Trigger } from 'w3ts';

import { k0, k1 } from './debug/key_counter';

export function buildTrigger(wrapper: (t: Trigger) => void): Trigger {
  const t = Trigger.create();
  wrapper(t);
  return t;
}

export function setTimeout(durationS: number, callback: () => unknown): Timer {
  const t = Timer.create();
  k0('setto');
  t.start(durationS, false, () => {
    t.pause();
    t.destroy();
    callback();
    k1('setto');
  });
  return t;
}

function setInterval(
  intervalS: number,
  callback: (index: number, timer: Timer) => unknown,
  repeat?: number,
  cleanup?: () => unknown,
): Timer {
  k0('setitv');
  const timer = Timer.create();
  if (repeat !== undefined) {
    let idx = 0;
    if (repeat <= 0) {
      timer.pause();
      timer.destroy();
      return timer;
    }
    setTimeout(0, () => callback(idx++, timer));
    timer.start(intervalS, true, () => {
      if (idx >= repeat) {
        timer.pause();
        timer.destroy();
        cleanup?.();
        k1('setitv');
      } else {
        callback(idx++, timer);
      }
    });
  } else {
    let index = 0;
    setTimeout(0, () => callback(index, timer));
    timer.start(intervalS, true, () => {
      index++;
      callback(index, timer);
    });
  }
  return timer;
}

export function setIntervalIndefinite(
  intervalS: number,
  callback: (index: number, timer: Timer) => unknown,
): Timer {
  return setInterval(intervalS, callback);
}

export function setIntervalFixedCount(
  intervalS: number,
  repeatCount: number,
  callback: (index: number, timer: Timer) => unknown,
  cleanup?: () => unknown,
): Timer {
  return setInterval(intervalS, callback, repeatCount, cleanup);
}

export function setIntervalForDuration(
  intervalS: number,
  durationS: number,
  callback: (index: number, timer: Timer) => unknown,
  cleanup?: () => unknown,
): Timer {
  return setInterval(intervalS, callback, durationS / intervalS, cleanup);
}

let infiniteTimer: Timer;

export function trackElapsedGameTime(): void {
  buildTrigger((t) => {
    t.registerTimerEvent(0.00, false);
    t.addAction(() => {
      infiniteTimer = Timer.create();
      infiniteTimer.start(1000000000.00, false, () => { });
    });
  });
}

export function getTimeS(): number {
  if (infiniteTimer) {
    return infiniteTimer.elapsed;
  }
  return 0;
}
