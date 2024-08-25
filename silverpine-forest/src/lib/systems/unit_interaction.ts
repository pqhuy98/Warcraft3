import { mainPlayer } from 'lib/constants';
import {
  AngleBetweenLocs, PolarProjection,
} from 'lib/location';
import { disableQuestMarker, enableQuestMarker } from 'lib/quests/utils';
import { getUnitSounds, SoundType } from 'lib/resources/unit-sounds';
import { checkUnitFlag, Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import {
  buildTrigger, getTimeS, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  distanceBetweenUnits, isOrganic, isUnitIdle, setUnitFacingWithRate,
} from 'lib/unit';
import { pickRandom } from 'lib/utils';
import { MapPlayer, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

interface InteractionData {
  facingToUnit: Unit,
  oldFacing: number
  soundLastTimeS: number
  soundCount: number
  soundLastFile: string
}
const targets = new Map<Unit, InteractionData>();

const soundThrottleSet = new Set<Unit>();

const nearDistance = 400;
const unfocusDistance = 500;

type Subscriber = (unit: Unit, target: Unit) => unknown

const onceSubscribers = new Map<Unit, Subscriber[]>();

const interval = 0.5;

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

          // Ignore if you are not hero
          if (!unit.isHero()) return;

          // Other allies face towards you if idle
          if (isUnitIdle(target) && isOrganic(target)) {
            setAttention(target, unit);
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

    setIntervalIndefinite(interval, () => {
      if (targets.size === 0) return;

      for (const [unit, { facingToUnit, oldFacing }] of targets) {
        const isIdle = isUnitIdle(unit);
        const shouldFace = distanceBetweenUnits(unit, facingToUnit) < unfocusDistance && isIdle && unit.isAlive();
        if (!shouldFace) {
          targets.delete(unit);
          if (isIdle && unit.isAlive()) {
            setUnitFacingWithRate(unit, oldFacing, interval);
          }
        } else {
          SetUnitFacingToFaceUnitTimed(unit.handle, facingToUnit.handle, interval);
        }
      }
    });
  }

  static playRandomSound(unit: Unit, target: Unit) {
    if (unit.owner === MapPlayer.fromLocal() && !checkUnitFlag(target, Flag.MUTE_INTERACTION_SOUND)) {
      if (soundThrottleSet.has(target)) {
        return;
      }
      soundThrottleSet.add(target);

      const soundTypes: SoundType[] = ['What'];
      const data = targets.has(target) ? targets.get(target) : null;

      if (data != null && data.soundLastTimeS > getTimeS() - 3) { // recently played
        soundTypes.push('Yes');
      }

      const sounds = getUnitSounds(target.typeId, ...soundTypes);
      if (sounds.length > 0) {
        let soundPath: string;
        if (sounds.length === 1) {
          soundPath = sounds[0];
        } else if (data && data.soundLastFile.length > 0) {
          soundPath = pickRandom(sounds.filter((s) => s !== data.soundLastFile));
        } else {
          soundPath = pickRandom(sounds);
        }
        const snd = CreateSound(soundPath, false, true, true, 1, 1, 'DefaultEAXON');
        SetSoundChannel(snd, 1);
        PlaySoundOnUnitBJ(snd, 90, target.handle);
        KillSoundWhenDone(snd);
        setTimeout(GetSoundDuration(snd) / 1000, () => {
          soundThrottleSet.delete(target);
          if (targets.has(target)) {
            const data = targets.get(target);
            data.soundLastTimeS = getTimeS();
            data.soundLastFile = soundPath;
          }
        });
        UnitAddIndicator(
          target.handle,
          bj_TRANSMISSION_IND_RED,
          bj_TRANSMISSION_IND_BLUE,
          bj_TRANSMISSION_IND_GREEN,
          bj_TRANSMISSION_IND_ALPHA,
        );
      } else {
        setTimeout(3, () => {
          soundThrottleSet.delete(target);
        });
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
    disableInteractSound(target);
    enableQuestMarker(target);
    return new Promise<{ unit: Unit, target: Unit }>((resolve) => {
      this.onStartOnce(target, (unit, target) => {
        disableQuestMarker(target);
        resolve({ unit, target });
      });
    });
  }

  static removeAllQuestTalks(target: Unit) {
    if (onceSubscribers.has(target)) {
      onceSubscribers.delete(target);
    }
    disableQuestMarker(target);
  }
}

export function setAttention(unitFrom: Unit, unitTo: Unit) {
  if (!unitFrom.isAlive()) return;
  unitFrom.issueImmediateOrder(OrderId.Stop);
  ResetUnitAnimation(unitFrom.handle);
  const oldFacing = targets.get(unitFrom)?.oldFacing ?? unitFrom.facing;
  targets.set(unitFrom, {
    facingToUnit: unitTo,
    oldFacing,
    soundLastTimeS: -99,
    soundCount: 0,
    soundLastFile: '',
  });
}

export function removeAttention(unit: Unit) {
  const oldFacing = targets.get(unit)?.oldFacing ?? unit.facing;
  targets.delete(unit);
  if (isUnitIdle(unit) && unit.isAlive()) {
    setUnitFacingWithRate(unit, oldFacing);
  }
}

export function isAttending(unit: Unit) {
  return targets.has(unit);
}

export function enableInteractSound(unit: Unit) {
  setUnitFlag(unit, Flag.MUTE_INTERACTION_SOUND, false);
}

export function disableInteractSound(...units: Unit[]) {
  for (const unit of units) {
    setUnitFlag(unit, Flag.MUTE_INTERACTION_SOUND, true);
  }
}
