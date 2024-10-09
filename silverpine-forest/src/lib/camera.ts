import { chatParamInt, chatParamReal, onChatCommand } from 'events/chat_commands/chat_commands.model';
import { playerMain } from 'lib/constants';
import {
  Camera, Frame, Timer, Trigger,
} from 'w3ts';

import {
  Loc, meanLocs, temp, tempLocation,
} from './location';
import { log } from './log';
import { meanAngles, RAD_TO_DEG } from './maths/misc';
import { ORDER_holdposition } from './resources/war3-orders';
import { buildTrigger, setIntervalIndefinite, setTimeout } from './trigger';
import { getUnitsFromGroup, getUnitsOfPlayer } from './unit';

export function lockCameraBound(rects: rect[], locs: Loc[] = []): void {
  if (rects.length === 0 && locs.length === 0) return;

  let minX = 999999999;
  let minY = 999999999;
  let maxX = -999999999;
  let maxY = -999999999;

  locs.forEach((u) => {
    minX = Math.min(minX, u.x);
    maxX = Math.max(maxX, u.x);
    minY = Math.min(minY, u.y);
    maxY = Math.max(maxY, u.y);
  });
  rects.forEach((r) => {
    minX = Math.min(minX, GetRectMinX(r));
    maxX = Math.max(maxX, GetRectMaxX(r));
    minY = Math.min(minY, GetRectMinY(r));
    maxY = Math.max(maxY, GetRectMaxY(r));
  });

  if (minX === 0 && maxX === 0 && minY === 0 && maxY === 0) {
    return;
  }

  Frame.fromOrigin(ORIGIN_FRAME_MINIMAP, 0).visible = false;

  const bound = Rect(minX, minY, maxX, maxY);
  SetCameraBoundsToRectForPlayerBJ(playerMain.handle, bound);
  RemoveRect(bound);
}

export function restoreCameraBound(): void {
  BlzChangeMinimapTerrainTex('war3mapMap.blp');
  SetCameraBoundsToRectForPlayerBJ(playerMain.handle, GetCameraBoundsMapRect());
  Frame.fromOrigin(ORIGIN_FRAME_MINIMAP, 0).visible = true;
}

export function setCineFilter(
  from: {r: number, g: number, b: number, a: number},
  to: {r: number, g: number, b: number, a: number},
  duration: number,
  texture = 'ReplaceableTextures\\CameraMasks\\White_mask.blp',
): void {
  SetCineFilterTexture(texture);
  SetCineFilterBlendMode(BLEND_MODE_BLEND);
  SetCineFilterTexMapFlags(TEXMAP_FLAG_NONE);
  SetCineFilterStartUV(0, 0, 1, 1);
  SetCineFilterEndUV(0, 0, 1, 1);
  SetCineFilterStartColor(from.r, from.g, from.b, from.a);
  SetCineFilterEndColor(to.r, to.g, to.b, to.a);
  SetCineFilterDuration(duration);
  DisplayCineFilter(true);
  if (to.a === 0) {
    setTimeout(duration, () => DisplayCineFilter(false));
  }
}

export function panCameraSmart(loc: Loc, duration: number): void {
  SmartCameraPanBJ(GetLocalPlayer(), tempLocation(loc), duration);
}

export function setCamera(
  loc: Loc,
  distance: number,
  attackAngle: number,
  rotation: number,
  duration: number,
): void {
  Camera.setField(CAMERA_FIELD_TARGET_DISTANCE, distance, duration);
  Camera.setField(CAMERA_FIELD_ANGLE_OF_ATTACK, attackAngle, duration);
  Camera.setField(CAMERA_FIELD_ROTATION, rotation, duration);
  Camera.panTimed(loc.x, loc.y, duration, undefined);
}

