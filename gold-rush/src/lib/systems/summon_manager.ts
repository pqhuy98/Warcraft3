import { buildTrigger } from 'lib/trigger';
import { getDummyMaster } from 'lib/unit';
import { Unit } from 'w3ts';

type Subscriber = (summoner: Unit, summoned: Unit) => void

export class SummonManager {
  static subscribers: Subscriber[] = [];

  static register() {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON);
      t.addAction(() => {
        const summoner = Unit.fromHandle(getDummyMaster(GetSummoningUnit()));
        const summoned = Unit.fromHandle(GetSummonedUnit());
        for (const subscriber of this.subscribers) {
          subscriber(summoner, summoned);
        }
      });
    });
  }

  static subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }
}
