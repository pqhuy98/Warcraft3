import { mainPlayer } from 'lib/constants';
import {
  AngleBetweenLocs, PolarProjection,
} from 'lib/location';
import { buildTrigger, setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { distanceBetweenUnits, isBuilding } from 'lib/unit';
import { MapPlayer, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

const targets = new Map<Unit, {
  facingToUnit: Unit,
  oldFacing: number
}>();

const nearDistance = 400;

export class UnitInteraction {
  static register() {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER);
      t.addCondition(() => {
        const target = Unit.fromHandle(GetOrderTargetUnit());
        return Unit.fromEvent().owner === mainPlayer
          && Unit.fromEvent().currentOrder === OrderId.Smart
          && target.owner.isPlayerAlly(Unit.fromEvent().owner)
          && target.isAlive()
          && !isBuilding(target)
          && !target.isUnitType(UNIT_TYPE_MECHANICAL);
      });
      t.addAction(() => {
        const unit = Unit.fromEvent();
        const target = Unit.fromHandle(GetOrderTargetUnit());
        if (distanceBetweenUnits(unit, target) < nearDistance && [OrderId.Stop, 0].includes(target.currentOrder)) {
          // neutral critters run away from you
          if (target.owner === MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE) && target.maxLife <= 15) {
            const runDest = PolarProjection(target, 400, AngleBetweenLocs(unit, target));
            target.issueOrderAt(OrderId.Move, runDest.x, runDest.y);
            const oldMoveSpeed = target.moveSpeed;
            target.moveSpeed *= 3;
            setTimeout(400 / target.moveSpeed, () => {
              target.moveSpeed = oldMoveSpeed;
            });
            return;
          }

          // Other allies face towards you
          const oldFacing = targets.get(target)?.oldFacing ?? target.facing;
          targets.set(target, {
            facingToUnit: unit,
            oldFacing,
          });
          ResetUnitAnimation(target.handle);
        }
      });
    });

    const interval = 0.5;
    setIntervalIndefinite(interval, () => {
      for (const [unit, { facingToUnit, oldFacing }] of targets) {
        const isIdle = [OrderId.Stop, 0].includes(unit.currentOrder);
        const shouldFace = distanceBetweenUnits(unit, facingToUnit) < nearDistance && isIdle && unit.isAlive();
        if (!shouldFace) {
          targets.delete(unit);
          if (isIdle && unit.isAlive()) {
            SetUnitFacingTimed(unit.handle, oldFacing, interval);
          }
        } else {
          SetUnitFacingToFaceUnitTimed(unit.handle, facingToUnit.handle, interval);
        }
      }
    });
  }
}
