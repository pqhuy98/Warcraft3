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

export function trimLocationArrayToLength(arr: location[], maxLength: number, callback?: (removedItems: location[]) => void): location[] {
  if (maxLength < 0) {
    throw new Error("maxLength can't be negative");
  }

  if (arr.length > maxLength) {
    const itemsToRemove = arr.length - maxLength;

    // Remove the items and store them in a variable
    const removedItems = arr.splice(0, itemsToRemove);

    // If a callback function is provided, call it with the removed items
    if (callback) {
      callback(removedItems);
    }
  }

  return arr;
}
