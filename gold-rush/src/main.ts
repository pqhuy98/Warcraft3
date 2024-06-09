import BladeDance from 'abilities/blade_dance/blade_dance';
import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import { ThunderBlink } from 'abilities/thunder_blink/thunder_blink';
import { ZeusAi } from 'ai/zeus/zeus-ai';
import { PeriodBuff } from 'events/period_buff/period_buff';
import { Weather } from 'events/weather/weather';
import { ABILITY_ID_BLADE_DANCE, ABILITY_ID_CHAIN_LIGHTNING, ABILITY_ID_THUNDER_BLINK } from 'lib/constants';
import { isComputer } from 'lib/player';
import { setIntervalIndefinite } from 'lib/trigger';
import { daemonDamageSourceMaster, daemonTieUnitToUnit } from 'lib/unit';
import { Group, Unit } from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

function tsMain() {
  configurePlayerColor();

  ThunderBlink.register(ABILITY_ID_THUNDER_BLINK);
  ChainLightning.register(ABILITY_ID_CHAIN_LIGHTNING);
  BladeDance.register(ABILITY_ID_BLADE_DANCE);

  // new CreepSpawn(Unit.fromHandle(gg_unit_H002_0191));
  new PeriodBuff(Unit.fromHandle(gg_unit_H002_0191));

  Weather.register();

  removeStartingUnit(GetOwningPlayer(gg_unit_H002_0191));

  daemonTieUnitToUnit();
  daemonDamageSourceMaster();
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

    if (player === GetOwningPlayer(gg_unit_H002_0191) && isComputer(player)) {
      // log('Start Zeus AI for', player);
      SetPlayerHandicapXP(player, 2);
      ZeusAi.register(player, GetUnitTypeId(gg_unit_H002_0191));
    }

    if (IsPlayerEnemy(player, GetOwningPlayer(gg_unit_H002_0191))) {
      let handicap = 0.5;
      SetPlayerHandicapXP(player, 2);
      SetPlayerHandicap(player, handicap);
      setIntervalIndefinite(3, () => {
        handicap = Math.min(handicap * 1.01, 100);
        SetPlayerHandicap(player, Math.min(handicap, 3));
        SetPlayerHandicapDamage(player, Math.min(Math.max(1, handicap), 3));
      });
    }
  }
  MeleeStartingAI();
}

function removeStartingUnit(player: player) {
  ['hpea', 'opeo', 'uaco', 'ewsp'].forEach((workerTypeId) => {
    const workers = GetUnitsOfPlayerAndTypeId(player, FourCC(workerTypeId));
    Group.fromHandle(workers).for(() => {
      RemoveUnit(GetEnumUnit());
    });
    DestroyGroup(workers);
  });

  ['htow', 'ogre', 'unpl', 'etol'].forEach((townTypeId) => {
    const townHalls = GetUnitsOfPlayerAndTypeId(player, FourCC(townTypeId));
    Group.fromHandle(townHalls).for(() => {
      ShowUnitHide(GetEnumUnit());
    });
    DestroyGroup(townHalls);
  });
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
