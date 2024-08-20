import { UNIT_Infernal, UNIT_TYPE } from 'lib/resources/war3-units';
import { buildTrigger, setTimeout } from 'lib/trigger';
import { Unit } from 'w3ts';

const summonBirthDuration = new Map<number, number>((<[UNIT_TYPE, number][]>[
  [UNIT_Infernal, 2.4],
]).map(([unit, duration]) => [FourCC(unit.code), duration]));

export class SummonBirthAnimation {
  static register() {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON);
      t.addCondition(() => {
        const summoned = Unit.fromHandle(GetSummonedUnit());
        return summonBirthDuration.has(summoned.typeId);
      });
      t.addAction(() => {
        const summoned = Unit.fromHandle(GetSummonedUnit());
        summoned.setVertexColor(GetRandomInt(128, 255), GetRandomInt(128, 255), GetRandomInt(128, 255), 255);
        summoned.paused = true;
        summoned.setAnimation('birth');
        summoned.queueAnimation('stand');
        setTimeout(summonBirthDuration.get(summoned.typeId), () => {
          summoned.paused = false;
        });
      });
    });
  }
}
