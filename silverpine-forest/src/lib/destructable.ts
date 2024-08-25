import { Destructable } from 'w3ts';

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
