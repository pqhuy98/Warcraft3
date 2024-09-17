import { TalkGroup } from 'events/talk_group';
import {
  ABILITY_ID_POSSESSION_TARGET_HERO, mainPlayer,
  MODEL_Chat_Bubble,
  neutralHostile,
  neutralPassive,
} from 'lib/constants';
import { RandomSet } from 'lib/data_structures/random_set';
import {
  AngleBetweenLocs,
  centerLocRect, DistanceBetweenLocs, isLocInRect, PolarProjection, randomLocRect,
  tempLocation,
} from 'lib/location';
import { angleDifference } from 'lib/maths/misc';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import {
  disableQuestMarker, enableQuestMarker, removeMinimapIcon, setMinimapIconUnit,
} from 'lib/quests/utils';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import {
  ABILITY_AuraPlagueAbomination,
  ABILITY_PermanentInvisibility, ABILITY_Possession, ABILITY_ShadowMeld, ABILITY_ShadowMeldAkama, ABILITY_ShadowMeldInstant,
} from 'lib/resources/war3-abilities';
import {
  ALL_HEROES, HERO_archimonde, HERO_cenarius, HERO_Mannoroth, HERO_tichondrius,
} from 'lib/resources/war3-heroes';
import {
  UNIT_Abomination, UNIT_Acolyte, UNIT_Archer, UNIT_Banshee, UNIT_Berserker, UNIT_BlackrockBlademaster, UNIT_BloodElfEngineer,
  UNIT_BloodElfLieutenant, UNIT_BloodElfSpellBreaker, UNIT_BloodElfWorker, UNIT_Chaplain, UNIT_DruidoftheClaw,
  UNIT_DruidoftheTalon, UNIT_Dryad, UNIT_Footman, UNIT_Ghost, UNIT_GhostlyArchmage, UNIT_Ghoul,
  UNIT_GiantSkeletonWarrior, UNIT_Grunt, UNIT_HighElvenArcher, UNIT_HighElvenFemale,
  UNIT_HighElvenMale, UNIT_HighElvenSwordsman, UNIT_Huntress, UNIT_Hydromancer, UNIT_Knight, UNIT_MortarTeam,
  UNIT_MountainGiant, UNIT_Necromancer, UNIT_NightElfAssassin, UNIT_NightElfCourier, UNIT_OrcWarchief, UNIT_Priest,
  UNIT_Rifleman, UNIT_Shade, UNIT_Shaman, UNIT_Shandris, UNIT_SkeletalOrc, UNIT_SkeletalOrcChampion,
  UNIT_SkeletalOrcGrunt, UNIT_Sorceress, UNIT_Spiritwalker, UNIT_SpiritWolfLevel3, UNIT_Tauren, UNIT_TheCaptain, UNIT_War2Warlock, UNIT_Watcher, UNIT_WitchDoctor, UNIT_Wraith,
} from 'lib/resources/war3-units';
import { removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { setAttention } from 'lib/systems/unit_interaction';
import { Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import {
  buildTrigger, getTimeS, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  fadeUnit, getClosestUnitInRangeOfUnit, getDummyMaster, getUnitsInRangeOfLoc, getUnitsInRect, setNeverDie,
} from 'lib/unit';
import { pickRandom, pickRandomMany, waitUntil } from 'lib/utils';
import {
  Effect,
  sleep, Sound, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Cementary\'s Ghost Party';
const questDescription = 'Three ghost ladies ask your for a favor, go to Phantom Fest and enjoy the party.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNGhost.blp';
const questItems = [
  'Go to Phantom Fest at the Cementery',
  'Enjoy the party',
];

let ghostSounds: sound[][];

const ghostR = 200;
const ghostG = 200;
const ghostB = 200;
const ghostA = 75;

const debug = false;

export class Cementery extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    ghostLadiesRect: rect
    cementeryEntryRect: rect
    partyRect: rect
    partySpawnRect: rect
    partyStageRect: rect
    partyActivateRect: rect
  }) {
    super(globals);
    ghostSounds = [
      // Gwen
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-1.mp3',
          'Ghost Gwen',
          'Ugh, I can’t believe we didn’t get invited to the Phantom Fest. It’s like, the party of the century!',
        ),

        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-2.mp3',
          'Ghost Gwen',
          'Seriously! And, I heard they’re serving ectoplasm cocktails. Like, what even is that? It sounds totally rad!',
        ),
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-3.mp3',
          'Ghost Gwen',
          'You\'re right, Bella. Hey, you there, warrior! Wanna help some lovely ladies out?',
        ),
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-4.mp3',
          'Ghost Gwen',
          'So, what do you say? Help us crash the party? It’ll be a haunted blast!',
        ),
      ],
      // Lila
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady2-1.mp3',
          'Ghost Lila',
          'I know, right? Everyone who’s anyone will be there. Elite ghosts, high-quality guys… It’s so unfair!',
        ),
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady2-2.mp3',
          'Ghost Lila',
          'We need to find a way in, for real. But how? We don’t have invitations.',
        ),
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady2-3.mp3',
          'Ghost Lila',
          'Yeah, there’s this wicked party, called Phantom Fest at the big Cemetery. Totally exclusive.',
        ),
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady2-4.mp3',
          'Ghost Lila',
          'Pleaaase? You just need to pay a little visit for us. No biggie!',
        ),
      ],
      // Bella
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady3-1.mp3',
          'Ghost Bella',
          'And did you hear? They’re having this super cool spectral dance-off! I would have so owned that dance floor.',
        ),
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady3-2.mp3',
          'Ghost Bella',
          'Speaking of which, who’s that mortal coming up here? Maybe we can use him…',
        ),
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady3-3.mp3',
          'Ghost Bella',
          'All the cool ghosts will be there. Like, elite level. We’re talking high-quality guys.',
        ),
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady3-4.mp3',
          'Ghost Bella',
          'We bet you like adventure, right? This will be the most thrilling one yet!',
        ),
      ],
    ];
  }

  async register(): Promise<void> {
    const {
      ghostLadiesRect, cementeryEntryRect, partyRect, partyActivateRect,
    } = this.globals;
    const ghostLadies = getUnitsInRect(ghostLadiesRect);
    ghostLadies.sort((u1, u2) => u2.level - u1.level);

    const questGiver = pickRandom(ghostLadies);
    ghostLadies.forEach((u) => {
      setNeverDie(u);
      setUnitFlag(ghostLadies[0], Flag.UNBREAKABLE_ATTENTION, true);
      u.setVertexColor(255, 255, 255, 50);
      if (u !== questGiver) {
        setAttention(u, questGiver);
      }
    });
    ghostLadies[0].name = 'Ghost Gwen';
    ghostLadies[1].name = 'Ghost Lila';
    ghostLadies[2].name = 'Ghost Bella';

    await this.waitDependenciesDone();

    const traveler = await this.talkToQuestGiver(ghostLadies[0], true);

    await sleep(0.5);

    const talkGroup = new TalkGroup([...ghostLadies, traveler]);

    if (!debug) {
      await talkGroup.speak(ghostLadies[0], ghostSounds[0][0], ghostLadies[1], ghostLadies[0]);
      await talkGroup.speak(ghostLadies[1], ghostSounds[1][0], ghostLadies[0], ghostLadies[1]);
      await talkGroup.speak(ghostLadies[2], ghostSounds[2][0], ghostLadies[1], ghostLadies[2]);

      await talkGroup.speak(ghostLadies[0], ghostSounds[0][1], ghostLadies[2], ghostLadies[0]);
      await talkGroup.speak(ghostLadies[1], ghostSounds[1][1], ghostLadies[0], ghostLadies[1]);

      await talkGroup.speak(ghostLadies[2], ghostSounds[2][1], traveler, ghostLadies[2]);

      await talkGroup.speak(ghostLadies[0], ghostSounds[0][2], traveler, traveler);
      await talkGroup.speak(ghostLadies[1], ghostSounds[1][2], traveler, traveler);
      await talkGroup.speak(ghostLadies[2], ghostSounds[2][2], traveler, traveler);

      await talkGroup.speak(ghostLadies[0], ghostSounds[0][3], traveler, traveler);
      await talkGroup.speak(ghostLadies[1], ghostSounds[1][3], traveler, traveler);
      await talkGroup.speak(ghostLadies[2], ghostSounds[2][3], traveler, traveler);
    }

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: questItems,
    });

    // Possess
    const travelerPlayer = traveler.owner;
    traveler.shareVision(ghostLadies[0].owner, true);
    traveler.shareVision(travelerPlayer, true);
    setNeverDie(traveler);

    traveler.disableAbility(ABILITY_ShadowMeld.id, true, false);
    for (const u of ghostLadies) {
      u.removeAbility(ABILITY_Possession.id);
      u.addAbility(ABILITY_ID_POSSESSION_TARGET_HERO);
      u.issueTargetOrder(OrderId.Possession, traveler);
    }

    await waitUntil(0.5, () => traveler.owner !== travelerPlayer);
    talkGroup.finish();

    setMinimapIconUnit(traveler, 'neutralActive');
    await sleep(1);

    const dest = centerLocRect(cementeryEntryRect);

    if (!debug) {
      setGuardPosition(traveler, dest, 180, 200);
    } else {
      traveler.setPosition(dest.x, dest.y);
      PanCameraToTimedForPlayer(traveler.owner.handle, dest.x, dest.y, 0);
    }

    await waitUntil(1, () => DistanceBetweenLocs(traveler, dest) < 150);
    traveler.disableAbility(ABILITY_ShadowMeld.id, false, false);
    await sleep(1);
    RescueUnitBJ(traveler.handle, travelerPlayer.handle, true);
    traveler.select(true);
    removeMinimapIcon(traveler);
    setNeverDie(traveler, false);
    removeGuardPosition(traveler);

    await questLog.completeItem(0);

    await waitUntil(1, () => isLocInRect(traveler, partyActivateRect));
    SetDoodadAnimationRect(partyActivateRect, FourCC('JOgr'), 'death', false);
    await sleep(1);

    CinematicFadeBJ(bj_CINEFADETYPE_FADEOUT, 0.5, 'ReplaceableTextures\\CameraMasks\\White_mask.blp', 0, 0, 0, 0);
    BlzEnableCursor(false);
    await sleep(1);
    SmartCameraPanBJ(traveler.owner.handle, tempLocation(traveler), 0);

    // Party goers algorithm
    const { partyGoers, chatSounds, attackSounds } = this.spawnParty();

    const leaveParty = (u: Unit): void => {
      partyGoers.delete(u);
      if (u !== traveler) {
        const fadeDuration = GetRandomReal(3, 6);
        fadeUnit(u, ghostR, ghostG, ghostB, ghostA, fadeDuration, () => false, () => u.destroy());
      }
    };

    const targetMap = new Map<Unit, Unit>();
    const nextSoundTimestampS = new Map<Unit, number>();

    const setAttackTarget = (unit: Unit, target: Unit): void => {
      if (unit === target || unit === traveler) return;
      targetMap.set(unit, target);
      unit.issueTargetOrder(OrderId.Attack, target);
    };

    const setAttackTargetNearby = (unit: Unit): void => {
      const target = getClosestUnitInRangeOfUnit(
        unit.acquireRange,
        unit,
        (u) => u.isAlive() && partyGoers.has(u)
          && DistanceBetweenLocs(unit, u) > (unit.getField(UNIT_RF_MINIMUM_ATTACK_RANGE) as number),
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
        const isVictimInnocent = !targetMap.has(victim);
        if (isVictimInnocent || GetRandomInt(1, 10) === 1) {
          setAttackTarget(victim, attacker);

          // nearby units are also enraged
          getUnitsInRangeOfLoc(
            attacker.acquireRange,
            attacker,
            (u) => !targetMap.has(u) && DistanceBetweenLocs(victim, u) >= (u.getField(UNIT_RF_MINIMUM_ATTACK_RANGE) as number),
          ).forEach((u) => {
            if (isVictimInnocent && GetRandomInt(1, 2) === 1) {
              setTimeout(GetRandomReal(0, 5), () => setAttackTarget(u, victim));
            } else {
              setAttackTarget(u, victim);
            }
          });

          getUnitsInRangeOfLoc(
            victim.acquireRange,
            victim,
            (u) => !targetMap.has(u) && DistanceBetweenLocs(attacker, u) >= (u.getField(UNIT_RF_MINIMUM_ATTACK_RANGE) as number),
          ).forEach((u) => {
            if (GetRandomInt(1, 2) === 1) {
              setTimeout(GetRandomReal(0, 5), () => setAttackTarget(u, attacker));
            } else {
              setAttackTarget(u, attacker);
            }
          });

        // victim switching target to retaliate, but rarely
        } else if (attacker.isAlive() && partyGoers.has(attacker) && GetRandomInt(1, 6) === 1) {
          setAttackTarget(victim, attacker);
        }
      });
    });

    // Right click to auto attack
    const rightClickTrigger = buildTrigger((t) => {
      t.registerPlayerUnitEvent(traveler.owner, EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER, undefined);
      t.addCondition(() => {
        const target = Unit.fromHandle(GetOrderTargetUnit());
        return GetIssuedOrderId() === OrderId.Smart
          && target.owner !== traveler.owner
          && partyGoers.has(target);
      });
      t.addAction(() => {
        const target = Unit.fromHandle(GetOrderTargetUnit());
        Unit.fromEvent().issueTargetOrder(OrderId.Attack, target);
      });
    });
    rightClickTrigger.enabled = false;

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

    // Unit control loop
    const nextChatTimestampS = new Map<Unit, number>();
    const timer = setIntervalIndefinite(1, () => {
      const now = getTimeS();
      partyGoers.forEach((unit) => {
        // Dead/outside unit leaves party
        if (!unit.isAlive() || !isLocInRect(unit, partyRect)) {
          leaveParty(unit);
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
            || DistanceBetweenLocs(unit, target) > 1000;
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
              if (DistanceBetweenLocs(unit, nearby) > 400 || angleDifference(unit.facing, AngleBetweenLocs(unit, nearby)) > 30) {
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
            let volume = !isAggressive ? GetRandomInt(1, 33) : GetRandomInt(66, 100);
            if (target === traveler) {
              volume = 127;
            }
            snd.setVolume(volume);
            snd.start();
            nextSoundTimestampS.set(unit, now + snd.duration / 1000 + GetRandomReal(0, 5));
            const speakEffect = Effect.createAttachment(MODEL_Chat_Bubble, unit, 'overhead');
            setTimeout(snd.duration / 1000, () => speakEffect.destroy());
          }
        }
      });
    });

    VolumeGroupSetVolume(SOUND_VOLUMEGROUP_COMBAT, 0.35);
    VolumeGroupSetVolume(SOUND_VOLUMEGROUP_SPELLS, 0.35);
    await sleep(3);
    CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 0.5, 'ReplaceableTextures\\CameraMasks\\White_mask.blp', 0, 0, 0, 0);
    BlzEnableCursor(true);

    setTimeout(60, async () => {
      rightClickTrigger.enabled = true;
      const unit = partyGoers.getRandom();
      PanCameraToTimedForPlayer(traveler.owner.handle, unit.x, unit.y, 0.5);
      enableQuestMarker(unit, 'new');

      const atkSound = pickRandom(attackSounds.get(unit));
      if (atkSound) {
        atkSound.setVolume(127);
        atkSound.start();
        nextSoundTimestampS.set(unit, getTimeS() + atkSound.duration / 1000 + GetRandomReal(0, 5));
        const speakEffect = Effect.createAttachment(MODEL_Chat_Bubble, unit, 'overhead');
        setTimeout(atkSound.duration / 1000, () => speakEffect.destroy());
      }

      await sleep(2.5);
      setAttackTargetNearby(unit);
      await sleep(2);
      disableQuestMarker(unit);
    });

    await waitUntil(1, () => partyGoers.size === 1 || !partyGoers.has(traveler));

    timer.destroy();
    damageTrigger.destroy();
    rightClickTrigger.destroy();

    partyGoers.forEach((u) => setTimeout(GetRandomReal(0, 5), () => leaveParty(u)));
    VolumeGroupSetVolume(SOUND_VOLUMEGROUP_COMBAT, 1);
    VolumeGroupSetVolume(SOUND_VOLUMEGROUP_SPELLS, 1);

    if (traveler.isAlive()) {
      // TODO: give reward
      await questLog.completeWithRewards([]);
      this.complete();
    } else {
      await questLog.completeWithRewards([]);
      this.complete();
    }
  }

  spawnParty(): {
    partyGoers: RandomSet<Unit>,
    chatSounds: Map<Unit, Sound[]>,
    attackSounds: Map<Unit, Sound[]>,
    } {
    const { partySpawnRect } = this.globals;

    const partyGoerTypes = [
      // Undead
      UNIT_Banshee,
      UNIT_Ghoul,
      UNIT_Abomination,
      UNIT_Shade,
      UNIT_Acolyte,
      UNIT_Necromancer,
      UNIT_SkeletalOrc,
      UNIT_SkeletalOrcChampion,
      UNIT_SkeletalOrcGrunt,
      UNIT_GiantSkeletonWarrior,

      // Human
      UNIT_TheCaptain,
      UNIT_Footman,
      UNIT_HighElvenSwordsman,
      UNIT_Priest,
      UNIT_Sorceress,
      UNIT_BloodElfSpellBreaker,
      UNIT_HighElvenArcher,
      UNIT_HighElvenMale,
      UNIT_HighElvenFemale,
      UNIT_MortarTeam,
      UNIT_Rifleman,
      UNIT_Knight,
      UNIT_Chaplain,
      UNIT_Hydromancer,
      UNIT_BloodElfEngineer,
      UNIT_BloodElfWorker,
      UNIT_BloodElfLieutenant,
      UNIT_GhostlyArchmage,

      // Orc
      UNIT_Grunt,
      UNIT_Tauren,
      UNIT_Berserker,
      UNIT_WitchDoctor,
      UNIT_Shaman,
      UNIT_Spiritwalker,
      UNIT_BlackrockBlademaster,
      UNIT_SpiritWolfLevel3,
      UNIT_OrcWarchief,
      UNIT_War2Warlock,

      // Night elf
      UNIT_Archer,
      UNIT_Huntress,
      UNIT_Dryad,
      UNIT_DruidoftheClaw,
      UNIT_DruidoftheTalon,
      UNIT_MountainGiant,
      UNIT_NightElfCourier,
      UNIT_Watcher,
      UNIT_NightElfAssassin,
      UNIT_Shandris,

      // Neutral
      UNIT_Ghost,
      UNIT_Wraith,

      // Heroes
      ...pickRandomMany(ALL_HEROES, 15)
        // Ignore those are too strong
        .filter((hero) => ![HERO_archimonde, HERO_tichondrius, HERO_cenarius, HERO_Mannoroth].includes(hero))
        .map((hero) => ({ code: hero.code, id: FourCC(hero.code) })),
    ];

    const partyGoers = new RandomSet<Unit>();
    const chatSounds = new Map<Unit, Sound[]>();
    const attackSounds = new Map<Unit, Sound[]>();

    for (const goerType of partyGoerTypes) {
      const loc = randomLocRect(partySpawnRect);
      // Create unit
      const unit = Unit.create(neutralPassive, goerType.id, loc.x, loc.y, GetRandomDirectionDeg());
      unit.setVertexColor(ghostR, ghostG, ghostB, ghostA);
      unit.shareVision(mainPlayer, true);
      unit.maxLife = Math.max(100, unit.maxLife);
      unit.life = unit.maxLife;
      unit.removeAbility(ABILITY_ShadowMeld.id);
      unit.removeAbility(ABILITY_PermanentInvisibility.id);
      unit.removeAbility(ABILITY_ShadowMeldInstant.id);
      unit.removeAbility(ABILITY_ShadowMeldAkama.id);
      unit.removeAbility(ABILITY_AuraPlagueAbomination.id); // avoid hitting other neutrals, e.g. player
      unit.setPathing(false);
      unit.show = false;
      partyGoers.insert(unit);

      // Unit chat sounds
      chatSounds.set(unit, []);
      attackSounds.set(unit, []);

      const unitChatSounds = getUnitSounds(unit.typeId, 'What', 'Pissed', 'Yes', 'Ready');
      for (const path of unitChatSounds) {
        const snd = Sound.create(path, false, true, true, 1, 1, 'DefaultEAXON');
        snd.setDistances(1000, 3000);
        AttachSoundToUnit(snd.handle, unit.handle);
        chatSounds.get(unit).push(snd);
      }
      const unitAttackSounds = getUnitSounds(unit.typeId, 'YesAttack', 'Warcry');
      for (const path of unitAttackSounds) {
        const snd = Sound.create(path, false, true, true, 1, 1, 'DefaultEAXON');
        snd.setDistances(1000, 3000);
        AttachSoundToUnit(snd.handle, unit.handle);
        attackSounds.get(unit).push(snd);
      }
    }

    return { partyGoers, chatSounds, attackSounds };
  }

  onForceComplete(): void {
  }
}
