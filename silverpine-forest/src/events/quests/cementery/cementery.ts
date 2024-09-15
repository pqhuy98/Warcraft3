import { TalkGroup } from 'events/talk_group';
import { ABILITY_ID_POSSESSION_TARGET_HERO, mainPlayer, neutralPassive } from 'lib/constants';
import {
  AngleBetweenLocs, centerLocRect, DistanceBetweenLocs, isLocInRect, randomLocRect,
} from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { removeMinimapIcon, setMinimapIconUnit } from 'lib/quests/utils';
import {
  ABILITY_PermanentInvisibility, ABILITY_Possession, ABILITY_ShadowMeld, ABILITY_ShadowMeldAkama, ABILITY_ShadowMeldInstant,
} from 'lib/resources/war3-abilities';
import { ALL_HEROES } from 'lib/resources/war3-heroes';
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
import { getUnitsInRect, setNeverDie } from 'lib/unit';
import { pickRandom, pickRandomMany, waitUntil } from 'lib/utils';
import { sleep, Unit } from 'w3ts';
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

export class Cementery extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    ghostLadiesRect: rect
    cementeryEntryRect: rect
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
    const { ghostLadiesRect, cementeryEntryRect, partyActivateRect } = this.globals;
    const ghostLadies = getUnitsInRect(ghostLadiesRect);
    ghostLadies.sort((u1, u2) => u2.level - u1.level);

    const questGiver = pickRandom(ghostLadies);
    ghostLadies.forEach((u) => {
      setNeverDie(u);
      setUnitFlag(ghostLadies[0], Flag.UNBREAKABLE_ATTENTION, true);
      if (u !== questGiver) {
        setAttention(u, questGiver);
      }
    });
    ghostLadies[0].name = 'Ghost Gwen';
    ghostLadies[0].name = 'Ghost Lila';
    ghostLadies[0].name = 'Ghost Bella';
    const partyGoers = this.spawnParty();

    await this.waitDependenciesDone();

    const traveler = await this.talkToQuestGiver(ghostLadies[0], true);
    await sleep(0.5);

    const talkGroup = new TalkGroup([...ghostLadies, traveler]);

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

    for (const u of ghostLadies) {
      u.removeAbility(ABILITY_Possession.id);
      u.addAbility(ABILITY_ID_POSSESSION_TARGET_HERO);
      u.issueTargetOrder(OrderId.Possession, traveler);
    }

    await waitUntil(0.5, () => traveler.owner !== travelerPlayer);
    talkGroup.finish();

    setMinimapIconUnit(traveler, 'neutralActive');
    await sleep(3);
    setNeverDie(traveler);

    const dest = centerLocRect(cementeryEntryRect);
    setGuardPosition(traveler, dest, 180, 200);

    await waitUntil(1, () => DistanceBetweenLocs(traveler, dest) < 150);
    await sleep(1);
    RescueUnitBJ(traveler.handle, travelerPlayer.handle, true);
    removeMinimapIcon(traveler);
    setNeverDie(traveler, false);
    removeGuardPosition(traveler);

    await questLog.completeItem(0);

    await waitUntil(1, () => isLocInRect(traveler, partyActivateRect));

    CinematicFadeBJ(bj_CINEFADETYPE_FADEOUT, 0.5, 'ReplaceableTextures\\CameraMasks\\White_mask.blp', 0, 0, 0, 0);
    await sleep(0.5);
    partyGoers.forEach((u) => {
      u.show = true;
    });
    await sleep(1);
    CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 0.5, 'ReplaceableTextures\\CameraMasks\\White_mask.blp', 0, 0, 0, 0);
  }

  spawnParty(): Unit[] {
    const { partySpawnRect, partyStageRect } = this.globals;

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
      ...pickRandomMany(ALL_HEROES, 15).map((hero) => ({ code: hero.code, id: FourCC(hero.code) })),
    ];

    const stageLoc = centerLocRect(partyStageRect);
    const partyGoers: Unit[] = [];
    for (const goerType of partyGoerTypes) {
      const loc = randomLocRect(partySpawnRect);
      const unit = Unit.create(neutralPassive, goerType.id, loc.x, loc.y, AngleBetweenLocs(loc, stageLoc));
      unit.setVertexColor(255, 255, 255, 50);
      // unit.color = pickRandom(colors);
      unit.setPathing(false);
      unit.shareVision(mainPlayer, true);
      unit.selectionScale = 0.001;
      unit.maxLife = Math.max(100, unit.maxLife);
      unit.life = unit.maxLife;
      unit.removeAbility(ABILITY_ShadowMeld.id);
      unit.removeAbility(ABILITY_PermanentInvisibility.id);
      unit.removeAbility(ABILITY_ShadowMeldInstant.id);
      unit.removeAbility(ABILITY_ShadowMeldAkama.id);
      if (unit.isHero()) {
        unit.setHeroLevel(GetRandomInt(5, 30), false);
      }
      unit.show = false;
      setNeverDie(unit);
      partyGoers.push(unit);
    }

    return partyGoers;
  }

  onForceComplete(): void {
  }
}
