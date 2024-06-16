/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BladeDance from 'abilities/blade_dance/blade_dance';
import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import Sandquake from 'abilities/sandquake/sandquake';
import { ThunderBlink } from 'abilities/thunder_blink/thunder_blink';
import WrathOfTheLichKing from 'abilities/wrath_of_the_lich_king/wrath_of_the_lich_king';
import { LichKingAi } from 'ai/custom/lich-king-ai';
import { ZeusAi } from 'ai/custom/zeus-ai';
import { DarkForceAi } from 'ai/dark_force_ai';
import { LightForceAi } from 'ai/light_force_ai';
import { PeriodBuff } from 'events/period_buff/period_buff';
import { Weather } from 'events/weather/weather';
import {
  ABILITY_ID_BLADE_DANCE,
  ABILITY_ID_CHAIN_LIGHTNING,
  ABILITY_ID_DIVINE_FURY,
  ABILITY_ID_SANDQUAKE,
  ABILITY_ID_THUNDER_BLINK,
  ABILITY_ID_WRATH_OF_THE_LICH_KING,
} from 'lib/constants';
import { DamageObserver } from 'lib/data_structures/damage_observer';
import { daemonTempLocationCleanUp } from 'lib/location';
import { getTimeS, setIntervalIndefinite, trackElapsedGameTime } from 'lib/trigger';
import { daemonDamageSourceMaster, daemonTieUnitToUnit, growUnit } from 'lib/unit';
import { Group, MapPlayer, Unit } from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

function tsMain() {
  trackElapsedGameTime();
  configurePlayerColor();
  registerAi();

  ThunderBlink.register(ABILITY_ID_THUNDER_BLINK);
  ChainLightning.register(ABILITY_ID_CHAIN_LIGHTNING);
  BladeDance.register(ABILITY_ID_BLADE_DANCE);
  BladeDance.register(ABILITY_ID_DIVINE_FURY);
  // Sandquake.register(ABILITY_ID_SANDQUAKE);
  // WrathOfTheLichKing.register(ABILITY_ID_WRATH_OF_THE_LICH_KING);

  // new CreepSpawn(Unit.fromHandle(gg_unit_H002_0191));
  new PeriodBuff(Unit.fromHandle(gg_unit_H002_0191));

  DamageObserver.register();
  Weather.changeWeather();

  removeStartingUnit(Player(0));
  upgradeTownHallAllPlayers();

  daemonTieUnitToUnit();
  daemonDamageSourceMaster();
  daemonTempLocationCleanUp();

  setIntervalIndefinite(1, () => {
    MapPlayer.fromLocal().setState(PLAYER_STATE_RESOURCE_LUMBER, getTimeS());
  });
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
        SetPlayerColorBJ(player, PLAYER_COLOR_LIGHT_BLUE, false);
        SetPlayerName(player, 'Human Alliances');
        break;
      case RACE_ORC:
        SetPlayerColorBJ(player, PLAYER_COLOR_RED, false);
        SetPlayerName(player, 'Orcish Horde');
        break;
      case RACE_NIGHTELF:
        SetPlayerColorBJ(player, PLAYER_COLOR_CYAN, false);
        SetPlayerName(player, 'Night Elf Sentinels');
        break;
      case RACE_UNDEAD:
        SetPlayerColorBJ(player, PLAYER_COLOR_GREEN, false);
        SetPlayerName(player, 'Undead Scourge');
        break;
      default:
    }
    const playerColor = GetPlayerColor(player);
    const allUnitsOfPlayer = GetUnitsInRectOfPlayer(GetPlayableMapRect(), player);

    const colorPreservedUnits = [
      gg_unit_H001_0320,
      gg_unit_Othr_0324,
      gg_unit_Osam_0326,
      gg_unit_Hjai_0327,
      gg_unit_nfoh_0003,
      gg_unit_H001_0320,
      gg_unit_U000_0322,
    ];

    Group.fromHandle(allUnitsOfPlayer).for(() => {
      const u = Unit.fromEnum();
      if (!colorPreservedUnits.includes(u.handle)) {
        u.color = playerColor;
      }
    });
    DestroyGroup(allUnitsOfPlayer);

    if (IsPlayerEnemy(player, GetOwningPlayer(gg_unit_H002_0191))) {
      let handicap = 2;
      SetPlayerHandicap(player, handicap);
      let oldScale: number;
      setIntervalIndefinite(3, () => {
        handicap = Math.min(handicap * 1.01, 100);
        SetPlayerHandicap(player, Math.min(handicap, 3));
        SetPlayerHandicapDamage(player, Math.min(Math.max(1, handicap), 3));
        if (gg_unit_H001_0320) {
          const boss = Unit.fromHandle(gg_unit_H001_0320);
          const newScale = Math.max(1.4, Math.sqrt(boss.owner.handicap));
          growUnit(boss, newScale, 2, oldScale);
          oldScale = newScale;
          boss.selectionScale = 1.6 + Math.sqrt(boss.owner.handicap);
        }
      });
    }
  }
  MeleeStartingAI();
}

function registerAi() {
  // Zeus
  ZeusAi.register(GetOwningPlayer(gg_unit_H002_0191), GetUnitTypeId(gg_unit_H002_0191));

  // Undead bosses
  LichKingAi.register(GetOwningPlayer(gg_unit_H001_0320), GetUnitTypeId(gg_unit_H001_0320));
  DarkForceAi.register(GetOwningPlayer(gg_unit_U000_0322), GetUnitTypeId(gg_unit_U000_0322));

  // Orc bosses
  LightForceAi.register(GetOwningPlayer(gg_unit_Othr_0324), GetUnitTypeId(gg_unit_Othr_0324));
  LightForceAi.register(GetOwningPlayer(gg_unit_Osam_0326), GetUnitTypeId(gg_unit_Osam_0326));

  // Human bosses
  LightForceAi.register(GetOwningPlayer(gg_unit_Hjai_0327), GetUnitTypeId(gg_unit_Hjai_0327));
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

function upgradeTownHallAllPlayers() {
  const newUnits: Record<string, string> = {
    htow: 'hcas', ogre: 'ofrt', unpl: 'unp2', etol: 'etoe',
  };

  ['ogre', 'htow', 'unpl', 'etol'].forEach((townTypeId) => {
    const townHalls = GetUnitsOfTypeIdAll(FourCC(townTypeId));
    Group.fromHandle(townHalls).for(() => {
      if (!IsUnitHidden(GetEnumUnit())) {
        ReplaceUnitBJ(GetEnumUnit(), FourCC(newUnits[townTypeId]), bj_UNIT_STATE_METHOD_MAXIMUM);
      }
    });
    DestroyGroup(townHalls);
  });
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
