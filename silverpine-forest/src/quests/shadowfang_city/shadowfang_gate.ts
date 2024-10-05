import { playerShadowfangCity } from 'lib/constants';
import { getDestructablesInRect } from 'lib/destructable';
import { Angle } from 'lib/location';
import { angleDifference } from 'lib/maths/misc';
import { dialogue, getDialogues } from 'lib/quests/dialogue_sound';
import { TalkGroup } from 'lib/quests/talk_group';
import { ORDER_attack } from 'lib/resources/war3-orders';
import { UNIT_Knight, UNIT_MortarTeam } from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { removeAttention, UnitInteraction } from 'lib/systems/unit_interaction';
import { buildTrigger } from 'lib/trigger';
import { getUnitsInRangeOfLoc, isUnitType } from 'lib/unit';
import { pickRandom, waitUntil } from 'lib/utils';
import {
  Destructable, sleep, Trigger, Unit,
} from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base';

const dialogues = getDialogues(
  {
    questName: 'shadowfang-gate',
    dialogues: [
      {
        speaker: 'Knight Aldrich',
        text: 'You want to enter the Shadowfang City? We don’t just let strange wanderers in.',
        fileName: 'shadowfang-gate-0-knight.mp3',
      },
      {
        speaker: 'Knight Aldrich',
        text: 'What’s this? A recommendation letter from the Mayor of Ambermill? You’ve got my attention.',
        fileName: 'shadowfang-gate-1-knight.mp3',
      },
      {
        speaker: 'Knight Aldrich',
        text: "Let's see... 'instrumental in the undead counterattack', 'commendable bravery'... Well, with the Mayor's word, you must be someone special.",
        fileName: 'shadowfang-gate-2-knight.mp3',
      },
      {
        speaker: 'Knight Aldrich',
        text: 'My apologies for the cold welcome. Let me open the gate. Welcome to Shadowfang City!',
        fileName: 'shadowfang-gate-3-knight.mp3',
      },
    ],
  },
);

