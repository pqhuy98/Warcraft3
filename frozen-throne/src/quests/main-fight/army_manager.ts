import { Loc } from 'lib/location';
import { MapPlayer, Unit } from 'w3ts';

interface UnitData {
  typeId: number
  owner: MapPlayer
  loc: Loc
  facing: number
  hero?: Unit
  onRestore: (unit: Unit) => unknown
}

export class ArmyManager {
  data: UnitData[] = [];

  saveUnit(unit: Unit, onRestore?: (unit: Unit) => unknown): void {
    this.data.push({
      typeId: unit.typeId,
      owner: unit.owner,
      loc: {
        x: unit.x,
        y: unit.y,
      },
      facing: unit.facing,
      hero: unit.isHero() ? unit : undefined,
      onRestore,
    });
  }

  restoreAll(): void {
    for (const data of this.data) {
      let unit: Unit;
      if (data.hero) {
        data.hero.revive(data.loc.x, data.loc.y, false);
        unit = data.hero;
      } else {
        unit = Unit.create(data.owner, data.typeId, data.loc.x, data.loc.y, data.facing);
      }
      unit.life = unit.maxLife;
      unit.mana = unit.maxMana;
      unit.removeBuffs(true, true);
      unit.setPosition(data.loc.x, data.loc.y);
      unit.setFacingEx(data.facing);
      if (data.onRestore) {
        data.onRestore(unit);
      }
    }
  }
}
