/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BladeDance from 'abilities/blade_dance/blade_dance';
import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import Frostmourne from 'abilities/frostmourne/frostmourne';
import { Impale } from 'abilities/impale/impale';
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
import { registerAbilityLocation } from 'events/ability_location/ability_location';
import { AutoPanCamera } from 'events/autopan_camera/autopan_camera';
import { BuildingSelectionCircle } from 'events/building_selection_circle/building_selection_circle';
import { registerChatCommands } from 'events/chat_commands/chat_commands';
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { LichKingEvents } from 'events/lich_king/lich_king_events';
import { PeriodBuff } from 'events/period_buff/period_buff';
import {
  SmallUnitModel,
} from 'events/small_unit_model/small_unit_model';
import { PrototypeUnits } from 'events/special_units/prototype_units';
import { SummonBirthAnimation } from 'events/summon_birth_animation/summon_birth_animation';
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
  darkChampionPlayer,
  globalUnits,
  lightChampionPlayer,
  mainPlayer,
  registerGlobalUnits,
} from 'lib/constants';
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
  UNIT_Abomination, UNIT_AltarofDarkness, UNIT_Boneyard, UNIT_Crypt, UNIT_FrostWyrm, UNIT_Ghoul, UNIT_GoldMine,
  UNIT_Graveyard,
  UNIT_SacrificialPit,
  UNIT_Slaughterhouse,
  UNIT_TempleoftheDamned,
  UNIT_TombOfRelics,
  UNIT_Ziggurat,
} from 'lib/resources/war3-units';
import { registerDialogues } from 'lib/sound';
import { DamageStochasticObserver } from 'lib/systems/damage_observer';
import { SummonManager } from 'lib/systems/summon_manager';
import {
  getTimeS, setIntervalIndefinite, setTimeout, trackElapsedGameTime,
} from 'lib/trigger';
import {
  daemonDummyMaster, daemonTieUnitToUnit,
} from 'lib/unit';
import {
  Camera,
  Force, Group, MapPlayer, Rectangle, Unit,
} from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

import { ABILITY_ID_FROST_BOLT_LICH_KING } from './lib/constants';
import { UNIT_CryptFiend } from './lib/resources/war3-units';

type MainPlayerFaction = 'light' | 'dark' | 'observer'

function tsMain() {
  // Cheat('warpten');
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
  registerAbilityLocation();
  trackElapsedGameTime();
  daemonTieUnitToUnit();
  daemonDummyMaster();
  daemonTempCleanUp();

  // Miscs
  // new CreepSpawn(Unit.fromHandle(heroZeus));
  new PeriodBuff(globalUnits.heroZeus);

  SummonManager.register();
  DamageStochasticObserver.register();
  Weather.changeWeather();
  LichKingEvents.register(globalUnits.heroLichKing);
  FactionInterestingEvents.register();
  BuildingSelectionCircle.register();
  PrototypeUnits.register();
  SmallUnitModel.register();
  Impale.register();
  AutoPanCamera.register();
  SummonBirthAnimation.register();

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
  MulticastUnit.register(ABILITY_ID_FROST_BOLT_LICH_KING);

  MulticastUnit.register(FourCC(ABILITY_PaladinHolyLight.code));
  MulticastUnit.register(FourCC(ABILITY_MountainKingThunderBolt.code));
  MulticastNoTarget.register(FourCC(ABILITY_MountainKingThunderClap.code));
  MulticastPoint.register(FourCC(ABILITY_ArchMageBlizzard.code), globalUnits.heroJaina);
  MulticastNoTarget.register(FourCC(ABILITY_ArchMageWaterElemental.code), globalUnits.heroJaina);
  MulticastPoint.register(FourCC(ABILITY_BloodMageFlameStrike.code));
  // MulticastUnit.register(FourCC(ABILITY_BloodMageSiphonMana.code), undefined, false);
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

  // Remove neutral creeps
  temp(Group.fromHandle(GetUnitsOfPlayerAll(Player(PLAYER_NEUTRAL_AGGRESSIVE))))
    .for(() => Unit.fromEnum().destroy());

  // Reveal gold mines
  temp(Group.fromHandle(GetUnitsOfPlayerAndTypeId(Player(PLAYER_NEUTRAL_PASSIVE), FourCC(UNIT_GoldMine.code))))
    .for(() => {
      const goldMine = Unit.fromEnum();
      SetFogStateRadius(globalUnits.fountainLight.owner.handle, FOG_OF_WAR_FOGGED, goldMine.x, goldMine.y, 300, true);
    });

  registerChatCommands();

  setTimeout(0.1, () => Camera.setSmoothingFactor(10));
}

