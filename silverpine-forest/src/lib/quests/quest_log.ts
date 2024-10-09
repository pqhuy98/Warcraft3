import { sleep } from 'w3ts';

import { colorize } from '../colorize';

export interface QuestData {
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

  async completeItem(questItemIndex: number): Promise<void> {
    QuestItemSetCompleted(this.items[questItemIndex], true);
    await this.notifyQuestUpdate();
  }

  async updateItem(questItemIndex: number, newDescription: string): Promise<void> {
    QuestItemSetDescription(this.items[questItemIndex], newDescription);
    this.data.items[questItemIndex] = newDescription;
    await this.notifyQuestUpdate(questItemIndex);
  }

  async insertItem(description: string, atIndex: number = this.items.length): Promise<void> {
    this.data.items.splice(atIndex, 0, description);
    this.items.splice(atIndex, 0, CreateQuestItemBJ(this.quest, description));
    await this.notifyQuestUpdate();
  }

  async completeWithRewards(rewards: string[]): Promise<void> {
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
    notifyRewards(rewards);
    await sleep(GetSoundDuration(bj_questCompletedSound) / 1000 - 2);
  }

  async fail(): Promise<void> {
    ClearTextMessages();
    QuestSetFailed(this.quest, true);

    QuestMessageBJ(
      bj_FORCE_ALL_PLAYERS,
      bj_QUESTMESSAGE_FAILED,
      `${colorize.yellow('QUEST FAILED')}\n${this.data.name}`,
    );
    await sleep(GetSoundDuration(bj_questFailedSound) / 1000);
  }

  async notifyQuestUpdate(onlyIndex?: number): Promise<void> {
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

  hint(message: string): void {
    QuestLog.hint(message);
  }

  static hint(message: string): void {
    ClearTextMessages();
    QuestMessageBJ(
      bj_FORCE_ALL_PLAYERS,
      bj_QUESTMESSAGE_HINT,
      `${colorize.yellow('HINT:')} ${message}`,
    );
  }
}

export function notifyRewards(rewards: string[]): void {
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
}

export function notifyEventCompleted(text: string): void {
  const message = `${colorize.yellow('UPDATE')}: ${text}`;
  QuestMessageBJ(bj_FORCE_ALL_PLAYERS, bj_QUESTMESSAGE_COMPLETED, message);
}
