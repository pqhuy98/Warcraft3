import { getDestructablesInRect } from 'lib/destructable';
import { buildTrigger } from 'lib/trigger';
import { pickRandom } from 'lib/utils';
import { Destructable } from 'w3ts';

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

      if (isCrate(d) && (crateDropCount < 2 || GetRandomInt(1, 3) === 1)) {
        const item = pickRandom(barrelCraterDrops);
        WidgetDropItem(d.handle, item.id);
        crateDropCount++;
      }
    });
  });
}

function isCrate(d: Destructable): boolean {
  return crateTypeIds.includes(d.typeId);
}

const barrelCraterDrops = [
  ITEM_RuneofGreaterHealing_rhe3,
  ITEM_RuneofGreaterMana_rma2,
  ITEM_RuneofHealing_rhe2,
  ITEM_RuneofLesserHealing_rhe1,
  ITEM_RuneofMana_rman,
  ITEM_RuneofRestoration_rres,
  ITEM_RuneofShielding_rsps,
  ITEM_RuneofSpeed_rspd,
  ITEM_RuneofSpiritLink_rspl,
  ITEM_TomeofAgility2_tdx2,
  ITEM_TomeofAgility_tdex,
  ITEM_TomeofExperience_texp,
  ITEM_TomeofIntelligence2_tin2,
  ITEM_TomeofIntelligence_tint,
  ITEM_TomeofKnowledge_tpow,
  ITEM_TomeofStrength2_tst2,
  ITEM_TomeofStrength_tstr,
  ITEM_GoldCoins_gold,
  ITEM_BundleofLumber_lmbr,
  ITEM_ManualofHealth_manh,
];
