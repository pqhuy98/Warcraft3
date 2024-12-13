import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import {
  MapPlayer, Point, Rectangle, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import {
  neutralPassive, UNIT_IPR_RECEIVER, UNIT_IPR_TRANSMITTER,
} from './constants';
import { log } from './log';
import { DEG_TO_RAD, RAD_TO_DEG } from './maths/misc';
import { ABILITY_Move } from './resources/war3-abilities';
import { setIntervalIndefinite } from './trigger';

export interface Loc {
  x: number
  y: number
}

export interface Destroyable {
  destroy(): void
}

let temps: Destroyable[] = [];
let nextTemps: Destroyable[] = [];

export function temp<T extends Destroyable>(obj: T): T {
  nextTemps.push(obj);
  return obj;
}

export function tempLocation(loc: Loc): location {
  return temp(Point.create(loc.x, loc.y)).handle;
}

export function templocation(loc: location): location {
  return temp(Point.fromHandle(loc)).handle;
}

export function centerLocRect(rect: rect): Loc {
  return { x: GetRectCenterX(rect), y: GetRectCenterY(rect) };
}

export function randomLocRect(rect: rect): Loc {
  return {
    x: GetRandomReal(GetRectMinX(rect), GetRectMaxX(rect)),
    y: GetRandomReal(GetRectMinY(rect), GetRectMaxY(rect)),
  };
}

export function locZ(loc: Loc): number {
  return GetLocationZ(tempLocation(loc));
}

export function currentLoc(loc: Loc): Loc {
  return { x: loc.x, y: loc.y };
}

export function daemonTempCleanUp(): void {
  onChatCommand('-temp', true, () => {
    log('Temp destroyable:', temps.length + nextTemps.length);
  }, 'Debug', 'Print how many pending leakable destroys.');

  setIntervalIndefinite(0.5, () => {
    for (const obj of temps) {
      obj.destroy();
    }
    temps = nextTemps;
    nextTemps = [];
  });
}

export function fromTempLocation(loc: location): Loc | undefined {
  if (loc == null) {
    return undefined;
  }
  const point = Point.fromHandle(loc);
  temp(point);
  return { x: point.x, y: point.y };
}

export function PolarProjection(loc: Loc, offset: number, angleDeg: number): Loc {
  return {
    x: loc.x + Math.cos(angleDeg * DEG_TO_RAD) * offset,
    y: loc.y + Math.sin(angleDeg * DEG_TO_RAD) * offset,
  };
}

/**
 * @return angle in degree
 */
export function Angle(loc1: Loc, loc2: Loc): number {
  return Math.atan2(loc2.y - loc1.y, loc2.x - loc1.x) * RAD_TO_DEG;
}

export function Distance(loc1: Loc, loc2: Loc): number {
  const dx = loc2.x - loc1.x;
  const dy = loc2.y - loc1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function isLocInRect(loc: Loc, rect: rect): boolean {
  const Rect = Rectangle.fromHandle(rect);
  return Rect.minX - 10 <= loc.x && loc.x < Rect.maxX + 10
    && Rect.minY - 10 <= loc.y && loc.y < Rect.maxY + 10;
}

export function cameraCenter(): Loc {
  return { x: GetCameraTargetPositionX(), y: GetCameraTargetPositionY() };
}

export function meanLocs(locs: Loc[]): Loc {
  const x = locs.reduce((acc, loc) => acc + loc.x, 0) / locs.length;
  const y = locs.reduce((acc, loc) => acc + loc.y, 0) / locs.length;
  return { x, y };
}

let iprTransmitter: Unit;
let iprReceiver: Unit;
const iprHideSpot = centerLocRect(gg_rct_Unit_experiments);

// https://www.hiveworkshop.com/threads/is-point-reachable-1-0-2.353693/
export function isPointReachable(from: Loc, to: Loc): boolean {
  // IsTerrainPathable returns true if not walkable!
  if (IsTerrainPathable(to.x, to.y, PATHING_TYPE_WALKABILITY)) {
    return false;
  }

  if (!iprTransmitter) {
    iprTransmitter = Unit.create(neutralPassive, UNIT_IPR_TRANSMITTER.id, from.x, from.y);
  } else {
    iprTransmitter.show = true;
    iprTransmitter.paused = false;
  }
  if (!iprReceiver) {
    iprReceiver = Unit.create(neutralPassive, UNIT_IPR_RECEIVER.id, to.x, to.y);
  } else {
    iprReceiver.show = true;
    iprReceiver.paused = false;
  }
  iprTransmitter.x = from.x;
  iprTransmitter.y = from.y;
  iprReceiver.setPosition(to.x, to.y);
  iprReceiver.setFacingEx(Angle(iprTransmitter, iprReceiver)); // initially turn its back to transmitter
  iprReceiver.issueImmediateOrder(OrderId.Militia);
  const result = iprReceiver.currentOrder === OrderId.Militia;
  if (result) {
    iprReceiver.disableAbility(ABILITY_Move.id, true, false);
    iprReceiver.disableAbility(ABILITY_Move.id, false, false);
  }
  iprReceiver.setPosition(iprHideSpot.x, iprHideSpot.y);
  iprTransmitter.setPosition(iprHideSpot.x, iprHideSpot.y);
  return result;
}

export function isRectVisible(rect: rect, player: MapPlayer): boolean {
  const corners: Loc[] = [
    // center
    { x: GetRectCenterX(rect), y: GetRectCenterY(rect) },
    // 4 corners
    { x: GetRectMinX(rect), y: GetRectMaxY(rect) },
    { x: GetRectMaxX(rect), y: GetRectMaxY(rect) },
    { x: GetRectMinX(rect), y: GetRectMinY(rect) },
    { x: GetRectMaxX(rect), y: GetRectMinY(rect) },
    // center of 4 sides
    { x: GetRectCenterX(rect), y: GetRectMinY(rect) },
    { x: GetRectCenterX(rect), y: GetRectMaxY(rect) },
    { x: GetRectMaxX(rect), y: GetRectCenterY(rect) },
    { x: GetRectMinX(rect), y: GetRectCenterY(rect) },
  ];
  return corners.some((loc) => player.coordsVisible(loc.x, loc.y));
}

export function randomLocInRects(rects: rect[]): Loc {
  const rectAreas = rects.map((r) => GetRectWidthBJ(r) * GetRectHeightBJ(r));
  const totalArea = rectAreas.reduce((acc, v) => acc + v, 0);
  const dice = GetRandomReal(0, totalArea);
  let accumArea = 0;
  for (const fieldRect of rects) {
    accumArea += GetRectWidthBJ(fieldRect) * GetRectHeightBJ(fieldRect);
    if (accumArea >= dice) {
      return randomLocRect(fieldRect);
    }
  }
  throw new Error('randomLocInRects: this should never happen');
}
