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
import { TalkGroup } from 'lib/quests/talk_group';
import {
  disableQuestMarker, enableQuestMarker, removeMinimapIcon, setMinimapIconUnit,
} from 'lib/quests/utils';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import {
  ABILITY_AuraPlagueAbomination,
  ABILITY_Locust,
  ABILITY_PermanentInvisibility, ABILITY_Possession, ABILITY_ShadowMeld, ABILITY_ShadowMeldAkama, ABILITY_ShadowMeldInstant,
} from 'lib/resources/war3-abilities';
import {
  ALL_HEROES, HERO_akama, HERO_archimonde, HERO_cenarius, HERO_Mannoroth, HERO_tichondrius,
} from 'lib/resources/war3-heroes';
import {
  UNIT_Abomination, UNIT_Acolyte, UNIT_Archer, UNIT_Banshee, UNIT_Berserker, UNIT_BlackrockBlademaster, UNIT_BloodElfEngineer,
  UNIT_BloodElfLieutenant, UNIT_BloodElfSpellBreaker, UNIT_BloodElfWorker, UNIT_Chaplain, UNIT_DruidoftheClaw,
  UNIT_DruidoftheTalon, UNIT_Dryad, UNIT_Footman, UNIT_Ghost, UNIT_GhostlyArchmage, UNIT_Ghoul,
  UNIT_GiantSkeletonWarrior, UNIT_Grunt, UNIT_HighElvenArcher, UNIT_HighElvenSwordsman, UNIT_Huntress, UNIT_Hydromancer, UNIT_Knight, UNIT_MortarTeam,
  UNIT_MountainGiant, UNIT_Necromancer, UNIT_NightElfAssassin, UNIT_NightElfCourier, UNIT_OrcWarchief, UNIT_Priest,
  UNIT_Rifleman, UNIT_Shaman, UNIT_Shandris, UNIT_SkeletalOrc, UNIT_SkeletalOrcChampion,
  UNIT_SkeletalOrcGrunt, UNIT_Sorceress, UNIT_Spiritwalker, UNIT_SpiritWolfLevel3, UNIT_Tauren, UNIT_TheCaptain, UNIT_War2Warlock, UNIT_Watcher, UNIT_WitchDoctor,
  UNIT_Wraith,
} from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { setAttention } from 'lib/systems/unit_interaction';
import { Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import {
  buildTrigger, getTimeS, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  fadeUnit, getClosestUnitInRangeOfUnit, getDummyMaster, getUnitsInRangeOfLoc, getUnitsInRect, makeFlyable, setNeverDie,
} from 'lib/unit';
import { pickRandom, pickRandomMany, waitUntil } from 'lib/utils';
import { BlackTurban } from 'quests/black_turban/black_turban';
import {
  Effect,
  sleep, Sound, Timer, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { restoreCameraBound, updateCameraBound } from '../../lib/camerabounds';
import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Cementary\'s Ghost Party';
const questDescription = 'Three ghost ladies ask your for a favor, go to Phantom Fest and enjoy the party.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNGhost.blp';
const questItems = [
  'Go to Phantom Fest at the Cementery',
  'Enjoy the party',
];

let introSounds: sound[][];
let joinSounds: sound[][];
let pooperSounds: sound[][];
let midFightSounds: sound[][];
let winSounds: sound[][];
let loseSounds: sound[][];

const ghostR = 200;
const ghostG = 200;
const ghostB = 200;
const ghostA = 75;

const debug = true;

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
    introSounds = [
      // Gwen - 11Labs Gigi
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
      // Lila - 11Labs Jessica
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
      // Bella - 11Labs Lily
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

    joinSounds = [
      // Gwen
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-5.mp3',
          'Ghost Gwen',
          'Hey, look at this place! It\'s even more spectral than we imagined! The grand Phantom Fest!',
        ),
      ],
      // Lila
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady2-5.mp3',
          'Ghost Lila',
          'Totally! This is your chance to shine, mortal. Mingle with everyone. The more people you talk to, the cooler you\'ll be!',
        ),
      ],
    ];

    pooperSounds = [
      // Bella
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady3-5.mp3',
          'Ghost Bella',
          'Ugh, there\'s always one party pooper. That downer over there just started a scene.',
        ),
      ],
      // Gwen
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-6.mp3',
          'Ghost Gwen',
          'Stay sharp, mortal. Sometimes a little chaos can be a blast. Just keep your eyes open!',
        ),
      ],
    ];

    midFightSounds = [
      // Lila
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady2-6.mp3',
          'Ghost Lila',
          'Oh, things are heating up! Everyone’s losing it!',
        ),
      ],
      // Gwen
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-7.mp3',
          'Ghost Gwen',
          'Quick! Take out as many of those crazies as you can. Trust us, nothing ups your coolness faster than surviving and thriving in a ghost brawl!',
        ),
      ],
    ];

    winSounds = [
      // Bella
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady3-6.mp3',
          'Ghost Bella',
          'Wow! You really outdid yourself! You\'re the life of the party!',
        ),
      ],
      // Gwen
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-8.mp3',
          'Ghost Gwen',
          'Absolutely! We couldn\'t have crashed this party any better without you. You\'re legendary! We can\'t wait for the next Phantom Fest with you. Goodbye for now!',
        ),
      ],
    ];

    loseSounds = [
      // Lila
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady2-7.mp3',
          'Ghost Lila',
          'Well, that was... something. It got a bit out of hand, but hey, you did great!',
        ),
      ],
      // Gwen
      [
        createDialogSound(
          'QuestSounds\\cementery\\cementary-lady1-9.mp3',
          'Ghost Gwen',
          'Yeah, maybe it wasn\'t perfect, but you still rocked it. Gotta say goodbye now, we\'re all too exhausted from the fun. See you in the afterlife!',
        ),
      ],
    ];
  }

  async register(): Promise<void> {
    const {
      ghostLadiesRect, cementeryEntryRect, partyRect, partyActivateRect, partySpawnRect,
    } = this.globals;
    let ghostLadies = getUnitsInRect(ghostLadiesRect);
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
      await talkGroup.speak(ghostLadies[0], introSounds[0][0], ghostLadies[1], ghostLadies[0]);
      await talkGroup.speak(ghostLadies[1], introSounds[1][0], ghostLadies[0], ghostLadies[1]);
      await talkGroup.speak(ghostLadies[2], introSounds[2][0], ghostLadies[1], ghostLadies[2]);

      await talkGroup.speak(ghostLadies[0], introSounds[0][1], ghostLadies[2], ghostLadies[0]);
      await talkGroup.speak(ghostLadies[1], introSounds[1][1], ghostLadies[0], ghostLadies[1]);

      await talkGroup.speak(ghostLadies[2], introSounds[2][1], traveler, ghostLadies[2]);

      await talkGroup.speak(ghostLadies[0], introSounds[0][2], traveler, traveler);
      await talkGroup.speak(ghostLadies[1], introSounds[1][2], traveler, traveler);
      await talkGroup.speak(ghostLadies[2], introSounds[2][2], traveler, traveler);

      await talkGroup.speak(ghostLadies[0], introSounds[0][3], traveler, traveler);
      await talkGroup.speak(ghostLadies[1], introSounds[1][3], traveler, traveler);
      await talkGroup.speak(ghostLadies[2], introSounds[2][3], traveler, traveler);
    }

    const questLogPromise = QuestLog.create({
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

    // Possessed traveler automatically goes to party entry
    const dest = centerLocRect(cementeryEntryRect);

    if (!debug) {
      setGuardPosition(traveler, dest, 180, { maxRadius: 200 });
    } else {
      traveler.setPosition(dest.x, dest.y);
      PanCameraToTimedForPlayer(traveler.owner.handle, dest.x, dest.y, 0);
    }

    // Possessed traveler arrives at party entry, regains control
    await waitUntil(1, () => DistanceBetweenLocs(traveler, dest) < 150);
    traveler.disableAbility(ABILITY_ShadowMeld.id, false, false);
    await sleep(1);
    RescueUnitBJ(traveler.handle, travelerPlayer.handle, true);
    traveler.select(true);
    removeMinimapIcon(traveler);
    setNeverDie(traveler, false);
    removeGuardPosition(traveler);

    const questLog = await questLogPromise;
    await questLog.completeItem(0);

    // Wait until traveler enters party
    await waitUntil(1, () => isLocInRect(traveler, partyActivateRect));
    SetDoodadAnimationRect(partyActivateRect, FourCC('JOgr'), 'death', false);
    BlackTurban.disable();
    BlzEnableCursor(false);
    await sleep(1);

    CinematicFadeBJ(bj_CINEFADETYPE_FADEOUT, 0.5, 'ReplaceableTextures\\CameraMasks\\White_mask.blp', 0, 0, 0, 0);
    await sleep(1);
    SmartCameraPanBJ(traveler.owner.handle, tempLocation(traveler), 0);
    updateCameraBound([partySpawnRect]);

    // Spawn all party goers and define their behaviors
    const { partyGoers, chatSounds, attackSounds } = this.spawnParty();

    const leaveParty = (u: Unit): void => {
      partyGoers.delete(u);
      if (u !== traveler) {
        const fadeDuration = GetRandomReal(3, 6);
        fadeUnit(u, ghostR, ghostG, ghostB, ghostA, fadeDuration, () => false, () => u.destroy());
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
        const isVictimFriendly = !targetMap.has(victim);
        if (isVictimFriendly || GetRandomInt(1, 10) === 1) {
          setAttackTarget(victim, attacker);

          // nearby units also join the fight
          getUnitsInRangeOfLoc(
            attacker.acquireRange,
            attacker,
            (u) => !targetMap.has(u) && DistanceBetweenLocs(victim, u) >= (u.getField(UNIT_RF_MINIMUM_ATTACK_RANGE) as number),
          ).forEach((u) => {
            if (GetRandomInt(1, 2) === 1) {
              setTimeout(GetRandomReal(0, 5), () => setAttackTarget(u, victim));
            }
          });

          getUnitsInRangeOfLoc(
            victim.acquireRange,
            victim,
            (u) => !targetMap.has(u) && DistanceBetweenLocs(attacker, u) >= (u.getField(UNIT_RF_MINIMUM_ATTACK_RANGE) as number),
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
          const volume = !isAggressive ? GetRandomInt(1, 10) : GetRandomInt(10, 20);
          snd.setVolume(volume);
          snd.start();
          snd.setChannel(2);
          nextSoundTimestampS.set(unit, now + snd.duration / 1000 + GetRandomReal(1, 5));
          const speakEffect = Effect.createAttachment(MODEL_Chat_Bubble, unit, 'overhead');
          setTimeout(snd.duration / 1000, () => speakEffect.destroy());
        }
      }
    }));

    // Change volume group so that we can hear chats
    const setPartyVolumeGroup = (): void => {
      VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITSOUNDS, 0.1);
      VolumeGroupSetVolume(SOUND_VOLUMEGROUP_COMBAT, 0.1);
      VolumeGroupSetVolume(SOUND_VOLUMEGROUP_SPELLS, 0.1);
    };
    setPartyVolumeGroup();

    // Re-create ghost ladies, since old ones are technically dead after possession.
    ghostLadies = [
      Unit.create(traveler.owner, UNIT_Wraith.id, traveler.x, traveler.y, GetRandomDirectionDeg()),
      Unit.create(traveler.owner, UNIT_Banshee.id, traveler.x, traveler.y, GetRandomDirectionDeg()),
      Unit.create(traveler.owner, UNIT_Ghost.id, traveler.x, traveler.y, GetRandomDirectionDeg()),
    ].sort((u1, u2) => u2.level - u1.level);

    // Ghost ladies follow traveler
    ghostLadies.forEach((u) => {
      makeFlyable(u);
      u.setPathing(false);
      u.addAbility(ABILITY_Locust.id);
      u.invulnerable = true;
      u.moveSpeed = traveler.moveSpeed + 100;
      u.maxMana = 0; // avoid casting spells
      u.mana = 0;
      u.color = PLAYER_COLOR_COAL;
    });
    const ghostLadiesTimer = setIntervalIndefinite(1, () => {
      ghostLadies.forEach((u) => setGuardPosition(
        u,
        PolarProjection(traveler, GetRandomReal(150, 250), GetRandomDirectionDeg()),
        GetRandomDirectionDeg(),
        { maxRadius: 500, includeUserUnit: true },
      ));
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
        if (Unit.fromEvent() === traveler) {
          ghostLadies.forEach((u) => u.issueTargetOrder(OrderId.Attack, target));
        }
      });
    });
    rightClickTrigger.enabled = false; // initially not enabled, until brawl starts

    // Fade in, party starts now
    await sleep(3);
    CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 0.5, 'ReplaceableTextures\\CameraMasks\\White_mask.blp', 0, 0, 0, 0);
    BlzEnableCursor(true);

    await sleep(1);
    await playSpeech(ghostLadies[0], joinSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
    await playSpeech(ghostLadies[1], joinSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });

    let isPartyEnded = false;
    const partyEndedPromise = waitUntil(1, () => partyGoers.size === 1 || !partyGoers.has(traveler))
      .then(() => isPartyEnded = true);

    // A party pooper appears after a while
    setTimeout(10, async () => {
      if (isPartyEnded) return;
      rightClickTrigger.enabled = true;

      // pan camera to a random party pooper
      const partyPooper = partyGoers.getRandom();
      PanCameraToTimedForPlayer(traveler.owner.handle, partyPooper.x, partyPooper.y, 0.5);
      enableQuestMarker(partyPooper, 'new');

      // party pooper shouts
      const atkSound = pickRandom(attackSounds.get(partyPooper));
      if (atkSound) {
        atkSound.setVolume(127);
        atkSound.start();
        nextSoundTimestampS.set(partyPooper, getTimeS() + atkSound.duration / 1000 + GetRandomReal(0, 5));
        const speakEffect = Effect.createAttachment(MODEL_Chat_Bubble, partyPooper, 'overhead');
        await sleep(atkSound.duration / 1000);
        speakEffect.destroy();
      }

      // party pooper attacks
      setAttackTargetNearby(partyPooper);
      await sleep(2);
      disableQuestMarker(partyPooper);

      // ghost ladies comment
      await playSpeech(ghostLadies[2], pooperSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
      await playSpeech(ghostLadies[0], pooperSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });

      // ghost ladies comment, mid brawl
      await sleep(3);
      await waitUntil(1, () => targetMap.size > partyGoers.size * 0.8 || isPartyEnded);
      if (!isPartyEnded) {
        await playSpeech(ghostLadies[1], midFightSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
        await playSpeech(ghostLadies[0], midFightSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });
      }
    });

    await partyEndedPromise;

    // Ghost ladies say good bye
    if (traveler.isAlive()) {
      await playSpeech(ghostLadies[2], winSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
      await playSpeech(ghostLadies[0], winSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });
    } else {
      await playSpeech(ghostLadies[1], loseSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
      await playSpeech(ghostLadies[0], loseSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });
    }
    ghostLadies.forEach((u) => {
      removeGuardPosition(u);
      leaveParty(u);
    });

    await sleep(1);

    // Clean up
    timers.forEach((t) => t.destroy());
    damageTrigger.destroy();
    rightClickTrigger.destroy();
    ghostLadiesTimer.destroy();

    partyGoers.forEach((u) => setTimeout(GetRandomReal(0, 5), () => u.kill()));
    VolumeGroupReset();
    restoreCameraBound();
    BlackTurban.enable();

    // Complete quest and rewards
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
      UNIT_Ghoul,
      UNIT_Abomination,
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

      // Heroes
      ...pickRandomMany(ALL_HEROES, 15)
        // Ignore those are too strong, or Akama which has Lich King's voice
        .filter((hero) => ![HERO_archimonde, HERO_tichondrius, HERO_cenarius, HERO_Mannoroth, HERO_akama].includes(hero))
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
        const snd = Sound.create(path, false, false, false, 1, 1, 'DefaultEAXON');
        // snd.setDistances(1000, 3000);
        // AttachSoundToUnit(snd.handle, unit.handle);
        chatSounds.get(unit).push(snd);
      }
      const unitAttackSounds = getUnitSounds(unit.typeId, 'YesAttack', 'Warcry');
      for (const path of unitAttackSounds) {
        const snd = Sound.create(path, false, false, false, 1, 1, 'DefaultEAXON');
        // snd.setDistances(1000, 3000);
        // AttachSoundToUnit(snd.handle, unit.handle);
        attackSounds.get(unit).push(snd);
      }
    }

    return { partyGoers, chatSounds, attackSounds };
  }

  onForceComplete(): void {
  }
}
