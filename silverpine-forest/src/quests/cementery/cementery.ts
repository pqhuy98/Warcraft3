import { lockCameraBound, panCameraSmart, restoreCameraBound } from 'lib/camera';
import {
  ABILITY_ID_POSSESSION_TARGET_HERO,
} from 'lib/constants';
import {
  centerLocRect, Distance, isLocInRect, PolarProjection,
} from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { TalkGroup } from 'lib/quests/talk_group';
import {
  cinematicFadeIn,
  cinematicFadeOut,
  disableQuestMarker, enableQuestMarker, removeMinimapIcon, setMinimapIconUnit,
} from 'lib/quests/utils';
import {
  ABILITY_Locust, ABILITY_Possession, ABILITY_ShadowMeld,
} from 'lib/resources/war3-abilities';
import {
  UNIT_Banshee, UNIT_Ghost,
  UNIT_Wraith,
} from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { setAttention } from 'lib/systems/unit_interaction';
import { Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import {
  buildTrigger, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import { getUnitsInRect, makeFlyable, setNeverDie } from 'lib/unit';
import { pickRandom, waitUntil } from 'lib/utils';
import { BlackTurban } from 'quests/black_turban/black_turban';
import {
  sleep, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';
import { CementeryParty } from './party';
import {
  ghostA, ghostB, ghostG, ghostR,
} from './spawn_party';

const debug = false;

const questName = 'Cementary\'s Ghost Party';
const questDescription = 'Three ghost ladies ask your for a favor, go to Phantom Fest and enjoy the party.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNGhost.blp';
const questItems = [
  'Go to Phantom Fest at the Cementery',
  'Enjoy the party',
];

const introSounds = [
  // Gwen - 11Labs Gigi
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-1.mp3',
      'Ghost Gwen',
      'Ugh, I can’t believe we didn’t get invited to the Phantom Fest. It’s like, the party of the century!',
    ),

    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-2.mp3',
      'Ghost Gwen',
      'Seriously! And, I heard they’re serving ectoplasm cocktails. Like, what even is that? It sounds totally rad!',
    ),
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-3.mp3',
      'Ghost Gwen',
      'You\'re right, Bella. Hey, you there, warrior! Wanna help some lovely ladies out?',
    ),
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-4.mp3',
      'Ghost Gwen',
      'So, what do you say? Help us crash the party? It’ll be a haunted blast!',
    ),
  ],
  // Lila - 11Labs Jessica
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady2-1.mp3',
      'Ghost Lila',
      'I know, right? Everyone who’s anyone will be there. Elite ghosts, high-quality guys… It’s so unfair!',
    ),
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady2-2.mp3',
      'Ghost Lila',
      'We need to find a way in, for real. But how? We don’t have invitations.',
    ),
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady2-3.mp3',
      'Ghost Lila',
      'Yeah, there’s this wicked party, called Phantom Fest at the big Cemetery. Totally exclusive.',
    ),
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady2-4.mp3',
      'Ghost Lila',
      'Pleaaase? You just need to pay a little visit for us. No biggie!',
    ),
  ],
  // Bella - 11Labs Lily
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady3-1.mp3',
      'Ghost Bella',
      'And did you hear? They’re having this super cool spectral dance-off! I would have so owned that dance floor.',
    ),
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady3-2.mp3',
      'Ghost Bella',
      'Speaking of which, who’s that mortal coming up here? Maybe we can use him…',
    ),
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady3-3.mp3',
      'Ghost Bella',
      'All the cool ghosts will be there. Like, elite level. We’re talking high-quality guys.',
    ),
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady3-4.mp3',
      'Ghost Bella',
      'We bet you like adventure, right? This will be the most thrilling one yet!',
    ),
  ],
];

const joinSounds = [
  // Gwen
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-5.mp3',
      'Ghost Gwen',
      'Hey, look at this place! It\'s even more spectral than we imagined! The grand Phantom Fest!',
    ),
  ],
  // Lila
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady2-5.mp3',
      'Ghost Lila',
      'Totally! This is your chance to shine, mortal. Mingle with everyone. The more people you talk to, the cooler you\'ll be!',
    ),
  ],
];

const pooperSounds = [
  // Bella
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady3-5.mp3',
      'Ghost Bella',
      'Ugh, there\'s always one party pooper. That downer over there just started a scene.',
    ),
  ],
  // Gwen
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-6.mp3',
      'Ghost Gwen',
      'Stay sharp, mortal. Sometimes a little chaos can be a blast. Just keep your eyes open!',
    ),
  ],
];

const midFightSounds = [
  // Lila
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady2-6.mp3',
      'Ghost Lila',
      'Oh, things are heating up! Everyone’s losing it!',
    ),
  ],
  // Gwen
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-7.mp3',
      'Ghost Gwen',
      'Quick! Take out as many of those crazies as you can. Trust us, nothing ups your coolness faster than surviving and thriving in a ghost brawl!',
    ),
  ],
];

