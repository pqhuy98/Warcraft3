import { Unit } from 'w3ts';

/* eslint-disable no-bitwise */
export enum Flag {
  FROSTMOURNE_SOUL_HARVESTED = 1 << 0
}

export function checkUnitFlag(unit: Unit, flag: Flag): boolean {
  return (unit.userData & flag) > 0;
}

export function setUnitFlag(unit: Unit, flag: Flag, value: boolean) {
  if (value) {
    unit.userData |= flag;
  } else {
    unit.userData &= (~flag);
  }
}
