import { Item, Unit } from 'w3ts';

import { Loc, PolarProjection, tempLocation } from '../location';
import { MODEL_TalkToMe } from '../resources/war3-models';
import { setIntervalIndefinite } from '../trigger';

export const IconStyles = {
  questGiver: bj_CAMPPINGSTYLE_BONUS, // yellow exclam
  turnIn: bj_CAMPPINGSTYLE_TURNIN, // yellow question, static

  boss: bj_CAMPPINGSTYLE_BOSS, // boss
  allyActive: bj_CAMPPINGSTYLE_CONTROL_ALLY, // green exclam, breathing
  enemyActive: bj_CAMPPINGSTYLE_CONTROL_ENEMY, //
  neutralActive: bj_CAMPPINGSTYLE_CONTROL_NEUTRAL, // white exclam, breathing
  enemyStatic: bj_CAMPPINGSTYLE_PRIMARY, // red exclam, static
  allyStatic: bj_CAMPPINGSTYLE_PRIMARY_GREEN, // green exclam, static
};

export type IconStyle = keyof typeof IconStyles

const unitMinimapIcon = new Map<Unit, { icon: minimapicon, style: IconStyle }>();

export function setMinimapIconUnit(unit: Unit, style: IconStyle) {
  if (unitMinimapIcon.has(unit)) {
    const data = unitMinimapIcon.get(unit);
    if (data.style !== style) {
      removeMinimapIcon(unit);
    } else {
      return data.icon;
    }
  }

  CampaignMinimapIconUnitBJ(unit.handle, IconStyles[style]);
  const icon = GetLastCreatedMinimapIcon();
  unitMinimapIcon.set(unit, { icon, style });
  return icon;
}

export function removeMinimapIcon(unit: Unit) {
  if (unitMinimapIcon.has(unit)) {
    DestroyMinimapIcon(unitMinimapIcon.get(unit).icon);
    unitMinimapIcon.delete(unit);
  }
}

export function createMinimapIconLoc(loc: Loc, type: keyof typeof IconStyles) {
  CampaignMinimapIconLocBJ(tempLocation(loc).handle, IconStyles[type]);
  const icon = GetLastCreatedMinimapIcon();
  return icon;
}

const questMarker = new Map<Unit, effect>();

export function enableQuestMarker(unit: Unit) {
  if (questMarker.has(unit)) return;
  questMarker.set(unit, AddSpecialEffectTarget(MODEL_TalkToMe, unit.handle, 'overhead'));
}

export function disableQuestMarker(unit: Unit) {
  if (!questMarker.has(unit)) return;
  DestroyEffect(questMarker.get(unit));
  questMarker.delete(unit);
}

export function daemonQuestMarker() {
  setIntervalIndefinite(1.132, () => {
    if (questMarker.size === 0) return;
    for (const [unit, effect] of questMarker) {
      if (!unit.isAlive()) {
        questMarker.delete(unit);
        DestroyEffect(effect);
      }
    }
  });
}

export function giveItemReward(giver: Unit, itemType: number) {
  const loc = PolarProjection(giver, 100, giver.facing);
  return Item.create(itemType, loc.x, loc.y);
}
