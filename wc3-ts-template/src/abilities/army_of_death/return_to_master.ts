import { Timer, Unit } from 'w3ts';
import { Store } from 'abilities/army_of_death/store';
import { distanceBetweenUnits, fadeUnit } from 'utils/unit';
import { getUnitLocation } from 'utils/location';
import {
  RETURN_DISTANCE, RETURN_EFFECT_STRING, REVIVED_ALPHA, REVIVED_BLUE, REVIVED_GREEN, REVIVED_RED,
} from 'abilities/army_of_death/constants';

export function returnToMaster(s: Store) {
  const t1 = new Timer();
  t1.start(0.25, true, () => {
    // Do not return when activated.
    if (s.activated) return;

    s.revivedGroup.for(() => {
      const revived = Unit.fromEnum();

      if (distanceBetweenUnits(revived, s.master) <= RETURN_DISTANCE) {
        const loc = getUnitLocation(revived);
        const effect = AddSpecialEffectLoc(RETURN_EFFECT_STRING, loc);
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
      } else if (GetRandomInt(1, 4) === 1) {
        revived.issueTargetOrder('move', s.master);
      }
    });
  });
}
