import { chatParamReal, chatParamString, onChatCommand } from 'events/chat_commands/chat_commands.model';
import { Weather } from 'events/weather/weather';
import { lockCameraBound, restoreCameraBound } from 'lib/camera';
import { playerMain, terrainFogDefaultParams } from 'lib/constants';
import {
  centerLocRect, isLocInRect, Loc, PolarProjection,
  temp,
} from 'lib/location';
import { log } from 'lib/log';
import { cinematicFadeIn, cinematicFadeOut } from 'lib/quests/utils';
import { ABILITY_Wander } from 'lib/resources/war3-abilities';
import { ORDER_move, ORDER_stop } from 'lib/resources/war3-orders';
import { creatWormHole } from 'lib/systems/worm_hole';
import { setTimeout } from 'lib/trigger';
import { makeFlyable } from 'lib/unit';
import {
  Camera, FogModifier, Group, Rectangle,
  Unit,
} from 'w3ts';

const fadeDuration = 0.15;
const walkDistance = 200;
const defaultCameraDistance = { value: 1650 };

const fogMap = new Map<rect, FogModifier>();

function registerHouse(rectOut: rect, rectIn: rect, interior: rect, entryAngleDeg: number, exitAngleDeg: number, rectOut2 = rectOut): void {
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
    (u, futureLoc) => {
      u.issueImmediateOrder(ORDER_stop);
      if (u.owner === playerMain && u.isHero()) {
        cinematicFadeOut(fadeDuration);
        for (const [rect, fog2] of fogMap.entries()) {
          if (!isLocInRect(futureLoc, rect)) {
            fog2.start();
          }
        }
      }
    },
    (u) => {
      const loc = PolarProjection(centerLocRect(rectIn), walkDistance, entryAngleDeg);
      u.issueOrderAt(ORDER_move, loc.x, loc.y);
      if (u.getAbility(ABILITY_Wander.id) !== undefined) {
        u.removeAbility(ABILITY_Wander.id);
        u.addAbility(ABILITY_Wander.id);
      }

      if (u.owner === playerMain && u.isHero()) {
        cinematicFadeIn(fadeDuration);
        const oldCamLoc = { x: Camera.targetX, y: Camera.targetY };
        updateUi(u);
        const newCamLoc = {
          // out -> in
          x: oldCamLoc.x - GetRectMinX(rectOut2) + GetRectMinX(rectIn),
          y: oldCamLoc.y - GetRectMinY(rectOut2) + GetRectMinY(rectIn),
        };
        if (isLocInRect(newCamLoc, interior)) {
          Camera.panTimed(newCamLoc.x, newCamLoc.y, 0, null);
        } else {
          Camera.panTimed(u.x, u.y, 0, null);
        }
      }
    },
    // when leave house
    (u, futureLoc) => {
      u.issueImmediateOrder(ORDER_stop);
      if (u.owner === playerMain && u.isHero()) {
        cinematicFadeOut(fadeDuration);
        for (const [rect, fog2] of fogMap.entries()) {
          if (!isLocInRect(futureLoc, rect)) {
            fog2.start();
          }
        }
      }
    },
    (u) => {
      const loc = PolarProjection(centerLocRect(rectOut), walkDistance, exitAngleDeg);
      u.issueOrderAt(ORDER_move, loc.x, loc.y);
      if (u.getAbility(ABILITY_Wander.id)) {
        u.removeAbility(ABILITY_Wander.id);
        u.addAbility(ABILITY_Wander.id);
      }

      if (u.owner === playerMain && u.isHero()) {
        cinematicFadeIn(fadeDuration);
        const oldCamLoc = { x: Camera.targetX, y: Camera.targetY };
        updateUi(u);
        const newCamLoc = {
          // in -> out
          x: oldCamLoc.x - GetRectMinX(rectIn) + GetRectMinX(rectOut2),
          y: oldCamLoc.y - GetRectMinY(rectIn) + GetRectMinY(rectOut2),
        };
        Camera.panTimed(newCamLoc.x, newCamLoc.y, 0, null);
      }
    },
    fadeDuration,
  );
}

