import {
  neutralHostile, neutralPassive,
} from 'lib/constants';
import { fromTempLocation, isPointReachable } from 'lib/location';
import { log } from 'lib/log';
import { isComputer, isUser, setAllianceState2Way } from 'lib/player';
import { ABILITY_Wander } from 'lib/resources/war3-abilities';
import { MODEL_FrostNovaTarget } from 'lib/resources/war3-models';
import { guardCurrentPosition } from 'lib/systems/unit_guard_position';
import {
  buildTrigger, setTimeout,
} from 'lib/trigger';
import {
  getMainHero, getUnitsInRect, isBuilding,
} from 'lib/unit';
import { Effect, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { onChatCommand } from './chat_commands/chat_commands.model';

const defaultGuardDistance = 1200;

export class MiscEvents {
  static register(): void {
    setTimeout(0.0, () => this.run());
  }

  static run(): void {
    // All pre-placed non-neutral units guard their positions
    getUnitsInRect(GetWorldBounds(), (u) => u.isAlive()
      && !isBuilding(u)
      && isComputer(u.owner)
      && !u.getAbility(ABILITY_Wander.id)
      && !u.isUnitType(UNIT_TYPE_PEON)
      && u.owner !== neutralHostile && u.owner !== neutralPassive)
      .forEach((u) => {
        guardCurrentPosition(u, { maxRadius: defaultGuardDistance });
        u.setUseFood(false);
      });

    // Testing isPointReachable
    onChatCommand('-ipr', true, () => {
      const hero = getMainHero();
      buildTrigger((t) => {
        t.registerUnitEvent(hero, EVENT_UNIT_ISSUED_POINT_ORDER);
        t.addAction(() => {
          const loc = fromTempLocation(GetOrderPointLoc());
          if (!isPointReachable(hero, loc)) {
            Effect.create(MODEL_FrostNovaTarget, loc.x, loc.y).destroy();
          }
          ClearTextMessages();
          log(`neutral passive ${neutralPassive.coordsVisible(loc.x, loc.y) ? 'see' : 'not see'}`);
          log(`hero ${hero.owner.coordsVisible(loc.x, loc.y) ? 'see' : 'not see'}`);
        });
      });
    });

    // Others
    preventFriendlyFire();
  }
}

function preventFriendlyFire(): void {
  // Players become hostile if being friendly fired
  false && buildTrigger((t) => {
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
    t.addCondition(() => {
      const killer = Unit.fromHandle(GetKillingUnit());
      const victim = Unit.fromHandle(GetDyingUnit());
      if (victim.owner === neutralPassive) return false;
      return victim.owner !== killer.owner && victim.isAlly(killer.owner);
    });
    t.addAction(() => {
      const killer = Unit.fromHandle(GetKillingUnit());
      const victim = Unit.fromHandle(GetDyingUnit());
      setAllianceState2Way(victim.owner, killer.owner, 'enemy');
    });
  });

  // All players cannot attack allies
  buildTrigger((t) => {
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED);
    t.addCondition(() => {
      const attacker = Unit.fromHandle(GetAttacker());
      const victim = Unit.fromEvent();
      return isUser(attacker.owner)
          && victim.owner !== attacker.owner
          && attacker.owner.isPlayerAlly(victim.owner)
          && victim.owner !== neutralPassive;
    });
    t.addAction(() => {
      const attacker = Unit.fromHandle(GetAttacker());
      attacker.issueImmediateOrder(OrderId.Stop);
    });
  });
}
