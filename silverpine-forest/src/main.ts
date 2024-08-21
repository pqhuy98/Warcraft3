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
import { registerChatCommands } from 'events/chat_commands/chat_commands';
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { MiscEvents } from 'events/misc';
import { QuestRegistry } from 'events/quests/quest-registry';
import { SummonBirthAnimation } from 'events/summon_birth_animation/summon_birth_animation';
import { UnitInteraction } from 'events/unit_interaction';
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
  mainPlayer,
  registerGlobalUnits,
} from 'lib/constants';
import {
  daemonTempCleanUp, temp,
} from 'lib/location';
import { isComputer } from 'lib/player';
import {
  ABILITY_ArchMageBlizzard, ABILITY_ArchMageWaterElemental, ABILITY_BladeMasterBladestorm,
  ABILITY_BloodMageFlameStrike,
  ABILITY_BloodMagePhoenix,
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
  setTimeout, trackElapsedGameTime,
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

type MainPlayerFaction = 'light' | 'dark' | 'observer'

function tsMain() {
  // Cheat('iseedeadpeople');
  UnlockGameSpeedBJ();
  SetGameSpeed(MAP_SPEED_FASTEST);
  LockGameSpeedBJ();
  registerGlobalUnits();

  // Player settings
  configurePlayerSettings();

  trackElapsedGameTime();
  daemonTieUnitToUnit();
  daemonDummyMaster();
  daemonTempCleanUp();

  // Miscs
  // Weather.changeWeather();
  // SmallUnitModel.register();
  Impale.register();
  SummonBirthAnimation.register();
  MiscEvents.register();
  UnitInteraction.register();

  // Quests
  QuestRegistry.register();

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
  MulticastPoint.register(FourCC(ABILITY_ArchMageBlizzard.code));
  MulticastNoTarget.register(FourCC(ABILITY_ArchMageWaterElemental.code));
  MulticastPoint.register(FourCC(ABILITY_BloodMageFlameStrike.code));
  MulticastNoTarget.register(FourCC(ABILITY_BloodMagePhoenix.code));

  MulticastNoTarget.register(FourCC(ABILITY_ChieftainWarStomp.code));
  MulticastUnit.register(FourCC(ABILITY_ChieftainShockWave.code));
  MulticastPoint.register(FourCC(ABILITY_ChieftainShockWave.code));
  MulticastUnit.register(FourCC(ABILITY_ShadowHunterHex.code));
  MulticastUnit.register(FourCC(ABILITY_ShadowHunterHealingWave.code), undefined, false);
  MulticastUnit.register(FourCC(ABILITY_FarseerChainLightning.code), undefined, false);
  MulticastPoint.register(FourCC(ABILITY_FarseerEarthquake.code));
  MulticastUnit.register(FourCC(ABILITY_KeeperEntanglingRoots.code), undefined, false);
  MulticastUnit.register(FourCC(ABILITY_SeaWitchForkedLightning.code), undefined, false);
  MulticastPoint.register(ABILITY_ID_MONSOON_THRALL);
  MulticastNoTarget.register(FourCC(ABILITY_BladeMasterBladestorm.code));

  registerChatCommands();

  setTimeout(0.1, () => Camera.setSmoothingFactor(10));
}

function configurePlayerSettings() {
  SetReservedLocalHeroButtons(0);

  const lightForce = Force.create();
  for (const i of [1, 2]) lightForce.addPlayer(MapPlayer.fromIndex(i));
  const darkForce = Force.create();
  for (const i of [0, 3]) darkForce.addPlayer(MapPlayer.fromIndex(i));

  const heroOnlyPlayers = [
    mainPlayer,
  ];

  const colorPreservedUnits: Unit[] = [
    // empty
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
    } else {
      player.setState(PLAYER_STATE_RESOURCE_GOLD, GetRandomInt(500000, 999999));
      player.setState(PLAYER_STATE_RESOURCE_LUMBER, GetRandomInt(100000, 500000));
    }

    switch (player.race) {
      case RACE_HUMAN:
        SetPlayerColor(player.handle, PLAYER_COLOR_BLUE);
        SetPlayerName(player.handle, 'Human Alliance');
        if (isComputer(player.handle)) {
          // StartCampaignAI(player.handle, 'AIScripts\\human.ai');
        }
        break;
      case RACE_ORC:
        SetPlayerColor(player.handle, PLAYER_COLOR_RED);
        player.name = 'Orcish Horde';
        if (isComputer(player.handle)) {
          // StartCampaignAI(player.handle, 'AIScripts\\orc.ai');
        }
        break;
      case RACE_NIGHTELF:
        SetPlayerColor(player.handle, PLAYER_COLOR_CYAN);
        player.name = 'Night Elf Sentinels';
        if (isComputer(player.handle)) {
          // StartCampaignAI(player.handle, 'AIScripts\\elf.ai');
        }
        break;
      case RACE_UNDEAD:
        SetPlayerColor(player.handle, PLAYER_COLOR_PURPLE);
        player.name = 'Undead Scourge';
        if (isComputer(player.handle)) {
          // StartCampaignAI(player.handle, 'AIScripts\\undead.ai');
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
  }

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
      SetPlayerAlliance(p2, p1, ALLIANCE_PASSIVE, isAlly);

      SetPlayerAlliance(p1, p2, ALLIANCE_HELP_REQUEST, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_HELP_REQUEST, isAlly);

      SetPlayerAlliance(p1, p2, ALLIANCE_HELP_RESPONSE, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_HELP_RESPONSE, isAlly);

      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_XP, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_XP, isAlly);

      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_SPELLS, isAlly);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_SPELLS, isAlly);

      SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_VISION, false);
      SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_VISION, false);

      // SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_VISION, isAlly);
      // SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_VISION, isAlly);

      // SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_CONTROL, isAlly);
      // SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_CONTROL, isAlly);

      // SetPlayerAlliance(p1, p2, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
      // SetPlayerAlliance(p2, p1, ALLIANCE_SHARED_ADVANCED_CONTROL, true);
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

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
