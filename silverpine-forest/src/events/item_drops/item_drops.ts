import { getDestructablesInRect } from 'lib/destructable';
import { Loc } from 'lib/location';
import { buildTrigger, setTimeout } from 'lib/trigger';
import { getUnitsInRangeOfLoc } from 'lib/unit';
import { pickRandom, unique } from 'lib/utils';
import {
  Destructable, Trigger, Unit, Widget,
} from 'w3ts';

import {
  ITEM_BundleofLumber_lmbr, ITEM_GoldCoins_gold, ITEM_ManualofHealth_manh, ITEM_RuneofGreaterHealing_rhe3,
  ITEM_RuneofGreaterMana_rma2, ITEM_RuneofHealing_rhe2, ITEM_RuneofLesserHealing_rhe1, ITEM_RuneofMana_rman,
  ITEM_RuneofRestoration_rres, ITEM_RuneofShielding_rsps, ITEM_RuneofSpeed_rspd, ITEM_RuneofSpiritLink_rspl,
  ITEM_TomeofAgility_tdex, ITEM_TomeofAgility2_tdx2, ITEM_TomeofExperience_texp, ITEM_TomeofIntelligence_tint,
  ITEM_TomeofIntelligence2_tin2, ITEM_TomeofKnowledge_tpow, ITEM_TomeofStrength_tstr, ITEM_TomeofStrength2_tst2,
} from '../../lib/resources/war3-items';

const crateTypeIds = ['LTbx', 'LTbs', 'LTbr', 'LTcr'].map((code) => FourCC(code));

let destructableDeathTrigger: Trigger;

export function registerItemDrops(): void {
  destructableDeathTrigger = buildTrigger((t) => {
    getDestructablesInRect(GetWorldBounds())
      .forEach((d) => t.registerDeathEvent(d));

    t.addAction(() => {
      const d = Destructable.fromEvent();

      if (isCrate(d)) {
        const killer = getNearbyStrongestUnit(d);
        dropItemOnDeath(d, getSuitableDrops(killer));
        respawnLater(d, 120);
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

function getSuitableDrops(unit?: Unit): number {
  const options = [...buffDrops, ...goldLumberDrops];
  if (unit !== undefined) {
    if (unit.life + 150 < unit.maxLife) {
      options.push(...lifeDrops);
    }
    if (unit.mana + 150 < unit.maxMana) {
      options.push(...manaDrops);
    }
    if (unit.isHero()) {
      options.push(...statsUpDrops);
    }
  }
  return pickRandom(unique(options.map((i) => i.id)));
}

function getNearbyStrongestUnit(loc: Loc): Unit | undefined {
  const units = getUnitsInRangeOfLoc(500, loc, (u) => u.isAlive());
  return units.reduce((best, u) => (best !== undefined && (
    best.isHero() && !u.isHero()
    || best.level >= u.level
  ) ? best : u), undefined);
}

function respawnLater(d: Destructable, duration: number): void {
  const typeId = d.typeId;
  const { x, y } = d;
  setTimeout(duration, () => {
    const newD = Destructable.create(typeId, x, y);
    destructableDeathTrigger.registerDeathEvent(newD);
  });
}

const lifeDrops = [
  ITEM_RuneofGreaterHealing_rhe3,
  ITEM_RuneofHealing_rhe2,
  ITEM_RuneofLesserHealing_rhe1,
  ITEM_RuneofRestoration_rres,
];

const manaDrops = [
  ITEM_RuneofGreaterMana_rma2,
  ITEM_RuneofMana_rman,
  ITEM_RuneofRestoration_rres,
];

const buffDrops = [
  ITEM_RuneofShielding_rsps,
  ITEM_RuneofSpeed_rspd,
  ITEM_RuneofSpiritLink_rspl,
];

const statsUpDrops = [
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

const goldLumberDrops = [
  ITEM_GoldCoins_gold,
  ITEM_BundleofLumber_lmbr,
];

export const restorationDrops = unique([...lifeDrops, ...manaDrops]);
