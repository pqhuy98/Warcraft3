import { logDiscrepancy } from 'lib/debug/key_counter';
import { temp } from 'lib/location';
import { log } from 'lib/log';
import { systemConfig } from 'lib/systems/system-config';
import { isBuilding } from 'lib/unit';
import {
  Group, Unit,
} from 'w3ts';

import { createCommandHelpQuests, onChatCommand } from './chat_commands.model';

export function registerChatCommands() {
  onChatCommand('-clear', true, () => {
    ClearTextMessages();
  }, 'UI & scaling', 'Clear all messages.');

  onChatCommand('-k', true, () => {
    ClearTextMessages();
    logDiscrepancy();
  }, 'Debug', 'Show start/end effect discrepancy, for debugging memory leak.');

  onChatCommand('-wtf', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer()))).for(() => {
      Unit.fromEnum().resetCooldown();
    });
  }, 'GameControl', 'Refresh cooldown of selected unit.');

  onChatCommand('-autoplay 1', true, () => { systemConfig.autoPlay = false; }, 'GameControl', 'Auto-play AI heroes even when they are selected.');
  onChatCommand('-autoplay 0', true, () => { systemConfig.autoPlay = true; }, 'GameControl', 'Does not auto-play AI heroes when they are selected.');
  onChatCommand('-kill', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => Unit.fromEnum().kill());
  }, 'GameControl', 'Kill all selected units.');

  onChatCommand('-killall', true, () => {
    let count = 0;
    temp(Group.fromHandle(GetUnitsInRectMatching(GetWorldBounds(), Condition(() => !isBuilding(Unit.fromFilter())
    && Unit.fromFilter().isAlive()
    && !Unit.fromFilter().isUnitType(UNIT_TYPE_PEON)))))
      .for(() => {
        Unit.fromEnum().kill();
        count++;
      });
    log('Killed units', count);
  }, 'GameControl', 'Kill all fighter units on map.');

  onChatCommand('-lvlup', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => {
        if (Unit.fromEnum().isHero()) {
          Unit.fromEnum().setHeroLevel(Unit.fromEnum().level + 1, true);
        }
      });
  }, 'GameControl', 'Level up selected units.');

  createCommandHelpQuests();
}
