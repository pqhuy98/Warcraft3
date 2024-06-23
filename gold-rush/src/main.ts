/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BladeDance from 'abilities/blade_dance/blade_dance';
import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import Frostmourne from 'abilities/frostmourne/frostmourne';
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
import { LichKingEvents } from 'events/lich_king/lich_king_events';
import { PeriodBuff } from 'events/period_buff/period_buff';
import { useReforgedIcons } from 'events/use_reforged_icons/use_reforged_icons';
import { Weather } from 'events/weather/weather';
import {
  ABILITY_ID_BLADE_DANCE,
  ABILITY_ID_CHAIN_LIGHTNING,
  ABILITY_ID_DEATH_COIL_LICH_KING,
  ABILITY_ID_DIVINE_FURY,
  ABILITY_ID_FROST_NOVA_LICH_KING,
  ABILITY_ID_FROSTMOURNE_ARMOR_REDUCTION,
  ABILITY_ID_SANDQUAKE,
  ABILITY_ID_THUNDER_BLINK,
  ABILITY_ID_WRATH_OF_THE_LICH_KING,
  globalUnits,
  registerUnits,
} from 'lib/constants';
import { DamageObserver } from 'lib/data_structures/damage_observer';
import { daemonTempCleanUp, fromTempLocation, PolarProjection } from 'lib/location';
import { isComputer } from 'lib/player';
import {
  ABILITY_ArchMageBlizzard, ABILITY_ArchMageWaterElemental, ABILITY_BladeMasterBladestorm,
  ABILITY_BloodMageFlameStrike,
  ABILITY_BloodMagePhoenix,
  ABILITY_BloodMageSiphonMana,
  ABILITY_ChieftainShockWave,
  ABILITY_ChieftainWarStomp,
  ABILITY_DeathKnightDeathCoil, ABILITY_FarseerChainLightning, ABILITY_FarseerEarthquake, ABILITY_LichFrostNova,
  ABILITY_MountainKingThunderBolt,
  ABILITY_MountainKingThunderClap,
  ABILITY_PaladinHolyLight,
  ABILITY_ShadowHunterHealingWave,
  ABILITY_ShadowHunterHex,
} from 'lib/resources/war3-abilities';
import { UNIT_Abomination, UNIT_Ghoul } from 'lib/resources/war3-units';
import { registerDialogues } from 'lib/sound';
import {
  getTimeS, setIntervalIndefinite, setTimeout, trackElapsedGameTime,
} from 'lib/trigger';
import { daemonDamageSourceMaster, daemonTieUnitToUnit, growUnit } from 'lib/unit';
import { Group, MapPlayer, Unit } from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

import { UNIT_CryptFiend } from './lib/resources/war3-units';

function tsMain() {
  registerUnits();
  // Player settings
  removeStartingUnit(Player(0));
  removeStartingUnit(Player(5));
  configurePlayerSettings();
  registerDialogues();
  upgradeTownHallAllPlayers();

  registerAi();
  useReforgedIcons();
  trackElapsedGameTime();
  daemonTieUnitToUnit();
  daemonDamageSourceMaster();
  daemonTempCleanUp();

  // Miscs
  // new CreepSpawn(Unit.fromHandle(heroZeus));
  new PeriodBuff(globalUnits.heroZeus);

  DamageObserver.register();
  Weather.changeWeather();
  LichKingEvents.register(globalUnits.heroLichKing);

  setIntervalIndefinite(1, () => {
    MapPlayer.fromLocal().setState(PLAYER_STATE_RESOURCE_LUMBER, getTimeS());
  });

  // Abilities

  ThunderBlink.register(ABILITY_ID_THUNDER_BLINK);
  ChainLightning.register(ABILITY_ID_CHAIN_LIGHTNING);
  BladeDance.register(ABILITY_ID_BLADE_DANCE);
  BladeDance.register(ABILITY_ID_DIVINE_FURY);
  Sandquake.register(ABILITY_ID_SANDQUAKE);
  WrathOfTheLichKing.register(ABILITY_ID_WRATH_OF_THE_LICH_KING);
  Frostmourne.register(ABILITY_ID_FROSTMOURNE_ARMOR_REDUCTION);

  // Multicasts
  MulticastUnit.register(ABILITY_ID_DEATH_COIL_LICH_KING);
  MulticastUnit.register(ABILITY_ID_FROST_NOVA_LICH_KING);

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
  MulticastPoint.register(FourCC(ABILITY_FarseerEarthquake.code));
  MulticastNoTarget.register(FourCC(ABILITY_BladeMasterBladestorm.code));
}

