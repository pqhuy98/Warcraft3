import { log } from 'lib/log';

export const k: Record<string, number> = {};

export function k0(key: string) {
  k[key] = (k[key] ?? 0) + 1;
}

export function k1(key: string) {
  k[key] = (k[key] ?? 0) - 1;
}

export function logDiscrepancy() {
  let zeroCount = 0;
  for (const key of Object.keys(k)) {
    if (k[key] > 0) {
      log('Key', key, k[key]);
      zeroCount++;
    }
  }
  log('Zero keys', zeroCount);
}
