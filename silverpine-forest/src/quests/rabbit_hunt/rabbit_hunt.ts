import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { neutralPassive } from 'lib/constants';
import {
  randomLocRect,
} from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { giveItemReward } from 'lib/quests/utils';
import { playSpeech } from 'lib/sound';
import { setIntervalFixedCount } from 'lib/trigger';
import { getUnitsInRect, setNeverDie } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import { Unit } from 'w3ts';

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

let jacobIntro: sound;
let jacobOutro: sound;

export class RabbitHunt extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    jacob: Unit
    wheatFieldRects: rect[]
  }) {
    super(globals);
    jacobIntro = createDialogSound(
      'QuestSounds\\__refined\\rabbit-hunt\\rabbit-hunt-jacob-intro.mp3',
      'Villager Jacob',
      'Hello there. Our wheat field is being overrun by rabbits, and they\'re destroying our crops. Could you help us by hunting down all the rabbits in the field?',
    );
    jacobOutro = createDialogSound(
      'QuestSounds\\__refined\\rabbit-hunt\\rabbit-hunt-jacob-outro.mp3',
      'Villager Jacob',
      'With the rabbits gone, we have a chance to save our harvest. Thanks again, and please, stay safe out there.',
    );

    onChatCommand('-cheat rh', true, () => {
      const { wheatFieldRects } = this.globals;
      wheatFieldRects
        .flatMap((r) => getUnitsInRect(r))
        .filter((u) => u.typeId === rabbitTypeId && u.isAlive())
        .forEach((u) => u.kill());
    });
  }

  async register(): Promise<void> {
    const { jacob, wheatFieldRects } = this.globals;
    jacob.name = 'Villager Jacob';
    setNeverDie(jacob, true, 1);

    await this.waitDependenciesDone();

    let traveler = await this.talkToQuestGiver(jacob, true);
    jacob.shareVision(traveler.owner, true);

    // spawns rabbits
    const wheatFieldsAreas = wheatFieldRects.map((r) => GetRectWidthBJ(r) * GetRectHeightBJ(r));
    const wheatFieldsTotalArea = wheatFieldsAreas.reduce((acc, v) => acc + v, 0);

    setIntervalFixedCount(0.5, 15, () => {
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

    await playSpeech(jacob, jacobIntro, traveler);

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
    await playSpeech(jacob, jacobOutro, traveler);
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
