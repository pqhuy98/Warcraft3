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
  isOrganic, isUnitIdle, isUnitRemoved, setUnitFacingWithRate,
} from 'lib/unit';
import { pickRandom } from 'lib/utils';
import { MapPlayer, Timer, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

interface InteractionData {
  facingToUnit: Unit,
  oldFacing: number
  soundLastTimeS: number
  playedSounds: string[]
  maxRadius: number
  isLooking: boolean
}
const targets = new Map<Unit, InteractionData>();

const soundThrottleSet = new Set<Unit>();

const nearDistance = 300;
const unfocusDistance = 500;

type Subscriber = (unit: Unit, target: Unit) => unknown

const onceSubscribers = new Map<Unit, Subscriber[]>();

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
        if (Distance(unit, target) < nearDistance) {
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
            }
            onceSubscribers.delete(target);
          }
        }
      });
    });

    this.timer = setIntervalIndefinite(interval, (idx) => {
      if (idx === 0) return; // skip first execution
      if (targets.size === 0) {
        this.timer?.pause();
        this.timerPaused = true;
        return;
      }

      for (const [unit, data] of targets) {
        if (isUnitRemoved(unit)) {
          targets.delete(unit);
          continue;
        }

        const isIdle = isUnitIdle(unit);
        const { facingToUnit, oldFacing, maxRadius } = data;
        const shouldFace = Distance(unit, facingToUnit) < maxRadius && isIdle && unit.isAlive();
        if (!shouldFace) {
          targets.delete(unit);
          if (isIdle && unit.isAlive()) {
            setUnitFacingWithRate(unit, oldFacing, 0.5);
          }
          unit.resetLookAt();
          data.isLooking = false;
        } else {
          const angleDiff = angleDifference(unit.facing, Angle(unit, facingToUnit));
          if (angleDiff < 60 && !data.isLooking) {
            unit.lookAt('head', facingToUnit, 0, 0, 70);
            data.isLooking = true;
          } else if (angleDiff > 80 && data.isLooking) {
            unit.resetLookAt();
            data.isLooking = false;
          }
          if (angleDiff > 45) {
            SetUnitFacingToFaceUnitTimed(unit.handle, facingToUnit.handle, 0.5);
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
        muteUnitSound();
        PlaySoundOnUnitBJ(snd, 100, target.handle);
        KillSoundWhenDone(snd);
        setTimeout(GetSoundDuration(snd) / 1000, () => {
          unmuteUnitSound();
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
      onceSubscribers.get(unit).push(callback);
    } else {
      onceSubscribers.set(unit, [callback]);
    }
    return callback;
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
  if (targets.has(unitFrom) && targets.get(unitFrom).facingToUnit === unitTo) return;

  unitFrom.issueImmediateOrder(OrderId.Stop);
  ResetUnitAnimation(unitFrom.handle);
  const oldFacing = targets.get(unitFrom)?.oldFacing ?? unitFrom.facing;
  targets.set(unitFrom, {
    facingToUnit: unitTo,
    oldFacing,
    soundLastTimeS: -99,
    playedSounds: [],
    maxRadius: Math.max(unfocusDistance, Distance(unitFrom, unitTo) + 200),
    isLooking: false,
  });
  if (UnitInteraction.timerPaused) {
    UnitInteraction.timer?.resume();
    UnitInteraction.timerPaused = false;
  }
}

export function removeAttention(unit: Unit): void {
  const oldFacing = targets.get(unit)?.oldFacing ?? unit.facing;
  targets.delete(unit);
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

let unitSoundMute = 0;
function muteUnitSound(): void {
  unitSoundMute++;
  VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITSOUNDS, 0);
}

function unmuteUnitSound(): void {
  unitSoundMute--;
  if (unitSoundMute === 0) {
    VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITSOUNDS, 1);
  }
}
