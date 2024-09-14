/* eslint-disable max-len */
import { TalkGroup } from 'events/talk_group';
import { mainPlayer, playerForsaken, playerHumanAlliance } from 'lib/constants';
import {
  AngleBetweenLocs,
  centerLocRect,
  DistanceBetweenLocs,
  isLocInRect,
  PolarProjection,
} from 'lib/location';
import { setAllianceState2Way } from 'lib/player';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { ABILITY_DivineShieldCreep } from 'lib/resources/war3-abilities';
import { UNIT_Footman } from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { guardCurrentPosition, removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { setAttention } from 'lib/systems/unit_interaction';
import { setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { getUnitsInRangeOfLoc, setNeverDie, setUnitFacingWithRate } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import {
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Lumber Mill, part 2';
const questDescription = 'Upon returning to town with the dire news of the undead threat, John and Peter report the situation to Knight Gareth. In response, Gareth sends a small squad of footmen to accompany the two men back to the lumber mill for further investigation.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNHumanLumberMill.blp';
const questItems = [
  'Escort John, Peter, and the footmen to the lumber mill',
  'Slay all attacking undeads',
  'Report back to knight Gareth',
];

const rewardXp = 900;

let johnIntro: sound;
let knightIntro: sound;
let footmanFear: sound;
let footmanWarcry: sound;
let peterRunForLife: sound;
let knightOutro: sound;

export class LumberMillPart2 extends BaseQuest {
  constructor(private globals: BaseQuestProps & {
    john: Unit
    peter: Unit
    knight: Unit
    mayor: Unit
    footmen: Unit[]
    undeadAttackers: Unit[]
    lumberMillRect: rect
    homeRect: rect
  }) {
    super(globals);

    johnIntro = createDialogSound(
      'QuestSounds\\lumber-mill-part-2\\lumber-mill-part-2-john-intro.mp3',
      'Villager John',
      'Sir, we have dire news! Our farm\'s lumberjacks are dead, they were killed by undead near the mill!',
    );
    knightIntro = createDialogSound(
      'QuestSounds\\lumber-mill-part-2\\lumber-mill-part-2-knight-intro.mp3',
      'Knight Gareth',
      'Undead? Are you sure?... Fine... Soldiers, escort these peasants to the lumber mill and investigate further. But you peasants better not waste our time!',
    );
    footmanFear = createDialogSound(
      'QuestSounds\\lumber-mill-part-2\\lumber-mill-part-2-footman-1.mp3',
      'Footman',
      'This is a slaughter. They didn\'t stand a chance. Be on guard; we could be next.',
    );
    footmanWarcry = createDialogSound(
      'QuestSounds\\lumber-mill-part-2\\lumber-mill-part-2-footman-fight-1.mp3',
      'Footman',
      'The undead is attacking! Prepare for battle!',
    );
    peterRunForLife = createDialogSound(
      'QuestSounds\\lumber-mill-part-2\\lumber-mill-part-2-peter-run.mp3',
      'Villager Peter',
      'Undead! Run for your life!',
    );
    knightOutro = createDialogSound(
      'QuestSounds\\lumber-mill-part-2\\lumber-mill-part-2-knight-outro.mp3',
      'Knight Gareth',
      'All our men... gone?... This is a grave blow, beyond words. I must inform the mayor immediately. Your bravery is noted for taking down the Lich. But this loss... it\'s devastating.',
    );
  }

  async register(): Promise<void> {
    const {
      john, peter, knight, mayor, footmen,
      undeadAttackers,
      lumberMillRect, homeRect,
    } = this.globals;
    knight.name = 'Knight Gareth';
    knight.addAbility(ABILITY_DivineShieldCreep.id);
    knight.maxMana = 125;
    knight.mana = knight.maxMana;
    setNeverDie(knight, true, 100);

    await this.waitDependenciesDone();

    // Wait to start
    let traveler = await this.talkToQuestGiver(john, true);
    knight.shareVision(traveler.owner, true);

    // Peter and knight discussing
    setAttention(john, knight);
    setAttention(peter, knight);
    [knight, ...footmen].forEach((u) => setAttention(u, peter));

    const talkGroup1 = new TalkGroup([john, peter, knight, ...footmen, traveler]);
    await talkGroup1.speak(john, johnIntro, knight, john);
    const knightSpeech = talkGroup1.speak(knight, knightIntro, john, john);
    setTimeout(4, () => {
      // Knight now order footmen to help
      footmen.forEach((u) => setAttention(u, knight));
    });
    setTimeout(8, () => {
      // Knight now mock peasants
      footmen.forEach((u) => setAttention(u, john));
    });
    await knightSpeech;
    talkGroup1.finish();

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: [questItems[0]],
    });

    // All units start moving to lumber mill
    const escortUnits = [...footmen, john, peter];
    const lumberMillLoc = centerLocRect(lumberMillRect);
    removeGuardPosition(...escortUnits);
    for (const unit of escortUnits) {
      unit.shareVision(traveler.owner, true);
      unit.moveSpeed = 200;
      setGuardPosition(unit, lumberMillLoc, AngleBetweenLocs(unit, lumberMillLoc));
    }

    const distanceThreshold = 500;
    let footmenFearSpoke = false;
    await waitUntil(1, () => {
      escortUnits.forEach((u) => {
        if (DistanceBetweenLocs(u, lumberMillLoc) < distanceThreshold) {
          u.issueImmediateOrder(OrderId.Stop);
          guardCurrentPosition(u);
          if (u.typeId === UNIT_Footman.id && !footmenFearSpoke) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            playSpeech(u, footmanFear);
            footmenFearSpoke = true;
          }
        }
      });
      return escortUnits.every((u) => DistanceBetweenLocs(u, lumberMillLoc) < distanceThreshold || !u.isAlive());
    });

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    questLog.completeItem(0);

    // Undead started attacking
    setAllianceState2Way(mainPlayer, playerHumanAlliance, 'allied');
    setAllianceState2Way(playerHumanAlliance, playerForsaken, 'enemy');
    setAllianceState2Way(mainPlayer, playerForsaken, 'enemy');

    removeGuardPosition(...undeadAttackers);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitUntil(1, () => { // non-blocking
      const victim = [...footmen, traveler].find((u) => u.isAlive());
      if (!victim) return true;
      undeadAttackers.forEach((u) => setGuardPosition(u, victim, GetRandomDirectionDeg()));
      return false;
    });

    escortUnits.forEach((u) => {
      setUnitFacingWithRate(u, AngleBetweenLocs(u, undeadAttackers[0]));
    });

    // Wait until undead nearby
    await waitUntil(0.25, () => footmen.some((footman) => getUnitsInRangeOfLoc(
      600,
      footman,
      (undead) => undead.isAlive() && footman.isEnemy(undead.owner) && undead.isVisible(footman.owner),
    ).length > 0));

    removeGuardPosition(...footmen);
    setNeverDie(john, true, 5);
    setNeverDie(peter, true, 5);
    const talkGroup2 = new TalkGroup([john, peter, ...footmen]);
    await talkGroup2.speak(footmen[0], footmanWarcry, null, null);

    // Peter and John run home
    const homeLoc = centerLocRect(homeRect);
    setGuardPosition(peter, homeLoc, 0);
    setGuardPosition(john, homeLoc, 0);
    await talkGroup2.speak(peter, peterRunForLife, null, null);
    talkGroup2.finish();

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitUntil(1, () => { // make sure they enter their house, do not block thread
      if (isLocInRect(peter, homeRect)) peter.show = false;
      if (isLocInRect(john, homeRect)) john.show = false;
      const isDone = (isLocInRect(peter, homeRect) || !peter.isAlive())
        && (isLocInRect(john, homeRect) || !john.isAlive());
      if (isDone) {
        removeGuardPosition(peter, john);
      }
      return isDone;
    });

    // Update quest log
    let undeadAlive = undeadAttackers.filter((u) => !u.isAlive()).length;
    await questLog.insertItem(`${questItems[1]} (${undeadAlive} / ${undeadAttackers.length})`);

    // knight gareth casts protection if low till end of quest
    // so that he doesn't die accidentally
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitUntil(1, () => {
      if (knight.life < knight.maxLife - 300) {
        knight.issueImmediateOrder(OrderId.Divineshield);
        return true;
      }
      return this.isCompleted() || this.isFailed();
    });

    // wait until all undeads and footmen die, or player dies

    const killTimer = setIntervalIndefinite(10, () => {
      const newUndeadAlive = undeadAttackers.filter((u) => !u.isAlive()).length;
      if (undeadAlive !== newUndeadAlive) {
        undeadAlive = newUndeadAlive;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        questLog.updateItem(1, `${questItems[1]} (${undeadAlive} / ${undeadAttackers.length})`);
      }
      if (undeadAlive === 0) {
        footmen.filter((u) => u.isAlive()).forEach((u) => setTimeout(GetRandomReal(0, 2), () => u.kill()));
      }
    });

    await Promise.race([
      waitUntil(1, () => [...footmen, ...undeadAttackers].every((u) => !u.isAlive())),
      waitUntil(1, () => !traveler.isAlive()),
    ]);
    killTimer.pause();
    killTimer.destroy();

    removeGuardPosition(...footmen, ...undeadAttackers);

    if (traveler.isAlive()) {
      escortUnits.forEach((u) => u.shareVision(traveler.owner, false));
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      questLog.updateItem(1, `${questItems[1]} (${undeadAttackers.length} / ${undeadAttackers.length})`);
      await questLog.completeItem(1);
      await questLog.insertItem(questItems[2]);
      traveler = await this.waitForTurnIn(knight);

      setAllianceState2Way(mainPlayer, playerHumanAlliance, 'neutral');
      setAllianceState2Way(playerHumanAlliance, playerForsaken, 'neutral');
      setAllianceState2Way(mainPlayer, playerForsaken, 'neutral');

      await playSpeech(knight, knightOutro, traveler);

      const loc = PolarProjection(mayor, 300, AngleBetweenLocs(mayor, knight));
      setGuardPosition(knight, loc, AngleBetweenLocs(loc, mayor));

      traveler.addExperience(rewardXp, true);
      await questLog.completeWithRewards([
        `${rewardXp} experience`,
      ]);

      await waitUntil(1, () => DistanceBetweenLocs(knight, loc) < 50);
      this.complete();
    } else {
      await questLog.fail();
      this.fail();
    }
  }

  onForceComplete(): void {
    const {
      john, peter, homeRect, knight, mayor, footmen, undeadAttackers,
    } = this.globals;

    const homeLoc = centerLocRect(homeRect);
    john.show = false;
    peter.show = false;
    john.setPosition(homeLoc.x, homeLoc.y);
    peter.setPosition(homeLoc.x, homeLoc.y);

    [...footmen, ...undeadAttackers].forEach((u) => {
      u.show = false;
      u.kill();
    });

    const loc = PolarProjection(mayor, 300, AngleBetweenLocs(mayor, knight));
    knight.setPosition(loc.x, loc.y);
    knight.facing = AngleBetweenLocs(loc, mayor);
    setGuardPosition(knight, loc, AngleBetweenLocs(loc, mayor));
  }
}