function configurePlayerSettings() {
  SetReservedLocalHeroButtons(0);

  const lightForceBoss = globalUnits.heroZeus;
  const darkForceBoss = globalUnits.heroLichKing;

  const lightForce = Force.create();
  for (const i of [5, 1, 2, 3, 4]) lightForce.addPlayer(MapPlayer.fromIndex(i));
  const darkForce = Force.create();
  for (const i of [6, 7, 8, 9, 10, 11, 12]) darkForce.addPlayer(MapPlayer.fromIndex(i));

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
    }

    if (heroOnlyPlayers.includes(player) && isComputer(player.handle)) {
      StartCampaignAI(player.handle, 'AIScripts\\champions.ai');
    }

    switch (player.race) {
      case RACE_HUMAN:
        SetPlayerColor(player.handle, PLAYER_COLOR_LIGHT_BLUE);
        SetPlayerName(player.handle, 'Human Alliance');
        if (isComputer(player.handle)) {
          StartCampaignAI(player.handle, 'AIScripts\\human.ai');
        }
        break;
      case RACE_ORC:
        SetPlayerColor(player.handle, PLAYER_COLOR_RED);
        player.name = 'Orcish Horde';
        if (isComputer(player.handle)) {
          StartCampaignAI(player.handle, 'AIScripts\\orc.ai');
        }
        break;
      case RACE_NIGHTELF:
        SetPlayerColor(player.handle, PLAYER_COLOR_CYAN);
        player.name = 'Night Elf Sentinels';
        if (isComputer(player.handle)) {
          StartCampaignAI(player.handle, 'AIScripts\\elf.ai');
        }
        break;
      case RACE_UNDEAD:
        SetPlayerColor(player.handle, PLAYER_COLOR_PURPLE);
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
      SetPlayerColor(player.handle, PLAYER_COLOR_GREEN);
      player.handicapXp = 6;
    }

    // Undead strong
    if (darkForce.hasPlayer(player)) {
      const initialHandicapHp = 1;
      const initialHandicapDamage = 1;

      const maxHpHandicap = 1.5;
      const maxDamageHandicap = 1.5;
      const upgradePeriodS = 30;

      let handicapHp = initialHandicapHp;
      let handicapDamage = initialHandicapDamage;

      setIntervalIndefinite(upgradePeriodS, () => {
        handicapHp = Math.min(handicapHp * 1.01, maxHpHandicap);
        handicapDamage = Math.min(handicapHp * 1.01, maxDamageHandicap);
        SetPlayerHandicap(player.handle, handicapHp);
        SetPlayerHandicapDamage(player.handle, handicapDamage);
      });

      if (!noUnitPlayers.includes(player.handle)) {
        setTimeout(0, () => {
          const startingUnits: Record<string, number> = {
            // [UNIT_Abomination.code]: 1,
            // [UNIT_Ghoul.code]: 6,
            // [UNIT_CryptFiend.code]: 1,
            // [UNIT_FrostWyrm.code]: 1,

            // Full base
            // [UNIT_AltarofDarkness.code]: 1,
            // [UNIT_Crypt.code]: 2,
            // [UNIT_Slaughterhouse.code]: 2,
            // [UNIT_TempleoftheDamned.code]: 2,
            // [UNIT_Boneyard.code]: 2,
            // [UNIT_Graveyard.code]: 1,
            // [UNIT_TombOfRelics.code]: 1,
            // [UNIT_SacrificialPit.code]: 1,
            // [UNIT_Ziggurat.code]: 13,
          };
          for (const [code, count] of Object.entries(startingUnits)) {
            for (let i = 0; i < count; i++) {
              const loc = PolarProjection(fromTempLocation(player.startLocationPoint), GetRandomReal(500, 700), GetRandomDirectionDeg());
              Unit.create(player, FourCC(code), loc.x, loc.y);
            }
          }
        });
      }
    }
  }

  // Start AI for other players with no custom script.

  function setMainPlayerAlliance(mainPlayerForce: MainPlayerFaction) {
    for (let i = 0; i < 24; i++) {
      const player = MapPlayer.fromIndex(i);
      if (player.slotState === PLAYER_SLOT_STATE_EMPTY) {
        continue;
      }

      const isAlly = (mainPlayerForce === 'light' && lightForce.hasPlayer(player)
        || mainPlayerForce === 'dark' && darkForce.hasPlayer(player)
        || mainPlayerForce === 'observer');

      const p1 = mainPlayer.handle;
      const p2 = player.handle;
      SetPlayerAlliance(p1, p2, ALLIANCE_PASSIVE, isAlly);
      SetPlayerAlliance(p1, p2, ALLIANCE_HELP_REQUEST, isAlly);
      SetPlayerAlliance(p1, p2, ALLIANCE_HELP_RESPONSE, isAlly);
      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_XP, isAlly);
      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_SPELLS, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_PASSIVE, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_HELP_REQUEST, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_HELP_RESPONSE, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_XP, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_SPELLS, isAlly);
      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_VISION, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_VISION, isAlly);

      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_CONTROL, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_CONTROL, isAlly);

      // SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
      // SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
    }

    SetPlayerAlliance(lightChampionPlayer.handle, mainPlayer.handle, ALLIANCE_SHARED_ADVANCED_CONTROL, false);
    SetPlayerAlliance(darkChampionPlayer.handle, mainPlayer.handle, ALLIANCE_SHARED_ADVANCED_CONTROL, false);

    if (mainPlayerForce === 'light' || mainPlayerForce === 'observer') {
      SetCameraPositionForPlayer(mainPlayer.handle, lightForceBoss.x, lightForceBoss.y);
      SetPlayerAlliance(lightChampionPlayer.handle, mainPlayer.handle, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
    }
    if (mainPlayerForce === 'dark' || mainPlayerForce === 'observer') {
      SetCameraPositionForPlayer(mainPlayer.handle, darkForceBoss.x, darkForceBoss.y);
      SetPlayerAlliance(darkChampionPlayer.handle, mainPlayer.handle, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
    }
    ClearTextMessages();
    setTimeout(0, () => SetFogStateRect(mainPlayer.handle, FOG_OF_WAR_MASKED, temp(Rectangle.getWorldBounds()).handle, false));
  }
  setMainPlayerAlliance('observer');
  onChatCommand('-faction $1', false, (msg) => {
    const faction = msg.split(' ')[1];
    switch (faction) {
      case 'dark': {
        setMainPlayerAlliance('dark');
        break;
      }
      case 'light': {
        setMainPlayerAlliance('light');
        break;
      }
      case 'observer': {
        setMainPlayerAlliance('observer');
        break;
      }
      default:
    }
  }, 'GameControl', 'Change your faction. Valid values for $1 are "light", "dark", "observer".');
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

  [
    'ogre', 'htow',
    // 'unpl', 'etol',
  ].forEach((townTypeId) => {
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
