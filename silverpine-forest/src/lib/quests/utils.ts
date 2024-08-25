import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { log } from 'lib/log';
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
  let r = 255;
  let g = 255;
  let b = 255;
  let icon: minimapicon;

  onChatCommand('-qmc $1 $1 $1', false, (msg) => {
    r = parseInt(msg.split(' ')[1], 10);
    g = parseInt(msg.split(' ')[2], 10);
    b = parseInt(msg.split(' ')[3], 10);
  });

  onChatCommand('-qm $1', false, (msg) => {
    const id = parseInt(msg.split(' ')[1], 10);
    const path = [
      'UI\\Minimap\\MiniMap-Goldmine.mdl', // gold mine, yellow circle
      'UI\\Minimap\\MiniMap-Item.mdl', // red question mark, low resolution
      'UI\\Minimap\\MiniMap-NeutralBuilding.mdl', // house icon, e.g. fountain
      'UI\\Minimap\\MiniMap-Hero.mdl', // hero icon, diamond shap
      'UI\\Minimap\\Minimap-Ping.mdl', // ping icon, very noticable
      'UI\\Minimap\\Minimap-Waypoint.mdl', // green square shrinking in
      'UI\\Minimap\\MiniMap-CreepLoc-Small.mdl', // small green square, stationary
      'UI\\Minimap\\MiniMap-CreepLoc-Large.mdl', // big circle
      'UI\\Minimap\\MiniMap-QuestGiver.mdl', // exclamation mark with circle outside
      'UI\\Minimap\\Minimap-QuestObjectivePrimary.mdl', // exclamation mark with circle outside (save as above)
      'UI\\Minimap\\Minimap-QuestObjectiveBonus.mdl', // exclamation mark with circle outside (save as above)
      'UI\\Minimap\\Minimap-QuestTurnIn.mdl', // question mark with circle outside
      'UI\\Minimap\\MiniMap-Boss.mdl', // big skull icon
      'UI\\Minimap\\MiniMap-ControlPoint.mdl', // exclamation mark with circle outside (breathing visibly)
    ][id];
    if (icon) {
      DestroyMinimapIcon(icon);
    }
    icon = CreateMinimapIcon(0, 0, r, g, b, path, FOG_OF_WAR_MASKED);
    ClearTextMessages();
    log(path);
  });

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
