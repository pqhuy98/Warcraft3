import { mainPlayer } from 'lib/constants';
import {
  AngleBetweenLocs, PolarProjection,
} from 'lib/location';
import { disableQuestMarker, enableQuestMarker } from 'lib/quest';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import { checkUnitFlag, Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import { buildTrigger, setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { distanceBetweenUnits, isOrganic, isUnitIdle } from 'lib/unit';
import { pickRandom } from 'lib/utils';
import { MapPlayer, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

const targets = new Map<Unit, {
  facingToUnit: Unit,
  oldFacing: number
}>();

const throttleSet = new Set<Unit>();

const nearDistance = 400;

type Subscriber = (unit: Unit, target: Unit) => unknown

const onceSubscribers = new Map<Unit, Subscriber[]>();

export class UnitInteraction {
  static register() {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER);
      t.addCondition(() => {
        const target = Unit.fromHandle(GetOrderTargetUnit());
        return Unit.fromEvent().owner === mainPlayer
          && Unit.fromEvent().currentOrder === OrderId.Smart
          && target.owner.isPlayerAlly(Unit.fromEvent().owner)
          && target.isAlive();
      });
      t.addAction(() => {
        const unit = Unit.fromEvent();
        const target = Unit.fromHandle(GetOrderTargetUnit());
        if (distanceBetweenUnits(unit, target) < nearDistance) {
          this.playRandomSound(unit, target);

          // neutral critters run away from you
          if (target.owner === MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE) && target.maxLife <= 15) {
            const runDest = PolarProjection(target, 400, AngleBetweenLocs(unit, target));
            target.issueOrderAt(OrderId.Move, runDest.x, runDest.y);
            target.moveSpeed = target.defaultMoveSpeed * 3;
            setTimeout(400 / target.moveSpeed, () => {
              target.moveSpeed = target.defaultMoveSpeed;
            });
            return;
          }

          // Other allies face towards you if idle
          if (isUnitIdle(target) && isOrganic(target)) {
            this.setAttention(target, unit);
          }

          if (onceSubscribers.has(target)) {
            const callbacks = onceSubscribers.get(target);
            for (const callback of callbacks) {
              callback(unit, target);
            }
            onceSubscribers.delete(target);
          }
        }
      });
    });

    const interval = 0.5;
    setIntervalIndefinite(interval, () => {
      for (const [unit, { facingToUnit, oldFacing }] of targets) {
        const isIdle = isUnitIdle(unit);
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

  static setAttention(unitFrom: Unit, unitTo: Unit) {
    unitFrom.issueImmediateOrder(OrderId.Stop);
    const oldFacing = targets.get(unitFrom)?.oldFacing ?? unitFrom.facing;
    targets.set(unitFrom, {
      facingToUnit: unitTo,
      oldFacing,
    });
    ResetUnitAnimation(unitFrom.handle);
  }

  static playRandomSound(unit: Unit, target: Unit) {
    if (unit.owner === MapPlayer.fromLocal() && !checkUnitFlag(target, Flag.MUTE_INTERACTION_SOUND)) {
      if (throttleSet.has(target)) return;
      throttleSet.add(target);
      setTimeout(1, () => {
        throttleSet.delete(target);
      });

      const sounds = getUnitSounds(target.typeId, 'What');
      if (sounds.length) {
        const soundPath = pickRandom(sounds);
        const snd = CreateSound(soundPath, false, true, true, 1, 1, 'DefaultEAXON');
        SetSoundChannel(snd, 1);
        PlaySoundOnUnitBJ(snd, 90, target.handle);
        KillSoundWhenDone(snd);
      }
    }
  }

  static onStartOnce(unit: Unit, callback: Subscriber) {
    if (onceSubscribers.has(unit)) {
      onceSubscribers.get(unit).push(callback);
    } else {
      onceSubscribers.set(unit, [callback]);
    }
    return callback;
  }

  static waitUntilQuestTalk(target: Unit) {
    enableQuestMarker(target);
    return new Promise<{ unit: Unit, target: Unit }>((resolve) => {
      this.onStartOnce(target, (unit, target) => {
        disableQuestMarker(target);
        resolve({ unit, target });
      });
    });
  }
}

export function enableInteractSound(unit: Unit) {
  setUnitFlag(unit, Flag.MUTE_INTERACTION_SOUND, false);
}

export function disableInteractSound(unit: Unit) {
  setUnitFlag(unit, Flag.MUTE_INTERACTION_SOUND, true);
}
