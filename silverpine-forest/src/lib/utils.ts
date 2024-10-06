/* eslint-disable no-bitwise */
import { getElapsedTime, sleep } from 'w3ts';

import { playerMain } from './constants';

export function pickRandom<T>(array: readonly T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array[GetRandomInt(0, array.length - 1)];
}

export function pickRandomMany<T>(array: T[], n: number): T[] {
  const len = array.length;
  if (n >= len) {
    return [...array]; // Return a copy of the entire array if n >= array length
  }

  // Create a shallow copy of the array to avoid mutating the original
  const copy = [...array];

  // Partial Fisher-Yates Shuffle on the copied array: Only shuffle the first n elements
  for (let i = 0; i < n; i++) {
    const randomIndex = i + Math.floor(Math.random() * (len - i));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]]; // Swap elements
  }

  // Return the first n shuffled elements from the copy
  return copy.slice(0, n);
}

export function pickRandomWeighted<T>(allOptions: [T, number][]): T | null {
  // Filter out non-positive weight entries
  const validOptions: [T, number][] = allOptions.filter((option) => option[1] > 0);

  // If there are no valid options, return null
  if (validOptions.length === 0) {
    return null;
  }

  // Sum up the weights
  const totalWeight = validOptions.reduce((sum, [, weight]) => sum + weight, 0);

  // Generate a random number between 0 and totalWeight
  const randomNumber = Math.random() * totalWeight;

  // Select the option based on the random number
  let cumulativeWeight = 0;
  for (const [option, weight] of validOptions) {
    cumulativeWeight += weight;
    if (randomNumber < cumulativeWeight) {
      return option;
    }
  }

  // Should not reach here if the function logic is correct
  return null;
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
export const debounce = <A extends unknown[], B>(
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

export function shuffleArray<T>(array: T[], coefficient: number = 1): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    if (Math.random() < coefficient) {
      // Generate a random number between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));

      // Swap the elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
}

export function classic(resourcePath: string): string {
  return `war3.w3mod:${resourcePath}`;
}

export function reforged(resourcePath: string): string {
  return `_hd.w3mod:${resourcePath}`;
}

export function isReforgedForcefully(resourcePath: string): boolean {
  return resourcePath.startsWith('_hd.w3mod:');
}

/**
 * @returns true if predicate happened, false if timed out.
 */
export async function waitUntil(interval: number, predicate: (idx: number) => boolean, timeout?: number): Promise<void> {
  let duration = 0;
  let counter = 0;
  while (!predicate(counter)) {
    counter++;
    await sleep(interval);
    duration += interval;
    if (timeout && duration > timeout) {
      return;
    }
  }
}

export function reverseFourCC(code: number): string {
  // Extract each character from the 32-bit integer
  const char1 = String.fromCharCode((code >>> 24) & 0xFF);
  const char2 = String.fromCharCode((code >>> 16) & 0xFF);
  const char3 = String.fromCharCode((code >>> 8) & 0xFF);
  const char4 = String.fromCharCode(code & 0xFF);

  // Combine the characters into a string
  return char1 + char2 + char3 + char4;
}

export function numberToOrdinal(i: number): string {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
}

export function range(n: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < n; i++) arr.push(i);
  return arr;
}

export function rangeBetween(l: number, r: number): number[] {
  const arr: number[] = [];
  for (let i = l; i <= r; i++) arr.push(i);
  return arr;
}

export const METAKEY_SHIFT = 1 << 0;
export const METAKEY_CONTROL = 1 << 1;
export const METAKEY_ALT = 1 << 2;
export const METAKEY_WINDOWS = 1 << 3;

export function unique<T>(arr: T[]): T[] {
  const seen = new Set<T>();
  const result: T[] = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

export class AsyncQueue {
  private queue: (() => Promise<unknown>)[] = [];

  private jobNames: string[] = [];

  private running: boolean = false;

  // Method to add a job to the queue and automatically start processing if not already running
  addJob(job: () => Promise<unknown>, jobName: string): void {
    this.queue.push(job);
    this.jobNames.push(jobName);

    // If there is no job currently running, trigger the processing of the queue
    if (!this.isRunning()) {
      void this.processQueue();
    }
  }

  // Internal method to process the queue
  private async processQueue(): Promise<void> {
    this.running = true;
    while (this.queue.length > 0) {
      const currentJob = this.queue.shift();
      const currentJobName = this.jobNames.shift();
      if (currentJob) {
        try {
          await currentJob();
        } catch (error) {
          DisplayTextToPlayer(playerMain.handle, 0, 0, `ASync queue job ${currentJobName} failed.`);
        }
        await sleep(0.25);
      }
    }
    this.running = false;
  }

  pendingCount(): number {
    return this.queue.length;
  }

  isRunning(): boolean {
    return this.running;
  }

  // Method to print all job names in the queue
  getJobNames(): string[] {
    return [...this.jobNames];
  }
}
