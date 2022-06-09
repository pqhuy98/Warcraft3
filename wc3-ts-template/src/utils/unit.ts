import { getUnitLocation } from 'utils/location';
import { Timer, Unit } from 'w3ts';

export function getAttackRange(unit: Unit, weaponIndex:number):number {
  return BlzGetUnitWeaponRealField(unit.handle, UNIT_WEAPON_RF_ATTACK_RANGE, weaponIndex);
}

export function setAttackRange(unit: Unit, weaponIndex:number, value:number) {
  BlzSetUnitWeaponRealField(unit.handle, UNIT_WEAPON_RF_ATTACK_RANGE, weaponIndex, value);
}

export function angleBetweenUnits(u1: Unit, u2:Unit) {
  const l1 = getUnitLocation(u1);
  const l2 = getUnitLocation(u2);
  const result = AngleBetweenPoints(l1, l2);
  RemoveLocation(l1);
  RemoveLocation(l2);
  return result;
}

export function distanceBetweenUnits(u1: Unit, u2:Unit) {
  const l1 = getUnitLocation(u1);
  const l2 = getUnitLocation(u2);
  const result = DistanceBetweenPoints(l1, l2);
  RemoveLocation(l1);
  RemoveLocation(l2);
  return result;
}

export function unitPolarProjection(unit: Unit, distance: number, angle: number):location {
  const loc = getUnitLocation(unit);
  const newLoc = PolarProjectionBJ(loc, distance, angle);
  RemoveLocation(loc);
  return newLoc;
}

export function fadeUnit(
  u: Unit,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  alphaLossPerSec: number,
  checkCancel: () => boolean,
  onComplete: () => void,
) {
  const t = new Timer();

  const TICK_TIME = 1.0 / 15;
  const alphaLossPerTick = Math.round(alphaLossPerSec * TICK_TIME);
  let newAlpha = alpha;

  t.start(TICK_TIME, true, () => {
    newAlpha -= alphaLossPerTick;

    if (checkCancel()) {
      // fading is cancelled because of re-activate
      t.destroy();
      return;
    }
    if (newAlpha <= 0) {
      // fading is completed
      t.destroy();
      onComplete();
    }

    u.setVertexColor(red, green, blue, newAlpha);
  });
}
