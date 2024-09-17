import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { ABILITY_ID_PURGE_NO_GRAPHIC } from 'lib/constants';
import {
  currentLoc, Loc, randomLocRect, temp,
} from 'lib/location';
import { log } from 'lib/log';
import { buildTrigger } from 'lib/trigger';
import { createDummy, getDummyMaster } from 'lib/unit';
import { Group, Trigger, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

export enum RestoreMode {
  BEFORE_PRESERVE = 0,
  BEFORE_DEATH = 1
}

type RestoreFunction = (mode: RestoreMode) => void

interface UnitSave {
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

export function preserveUnit(unit: Unit): RestoreFunction {
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
    }

    const { decoy } = data;
    const save = mode === RestoreMode.BEFORE_PRESERVE ? data.saveOriginal : data.saveBeforeDeath;
    if (save == null) {
      log(`Warn: cannot restore an alive unit to before death: ${unit.name}`);
    }

    if (unit.isHero() && !unit.isAlive()) {
      unit.revive(save.position.x, save.position.y, false);
    }

    restoreFromSave(unit, save);

    // dispell all buffs
    const dummy = createDummy(unit.owner, unit.x, unit.y, unit, 1);
    dummy.addAbility(ABILITY_ID_PURGE_NO_GRAPHIC);
    dummy.issueTargetOrder(OrderId.Purge, unit);

    // remove decoy
    if (decoy) decoy.destroy();
    data.isAlive = true;
  };

  preservedUnits.set(unit, {
    // trigger to prevent dying
    deathTrigger: buildTrigger((t) => {
      t.registerUnitEvent(unit, EVENT_UNIT_DAMAGING);
      t.addCondition(() => GetEventDamage() > 0);
      t.addAction(() => {
        const data = preservedUnits.get(unit);
        data.saveBeforeDeath = saveUnit(unit);

        if (unit.isHero()) {
          return;
        }
        const killer = getDummyMaster(GetEventDamageSource());
        if (GetEventDamage() > unit.life) {
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
          killer.damageTarget(decoy.handle, Math.max(GetEventDamage(), decoy.life + 1), false, false, ATTACK_TYPE_CHAOS, DAMAGE_TYPE_UNIVERSAL, WEAPON_TYPE_WHOKNOWS);
          data.decoy = decoy;
          data.isAlive = false;
        }
      });
    }),
    // original data before dying
    saveOriginal: saveUnit(unit),
    isAlive: unit.isAlive(),
    restore,
  });
  return restore;
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
  return preservedUnits.has(unit)
    ? preservedUnits.get(unit).isAlive
    : unit.isAlive();
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
    lifePercent: unit.life / unit.maxLife,
    manaPercent: unit.mana / unit.maxMana,
    position: currentLoc(unit),
    facing: unit.facing,
    foodUsed: unit.foodUsed,
    invulnerable: unit.invulnerable,
    paused: unit.paused,
  };
}
