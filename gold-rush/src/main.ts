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
import { ScortahAi } from 'ai/custom/scortah-ai';
import { ZeusAi } from 'ai/custom/zeus-ai';
import { LightForceAi } from 'ai/light_force_ai';
import { FactionInterestingEvents } from 'ai/observer/interesting_events/faction_interesting_events';
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
  ABILITY_ID_MONSOON_THRALL,
  ABILITY_ID_SANDQUAKE,
  ABILITY_ID_THUNDER_BLINK,
  ABILITY_ID_WRATH_OF_THE_LICH_KING,
  globalUnits,
  registerGlobalUnits,
} from 'lib/constants';
import { logDiscrepancy } from 'lib/debug/key_counter';
import {
  daemonTempCleanUp, fromTempLocation, PolarProjection, temp,
} from 'lib/location';
import { isComputer } from 'lib/player';
import {
  ABILITY_ArchMageBlizzard, ABILITY_ArchMageWaterElemental, ABILITY_BladeMasterBladestorm,
  ABILITY_BloodMageFlameStrike,
  ABILITY_BloodMagePhoenix,
  ABILITY_BloodMageSiphonMana,
  ABILITY_ChieftainShockWave,
  ABILITY_ChieftainWarStomp,
  ABILITY_FarseerChainLightning, ABILITY_FarseerEarthquake,
  ABILITY_KeeperEntanglingRoots,
  ABILITY_MountainKingThunderBolt,
  ABILITY_MountainKingThunderClap,
  ABILITY_PaladinHolyLight,
  ABILITY_SeaWitchForkedLightning,
  ABILITY_ShadowHunterHealingWave,
  ABILITY_ShadowHunterHex,
} from 'lib/resources/war3-abilities';
import {
  UNIT_Abomination, UNIT_FrostWyrm, UNIT_Ghoul, UNIT_GoldMine,
} from 'lib/resources/war3-units';
import { registerDialogues } from 'lib/sound';
import { DamageObserver } from 'lib/systems/damage_observer';
import { SummonManager } from 'lib/systems/summon_manager';
import { systemConfig } from 'lib/systems/system-config';
import {
  getTimeS, onChatLocal, setIntervalIndefinite, trackElapsedGameTime,
} from 'lib/trigger';
import { daemonDummyMaster, daemonTieUnitToUnit, growUnit } from 'lib/unit';
import {
  Force, Group, MapPlayer, Unit,
} from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

import { UNIT_CryptFiend } from './lib/resources/war3-units';

const mainPlayerForce: 'light' | 'dark' | 'observer' = 'observer';
// const mainPlayerForce: 'light' | 'dark' | 'observer' = 'light';
// const mainPlayerForce: 'light' | 'dark' | 'observer' = 'dark';

function tsMain() {
  UnlockGameSpeedBJ();
  SetGameSpeed(MAP_SPEED_FASTEST);
  LockGameSpeedBJ();
  registerGlobalUnits();
  // Player settings
  removeStartingUnit(Player(0));
  removeStartingUnit(Player(5));
  removeStartingUnit(Player(6));
  configurePlayerSettings();
  registerDialogues();
  upgradeTownHallAllPlayers();

  registerAi();
  useReforgedIcons();
  trackElapsedGameTime();
  daemonTieUnitToUnit();
  daemonDummyMaster();
  daemonTempCleanUp();

  // Miscs
  // new CreepSpawn(Unit.fromHandle(heroZeus));
  new PeriodBuff(globalUnits.heroZeus);

  SummonManager.register();
  DamageObserver.register();
  Weather.changeWeather();
  LichKingEvents.register(globalUnits.heroLichKing);
  FactionInterestingEvents.register();

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
  MulticastPoint.register(FourCC(ABILITY_ArchMageBlizzard.code), globalUnits.heroJaina);
  MulticastNoTarget.register(FourCC(ABILITY_ArchMageWaterElemental.code));
  MulticastPoint.register(FourCC(ABILITY_BloodMageFlameStrike.code));
  MulticastUnit.register(FourCC(ABILITY_BloodMageSiphonMana.code), undefined, false);
  MulticastNoTarget.register(FourCC(ABILITY_BloodMagePhoenix.code));

  MulticastNoTarget.register(FourCC(ABILITY_ChieftainWarStomp.code));
  MulticastUnit.register(FourCC(ABILITY_ChieftainShockWave.code));
  MulticastPoint.register(FourCC(ABILITY_ChieftainShockWave.code));
  MulticastUnit.register(FourCC(ABILITY_ShadowHunterHex.code));
  MulticastUnit.register(FourCC(ABILITY_ShadowHunterHealingWave.code), undefined, false);
  MulticastUnit.register(FourCC(ABILITY_FarseerChainLightning.code), globalUnits.heroThrall, false);
  MulticastPoint.register(FourCC(ABILITY_FarseerEarthquake.code));
  MulticastUnit.register(FourCC(ABILITY_KeeperEntanglingRoots.code), undefined, false);
  MulticastUnit.register(FourCC(ABILITY_SeaWitchForkedLightning.code), undefined, false);
  MulticastPoint.register(ABILITY_ID_MONSOON_THRALL);
  MulticastNoTarget.register(FourCC(ABILITY_BladeMasterBladestorm.code));

  onChatLocal('-clear', true, () => {
    ClearTextMessagesBJ(Force.fromPlayer(MapPlayer.fromLocal()).handle);
  });

  onChatLocal('-k', true, () => {
    ClearTextMessagesBJ(Force.fromPlayer(MapPlayer.fromLocal()).handle);
    logDiscrepancy();
  });

  onChatLocal('-wtf', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer()))).for(() => {
      Unit.fromEnum().resetCooldown();
    });
  });

  onChatLocal('-autoplay 0', true, () => { systemConfig.autoPlay = false; });
  onChatLocal('-autoplay 1', true, () => { systemConfig.autoPlay = true; });
  onChatLocal('-kill', true, () => {
    temp(Group.fromHandle(GetUnitsSelectedAll(GetLocalPlayer())))
      .for(() => Unit.fromEnum().kill());
  });

  // Remove neutral creeps
  temp(Group.fromHandle(GetUnitsOfPlayerAll(Player(PLAYER_NEUTRAL_AGGRESSIVE))))
    .for(() => Unit.fromEnum().destroy());

  // Reveal gold mines
  temp(Group.fromHandle(GetUnitsOfPlayerAndTypeId(Player(PLAYER_NEUTRAL_PASSIVE), FourCC(UNIT_GoldMine.code))))
    .for(() => {
      const goldMine = Unit.fromEnum();
      SetFogStateRadius(globalUnits.fountainLight.owner.handle, FOG_OF_WAR_FOGGED, goldMine.x, goldMine.y, 600, true);
      SetFogStateRadius(globalUnits.fountainDark.owner.handle, FOG_OF_WAR_FOGGED, goldMine.x, goldMine.y, 600, true);
    });

  ClearTextMessages();
}

