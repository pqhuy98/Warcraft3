import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { ABILITY_ID_PURGE_NO_GRAPHIC } from 'lib/constants';
import {
  currentLoc, Loc, randomLocRect, temp,
} from 'lib/location';
import { log } from 'lib/log';
import { buildTrigger } from 'lib/trigger';
import { createDummy, getDummyMaster, isUnitRemoved } from 'lib/unit';
import { reverseFourCC } from 'lib/utils';
import { Group, Trigger, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

export enum RestoreMode {
  BEFORE_PRESERVE = 0,
  BEFORE_DEATH = 1
}

type RestoreFunction = (mode: RestoreMode) => void

interface UnitSave {
  typeId: string
  lifePercent: number
  manaPercent: number
  position: Loc
  facing: number
  foodUsed: number
  invulnerable: boolean
  paused: boolean
}

interface Data {
  deathTrigger: Trigger
  saveOriginal: UnitSave
  saveBeforeDeath?: UnitSave
  decoy?: Unit
  restore: RestoreFunction
  isAlive: boolean
}

const preservedUnits = new Map<Unit, Data>();
const debug = false;

// const specialBuffs = [
//   'B000',
//   'B001',
//   'B004',
//   'B005',
//   'BHds', // divine shield
// ];

export function preserveUnit(unit: Unit): void {
  if (preservedUnits.has(unit)) {
    undoPreserveUnit(unit);
  }

  if (!unit.isAlive()) {
    log(`Warn: cannot preserve a dead unit: ${unit.name}`);
  }

  // restore
  const restore: RestoreFunction = (mode) => {
    const data = preservedUnits.get(unit);
    if (!data) {
      log(`Warn: cannot restore a no-longer-preserved unit: ${unit.name}`);
      return;
    }

    if (isUnitRemoved(unit)) {
      log(`Warn: cannot restore a removed unit with typeId: ${data.saveOriginal.typeId}`);
      undoPreserveUnit(unit);
      return;
    }

    debug && log(`Restoring ${unit.name} from ${mode}`);

    const { decoy } = data;
    const save = mode === RestoreMode.BEFORE_PRESERVE ? data.saveOriginal : data.saveBeforeDeath;
    if (save == null) {
      log(`Warn: cannot find save of unit: ${unit.name}, mode = ${mode}`);
      return;
    }

    if (unit.isHero() && !unit.isAlive()) {
      debug && log(`Reviving hero ${unit.name}`);
      unit.revive(save.position.x, save.position.y, false);
    }

    restoreFromSave(unit, save);

    // dispell all buffs
    debug && log(`Dispelling all buffs from ${unit.name}`);
    unit.removeBuffs(true, false);
    const dummy = createDummy(unit.owner, unit.x, unit.y, unit, 1);
    dummy.addAbility(ABILITY_ID_PURGE_NO_GRAPHIC);
    dummy.issueTargetOrder(OrderId.Purge, unit);

    // remove decoy
    if (decoy) {
      debug && log('removing decoy');
      decoy.destroy();
    }
    data.isAlive = true;
  };

  preservedUnits.set(unit, {
    // trigger to prevent dying
    deathTrigger: buildTrigger((t) => {
      t.registerUnitEvent(unit, EVENT_UNIT_DAMAGING);
      t.addCondition(() => GetEventDamage() > 0);
      t.addAction(() => {
        if (unit.isHero()) {
          return;
        }
        if (GetEventDamage() > unit.life) {
          const data = preservedUnits.get(unit);
          data.saveBeforeDeath = saveUnit(unit);
          const killer = getDummyMaster(GetEventDamageSource());
          debug && log(`Preserved ${unit.name} is killed by ${killer.name}`);
          BlzSetEventDamage(0);
          // hide unit
          const unitLoc = currentLoc(unit);
          unit.invulnerable = true;
          unit.show = false;
          unit.setUseFood(false);
          unit.paused = true;
          const loc = randomLocRect(gg_rct_Unit_experiments);
          unit.x = loc.x;
          unit.y = loc.y;
          unit.setPathing(false);

          // create decoy
          const decoy = Unit.create(unit.owner, unit.typeId, unitLoc.x, unitLoc.y, unit.facing);
          killer.damageTarget(decoy.handle, Math.max(GetEventDamage(), decoy.life + 999), false, false, ATTACK_TYPE_CHAOS, DAMAGE_TYPE_UNIVERSAL, WEAPON_TYPE_WHOKNOWS);
          data.decoy = decoy;
          data.isAlive = false;
        }
      });
    }),
    // original data when preserve
    saveOriginal: saveUnit(unit),
    isAlive: unit.isAlive(),
    restore,
  });
}

export function undoPreserveUnit(unit: Unit): void {
  const data = preservedUnits.get(unit);
  if (!data) {
    log(`Warn: cannot undo-preserve a no-longer-preserved unit: ${unit.name}`);
  }
  data.deathTrigger.destroy();
  preservedUnits.delete(unit);
}

export function restoreUnit(unit: Unit, mode: RestoreMode): void {
  const data = preservedUnits.get(unit);
  if (data) {
    data.restore(mode);
  } else {
    log(`Warn: cannot restore a no-longer-preserved unit: ${unit.name}`);
  }
}

export function registerPreseveUnits(): void {
  onChatCommand('-ps', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => preserveUnit(Unit.fromEnum()));
  });

  onChatCommand('-rsp', true, () => {
    for (const [unit, data] of preservedUnits) {
      data.restore(RestoreMode.BEFORE_PRESERVE);
      undoPreserveUnit(unit);
    }
  });

  onChatCommand('-rsd', true, () => {
    for (const [unit, data] of preservedUnits) {
      data.restore(RestoreMode.BEFORE_DEATH);
      undoPreserveUnit(unit);
    }
  });
}

export function isPreservedUnitAlive(unit: Unit): boolean {
  if (!unit.isAlive()) return false;
  return preservedUnits.has(unit)
    ? preservedUnits.get(unit).isAlive
    : unit.isAlive();
}

export function isUnitPreserved(unit: Unit): boolean {
  return preservedUnits.has(unit);
}

function restoreFromSave(unit: Unit, save: UnitSave): void {
  unit.life = save.lifePercent * unit.maxLife;
  unit.mana = save.manaPercent * unit.maxMana;
  unit.x = save.position.x;
  unit.y = save.position.y;
  unit.facing = save.facing;
  unit.setUseFood(save.foodUsed > 0);
  unit.invulnerable = save.invulnerable;
  unit.issueImmediateOrder(OrderId.Stop);
  unit.show = true;
  unit.paused = false;
  unit.setPathing(true);
}

function saveUnit(unit: Unit): UnitSave {
  return {
    typeId: reverseFourCC(unit.typeId),
    lifePercent: unit.life / unit.maxLife,
    manaPercent: unit.mana / unit.maxMana,
    position: currentLoc(unit),
    facing: unit.facing,
    foodUsed: unit.foodUsed,
    invulnerable: unit.invulnerable,
    paused: unit.paused,
  };
}
