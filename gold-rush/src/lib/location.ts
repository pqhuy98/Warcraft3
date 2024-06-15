import { Unit } from 'w3ts';

import { setIntervalIndefinite } from './trigger';

export const RAD_TO_ANGLE = 180 / Math.PI;

export interface Loc {
  x: number
  y: number
}

let tempLocations: location[] = [];
let nextTempLocations: location[] = [];

export function tempLocation(loc: Loc) {
  const tempLoc = Location(loc.x, loc.y);
  nextTempLocations.push(tempLoc);
  return tempLoc;
}

export function daemonTempLocationCleanUp() {
  setIntervalIndefinite(1, () => {
    for (const loc of tempLocations) {
      RemoveLocation(loc);
    }
    tempLocations = nextTempLocations;
    nextTempLocations = [];
  });
}

export function fromLocation(loc: location): Loc | undefined {
  if (loc == null) {
    return undefined;
  }
  return { x: GetLocationX(loc), y: GetLocationY(loc) };
}

export function getUnitXY(unit: Unit): Loc {
  return { x: unit.x, y: unit.y };
}

export function PolarProjection(loc: Loc, offset: number, angleDeg: number): Loc {
  return {
    x: loc.x + Math.cos(angleDeg / RAD_TO_ANGLE) * offset,
    y: loc.y + Math.sin(angleDeg / RAD_TO_ANGLE) * offset,
  };
}

/**
 * @return angle in degree
 */
export function AngleBetweenLocs(loc1: Loc, loc2: Loc) {
  return Math.atan2(loc2.y - loc1.y, loc2.x - loc1.x) * RAD_TO_ANGLE;
}

export function DistanceBetweenLocs(loc1: Loc, loc2: Loc) {
  const dx = loc2.x - loc1.x;
  const dy = loc2.y - loc1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function locX(loc: location): number {
  return GetLocationX(loc);
}

export function locY(loc: location): number {
  return GetLocationY(loc);
}