function configurePlayerSettings() {
  const mainPlayer = MapPlayer.fromIndex(0);
  SetReservedLocalHeroButtons(0);

  const lightForceBoss = globalUnits.heroZeus;
  const darkForceBoss = globalUnits.heroLichKing;

  const lightForce = Force.create();
  for (const i of [5, 1, 2, 3, 4]) lightForce.addPlayer(MapPlayer.fromIndex(i));
  const darkForce = Force.create();
  for (const i of [6, 7, 8, 9, 10, 11, 12]) darkForce.addPlayer(MapPlayer.fromIndex(i));

  const lightChampionPlayer = MapPlayer.fromIndex(5);
  const darkChampionPlayer = MapPlayer.fromIndex(6);

  const heroOnlyPlayers = [
    mainPlayer,
    lightChampionPlayer,
    darkChampionPlayer,
  ];

  const colorPreservedUnits: Unit[] = [
    globalUnits.fountainLight,
    globalUnits.fountainDark,
    globalUnits.heroZeus,
    globalUnits.heroThrall,
    globalUnits.heroSamuro,
    globalUnits.heroJaina,
    globalUnits.heroLichKing,
    globalUnits.heroScortah,
  ];

  for (let i = 0; i < 24; i++) {
    const player = MapPlayer.fromIndex(i);
    if (player.slotState === PLAYER_SLOT_STATE_EMPTY) {
      continue;
    }

    if (heroOnlyPlayers.includes(player)) {
      player.setState(PLAYER_STATE_RESOURCE_GOLD, 1000);
      player.setState(PLAYER_STATE_RESOURCE_LUMBER, 0);
      player.setState(PLAYER_STATE_RESOURCE_FOOD_CAP, 60);

      setIntervalIndefinite(1, () => {
        player.setState(PLAYER_STATE_RESOURCE_LUMBER, getTimeS());
      });
    } else {
      player.setState(PLAYER_STATE_RESOURCE_GOLD, 1000000);
      player.setState(PLAYER_STATE_RESOURCE_LUMBER, 1000000);
      player.setState(PLAYER_STATE_RESOURCE_FOOD_CAP, 150);
    }

    if (heroOnlyPlayers.includes(player) && isComputer(player.handle)) {
      StartCampaignAI(player.handle, 'war3mapImported\\champions.ai');
    }

    switch (player.race) {
      case RACE_HUMAN:
        SetPlayerColorBJ(player.handle, PLAYER_COLOR_LIGHT_BLUE, false);
        SetPlayerName(player.handle, 'Human Alliance');
        if (isComputer(player.handle)) {
          StartCampaignAI(player.handle, 'AIScripts\\human.ai');
        }
        break;
      case RACE_ORC:
        SetPlayerColorBJ(player.handle, PLAYER_COLOR_RED, false);
        player.name = 'Orcish Horde';
        if (isComputer(player.handle)) {
          StartCampaignAI(player.handle, 'AIScripts\\orc.ai');
        }
        break;
      case RACE_NIGHTELF:
        SetPlayerColorBJ(player.handle, PLAYER_COLOR_CYAN, false);
        player.name = 'Night Elf Sentinels';
        if (isComputer(player.handle)) {
          StartCampaignAI(player.handle, 'AIScripts\\elf.ai');
        }
        break;
      case RACE_UNDEAD:
        SetPlayerColorBJ(player.handle, PLAYER_COLOR_PURPLE, false);
        player.name = 'Undead Scourge';
        if (isComputer(player.handle)) {
          StartCampaignAI(player.handle, 'AIScripts\\undead.ai');
        }
        break;
      default:
    }
    const playerColor = player.color;
    const allUnitsOfPlayer = GetUnitsInRectOfPlayer(GetPlayableMapRect(), player.handle);

    temp(Group.fromHandle(allUnitsOfPlayer)).for(() => {
      const u = Unit.fromEnum();
      if (!colorPreservedUnits.includes(u)) {
        u.color = playerColor;
      }
    });

    player.handicapXp = 3;
    if (player === darkChampionPlayer) {
      SetPlayerColorBJ(player.handle, PLAYER_COLOR_GREEN, false);
      player.handicapXp = 6;
    }

    // Undead strong
    if (darkForce.hasPlayer(player)) {
      let handicapHp = 0.75;
      let handicapDamage = 0.75;
      const maxHpHandicap = 1.5;
      const maxDamageHandicap = 1.5;
      SetPlayerHandicap(player.handle, handicapHp);
      let oldScale: number;
      setIntervalIndefinite(14, () => {
        handicapHp = Math.min(handicapHp * 1.01, maxHpHandicap);
        handicapDamage = Math.min(handicapHp * 1.01, maxDamageHandicap);
        SetPlayerHandicap(player.handle, handicapHp);
        SetPlayerHandicapDamage(player.handle, handicapDamage);
        if (player === darkForceBoss.owner) {
          const newScale = Math.max(1.4, Math.sqrt(darkForceBoss.owner.handicap));
          growUnit(darkForceBoss, newScale, 2, oldScale);
          oldScale = newScale;
          darkForceBoss.selectionScale = 1.4 + Math.sqrt(darkForceBoss.owner.handicap);
        }
      });

      if (!noUnitPlayers.includes(player.handle)) {
        const startingUnits: Record<string, number> = {
          [UNIT_Abomination.code]: 2,
          [UNIT_Ghoul.code]: 10,
          [UNIT_CryptFiend.code]: 3,
          [UNIT_FrostWyrm.code]: 3,
        };
        for (const [code, count] of Object.entries(startingUnits)) {
          for (let i = 0; i < count; i++) {
            const loc = PolarProjection(fromTempLocation(player.startLocationPoint), GetRandomReal(500, 700), GetRandomDirectionDeg());
            Unit.create(player, FourCC(code), loc.x, loc.y);
          }
        }
      }
    }

    // Ally/enemy
    if (mainPlayerForce === 'light' && lightForce.hasPlayer(player)
      || mainPlayerForce === 'dark' && darkForce.hasPlayer(player)
      || mainPlayerForce === 'observer') {
      const p1 = mainPlayer.handle;
      const p2 = player.handle;
      SetPlayerAlliance(p1, p2, ALLIANCE_PASSIVE, true);
      SetPlayerAlliance(p1, p2, ALLIANCE_HELP_REQUEST, true);
      SetPlayerAlliance(p1, p2, ALLIANCE_HELP_RESPONSE, true);
      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_XP, true);
      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_SPELLS, true);
      SetPlayerAlliance(p2, p1, ALLIANCE_PASSIVE, true);
      SetPlayerAlliance(p2, p1, ALLIANCE_HELP_REQUEST, true);
      SetPlayerAlliance(p2, p1, ALLIANCE_HELP_RESPONSE, true);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_XP, true);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_SPELLS, true);
      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_VISION, true);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_VISION, true);

      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_CONTROL, true);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_CONTROL, true);

      // SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
      // SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
    }
  }
  // MeleeStartingAI();

  if (mainPlayerForce === 'light' || mainPlayerForce === 'observer') {
    SetCameraPositionForPlayer(mainPlayer.handle, lightForceBoss.x, lightForceBoss.y);
    SetPlayerAlliance(lightChampionPlayer.handle, mainPlayer.handle, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
  }
  if (mainPlayerForce === 'dark' || mainPlayerForce === 'observer') {
    SetCameraPositionForPlayer(mainPlayer.handle, darkForceBoss.x, darkForceBoss.y);
    SetPlayerAlliance(darkChampionPlayer.handle, mainPlayer.handle, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
  }
}

function registerAi() {
  // Zeus
  ZeusAi.register(globalUnits.heroZeus.owner.handle, globalUnits.heroZeus.typeId);

  // Undead bosses
  LichKingAi.register(globalUnits.heroLichKing.owner.handle, globalUnits.heroLichKing.typeId);
  ScortahAi.register(globalUnits.heroScortah.owner.handle, globalUnits.heroScortah.typeId);

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
