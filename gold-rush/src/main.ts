import BladeDance from 'abilities/blade_dance/blade_dance';
import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import Sandquake from 'abilities/sandquake/sandquake';
import { ThunderBlink } from 'abilities/thunder_blink/thunder_blink';
import { DarkForceAi } from 'ai/dark_force_ai';
import { LightForceAi } from 'ai/light_force_ai';
import { ZeusAi } from 'ai/zeus/zeus-ai';
import { PeriodBuff } from 'events/period_buff/period_buff';
import { Weather } from 'events/weather/weather';
import {
  ABILITY_ID_BLADE_DANCE, ABILITY_ID_CHAIN_LIGHTNING, ABILITY_ID_DIVINE_FURY, ABILITY_ID_SANDQUAKE, ABILITY_ID_THUNDER_BLINK,
} from 'lib/constants';
import { setIntervalIndefinite, trackElapsedGameTime } from 'lib/trigger';
import { daemonDamageSourceMaster, daemonTieUnitToUnit, growUnit } from 'lib/unit';
import { Group, Unit } from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

function tsMain() {
  trackElapsedGameTime();
  configurePlayerColor();
  registerAi();

  ThunderBlink.register(ABILITY_ID_THUNDER_BLINK);
  ChainLightning.register(ABILITY_ID_CHAIN_LIGHTNING);
  BladeDance.register(ABILITY_ID_BLADE_DANCE);
  BladeDance.register(ABILITY_ID_DIVINE_FURY);
  Sandquake.register(ABILITY_ID_SANDQUAKE);

  // new CreepSpawn(Unit.fromHandle(gg_unit_H002_0191));
  new PeriodBuff(Unit.fromHandle(gg_unit_H002_0191));

  Weather.register();

  removeStartingUnit(Player(0));

  daemonTieUnitToUnit();
  daemonDamageSourceMaster();
}

const colorPreservedUnits = [
  gg_unit_H001_0320,
  gg_unit_Othr_0324,
  gg_unit_Osam_0326,
  gg_unit_Hjai_0327,
  gg_unit_nfoh_0003,
  gg_unit_H001_0320,
  gg_unit_U000_0322,
];

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
      if (!colorPreservedUnits.includes(u.handle)) {
        u.color = playerColor;
      }
    });
    DestroyGroup(allUnitsOfPlayer);

    if (IsPlayerEnemy(player, GetOwningPlayer(gg_unit_H002_0191))) {
      let handicap = 0.8;
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
          boss.setField(UNIT_RF_SELECTION_SCALE, 1 + Math.sqrt(boss.owner.handicap));
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
  DarkForceAi.register(GetOwningPlayer(gg_unit_H001_0320), GetUnitTypeId(gg_unit_H001_0320));
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

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
