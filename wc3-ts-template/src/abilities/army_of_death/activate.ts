import { OrderId } from 'w3ts/globals/order';
import {
  FOLLOW_DISTANCE, REVIVED_RED, REVIVED_GREEN, REVIVED_BLUE, REVIVED_ALPHA, FOLLOW_MOVEMENT_SPEED,
} from 'abilities/army_of_death/constants';
import { Unit } from 'w3ts';
import { buildTrigger } from 'utils/trigger';
import { Store } from 'abilities/army_of_death/store';
import { getUnitLocation } from 'utils/location';

function activate(s: Store) {
  s.activated = true;
  const loc = getUnitLocation(s.master);
  s.revivedGroupHidden.for(() => {
    const revived = Unit.fromEnum();
    s.revivedGroupHidden.removeUnit(revived);
    s.revivedGroup.addUnit(revived);
  });
  s.revivedGroup.for(() => {
    const revived = Unit.fromEnum();
    revived.paused = false;
    revived.mana = revived.maxMana;
    revived.setPathing(false);
    revived.setPosition(s.master.x, s.master.y);
    revived.setVertexColor(REVIVED_RED, REVIVED_GREEN, REVIVED_BLUE, REVIVED_ALPHA);
    revived.acquireRange = 2 * FOLLOW_MOVEMENT_SPEED;

    const newLoc = PolarProjectionBJ(loc, GetRandomReal(100, FOLLOW_DISTANCE), GetRandomDirectionDeg());
    revived.issueOrderAt(OrderId.Move, GetLocationX(newLoc), GetLocationY(newLoc));
    RemoveLocation(newLoc);
  });
  RemoveLocation(loc);
  s.activateUntil.start(s.activatedDuration, false, () => deactivate(s));
}

function deactivate(s: Store) {
  s.activated = false;
  s.activateUntil.pause();
  // Must get back to master
  s.revivedGroup.for(() => {
    const revived = Unit.fromEnum();
    revived.acquireRange = 0;
    revived.issueTargetOrder('move', s.master);
  });
}

export function onActivate(s:Store) {
  buildTrigger((t) => {
    t.registerUnitEvent(s.master, EVENT_UNIT_SPELL_EFFECT);
    t.addCondition(() => GetSpellAbilityId() === s.abilityId);
    t.addAction(() => {
      if (!s.activated) {
        activate(s);
      } else {
        deactivate(s);
      }
    });
  });
}
