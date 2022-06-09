import { Unit } from 'w3ts';

export function getUnitLocation(unit: Unit): location {
  return Location(unit.x, unit.y);
}

export function locX(loc:location):number {
  return GetLocationX(loc);
}

export function locY(loc:location):number {
  return GetLocationY(loc);
}
