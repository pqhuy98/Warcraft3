import { setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

export class MiscEvents {
  static register() {
    setTimeout(0, () => this.run());
  }

  static run() {
    // Keeper casting Transquil
    setIntervalIndefinite(30, () => {
      const keeperGrove = Unit.fromHandle(gg_unit_Ekee_0551);
      keeperGrove.issueImmediateOrder(OrderId.Stop);
      keeperGrove.resetCooldown();
      setTimeout(5, () => {
        keeperGrove.mana = keeperGrove.maxMana;
        keeperGrove.issueImmediateOrder(OrderId.Tranquility);
      });
    });

    // Goblin Shredder in farm deteriorating
    setIntervalIndefinite(10, () => {
      [gg_unit_ngir_0095, gg_unit_ngir_0096, gg_unit_ngir_0097].forEach((gs) => {
        const goblinShredder = Unit.fromHandle(gs);
        goblinShredder.life = Math.min(goblinShredder.life, goblinShredder.maxLife - 80);
      });
    });
  }
}
