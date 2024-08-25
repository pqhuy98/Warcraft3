import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { UnitInteraction } from 'lib/systems/unit_interaction';
import { Unit } from 'w3ts';

export interface BaseQuestProps {
  dependencies: BaseQuest[]
  cheatName: string
}

export class BaseQuest {
  private completed = false;

  private started = false;

  name = 'base_quest';

  dependencies: BaseQuest[];

  questGiver: Unit;

  constructor({ dependencies, cheatName }: BaseQuestProps) {
    this.dependencies = dependencies;
    if (cheatName.length > 0) {
      onChatCommand(`-to ${cheatName}`, true, () => this.forceCompleteDependencies());
      onChatCommand(`-done ${cheatName}`, true, () => this.forceComplete());
    }
  }

  async talkToQuestGiver(unit: Unit) {
    this.questGiver = unit;
    const { unit: traveler } = await UnitInteraction.waitUntilQuestTalk(unit);
    this.started = true;
    return traveler;
  }

  complete() {
    this.completed = true;
  }

  isCompleted() {
    return this.completed;
  }

  isStarted() {
    return this.started;
  }

  cheatCodeInstantStart(cheatCode: string) {
    onChatCommand(cheatCode, true, () => this.forceCompleteDependencies());
  }

  requiredQuestsDone() {
    return this.dependencies.every((q) => q.completed);
  }

  onForceComplete() {

  }

  forceComplete() {
    if (this.completed) return;
    if (this.started) {
      QuestMessageBJ(bj_FORCE_ALL_PLAYERS, bj_QUESTMESSAGE_WARNING, `Quest ${this.name} already started, you can no longer cheat to skip the quest.`);
      return;
    }
    this.forceCompleteDependencies();
    UnitInteraction.removeAllQuestTalks(this.questGiver);
    this.onForceComplete();
    this.completed = true;
  }

  forceCompleteDependencies() {
    this.dependencies.forEach((q) => {
      q.forceComplete();
    });
  }
}
