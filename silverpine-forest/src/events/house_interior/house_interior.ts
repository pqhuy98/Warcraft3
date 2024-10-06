import { Weather } from 'events/weather/weather';
import { lockCameraBound, restoreCameraBound } from 'lib/camera';
import { playerMain, terrainFogDefaultParams } from 'lib/constants';
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
    (u) => {
      if (u.owner === playerMain && u.isHero()) {
        SetTerrainFogEx(0, 99999, 99999, 1, 0, 0, 0); // to avoid other nearby interiors become visible when zooming out
        fog.stop();
        Weather.show(false);
        const oldCamLoc = { x: Camera.targetX, y: Camera.targetY };
        lockCameraBound([interior]);
        cinematicFadeIn(fadeDuration);
        Camera.panTimed(
          oldCamLoc.x - GetRectMinX(rectOut) + GetRectMinX(rectIn),
          oldCamLoc.y - GetRectMinY(rectOut) + GetRectMinY(rectIn),
          0,
          null,
        );
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
    (u) => {
      if (u.owner === playerMain && u.isHero()) {
        SetTerrainFogEx(...terrainFogDefaultParams);

        Weather.show(true);
        const oldCamLoc = { x: Camera.targetX, y: Camera.targetY };
        cinematicFadeIn(fadeDuration);
        restoreCameraBound();
        Camera.panTimed(
          oldCamLoc.x - GetRectMinX(rectIn) + GetRectMinX(rectOut),
          oldCamLoc.y - GetRectMinY(rectIn) + GetRectMinY(rectOut),
          0,
          null,
        );
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
  SetTerrainFogEx(...terrainFogDefaultParams);

  // House 1
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

  // House 2
  registerHouse(
    gg_rct_House_2_out,
    gg_rct_House_2_in,
    gg_rct_House_2_interior,
    90 + 45,
  );
}
