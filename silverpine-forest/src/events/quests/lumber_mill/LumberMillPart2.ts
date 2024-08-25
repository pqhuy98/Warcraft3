/* eslint-disable max-len */
import { mainPlayer, playerForsaken, playerHumanAlliance } from 'lib/constants';
import {
  AngleBetweenLocs,
  centerLocRect,
  DistanceBetweenLocs,
  isLocInRect,
  PolarProjection,
  randomLocRect,
} from 'lib/location';
import { setAllianceState2Way } from 'lib/player';
import {
  createDialogSound,
  QuestLog,
} from 'lib/quest_helpers';
import { playSpeech } from 'lib/sound';
import { removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { disableInteractSound, setAttention, UnitInteraction } from 'lib/systems/unit_interaction';
import { setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { setUnitFacingWithRate } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import {
  Unit,
} from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base_quest';

const questName = 'Lumber Mill, part 2';
const questDescription = 'Upon returning to town with the dire news of the undead threat, John and Peter report the situation to Knight Gareth. In response, Gareth sends a small squad of footmen to accompany the two men back to the lumber mill for further investigation.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNHumanLumberMill.blp';
const questItems = [
  'Escort John, Peter, and the footmen to the lumber mill',
  'Slay all attacking undeads',
  'Report back to knight Gareth',
];

const rewardXp = 900;

let peterIntro: sound;
let knightIntro: sound;
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
    lumberMillFrontRect: rect
    lumberMillRect: rect
    homeRect: rect
  }) {
    super(globals);

    // Peter: ElevenLabs - Eric
    // Knight: ElevenLabs - Arnold
    peterIntro = createDialogSound(
      'QuestSounds\\lumber-mill-part-2\\lumber-mill-part-2-john-intro.mp3',
      'Villager Peter',
      'Sir, we have dire news! Our farm\'s lumberjacks are dead, they were killed by undead near the mill!',
    );
    knightIntro = createDialogSound(
      'QuestSounds\\lumber-mill-part-2\\lumber-mill-part-2-knight-intro.mp3',
      'Knight Gareth',
      'Undead? Are you sure?... Fine... Soldiers, escort these peasants to the lumber mill and investigate further. But you peasants better not waste our time!',
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

  async register() {
    const {
      john, peter, knight, mayor, footmen,
      undeadAttackers,
      lumberMillRect, lumberMillFrontRect, homeRect,
    } = this.globals;
    knight.name = 'Knight Gareth';

    await waitUntil(3, () => this.requiredQuestsDone());
    disableInteractSound(knight, peter);

    // Wait to start
    const traveler = await this.talkToQuestGiver(peter);
    knight.shareVision(traveler.owner, true);

    // Peter and knight discussing
    setAttention(john, knight);
    [knight, ...footmen].forEach((u) => setAttention(u, peter));
    await playSpeech(peter, peterIntro, knight);

    const knightSpeech = playSpeech(knight, knightIntro, john);
    setTimeout(3, () => {
      footmen.forEach((u) => setAttention(u, knight));
    });
    setTimeout(7, () => {
      footmen.forEach((u) => setAttention(u, john));
    });
    await knightSpeech;

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: [questItems[0]],
    });

    // All units start moving to lumber mill
    const escortUnits = [...footmen, john, peter];
    const rectLumberMillFront = lumberMillFrontRect;
    removeGuardPosition(...escortUnits);
    for (const unit of escortUnits) {
      unit.moveSpeed = 200;
      const dest = randomLocRect(rectLumberMillFront);
      setGuardPosition(unit, dest, AngleBetweenLocs(dest, centerLocRect(lumberMillRect)));
    }

    await waitUntil(2.231, () => escortUnits.every((u) => isLocInRect(u, rectLumberMillFront) || !u.isAlive()));

    questLog.completeItem(0);

    // Undead started attacking
    setAllianceState2Way(mainPlayer, playerHumanAlliance, 'allied');
    setAllianceState2Way(playerHumanAlliance, playerForsaken, 'enemy');
    setAllianceState2Way(mainPlayer, playerForsaken, 'enemy');

    removeGuardPosition(...undeadAttackers);
    waitUntil(1, () => { // non-blocking
      const victim = [...footmen, traveler].find((u) => u.isAlive());
      if (!victim) return true;
      undeadAttackers.forEach((u) => setGuardPosition(u, victim, GetRandomDirectionDeg()));
      return false;
    });

    escortUnits.forEach((u) => {
      setUnitFacingWithRate(u, AngleBetweenLocs(u, undeadAttackers[0]));
    });

    // Wait until bloodshed
    await waitUntil(0.5, () => footmen.some((footman) => footman.life < footman.maxLife));

    // Peter and John run home
    const homeLoc = centerLocRect(homeRect);
    setGuardPosition(peter, homeLoc, 0);
    setGuardPosition(john, homeLoc, 0);
    await playSpeech(peter, peterRunForLife);
    waitUntil(1, () => { // do not block thread
      if (isLocInRect(peter, homeRect)) peter.show = false;
      if (isLocInRect(john, homeRect)) john.show = false;
      removeGuardPosition(peter, john);
      return isLocInRect(peter, homeRect) && isLocInRect(john, homeRect);
    });

    let undeadAlive = undeadAttackers.filter((u) => !u.isAlive()).length;
    await questLog.insertItem(`${questItems[1]} (${undeadAlive} / ${undeadAttackers.length})`);

    // wait until all undeads and footmen die, or player dies

    const killTimer = setIntervalIndefinite(5, () => {
      const newUndeadAlive = undeadAttackers.filter((u) => !u.isAlive()).length;
      if (undeadAlive !== newUndeadAlive) {
        undeadAlive = newUndeadAlive;
        questLog.updateItem(1, `${questItems[1]} (${undeadAlive} / ${undeadAttackers.length})`);
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
      questLog.updateItem(1, `${questItems[1]} (${undeadAttackers.length} / ${undeadAttackers.length})`);
      await questLog.completeItem(1);
      await questLog.insertItem(questItems[2]);
      await UnitInteraction.waitUntilQuestTalk(knight);

      setAllianceState2Way(mainPlayer, playerHumanAlliance, 'neutral');
      setAllianceState2Way(playerHumanAlliance, playerForsaken, 'neutral');
      setAllianceState2Way(mainPlayer, playerForsaken, 'neutral');

      await playSpeech(knight, knightOutro, traveler);

      traveler.addExperience(rewardXp, true);
      await questLog.completeWithRewards([
        `${rewardXp} experience`,
      ]);

      const loc = PolarProjection(mayor, 300, AngleBetweenLocs(mayor, knight));
      setGuardPosition(knight, loc, AngleBetweenLocs(loc, mayor));
      await waitUntil(1, () => DistanceBetweenLocs(knight, loc) < 50);
      this.complete();
    } else {
      await questLog.fail();
    }
  }

  onForceComplete() {
    const {
      john, peter, homeRect, knight, mayor, footmen, undeadAttackers,
    } = this.globals;

    UnitInteraction.removeAllQuestTalks(knight);

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
    setGuardPosition(knight, loc, AngleBetweenLocs(loc, mayor));
  }
}
