import { playSpeech } from 'lib/sound';
import { Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import { enumUnitsWithDelay, isUnitIdle } from 'lib/unit';
import { shuffleArray, unique } from 'lib/utils';
import { Sound, Unit } from 'w3ts';

import {
  disableInteractSound, enableInteractSound, removeAttention, setAttention,
} from '../systems/unit_interaction';

export class TalkGroup {
  private constructor(public units: Unit[]) {
    this.units = unique(this.units);
  }

  static create(...units: Unit[]): TalkGroup {
    return new TalkGroup(units);
  }

  add(...units: Unit[]): void {
    this.units.push(...units);
    this.units = unique(this.units);
  }

  async speak(speakingUnit: Unit, sound: Sound, target: Unit | null, everyoneAttention: Unit | null): Promise<void> {
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
    await playSpeech(speakingUnit, sound, target, {
      // all units in talk group already has interaction disabled earlier, and will be re-enabled later
      // so this flag must be false to avoid playSpeech re-enabling interaction too early after it's done
      disableInteraction: false,
    });
    this.units.forEach((u) => {
      setUnitFlag(u, Flag.UNBREAKABLE_ATTENTION, false);
      enableInteractSound(u);
    });
  }

  resetTo(...units: Unit[]): void {
    this.units = units;
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
