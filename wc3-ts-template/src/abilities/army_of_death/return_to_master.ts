import {
  RETURN_DISTANCE, REVIVED_ALPHA, REVIVED_BLUE, REVIVED_GREEN, REVIVED_RED,
} from 'abilities/army_of_death/constants';
import { State } from 'abilities/army_of_death/store';
import { MODEL_UndeadDissipate } from 'resources/war3-models';
import { getUnitLocation, locX, locY } from 'utils/location';
import {
  angleBetweenUnits, distanceBetweenUnits, fadeUnit, unitPolarProjection,
} from 'utils/unit';
import { Timer, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals/order';

export function returnToMaster(s: State) {
  const t1 = new Timer();
  const TICK_PER_SEC = 30;
  const RETURN_SPEED_PER_TICK = 300.0 / TICK_PER_SEC;
  t1.start(1.0 / TICK_PER_SEC, true, () => {
    // Do not return when activated.
    if (s.activated) return;

    s.revivedGroup.for(() => {
      const revived = Unit.fromEnum();
      if (distanceBetweenUnits(revived, s.master) <= RETURN_DISTANCE) {
        const loc = getUnitLocation(revived);
        const effect = AddSpecialEffectLoc(MODEL_UndeadDissipate, loc);
        DestroyEffect(effect);
        RemoveLocation(loc);
        s.revivedGroup.removeUnit(revived);
        s.revivedGroupHidden.addUnit(revived);
        revived.paused = true;

        fadeUnit(
          revived,
          REVIVED_RED,
          REVIVED_GREEN,
          REVIVED_BLUE,
          REVIVED_ALPHA,
          REVIVED_ALPHA,
          () => s.activated,
          () => {
            revived.x = 11800;
            revived.y = 11800;
          },
        );
      } else {
        const newLoc = unitPolarProjection(revived, RETURN_SPEED_PER_TICK, angleBetweenUnits(revived, s.master));
        revived.x = locX(newLoc);
        revived.y = locY(newLoc);
        RemoveLocation(newLoc);
      }
    });
  });

  const t2 = new Timer();
  t2.start(0.3, true, () => {
    if (s.activated) return;

    s.revivedGroup.for(() => {
      if (GetRandomInt(1, 3) !== 1) return;
      const revived = Unit.fromEnum();
      revived.issueOrderAt(OrderId.Move, s.master.x, s.master.y);
    });
  });
}
