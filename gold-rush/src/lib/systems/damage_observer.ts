// eslint-disable-next-line max-classes-per-file
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { temp } from 'lib/location';
import { log } from 'lib/log';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import { getDummyMaster, isBuilding } from 'lib/unit';
import {
  Group, Unit,
} from 'w3ts';

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

    const trackedBuildings = Group.create();
    const trackedHeroes = Group.create();

    const buildingDamagedTrigger = buildTrigger((t) => {
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

    buildTrigger((t) => {
      TriggerRegisterEnterRectSimple(t.handle, GetEntireMapRect());
      t.addCondition(() => isBuilding(Unit.fromEvent()) && !trackedBuildings.hasUnit(Unit.fromEvent()));
      t.addAction(() => {
        trackedBuildings.addUnit(Unit.fromEvent());
        buildingDamagedTrigger.registerUnitEvent(Unit.fromEvent(), EVENT_UNIT_DAMAGED);
      });
    });

    temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds()))).for(() => {
      if (isBuilding(Unit.fromEnum())) {
        trackedBuildings.addUnit(Unit.fromEnum());
        buildingDamagedTrigger.registerUnitEvent(Unit.fromEnum(), EVENT_UNIT_DAMAGED);
      }
    });

    const heroDmgRateTracker = new StochasticRateTracker();
    const heroEnqueueRateTracker = new StochasticRateTracker();

    const heroDamagedTrigger = buildTrigger((t) => {
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

    buildTrigger((t) => {
      TriggerRegisterEnterRectSimple(t.handle, GetEntireMapRect());
      t.addCondition(() => Unit.fromEvent().isHero() && !trackedHeroes.hasUnit(Unit.fromEvent()));
      t.addAction(() => {
        trackedHeroes.addUnit(Unit.fromEvent());
        heroDamagedTrigger.registerUnitEvent(Unit.fromEvent(), EVENT_UNIT_DAMAGING);
      });
    });

    temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds()))).for(() => {
      if (Unit.fromEnum().isHero()) {
        trackedHeroes.addUnit(Unit.fromEnum());
        heroDamagedTrigger.registerUnitEvent(Unit.fromEnum(), EVENT_UNIT_DAMAGING);
      }
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
