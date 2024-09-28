import { lockCameraBound, panCameraSmart, restoreCameraBound } from 'lib/camera';
import {
  ABILITY_ID_DECONSTRUCT,
  DESTRUCTABLE_TREE,
  mainPlayer,
  neutralHostile,
  playerHumanAlliance,
  UNIT_LumberMillQuest,
} from 'lib/constants';
import { getDestructablesInRect } from 'lib/destructable';
import { Angle, Distance, PolarProjection } from 'lib/location';
import { expandHull, getConvexHull, placeCircles } from 'lib/maths/convex_hull';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import { QuestLog } from 'lib/quests/quest_log';
import { TalkGroup } from 'lib/quests/talk_group';
import {
  MODEL_GlowingRunes0, MODEL_GlowingRunes1, MODEL_GlowingRunes2, MODEL_GlowingRunes3, MODEL_GlowingRunes4, MODEL_GlowingRunes5, MODEL_GlowingRunes6, MODEL_GlowingRunes7, MODEL_GlowingRunes8,
} from 'lib/resources/war3-models';
import { ORDER_AutoHarvestLumber } from 'lib/resources/war3-orders';
import {
  UNIT_AltarofKings, UNIT_ArcaneSanctum, UNIT_ArcaneTower, UNIT_ArcaneVault, UNIT_Blacksmith,
  UNIT_CannonTower, UNIT_Farm, UNIT_Footman, UNIT_GryphonAviary, UNIT_GuardTower, UNIT_HumanBarracks, UNIT_LumberMill, UNIT_Peasant, UNIT_ScoutTower, UNIT_TownHall, UNIT_Workshop,
} from 'lib/resources/war3-units';
import { play3dSound, playSpeechUnitType } from 'lib/sound';
import { setGuardPosition } from 'lib/systems/unit_guard_position';
import { createTextTag, TTSetting } from 'lib/texttag';
import { setIntervalIndefinite } from 'lib/trigger';
import {
  getUnitsInRect, getUnitsOfPlayer, isUnitIdle, isUnitRemoved, setNeverDie,
} from 'lib/unit';
import { pickRandom, waitUntil } from 'lib/utils';
import { BlackTurban } from 'quests/black_turban/black_turban';
import {
  Effect,
  sleep,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Lumber Harvest';
const questDescription = 'Chop down all trees in the nearby land plot';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNHumanLumberUpgrade2.blp';
const questItems = [
  'Cut down all trees in the forest land plot',
];

const footmanSounds = [
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-1.mp3',
    'Footman',
    'Listen up, everyone. We need to clear this forest so Shadowfang city can start constructing a new factory here.',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-2.mp3',
    'Footman',
    'No excuses! We have to get this done. Keep your eyes sharp and stay together.',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-3.mp3',
    'Footman',
    'Get a hold of yourselves! We need to defend our position. Start building watch towers, now!',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-4.mp3',
    'Footman',
    'Keep your positions! Those watch towers will help us fend them off. Trust in our defenses and fight back!',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-5.mp3',
    'Footman',
    'Where are the watch towers? I told you to build watch towers!! Damn it, hold the line with what we have and defend yourselves! We can\'t afford to fail now!',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-6.mp3',
    'Footman',
    'Well done, everyone. The wolves are gone. Let\'s finish chopping the trees.',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-7.mp3',
    'Footman',
    'We\'re almost there! Just a few more trees and the land will be cleared for the new factory. Keep going!',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-8.mp3',
    'Footman',
    'Excellent work, everyone. Shadowfang city can now proceed with the construction thanks to your efforts. You’ve all earned some well-deserved rest.',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-footman-9.mp3',
    'Footman',
    'Watch towers!! Why didn\'t you upgrade the watch towers??!! Damn it, these basic towers are useless! Hold the line with what we have and defend yourselves! We can’t afford to fail now!',
  ),
];

const peasantSounds = [
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-peasant-1.mp3',
    'Peasant',
    'But sir, this forest is known for its wolves…',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-peasant-2.mp3',
    'Peasant',
    'Did you hear that? Wolves! We\'re going to get eaten alive!',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-peasant-3.mp3',
    'Peasant',
    'Wolves! They\'re attacking us!',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-peasant-4.mp3',
    'Peasant',
    'We did it! The forest is cleared!',
  ),
];

const wolfSoundPath = 'QuestSounds\\__refined\\lumber-harvest\\lumber-harvest-wolf-1.mp3';

const treeHp = 100;
const effectDistance = 75;
const effectModels = [
  MODEL_GlowingRunes0,
  MODEL_GlowingRunes1,
  MODEL_GlowingRunes2,
  MODEL_GlowingRunes3,
  MODEL_GlowingRunes4,
  MODEL_GlowingRunes5,
  MODEL_GlowingRunes6,
  MODEL_GlowingRunes7,
  MODEL_GlowingRunes8,
];

