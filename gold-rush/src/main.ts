/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BladeDance from 'abilities/blade_dance/blade_dance';
import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import { MulticastNoTarget } from 'abilities/multicast/no-target';
import { MulticastPoint } from 'abilities/multicast/point';
import { MulticastUnit } from 'abilities/multicast/unit';
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
  globalUnits,
  registerUnits,
} from 'lib/constants';
import { DamageObserver } from 'lib/data_structures/damage_observer';
import { daemonTempLocationCleanUp } from 'lib/location';
import { isComputer } from 'lib/player';
import {
  ABILITY_ArchMageBlizzard, ABILITY_ArchMageWaterElemental, ABILITY_BladeMasterBladestorm,
  ABILITY_BloodMageFlameStrike,
  ABILITY_BloodMagePhoenix,
  ABILITY_BloodMageSiphonMana,
  ABILITY_ChieftainShockWave,
  ABILITY_ChieftainWarStomp,
  ABILITY_DeathKnightDeathCoil, ABILITY_FarseerChainLightning, ABILITY_FarseerEarthquake, ABILITY_FarseerSpiritWolf, ABILITY_LichFrostNova,
  ABILITY_MountainKingThunderBolt,
  ABILITY_MountainKingThunderClap,
  ABILITY_PaladinHolyLight,
  ABILITY_ShadowHunterHealingWave,
  ABILITY_ShadowHunterHex,
} from 'lib/resources/war3-abilities';
import { getTimeS, setIntervalIndefinite, trackElapsedGameTime } from 'lib/trigger';
import { daemonDamageSourceMaster, daemonTieUnitToUnit, growUnit } from 'lib/unit';
import { Group, MapPlayer, Unit } from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

const colorPreservedUnits: unit[] = [];

function tsMain() {
  registerUnits();
  colorPreservedUnits.push(
    globalUnits.fountainLight,
    globalUnits.fountainDark,
    globalUnits.heroZeus,
    globalUnits.heroThrall,
    globalUnits.heroSamuro,
    globalUnits.heroJaina,
    globalUnits.heroLichKing,
    globalUnits.heroScortah,
  );

  trackElapsedGameTime();
  configurePlayerColor();
  registerAi();

  ThunderBlink.register(ABILITY_ID_THUNDER_BLINK);
  ChainLightning.register(ABILITY_ID_CHAIN_LIGHTNING);
  BladeDance.register(ABILITY_ID_BLADE_DANCE);
  BladeDance.register(ABILITY_ID_DIVINE_FURY);
  Sandquake.register(ABILITY_ID_SANDQUAKE);
  WrathOfTheLichKing.register(ABILITY_ID_WRATH_OF_THE_LICH_KING);

  // Multicasts
  MulticastUnit.register(FourCC(ABILITY_DeathKnightDeathCoil.code), globalUnits.heroLichKing);
  MulticastUnit.register(FourCC(ABILITY_LichFrostNova.code), globalUnits.heroLichKing);

  MulticastUnit.register(FourCC(ABILITY_PaladinHolyLight.code));
  MulticastUnit.register(FourCC(ABILITY_MountainKingThunderBolt.code));
  MulticastNoTarget.register(FourCC(ABILITY_MountainKingThunderClap.code));
  MulticastPoint.register(FourCC(ABILITY_ArchMageBlizzard.code));
  MulticastNoTarget.register(FourCC(ABILITY_ArchMageWaterElemental.code));
  MulticastPoint.register(FourCC(ABILITY_BloodMageFlameStrike.code));
  MulticastUnit.register(FourCC(ABILITY_BloodMageSiphonMana.code));
  MulticastNoTarget.register(FourCC(ABILITY_BloodMagePhoenix.code));

  MulticastNoTarget.register(FourCC(ABILITY_ChieftainWarStomp.code));
  MulticastUnit.register(FourCC(ABILITY_ChieftainShockWave.code));
  MulticastPoint.register(FourCC(ABILITY_ChieftainShockWave.code));
  MulticastUnit.register(FourCC(ABILITY_ShadowHunterHex.code));
  MulticastUnit.register(FourCC(ABILITY_ShadowHunterHealingWave.code));
  MulticastUnit.register(FourCC(ABILITY_FarseerChainLightning.code));
  MulticastNoTarget.register(FourCC(ABILITY_FarseerSpiritWolf.code));
  MulticastPoint.register(FourCC(ABILITY_FarseerEarthquake.code));
  MulticastNoTarget.register(FourCC(ABILITY_BladeMasterBladestorm.code));

  // Miscs
  // new CreepSpawn(Unit.fromHandle(heroZeus));
  new PeriodBuff(Unit.fromHandle(globalUnits.heroZeus));

  DamageObserver.register();
  Weather.changeWeather();

  removeStartingUnit(Player(0));
  removeStartingUnit(Player(5));
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
    if (IsPlayerSlotState(player, PLAYER_SLOT_STATE_EMPTY)) {
      continue;
    }
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

    Group.fromHandle(allUnitsOfPlayer).for(() => {
      const u = Unit.fromEnum();
      if (!colorPreservedUnits.includes(u.handle)) {
        u.color = playerColor;
      }
    });
    DestroyGroup(allUnitsOfPlayer);

    if (player === GetOwningPlayer(globalUnits.heroLichKing) && isComputer(player)) {
      StartCampaignAI(player, 'war3mapImported\\undead-heroes.ai');
    }

    // Undead strong
    if (IsPlayerEnemy(player, GetOwningPlayer(globalUnits.heroZeus))) {
      let handicap = 1;
      const maxHpHandicap = 2;
      const maxDamageHandicap = 3;
      SetPlayerHandicap(player, handicap);
      let oldScale: number;
      setIntervalIndefinite(3, () => {
        handicap = Math.min(handicap * 1.01, Math.max(maxHpHandicap, maxDamageHandicap));
        SetPlayerHandicap(player, Math.min(handicap, maxHpHandicap));
        SetPlayerHandicapDamage(player, Math.min(Math.max(1, handicap), maxDamageHandicap));
        if (globalUnits.heroLichKing && player === GetOwningPlayer(globalUnits.heroLichKing)) {
          const boss = Unit.fromHandle(globalUnits.heroLichKing);
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
  ZeusAi.register(GetOwningPlayer(globalUnits.heroZeus), GetUnitTypeId(globalUnits.heroZeus));

  // Undead bosses
  LichKingAi.register(GetOwningPlayer(globalUnits.heroLichKing), GetUnitTypeId(globalUnits.heroLichKing));
  DarkForceAi.register(GetOwningPlayer(globalUnits.heroScortah), GetUnitTypeId(globalUnits.heroScortah));

  // Orc bosses
  LightForceAi.register(GetOwningPlayer(globalUnits.heroThrall), GetUnitTypeId(globalUnits.heroThrall));
  LightForceAi.register(GetOwningPlayer(globalUnits.heroSamuro), GetUnitTypeId(globalUnits.heroSamuro));

  // Human bosses
  LightForceAi.register(GetOwningPlayer(globalUnits.heroJaina), GetUnitTypeId(globalUnits.heroJaina));
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
