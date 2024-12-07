import BladeDance from 'abilities/blade_dance/blade_dance';
import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import Frostmourne from 'abilities/frostmourne/frostmourne';
import { Impale } from 'abilities/impale/impale';
import { MulticastUnit } from 'abilities/multicast/unit';
import Sandquake from 'abilities/sandquake/sandquake';
import { ThunderBlink } from 'abilities/thunder_blink/thunder_blink';
import WrathOfTheLichKing from 'abilities/wrath_of_the_lich_king/wrath_of_the_lich_king';
import { registerAbilityLocation } from 'events/ability_location/ability_location';
import { registerChatCommands } from 'events/chat_commands/chat_commands';
import { registerFightingSounds } from 'events/fighting_sounds/fighting_sounds';
import { registerItemDrops } from 'events/item_drops/item_drops';
import { MiscEvents } from 'events/misc';
import { SummonBirthAnimation } from 'events/summon/summon_birth_animation';
import { Weather } from 'events/weather/weather';
import { registerCameraExperiments } from 'lib/camera';
import {
  ABILITY_ID_BLADE_DANCE,
  ABILITY_ID_CHAIN_LIGHTNING_ZEUS,
  ABILITY_ID_DEATH_COIL_LICH_KING,
  ABILITY_ID_DIVINE_FURY,
  ABILITY_ID_FROST_NOVA_LICH_KING,
  ABILITY_ID_FROSTMOURNE_ARMOR_REDUCTION,
  ABILITY_ID_SANDQUAKE,
  ABILITY_ID_THUNDER_BLINK,
  ABILITY_ID_WRATH_OF_THE_LICH_KING,
  neutralHostile,
  neutralPassive,
  playerMain,
} from 'lib/constants';
import { registerFrameUiExperiments } from 'lib/frame-ui';
import {
  daemonTempCleanUp,
} from 'lib/location';
import { setAllianceState, setAllianceState2Way } from 'lib/player';
import { cinematicFadeIn, cinematicFadeOut, daemonQuestMarker } from 'lib/quests/utils';
import { ABILITY_Burrow } from 'lib/resources/war3-abilities';
import { allUpgrades } from 'lib/resources/war3-upgrades';
import { registerHearthStone } from 'lib/systems/hearth_stone';
import { registerAbilityVending } from 'lib/systems/item_vending';
import { registerPreseveUnits } from 'lib/systems/preserve_unit';
import { daemonGuardPosition } from 'lib/systems/unit_guard_position';
import { UnitInteraction } from 'lib/systems/unit_interaction';
import { registerFloatTextExperiments } from 'lib/texttag';
import { setTimeout, trackElapsedGameTime } from 'lib/trigger';
import {
  daemonDummyMaster, registerTieUnitToUnit,
} from 'lib/unit';
import { QuestRegistry } from 'quests/registry';
import {
  Camera, MapPlayer,
} from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

import { ABILITY_ID_FROST_BOLT_LICH_KING } from './lib/constants';

function tsMain(): void {
  UnlockGameSpeedBJ();
  SetGameSpeed(MAP_SPEED_FASTEST);
  LockGameSpeedBJ();

  // Player settings
  configurePlayerSettings();

  // Systems
  trackElapsedGameTime();
  registerTieUnitToUnit();
  daemonDummyMaster();
  daemonTempCleanUp();
  daemonQuestMarker();
  daemonGuardPosition();
  registerAbilityLocation();
  registerPreseveUnits();
  registerHearthStone();
  registerItemDrops();
  registerFightingSounds();
  registerAbilityVending();

  // Experiments
  registerFloatTextExperiments();
  registerCameraExperiments();
  registerFrameUiExperiments();

  // Miscs
  Weather.changeWeather();
  Impale.register();
  SummonBirthAnimation.register();
  MiscEvents.register();
  UnitInteraction.register();

  // Quests
  QuestRegistry.register();

  // Abilities
  ThunderBlink.register(ABILITY_ID_THUNDER_BLINK);
  ChainLightning.register(ABILITY_ID_CHAIN_LIGHTNING_ZEUS);
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
  cinematicFadeOut(0);
  setTimeout(0.5, () => {
    cinematicFadeIn(3);
  });
}

function configurePlayerSettings(): void {
  SetReservedLocalHeroButtons(0);

  const heroOnlyPlayers = [
    playerMain,
  ];

  for (let i = 0; i < 24; i++) {
    const player = MapPlayer.fromIndex(i);
    if (player.slotState === PLAYER_SLOT_STATE_EMPTY) {
      continue;
    }

    if (heroOnlyPlayers.includes(player)) {
      player.setState(PLAYER_STATE_RESOURCE_GOLD, 1000);
      player.setState(PLAYER_STATE_RESOURCE_LUMBER, 200);
    } else {
      player.setState(PLAYER_STATE_RESOURCE_GOLD, GetRandomInt(500000, 999999));
      player.setState(PLAYER_STATE_RESOURCE_LUMBER, GetRandomInt(100000, 500000));
    }

    setAllianceState(neutralPassive, player, 'neutral vision');
    if (player !== playerMain) {
      setAllianceState2Way(neutralHostile, player, 'neutral');
    }
    configureTechs(player);
    player.setState(PLAYER_STATE_GIVES_BOUNTY, 1);
  }

  configureTechs(neutralHostile);
  configureTechs(neutralPassive);

  // Player Color
  SetPlayerColorBJ(playerMain.handle, PLAYER_COLOR_PURPLE, true);
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);

function configureTechs(player: MapPlayer): void {
  allUpgrades.forEach((up) => player.addTechResearched(up, 99));
  player.setAbilityAvailable(ABILITY_Burrow.id, false);
}