const attackTowerTypes = [UNIT_GuardTower, UNIT_CannonTower, UNIT_ArcaneTower].map((t) => t.id);
const humanBuildingTypes = [...attackTowerTypes, UNIT_ScoutTower.id, UNIT_LumberMill.id];
const disabledTechs = [
  UNIT_TownHall,
  UNIT_AltarofKings,
  UNIT_Blacksmith,
  // UNIT_LumberMill,
  UNIT_HumanBarracks,
  UNIT_Workshop,
  UNIT_ArcaneSanctum,
  UNIT_ArcaneVault,
  UNIT_GryphonAviary,
  UNIT_Farm,
];

const debug = false;

export class LumberHarvest extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    treeRects: rect[]
  }) {
    super(globals);
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    this.register();
  }

  private async register(): Promise<void> {
    const {
      treeRects,
    } = this.globals;

    await this.waitDependenciesDone();

    BlackTurban.disable();
    const units = treeRects.flatMap((r) => getUnitsInRect(r, (u) => u.owner === playerHumanAlliance));
    const lumberMill = units.find((u) => u.typeId === UNIT_LumberMillQuest.id);
    const footmen = units.filter((u) => u.typeId === UNIT_Footman.id);
    const peasants = units.filter((u) => u.typeId === UNIT_Peasant.id);

    setNeverDie(footmen[0], true, 1);
    setNeverDie(peasants[0], true, 1);

    const traveler = await this.talkToQuestGiver(footmen[0], true);

    SetFloatGameState(GAME_STATE_TIME_OF_DAY, 18);

    const talkGroup = new TalkGroup([...footmen, ...peasants]);
    await talkGroup.speak(footmen[0], footmanSounds[0], peasants[0], footmen[0]);
    await talkGroup.speak(peasants[0], peasantSounds[0], footmen[0], peasants[0]);
    await talkGroup.speak(footmen[0], footmanSounds[1], peasants[0], footmen[0]);
    talkGroup.finish();

    const playerUnits = getUnitsInRect(GetWorldBounds(), (u) => u.owner === mainPlayer);
    playerUnits.forEach((u) => {
      u.paused = true;
      u.show = false;
    });

    let trees = treeRects.flatMap((r) => getDestructablesInRect(r, (d) => d.typeId === DESTRUCTABLE_TREE && d.life > 0));
    trees.forEach((d) => {
      d.life = treeHp;
      if (debug) d.life = 1;
    });

    // Grant player control
    const oldColor = mainPlayer.color;
    const oldGold = mainPlayer.getState(PLAYER_STATE_RESOURCE_GOLD);
    const oldLumber = mainPlayer.getState(PLAYER_STATE_RESOURCE_LUMBER);
    mainPlayer.color = PLAYER_COLOR_BLUE;
    mainPlayer.setState(PLAYER_STATE_RESOURCE_GOLD, 1000);
    mainPlayer.setState(PLAYER_STATE_RESOURCE_LUMBER, 300);

    units.forEach((u) => {
      RescueUnitBJ(u.handle, mainPlayer.handle, false);
      u.owner = mainPlayer;
      if (u.isUnitType(UNIT_TYPE_PEON)) {
        u.issueImmediateOrder(ORDER_AutoHarvestLumber);
      }
    });

    disabledTechs.forEach((t) => mainPlayer.setTechMaxAllowed(t.id, 0));

    // Create border effects
    const borderEffects: Effect[] = placeCircles(expandHull(getConvexHull([...trees, lumberMill]), effectDistance), effectDistance)
      .map((loc, i) => Effect.create(effectModels[i % effectModels.length], loc.x, loc.y));

    const enemies = treeRects.flatMap((r) => getUnitsInRect(r, (u) => u.owner === neutralHostile));

    mainPlayer.setState(PLAYER_STATE_RESOURCE_GOLD, 500);
    mainPlayer.setState(PLAYER_STATE_RESOURCE_LUMBER, 250);

    // start quest
    lockCameraBound([], [lumberMill, ...trees]);
    panCameraSmart(lumberMill, 1);

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: questItems,
    });

    // grant gold per sec
    const timer = setIntervalIndefinite(1, () => {
      mainPlayer.setState(PLAYER_STATE_RESOURCE_GOLD, mainPlayer.getState(PLAYER_STATE_RESOURCE_GOLD) + 10);
      createTextTag('+10', lumberMill, TTSetting.gold);
    });

    await sleep(1);
    await questLog.hint('You can train more peasants from Lumber Mill to chop down woods faster.');

    await sleep(5);
    await play3dSound(wolfSoundPath, pickRandom(enemies));
    await playSpeechUnitType(UNIT_Peasant, peasantSounds[1]);
    await playSpeechUnitType(UNIT_Footman, footmanSounds[2]);
    enemies.forEach((u) => {
      u.shareVision(mainPlayer, true);
      if (debug) u.life = 1;
    });

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    questLog.hint('Defend your camp by building Scout Towers then upgrade to Guard Tower, Cannon Tower, or Arcane Tower.');

    // Dialogues when wolves attack
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitUntil(1, () => {
      if (this.isOver()) return true;
      const isAttacking = enemies.some((u) => !isUnitIdle(u));
      if (isAttacking) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (async (): Promise<void> => {
          await playSpeechUnitType(UNIT_Peasant, peasantSounds[2]);

          const watchTowers = treeRects.flatMap((r) => getUnitsInRect(r, (u) => u.typeId === UNIT_ScoutTower.id && u.isAlive()));
          const attackTowers = treeRects.flatMap((r) => getUnitsInRect(r, (u) => attackTowerTypes.includes(u.typeId) && u.isAlive()));
          if (attackTowers.length > 0) {
            await playSpeechUnitType(UNIT_Footman, footmanSounds[3]);
          } else if (watchTowers.length > 0) {
            await playSpeechUnitType(UNIT_Footman, footmanSounds[8]);
          } else {
            await playSpeechUnitType(UNIT_Footman, footmanSounds[4]);
            await questLog.hint('Lumber Mill can activate Call To Arms to convert all nearby Peasants to Militia.');
          }

          // Dialogues when all wolves are dead
          await waitUntil(1, () => {
            if (this.isOver()) return true;
            const allEnemiesDead = enemies.every((u) => !u.isAlive());
            if (allEnemiesDead) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
              playSpeechUnitType(UNIT_Footman, footmanSounds[5]);
            }
            return allEnemiesDead;
          });
        })();
      }
      return isAttacking || enemies.every((u) => !u.isAlive());
    });

    // Hint build more lumber mills
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    const initialTreeCount = trees.length;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitUntil(1, () => {
      if (this.isOver()) return true;
      if (trees.length === initialTreeCount - 10) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        questLog.hint('Construct additional Lumber Mills to train more Peasants simultaneously and reduce the distance they travel to deliver lumber.');
        return true;
      }
      return false;
    });

    // Almost there dialogue
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitUntil(1, () => {
      if (this.isOver()) return true;
      if (trees.length <= 5) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        playSpeechUnitType(UNIT_Footman, footmanSounds[6]);
        return true;
      }
      return false;
    });

    // Quest's end condition
    await waitUntil(1, () => {
      trees = trees.filter((d) => d.life > 0);
      return trees.length === 0 || !lumberMill.isAlive();
    });

    if (lumberMill.isAlive()) {
      await playSpeechUnitType(UNIT_Peasant, peasantSounds[3]);
      await playSpeechUnitType(UNIT_Footman, footmanSounds[7]);
      await questLog.completeWithRewards([]);

      // All units enter Lumber Mill for resting
      let humanUnits = getUnitsOfPlayer(mainPlayer, (u) => u.typeId === UNIT_Peasant.id || u.typeId === UNIT_Footman.id);
      humanUnits.forEach((u) => {
        u.shareVision(mainPlayer, true);
        setGuardPosition(u, PolarProjection(lumberMill, 100, Angle(lumberMill, u)), 0);
        if (u.typeId === UNIT_Peasant.id) {
          u.addAbility(ABILITY_ID_DECONSTRUCT);
        }
      });

      let humanBuildings = getUnitsOfPlayer(mainPlayer, (u) => humanBuildingTypes.includes(u.typeId));

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      waitUntil(1, () => {
        humanUnits = humanUnits.filter((u) => !isUnitRemoved(u));
        humanBuildings = humanBuildings.filter((u) => u.isAlive());
        humanUnits.forEach((u) => {
          const canRest = u.typeId !== UNIT_Peasant.id || humanBuildings.length === 0;
          if (canRest && Distance(u, lumberMill) < 250) {
            u.destroy();
          } else if (u.typeId === UNIT_Peasant.id && humanBuildings.length > 0) {
            const closestBuild = humanBuildings.reduce(
              (best, b) => (Distance(best, u) < Distance(b, u) ? best : b),
            );
            u.issueTargetOrder(OrderId.Transmute, closestBuild);
          }
        });
        return humanUnits.length === 0;
      });

      // Take back control
      getUnitsOfPlayer(mainPlayer, (u) => !playerUnits.includes(u)).forEach((u) => {
        u.owner = playerHumanAlliance;
        u.removeGuardPosition();
      });

      timer.destroy();
      borderEffects.forEach((e) => e.destroy());
      this.complete();
    } else {
      this.fail();
    }

    traveler.paused = false;
    playerUnits.forEach((u) => {
      u.paused = false;
      u.show = true;
    });

    mainPlayer.color = oldColor;
    mainPlayer.setState(PLAYER_STATE_RESOURCE_GOLD, oldGold);
    mainPlayer.setState(PLAYER_STATE_RESOURCE_LUMBER, oldLumber);
    disabledTechs.forEach((t) => mainPlayer.setTechMaxAllowed(t.id, -1));
    restoreCameraBound();

    BlackTurban.enable();
  }
}
