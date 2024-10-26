import { getUnitSounds } from 'lib/resources/unit-sounds';
import { play3dSound } from 'lib/sound';
import { buildTrigger, getTimeS } from 'lib/trigger';
import { isBuilding } from 'lib/unit';
import { pickRandom } from 'lib/utils';
import { Sound, Unit } from 'w3ts';

const lastPlayed = {
  typeId: 0,
  doneTimeS: -9999,
};

export function registerFightingSounds(): void {
  buildTrigger((t) => {
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED);
    t.addCondition(() => !isBuilding(Unit.fromHandle(GetAttacker())));
    t.addAction(() => {
      const attacker = Unit.fromHandle(GetAttacker());
      const now = getTimeS();
      let expectedTimeS = lastPlayed.doneTimeS + 0.5;
      if (attacker.typeId === lastPlayed.typeId) {
        expectedTimeS += 5;
      }
      if (expectedTimeS <= now) {
        const sound = pickRandom(getUnitSounds(attacker.typeId, 'YesAttack', 'Warcry'));
        if (!sound) return;
        lastPlayed.typeId = attacker.typeId;
        lastPlayed.doneTimeS = now + Sound.getFileDuration(sound) / 1000;
        void play3dSound(sound, attacker, GetRandomInt(80, 100));
      }
    });
  });
}
