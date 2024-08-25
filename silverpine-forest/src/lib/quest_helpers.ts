import { sleep, Unit } from 'w3ts';

import { colorize } from './colorize';
import { Loc, tempLocation } from './location';
import { MODEL_TalkToMe } from './resources/war3-models';
import { setIntervalIndefinite } from './trigger';

interface QuestData {
  name: string
  description: string
  icon: string
  items: string[]
}

export class QuestLog {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private quest: quest, private items: questitem[], private data: QuestData) {
  }

  static async create(questData: QuestData): Promise<QuestLog> {
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
      `${colorize.yellow('NEW QUEST')}\n${questData.name}\n${questData.items.map((i) => ` - ${i}`).join('\n')}`,
    );
    await sleep(GetSoundDuration(bj_questDiscoveredSound) / 1000 - 1);

    return new QuestLog(q, items, questData);
  }

  async completeItem(questItemIndex: number) {
    QuestItemSetCompleted(this.items[questItemIndex], true);
    await this.notifyQuestUpdate();
  }

  async updateItem(questItemIndex: number, newDescription: string) {
    QuestItemSetDescription(this.items[questItemIndex], newDescription);
    this.data.items[questItemIndex] = newDescription;
    await this.notifyQuestUpdate(questItemIndex);
  }

  async insertItem(description: string, atIndex: number = this.items.length) {
    this.data.items.splice(atIndex, 0, description);
    this.items.splice(atIndex, 0, CreateQuestItemBJ(this.quest, description));
    await this.notifyQuestUpdate();
  }

  async completeWithRewards(rewards: string[]) {
    await sleep(1);
    ClearTextMessages();
    QuestSetCompleted(this.quest, true);
    for (const item of this.items) {
      QuestItemSetCompleted(item, true);
    }

    QuestMessageBJ(
      bj_FORCE_ALL_PLAYERS,
      bj_QUESTMESSAGE_COMPLETED,
      `${colorize.yellow('QUEST COMPLETED')}\n${this.data.name}`,
    );
    await sleep(GetSoundDuration(bj_questCompletedSound) / 1000 - 2);
    await this.notifyRewards(rewards);
  }

  async fail() {
    ClearTextMessages();
    QuestSetFailed(this.quest, true);

    QuestMessageBJ(
      bj_FORCE_ALL_PLAYERS,
      bj_QUESTMESSAGE_FAILED,
      `${colorize.yellow('QUEST FAILED')}\n${this.data.name}`,
    );
    await sleep(GetSoundDuration(bj_questFailedSound) / 1000);
  }

  async notifyQuestUpdate(onlyIndex?: number) {
    ClearTextMessages();
    let message = `${colorize.yellow('QUEST UPDATE')}\n${this.data.name}`;
    for (let i = 0; i < this.items.length; i++) {
      if (onlyIndex != null && onlyIndex !== i) continue;
      if (IsQuestItemCompleted(this.items[i])) {
        message += colorize.gray(`\n - ${this.data.items[i]} (Completed)`);
      } else {
        message += `\n - ${this.data.items[i]}`;
      }
    }

    QuestMessageBJ(bj_FORCE_ALL_PLAYERS, bj_QUESTMESSAGE_UPDATED, message);
    await sleep(GetSoundDuration(bj_questUpdatedSound) / 1000);
  }

  private async notifyRewards(rewards: string[]) {
    if (rewards.length === 0) return;

    let message = `${colorize.yellow('REWARD')}: `;
    if (rewards.length === 1) {
      message += rewards[0];
    } else if (rewards.length === 2) {
      message += rewards.join(' and ');
    } else {
      const allButLast = rewards.slice(0, -1).join(', ');
      message += `${allButLast}, and ${rewards[rewards.length - 1]}`;
    }

    QuestMessageBJ(bj_FORCE_ALL_PLAYERS, bj_QUESTMESSAGE_ITEMACQUIRED, message);
    await sleep(GetSoundDuration(bj_questItemAcquiredSound) / 1000);
  }
}

export function createDialogSound(filePath: string, speakerName: string, text: string) {
  const sound = CreateSound(filePath, false, false, false, 1, 1, 'DefaultEAXON');
  SetSoundChannel(sound, 0);
  SetSoundVolumeBJ(sound, 127);
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
