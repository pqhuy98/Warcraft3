import { mainPlayer } from 'lib/constants';
import { Frame, Unit as Locs } from 'w3ts';

import { setTimeout } from './trigger';

export function updateCameraBound(rects: rect[], locs?: Locs[]): void {
  if (rects.length === 0 && (!locs || locs.length === 0)) return;

  let minX = 999999999;
  let minY = 999999999;
  let maxX = -999999999;
  let maxY = -999999999;

  if (locs) {
    locs.forEach((u) => {
      minX = Math.min(minX, u.x);
      maxX = Math.max(maxX, u.x);
      minY = Math.min(minY, u.y);
      maxY = Math.max(maxY, u.y);
    });
  }
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
  SetCameraBoundsToRectForPlayerBJ(mainPlayer.handle, bound);
  RemoveRect(bound);
}

export function restoreCameraBound(): void {
  BlzChangeMinimapTerrainTex('war3mapMap.blp');
  SetCameraBoundsToRectForPlayerBJ(mainPlayer.handle, GetCameraBoundsMapRect());
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
