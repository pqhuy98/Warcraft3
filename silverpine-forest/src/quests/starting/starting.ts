import { getDialogues } from 'lib/quests/dialogue_sound';
import { TalkGroup } from 'lib/quests/talk_group';
import { UNIT_Peasant } from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { UnitInteraction } from 'lib/systems/unit_interaction';
import {
  getUnitsInRangeOfLoc, getUnitsInRect, isUnitType,
} from 'lib/unit';
import { sleep, Unit } from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base';

const dialogues = getDialogues(
  {
    questName: 'starting',
    dialogues: [
      {
        speaker: 'Footman Rick',
        text: "Hold up there, stranger. You're not from around these parts, are you? The village is in a rough spot right now.",
        fileName: 'starting-0-footman.mp3',
      },
      {
        speaker: 'Footman Rick',
        text: "Bandits have been hitting us hard, and we've had some crops failing as well. Folks are on edge. If you're here to cause trouble, best turn around.",
        fileName: 'starting-1-footman.mp3',
      },
      {
        speaker: 'Footman Rick',
        text: "But if you're here to lend a hand, we could surely use it. Talk to the people around the field; they'll tell you more. Stay out of trouble, yeah?",
        fileName: 'starting-2-footman.mp3',
      },
      {
        speaker: 'Peasant',
        text: "Don't you see I'm working?",
        fileName: 'starting-3-peasant.mp3',
      },
      {
        speaker: 'Peasant',
        text: "Leave me be. There's much to do.",
        fileName: 'starting-4-peasant.mp3',
      },
      {
        speaker: 'Peasant',
        text: "Can't talk, busy here.",
        fileName: 'starting-5-peasant.mp3',
      },
      {
        speaker: 'Peasant',
        text: 'No time for chatter.',
        fileName: 'starting-6-peasant.mp3',
      },
      {
        speaker: 'Peasant',
        text: 'Work to do, move along.',
        fileName: 'starting-7-peasant.mp3',
      },
      {
        speaker: 'Peasant',
        text: 'Got no words for you.',
        fileName: 'starting-8-peasant.mp3',
      },
    ],
  },
);

export class Starting extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    footman: Unit
  }) {
    super(globals);
    void this.register();
  }

  private async register(): Promise<void> {
    const { footman } = this.globals;
    await this.waitDependenciesDone();

    getUnitsInRect(gg_rct_Farm_region, (u) => isUnitType(u, UNIT_Peasant))
      .forEach((u) => void this.peasantTalk(u));

    const traveler = await this.talkToQuestGiver(footman, true);
    const talkGroup = TalkGroup.create(
      footman,
      traveler,
      ...getUnitsInRangeOfLoc(500, footman),
    );
    await talkGroup.speak(footman, dialogues[0], traveler, traveler);
    await talkGroup.speak(footman, dialogues[1], traveler, traveler);
    await talkGroup.speak(footman, dialogues[2], traveler, traveler);
    talkGroup.finish();

    this.complete();
  }

  private async peasantTalk(unit: Unit): Promise<void> {
    for (;;) {
      await UnitInteraction.waitUntilQuestTalk(unit, 'none');
      await playSpeech(unit, dialogues[GetRandomInt(3, 8)], null, null);
      await sleep(3);
    }
  }

  onForceComplete(): void {
  }
}
