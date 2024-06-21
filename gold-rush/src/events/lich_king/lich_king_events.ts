import { playSpeech } from 'lib/sound';
import { buildTrigger } from 'lib/trigger';
import { pickRandom } from 'lib/utils';
import { Unit } from 'w3ts';

export class LichKingEvents {
  static register(lichKing: Unit) {
    const deathSounds = [
      gg_snd_lichking_death1,
      gg_snd_lichking_death2,
      gg_snd_lichking_death3,
    ];

    buildTrigger((t) => {
      t.registerUnitEvent(lichKing, EVENT_UNIT_DEATH);
      t.addAction(() => {
        playSpeech(lichKing, pickRandom(deathSounds));
      });
    });
  }
}
