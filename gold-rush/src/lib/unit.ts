import {
  AngleBetweenLocs, DistanceBetweenLocs, getUnitXY, Loc, PolarProjection,
  tempLocation,
} from 'lib/location';
import {
  Group, Item, MapPlayer, Timer, Unit,
} from 'w3ts';

import { k0, k1 } from './debug/key_counter';
import { log } from './log';
import { onChatCommand, setIntervalForDuration, setIntervalIndefinite } from './trigger';

export const BUFF_ID_GENERIC = FourCC('BTLF');
export const UNIT_ID_DUMMY = FourCC('h000:hfoo');

export function getAttackRange(unit: Unit, weaponIndex:number):number {
  return BlzGetUnitWeaponRealField(unit.handle, UNIT_WEAPON_RF_ATTACK_RANGE, weaponIndex);
}

export function setAttackRange(unit: Unit, weaponIndex: number, value:number) {
  const currentRange = getAttackRange(unit, weaponIndex); // index is correct, returned range is correct.
  const secondRange = getAttackRange(unit, weaponIndex + 1); // yes, we should get the 2nd attack range and count it too

  BlzSetUnitWeaponRealField(
    unit.handle,
    UNIT_WEAPON_RF_ATTACK_RANGE,
    weaponIndex + 1,
    value - currentRange + secondRange,
  );
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
  k0('fade');
  const t = Timer.create();

  const TICK_TIME = 1.0 / 15;
  const alphaLossPerTick = Math.round(alphaLossPerSec * TICK_TIME);
  let newAlpha = alpha;

  t.start(TICK_TIME, true, () => {
    newAlpha -= alphaLossPerTick;

    if (checkCancel()) {
      // fading is cancelled
      t.pause();
      t.destroy();
      k1('fade');
      return;
    }
    if (newAlpha <= 0) {
      // fading is completed
      t.pause();
      t.destroy();
      k1('fade');
      onComplete();
    }

    u.setVertexColor(red, green, blue, newAlpha);
  });
}

export function growUnit(u: Unit, targetScale: number, duration: number, initialScale?: number) {
  k0('grwu');
  const startingScale = initialScale ?? (u.getField(UNIT_RF_SCALING_VALUE) as number);
  setIntervalForDuration(0.1, duration, (i, repeat) => {
    const scale = i / repeat * (targetScale - startingScale) + startingScale;
    u.setField(UNIT_RF_SCALING_VALUE, scale);
    u.setScale(scale, 0, 0);
  }, () => {
    k1('grwu');
  });
}

const unitTies = new Map<Unit, Unit>();

export function tieUnitToUnit(tiedUnit: Unit, targetUnit: Unit) {
  k0('tu2u');
  unitTies.set(tiedUnit, targetUnit);
  relocateUnitToUnit(tiedUnit, targetUnit);
}

export function daemonTieUnitToUnit() {
  setIntervalIndefinite(0.03, () => {
    for (const [tied, target] of unitTies) {
      relocateUnitToUnit(tied, target);
    }
  });

  onChatCommand('-tu2u', true, () => { log('unitTies', unitTies.size); }, 'Print number of units that are tied to another unit.');
}

function relocateUnitToUnit(tiedUnit: Unit, targetUnit: Unit) {
  if (tiedUnit == null || targetUnit == null) {
    unitTies.delete(tiedUnit);
    return;
  }

  if (!tiedUnit.isAlive()) {
    unitTies.delete(tiedUnit);
    k1('tu2u');
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
) {
  if (units.length === 0) {
    return;
  }
  k0('euwd');
  const t = Timer.create();
  let index = 0;
  t.start(durationPerStep, true, () => {
    if (index >= units.length - 1) {
      t.pause();
      t.destroy();
      k1('euwd');
    }
    index++;
    callback(units[index - 1], index - 1);
  });
}

const dummyMaster = new Map<Unit, Unit>();

export function getDummyMaster(dummy: unit): Unit {
  const u = Unit.fromHandle(dummy);
  return dummyMaster.get(u) ?? u;
}

let dummyCreatedCount = 0;

export function daemonDummyMaster() {
  setIntervalIndefinite(5, () => {
    for (const dummy of dummyMaster.keys()) {
      if (!dummy.isAlive()) {
        dummyMaster.delete(dummy);
      }
    }
  });

  onChatCommand('-dm', true, () => { log('dummyMaster', dummyMaster.size); }, 'Print number of current active dummies.');
  onChatCommand('-dmc', true, () => { log('dummy created count', dummyCreatedCount); }, 'Print number of dummies ever created.');
}

export function createDummy(owner: MapPlayer, locX: number, locY: number, master: Unit, timespan: number, facing = 0) {
  dummyCreatedCount++;
  const dummy = Unit.create(owner, UNIT_ID_DUMMY, locX, locY, facing);
  if (timespan > 0) {
    dummy.applyTimedLife(BUFF_ID_GENERIC, timespan);
  }
  dummyMaster.set(dummy, master);
  dummy.setPathing(false);
  return dummy;
}

export function safeRemoveDummy(dummy: Unit) {
  dummy.kill();
  dummy.show = false;
}

export function isBuilding(unit: Unit) {
  return !!unit.isUnitType(UNIT_TYPE_STRUCTURE);
}

export function isWard(unit: Unit) {
  return ConvertTargetFlag(unit.getField(UNIT_IF_TARGETED_AS) as number) === TARGET_FLAG_WARD;
}

export function isDummy(unit: Unit) {
  return unit.typeId === UNIT_ID_DUMMY;
}

export function GetUnitsInRangeOfXYMatching(range: number, loc: Loc, filter: () => boolean): Unit[] {
  let cond: conditionfunc;
  const group = GetUnitsInRangeOfLocMatching(range, tempLocation(loc).handle, cond = Condition(() => filter()));
  DestroyCondition(cond);
  const units = getUnitsFromGroup(group);
  DestroyGroup(group);
  return units;
}

export function orderUnitUseItemAbilityAtLoc(unit: Unit, abilityId: number, loc: Loc) {
  for (let i = 0; i < 6; i++) {
    const itm = UnitItemInSlot(unit.handle, i + 1);
    if (itm == null) continue;

    const item = Item.fromHandle(itm);
    const ability = item.getAbility(abilityId);
    if (ability == null) continue;
    unit.useItemAt(item, loc.x, loc.y);
    break;
  }
}
