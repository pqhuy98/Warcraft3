import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { Weather } from 'events/weather/weather';
import {
  playerHumanAlliance, playerMain, playerNightElf, playerOrcishHorde,
} from 'lib/constants';
import { currentLoc, Loc } from 'lib/location';
import { getDialogues } from 'lib/quests/dialogue_sound';
import { cinematicFadeIn, cinematicFadeOut, cinematicMode } from 'lib/quests/utils';
import { playSpeech } from 'lib/sound';
import { buildTrigger } from 'lib/trigger';
import {
  CameraSetup, FogModifier, Rectangle, sleep, Unit,
} from 'w3ts';

import { playerForsaken } from '../../../../silverpine-forest/src/lib/constants';
import { BaseQuest, BaseQuestProps } from '../base';

const dialogues = getDialogues(
  {
    questName: 'intro-cinematic',
    dialogues: [
      {
        speaker: 'Lich King',
        text: "So the Light's vaunted justice has finally arrived? Shall I lay down Frostmourne and throw myself at your mercy, Fordring?",
        fileName: '0-lichking.mp3',
      },
      {
        speaker: 'Highlord Tirion Fordring',
        text: "We'll grant you a swift death, Arthas. More than can be said for the thousands you've tortured and slain.",
        fileName: '1-tirion.mp3',
      },
      {
        speaker: 'Lich King',
        text: "You'll learn of that first hand. When my work is complete, you will beg for mercy -- and I will deny you. Your anguished cries will be testament to my unbridled power...",
        fileName: '2-lichking.mp3',
      },
    ],
  },
);

const skip = true;

export class IntroCinematic extends BaseQuest {
  static lichKingSitLoc: Loc;

  constructor(public globals: BaseQuestProps & {
    lichKing: Unit,
    tirion: Unit,
  }) {
    super(globals);
    IntroCinematic.lichKingSitLoc = currentLoc(globals.lichKing);

    if (skip) {
      this.finalize();
      return;
    }

    void this.playCinematic().then(() => this.finalize());

    // debug commands
    onChatCommand('sit', true, () => {
      IntroCinematic.lichKingSit(this.globals.lichKing);
    });
    onChatCommand('intro', true, () => {
      void this.playCinematic();
    });
  }

  private async playCinematic(): Promise<void> {
    const { lichKing, tirion } = this.globals;
    IntroCinematic.lichKingSit(lichKing);

    Weather.show(false);

    cinematicMode(true, 0);
    cinematicFadeOut(0);

    const goToCam = async (camera: camerasetup, duration: number, waitDuration = duration): Promise<void> => {
      CameraSetup.fromHandle(camera).applyForceDurationSmooth(true, duration, 0, 0, 10);
      await sleep(waitDuration);
    };
    await sleep(5);

    await goToCam(gg_cam_Camera_001, 0);
    cinematicFadeIn(3);
    await goToCam(gg_cam_Camera_002, 15, 15 - 2);

    cinematicFadeOut(2);
    await sleep(3);

    cinematicFadeIn(2);
    await goToCam(gg_cam_Camera_003, 0);

    void playSpeech(lichKing, dialogues[0], null, { isFloatText: false })
      .then(() => playSpeech(tirion, dialogues[1], null, { isFloatText: false }))
      .then(() => playSpeech(lichKing, dialogues[2], null, { isFloatText: false }));

    await goToCam(gg_cam_Camera_004, 10);
    await goToCam(gg_cam_Camera_005, 14);
    await goToCam(gg_cam_Camera_006, 10);
    await goToCam(gg_cam_Camera_007, 11.5, 9);

    cinematicFadeOut(2);
    await sleep(2);
    Weather.show(true);
  }

  static lichKingSit(lichKing: Unit, loc = IntroCinematic.lichKingSitLoc, facing: number = 270): void {
    lichKing.setPosition(loc.x, loc.y);
    lichKing.setFacingEx(facing);
    lichKing.setAnimation(34);
    lichKing.paused = true;
    buildTrigger((t) => {
      t.registerUnitEvent(lichKing, EVENT_UNIT_SELECTED);
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      t.addAction(async () => {
        t.destroy();
        await sleep(0.5);
        lichKing.setAnimation(35);
        await sleep(2.667);
        lichKing.paused = false;
        lichKing.setAnimation('stand');
        lichKing.queueAnimation('stand');
      });
    });
  }

  finalize(): void {
    this.complete();
    [
      playerMain,
      playerOrcishHorde,
      playerHumanAlliance,
      playerNightElf,
      playerForsaken,
    ].forEach((p) => {
      FogModifier.fromRect(p, FOG_OF_WAR_VISIBLE, Rectangle.getWorldBounds(), true, false).start();
    });
  }

  onForceComplete(): void {
    cinematicFadeIn(1);
    cinematicMode(false, 1);
  }
}
