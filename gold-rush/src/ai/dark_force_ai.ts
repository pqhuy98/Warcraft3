import { getUnitLocation } from 'lib/location';
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
    super(hero);
    const fountains = GetUnitsOfPlayerAndTypeId(this.hero.owner.handle, FourCC('nfoh'));
    const loc = getUnitLocation(Group.fromHandle(fountains).getUnitAt(0));
    this.observer.setHomeLocation(loc);
    DestroyGroup(fountains);
    RemoveLocation(loc);
  }

  // Revive at random Altar of Darkness
  protected reviveHeroWhenDeath() {
    buildTrigger((t) => {
      t.registerUnitEvent(this.hero, EVENT_UNIT_DEATH);
      t.addAction(() => {
        setTimeout(10, () => {
          const allAltars = GetUnitsOfTypeIdAll(FourCC('uaod'));
          const altar = Unit.fromHandle(GroupPickRandomUnit(allAltars));
          DestroyGroup(allAltars);
          PingMinimapEx(altar.x, altar.y, 5, 0, 255, 0, false);
          this.hero.revive(altar.x, altar.y, true);
        });
      });
    });
  }
}
