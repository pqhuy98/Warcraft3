import { mainPlayer } from 'lib/constants';
import { Unit } from 'w3ts';

let minX = 0;
let minY = 0;
let maxX = 0;
let maxY = 0;

export function updateCameraBound(units: Unit[], rects: rect[]): void {
  if (minX === 0 && maxX === 0 && minY === 0 && maxY === 0) {
    minX = GetPlayerStartLocationX(mainPlayer.handle);
    maxX = GetPlayerStartLocationX(mainPlayer.handle);
    minY = GetPlayerStartLocationY(mainPlayer.handle);
    maxY = GetPlayerStartLocationY(mainPlayer.handle);
  }

  units.forEach((u) => {
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

  const bound = Rect(minX, minY, maxX, maxY);
  SetCameraBoundsToRectForPlayerBJ(mainPlayer.handle, bound);
  RemoveRect(bound);
}
