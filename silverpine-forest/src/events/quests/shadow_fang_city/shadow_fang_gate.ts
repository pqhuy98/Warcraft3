import { getDestructablesInRect } from 'lib/destructable';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import { UNIT_Knight, UNIT_MortarTeam } from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { removeAttention, UnitInteraction } from 'lib/systems/unit_interaction';
import { pickRandom } from 'lib/utils';
import { sleep, Unit } from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base';

let unitSounds: Record<number, sound[]>;

export class ShadowFangGate extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    gateKeepers: Unit[]
  }) {
    super(globals);
    unitSounds = {
      [UNIT_Knight.id]: [
        createDialogSound(
          'QuestSounds\\shadow-fang-gate\\shadow-fang-gate-knight-1.mp3',
          'Knight',
          'Guards, open the gate!',
        ),
        createDialogSound(
          'QuestSounds\\shadow-fang-gate\\shadow-fang-gate-knight-2.mp3',
          'Knight',
          'Open the gate now!',
        ),
        createDialogSound(
          'QuestSounds\\shadow-fang-gate\\shadow-fang-gate-knight-3.mp3',
          'Knight',
          'Get that gate open!',
        ),
      ],
      [UNIT_MortarTeam.id]: [
        createDialogSound(
          'QuestSounds\\shadow-fang-gate\\shadow-fang-gate-mortar-1.mp3',
          'Mortar team',
          'Open the gate for our visitor!',
        ),
        createDialogSound(
          'QuestSounds\\shadow-fang-gate\\shadow-fang-gate-mortar-2.mp3',
          'Mortar team',
          'Let our friend through!',
        ),
        createDialogSound(
          'QuestSounds\\shadow-fang-gate\\shadow-fang-gate-mortar-3.mp3',
          'Mortar team',
          'Unlock the gate for our comrade!',
        ),
      ],
    };
  }

  async register(): Promise<void> {
    await this.waitDependenciesDone();
    const { gateKeepers } = this.globals;

    for (;;) {
      const { target } = await Promise.race(
        gateKeepers.map((u) => UnitInteraction.waitUntilQuestTalk(u, 'new')),
      );

      if (target.typeId === UNIT_Knight.id) {
        const sounds = unitSounds[target.typeId];
        if (sounds) {
          await playSpeech(target, pickRandom(sounds));
        }
      }
      await sleep(0.5);
      this.openGate(true);
      gateKeepers.forEach((u) => {
        UnitInteraction.removeAllQuestTalks(u);
        removeAttention(u);
      });

      await sleep(GetRandomReal(10, 20));
      this.openGate(false);
      await sleep(1);
    }
  }

  openGate(mustOpen: boolean): void {
    const shadowfangGateBlockers = getDestructablesInRect(gg_rct_Shadowfang_gate_sight_blocker);
    if (mustOpen) {
      ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_LTg3_4633);
      shadowfangGateBlockers.forEach((d) => d.kill());
    } else {
      ModifyGateBJ(bj_GATEOPERATION_CLOSE, gg_dest_LTg3_4633);
      shadowfangGateBlockers.forEach((d) => d.heal(d.maxLife, false));
    }
  }

  onForceComplete(): void {
  }
}
