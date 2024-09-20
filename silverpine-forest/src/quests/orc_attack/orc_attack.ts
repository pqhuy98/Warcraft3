/* eslint-disable max-len */
import {
  AngleBetweenLocs,
  centerLocRect,
  DistanceBetweenLocs,
  PolarProjection,
  randomLocRect,
  tempLocation,
} from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import { QuestLog } from 'lib/quests/quest_log';
import { TalkGroup } from 'lib/quests/talk_group';
import { disableQuestMarker, enableQuestMarker } from 'lib/quests/utils';
import {
  UNIT_Barracks,
  UNIT_Beastiary,
  UNIT_Demolisher,
  UNIT_Footman,
  UNIT_Grunt, UNIT_HeadHunter, UNIT_HumanShipyard, UNIT_KodoBeast, UNIT_Raider,
  UNIT_Shaman,
  UNIT_SpiritLodge,
  UNIT_TYPE,
} from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import {
  isPreservedUnitAlive, preserveUnit, RestoreMode, restoreUnit,
} from 'lib/systems/preserve_unit';
import { guardCurrentPosition, pauseGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { setTimeout } from 'lib/trigger';
import {
  getUnitsInRangeOfLoc, getUnitsInRect, isBuilding, isOrganic, setNeverDie,
} from 'lib/unit';
import { waitUntil } from 'lib/utils';
import { MapPlayer, sleep, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';
import { BlackTurban } from '../black_turban/black_turban';

const questName = 'Three Dead Men';
const questDescription = 'After discovering a hidden mana spot, you return to Archmage Landazar, who hints at more such spots to power your abilities. Suddenly, Footman Aldric rushes in with dire news - three soldiers at the shipyard have been found dead in the nearby forest. Sent to assist, you meet Captain Thaddeus, who confirms the severity of the situation.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNGrunt.blp';
const questItems = [
  'Defend the Human Shipyard against the oncoming threats.',
];

const rewardXp = 900;

const orcAttackWaves: [UNIT_TYPE, number][][] = [
  [[UNIT_Grunt, 2], [UNIT_Raider, 2]],
  [[UNIT_Grunt, 3], [UNIT_Raider, 3], [UNIT_HeadHunter, 2]],
  [[UNIT_Grunt, 3], [UNIT_Raider, 3], [UNIT_HeadHunter, 2], [UNIT_Shaman, 2]],
  [[UNIT_Grunt, 4], [UNIT_Raider, 4], [UNIT_HeadHunter, 4], [UNIT_Shaman, 3], [UNIT_KodoBeast, 1]],
  [[UNIT_Grunt, 4], [UNIT_Raider, 4], [UNIT_HeadHunter, 4], [UNIT_Shaman, 3], [UNIT_KodoBeast, 1], [UNIT_Demolisher, 1]],
  [[UNIT_Grunt, 6], [UNIT_Raider, 6], [UNIT_HeadHunter, 6], [UNIT_Shaman, 4], [UNIT_KodoBeast, 2], [UNIT_Demolisher, 2]],
];

const orcTrainingBuildings: [UNIT_TYPE, UNIT_TYPE][] = [
  [UNIT_Grunt, UNIT_Barracks],
  [UNIT_Raider, UNIT_Beastiary],
  [UNIT_HeadHunter, UNIT_Barracks],
  [UNIT_Shaman, UNIT_SpiritLodge],
  [UNIT_KodoBeast, UNIT_Beastiary],
  [UNIT_Demolisher, UNIT_Barracks],
];

let archMageSounds: sound[];
let footmanSounds: sound[];
let captainSounds: sound[];
let gruntSounds: sound[];

const archMageName = 'ArchMage Landazar';
const footmanName = 'Footman Aldric';
const captainName = 'Captain Thaddeus';

export class OrcAttack extends BaseQuest {
  constructor(private globals: BaseQuestProps & {
    archmage: Unit
    footman: Unit
    footManNewLocRec: rect
    corpsesRect: rect
    captain: Unit
    humanShipyardRect: rect
    orcPlayer: MapPlayer
    orcBaseRect: rect
    orcGatherRect: rect
  }) {
    super(globals);

    archMageSounds = [
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-archmage-1.mp3',
        archMageName,
        'Ah, you\'re back! I see you\'ve discovered the hidden mana spot by the south watch tower. Excellent work!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-archmage-2.mp3',
        archMageName,
        'Not only have you found the secret, but it has also unlocked the next level Summon Water Elemental for you. Your abilities continue to impress me.',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-archmage-3.mp3',
        archMageName,
        'There are other hidden spots like these scattered across the land. They can further enhance your powers if you\'re able to locate them.',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-archmage-4.mp3',
        archMageName,
        'Such a grim discovery... We can\'t afford to ignore this. Immediate investigation is crucial.',
      ),
    ];

    footmanSounds = [
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-footman-1.mp3',
        footmanName,
        'Archmage Landazar, urgent news—several of our footmen at the shipyard have been found dead in the nearby forest, dismembered. We have no idea what caused it.',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-footman-2.mp3',
        footmanName,
        'Stranger, you\'ll help us investigate? That’s a relief. Your presence will be a great morale booster for those remaining.',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-footman-3.mp3',
        footmanName,
        'Captain, the Archmage Landazar has sent this one to assist us.',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-footman-4.mp3',
        footmanName,
        'Captain, more coming! This time they\'ve brought HeadHunters. We need to take them down quickly!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-footman-5.mp3',
        footmanName,
        'This is their biggest push yet! They’ve even brought a Demolisher to raze our structure!',
      ),
    ];

    captainSounds = [
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-captain-1.mp3',
        captainName,
        'Thank you, it’s good to have you here. We need all the help we can get. Three of our men just died brutally just near the south forest.',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-captain-2.mp3',
        captainName,
        'It\'s the orcs—they must have been the ones who killed our men near the south forest. Prepare yourselves, everyone!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-captain-3.mp3',
        captainName,
        'Here they come again! Now they have Shamans with them. Watch out for their spells!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-captain-4.mp3',
        captainName,
        'They\'re sending in a beast this time and with a larger force. Aim for the Kodo Beast, it\'s their key strength!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-captain-5.mp3',
        captainName,
        'There are so many of them! They\'re throwing everything they have at us. Hold the line at all costs!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-captain-6.mp3',
        captainName,
        'We\'ve lost a lot of good men today. The shipyard\'s army is hurting bad. You\'re strong, very strong—but even the strongest warrior can\'t do it alone.',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-captain-7.mp3',
        captainName,
        'Remember this: true power lies not in being the best warrior, but in leading many strong ones.',
      ),
    ];

    gruntSounds = [
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-grunt-1.mp3',
        'Orc Grunt',
        'Humans, you trespass on our land! This territory belongs to the Horde! We will take it back with blood and honor!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-grunt-2.mp3',
        'Orc Grunt',
        'Brothers, the humans are weakening! Push harder and show them our true might!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-grunt-3.mp3',
        'Orc Grunt',
        'Prepare yourselves, warriors! We will break their lines and take what is ours!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-grunt-4.mp3',
        'Orc Grunt',
        'The undead fell to our axes, and so will you. The Horde is unstoppable!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-grunt-5.mp3',
        'Orc Grunt',
        'Warriors of the Horde, press on! Remember the strength of Grom Hellscream!',
      ),
      createDialogSound(
        'QuestSounds\\__refined\\orc-attack\\orc-attack-grunt-6.mp3',
        'Orc Grunt',
        'This is the final wave, warriors! Attack with all your strength! Victory for the Horde!',
      ),
    ];
  }

  async register(): Promise<void> {
    const {
      archmage, footman, footManNewLocRec, corpsesRect,
      captain,
      humanShipyardRect, orcBaseRect, orcPlayer,
    } = this.globals;
    footman.name = footmanName;
    captain.name = captainName;
    setNeverDie(footman);
    setNeverDie(captain);
    setNeverDie(archmage);

    getUnitsInRect(orcBaseRect, (u) => u.owner === orcPlayer)
      .forEach((u) => setNeverDie(u));

    await this.waitDependenciesDone();

    // Create corpses
    for (let i = 0; i < 3; i++) {
      CreatePermanentCorpseLocBJ(
        bj_CORPSETYPE_FLESH,
        UNIT_Footman.id,
        captain.owner.handle,
        tempLocation(randomLocRect(corpsesRect)),
        GetRandomDirectionDeg(),
      );
    }

    // Archmage talks with player
    let traveler = await this.talkToQuestGiver(archmage, true);
    BlackTurban.disable();

    const talkGroup = new TalkGroup([
      traveler, archmage,
      ...getUnitsInRangeOfLoc(800, archmage, (u) => u.isAlive() && isOrganic(u)),
    ]);
    await talkGroup.speak(archmage, archMageSounds[0], traveler, traveler);
    await talkGroup.speak(archmage, archMageSounds[1], traveler, traveler);
    await talkGroup.speak(archmage, archMageSounds[2], traveler, traveler);
    talkGroup.finish();

    // then footman arrives with urgent news
    const footmanNewLoc = centerLocRect(footManNewLocRec);
    footman.setPosition(footmanNewLoc.x, footmanNewLoc.y);
    pauseGuardPosition([footman], true);

    const footmanMoveLoc = PolarProjection(archmage, 300, 90);
    footman.issueOrderAt(OrderId.Move, footmanMoveLoc.x, footmanMoveLoc.y);
    await sleep(1);
    SmartCameraPanBJ(
      traveler.owner.handle,
      tempLocation(PolarProjection(footman, footman.moveSpeed * 2, AngleBetweenLocs(footman, archmage))),
      1,
    );

    // everyone looks at footman
    setTimeout(1, () => {
      talkGroup.setEveryoneAttention(footman);
    });

    await waitUntil(1, () => DistanceBetweenLocs(footman, archmage) < 500);

    talkGroup.addUnit(footman);
    await talkGroup.speak(footman, footmanSounds[0], archmage, footman);
    await talkGroup.speak(archmage, archMageSounds[3], footman, footman);
    await sleep(1);
    await talkGroup.speak(footman, footmanSounds[1], traveler, traveler);

    setGuardPosition(
      footman,
      PolarProjection(captain, 200, AngleBetweenLocs(captain, footman)),
      AngleBetweenLocs(footman, captain),
    );
    enableQuestMarker(footman, 'new');
    footman.shareVision(traveler.owner, true);

    await sleep(3);
    talkGroup.finish();

    // Wait till footman returns to shipyard
    await waitUntil(1, () => DistanceBetweenLocs(footman, captain) < 300);
    disableQuestMarker(footman);
    const humanShipyard = getUnitsInRect(humanShipyardRect, (u) => u.owner === captain.owner && u.typeId === UNIT_HumanShipyard.id)[0];
    humanShipyard.shareVision(traveler.owner, true);

    traveler = await this.waitForTurnIn(footman);

    const talkGroup2 = new TalkGroup([
      traveler, captain, footman,
      ...getUnitsInRangeOfLoc(800, captain, (u) => u.isAlive() && isOrganic(u)),
    ]);

    // the orc prepares attack now to avoid waiting long
    const orcAttackPromise = this.orcAttacking(humanShipyard, talkGroup2);
    await talkGroup2.speak(footman, footmanSounds[2], captain, traveler);
    await talkGroup2.speak(captain, captainSounds[0], traveler, traveler);
    talkGroup2.finish();

    captain.shareVision(traveler.owner, true);
    getUnitsInRect(humanShipyardRect, (u) => u.isAlive() && u.owner === captain.owner)
      .forEach((u) => guardCurrentPosition(u));
    setNeverDie(footman, false);
    setNeverDie(captain, false);
    preserveUnit(captain);

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: questItems,
    });

    // Wait till Orc attack waves complete
    const result = await orcAttackPromise;
    if (result === 'no more wave') {
      humanShipyard.shareVision(traveler.owner, false);
      footman.shareVision(traveler.owner, false);

      if (!isPreservedUnitAlive(captain)) {
        restoreUnit(captain, RestoreMode.BEFORE_DEATH);
        setNeverDie(captain, true, 50);
        captain.life = GetRandomReal(1, 50);
      }

      await sleep(1);
      await playSpeech(captain, captainSounds[5]);
      await playSpeech(captain, captainSounds[6]);
      traveler.addExperience(rewardXp, true);
      await questLog.completeWithRewards([
        `${rewardXp} experience`,
      ]);
      this.complete();
    } else {
      await questLog.fail();
      this.fail();
    }
    BlackTurban.enable();
  }

  async orcAttacking(target: Unit, talkGroup: TalkGroup): Promise<'target dead' | 'no more wave'> {
    const {
      captain, footman, orcBaseRect, orcGatherRect, orcPlayer,
    } = this.globals;
    const speeches: {unit?: Unit, unitType?: UNIT_TYPE, sound: sound}[][] = [
      [{ unitType: UNIT_Grunt, sound: gruntSounds[0] }, { unit: captain, sound: captainSounds[1] }],
      [{ unitType: UNIT_Grunt, sound: gruntSounds[1] }, { unit: footman, sound: footmanSounds[3] }],
      [{ unitType: UNIT_Grunt, sound: gruntSounds[2] }, { unit: captain, sound: captainSounds[2] }],
      [{ unitType: UNIT_Grunt, sound: gruntSounds[3] }, { unit: captain, sound: captainSounds[3] }],
      [{ unitType: UNIT_Grunt, sound: gruntSounds[4] }, { unit: footman, sound: footmanSounds[4] }],
      [{ unitType: UNIT_Grunt, sound: gruntSounds[5] }, { unit: captain, sound: captainSounds[4] }],
    ];
    const orcBuildings = getUnitsInRect(orcBaseRect, (u) => isBuilding(u) && u.isAlive() && u.owner === orcPlayer);
    orcBuildings.forEach((u) => setNeverDie(u, true));
    const gatherLoc = centerLocRect(orcGatherRect);

    let oldAttackers: Unit[] = [];

    for (const wave of orcAttackWaves) {
      const attackers: Unit[] = [];

      // Train units
      for (const [unitType, count] of wave.reverse()) {
        const buildingType = orcTrainingBuildings.find(([warrior]) => warrior === unitType)[1];
        const building = orcBuildings.find((u) => u.typeId === buildingType.id);
        const loc = PolarProjection(building, 100, 225);

        for (let i = 0; i < count; i++) {
          building.setAnimation('stand work');
          const attacker = Unit.create(orcPlayer, unitType.id, loc.x, loc.y, 250);
          attackers.push(attacker);
          setGuardPosition(attacker, gatherLoc, 0, { maxRadius: 600 });
          attacker.issueOrderAt(OrderId.Move, gatherLoc.x, gatherLoc.y);
          await sleep(1);
        }
        building.queueAnimation('stand');
      }

      // Wait old attack completes
      // eslint-disable-next-line no-loop-func
      await waitUntil(1, () => oldAttackers.every((u) => !u.isAlive()) || !target.isAlive());
      if (!target.isAlive()) {
        return 'target dead';
      }

      // Launch attack
      const avgSpeed = attackers.reduce((acc, u) => acc + u.defaultMoveSpeed, 0) / attackers.length;
      attackers.forEach((u) => {
        u.moveSpeed = avgSpeed;
        u.issueOrderAt(OrderId.Attack, target.x, target.y);
        setGuardPosition(u, target, 0);
      });

      let attackersArrive = false;
      await waitUntil(1, () => {
        if (!attackersArrive && attackers.some((u) => u.life < u.maxLife)) {
          attackersArrive = true;
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          (async (): Promise<void> => {
            for (const { unit, unitType, sound } of speeches[0]) {
              if (unit && isPreservedUnitAlive(unit)) {
                await talkGroup.speak(unit, sound, null, null);
              } else if (unitType) {
                const speaker = attackers.find((u) => u.typeId === unitType.id);
                await talkGroup.speak(speaker, sound, null, null);
              }
              await sleep(0.5);
            }
            speeches.splice(0, 1);
          })();
        }

        return attackersArrive || attackers.every((u) => !u.isAlive()) || !target.isAlive();
      });
      if (!target.isAlive()) {
        return 'target dead';
      }
      // Continue to train next wave
      oldAttackers = attackers;
    }

    // wait last wave completes
    await waitUntil(1, () => oldAttackers.every((u) => !u.isAlive()) || !target.isAlive());
    if (!target.isAlive()) {
      return 'target dead';
    }
    return 'no more wave';
  }

  onForceComplete(): void {
  }
}
