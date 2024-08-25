import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { removeMinimapIcon, setMinimapIconUnit } from 'lib/quests/utils';
import { disableInteractSound, enableInteractSound, UnitInteraction } from 'lib/systems/unit_interaction';
import { waitUntil } from 'lib/utils';
import { Unit } from 'w3ts';

export interface BaseQuestProps {
  name: string
  dependencies: BaseQuest[]
  cheatName: string
}

export class BaseQuest {
  private status: 'open' | 'in_progress' | 'completed' | 'failed' = 'open';

  name = 'base_quest';

  dependencies: BaseQuest[] = [];

  questGiver: Unit;

  constructor({ dependencies, cheatName, name }: BaseQuestProps) {
    this.dependencies = dependencies;
    this.name = name;
    if (cheatName.length > 0) {
      onChatCommand(`-to ${cheatName}`, true, () => this.forceCompleteDependencies());
      onChatCommand(`-done ${cheatName}`, true, () => this.forceComplete());
    }
  }

  async talkToQuestGiver(unit: Unit) {
    this.questGiver = unit;
    disableInteractSound(unit);
    setMinimapIconUnit(unit, 'questGiver');
    const { unit: traveler } = await UnitInteraction.waitUntilQuestTalk(unit);
    if (this.status === 'open') {
      this.status = 'in_progress';
    }
    enableInteractSound(unit);
    removeMinimapIcon(unit);
    return traveler;
  }

  async waitForTurnIn(unit: Unit) {
    this.questGiver = unit;
    disableInteractSound(unit);
    setMinimapIconUnit(unit, 'turnIn');
    const { unit: traveler } = await UnitInteraction.waitUntilQuestTalk(unit);
    if (this.status === 'open') {
      this.status = 'in_progress';
    }
    enableInteractSound(unit);
    removeMinimapIcon(unit);
    return traveler;
  }

  async waitDependenciesDone() {
    await waitUntil(2, () => this.dependencies.every((q) => q.isCompleted()));
  }

  complete() {
    this.status = 'completed';
  }

  fail() {
    this.status = 'failed';
  }

  isInProgress() {
    return this.status === 'in_progress';
  }

  isCompleted() {
    return this.status === 'completed';
  }

  isFailed() {
    return this.status === 'failed';
  }

  cheatCodeInstantStart(cheatCode: string) {
    onChatCommand(cheatCode, true, () => this.forceCompleteDependencies());
  }

  onForceComplete() {

  }

  forceComplete(): boolean {
    if (this.isCompleted()) return true;
    if (this.isInProgress()) {
      QuestMessageBJ(bj_FORCE_ALL_PLAYERS, bj_QUESTMESSAGE_WARNING, `Quest ${this.name} is already in progress, you can no longer cheat to skip the quest.`);
      return false;
    }
    if (!this.forceCompleteDependencies()) {
      QuestMessageBJ(bj_FORCE_ALL_PLAYERS, bj_QUESTMESSAGE_WARNING, `Quest ${this.name} cannot cheat to skip because of a dependency.`);
      return false;
    }
    if (this.questGiver) {
      removeMinimapIcon(this.questGiver);
      UnitInteraction.removeAllQuestTalks(this.questGiver);
    }
    this.onForceComplete();
    this.complete();
    return this.isCompleted();
  }

  forceCompleteDependencies() {
    let allCompleted = true;
    this.dependencies.forEach((q) => {
      const dependencyCompleted = q.forceComplete();
      allCompleted = allCompleted || dependencyCompleted;
    });
    return allCompleted;
  }
}
