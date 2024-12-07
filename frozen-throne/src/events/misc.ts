import {
  neutralPassive,
  playerHumanAlliance,
  playerMain,
  playerNightElf,
  playerOrcishHorde,
} from 'lib/constants';
import {
  Angle,
  currentLoc, Distance, fromTempLocation, isPointReachable, Loc,
} from 'lib/location';
import { log } from 'lib/log';
import { isUser, setAllianceState2Way } from 'lib/player';
import { cinematicFadeIn, cinematicFadeOut, cinematicMode } from 'lib/quests/utils';
import { ABILITY_RootAncientProtector, ABILITY_RootAncients } from 'lib/resources/war3-abilities';
import { MODEL_FrostNovaTarget } from 'lib/resources/war3-models';
import {
  buildTrigger, setTimeout,
} from 'lib/trigger';
import {
  getMainHero, getUnitsInRect,
} from 'lib/unit';
import { waitUntil } from 'lib/utils';
import {
  Camera,
  CameraSetup, Effect, FogModifier, Rectangle, sleep, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { playerForsaken } from '../../../silverpine-forest/src/lib/constants';
import { onChatCommand } from './chat_commands/chat_commands.model';
import { Weather, weatherBlizzard } from './weather/weather';

export class MiscEvents {
  static register(): void {
    cinematicMode(true, 0);
    cinematicFadeOut(0);
    setTimeout(0.0, () => this.run());
  }

  static run(): void {
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

    // Lich King sits
    const lichKing = Unit.fromHandle(gg_unit_H001_0052);
    const throneLoc = currentLoc(lichKing);
    lichKingSit(throneLoc, 270);
    onChatCommand('sit', true, () => {
      lichKingSit(throneLoc, 270);
    });

    // Crusaders attack
    const tirion = Unit.fromHandle(gg_unit_H004_0000);
    const crusaders = getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(playerMain));
    crusaders.forEach((c) => {
      c.addAnimationProps('ready', true);
      c.paused = true;
      c.acquireRange = 500;
    });

    const attack = (): void => {
      crusaders.forEach((c) => {
        c.paused = false;
        c.acquireRange = 10000;
        c.issueTargetOrder(OrderId.Attack, lichKing);
      });
    };

    buildTrigger((t) => {
      crusaders.forEach((u) => {
        t.registerUnitEvent(u, EVENT_UNIT_ACQUIRED_TARGET);
        t.registerUnitEvent(u, EVENT_UNIT_ATTACKED);
        t.registerUnitEvent(u, EVENT_UNIT_DAMAGING);
      });
      t.addAction(() => {
        t.destroy();
        attack();
      });
      void waitUntil(0.5, () => Distance(lichKing, tirion) < 750).then(() => {
        t.destroy();
        attack();
      });
    });

    // Others
    preventFriendlyFire();

    void trailerCamera();
    getUnitsInRect(GetWorldBounds()).forEach((u) => {
      if (u.getAbility(ABILITY_RootAncientProtector.id) || u.getAbility(ABILITY_RootAncients.id)) {
        u.removeAbility(ABILITY_RootAncientProtector.id);
        u.removeAbility(ABILITY_RootAncients.id);
        setTimeout(0.1, () => u.facing = Angle(u, tirion));
      }
    });

    Weather.changeWeather(weatherBlizzard);
  }
}

async function trailerCamera(): Promise<void> {
  CameraSetup.fromHandle(gg_cam_Camera_001).applyForceDurationSmooth(true, 0, 1, 1, 1);

  await sleep(5);
  cinematicFadeIn(1);

  CameraSetup.fromHandle(gg_cam_Camera_002).applyForceDurationSmooth(true, 8, 0, 0, 1);
  await sleep(8);

  CameraSetup.fromHandle(gg_cam_Camera_003).applyForceDurationSmooth(true, 10, 0, 0, 1);
  await sleep(10);

  CameraSetup.fromHandle(gg_cam_Camera_004).applyForceDurationSmooth(true, 10, 0, 0, 1);
  await sleep(10);

  CameraSetup.fromHandle(gg_cam_Camera_005).applyForceDurationSmooth(true, 3, 0, 0, 1);
  await sleep(3);

  cinematicFadeOut(1);
  await sleep(1);

  Camera.reset(0);
  const lichKing = Unit.fromHandle(gg_unit_H001_0052);
  Camera.panTimed(lichKing.x, lichKing.y, 0, undefined);
  [
    playerMain,
    playerOrcishHorde,
    playerHumanAlliance,
    playerNightElf,
    playerForsaken,
  ].forEach((p) => {
    FogModifier.fromRect(p, FOG_OF_WAR_VISIBLE, Rectangle.getWorldBounds(), true, false).start();
  });

  cinematicFadeIn(1);
  cinematicMode(false, 1);
}

function lichKingSit(loc: Loc, facing: number): void {
  const lichKing = Unit.fromHandle(gg_unit_H001_0052);
  lichKing.setPosition(loc.x, loc.y);
  lichKing.setFacingEx(facing);
  lichKing.setAnimation(34);
  lichKing.paused = true;
  buildTrigger((t) => {
    t.registerUnitEvent(lichKing, EVENT_UNIT_SELECTED);
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    t.addAction(async () => {
      t.destroy();
      await sleep(1);
      lichKing.setAnimation(35);
      await sleep(2.662);
      lichKing.paused = false;
      lichKing.setAnimation('stand');
      lichKing.queueAnimation('stand');
    });
  });
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
