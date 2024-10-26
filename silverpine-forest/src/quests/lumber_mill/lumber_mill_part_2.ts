/* eslint-disable max-len */
import { playerForsaken, playerHumanAlliance, playerMain } from 'lib/constants';
import {
  Angle,
  centerLocRect,
  Distance,
  isLocInRect,
  PolarProjection,
} from 'lib/location';
import { setAllianceState2Way } from 'lib/player';
import { dialogue } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { TalkGroup } from 'lib/quests/talk_group';
import { ABILITY_DivineShieldCreep } from 'lib/resources/war3-abilities';
import { UNIT_Footman } from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import {
  isPreservedUnitAlive, preserveUnit, RestoreMode, restoreUnit,
  undoPreserveUnit,
} from 'lib/systems/preserve_unit';
import { guardCurrentPosition, removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { setAttention } from 'lib/systems/unit_interaction';
import { setIntervalIndefinite, setTimeout } from 'lib/trigger';
import {
  getMainHero, getUnitsInRangeOfLoc, setNeverDie, setUnitFacingWithRate,
} from 'lib/unit';
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

const johnIntro = dialogue(
  'QuestSounds\\__refined\\lumber-mill-part-2\\lumber-mill-part-2-john-intro.mp3',
  'Villager John',
  'Sir, we have dire news! Our farm\'s lumberjacks are dead, they were killed by undead near the mill!',
);
const knightIntro = dialogue(
  'QuestSounds\\__refined\\lumber-mill-part-2\\lumber-mill-part-2-knight-intro.mp3',
  'Knight Gareth',
  'Undead? Are you sure?... Fine... Soldiers, escort these peasants to the lumber mill and investigate further. But you peasants better not waste our time!',
);
const footmanFear = dialogue(
  'QuestSounds\\__refined\\lumber-mill-part-2\\lumber-mill-part-2-footman-1.mp3',
  'Footman',
  'This is a slaughter. They didn\'t stand a chance. Be on guard; we could be next.',
);
const footmanWarcry = dialogue(
  'QuestSounds\\__refined\\lumber-mill-part-2\\lumber-mill-part-2-footman-fight-1.mp3',
  'Footman',
  'The undead is attacking! Prepare for battle!',
);
const peterRunForLife = dialogue(
  'QuestSounds\\__refined\\lumber-mill-part-2\\lumber-mill-part-2-peter-run.mp3',
  'Villager Peter',
  'Undead! Run for your life!',
);
const knightOutro = dialogue(
  'QuestSounds\\__refined\\lumber-mill-part-2\\lumber-mill-part-2-knight-outro.mp3',
  'Knight Gareth',
  'All our men... gone?... This is a grave blow, beyond words. I must inform the mayor immediately. Your bravery is noted for taking down the Lich. But this loss... it\'s devastating.',
);

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
    void this.register();
  }

  private async register(): Promise<void> {
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
    undeadAttackers.forEach((u) => preserveUnit(u));

    await this.waitDependenciesDone();

    // Wait to start
    let traveler = await this.talkToQuestGiver(john, true);
    knight.shareVision(traveler.owner, true);

    // Peter and knight discussing
    setAttention(john, knight);
    setAttention(peter, knight);
    [knight, ...footmen].forEach((u) => setAttention(u, peter));

    const talkGroup = TalkGroup.create(john, peter, knight, ...footmen, traveler);
    await talkGroup.speak(john, johnIntro, knight, john);
    const knightSpeech = talkGroup.speak(knight, knightIntro, john, john);
    setTimeout(5, () => {
      // Knight now order footmen to help
      footmen.forEach((u) => setAttention(u, knight));
    });
    setTimeout(8, () => {
      // Knight now mock peasants
      footmen.forEach((u) => setAttention(u, john));
    });
    await knightSpeech;
    talkGroup.finish();

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: [questItems[0]],
    });

    undeadAttackers.forEach((u) => {
      if (!isPreservedUnitAlive(u)) {
        restoreUnit(u, RestoreMode.BEFORE_PRESERVE);
        undoPreserveUnit(u);
      }
    });

    // All units start moving to lumber mill
    const escortUnits = [...footmen, john, peter];
    const lumberMillLoc = centerLocRect(lumberMillRect);
    removeGuardPosition(...escortUnits);
    for (const unit of escortUnits) {
      unit.shareVision(traveler.owner, true);
      unit.moveSpeed = 200;
      setGuardPosition(unit, lumberMillLoc, Angle(unit, lumberMillLoc));
    }

    const distanceThreshold = 500;
    let footmenFearSpoke = false;
    await waitUntil(1, () => {
      escortUnits.forEach((u) => {
        if (Distance(u, lumberMillLoc) < distanceThreshold) {
          u.issueImmediateOrder(OrderId.Stop);
          guardCurrentPosition(u);
          if (u.typeId === UNIT_Footman.id && !footmenFearSpoke) {
            void playSpeech(u, footmanFear);
            footmenFearSpoke = true;
          }
        }
      });
      return escortUnits.every((u) => Distance(u, lumberMillLoc) < distanceThreshold || !u.isAlive());
    });

    void questLog.completeItem(0);

    // Undead started attacking
    setAllianceState2Way(playerMain, playerHumanAlliance, 'allied');
    setAllianceState2Way(playerHumanAlliance, playerForsaken, 'enemy');
    setAllianceState2Way(playerMain, playerForsaken, 'enemy');

    removeGuardPosition(...undeadAttackers);
    void waitUntil(1, () => { // non-blocking
      const victim = [...footmen, traveler].find((u) => u.isAlive());
      if (!victim) return true;
      undeadAttackers.forEach((u) => setGuardPosition(u, victim, GetRandomDirectionDeg()));
      return false;
    });

    escortUnits.forEach((u) => {
      setUnitFacingWithRate(u, Angle(u, undeadAttackers[0]));
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
    talkGroup.resetTo(john, peter, ...footmen);
    await talkGroup.speak(footmen[0], footmanWarcry, null, null);

    // Peter and John run home
    const homeLoc = centerLocRect(homeRect);
    setGuardPosition(peter, homeLoc, 0);
    setGuardPosition(john, homeLoc, 0);
    await talkGroup.speak(peter, peterRunForLife, null, null);
    talkGroup.finish();

    void waitUntil(1, () => { // make sure they enter their house, do not block thread
      if (isLocInRect(peter, homeRect)) peter.show = false;
      if (isLocInRect(john, homeRect)) john.show = false;
      const isDone = (isLocInRect(peter, homeRect) || !peter.isAlive())
        && (isLocInRect(john, homeRect) || !john.isAlive());
      if (isDone) {
        setNeverDie(john, false);
        setNeverDie(peter, false);
        removeGuardPosition(peter, john);
      }
      return isDone;
    });

    // Update quest log
    let undeadAlive = undeadAttackers.filter((u) => !isPreservedUnitAlive(u)).length;
    await questLog.insertItem(`${questItems[1]} (${undeadAlive} remaining)`);

    // knight gareth casts protection if low till end of quest
    // so that he doesn't die accidentally
    void waitUntil(1, () => {
      if (knight.life < knight.maxLife - 300) {
        knight.issueImmediateOrder(OrderId.Divineshield);
        return true;
      }
      return this.isCompleted() || this.isFailed();
    });

    // wait until all undeads and footmen die, or player dies

    const killTimer = setIntervalIndefinite(10, () => {
      const newUndeadAlive = undeadAttackers.filter((u) => isPreservedUnitAlive(u)).length;
      if (undeadAlive !== newUndeadAlive) {
        undeadAlive = newUndeadAlive;
        void questLog.updateItem(1, `${questItems[1]} (${undeadAlive} remaining)`);
      }
      if (undeadAlive === 0) {
        footmen.filter((u) => u.isAlive()).forEach((u) => setTimeout(GetRandomReal(0, 2), () => u.kill()));
      }
    });

    await waitUntil(1, () => [...footmen, ...undeadAttackers].every((u) => !isPreservedUnitAlive(u)));
    killTimer.pause();
    killTimer.destroy();

    removeGuardPosition(...footmen, ...undeadAttackers);

    escortUnits.forEach((u) => u.shareVision(traveler.owner, false));
    void questLog.updateItem(1, questItems[1]);
    await questLog.completeItem(1);
    await questLog.insertItem(questItems[2]);
    traveler = await this.waitForTurnIn(knight);

    setAllianceState2Way(playerMain, playerHumanAlliance, 'neutral');
    setAllianceState2Way(playerHumanAlliance, playerForsaken, 'neutral');
    setAllianceState2Way(playerMain, playerForsaken, 'neutral');

    await playSpeech(knight, knightOutro, traveler);

    const loc = PolarProjection(mayor, 300, Angle(mayor, knight));
    setGuardPosition(knight, loc, Angle(loc, mayor));

    traveler.addExperience(rewardXp, true);
    await questLog.completeWithRewards([
      `${rewardXp} experience`,
    ]);
    setNeverDie(knight, false);

    await waitUntil(1, () => Distance(knight, loc) < 50);
    this.complete();
  }

  onForceComplete(): void {
    const {
      john, peter, homeRect, knight, mayor, footmen, undeadAttackers,
    } = this.globals;
    setNeverDie(knight, false);

    const homeLoc = centerLocRect(homeRect);
    john.show = false;
    peter.show = false;
    john.setPosition(homeLoc.x, homeLoc.y);
    peter.setPosition(homeLoc.x, homeLoc.y);

    [...footmen, ...undeadAttackers].forEach((u) => {
      u.show = false;
      u.kill();
    });

    const loc = PolarProjection(mayor, 300, Angle(mayor, knight));
    knight.setPosition(loc.x, loc.y);
    knight.facing = Angle(loc, mayor);
    setGuardPosition(knight, loc, Angle(loc, mayor));

    const traveler = getMainHero();
    traveler.addExperience(rewardXp, true);
  }
}
