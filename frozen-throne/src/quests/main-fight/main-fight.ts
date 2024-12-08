import { Weather } from 'events/weather/weather';
import { playerMain } from 'lib/constants';
import { log } from 'lib/log';
import { getDialogues } from 'lib/quests/dialogue_sound';
import {
  cinematicFadeIn, cinematicFadeOut, cinematicMode, setMinimapIconUnit,
} from 'lib/quests/utils';
import { ABILITY_Bearform, ABILITY_RavenFormDruid, ABILITY_StoneForm } from 'lib/resources/war3-abilities';
import { playSpeech } from 'lib/sound';
import { buildTrigger } from 'lib/trigger';
import { getUnitsInRect } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import { IntroCinematic } from 'quests/intro-cinematic/intro-cinematic';
import { Camera, sleep, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';
import { ArmyManager } from './army_manager';

const dialogues = getDialogues(
  {
    questName: 'main-fight',
    dialogues: [
      {
        speaker: 'Highlord Tirion Fordring',
        text: 'Champion, attack! The Lich King must fall.',
        fileName: '0-tirion.mp3',
      },
    ],
  },
);

export class MainFight extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    lichKing: Unit
    tirion: Unit
  }) {
    super(globals);
    void this.register();
  }

  private async register(): Promise<void> {
    const { lichKing } = this.globals;

    // Preserve preplaced units to restore later
    const armyManager = new ArmyManager();
    getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(playerMain) && u.isAlive())
      .forEach((u) => {
        armyManager.saveUnit(u, () => {
          u.addAnimationProps('ready', true);
          u.acquireRange = 500;
          u.removeAbility(ABILITY_Bearform.id);
          u.removeAbility(ABILITY_RavenFormDruid.id);
          u.removeAbility(ABILITY_StoneForm.id);
        });
      });

    await this.waitDependenciesDone();

    ClearMapMusic();
    PlayMusicBJ(gg_snd_Invincible);
    SetMusicVolumeBJ(100);

    // Loop for inifinite fight attempts
    for (;;) {
      // Initial UI setup
      await sleep(2);
      cinematicFadeIn(3);
      cinematicMode(false, 1);
      Camera.reset(0);
      Camera.panTimed(lichKing.x, lichKing.y, 0, undefined);
      Weather.changeWeather();
      setMinimapIconUnit(lichKing, 'boss');

      // Wait till fight begins
      const crusaders = getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(playerMain) && u.isAlive());
      await this.waitForAttack(crusaders);

      // Wait till lich king dies
      await waitUntil(3, () => !lichKing.isAlive());

      // Restore to initial state
      cinematicFadeOut(2);
      await sleep(2);
      lichKing.revive(lichKing.x, lichKing.y, false);
      IntroCinematic.lichKingSit(lichKing);

      // clean up
      getUnitsInRect(GetWorldBounds(), (u) => !u.isHero() || u.isIllusion()).forEach((u) => {
        u.destroy();
      });

      armyManager.restoreAll();
    }
  }

  private async waitForAttack(crusaders: Unit[]): Promise<void> {
    const { lichKing, tirion } = this.globals;

    let attackStarted = false;

    const attack = (): void => {
      crusaders.forEach((c) => {
        c.acquireRange = 10000;
        c.issueTargetOrder(OrderId.Attack, lichKing);
      });
      attackStarted = true;
      void playSpeech(tirion, dialogues[0], null);
    };

    buildTrigger((t) => {
      crusaders.forEach((u) => {
        t.registerUnitEvent(u, EVENT_UNIT_ACQUIRED_TARGET);
        t.registerUnitEvent(u, EVENT_UNIT_ATTACKED);
        t.registerUnitEvent(u, EVENT_UNIT_DAMAGING);
      });
      t.addAction(() => {
        if (GetEventTargetUnit()) {
          log('event unit', Unit.fromEvent().name, 'GetEventTargetUnit', Unit.fromHandle(GetEventTargetUnit()).name);
        }
        if (GetEventDamageSource()) {
          log('event unit', Unit.fromEvent().name, 'GetEventDamageSource', Unit.fromHandle(GetEventDamageSource()).name);
        }
        if (GetAttacker()) {
          log('event unit', Unit.fromEvent().name, 'GetAttacker', Unit.fromHandle(GetAttacker()).name);
        }

        t.destroy();
        attack();
      });
    });

    await waitUntil(1, () => attackStarted);
  }
}
