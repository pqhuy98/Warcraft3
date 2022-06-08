import { Unit } from 'w3ts';

export function getUnitLocation(unit: Unit): location {
  return Location(unit.x, unit.y);
}
