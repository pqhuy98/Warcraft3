import { playSpeech } from 'lib/sound';
import { enumUnitsWithDelay } from 'lib/unit';
import { shuffleArray } from 'lib/utils';
import { Unit } from 'w3ts';

import { setAttention } from '../lib/systems/unit_interaction';

export class TalkGroup {
  constructor(private units: Unit[]) {
  }

  async speak(speakingUnit: Unit, sound: sound, target?: Unit) {
    shuffleArray(this.units);
    enumUnitsWithDelay(this.units, (u) => {
      if (u !== speakingUnit) {
        setAttention(u, speakingUnit);
      }
    }, 0.5 / (this.units.length - 1));
    await playSpeech(speakingUnit, sound, target);
  }
}