const winSounds = [
  // Bella
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady3-6.mp3',
      'Ghost Bella',
      'Wow! You really outdid yourself! You\'re the life of the party!',
    ),
  ],
  // Gwen
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-8.mp3',
      'Ghost Gwen',
      'Absolutely! We couldn\'t have crashed this party any better without you. You\'re legendary! We can\'t wait for the next Phantom Fest with you. Goodbye for now!',
    ),
  ],
];

const loseSounds = [
  // Lila
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady2-7.mp3',
      'Ghost Lila',
      'Well, that was... something. It got a bit out of hand, but hey, you did great!',
    ),
  ],
  // Gwen
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-9.mp3',
      'Ghost Gwen',
      'Yeah, maybe it wasn\'t perfect, but you still rocked it. Gotta say goodbye now, we\'re all too exhausted from the fun. See you in the afterlife!',
    ),
  ],
];

const leaveSounds = [
  // Lila
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady2-8.mp3',
      'Ghost Lila',
      'Oh no, you\'re leaving? Looks like we have no choice but to leave with you. We were finally starting to have some fun!',
    ),
  ],
  // Gwen
  [
    createDialogSound(
      'QuestSounds\\__refined\\cementery\\cementary-lady1-10.mp3',
      'Ghost Gwen',
      'Leaving already, huh? That means we\'re out too. We were hoping you\'d stick around a bit longer. What a disappointment...',
    ),
  ],
];

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
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.register();
  }

  private async register(): Promise<void> {
    const {
      ghostLadiesRect, cementeryEntryRect, partyRect, partyActivateRect, partySpawnRect,
    } = this.globals;
    let ghostLadies = getUnitsInRect(ghostLadiesRect);
    ghostLadies.sort((u1, u2) => u2.level - u1.level);

    const questGiver = pickRandom(ghostLadies);
    ghostLadies.forEach((u) => {
      setNeverDie(u);
      setUnitFlag(ghostLadies[0], Flag.UNBREAKABLE_ATTENTION, true);
      u.setVertexColor(ghostR, ghostG, ghostB, ghostA);
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
    await waitUntil(1, () => Distance(traveler, dest) < 150);
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

    cinematicFadeOut(0.5);
    await sleep(1);
    panCameraSmart(traveler, 0);
    lockCameraBound([partySpawnRect]);

    // Spawn all party goers and define their behaviors
    const party = CementeryParty.create({
      traveler, partySpawnRect, partyRect,
    });

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
      u.setVertexColor(ghostR, ghostG, ghostB, ghostA);
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
              && party.goers.has(target);
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
    cinematicFadeIn(0.5);
    BlzEnableCursor(true);

    await sleep(1);
    await playSpeech(ghostLadies[0], joinSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
    await playSpeech(ghostLadies[1], joinSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });

    let isPartyEnded = false;
    const partyEndedPromise = waitUntil(1, () => party.goers.size === 1 || !party.goers.has(traveler))
      .then(() => isPartyEnded = true);

    // A party pooper appears after a while
    setTimeout(10, async () => {
      if (isPartyEnded) return;
      rightClickTrigger.enabled = true;

      // pan camera to a random party pooper
      const partyPooper = party.goers.getRandom();
      PanCameraToTimedForPlayer(traveler.owner.handle, partyPooper.x, partyPooper.y, 0.5);
      enableQuestMarker(partyPooper, 'new');

      // party pooper shouts
      const atkSound = pickRandom(party.attackSounds.get(partyPooper));
      if (atkSound) {
        await party.playSoundUnit(partyPooper, atkSound, 127);
      }

      // party pooper attacks
      party.setAttackTargetNearby(partyPooper);
      await sleep(2);
      disableQuestMarker(partyPooper);

      // ghost ladies comment
      await playSpeech(ghostLadies[2], pooperSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
      await playSpeech(ghostLadies[0], pooperSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });

      // ghost ladies comment, mid brawl
      await sleep(3);
      await waitUntil(1, () => party.countAttackers() > party.goers.size * 0.8 || isPartyEnded);
      if (!isPartyEnded) {
        await playSpeech(ghostLadies[1], midFightSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
        await playSpeech(ghostLadies[0], midFightSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });
      }
    });

    await partyEndedPromise;

    // Ghost ladies say good bye
    if (!party.goers.has(traveler)) {
      if (traveler.isAlive()) {
        // player leaving
        await playSpeech(ghostLadies[1], leaveSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
        await playSpeech(ghostLadies[0], leaveSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });
      } else {
        // player is dead
        await playSpeech(ghostLadies[1], loseSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
        await playSpeech(ghostLadies[0], loseSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });
      }
    } else {
      // player won and alive
      await playSpeech(ghostLadies[2], winSounds[0][0], undefined, { ignoreVolumeGroupAdjustment: true });
      await playSpeech(ghostLadies[0], winSounds[1][0], undefined, { ignoreVolumeGroupAdjustment: true });
    }
    ghostLadies.forEach((u) => {
      removeGuardPosition(u);
      setTimeout(GetRandomReal(0, 1), () => u.kill());
    });

    // Clean up
    party.destroy();
    rightClickTrigger.destroy();
    ghostLadiesTimer.destroy();

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

  onForceComplete(): void {
  }
}
