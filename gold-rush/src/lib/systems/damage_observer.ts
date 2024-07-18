// eslint-disable-next-line max-classes-per-file
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { log } from 'lib/log';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import { getDummyMaster, isBuilding } from 'lib/unit';
import { Force, MapPlayer, Unit } from 'w3ts';

type Subscriber = (victim: Unit, attacker: Unit, damage: number) => void

export class DamageStochasticObserver {
  static subscribers: Subscriber[] = [];

  static subscribeBuildingDamaged(callback: Subscriber) {
    this.subscribers.push(callback);
  }

  static subscribeHeroDamaging(callback: Subscriber) {
    this.subscribers.push(callback);
  }

  static register(desiredEventsPerSec = 40) {
    const buildingDmgRateTracker = new StochasticRateTracker();
    const buildingEnqueueRateTracker = new StochasticRateTracker();

    buildTrigger((t) => {
      Force.fromHandle(bj_FORCE_ALL_PLAYERS).for(() => {
        t.registerPlayerUnitEvent(MapPlayer.fromEnum(), EVENT_PLAYER_UNIT_DAMAGED, undefined);
      });

      t.addCondition(() => isBuilding(Unit.fromHandle(BlzGetEventDamageTarget())) && GetEventDamage() > 0);
      t.addAction(() => {
        buildingDmgRateTracker.increase();
        // can randomly skip some events if too many happened recently.
        // but must make sure average of handled events is around `desiredEventPerSec`
        // random(0, 1) > desiredEventsPerSec / buildingDmgRateTracker.averageRate
        if (GetRandomReal(0, 1) * buildingDmgRateTracker.averageRate > desiredEventsPerSec) return;
        buildingEnqueueRateTracker.increase();

        for (const subscriber of this.subscribers) {
          subscriber(Unit.fromHandle(BlzGetEventDamageTarget()), getDummyMaster(GetEventDamageSource()), GetEventDamage());
        }
      });
    });

    const heroDmgRateTracker = new StochasticRateTracker();
    const heroEnqueueRateTracker = new StochasticRateTracker();

    buildTrigger((t) => {
      Force.fromHandle(bj_FORCE_ALL_PLAYERS).for(() => {
        t.registerPlayerUnitEvent(MapPlayer.fromEnum(), EVENT_PLAYER_UNIT_DAMAGED, undefined);
      });
      t.addCondition(() => getDummyMaster(GetEventDamageSource()).isHero() && GetEventDamage() > 0);
      t.addAction(() => {
        heroDmgRateTracker.increase();
        // random(0, 1) > desiredEventsPerSec / buildingDmgRateTracker.averageRate
        if (GetRandomReal(0, 1) * heroDmgRateTracker.averageRate > desiredEventsPerSec) return;
        heroEnqueueRateTracker.increase();

        for (const subscriber of this.subscribers) {
          subscriber(Unit.fromHandle(BlzGetEventDamageTarget()), getDummyMaster(GetEventDamageSource()), GetEventDamage());
        }
      });
    });

    onChatCommand('-dmg', true, () => {
      log('Building damage observer - actual rate', buildingDmgRateTracker.averageRate, 'enqueue rate', buildingDmgRateTracker.averageRate);
      log('Hero damage observer - actual rate', heroDmgRateTracker.averageRate, 'enqueue rate', heroEnqueueRateTracker.averageRate);
    }, 'Debug', 'Print damage observer statstics.');
  }
}

class StochasticRateTracker {
  averageRate = 0;

  private decayFactor = 0.5;

  private counter = 0;

  constructor() {
    setIntervalIndefinite(1, () => {
      this.averageRate = this.averageRate * this.decayFactor + this.counter * (1 - this.decayFactor);
      this.counter = 0;
    });
  }

  increase() {
    this.counter++;
  }
}
