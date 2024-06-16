import { buildTrigger } from 'lib/trigger';
import { isBuilding } from 'lib/unit';
import { Force, MapPlayer, Unit } from 'w3ts';

type Subscriber = (victim: Unit, attacker: Unit, damage: number) => void

export class DamageObserver {
  static subscribers: Subscriber[] = [];

  static subscribeBuildingDamaged(callback: Subscriber) {
    this.subscribers.push(callback);
  }

  static subscribeHeroDamaging(callback: Subscriber) {
    this.subscribers.push(callback);
  }

  static register() {
    buildTrigger((t) => {
      Force.fromHandle(bj_FORCE_ALL_PLAYERS).for(() => {
        t.registerPlayerUnitEvent(MapPlayer.fromEnum(), EVENT_PLAYER_UNIT_DAMAGED, undefined);
      });

      t.addCondition(() => isBuilding(Unit.fromHandle(BlzGetEventDamageTarget())) && GetEventDamage() > 0);
      t.addAction(() => {
        for (const subscriber of this.subscribers) {
          subscriber(Unit.fromHandle(BlzGetEventDamageTarget()), Unit.fromHandle(GetEventDamageSource()), GetEventDamage());
        }
      });
    });

    buildTrigger((t) => {
      Force.fromHandle(bj_FORCE_ALL_PLAYERS).for(() => {
        t.registerPlayerUnitEvent(MapPlayer.fromEnum(), EVENT_PLAYER_UNIT_DAMAGED, undefined);
      });
      t.addCondition(() => Unit.fromHandle(GetEventDamageSource()).isHero() && GetEventDamage() > 0);
      t.addAction(() => {
        for (const subscriber of this.subscribers) {
          subscriber(Unit.fromHandle(BlzGetEventDamageTarget()), Unit.fromHandle(GetEventDamageSource()), GetEventDamage());
        }
      });
    });
  }
}
