import { setCineFilter } from 'lib/camera';
import { neutralHostile } from 'lib/constants';
import { AngleBetweenLocs, cameraCenter, isLocInRect } from 'lib/location';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import { MODEL_DivineShieldTarget } from 'lib/resources/war3-models';
import { guardCurrentPosition } from 'lib/systems/unit_guard_position';
import { fadeUnit } from 'lib/unit';
import { pickRandom, waitUntil } from 'lib/utils';
import {
  Effect, Sound, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

const rgbOut = {
  r: 0, g: 0, b: 0, a: 0,
};
const rgbIn = {
  r: 0, g: 0, b: 0, a: 225,
};

export class WordlessBook extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    wordlessBook: Unit
    bossRects: [rect, rect, rect]
    areaRect: rect
  }) {
    super(globals);
  }

  async register(): Promise<void> {
    const { wordlessBook, bossRects, areaRect } = this.globals;

    const shieldEffect = Effect.createAttachment(MODEL_DivineShieldTarget, wordlessBook, 'origin');
    wordlessBook.invulnerable = true;

    await this.waitDependenciesDone();

    // Camera is darker when looking at cave
    let prevCameraIn = isLocInRect(cameraCenter(), areaRect);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitUntil(0.6, () => {
      if (isLocInRect(cameraCenter(), areaRect)) {
        if (!prevCameraIn) {
          setCineFilter(rgbOut, rgbIn, 0.5);
          EnableUserUI(false);
        }
        prevCameraIn = true;
      } else {
        if (prevCameraIn) {
          setCineFilter(rgbIn, rgbOut, 0.5);
          EnableUserUI(true);
        }
        prevCameraIn = false;
      }
      return !wordlessBook.isAlive();
    });

    // Wait until someone defeats the bosses
    const traveler = await this.talkToQuestGiver(wordlessBook, true);

    const bosses = [
      Unit.create(neutralHostile, FourCC('n009'), GetRectCenterX(bossRects[0]), GetRectCenterY(bossRects[0])),
      Unit.create(neutralHostile, FourCC('n00A'), GetRectCenterX(bossRects[1]), GetRectCenterY(bossRects[1])),
      Unit.create(neutralHostile, FourCC('n00B'), GetRectCenterX(bossRects[2]), GetRectCenterY(bossRects[2])),
    ];
    bosses.forEach((u) => {
      u.setFacingEx(AngleBetweenLocs(u, traveler));
      u.issueTargetOrder(OrderId.Attack, traveler);
      u.canSleep = false;
      const soundPath = pickRandom(getUnitSounds(u.typeId, 'YesAttack'));
      if (soundPath) {
        const snd = Sound.create(soundPath, false, false, false, 1, 1, 'DefaultEAXON');
        snd.start();
        snd.killWhenDone();
      }
      fadeUnit(u, 255, 255, 255, 0, 255, 3);
      guardCurrentPosition(u, { maxRadius: 1500 });
    });

    await waitUntil(1, () => bosses.every((u) => !u.isAlive()));
    shieldEffect.destroy();
    wordlessBook.invulnerable = false;
  }

  onForceComplete(): void {
  }
}
