import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { Point, Rectangle, Unit } from 'w3ts';

import { log } from './log';
import { setIntervalIndefinite } from './trigger';

export const RAD_TO_ANGLE = 180 / Math.PI;

export interface Loc {
  x: number
  y: number
}

interface Destroyable {
  destroy(): void
}

let temps: Destroyable[] = [];
let nextTemps: Destroyable[] = [];

export function temp<T extends Destroyable>(obj: T): T {
  nextTemps.push(obj);
  return obj;
}

export function tempLocation(loc: Loc) {
  return temp(Point.create(loc.x, loc.y));
}

export function templocation(loc: location) {
  return temp(Point.fromHandle(loc)).handle;
}

export function centerLocRect(rect: rect) {
  return { x: GetRectCenterX(rect), y: GetRectCenterY(rect) };
}

export function randomLocRect(rect: rect) {
  return {
    x: GetRandomReal(GetRectMinX(rect), GetRectMaxX(rect)),
    y: GetRandomReal(GetRectMinY(rect), GetRectMaxY(rect)),
  };
}

export function currentLoc(loc: Loc) {
  return { x: loc.x, y: loc.y };
}

export function daemonTempCleanUp() {
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

export function getUnitXY(unit: Unit): Loc {
  return { x: unit.x, y: unit.y };
}

export function PolarProjection(loc: Loc, offset: number, angleDeg: number): Loc {
  return {
    x: loc.x + Math.cos(angleDeg / RAD_TO_ANGLE) * offset,
    y: loc.y + Math.sin(angleDeg / RAD_TO_ANGLE) * offset,
  };
}

/**
 * @return angle in degree
 */
export function AngleBetweenLocs(loc1: Loc, loc2: Loc) {
  return Math.atan2(loc2.y - loc1.y, loc2.x - loc1.x) * RAD_TO_ANGLE;
}

export function DistanceBetweenLocs(loc1: Loc, loc2: Loc) {
  const dx = loc2.x - loc1.x;
  const dy = loc2.y - loc1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function locX(loc: location): number {
  return GetLocationX(loc);
}

export function locY(loc: location): number {
  return GetLocationY(loc);
}

export function isLocInRect(loc: Loc, rect: rect) {
  const Rect = Rectangle.fromHandle(rect);
  return Rect.minX - 10 <= loc.x && loc.x < Rect.maxX + 10
    && Rect.minY - 10 <= loc.y && loc.y < Rect.maxY + 10;
}
