import { logDiscrepancy } from 'lib/debug/key_counter';
import { temp } from 'lib/location';
import { log } from 'lib/log';
import { getUnitsInRect, isBuilding } from 'lib/unit';
import {
  Group, Unit,
} from 'w3ts';

import { createCommandHelpQuests, onChatCommand } from './chat_commands.model';

export function registerChatCommands() {
  onChatCommand('-clear', true, () => {
    ClearTextMessages();
  }, 'UI', 'Clear all messages.');

  onChatCommand('-k', true, () => {
    ClearTextMessages();
    logDiscrepancy();
  }, 'Debug', 'Show start/end effect discrepancy, for debugging memory leak.');

  onChatCommand('-wtf', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer()))).for(() => {
      Unit.fromEnum().resetCooldown();
      Unit.fromEnum().mana = Unit.fromEnum().maxMana;
    });
  }, 'GameControl', 'Refresh cooldown of selected unit.');

  onChatCommand('-kill', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => Unit.fromEnum().kill());
  }, 'GameControl', 'Kill all selected units.');

  onChatCommand('-killall', true, () => {
    let count = 0;
    getUnitsInRect(GetWorldBounds(), (u) => !isBuilding(u)
      && u.isAlive()
      && !u.isUnitType(UNIT_TYPE_PEON))
      .forEach((u) => {
        u.kill();
        count++;
      });
    log('Killed units', count);
  }, 'GameControl', 'Kill all fighter units on map.');

  onChatCommand('-lvlup $1', false, (msg) => {
    const extraLvl = parseInt(msg.split(' ')[1] ?? '1', 10);
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => {
        if (Unit.fromEnum().isHero()) {
          Unit.fromEnum().setHeroLevel(Unit.fromEnum().level + extraLvl, true);
        }
      });
  }, 'GameControl', 'Level up selected units.');

  onChatCommand('-tp', true, () => {
    const x = GetCameraEyePositionX();
    const y = GetCameraEyePositionY() + 800;

    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => {
        if (Unit.fromEnum().isHero()) {
          Unit.fromEnum().x = x;
          Unit.fromEnum().y = y;
        }
      });
  }, 'GameControl', 'Teleport all selected units to center of camera.');

  createCommandHelpQuests();
}
