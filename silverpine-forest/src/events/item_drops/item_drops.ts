import { getDestructablesInRect } from 'lib/destructable';
import { buildTrigger } from 'lib/trigger';
import { pickRandom } from 'lib/utils';
import { Destructable, Widget } from 'w3ts';

import {
  ITEM_BundleofLumber_lmbr, ITEM_GoldCoins_gold, ITEM_ManualofHealth_manh, ITEM_RuneofGreaterHealing_rhe3,
  ITEM_RuneofGreaterMana_rma2, ITEM_RuneofHealing_rhe2, ITEM_RuneofLesserHealing_rhe1, ITEM_RuneofMana_rman,
  ITEM_RuneofRestoration_rres, ITEM_RuneofShielding_rsps, ITEM_RuneofSpeed_rspd, ITEM_RuneofSpiritLink_rspl,
  ITEM_TomeofAgility_tdex, ITEM_TomeofAgility2_tdx2, ITEM_TomeofExperience_texp, ITEM_TomeofIntelligence_tint,
  ITEM_TomeofIntelligence2_tin2, ITEM_TomeofKnowledge_tpow, ITEM_TomeofStrength_tstr, ITEM_TomeofStrength2_tst2,
} from '../../lib/resources/war3-items';

const crateTypeIds = ['LTbx', 'LTbs', 'LTbr', 'LTcr'].map((code) => FourCC(code));

export function registerItemDrops(): void {
  let crateDropCount = 0;

  buildTrigger((t) => {
    getDestructablesInRect(GetWorldBounds())
      .forEach((d) => t.registerDeathEvent(d));

    t.addAction(() => {
      const d = Destructable.fromEvent();

      if (isCrate(d) && (crateDropCount < 2 || GetRandomInt(1, 2) === 1)) {
        dropItemOnDeath(d, pickRandom(instantConsumableDrops).id);
        crateDropCount++;
      }
    });
  });
}

function isCrate(d: Destructable): boolean {
  return crateTypeIds.includes(d.typeId);
}

export function dropItemOnDeath(widget: Widget, itemId: number): void {
  if (widget.life === 0) {
    WidgetDropItem(widget.handle, itemId);
  } else {
    buildTrigger((t) => {
      t.registerDeathEvent(widget);
      t.addAction(() => {
        WidgetDropItem(widget.handle, itemId);
        t.destroy();
      });
    });
  }
}

export const restorationDrops = [
  ITEM_RuneofGreaterHealing_rhe3,
  ITEM_RuneofGreaterMana_rma2,
  ITEM_RuneofHealing_rhe2,
  ITEM_RuneofLesserHealing_rhe1,
  ITEM_RuneofMana_rman,
  ITEM_RuneofRestoration_rres,
];

export const buffDrops = [
  ITEM_RuneofShielding_rsps,
  ITEM_RuneofSpeed_rspd,
  ITEM_RuneofSpiritLink_rspl,
];

export const statsUpDrops = [
  ITEM_TomeofAgility2_tdx2,
  ITEM_TomeofAgility_tdex,
  ITEM_TomeofExperience_texp,
  ITEM_TomeofIntelligence2_tin2,
  ITEM_TomeofIntelligence_tint,
  ITEM_TomeofKnowledge_tpow,
  ITEM_TomeofStrength2_tst2,
  ITEM_TomeofStrength_tstr,
  ITEM_ManualofHealth_manh,
];

export const goldLumberDrops = [
  ITEM_GoldCoins_gold,
  ITEM_BundleofLumber_lmbr,
];

export const instantConsumableDrops = [
  ...restorationDrops,
  ...buffDrops,
  ...statsUpDrops,
  ...goldLumberDrops,
];
