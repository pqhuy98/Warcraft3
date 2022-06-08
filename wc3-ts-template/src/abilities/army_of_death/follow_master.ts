import { Timer, Unit } from 'w3ts';
import { Store } from 'abilities/army_of_death/store';
import { distanceBetweenUnits } from 'utils/unit';
import { getUnitLocation } from 'utils/location';
import { FOLLOW_DISTANCE, FOLLOW_MOVEMENT_SPEED, RETURN_MOVEMENT_SPEED } from 'abilities/army_of_death/constants';

export function followMaster(s: Store) {
  const t1 = new Timer();
  t1.start(1, true, () => {
    // Do not keep distance when activated.
    if (!s.activated) return;

    const loc = getUnitLocation(s.master);
    s.revivedGroup.for(() => {
      const revived = Unit.fromEnum();
      if (distanceBetweenUnits(revived, s.master) <= FOLLOW_DISTANCE) {
        // Occasionally wandering around
        if (GetRandomInt(1, 8) !== 1) return;
        const newLoc = PolarProjectionBJ(loc, GetRandomReal(100, FOLLOW_DISTANCE), GetRandomDirectionDeg());
        revived.issueOrderAt('attack', GetLocationX(newLoc), GetLocationY(newLoc));
        RemoveLocation(newLoc);
        revived.moveSpeed = FOLLOW_MOVEMENT_SPEED;
      } else {
        // Must get close to master
        const newLoc = PolarProjectionBJ(loc, GetRandomReal(100, FOLLOW_DISTANCE), GetRandomDirectionDeg());
        revived.issueOrderAt('move', GetLocationX(newLoc), GetLocationY(newLoc));
        RemoveLocation(newLoc);
        revived.moveSpeed = RETURN_MOVEMENT_SPEED;
      }
    });
    RemoveLocation(loc);
  });
}
