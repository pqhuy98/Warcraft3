import { getUnitLocation } from 'lib/location';
import { setInterval } from 'lib/trigger';
import { Group, Timer, Unit } from 'w3ts';

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
  let scale = (u.getField(UNIT_RF_SCALING_VALUE) as number);
  const scalePerSec = (targetScale - scale) / duration;
  const TICK_TIME = 1.0 / 15;
  const scalePerTick = scalePerSec * TICK_TIME;
  const tickCount = duration / TICK_TIME;
  setInterval(TICK_TIME, () => {
    u.setScale(scale, 0, 0);
    scale += scalePerTick;
  }, tickCount + 1);
}

const unitTies = new Map<unit, unit>();

export function tieUnitToUnit(tiedUnit: unit, targetUnit: unit) {
  unitTies.set(tiedUnit, targetUnit);
}

export function tieUnitToUnitDaemon() {
  setInterval(0.03, () => {
    unitTies.forEach((targetUnit, tiedUnit) => {
      if (!Unit.fromHandle(tiedUnit).isAlive()) {
        unitTies.delete(tiedUnit);
      } else {
        Unit.fromHandle(tiedUnit).x = Unit.fromHandle(targetUnit).x;
        Unit.fromHandle(tiedUnit).y = Unit.fromHandle(targetUnit).y;
        Unit.fromHandle(tiedUnit).setflyHeight(Unit.fromHandle(targetUnit).getflyHeight(), 999999);
      }
    });
  });
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
