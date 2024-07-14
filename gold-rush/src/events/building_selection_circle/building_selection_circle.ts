import { temp } from 'lib/location';
import { buildTrigger } from 'lib/trigger';
import { isBuilding } from 'lib/unit';
import { Group, Unit } from 'w3ts';

function filter(unit: Unit) {
  return isBuilding(unit);
}

export class BuildingSelectionCircle {
  static register() {
    buildTrigger((t) => {
      TriggerRegisterEnterRectSimple(t.handle, GetEntireMapRect());
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_UPGRADE_FINISH);
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_UPGRADE_START);
      t.addCondition(() => filter(Unit.fromEvent()));
      t.addAction(() => {
        this.updateUnit(Unit.fromEvent());
      });
    });

    temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds()))).for(() => {
      if (filter(Unit.fromEnum())) {
        this.updateUnit(Unit.fromEnum());
      }
    });
  }

  static updateUnit(unit: Unit) {
    unit.selectionScale = 0.001;
  }
}
