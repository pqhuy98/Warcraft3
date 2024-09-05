import { Destructable } from 'w3ts';

import { DistanceBetweenLocs, Loc } from './location';

export function getDestructablesInRect(rect: rect, filter?: (d: Destructable) => boolean) {
  const result: Destructable[] = [];
  EnumDestructablesInRectAll(rect, () => {
    const des = Destructable.fromHandle(GetEnumDestructable());
    if (filter == null || filter(des)) {
      result.push(des);
    }
  });
  return result;
}

export function getDestructablesInRange(range: number, loc: Loc, filter?: (d: Destructable) => boolean) {
  const rect = Rect(loc.x - range, loc.y - range, loc.x + range, loc.y + range);
  const result = getDestructablesInRect(rect, (d) => DistanceBetweenLocs(loc, d) <= range && filter(d));
  RemoveRect(rect);
  return result;
}
