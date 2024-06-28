import { DarkForceAi } from 'ai/dark_force_ai';
import { PolarProjection } from 'lib/location';
import {
  Group,
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

export class ScortahAi extends DarkForceAi {
  static register(player: player, unitTypeId: number) {
    const heroes = GetUnitsOfPlayerAndTypeId(player, unitTypeId);
    Group.fromHandle(heroes).for(() => {
      new ScortahAi(Unit.fromHandle(GetEnumUnit()));
    });
    DestroyGroup(heroes);
  }

  thinkFastExtra(): void {
    if (this.thinkFastCycle % 3 !== 0 || this.observer.getState() === 'retreat') return;

    const dest = this.observer.getDestination();
    if (![OrderId.Move, OrderId.Shockwave].includes(this.hero.currentOrder)) {
      // && !Sandquake.isCasting(this.hero)) {
      const loc = PolarProjection(dest, 1000, GetRandomDirectionDeg());
      this.hero.issueOrderAt(OrderId.Attack, loc.x, loc.y);
    }
  }
}
