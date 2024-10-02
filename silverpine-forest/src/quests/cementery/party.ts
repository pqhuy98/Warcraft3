import { MODEL_Chat_Bubble, neutralHostile, neutralPassive } from 'lib/constants';
import { RandomSet } from 'lib/data_structures/random_set';
import {
  Angle, Distance, isLocInRect, PolarProjection,
} from 'lib/location';
import { angleDifference } from 'lib/maths/misc';
import {
  buildTrigger, getTimeS, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  fadeUnit, getClosestUnitInRangeOfUnit, getDummyMaster, getUnitsInRangeOfLoc,
} from 'lib/unit';
import { pickRandom } from 'lib/utils';
import {
  Effect, sleep, Sound, Timer, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import {
  ghostA, ghostB, ghostG, ghostR, spawnParty,
} from './spawn_party';

export class CementeryParty {
  static create({ traveler, partySpawnRect, partyRect }: {
    traveler: Unit
    partySpawnRect: rect,
    partyRect: rect
  }): {
    goers: RandomSet<Unit>;
    setAttackTargetNearby: (unit: Unit) => void;
    destroy: () => void;
    attackSounds: Map<Unit, Sound[]>;
    playSoundUnit: (unit: Unit, snd: Sound, volume: number) => Promise<void>;
    countAttackers: () => number;
  } {
    // Spawn all party goers and define their behaviors
    const { partyGoers, chatSounds, attackSounds } = spawnParty(partySpawnRect);

    const leaveParty = (u: Unit): void => {
      partyGoers.delete(u);
      if (u !== traveler) {
        const fadeDuration = GetRandomReal(3, 6);
        fadeUnit(u, ghostR, ghostG, ghostB, ghostA, 0, fadeDuration, () => u.destroy());
      }
    };

    // who this party goer wants to attack? Default is null as in the beginning everyone is friendly
    const targetMap = new Map<Unit, Unit>();

    // make unit chases and attacks a target
    const setAttackTarget = (unit: Unit, target: Unit): void => {
      if (unit === target || unit === traveler) return;
      targetMap.set(unit, target);
      unit.issueTargetOrder(OrderId.Attack, target);
      if (unit.owner === neutralPassive && GetRandomInt(1, 10) === 1) {
        unit.owner = neutralHostile;
      }
    };

    // make unit pick a nearby target
    const setAttackTargetNearby = (unit: Unit): void => {
      const target = getClosestUnitInRangeOfUnit(
        unit.acquireRange,
        unit,
        (u) => u.isAlive() && partyGoers.has(u)
              && Distance(unit, u) > (unit.getField(UNIT_RF_MINIMUM_ATTACK_RANGE) as number),
      ) ?? partyGoers.getRandom();
      setAttackTarget(unit, target);
    };

    // Party goers become angry if attacked
    const damageTrigger = buildTrigger((t) => {
      t.addCondition(() => GetEventDamage() > 0);
      t.addAction(() => {
        const attacker = getDummyMaster(GetEventDamageSource());
        const victim = Unit.fromHandle(BlzGetEventDamageTarget());

        // Traveler's attackers/victims turn to neutral hostile
        if (attacker === traveler && victim.owner === neutralPassive) {
          victim.owner = neutralHostile;
        }
        if (victim === traveler && attacker.owner === neutralPassive) {
          attacker.owner = neutralHostile;
        }

        // Friendly units turn aggressive
        const isVictimFriendly = !targetMap.has(victim);
        if (isVictimFriendly || GetRandomInt(1, 10) === 1) {
          setAttackTarget(victim, attacker);

          // nearby units also join the fight
          getUnitsInRangeOfLoc(
            attacker.acquireRange,
            attacker,
            (u) => !targetMap.has(u) && Distance(victim, u) >= (u.getField(UNIT_RF_MINIMUM_ATTACK_RANGE) as number),
          ).forEach((u) => {
            if (GetRandomInt(1, 2) === 1) {
              setTimeout(GetRandomReal(0, 5), () => setAttackTarget(u, victim));
            }
          });

          getUnitsInRangeOfLoc(
            victim.acquireRange,
            victim,
            (u) => !targetMap.has(u) && Distance(attacker, u) >= (u.getField(UNIT_RF_MINIMUM_ATTACK_RANGE) as number),
          ).forEach((u) => {
            if (GetRandomInt(1, 2) === 1) {
              setTimeout(GetRandomReal(0, 5), () => setAttackTarget(u, attacker));
            }
          });

          // occasionally victim switches target to attacker to retaliate
        } else if (attacker.isAlive() && partyGoers.has(attacker) && GetRandomInt(1, 6) === 1) {
          setAttackTarget(victim, attacker);
        }
      });
    });

    // Party goers setup
    partyGoers.forEach((u) => {
      if (u.isHero()) {
        u.setHeroLevel(traveler.level + GetRandomInt(-3, 3), false);
      }
      u.show = true;
      damageTrigger.registerUnitEvent(u, EVENT_UNIT_DAMAGED);
    });

    partyGoers.insert(traveler);
    damageTrigger.registerUnitEvent(traveler, EVENT_UNIT_DAMAGED);

    // When this unit's sounds should be played next?
    // To avoid overlapping multiple sounds from the same unit.
    const nextSoundTimestampS = new Map<Unit, number>();
    const playSoundUnit = async (unit: Unit, snd: Sound, volume: number): Promise<void> => {
      snd.setVolume(volume);
      snd.setChannel(2);
      snd.start();
      nextSoundTimestampS.set(unit, getTimeS() + snd.duration / 1000 + GetRandomReal(1, 5));
      const speakEffect = Effect.createAttachment(MODEL_Chat_Bubble, unit, 'overhead');
      await sleep(snd.duration / 1000);
      speakEffect.destroy();
    };

    // Unit control loop
    const nextChatTimestampS = new Map<Unit, number>();
    const timers = partyGoers.map((unit) => setIntervalIndefinite(GetRandomReal(1, 2), () => {
      const now = getTimeS();
      // Dead/outside unit leaves party
      if (!unit.isAlive() || !isLocInRect(unit, partyRect)) {
        leaveParty(unit);
        Timer.fromExpired().pause();
        return;
      }

      // Do not control traveler
      if (unit === traveler) return;

      const isAggressive = targetMap.has(unit);
      const target = targetMap.get(unit);

      // Attack control
      if (isAggressive && target != null) {
        const shouldSwitch = !target.isAlive()
                || !partyGoers.has(target)
                || Distance(unit, target) > 1000;
        if (shouldSwitch) {
          setAttackTargetNearby(unit);
        } else {
          unit.issueTargetOrder(OrderId.Attack, target);
        }
      } else {
        // Move to talk to nearby unit, or wander around
        if (!nextChatTimestampS.has(unit) || nextChatTimestampS.get(unit) < now) {
          const dice = GetRandomInt(1, 3);
          const nearby = dice === 1
            ? pickRandom(getUnitsInRangeOfLoc(500, unit, (u) => u.isAlive() && partyGoers.has(u) && u !== unit))
            : dice === 2
              ? getClosestUnitInRangeOfUnit(500, unit, (u) => u.isAlive() && partyGoers.has(u))
              : partyGoers.getRandom();
          if (nearby) {
            if (Distance(unit, nearby) > 400 || angleDifference(unit.facing, Angle(unit, nearby)) > 30) {
              unit.issueTargetOrder(OrderId.Smart, nearby);
            }
            nextChatTimestampS.set(unit, now + GetRandomReal(5, 10));
          } else {
            const moveDest = PolarProjection(unit, unit.moveSpeed, GetRandomDirectionDeg());
            unit.issueOrderAt(OrderId.Move, moveDest.x, moveDest.y);
          }
        }
      }

      // Play unit sound
      if (!nextSoundTimestampS.has(unit) || nextSoundTimestampS.get(unit) < now) {
        const snd = pickRandom(isAggressive ? attackSounds.get(unit) : chatSounds.get(unit));
        if (snd) {
          const volume = !isAggressive ? GetRandomInt(1, 15) : GetRandomInt(15, 30);
          void playSoundUnit(unit, snd, volume);
        }
      }
    }));

    // Change volume group so that we can hear chats
    const setPartyVolumeGroup = (): void => {
      VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITSOUNDS, 0.2);
      VolumeGroupSetVolume(SOUND_VOLUMEGROUP_COMBAT, 0.2);
      VolumeGroupSetVolume(SOUND_VOLUMEGROUP_SPELLS, 0.2);
      VolumeGroupSetVolume(SOUND_VOLUMEGROUP_FIRE, 0.2);
    };
    setPartyVolumeGroup();

    const destroy = (): void => {
      timers.forEach((t) => t.destroy());
      damageTrigger.destroy();
      partyGoers.forEach((u) => setTimeout(GetRandomReal(0, 5), () => leaveParty(u)));
    };

    const countAttackers = (): number => targetMap.size;

    // Expose these functions/objects to external
    return {
      attackSounds,
      playSoundUnit: (...args: Parameters<typeof playSoundUnit>) => playSoundUnit(...args),
      goers: partyGoers,
      setAttackTargetNearby: (unit: Unit) => setAttackTargetNearby(unit),
      destroy: () => destroy(),
      countAttackers: () => countAttackers(),
    };
  }
}
