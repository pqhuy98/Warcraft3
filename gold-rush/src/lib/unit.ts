import {
  AngleBetweenLocs, DistanceBetweenLocs, getUnitXY, Loc, PolarProjection,
  tempLocation,
} from 'lib/location';
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

/**
 * @returns angle in degree
 */
export function angleBetweenUnits(u1: Unit, u2:Unit) {
  const l1 = getUnitXY(u1);
  const l2 = getUnitXY(u2);
  const result = AngleBetweenLocs(l1, l2);
  return result;
}

export function distanceBetweenUnits(u1: Unit, u2:Unit) {
  const l1 = getUnitXY(u1);
  const l2 = getUnitXY(u2);
  const result = DistanceBetweenLocs(l1, l2);
  return result;
}

export function unitPolarProjection(unit: Unit, distance: number, angle: number): Loc {
  const loc = getUnitXY(unit);
  const newLoc = PolarProjection(loc, distance, angle);
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

export function growUnit(u: Unit, targetScale: number, duration: number, initialScale?: number) {
  const startingScale = initialScale ?? (u.getField(UNIT_RF_SCALING_VALUE) as number);
  setIntervalForDuration(0.1, duration, (i, repeat) => {
    const scale = i / repeat * (targetScale - startingScale) + startingScale;
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
    for (const [tied, target] of unitTies) {
      relocateUnitToUnit(tied, target);
    }
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

export function getUnitsFromGroup(group: group): Unit[] {
  const units: Unit[] = [];
  Group.fromHandle(group).for(() => {
    units.push(Unit.fromEnum());
  });
  return units;
}

export function enumUnitsWithDelay(
  units: Unit[],
  callback: (u: Unit, index: number) => void,
  durationPerStep: number,
): Timer {
  const t = Timer.create();
  let index = 0;
  t.start(durationPerStep, true, () => {
    callback(units[index], index);
    index++;
    if (index >= units.length) {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const dummy of unitTies.keys()) {
      const dummyUnit = Unit.fromHandle(dummy);
      if (!dummyUnit.isAlive()) {
        damageSourceMaster.delete(dummy);
      }
    }
  });
}

export function createDummy(owner: MapPlayer, locX: number, locY: number, master: Unit, timespan: number, facing = 0) {
  const dummy = new Unit(owner, UNIT_ID_DUMMY, locX, locY, facing);
  setDamageSourceMaster(dummy.handle, master.handle);
  dummy.applyTimedLife(BUFF_ID_GENERIC, timespan);
  dummy.addAbility(ABILITY_ID_LOCUST);
  dummy.invulnerable = true;
  return dummy;
}

export function isBuilding(unit: unit) {
  return !!Unit.fromHandle(unit).isUnitType(UNIT_TYPE_STRUCTURE);
}

export function isHero(unit: unit) {
  return Unit.fromHandle(unit).isHero();
}

export function isWard(unit: unit) {
  return ConvertTargetFlag(BlzGetUnitIntegerField(unit, UNIT_IF_TARGETED_AS)) === TARGET_FLAG_WARD;
}

export function GetUnitsInRangeOfXYMatching(range: number, loc: Loc, filter: () => boolean): Unit[] {
  let cond: conditionfunc;
  const group = GetUnitsInRangeOfLocMatching(500, tempLocation(loc), cond = Condition(() => filter()));
  DestroyCondition(cond);
  const units = getUnitsFromGroup(group);
  DestroyGroup(group);
  return units;
}
