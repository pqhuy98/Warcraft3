/* eslint-disable max-len */

import { TalkGroup } from 'events/talk_group';
import { mainPlayer, playerForsaken, playerHumanAlliance } from 'lib/constants';
import { centerLocRect, randomLocRect } from 'lib/location';
import { setAllianceState2Way } from 'lib/player';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { giveItemReward, setMinimapIconUnit } from 'lib/quests/utils';
import {
  UNIT_Abomination, UNIT_CryptFiend, UNIT_Gargoyle, UNIT_Ghoul, UNIT_MeatWagon, UNIT_Zombie,
} from 'lib/resources/war3-units';
import { guardCurrentPosition, removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import {
  getUnitsInRangeOfLoc, getUnitsInRect, isBuilding, setNeverDie,
} from 'lib/unit';
import { waitUntil } from 'lib/utils';
import {
  Unit,
} from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Lumber Mill, part 3';
const questDescription = 'Following the devastating ambush at the lumber mill, where brave soldiers lost their lives to a horde of undead, Mayor Darius has ordered an immediate counterattack. Join forces with Knight Gareth and the Ambermill warriors to launch a retaliatory strike against the undead base.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNBlackCitadel.blp';
const questItems = [
  'Destroy the undead base and slay all undeads',
];

const knightName = 'Knight Gareth';
const mayorName = 'Mayor Darius Crowley';

const rewardItem = FourCC('stwp'); // Town portal scroll
const rewardXp = 1200;

let knightIntro1: sound;
let mayorIntro1: sound;
let mayorIntro2: sound;
let knightIntro2: sound;
let mayorOutro1: sound;
let mayorOutro2: sound;

export class StrikeBack extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    knight: Unit
    mayor: Unit
    undeadBaseRect: rect
    humanBaseRect: rect
    knightRectAfterQuest: rect
  }) {
    super(globals);
    knightIntro1 = createDialogSound(
      'QuestSounds\\strike-back\\strike-back-knight-intro-1.mp3',
      knightName,
      'Mayor, I bring dire news. Our patrol to the lumber mill was ambushed by a horde of undead. All our men... they didn\'t make it back. This traveler managed to kill the Lich leader and escape, but the situation is grave.',
    );
    mayorIntro1 = createDialogSound(
      'QuestSounds\\strike-back\\strike-back-mayor-intro-1.mp3',
      mayorName,
      'This is unthinkable. Such a loss... Those brave souls... We can\'t let their deaths be in vain. The undead must be eradicated, once and for all.',
    );
    mayorIntro2 = createDialogSound(
      'QuestSounds\\strike-back\\strike-back-mayor-intro-2.mp3',
      mayorName,
      'We must strike back immediately. Rally all available forces. Inform the captains and gather our best fighters. This town will not stand idly by while these abominations threaten our people. Prepare for an assault on the undead base. We must wipe them out completely.',
    );
    knightIntro2 = createDialogSound(
      'QuestSounds\\strike-back\\strike-back-knight-intro-2.mp3',
      knightName,
      'Understood, Mayor. We will avenge our fallen brothers and ensure this threat is eliminated.',
    );
    mayorOutro1 = createDialogSound(
      'QuestSounds\\strike-back\\strike-back-mayor-outro-1.mp3',
      mayorName,
      'Well done, hero! You\'ve saved Ambermill town from a dire threat. As a token of our gratitude, I grant you vision of Ambermill and a town portal scroll—it will allow you to travel here instantly.',
    );
    mayorOutro2 = createDialogSound(
      'QuestSounds\\strike-back\\strike-back-mayor-outro-2.mp3',
      mayorName,
      'Additionally, I have written you a recommendation letter. Show this to the leader of Shadowfang City for access and recognition if you ever find yourself there. Your bravery shall not be forgotten.',
    );
  }

  async register(): Promise<void> {
    const { undeadBaseRect } = this.globals;
    const undeadBuildings = getUnitsInRect(undeadBaseRect, (u) => u.owner === playerForsaken && isBuilding(u));

    const {
      knight, mayor, humanBaseRect, knightRectAfterQuest,
    } = this.globals;
    knight.name = knightName;
    mayor.nameProper = mayorName;
    mayor.name = 'Mayor of Ambermill';
    setNeverDie(mayor, true, 100);
    setNeverDie(knight, true, 100);

    await this.waitDependenciesDone();

    let traveler = await this.talkToQuestGiver(knight, true);

    mayor.shareVision(traveler.owner, true);

    const talkGroup = new TalkGroup([
      knight, mayor,
      ...getUnitsInRangeOfLoc(500, mayor, (u) => !isBuilding(u)),
    ]);
    await talkGroup.speak(knight, knightIntro1, mayor, knight);
    await talkGroup.speak(mayor, mayorIntro1, knight, knight);
    await talkGroup.speak(mayor, mayorIntro2, knight, knight);
    await talkGroup.speak(knight, knightIntro2, mayor, knight);
    talkGroup.finish();

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: questItems,
    });

    const controllables = getUnitsInRect(humanBaseRect, (u) => !isBuilding(u)
      && !u.isHero()
      && !u.isUnitType(UNIT_TYPE_PEON)
      && u.isAlive()
      && u.owner === mayor.owner);

    // Grant control of ally warriors
    controllables.forEach((u) => {
      guardCurrentPosition(u);
      RescueUnitBJ(u.handle, mainPlayer.handle, false);
    });
    setNeverDie(knight, false);

    // Prepare undead base
    const undeadQuota = {
      [UNIT_Ghoul.id]: 8,
      [UNIT_Abomination.id]: 4,
      [UNIT_Zombie.id]: 8,
      [UNIT_CryptFiend.id]: 3,
      [UNIT_Gargoyle.id]: 3,
      [UNIT_MeatWagon.id]: 2,
    };
    const undeads = getUnitsInRect(undeadBaseRect, (u) => u.owner === playerForsaken && u.isAlive());
    undeads.forEach((u) => {
      if (!(u.typeId in undeadQuota) || undeadQuota[u.typeId] <= 0) {
        u.kill();
        u.show = false;
      }
      if (u.typeId in undeadQuota) {
        undeadQuota[u.typeId]--;
      }
    });
    undeadBuildings.forEach((u, i) => {
      if (!u.isAlive()) {
        undeadBuildings[i] = Unit.create(u.owner, u.typeId, u.x, u.y, u.facing);
      }
    });

    Object.keys(undeadQuota).forEach((typeId) => {
      if (undeadQuota[typeId] > 0) {
        for (let i = 0; i < undeadQuota[typeId]; i++) {
          const loc = randomLocRect(undeadBaseRect);
          const newUndead = Unit.create(playerForsaken, parseInt(typeId, 10), loc.x, loc.y, GetRandomDirectionDeg());
          undeads.push(newUndead);
        }
      }
    });
    undeads.push(...undeadBuildings);

    removeGuardPosition(...undeads);
    undeads.forEach((u) => {
      u.life = u.maxLife;
      setMinimapIconUnit(u, 'enemyStatic');
    });
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitUntil(3, () => {
      // wait until some undead is attacked
      const attackedUndead = undeads.find((u) => u.life < u.maxLife);
      return attackedUndead != null;
    }).then(() => {
      // send whole base to help
      const attackedUndead = undeads.find((u) => u.life < u.maxLife);
      undeads.forEach((u) => setGuardPosition(u, attackedUndead, u.facing));
    });

    // Set alliance settings
    setAllianceState2Way(mainPlayer, playerHumanAlliance, 'allied');
    setAllianceState2Way(playerHumanAlliance, playerForsaken, 'enemy');
    setAllianceState2Way(mainPlayer, playerForsaken, 'enemy');

    // Wait until success/failure
    await Promise.race([
      waitUntil(2, () => !traveler.isAlive()),
      waitUntil(2, () => undeads.every((u) => !u.isAlive())),
    ]);

    const knightNewLoc = centerLocRect(knightRectAfterQuest);
    setGuardPosition(knight, knightNewLoc, 225);
    if (traveler.isAlive()) {
      controllables.forEach((u) => {
        u.setOwner(mayor.owner, true);
        u.removeGuardPosition();
        u.shareVision(traveler.owner, true);
      });

      setAllianceState2Way(mainPlayer, playerHumanAlliance, 'allied');
      setAllianceState2Way(playerForsaken, playerHumanAlliance, 'neutral');
      setAllianceState2Way(mainPlayer, playerForsaken, 'neutral');

      traveler = await this.waitForTurnIn(mayor);
      const talkGroup2 = new TalkGroup([mayor, traveler]);
      await talkGroup2.speak(mayor, mayorOutro1, traveler, traveler);
      await talkGroup2.speak(mayor, mayorOutro2, traveler, traveler);
      talkGroup2.finish();

      // grant vision of buildings
      getUnitsInRect(humanBaseRect, (u) => isBuilding(u) && u.owner === mayor.owner)
        .forEach((u) => u.shareVision(traveler.owner, true));
      traveler.addExperience(rewardXp, true);
      await questLog.completeWithRewards([
        giveItemReward(mayor, rewardItem).name,
        `${rewardXp} experience`,
        'Town\'s vision',
      ]);
      this.complete();
    } else {
      await questLog.fail();
      this.fail();
    }
  }

  onForceComplete(): void {
    const {
      knight, mayor,
      undeadBaseRect, humanBaseRect, knightRectAfterQuest,
    } = this.globals;

    const undeads = getUnitsInRect(undeadBaseRect, (u) => u.owner === playerForsaken && u.isAlive());
    undeads.forEach((u) => u.kill());

    const knightNewLoc = centerLocRect(knightRectAfterQuest);
    knight.setPosition(knightNewLoc.x, knightNewLoc.y);
    setGuardPosition(knight, knightNewLoc, 225);

    getUnitsInRect(humanBaseRect, (u) => u.owner === mayor.owner)
      .forEach((u) => u.shareVision(mainPlayer, true));
    setAllianceState2Way(mainPlayer, playerHumanAlliance, 'allied');
  }
}
