import { lockCameraBound, restoreCameraBound } from 'lib/camera';
import { playerMain } from 'lib/constants';
import {
  cameraCenter, centerLocRect, isLocInRect, PolarProjection,
} from 'lib/location';
import { cinematicFadeIn, cinematicFadeOut } from 'lib/quests/utils';
import { ABILITY_Wander } from 'lib/resources/war3-abilities';
import { ORDER_move, ORDER_stop } from 'lib/resources/war3-orders';
import { creatWormHole } from 'lib/systems/worm_hole';
import { setTimeout } from 'lib/trigger';
import {
  Camera, FogModifier, Rectangle,
} from 'w3ts';

const fadeDuration = 0.3;

const fogMap = new Map<rect, FogModifier>();

function registerHouse(rectOut: rect, rectIn: rect, interior: rect, entryAngleDeg: number): void {
  if (!fogMap.has(interior)) {
    fogMap.set(interior, FogModifier.fromRect(playerMain, FOG_OF_WAR_MASKED, Rectangle.fromHandle(interior), false, true));
  }
  const fog = fogMap.get(interior);
  fog.start();

  creatWormHole(
    rectOut,
    rectIn,
    (u) => !u.isUnitType(UNIT_TYPE_FLYING) && u.isAlive(),
    // when enter house
    (u) => {
      u.issueImmediateOrder(ORDER_stop);
      if (u.owner === playerMain && u.isHero()) {
        cinematicFadeOut(fadeDuration);
      }
    },
    (u, oldLoc) => {
      if (u.owner === playerMain && u.isHero()) {
        fog.stop();
        const oldCamLoc = { x: Camera.targetX, y: Camera.targetY };
        lockCameraBound([interior]);
        cinematicFadeIn(fadeDuration);
        Camera.panTimed(oldCamLoc.x - oldLoc.x + u.x, oldCamLoc.y - oldLoc.y + u.y, 0, null);
      }

      const loc = PolarProjection(centerLocRect(rectIn), 200, entryAngleDeg);
      u.issueOrderAt(ORDER_move, loc.x, loc.y);
      if (u.getAbility(ABILITY_Wander.id) !== undefined) {
        u.removeAbility(ABILITY_Wander.id);
        u.addAbility(ABILITY_Wander.id);
      }
    },
    // when leave house
    (u) => {
      u.issueImmediateOrder(ORDER_stop);
      if (u.owner === playerMain && u.isHero()) {
        cinematicFadeOut(fadeDuration);
        fog.start();
      }
    },
    (u, oldLoc) => {
      if (u.owner === playerMain && u.isHero()) {
        const oldCamLoc = { x: Camera.targetX, y: Camera.targetY };
        cinematicFadeIn(fadeDuration);
        restoreCameraBound();
        Camera.panTimed(oldCamLoc.x - oldLoc.x + u.x, oldCamLoc.y - oldLoc.y + u.y, 0, null);

        // Recover camera position when the hero is outside of the house
        // and camera is stuck inside the house
        setTimeout(0.1, () => {
          const cameraTarget = cameraCenter();
          if (!isLocInRect(u, interior) && isLocInRect(cameraTarget, interior)) {
            restoreCameraBound();
            Camera.panTimed(u.x, u.y, 0, null);
          }
        });
      }

      const loc = PolarProjection(centerLocRect(rectOut), 200, entryAngleDeg + 180);
      u.issueOrderAt(ORDER_move, loc.x, loc.y);
      if (u.getAbility(ABILITY_Wander.id)) {
        u.removeAbility(ABILITY_Wander.id);
        u.addAbility(ABILITY_Wander.id);
      }
    },
    fadeDuration,
  );
}

export function registerHouseInterior(): void {
  registerHouse(
    gg_rct_House_1_out,
    gg_rct_House_1_in,
    gg_rct_House_1_interior,
    90,
  );

  registerHouse(
    gg_rct_House_1_out2,
    gg_rct_House_1_in2,
    gg_rct_House_1_interior,
    90 + 45,
  );
}