export function registerCameraExperiments(): void {
  setTimeout(0, () => {
    onChatCommand('cams', true, () => {
      const units = getUnitsFromGroup(GetUnitsSelectedAll(playerMain.handle));
      const center = meanLocs(units);
      const meanRotation = meanAngles(units.map((u) => u.facing + 180)) ?? GetRandomDirectionDeg();
      units.forEach((u) => log(`${u.name} ${u.facing}`));
      log('meanRotation', meanRotation);
      setCamera(center, 1000, GetRandomReal(300, 345), meanRotation, 1);
    });

    let isLogging = false;
    onChatCommand('cam', true, () => {
      isLogging = !isLogging;
      ClearTextMessages();
      setIntervalIndefinite(1, () => {
        if (!isLogging) return;
        ClearTextMessages();
        log('nearz - NEARZ', Camera.getField(CAMERA_FIELD_NEARZ));
        log('farz - FARZ', Camera.getField(CAMERA_FIELD_FARZ));
        log('angle - ANGLE_OF_ATTACK', Camera.getField(CAMERA_FIELD_ANGLE_OF_ATTACK) * RAD_TO_DEG);
        log('fov - FIELD_OF_VIEW', Camera.getField(CAMERA_FIELD_FIELD_OF_VIEW) * RAD_TO_DEG);
        log('lp - LOCAL_PITCH', Camera.getField(CAMERA_FIELD_LOCAL_PITCH) * RAD_TO_DEG);
        log('lr - LOCAL_ROLL', Camera.getField(CAMERA_FIELD_LOCAL_ROLL) * RAD_TO_DEG);
        log('ly - LOCAL_YAW', Camera.getField(CAMERA_FIELD_LOCAL_YAW) * RAD_TO_DEG);
        log('roll - ROLL', Camera.getField(CAMERA_FIELD_ROLL) * RAD_TO_DEG);
        log('rot - ROTATION', Camera.getField(CAMERA_FIELD_ROTATION) * RAD_TO_DEG);
        log('zoff - ZOFFSET', Camera.getField(CAMERA_FIELD_ZOFFSET));
        log('dis - TARGET_DISTANCE', Camera.getField(CAMERA_FIELD_TARGET_DISTANCE));
      });
    });

    const nearz = chatParamReal('nearz', Camera.getField(CAMERA_FIELD_NEARZ));
    const farz = chatParamReal('farz', Camera.getField(CAMERA_FIELD_FARZ));
    const angle = chatParamReal('angle', Camera.getField(CAMERA_FIELD_ANGLE_OF_ATTACK) * RAD_TO_DEG);
    const fov = chatParamReal('fov', Camera.getField(CAMERA_FIELD_FIELD_OF_VIEW) * RAD_TO_DEG);
    const lp = chatParamReal('lp', Camera.getField(CAMERA_FIELD_LOCAL_PITCH) * RAD_TO_DEG);
    const lr = chatParamReal('lr', Camera.getField(CAMERA_FIELD_LOCAL_ROLL) * RAD_TO_DEG);
    const ly = chatParamReal('ly', Camera.getField(CAMERA_FIELD_LOCAL_YAW) * RAD_TO_DEG);
    const roll = chatParamReal('roll', Camera.getField(CAMERA_FIELD_ROLL) * RAD_TO_DEG);
    const rot = chatParamReal('rot', Camera.getField(CAMERA_FIELD_ROTATION) * RAD_TO_DEG);
    const zoff = chatParamReal('zoff', Camera.getField(CAMERA_FIELD_ZOFFSET));
    const dis = chatParamReal('dis', Camera.getField(CAMERA_FIELD_TARGET_DISTANCE));

    const interval = 0.03;
    const timer = setIntervalIndefinite(interval, (idx) => {
      if (idx === 0) return; // Do not run in the first instance
      const target = temp(Camera.targetPoint);
      Camera.setField(CAMERA_FIELD_NEARZ, nearz.current, 0);
      Camera.setField(CAMERA_FIELD_FARZ, farz.current, 0);
      Camera.setField(CAMERA_FIELD_ANGLE_OF_ATTACK, angle.current, 0);
      Camera.setField(CAMERA_FIELD_FIELD_OF_VIEW, fov.current, 0);
      Camera.setField(CAMERA_FIELD_LOCAL_PITCH, lp.current, 0);
      Camera.setField(CAMERA_FIELD_LOCAL_ROLL, lr.current, 0);
      Camera.setField(CAMERA_FIELD_LOCAL_YAW, ly.current, 0);
      Camera.setField(CAMERA_FIELD_ROLL, roll.current, 0);
      Camera.setField(CAMERA_FIELD_ROTATION, rot.current, 0);
      Camera.setField(CAMERA_FIELD_ZOFFSET, zoff.current + target.z, 0);
      Camera.setField(CAMERA_FIELD_TARGET_DISTANCE, dis.current, 0);
    });
    timer.pause();

    let timerOn = false;
    onChatCommand('camexp', true, () => {
      timerOn = !timerOn;
      if (timerOn) {
        timer.resume();
      } else {
        timer.pause();
      }
    });

    // Fps camera
    const hero = getUnitsOfPlayer(playerMain, (u) => u.isHero())[0];
    const deltaT = 0.01;
    const deltaTSlow = 0.1;
    let lastMoving = false;
    const anglePerTick = 120 * deltaT;
    const lockZ = chatParamInt('lockz', 1);
    const animIdx = chatParamInt('ai', 1);

    const updateFps = (): void => {
      // rotate
      if (pressed.a !== pressed.d) {
        hero.setFacingEx(hero.facing + (pressed.a ? anglePerTick : -anglePerTick));
      }

      // move forward/backward/left/right
      let moving = false;
      let movingAngle = 0;
      if (pressed.q || pressed.e) {
        movingAngle = pressed.q ? 45 : -45;
        moving = true;
      } else if (pressed.w || pressed.s) {
        movingAngle = pressed.w ? 0 : 180;
        moving = true;
      }

      if (moving) {
        movingAngle = Deg2Rad(hero.facing + movingAngle);
        hero.x += Math.cos(movingAngle) * hero.moveSpeed * deltaT;
        hero.y += Math.sin(movingAngle) * hero.moveSpeed * deltaT;
        if (!lastMoving) {
          log('play walk 1');
          hero.setAnimation(animIdx.current);
        }
      } else {
        hero.issueImmediateOrder(ORDER_holdposition);
      }
      lastMoving = moving;

      Camera.setField(CAMERA_FIELD_ROTATION, hero.facing, 0.02);
      Camera.setField(CAMERA_FIELD_ANGLE_OF_ATTACK, angle.current, 0);
      Camera.setField(CAMERA_FIELD_TARGET_DISTANCE, dis.current, 0);
      Camera.setField(CAMERA_FIELD_LOCAL_PITCH, lp.current, 0);
      Camera.panTimed(hero.x, hero.y, 0.02, undefined);
    };

    function updateFpsSlow(): void {
      if (lockZ.current !== 0) {
        const wantedHeight = hero.z + 300;
        if (Camera.eyeZ - wantedHeight > 50) {
          Camera.setField(CAMERA_FIELD_ZOFFSET, Camera.getField(CAMERA_FIELD_ZOFFSET) - 50, deltaTSlow);
        } else if (wantedHeight - Camera.eyeZ > 50) {
          Camera.setField(CAMERA_FIELD_ZOFFSET, Camera.getField(CAMERA_FIELD_ZOFFSET) + 50, deltaTSlow);
        }
      }
    }

    const keyMap: Record<string, oskeytype> = {
      w: OSKEY_W,
      a: OSKEY_A,
      s: OSKEY_S,
      d: OSKEY_D,
      q: OSKEY_Q,
      e: OSKEY_E,
    };

    const pressed: Record<string, boolean> = {
      w: false,
      a: false,
      s: false,
      d: false,
      q: false,
      e: false,
    };
    const registerKeyPress = (key: string): Trigger[] => {
      if (!keyMap[key]) return [];
      const triggers: Trigger[] = [];
      for (const state of [true, false]) {
        triggers.push(buildTrigger((t) => {
          t.registerPlayerKeyEvent(playerMain, keyMap[key], 0, state);
          t.addAction(() => {
            pressed[key] = state;
            updateFps();
          });
        }));
      }
      return triggers;
    };
    let triggers: Trigger[] = [];

    let timerFps: Timer = null;
    let timerFps2: Timer = null;
    onChatCommand('-fps', true, () => {
      if (timerFps === null) {
        triggers = [
          ...registerKeyPress('w'),
          ...registerKeyPress('a'),
          ...registerKeyPress('s'),
          ...registerKeyPress('d'),
          ...registerKeyPress('q'),
          ...registerKeyPress('e'),
        ];

        angle.current = 335;
        lp.current = 15;
        dis.current = 1200;
        zoff.current = -100;
        timerFps = setIntervalIndefinite(deltaT, () => updateFps());
        timerFps2 = setIntervalIndefinite(deltaTSlow, () => updateFpsSlow());
      } else {
        timerFps.destroy();
        timerFps = null;
        timerFps2.destroy();
        timerFps2 = null;
        triggers.forEach((t) => t.destroy());
      }
    });
  });
}

