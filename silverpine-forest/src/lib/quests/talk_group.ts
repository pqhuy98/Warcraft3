import { playSpeech } from 'lib/sound';
import { Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import { enumUnitsWithDelay, isUnitIdle } from 'lib/unit';
import { shuffleArray } from 'lib/utils';
import { Unit } from 'w3ts';

import {
  disableInteractSound, enableInteractSound, removeAttention, setAttention,
} from '../systems/unit_interaction';

export class TalkGroup {
  constructor(public units: Unit[]) {
  }

  addUnit(unit: Unit): void {
    this.units.push(unit);
  }

  async speak(speakingUnit: Unit, sound: sound, target: Unit | null, everyoneAttention: Unit | null): Promise<void> {
    this.units.forEach((u) => {
      disableInteractSound(u);
      setUnitFlag(u, Flag.UNBREAKABLE_ATTENTION, true);
    });
    shuffleArray(this.units);
    if (everyoneAttention != null) {
      enumUnitsWithDelay(this.units, (u) => {
        if (u !== speakingUnit && isUnitIdle(u)) {
          if (u !== everyoneAttention) {
            setAttention(u, everyoneAttention);
          } else {
            setAttention(u, speakingUnit);
          }
        }
      }, 0.5 / (this.units.length - 1));
    }
    await playSpeech(speakingUnit, sound, target);
    this.units.forEach((u) => {
      setUnitFlag(u, Flag.UNBREAKABLE_ATTENTION, false);
      enableInteractSound(u);
    });
  }

  setEveryoneAttention(target: Unit): void {
    this.units.forEach((u) => {
      setAttention(u, target);
    });
  }

  finish(): void {
    this.units.forEach((u) => removeAttention(u));
  }
}