function updateUi(currentloc: Loc): void {
  for (const [rect, fog] of fogMap.entries()) {
    if (isLocInRect(currentloc, rect)) {
      // to avoid other nearby interiors become visible when zooming out
      SetTerrainFogEx(0, 99999, 99999, 1, 0, 0, 0);
      fog.stop();
      Weather.show(false);
      lockCameraBound([rect]);
      setTimeout(fadeDuration, () => {
        Camera.setField(CAMERA_FIELD_TARGET_DISTANCE, defaultCameraDistance.value, 0.5);
      });
      return;
    }
    // reach here means outside of this rect/fog
    fog.start();
    setTimeout(fadeDuration, () => {
      Camera.setField(CAMERA_FIELD_TARGET_DISTANCE, defaultCameraDistance.value, 0.5);
    });
  }
  // Reach here means outside of all interiors
  SetTerrainFogEx(...terrainFogDefaultParams);
  Weather.show(true);
  restoreCameraBound();
}

export function registerHouseInterior(): void {
  SetTerrainFogEx(...terrainFogDefaultParams);
  defaultCameraDistance.value = Camera.getField(CAMERA_FIELD_TARGET_DISTANCE);

  const animation = chatParamString('-anim', 'stand');
  const facing = chatParamReal('-facing', 0);
  const height = chatParamReal('-height', 0);
  const timescale = chatParamReal('-ts', 1);

  // const timer = setIntervalIndefinite(1, (idx) => {
  //   if (idx === 0) return;
  //   log('timer');
  //   const player = GetLocalPlayer();
  //   log('player', player);
  //   const groupHandle = GetUnitsSelectedAll(player);
  //   log('groupHandle');
  //   log('groupHandle size', BlzGroupGetSize(groupHandle));
  //   const group = Group.fromHandle(groupHandle);
  //   log('group size', group.size);
  //   temp(group)
  //     .for(() => {
  //       log('iteration');
  //       const unit = Unit.fromEnum();
  //       log(unit.name);
  //       log(height.current, facing.current, animation.current, timescale.current);
  //       makeFlyable(unit);
  //       unit.setflyHeight(height.current, 0);
  //       unit.facing = facing.current;
  //       unit.setAnimation(animation.current);
  //       unit.setTimeScale(timescale.current);
  //       log('done', unit.name);
  //     });
  // });
  // let enabled = false;
  // timer.pause();
  onChatCommand('-setanim', true, () => {
    // enabled = !enabled;
    // log(enabled ? 'enable setting animation' : 'disable setting animation');
    // if (enabled) timer.resume(); else timer.pause();

    const player = GetLocalPlayer();
    log('player', player);
    const groupHandle = GetUnitsSelectedAll(player);
    log('groupHandle');
    log('groupHandle size', BlzGroupGetSize(groupHandle));
    const group = Group.fromHandle(groupHandle);
    log('group size', group.size);
    temp(group)
      .for(() => {
        log('iteration');
        const unit = Unit.fromEnum();
        log(unit.name);
        log(height.current, facing.current, animation.current, timescale.current);
        makeFlyable(unit);
        unit.setflyHeight(height.current, 0);
        unit.facing = facing.current;
        unit.setAnimation(animation.current);
        unit.setTimeScale(timescale.current);
        log('done', unit.name);
      });
  });
  onChatCommand('-getanim', true, () => {
    ClearTextMessages();
    log('animation', animation.current);
    log('facing', facing.current);
    log('height', height.current);
    log('timescale', timescale.current);
  });

  // House 1
  registerHouse(
    gg_rct_House_1_out,
    gg_rct_House_1_in,
    gg_rct_House_1_interior,
    90,
    270,
  );
  registerHouse(
    gg_rct_House_1_out2,
    gg_rct_House_1_in2,
    gg_rct_House_1_interior,
    90 + 45,
    270 + 45,
  );

  // House 2
  registerHouse(
    gg_rct_House_2_out,
    gg_rct_House_2_in,
    gg_rct_House_2_interior,
    90 + 45,
    270 + 45,
  );
  registerHouse(
    gg_rct_House_2_floor_1,
    gg_rct_House_2_floor_2,
    gg_rct_House_2_interior_floor_2,
    270 + 45,
    270 + 45,
    gg_rct_House_2_floor_1to2,
  );
}
