import BladeDance from 'abilities/blade_dance/blade_dance';
import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import Frostmourne from 'abilities/frostmourne/frostmourne';
import { Impale } from 'abilities/impale/impale';
import { MulticastUnit } from 'abilities/multicast/unit';
import Sandquake from 'abilities/sandquake/sandquake';
import { ThunderBlink } from 'abilities/thunder_blink/thunder_blink';
import WrathOfTheLichKing from 'abilities/wrath_of_the_lich_king/wrath_of_the_lich_king';
import { registerChatCommands } from 'events/chat_commands/chat_commands';
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { MiscEvents } from 'events/misc';
import { QuestRegistry } from 'events/quests/registry';
import { SummonBirthAnimation } from 'events/summon_birth_animation/summon_birth_animation';
import { useReforgedIcons } from 'events/use_reforged_icons/use_reforged_icons';
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
  darkForce,
  lightForce,
  mainPlayer,
  neutralHostile,
  neutralPassive,
  playerBlackTurban,
  playerHumanAlliance,
  playerMonsters,
  playerNightElfSentinels,
  playerOrcishHorde,
  registerGlobalUnits,
} from 'lib/constants';
import {
  daemonTempCleanUp, temp,
} from 'lib/location';
import { setAllianceState, setAllianceState2Way } from 'lib/player';
import { daemonQuestMarker } from 'lib/quests/utils';
import { daemonGuardPosition } from 'lib/systems/unit_guard_position';
import { UnitInteraction } from 'lib/systems/unit_interaction';
import { registerFloatTextExperiments } from 'lib/texttag';
import {
  setTimeout, trackElapsedGameTime,
} from 'lib/trigger';
import {
  daemonDummyMaster, daemonTieUnitToUnit,
} from 'lib/unit';
import {
  Camera, MapPlayer, Rectangle,
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
  daemonQuestMarker();
  daemonGuardPosition();
  useReforgedIcons();
  registerFloatTextExperiments();

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

  registerChatCommands();
  Camera.setSmoothingFactor(1);
}

function configurePlayerSettings() {
  SetReservedLocalHeroButtons(0);

  const heroOnlyPlayers = [
    mainPlayer,
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

    setAllianceState(neutralPassive, player, 'neutral vision');
    if (player !== mainPlayer) {
      setAllianceState2Way(neutralHostile, player, 'neutral');
    }
  }

  SetPlayerColorBJ(mainPlayer.handle, PLAYER_COLOR_PURPLE, true);
  SetPlayerColorBJ(playerHumanAlliance.handle, PLAYER_COLOR_BLUE, true);
  SetPlayerColorBJ(playerOrcishHorde.handle, PLAYER_COLOR_RED, true);
  SetPlayerColorBJ(playerNightElfSentinels.handle, PLAYER_COLOR_CYAN, true);
  SetPlayerColorBJ(playerBlackTurban.handle, PLAYER_COLOR_COAL, true);
  SetPlayerColorBJ(playerMonsters.handle, PLAYER_COLOR_COAL, true);

  // Change faction
  function setMainPlayerAlliance(mainPlayerForce: MainPlayerFaction) {
    for (let i = 0; i < 24; i++) {
      const player = MapPlayer.fromIndex(i);
      if (player.slotState === PLAYER_SLOT_STATE_EMPTY) {
        continue;
      }

      const isAlly = (mainPlayerForce === 'light' && lightForce.hasPlayer(player)
        || mainPlayerForce === 'dark' && darkForce.hasPlayer(player)
        || mainPlayerForce === 'observer');
      if (isAlly) {
        // setAllianceState2Way(mainPlayer, player, 'allied share unit');
        setAllianceState2Way(mainPlayer, player, 'allied');
      } else {
        setAllianceState2Way(mainPlayer, player, 'enemy');
      }
    }

    ClearTextMessages();
    setTimeout(0, () => SetFogStateRect(mainPlayer.handle, FOG_OF_WAR_MASKED, temp(Rectangle.getWorldBounds()).handle, false));
  }
  setMainPlayerAlliance('light');
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
