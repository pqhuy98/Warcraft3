import { logDiscrepancy } from 'lib/debug/key_counter';
import { temp } from 'lib/location';
import { log } from 'lib/log';
import { systemConfig } from 'lib/systems/system-config';
import { getHelpMessage, onChatCommand, setTimeout } from 'lib/trigger';
import { isBuilding } from 'lib/unit';
import { Group, Quest, Unit } from 'w3ts';

export function registerChatCommands() {
  onChatCommand('-clear', true, () => {
    ClearTextMessages();
  }, 'Clear all messages.');

  onChatCommand('-k', true, () => {
    ClearTextMessages();
    logDiscrepancy();
  }, 'Show start/end effect discrepancy, for debugging memory leak.');

  onChatCommand('-wtf', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer()))).for(() => {
      Unit.fromEnum().resetCooldown();
    });
  }, 'Refresh cooldown of selected unit.');

  onChatCommand('-autoplay 1', true, () => { systemConfig.autoPlay = false; }, 'Auto-play AI heroes even when they are selected.');
  onChatCommand('-autoplay 0', true, () => { systemConfig.autoPlay = true; }, 'Does not auto-play AI heroes when they are selected.');
  onChatCommand('-kill', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => Unit.fromEnum().kill());
  }, 'Kill all selected units.');

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
  }, 'Kill all fighter units on map.');

  onChatCommand('-lvlup', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => {
        if (Unit.fromEnum().isHero()) {
          Unit.fromEnum().setHeroLevel(Unit.fromEnum().level + 1, true);
        }
      });
  }, 'Level up selected units.');

  setTimeout(0.1, () => {
    const helpQuest = Quest.create();
    helpQuest.setTitle('Chat commands');
    helpQuest.setIcon('ReplaceableTextures\\CommandButtons\\BTNSelectHeroOn.blp');
    helpQuest.setDescription(
      [
        'All usable chat commands in the map:',
        ...getHelpMessage(),
      ].join('|n|n'),
    );
    helpQuest.discovered = true;
    helpQuest.enabled = true;
    helpQuest.required = false;
  });
}
