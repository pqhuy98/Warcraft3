import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { neutralPassive } from 'lib/constants';
import {
  randomLocRect,
} from 'lib/location';
import { dialogue } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import {
  cinematicFadeIn, cinematicFadeOut, cinematicMode, giveItemReward,
} from 'lib/quests/utils';
import { playSpeech } from 'lib/sound';
import { setIntervalForDuration } from 'lib/trigger';
import { getUnitsInRect } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import {
  Camera, CameraSetup, sleep, Unit,
} from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Rabbit Hunt';
const questDescription = 'Hunt all rabbits in the wheat field.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNCritterRabbit.blp';
const questItems = [
  'Hunt all rabbits in the wheat field',
  'Talk to Jacob after done',
];

const rabbitTypeId = FourCC('necr');
const rewardItem = FourCC('manh'); // Manual of Health
const rewardXp = 300;

const jacobSounds = [
  dialogue(
    'QuestSounds\\__refined\\rabbit-hunt\\rabbit-hunt-jacob-intro.mp3',
    'Villager Jacob',
    'Hello there. Our wheat field is being overrun by rabbits, and they\'re destroying our crops. Could you help us by hunting down all the rabbits in the field?',
  ),
  dialogue(
    'QuestSounds\\__refined\\rabbit-hunt\\rabbit-hunt-jacob-outro.mp3',
    'Villager Jacob',
    'With the rabbits gone, we have a chance to save our harvest. Thanks again, and please, stay safe out there.',
  ),
];

export class RabbitHunt extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    jacob: Unit
    wheatFieldRects: rect[]
  }) {
    super(globals);
    void this.register();

    onChatCommand('-cheat rh', true, () => {
      const { wheatFieldRects } = this.globals;
      wheatFieldRects
        .flatMap((r) => getUnitsInRect(r))
        .filter((u) => u.typeId === rabbitTypeId && u.isAlive())
        .forEach((u) => u.kill());
    });
  }

  private async register(): Promise<void> {
    const { jacob, wheatFieldRects } = this.globals;
    jacob.name = 'Villager Jacob';

    await this.waitDependenciesDone();

    let traveler = await this.talkToQuestGiver(jacob, true);
    jacob.shareVision(traveler.owner, true);

    cinematicMode(true, 0.5);
    cinematicFadeOut(0.5);
    cinematicFadeIn(0.5);
    const cam1 = CameraSetup.fromHandle(gg_cam_Camera_001);
    const cam2 = CameraSetup.fromHandle(gg_cam_Camera_002);
    cam1.applyForceDuration(true, 0);
    cam2.applyForceDuration(true, 700);
    await sleep(1);
    void (async (): Promise<void> => {
      await sleep(5);
      cam2.applyForceDuration(true, 0);
      cam1.applyForceDuration(true, 700);
    })();

    // spawns rabbits
    const wheatFieldsAreas = wheatFieldRects.map((r) => GetRectWidthBJ(r) * GetRectHeightBJ(r));
    const wheatFieldsTotalArea = wheatFieldsAreas.reduce((acc, v) => acc + v, 0);

    setIntervalForDuration(0.1, 3, () => {
      const dice = GetRandomReal(0, wheatFieldsTotalArea);
      let accumArea = 0;
      for (const fieldRect of wheatFieldRects) {
        accumArea += GetRectWidthBJ(fieldRect) * GetRectHeightBJ(fieldRect);
        if (accumArea >= dice) {
          const loc = randomLocRect(fieldRect);
          Unit.create(neutralPassive, rabbitTypeId, loc.x, loc.y, GetRandomDirectionDeg());
          break;
        }
      }
    });

    await playSpeech(jacob, jacobSounds[0], traveler);

    await sleep(1);
    cinematicFadeOut(0.5);
    cinematicFadeIn(0.5);
    cinematicMode(false, 0.5);
    Camera.reset(0);
    Camera.panTimed(traveler.x, traveler.y, 0, undefined);

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: questItems,
    });

    // Wait till no living rabbits in field
    await waitUntil(1, () => wheatFieldRects
      .flatMap((r) => getUnitsInRect(r))
      .filter((u) => u.typeId === rabbitTypeId && u.isAlive()).length === 0);

    await questLog.completeItem(0);

    // Wait player to return
    traveler = await this.waitForTurnIn(jacob);

    // Thanks and reward
    await playSpeech(jacob, jacobSounds[1], traveler);
    traveler.addExperience(rewardXp, true);
    await questLog.completeWithRewards([
      giveItemReward(jacob, rewardItem).name,
      `${rewardXp} experience`,
    ]);
    this.complete();
  }

  onForceComplete(): void {
    const { wheatFieldRects } = this.globals;
    wheatFieldRects
      .flatMap((r) => getUnitsInRect(r))
      .filter((u) => u.typeId === rabbitTypeId && u.isAlive())
      .forEach((u) => u.kill());
  }
}
