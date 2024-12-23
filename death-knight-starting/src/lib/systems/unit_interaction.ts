import { neutralPassive, playerMain } from 'lib/constants';
import {
  Angle, Distance, PolarProjection,
} from 'lib/location';
import { angleDifference } from 'lib/maths/misc';
import { disableQuestMarker, enableQuestMarker, QuestMarkerType } from 'lib/quests/utils';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import { checkUnitFlag, Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import {
  buildTrigger, getTimeS, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  getUnitScale,
  isOrganic, isUnitIdle, isUnitRemoved, setUnitFacingWithRate,
} from 'lib/unit';
import { pickRandom, resetVolumeSpeech, setVolumeSpeech } from 'lib/utils';
import { MapPlayer, Timer, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

interface InteractionData {
  targetUnit: Unit,
  oldFacing: number
  soundLastTimeS: number
  playedSounds: string[]
  maxRadius: number
  isLooking: boolean
}
const targets = new Map<Unit, InteractionData>();

const soundThrottleSet = new Set<Unit>();

const interactionDistance = 500;
const unfocusDistance = 500;
const lookAtHeight = 70;

type Subscriber = (unit: Unit, target: Unit) => unknown

const onceSubscribers = new WeakMap<Unit, Set<Subscriber>>();
const foreverSubscribers = new WeakMap<Unit, Set<Subscriber>>();
const subscriberSetMap = new WeakMap<Subscriber, Set<Subscriber>>();

const interval = 0.01;

export class UnitInteraction {
  static timer: Timer = null;

  static timerPaused = false;

  static register(): void {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER);
      t.addCondition(() => {
        const target = Unit.fromHandle(GetOrderTargetUnit());
        return Unit.fromEvent().owner === playerMain
          && Unit.fromEvent().currentOrder === OrderId.Smart
          && target.owner.isPlayerAlly(Unit.fromEvent().owner)
          && target.isAlive();
      });
      t.addAction(() => {
        const unit = Unit.fromEvent();
        const target = Unit.fromHandle(GetOrderTargetUnit());
        if (Distance(unit, target) < interactionDistance) {
          if (!checkUnitFlag(target, Flag.MUTE_INTERACTION_SOUND)) {
            this.playRandomSound(unit, target);
          }

          // neutral critters run away from you
          if (target.owner === neutralPassive && target.maxLife <= 15) {
            const runDest = PolarProjection(target, 400, Angle(unit, target));
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
          if (isUnitIdle(target) && isOrganic(target) && !checkUnitFlag(target, Flag.UNBREAKABLE_ATTENTION)) {
            setAttention(target, unit);
          }

          if (onceSubscribers.has(target)) {
            const callbacks = onceSubscribers.get(target);
            for (const callback of callbacks) {
              callback(unit, target);
              subscriberSetMap.delete(callback);
            }
            onceSubscribers.delete(target);
          }

          if (foreverSubscribers.has(target)) {
            const callbacks = foreverSubscribers.get(target);
            for (const callback of callbacks) {
              callback(unit, target);
            }
          }
        }
      });
    });

    this.startTimerIfStopped();
  }

  static startTimerIfStopped(): void {
    if (this.timer) return;
    this.timer = setIntervalIndefinite(interval, (idx) => {
      if (idx === 0) return; // skip first execution
      if (targets.size === 0) {
        this.timer.pause();
        this.timer.destroy();
        this.timer = null;
        return;
      }

      for (const [unit, data] of targets) {
        if (isUnitRemoved(unit)) {
          targets.delete(unit);
          continue;
        } else if (!unit.isAlive()) {
          unit.resetLookAt();
          targets.delete(unit);
          continue;
        }

        const isIdle = isUnitIdle(unit);
        const { targetUnit, oldFacing, maxRadius } = data;

        const breakableAttention = !checkUnitFlag(unit, Flag.UNBREAKABLE_ATTENTION);
        const shouldNotFace = !isIdle || !unit.isAlive() || (
          breakableAttention && Distance(unit, targetUnit) >= maxRadius
        );

        if (shouldNotFace) {
          targets.delete(unit);
          unit.resetLookAt();
          if (isIdle && unit.isAlive()) {
            setUnitFacingWithRate(unit, oldFacing, 0.5);
          }
        } else {
          const angleDiff = angleDifference(unit.facing, Angle(unit, targetUnit));
          if (angleDiff < 60 && !data.isLooking) {
            unit.lookAt('head', targetUnit, 0, 0, lookAtHeight * getUnitScale(targetUnit));
            data.isLooking = true;
          } else if (angleDiff > 80 && data.isLooking) {
            unit.resetLookAt();
            data.isLooking = false;
          }
          if (angleDiff > 45) {
            SetUnitFacingToFaceUnitTimed(unit.handle, targetUnit.handle, 0.5);
          }
        }
      }
    });
  }

  static playRandomSound(unit: Unit, target: Unit): void {
    if (unit.owner === MapPlayer.fromLocal()) {
      if (soundThrottleSet.has(target)) {
        return;
      }
      soundThrottleSet.add(target);

      const data = targets.has(target) ? targets.get(target) : null;

      // Selecting sounds to play
      let soundPaths: string[] = [];
      if (data != null) {
        soundPaths = getUnitSounds(target.typeId, 'What').filter((s) => !data.playedSounds.includes(s));
        if (data.soundLastTimeS > getTimeS() - 3) { // last played recently
          if (data.playedSounds.length >= 3) {
            const pissed = getUnitSounds(target.typeId, 'Pissed')
              .filter((s) => !data.playedSounds.includes(s))
              .slice(0, 1);
            if (pissed.length > 0) {
              soundPaths = pissed;
            }
          }
        } else {
          data.playedSounds = [];
        }
        if (soundPaths.length === 0) {
          data.playedSounds = [];
          soundPaths = getUnitSounds(target.typeId, 'What');
        }
      } else {
        soundPaths = getUnitSounds(target.typeId, 'What');
      }

      // Play sound
      const soundPath = pickRandom(soundPaths);
      if (soundPath != null) {
        const snd = CreateSound(soundPath, false, true, true, 1, 1, 'DefaultEAXON');
        SetSoundChannel(snd, 0);
        setVolumeSpeech();
        PlaySoundOnUnitBJ(snd, 100, target.handle);
        KillSoundWhenDone(snd);
        setTimeout(GetSoundDuration(snd) / 1000, () => {
          resetVolumeSpeech();
          soundThrottleSet.delete(target);
          if (targets.has(target)) {
            const data1 = targets.get(target);
            data1.soundLastTimeS = getTimeS();
            data1.playedSounds.push(soundPath);
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

  static onStartOnce(unit: Unit, callback: Subscriber): ReturnType<Subscriber> {
    if (onceSubscribers.has(unit)) {
      onceSubscribers.get(unit).add(callback);
    } else {
      onceSubscribers.set(unit, new Set([callback]));
    }
    subscriberSetMap.set(callback, onceSubscribers.get(unit));
    return callback;
  }

  static onStart(unit: Unit, callback: Subscriber): ReturnType<Subscriber> {
    if (foreverSubscribers.has(unit)) {
      foreverSubscribers.get(unit).add(callback);
    } else {
      foreverSubscribers.set(unit, new Set([callback]));
    }
    subscriberSetMap.set(callback, foreverSubscribers.get(unit));
    return callback;
  }

  static stopCallback(callback: Subscriber): void {
    const set = subscriberSetMap.get(callback);
    if (set != null) {
      set.delete(callback);
      subscriberSetMap.delete(callback);
    }
  }

  static waitUntilQuestTalk(target: Unit, mode: QuestMarkerType): Promise<{ unit: Unit, target: Unit }> {
    disableInteractSound(target);
    enableQuestMarker(target, mode);
    return new Promise<{ unit: Unit, target: Unit }>((resolve) => {
      this.onStartOnce(target, (unit, target1) => {
        disableQuestMarker(target1);
        resolve({ unit, target: target1 });
      });
    });
  }

  static removeAllQuestTalks(target: Unit): void {
    if (onceSubscribers.has(target)) {
      onceSubscribers.delete(target);
    }
    disableQuestMarker(target);
    enableInteractSound(target);
  }
}

export function setAttention(unitFrom: Unit, unitTo: Unit): void {
  if (!unitFrom.isAlive()) return;
  if (unitFrom === unitTo) return;
  if (targets.has(unitFrom) && targets.get(unitFrom).targetUnit === unitTo) return;

  unitFrom.issueImmediateOrder(OrderId.Stop);
  ResetUnitAnimation(unitFrom.handle);
  const oldFacing = targets.get(unitFrom)?.oldFacing ?? unitFrom.facing;
  targets.set(unitFrom, {
    targetUnit: unitTo,
    oldFacing,
    soundLastTimeS: -99,
    playedSounds: [],
    maxRadius: Math.max(unfocusDistance, Distance(unitFrom, unitTo) + 200),
    isLooking: false,
  });
  UnitInteraction.startTimerIfStopped();
}

export function removeAttention(unit: Unit): void {
  const oldFacing = targets.get(unit)?.oldFacing ?? unit.facing;
  targets.delete(unit);
  unit.resetLookAt();
  if (isUnitIdle(unit) && unit.isAlive()) {
    setUnitFacingWithRate(unit, oldFacing);
  }
}

export function isAttending(unit: Unit): boolean {
  return targets.has(unit);
}

export function enableInteractSound(unit: Unit): void {
  setUnitFlag(unit, Flag.MUTE_INTERACTION_SOUND, false);
}

export function disableInteractSound(...units: Unit[]): void {
  for (const unit of units) {
    setUnitFlag(unit, Flag.MUTE_INTERACTION_SOUND, true);
  }
}
