import { globalUnits } from 'lib/constants';
import { getUnitXY } from 'lib/location';
import {
  Group,
  Unit,
} from 'w3ts';

import { BaseAi } from './base_ai';

export class LightForceAi extends BaseAi {
  static register(player: player, unitTypeId: number) {
    const heroes = GetUnitsOfPlayerAndTypeId(player, unitTypeId);
    Group.fromHandle(heroes).for(() => {
      new LightForceAi(Unit.fromHandle(GetEnumUnit()));
    });
    DestroyGroup(heroes);
  }

  constructor(hero: Unit) {
    super(hero);
    const loc = getUnitXY(globalUnits.fountainLight);
    this.observer.setHome(loc);
  }
}