const unitSounds = {
  [UNIT_Knight.id]: [
    dialogue(
      'QuestSounds\\__refined\\shadowfang-gate\\shadowfang-gate-knight-1.mp3',
      'Knight',
      'Guards, open the gate!',
    ),
    dialogue(
      'QuestSounds\\__refined\\shadowfang-gate\\shadowfang-gate-knight-2.mp3',
      'Knight',
      'Open the gate now!',
    ),
    dialogue(
      'QuestSounds\\__refined\\shadowfang-gate\\shadowfang-gate-knight-3.mp3',
      'Knight',
      'Get that gate open!',
    ),
  ],
  [UNIT_MortarTeam.id]: [
    dialogue(
      'QuestSounds\\__refined\\shadowfang-gate\\shadowfang-gate-mortar-1.mp3',
      'Mortar team',
      'Open the gate for our visitor!',
    ),
    dialogue(
      'QuestSounds\\__refined\\shadowfang-gate\\shadowfang-gate-mortar-2.mp3',
      'Mortar team',
      'Let our friend through!',
    ),
    dialogue(
      'QuestSounds\\__refined\\shadowfang-gate\\shadowfang-gate-mortar-3.mp3',
      'Mortar team',
      'Unlock the gate for our comrade!',
    ),
  ],
};
export class ShadowFangGate extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    gateKeepers: Unit[]
  }) {
    super(globals);
    void this.register();
  }

  static gateDestroyed = false;

  deathTrigger: Trigger;

  private async register(): Promise<void> {
    const { gateKeepers } = this.globals;
    const gate = Destructable.fromHandle(gg_dest_LTg3_4633);
    gate.maxLife = 2000;
    const knight = gateKeepers.find((u) => isUnitType(u, UNIT_Knight) && angleDifference(Angle(gate, u), 0) <= 90);
    knight.name = 'Knight Aldrich';

    // Trigger to track when gate is destroyed.
    ShadowFangGate.gateDestroyed = false;
    this.deathTrigger = buildTrigger((t) => {
      t.registerDeathEvent(gate);
      t.addAction(() => {
        const shadowfangGateBlockers = getDestructablesInRect(gg_rct_Shadowfang_gate_sight_blocker);
        shadowfangGateBlockers.forEach((d) => d.kill());
        ShadowFangGate.gateDestroyed = true;
      });
    });

    // Nearby enemies will try to destroy the gate.
    void waitUntil(1, () => {
      if (ShadowFangGate.gateDestroyed) return true;
      if (gate.life > 0) {
        const nearbyInvaders = getUnitsInRangeOfLoc(500, gate, (u) => u.owner.isPlayerEnemy(playerShadowfangCity) && u.isAlive());
        if (nearbyInvaders.length > 0) {
          getDestructablesInRect(gg_rct_Shadowfang_gate_sight_blocker)
            .forEach((d) => d.kill());
          gate.invulnerable = false;
          nearbyInvaders.forEach((u) => {
            u.issueTargetOrder(ORDER_attack, gate);
          });
        } else {
          gate.invulnerable = true;
        }
      }
      return ShadowFangGate.gateDestroyed;
    });

    await this.waitDependenciesDone();

    const resp = await Promise.race([
      this.talkToQuestGiver(knight, true),
      // eslint-disable-next-line no-loop-func
      waitUntil(1, () => ShadowFangGate.gateDestroyed),
    ]);
    if (!resp || ShadowFangGate.gateDestroyed) {
      gateKeepers.forEach((u) => UnitInteraction.removeAllQuestTalks(u));
      return;
    }

    const traveler = resp;
    const talkGroup = TalkGroup.create(
      traveler,
      knight,
      ...getUnitsInRangeOfLoc(500, knight, (u) => u.owner === knight.owner),
    );
    await talkGroup.speak(knight, dialogues[0], traveler, traveler);
    await talkGroup.speak(knight, dialogues[1], traveler, traveler);
    await talkGroup.speak(knight, dialogues[2], traveler, traveler);
    await talkGroup.speak(knight, dialogues[3], traveler, traveler);
    talkGroup.finish();

    this.openGate(true);
    this.complete();
    await sleep(GetRandomReal(20, 30));
    this.openGate(false);

    void this.talkToGuardsOpenGate();
  }

  async talkToGuardsOpenGate(): Promise<void> {
    const { gateKeepers } = this.globals;

    // Gate keepers will open the gate if interacted with.
    for (;;) {
      if (ShadowFangGate.gateDestroyed) break;
      const resp = await Promise.race([
        ...gateKeepers.map((u) => UnitInteraction.waitUntilQuestTalk(u, 'new')),
        // eslint-disable-next-line no-loop-func
        waitUntil(1, () => ShadowFangGate.gateDestroyed),
      ]);
      if (!resp || ShadowFangGate.gateDestroyed) {
        gateKeepers.forEach((u) => UnitInteraction.removeAllQuestTalks(u));
        return;
      }
      const { target } = resp;

      await sleep(0.5);
      removeAttention(target);
      const sounds = unitSounds[target.typeId];
      if (sounds) {
        await playSpeech(target, pickRandom(sounds));
      }
      await sleep(0.5);
      this.openGate(true);
      gateKeepers.forEach((u) => {
        UnitInteraction.removeAllQuestTalks(u);
        removeAttention(u);
      });

      await sleep(GetRandomReal(20, 30));
      this.openGate(false);
      await sleep(1);
    }
  }

  openGate(mustOpen: boolean): void {
    this.deathTrigger.enabled = false;
    const shadowfangGateBlockers = getDestructablesInRect(gg_rct_Shadowfang_gate_sight_blocker);
    if (mustOpen) {
      ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_LTg3_4633);
      shadowfangGateBlockers.forEach((d) => d.kill());
    } else {
      ModifyGateBJ(bj_GATEOPERATION_CLOSE, gg_dest_LTg3_4633);
      shadowfangGateBlockers.forEach((d) => d.heal(d.maxLife, false));
    }
    this.deathTrigger.enabled = true;
  }

  onForceComplete(): void {
    void this.talkToGuardsOpenGate();
  }
}
