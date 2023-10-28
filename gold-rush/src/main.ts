import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import { ChainLightningAttack } from 'abilities/chain_lightning/chain_lightning_attack';
import { ThunderBlink } from 'abilities/thunder_blink/thunder_blink';
import { tieUnitToUnitDaemon } from 'lib/unit';
import { Group, Unit } from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';
import { customHauntedGoldMine } from 'world/custom_gold_mine';

function tsMain() {
  Cheat('warpten');
  // Cheat('greedisgood 100000');

  configurePlayerColor();
  customHauntedGoldMine();
  tieUnitToUnitDaemon();
  ChainLightning.register(FourCC('A003:AOcl'));
  ChainLightningAttack.register(gg_unit_H002_0255, FourCC('A003:AOcl'));
  ThunderBlink.register(FourCC('A00B:AEbl'));
}

function configurePlayerColor() {
  for (let i = 0; i < 24; i++) {
    const player = Player(i);
    if (i !== 0) {
      SetPlayerState(player, PLAYER_STATE_RESOURCE_GOLD, 100000000);
      SetPlayerState(player, PLAYER_STATE_RESOURCE_LUMBER, 100000000);
      SetPlayerState(player, PLAYER_STATE_RESOURCE_FOOD_CAP, 300);
    }
    switch (GetPlayerRace(player)) {
      case RACE_HUMAN:
        SetPlayerColor(player, PLAYER_COLOR_LIGHT_BLUE);
        SetPlayerName(player, 'Human Alliances');
        break;
      case RACE_ORC:
        SetPlayerColor(player, PLAYER_COLOR_RED);
        SetPlayerName(player, 'Orcish Horde');
        break;
      case RACE_NIGHTELF:
        SetPlayerColor(player, PLAYER_COLOR_CYAN);
        SetPlayerName(player, 'Night Elf Sentinels');
        break;
      case RACE_UNDEAD:
        SetPlayerColor(player, PLAYER_COLOR_GREEN);
        SetPlayerName(player, 'Undead Scourge');
        break;
      default:
    }
    const playerColor = GetPlayerColor(player);
    const allUnitsOfPlayer = GetUnitsInRectOfPlayer(GetPlayableMapRect(), player);
    Group.fromHandle(allUnitsOfPlayer).for(() => {
      const u = Unit.fromEnum();
      u.color = playerColor;
    });
    DestroyGroup(allUnitsOfPlayer);
  }
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
