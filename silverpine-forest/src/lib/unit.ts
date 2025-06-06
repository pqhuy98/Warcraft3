import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import {
  Distance, Loc,
  tempLocation,
} from 'lib/location';
import {
  Group, Item, MapPlayer, Timer, Trigger, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { playerMain } from './constants';
import { k0, k1 } from './debug/key_counter';
import { log } from './log';
import { angleDifference } from './maths/misc';
import {
  ABILITY_Attack, ABILITY_Burrow, ABILITY_BurrowBarbedArachnathid, ABILITY_BurrowDetectionFlyers,
  ABILITY_BurrowScarabLvl2, ABILITY_BurrowScarabLvl3, ABILITY_CreepSleep, ABILITY_Move, ABILITY_RavenFormMedivh,
} from './resources/war3-abilities';
import { UNIT_TYPE } from './resources/war3-units';
import { buildTrigger, setIntervalForDuration, setIntervalIndefinite } from './trigger';

export const BUFF_ID_GENERIC = FourCC('BTLF');
export const UNIT_ID_DUMMY = FourCC('h000:hfoo');

export function getAttackRange(unit: Unit, weaponIndex: number): number {
  return BlzGetUnitWeaponRealField(unit.handle, UNIT_WEAPON_RF_ATTACK_RANGE, weaponIndex);
}

export function setAttackRange(unit: Unit, weaponIndex: number, value: number): void {
  const currentRange = getAttackRange(unit, weaponIndex); // index is correct, returned range is correct.
  const secondRange = getAttackRange(unit, weaponIndex + 1); // yes, we should get the 2nd attack range and count it too

  BlzSetUnitWeaponRealField(
    unit.handle,
    UNIT_WEAPON_RF_ATTACK_RANGE,
    weaponIndex + 1,
    value - currentRange + secondRange,
  );
}

export function fadeUnit(
  u: Unit,
  red: number,
  green: number,
  blue: number,
  alphaOld: number,
  alphaNew: number,
  duration: number,
  onComplete?: () => void,
  checkCancel?: () => boolean,
): void {
  k0('fade');
  const t = Timer.create();

  const TICK_TIME = 1.0 / 30;
  const alphaBonusPerTick = (alphaNew - alphaOld) / duration * TICK_TIME;
  let newAlpha = alphaOld;

  t.start(TICK_TIME, true, () => {
    newAlpha += alphaBonusPerTick;

    if (checkCancel?.()) {
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
      onComplete?.();
    }

    u.setVertexColor(red, green, blue, Math.min(255, Math.max(0, Math.round(newAlpha))));
  });
}

export function setUnitScale(u: Unit, scale: number): void {
  u.setField(UNIT_RF_SCALING_VALUE, scale);
  u.setScale(scale, 0, 0);
}

export function getUnitScale(u: Unit): number {
  return u.getField(UNIT_RF_SCALING_VALUE) as number;
}

export function growUnit(u: Unit, targetScale: number, duration: number, initialScale?: number): void {
  k0('grwu');
  const startingScale = initialScale ?? getUnitScale(u);
  const repeat = duration / 0.1;
  setIntervalForDuration(0.1, duration, (i) => {
    const scale = i / repeat * (targetScale - startingScale) + startingScale;
    setUnitScale(u, scale);
  }, () => {
    k1('grwu');
  });
}

const unitTies = new Map<Unit, Unit>();
let tieUnitTimer: Timer = null;

export function tieUnitToUnit(tiedUnit: Unit, targetUnit: Unit): void {
  k0('tu2u');
  unitTies.set(tiedUnit, targetUnit);
  relocateUnitToUnit(tiedUnit, targetUnit);
  if (!tieUnitTimer) {
    tieUnitTimer = setIntervalIndefinite(0.03, () => {
      if (unitTies.size === 0) {
        tieUnitTimer.pause();
        tieUnitTimer.destroy();
        tieUnitTimer = null;
        return;
      }
      for (const [tied, target] of unitTies) {
        relocateUnitToUnit(tied, target);
      }
    });
  }
}

export function untieUnit(tiedUnit: Unit): void {
  unitTies.delete(tiedUnit);
  k1('tu2u');
}

function relocateUnitToUnit(tiedUnit: Unit, targetUnit: Unit): void {
  if (isUnitRemoved(tiedUnit) || isUnitRemoved(targetUnit) || !tiedUnit.isAlive()) {
    unitTies.delete(tiedUnit);
    k1('tu2u');
    return;
  }

  tiedUnit.x = targetUnit.x;
  tiedUnit.y = targetUnit.y;
  tiedUnit.setflyHeight(targetUnit.getflyHeight(), 0);
}

export function registerTieUnitToUnit(): void {
  onChatCommand('-tu2u', true, () => { log('unitTies', unitTies.size); }, 'Debug', 'Print number of units that are tied to another unit.');
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
): void {
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

export function daemonDummyMaster(): void {
  setIntervalIndefinite(5, () => {
    if (dummyMaster.size === 0) return;
    for (const dummy of dummyMaster.keys()) {
      if (!dummy.isAlive() || isUnitRemoved(dummy)) {
        dummyMaster.delete(dummy);
      }
    }
  });

  onChatCommand('-dm', true, () => { log('dummyMaster', dummyMaster.size); }, 'Debug', 'Print number of current active dummies.');
  onChatCommand('-dmc', true, () => { log('dummy created count', dummyCreatedCount); }, 'Debug', 'Print number of dummies ever created.');
}

export function createDummy(
  owner: MapPlayer,
  locX: number,
  locY: number,
  master: Unit,
  timespan: number,
  facing = 0,
): Unit {
  dummyCreatedCount++;
  const dummy = Unit.create(owner, UNIT_ID_DUMMY, locX, locY, facing);
  if (timespan > 0) {
    dummy.applyTimedLife(BUFF_ID_GENERIC, timespan);
  }
  if (master) {
    dummyMaster.set(dummy, master);
  }
  dummy.setPathing(false);
  return dummy;
}

export function safeRemoveDummy(dummy: Unit): void {
  dummy.kill();
  dummy.show = false;
}

export function isBuilding(unit: Unit): boolean {
  return !!unit.isUnitType(UNIT_TYPE_STRUCTURE);
}

export function isWard(unit: Unit): boolean {
  return ConvertTargetFlag(unit.getField(UNIT_IF_TARGETED_AS) as number) === TARGET_FLAG_WARD;
}

export function isOrganic(unit: Unit): boolean {
  return !isBuilding(unit) && !unit.isUnitType(UNIT_TYPE_MECHANICAL) && !isWard(unit);
}

export function isDummy(unit: Unit): boolean {
  return unit.typeId === UNIT_ID_DUMMY;
}

export function getUnitsInRangeOfLoc(range: number, loc: Loc, filter?: (u: Unit) => boolean): Unit[] {
  let group: group;
  let condition: conditionfunc;
  if (filter) {
    condition = Condition(() => filter(Unit.fromFilter()));
    group = GetUnitsInRangeOfLocMatching(range, tempLocation(loc), condition);
  } else {
    group = GetUnitsInRangeOfLocAll(range, tempLocation(loc));
  }
  const results = getUnitsFromGroup(group);
  if (filter) {
    DestroyBoolExpr(condition);
  }
  DestroyGroup(group);
  return results;
}

/**
 * @returns closest unit to a unit, obviously excluding itself.
 */
export function getClosestUnitInRangeOfUnit(range: number, unit: Unit, filter?: (u: Unit) => boolean, minRange = 0): Unit | undefined {
  const units = getUnitsInRangeOfLoc(range, unit, (u) => u !== unit && Distance(u, unit) >= minRange && filter(u));
  if (units.length === 0) return undefined;
  let bestUnit = units[0];
  let bestDistance = Distance(bestUnit, unit);
  for (let i = 0; i < units.length; i++) {
    const distance = Distance(units[i], unit);
    if (distance < bestDistance) {
      bestUnit = units[i];
      bestDistance = distance;
    }
  }
  return bestUnit;
}

export function orderUnitUseItemAbilityAtLoc(unit: Unit, abilityId: number, loc: Loc): void {
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

const crowFormAbilityId = ABILITY_RavenFormMedivh.id;
export function makeFlyable(unit: Unit): void {
  if (unit.getAbilityLevel(crowFormAbilityId) === 0) {
    unit.addAbility(crowFormAbilityId);
    unit.removeAbility(crowFormAbilityId);
  }
}

export function getUnitsInRect(rect: rect, filter?: (u: Unit) => boolean): Unit[] {
  let group: group;
  let condition: conditionfunc;
  if (filter) {
    condition = Condition(() => filter(Unit.fromFilter()));
    group = GetUnitsInRectMatching(rect, condition);
  } else {
    group = GetUnitsInRectAll(rect);
  }
  const results = getUnitsFromGroup(group);
  if (filter) {
    DestroyBoolExpr(condition);
  }
  DestroyGroup(group);
  return results;
}

export function getUnitsOfPlayer(player: MapPlayer, filter?: (u: Unit) => boolean): Unit[] {
  let group: group;
  let condition: conditionfunc;
  if (filter) {
    condition = Condition(() => !isDummy(Unit.fromFilter()) && filter(Unit.fromFilter()));
    group = GetUnitsOfPlayerMatching(player.handle, condition);
  } else {
    group = GetUnitsOfPlayerAll(player.handle);
  }
  const results = getUnitsFromGroup(group);
  if (filter) {
    DestroyBoolExpr(condition);
  }
  DestroyGroup(group);
  return results;
}

export function getMainHero(): Unit {
  return getUnitsOfPlayer(playerMain, (u) => u.isHero())[0];
}

export function isUnitIdle(unit: Unit): boolean {
  return unit.currentOrder === OrderId.Stop
    || unit.currentOrder === 0
    || unit.currentOrder === OrderId.Standdown;
}

export function setUnitFacingWithRate(unit: Unit, angle: number, degPerSec: number = 180 / 0.75): void {
  const angleDiff = angleDifference(unit.facing, angle);
  SetUnitFacingTimed(unit.handle, angle, angleDiff / degPerSec);
}

export function setUnitFacingTimed(unit: Unit, angle: number, duration = 0.75): void {
  SetUnitFacingTimed(unit.handle, angle, duration);
}

export function isUnitType(u: Unit, unitTypes: UNIT_TYPE): boolean {
  return u.typeId === FourCC(unitTypes.code);
}

export function enumUnitAbilities(unit: Unit, callback: (ability: ability, id: number, level: number) => unknown): void {
  const ignoreList = [
    ABILITY_Attack, ABILITY_Move, ABILITY_CreepSleep, ABILITY_BurrowDetectionFlyers,
    ABILITY_Burrow, ABILITY_BurrowBarbedArachnathid, ABILITY_BurrowScarabLvl2, ABILITY_BurrowScarabLvl3,
  ].map((a) => a.id);

  for (let i = 0; ; i++) {
    const ability = unit.getAbilityByIndex(i);
    if (ability) {
      const id = BlzGetAbilityId(ability);
      if (ignoreList.includes(id)) continue;

      const level = unit.getAbilityLevel(id);
      callback(ability, id, level);
    } else {
      break;
    }
  }
}

export function isUnitRemoved(unit: Unit): boolean {
  return unit.typeId === 0;
}

const invulnerableTriggers = new Map<Unit, Trigger>();

export function setNeverDie(unit: Unit, state = true, lowestHp: number = unit.maxLife): void {
  const has = invulnerableTriggers.has(unit);
  if (state && has || !state && !has) return;
  if (state) {
    invulnerableTriggers.set(unit, buildTrigger((t) => {
      t.registerUnitEvent(unit, EVENT_UNIT_DAMAGING);
      t.addCondition(() => GetEventDamage() > 0);
      t.addAction(() => {
        if (GetEventDamage() > unit.life - lowestHp) {
          BlzSetEventDamage(Math.max(0, unit.life - lowestHp));
          BlzSetEventDamageType(DAMAGE_TYPE_UNIVERSAL);
        }
      });
    }));
  } else {
    invulnerableTriggers.get(unit).destroy();
    invulnerableTriggers.delete(unit);
  }
}
