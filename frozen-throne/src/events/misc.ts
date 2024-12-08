import {
  neutralPassive,
  playerMain,
} from 'lib/constants';
import { fromTempLocation, isPointReachable } from 'lib/location';
import { log } from 'lib/log';
import { isUser } from 'lib/player';
import { cinematicFadeOut, cinematicMode } from 'lib/quests/utils';
import { ABILITY_Bearform, ABILITY_RavenFormDruid, ABILITY_StoneForm } from 'lib/resources/war3-abilities';
import { MODEL_FrostNovaTarget } from 'lib/resources/war3-models';
import {
  buildTrigger, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  getMainHero,
  getUnitsInRect,
} from 'lib/unit';
import {
  CameraSetup, Effect, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { onChatCommand } from './chat_commands/chat_commands.model';

export class MiscEvents {
  static register(): void {
    cinematicFadeOut(0);
    cinematicMode(true, 0);
    setTimeout(0.0, () => this.run());
  }

  static run(): void {
    CameraSetup.fromHandle(gg_cam_Birdeye_view).apply(true, false);

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

    // Lich King stunned animation
    const lichKing = Unit.fromHandle(gg_unit_H001_0052);
    const orderStunned = 851973; // https://www.hiveworkshop.com/threads/is-it-possible-to-detect-stun.322295/#post-3402696
    let isStunned = false;
    buildTrigger((t) => {
      t.registerUnitEvent(lichKing, EVENT_UNIT_ISSUED_ORDER);
      t.addCondition(() => lichKing.currentOrder === orderStunned && lichKing.paused === false);
      t.addAction(() => {
        lichKing.setAnimation('cinematic stun');
        isStunned = true;
      });
    });
    setIntervalIndefinite(0.1, () => {
      if (lichKing.currentOrder === orderStunned && lichKing.paused === false && !isStunned) {
        lichKing.setAnimation('cinematic stun');
        isStunned = true;
      } else if (isStunned) {
        isStunned = false;
        ResetUnitAnimation(lichKing.handle);
      }
    });

    // crusader bear and crows cannot morph back
    getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(playerMain))
      .forEach((u) => {
        u.removeAbility(ABILITY_Bearform.id);
        u.removeAbility(ABILITY_RavenFormDruid.id);
        u.removeAbility(ABILITY_StoneForm.id);
      });

    // Others
    preventFriendlyFire();
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
