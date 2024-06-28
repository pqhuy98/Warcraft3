import { globalUnits } from 'lib/constants';
import { fromTempLocation, getUnitXY, temp } from 'lib/location';
import { buildTrigger, setTimeout } from 'lib/trigger';
import {
  Group,
  Unit,
} from 'w3ts';

import { BaseAi } from './base_ai';

export class DarkForceAi extends BaseAi {
  static register(player: player, unitTypeId: number) {
    const heroes = GetUnitsOfPlayerAndTypeId(player, unitTypeId);
    Group.fromHandle(heroes).for(() => {
      new DarkForceAi(Unit.fromHandle(GetEnumUnit()));
    });
    DestroyGroup(heroes);
  }

  constructor(hero: Unit) {
    super(hero, undefined, {
      retreatWhenAlone: false,
    });
    const loc = getUnitXY(globalUnits.fountainDark);
    this.observer.setHome(loc);
  }

  protected reviveHeroWhenDeath() {
    buildTrigger((t) => {
      t.registerUnitEvent(this.hero, EVENT_UNIT_DEATH);
      t.addAction(() => {
        setTimeout(10, () => {
          const chosenFountain = Unit.fromHandle(GroupPickRandomUnit(
            temp(Group.fromHandle(GetUnitsOfPlayerAndTypeId(globalUnits.fountainDark.owner.handle, globalUnits.fountainDark.typeId))).handle,
          ));

          const point = fromTempLocation(chosenFountain.getPoint().handle);
          this.observer.setHome(point);
          PingMinimapEx(point.x, point.y, 5, 255, 255, 255, false);
          this.hero.revive(point.x, point.y, true);
        });
      });
    });
  }
}