export function getMouseUiCoordinate(x: number, y: number, z: number): Loc {
  const angleOfAttack = -Camera.getField(CAMERA_FIELD_ANGLE_OF_ATTACK);
  const fieldOfView = Camera.getField(CAMERA_FIELD_FIELD_OF_VIEW);
  const rotation = Camera.getField(CAMERA_FIELD_ROTATION) + bj_PI;

  const cosAttack = Math.cos(angleOfAttack);
  const sinAttack = Math.sin(angleOfAttack);

  const cosRot = Math.cos(rotation);
  const sinRot = Math.sin(rotation);

  const M11 = cosAttack * cosRot;
  const M12 = cosAttack * sinRot;
  const M13 = sinAttack;

  const M21 = -sinRot;
  const M22 = cosRot;
  const M23 = 0;

  const M31 = -cosRot * sinAttack;
  const M32 = -sinAttack * sinRot;
  const M33 = cosAttack;

  const dx = x - Camera.eyeX;
  const dy = y - Camera.eyeY;
  const dz = z - Camera.eyeZ;

  const xPrime = M11 * dx + M12 * dy + M13 * dz;
  const yPrime = M21 * dx + M22 * dy + M23 * dz;
  const zPrime = M31 * dx + M32 * dy + M33 * dz;

  const scaling = 1.04 / (2 * Math.tan(fieldOfView / 2));

  const screenX = 0.4 - (scaling * yPrime / xPrime);
  const screenY = 0.355 - (scaling * zPrime / xPrime);

  return { x: screenX, y: screenY };
}
