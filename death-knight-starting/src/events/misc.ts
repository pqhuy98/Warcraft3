import {
  neutralPassive,
} from 'lib/constants';
import { fromTempLocation, isPointReachable, locZ } from 'lib/location';
import { log } from 'lib/log';
import { isUser } from 'lib/player';
import { cinematicFadeIn, cinematicFadeOut, cinematicMode } from 'lib/quests/utils';
import { MODEL_FrostNovaTarget } from 'lib/resources/war3-models';
import {
  buildTrigger, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  getMainHero,
} from 'lib/unit';
import {
  Camera, CameraSetup, Effect, sleep, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { onChatCommand } from './chat_commands/chat_commands.model';

export class MiscEvents {
  static register(): void {
    cinematicFadeOut(0);
    cinematicMode(true, 0);
    setTimeout(0.0, () => this.run());
  }

  static async run(): Promise<void> {
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

    await sleep(1);
    log('MiscEvents.run');
    CameraSetup.fromHandle(gg_cam_Birdeye_view).apply(true, false);
    cinematicFadeIn(1);
    cinematicMode(false, 1);
    // Camera.reset(1);
    Cheat('iseedeadpeople');

    setIntervalIndefinite(0.5, () => {
      ClearTextMessages();
      log('Camera target XYZ', Camera.targetX, Camera.targetY, Camera.targetZ);
      log('Camera target locationZ', locZ({ x: Camera.targetX, y: Camera.targetY }));
    });
  }
}

function preventFriendlyFire(): void {
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
