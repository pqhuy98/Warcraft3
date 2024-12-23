import {
  centerLocRect, Destroyable, Loc,
} from 'lib/location';
import { ORDER_stop } from 'lib/resources/war3-orders';
import { buildTrigger, setTimeout } from 'lib/trigger';
import { Unit } from 'w3ts';

export function creatWormHole(
  rect1: rect,
  rect2: rect,
  filter: (unit: Unit) => boolean,
  onEnterRect1?: (unit: Unit, futureLoc: Loc) => unknown,
  onMoveToRect2?: (unit: Unit) => unknown,
  onEnterRect2?: (unit: Unit, futureLoc: Loc) => unknown,
  onMoveToRect1?: (unit: Unit) => unknown,
  delay: number = 0,
): Destroyable {
  const throttleMap1 = new Set<Unit>();
  const throttleMap2 = new Set<Unit>();

  const t1 = buildTrigger((t) => {
    TriggerRegisterEnterRectSimple(t.handle, rect1);
    t.addCondition(() => !throttleMap1.has(Unit.fromEvent()) && (!filter || filter(Unit.fromEvent())));
    t.addAction(() => {
      const unit = Unit.fromEvent();
      const dest = centerLocRect(rect2);
      if (onEnterRect1) {
        onEnterRect1(unit, dest);
      }
      setTimeout(delay, () => {
        throttleMap2.add(unit);
        setTimeout(1, () => throttleMap2.delete(unit));
        unit.issueImmediateOrder(ORDER_stop);
        unit.x = dest.x;
        unit.y = dest.y;

        if (onMoveToRect2) {
          onMoveToRect2(unit);
        }
      });
    });
  });

  const t2 = buildTrigger((t) => {
    TriggerRegisterEnterRectSimple(t.handle, rect2);
    t.addCondition(() => !throttleMap2.has(Unit.fromEvent()) && (!filter || filter(Unit.fromEvent())));
    t.addAction(() => {
      const unit = Unit.fromEvent();
      const dest = centerLocRect(rect1);
      if (onEnterRect2) {
        onEnterRect2(unit, dest);
      }
      setTimeout(delay, () => {
        throttleMap1.add(unit);
        setTimeout(1, () => throttleMap1.delete(unit));
        unit.issueImmediateOrder(ORDER_stop);
        unit.x = dest.x;
        unit.y = dest.y;

        if (onMoveToRect1) {
          onMoveToRect1(unit);
        }
      });
    });
  });

  return {
    destroy: (): void => {
      t1.destroy();
      t2.destroy();
    },
  };
}
