import { Timer, Trigger } from 'w3ts';

export function buildTrigger(wrapper: (t: Trigger) => void): Trigger {
  const t = Trigger.create();
  wrapper(t);
  return t;
}

export function setTimeout(durationS: number, callback: () => void): Timer {
  const t = new Timer();
  t.start(durationS, false, () => {
    callback();
    t.pause();
    t.destroy();
  });
  return t;
}

function setInterval(
  intervalS: number,
  callback: (index: number, repeat: number) => void,
  repeat?: number,
  cleanup?: () => void,
): Timer {
  const timer = new Timer();
  if (repeat !== undefined) {
    let remain = repeat;
    if (remain <= 0) {
      timer.destroy();
      return timer;
    }
    callback(repeat - remain, repeat);
    remain--;
    if (remain <= 0) {
      timer.destroy();
      return timer;
    }
    timer.start(intervalS, true, () => {
      callback(repeat - remain, repeat);
      remain--;
      if (remain <= 0) {
        timer.pause();
        timer.destroy();
        cleanup();
      }
    });
  } else {
    let index = 0;
    callback(index, -1);
    timer.start(intervalS, true, () => {
      index++;
      callback(index, -1);
    });
  }
  return timer;
}

export function setIntervalIndefinite(
  intervalS: number,
  callback: (index: number, repeat: number) => void,
): Timer {
  return setInterval(intervalS, callback);
}

export function setIntervalFixedCount(
  intervalS: number,
  repeatCount: number,
  callback: (index: number, repeat: number) => void,
  cleanup?: () => void,
): Timer {
  return setInterval(intervalS, callback, repeatCount, cleanup);
}

export function setIntervalForDuration(
  intervalS: number,
  durationS: number,
  callback: (index: number, repeat: number) => void,
  cleanup?: () => void,
): Timer {
  return setInterval(intervalS, callback, durationS / intervalS, cleanup);
}
