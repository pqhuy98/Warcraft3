import { playSpeech } from 'lib/sound';
import { enumUnitsWithDelay, isUnitIdle } from 'lib/unit';
import { shuffleArray } from 'lib/utils';
import { Unit } from 'w3ts';

import {
  disableInteractSound, enableInteractSound, removeAttention, setAttention,
} from '../lib/systems/unit_interaction';

export class TalkGroup {
  constructor(private units: Unit[]) {
  }

  async speak(speakingUnit: Unit, sound: sound, target?: Unit, everyoneAttention = true) {
    this.units.forEach((u) => disableInteractSound(u));
    shuffleArray(this.units);
    if (everyoneAttention) {
      enumUnitsWithDelay(this.units, (u) => {
        if (u !== speakingUnit && isUnitIdle(u)) {
          setAttention(u, speakingUnit);
        }
      }, 0.5 / (this.units.length - 1));
    }
    await playSpeech(speakingUnit, sound, target);
    this.units.forEach((u) => enableInteractSound(u));
  }

  finish() {
    this.units.forEach((u) => removeAttention(u));
  }
}
