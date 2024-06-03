import { getUnitLocation } from 'lib/location';
import {
  Group, MapPlayer, Timer, Unit,
} from 'w3ts';

import { setIntervalForDuration, setIntervalIndefinite } from './trigger';

export const ABILITY_ID_LOCUST = FourCC('Aloc');
export const BUFF_ID_GENERIC = FourCC('BTLF');
export const UNIT_ID_DUMMY = FourCC('h000:hfoo');

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

const damageSourceMaster = new Map<unit, unit>();
function setDamageSourceMaster(dummy: unit, master: unit) {
  damageSourceMaster.set(dummy, master);
}

export function getDamageSourceMaster(dummy: unit) {
  return damageSourceMaster.get(dummy) || dummy;
}

export function daemonDamageSourceMaster() {
  setIntervalIndefinite(5, () => {
    unitTies.forEach((master, dummy) => {
      const dummyUnit = Unit.fromHandle(dummy);
      if (!dummyUnit.isAlive()) {
        damageSourceMaster.delete(dummy);
      }
    });
  });
}

export function createDummy(owner: MapPlayer, locX: number, locY: number, master: Unit, timespan = 1, facing = 0) {
  const dummy = new Unit(owner, UNIT_ID_DUMMY, locX, locY, facing);
  setDamageSourceMaster(dummy.handle, master.handle);
  dummy.applyTimedLife(BUFF_ID_GENERIC, timespan);
  dummy.addAbility(ABILITY_ID_LOCUST);
  dummy.invulnerable = true;
  return dummy;
}

export function isDummy(unit: unit) {
  return GetUnitTypeId(unit) === UNIT_ID_DUMMY;
}
