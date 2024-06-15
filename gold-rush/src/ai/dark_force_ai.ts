import { getUnitXY } from 'lib/location';
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
    super(hero, undefined, { retreatWhenAlone: false });
    const loc = getUnitXY(Unit.fromHandle(gg_unit_nfoh_0321));
    this.observer.setHomeLocation(loc);
  }
}
