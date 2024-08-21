import { Unit } from 'w3ts';

import { colorize } from './colorize';
import { Loc, tempLocation } from './location';
import { MODEL_TalkToMe } from './resources/war3-models';

interface QuestData {
  name: string
  description: string
  icon: string
  items: string[]
}

interface Quest {
  quest: quest
  items: questitem[]
  data: QuestData
}

export function createQuest(questData: QuestData): Quest {
  const q = CreateQuestBJ(
    bj_QUESTTYPE_REQ_DISCOVERED,
    questData.name,
    questData.description,
    questData.icon,
  );
  const items: questitem[] = [];
  for (const item of questData.items) {
    items.push(CreateQuestItemBJ(q, item));
  }
  QuestMessageBJ(
    bj_FORCE_ALL_PLAYERS,
    bj_QUESTMESSAGE_DISCOVERED,
    `${colorize.yellow('NEW QUEST')}: ${questData.name}\n${questData.items.map((i) => ` - ${i}`).join('\n')}`,
  );

  return { quest: q, items, data: questData };
}

export function completeQuestItem(quest: Quest, questItemIndex: number) {
  ClearTextMessages();
  let message = `${colorize.yellow('QUEST UPDATE')}: ${quest.data.name}`;
  for (let i = 0; i < quest.items.length; i++) {
    if (i <= questItemIndex) {
      message += colorize.gray(`\n - ${quest.data.items[i]} (completed)`);
    } else {
      message += `\n - ${quest.data.items[i]}`;
    }
  }

  QuestMessageBJ(bj_FORCE_ALL_PLAYERS, bj_QUESTMESSAGE_UPDATED, message);
  QuestItemSetCompleted(quest.items[questItemIndex], true);
}

export function completeQuest(quest: Quest) {
  ClearTextMessages();
  QuestSetCompleted(quest.quest, true);
  for (const item of quest.items) {
    QuestItemSetCompleted(item, true);
  }

  QuestMessageBJ(
    bj_FORCE_ALL_PLAYERS,
    bj_QUESTMESSAGE_DISCOVERED,
    `${colorize.yellow('QUEST COMPLETED')}: ${quest.data.name}`,
  );
}

export function createDialogSound(filePath: string, speakerName: string, text: string) {
  const sound = CreateSound(filePath, false, false, false, 1, 1, 'DefaultEAXON');
  SetSoundChannel(sound, 1);
  SetSoundVolumeBJ(sound, 100);
  SetDialogueSpeakerNameKey(sound, speakerName);
  SetDialogueTextKey(sound, text);
  return sound;
}

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

export function createMinimapIconUnit(unit: Unit, type: keyof typeof IconStyles) {
  CampaignMinimapIconUnitBJ(unit.handle, IconStyles[type]);
  const icon = GetLastCreatedMinimapIcon();
  return icon;
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
