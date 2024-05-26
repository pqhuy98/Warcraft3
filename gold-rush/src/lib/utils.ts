import { getElapsedTime } from 'w3ts';

export function pickRandom<T>(bag: T[]): T {
  return bag[GetRandomInt(0, bag.length - 1)];
}

type Timing = {
  threshold: number;
  duration: number;
}

/**
* A trailing debounce function. After `threshold` calls occur within
* `duration`, further calls do not occur.
* @param timing Object describing the rules of the debounce.
* @param timing.threshold The count of calls that can occur before rejecting
*                         more.
* @param timing.duration The sliding window in which the debounce operates.
* @param fn The call that will be invoked if the call is not rejected.
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <A extends any[], B>(
  { threshold, duration }: Timing,
  fn: (...args: A) => B,
): ((...args: A) => B | undefined) => {
  const memory: Record<string, number[]> = {};

  return (...args: A): B | undefined => {
    const now = getElapsedTime();

    const key = args.join(' ');

    const record = memory[key] || (memory[key] = []);
    record.push(now);

    while (record[0] != null && record[0] <= now - duration) { record.shift(); }

    if (record.length > threshold) return undefined;

    return fn(...args);
  };
};