function configurePlayerSettings() {
  const lightForceBoss = globalUnits.heroZeus;
  const darkForceBoss = globalUnits.heroLichKing;

  const colorPreservedUnits: unit[] = [
    globalUnits.fountainLight,
    globalUnits.fountainDark,
    globalUnits.heroZeus,
    globalUnits.heroThrall,
    globalUnits.heroSamuro,
    globalUnits.heroJaina,
    globalUnits.heroLichKing,
    globalUnits.heroScortah,
  ].map((u) => u.handle);

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

    if (player === darkForceBoss.owner.handle && isComputer(player)) {
      StartCampaignAI(player, 'war3mapImported\\undead-heroes.ai');
    }

    // Undead strong
    if (IsPlayerEnemy(player, lightForceBoss.owner.handle)) {
      let handicap = 1;
      const maxHpHandicap = 2;
      const maxDamageHandicap = 2;
      SetPlayerHandicap(player, handicap);
      let oldScale: number;
      setIntervalIndefinite(14, () => {
        handicap = Math.min(handicap * 1.01, Math.max(maxHpHandicap, maxDamageHandicap));
        SetPlayerHandicap(player, Math.min(handicap, maxHpHandicap));
        SetPlayerHandicapDamage(player, Math.min(Math.max(1, handicap), maxDamageHandicap));
        if (player === GetOwningPlayer(darkForceBoss.handle)) {
          const newScale = Math.max(1.4, Math.sqrt(darkForceBoss.owner.handicap));
          growUnit(darkForceBoss, newScale, 2, oldScale);
          oldScale = newScale;
          darkForceBoss.selectionScale = 1.4 + Math.sqrt(darkForceBoss.owner.handicap);
        }
      });

      if (!noUnitPlayers.includes(player)) {
        const startingUnits: Record<string, number> = {
          [UNIT_Abomination.code]: 2,
          [UNIT_Ghoul.code]: 10,
          [UNIT_CryptFiend.code]: 3,
        };
        for (const [code, count] of Object.entries(startingUnits)) {
          for (let i = 0; i < count; i++) {
            const loc = PolarProjection(fromTempLocation(GetPlayerStartLocationLoc(player)), GetRandomReal(500, 700), GetRandomDirectionDeg());
            Unit.create(MapPlayer.fromHandle(player), FourCC(code), loc.x, loc.y);
          }
        }
      }
    }
  }
  MeleeStartingAI();
}

function registerAi() {
  // Zeus
  ZeusAi.register(globalUnits.heroZeus.owner.handle, globalUnits.heroZeus.typeId);

  // Undead bosses
  LichKingAi.register(globalUnits.heroLichKing.owner.handle, globalUnits.heroLichKing.typeId);
  DarkForceAi.register(globalUnits.heroScortah.owner.handle, globalUnits.heroScortah.typeId);

  // Orc bosses
  LightForceAi.register(globalUnits.heroThrall.owner.handle, globalUnits.heroThrall.typeId);
  LightForceAi.register(globalUnits.heroSamuro.owner.handle, globalUnits.heroSamuro.typeId);

  // Human bosses
  LightForceAi.register(globalUnits.heroJaina.owner.handle, globalUnits.heroJaina.typeId);
}

const noUnitPlayers: player[] = [];

function removeStartingUnit(player: player) {
  noUnitPlayers.push(player);
  ['hpea', 'opeo', 'uaco', 'ewsp', 'ugho'].forEach((workerTypeId) => {
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
