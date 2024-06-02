import { getUnitLocation } from 'lib/location';
import {
  Group, Timer, Unit,
} from 'w3ts';

import { setIntervalForDuration, setIntervalIndefinite } from './trigger';

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
      // fading is cancelled
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

export function growUnit(u: Unit, targetScale: number, duration:number) {
  const initialScale = (u.getField(UNIT_RF_SCALING_VALUE) as number);
  setIntervalForDuration(0.03, duration, (i, repeat) => {
    const scale = i / repeat * (targetScale - initialScale) + initialScale;
    u.setScale(scale, 0, 0);
  });
}

const unitTies = new Map<unit, unit>();

export function tieUnitToUnit(tiedunit: unit, targetunit: unit) {
  unitTies.set(tiedunit, targetunit);
  relocateUnitToUnit(tiedunit, targetunit);
}

export function daemonTieUnitToUnit() {
  setIntervalIndefinite(0.03, () => {
    unitTies.forEach((target, tied) => relocateUnitToUnit(tied, target));
  });
}

function relocateUnitToUnit(tiedunit: unit, targetunit: unit) {
  const tiedUnit = Unit.fromHandle(tiedunit);
  const targetUnit = Unit.fromHandle(targetunit);
  if (!tiedUnit.isAlive()) {
    unitTies.delete(tiedunit);
  } else {
    tiedUnit.x = targetUnit.x;
    tiedUnit.y = targetUnit.y;
    tiedUnit.setflyHeight(targetUnit.getflyHeight(), 9999);
  }
}

export function enumUnitGroupWithDelay(
  unitGroup: group,
  callback: (u: unit, index: number) => void,
  durationPerStep: number,
): Timer {
  const t = new Timer();
  const groupArray: unit[] = [];
  Group.fromHandle(unitGroup).for(() => {
    groupArray.push(GetEnumUnit());
  });

  let index = 0;
  t.start(durationPerStep, true, () => {
    callback(groupArray[index], index);
    index++;
    if (index >= groupArray.length) {
      t.destroy();
    }
  });

  return t;
}
