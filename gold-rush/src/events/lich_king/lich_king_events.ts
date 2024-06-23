import { playSpeech } from 'lib/sound';
import { buildTrigger, getTimeS } from 'lib/trigger';
import { pickRandom } from 'lib/utils';
import { Unit } from 'w3ts';

export class LichKingEvents {
  static register(lichKing: Unit) {
    const deathSounds = [
      gg_snd_lichking_death1,
      gg_snd_lichking_death2,
      gg_snd_lichking_death3,
    ];

    let lastDeath = 0;
    buildTrigger((t) => {
      t.registerUnitEvent(lichKing, EVENT_UNIT_DEATH);
      t.addAction(() => {
        const now = getTimeS();
        const diff = now - lastDeath;
        lastDeath = now;
        if (diff > 10 * 60 || GetRandomInt(1, 3) === 1) {
          playSpeech(lichKing, pickRandom(deathSounds));
        }
      });
    });
  }
}
