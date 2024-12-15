/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { registerCameraExperiments } from 'lib/camera';
import {
  ABILITY_ID_BLADE_DANCE,
  ABILITY_ID_CHAIN_LIGHTNING_ZEUS,
  ABILITY_ID_DEATH_COIL_LICH_KING,
  ABILITY_ID_DIVINE_FURY,
  ABILITY_ID_FROST_NOVA_LICH_KING,
  ABILITY_ID_FROSTMOURNE_ARMOR_REDUCTION,
  ABILITY_ID_HOWL_OF_TERROR_LICH_KING,
  ABILITY_ID_SANDQUAKE,
  ABILITY_ID_THUNDER_BLINK,
  ABILITY_ID_WRATH_OF_THE_LICH_KING,
  neutralHostile,
  neutralPassive,
  playerHumanAlliance,
  playerLichKingNpc,
  playerMain,
  playerNightElf,
  playerOrcishHorde,
  playerUndeadForsaken,
} from 'lib/constants';
import {
  daemonTempCleanUp,
} from 'lib/location';
import { setAllianceState, setAllianceState2Way } from 'lib/player';
import { daemonQuestMarker } from 'lib/quests/utils';
import { ABILITY_Bearform, ABILITY_Burrow } from 'lib/resources/war3-abilities';
import { allUpgrades } from 'lib/resources/war3-upgrades';
import { registerHearthStone } from 'lib/systems/hearth_stone';
import { registerAbilityVending } from 'lib/systems/item_vending';
import { registerPreseveUnits } from 'lib/systems/preserve_unit';
import { daemonGuardPosition } from 'lib/systems/unit_guard_position';
import { UnitInteraction } from 'lib/systems/unit_interaction';
import { registerFloatTextExperiments } from 'lib/texttag';
import { trackElapsedGameTime } from 'lib/trigger';
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

  // Miscs
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
  // HowOfTerrorLichKing.register(ABILITY_ID_HOWL_OF_TERROR_LICH_KING);

  // Multicasts
  MulticastUnit.register(ABILITY_ID_DEATH_COIL_LICH_KING);
  MulticastUnit.register(ABILITY_ID_FROST_NOVA_LICH_KING);
  MulticastUnit.register(ABILITY_ID_FROST_BOLT_LICH_KING);
  MulticastUnit.register(ABILITY_ID_HOWL_OF_TERROR_LICH_KING);

  registerChatCommands();
  Camera.setSmoothingFactor(1);
  BlzChangeMinimapTerrainTex('minimap.blp');
}

function configurePlayerSettings(): void {
  SetReservedLocalHeroButtons(0);

  for (let i = 0; i < 24; i++) {
    const player = MapPlayer.fromIndex(i);
    if (player.slotState === PLAYER_SLOT_STATE_EMPTY) {
      continue;
    }

    setAllianceState(neutralPassive, player, 'neutral vision');
    if (player !== playerMain) {
      setAllianceState2Way(neutralHostile, player, 'neutral');
    }
    configureTechs(player);
    // player.setState(PLAYER_STATE_GIVES_BOUNTY, 1);
  }

  configureTechs(neutralHostile);
  configureTechs(neutralPassive);

  // Player Color
  playerMain.name = 'The Lich King';
  playerLichKingNpc.name = 'The Lich King';

  playerOrcishHorde.name = 'Orcish Horde';
  playerUndeadForsaken.name = 'Undead Forsaken';
  playerNightElf.name = 'Sentinels';
  playerHumanAlliance.name = 'Valiance Expedition';
  SetPlayerColorBJ(playerMain.handle, PLAYER_COLOR_PURPLE, true);
  SetPlayerColorBJ(playerLichKingNpc.handle, PLAYER_COLOR_PURPLE, true);

  SetPlayerColorBJ(playerOrcishHorde.handle, PLAYER_COLOR_RED, true);
  SetPlayerColorBJ(playerUndeadForsaken.handle, PLAYER_COLOR_BLUE, true);
  SetPlayerColorBJ(playerNightElf.handle, PLAYER_COLOR_CYAN, true);
  SetPlayerColorBJ(playerHumanAlliance.handle, PLAYER_COLOR_LIGHT_BLUE, true);
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
addScriptHook(W3TS_HOOK.MAIN_BEFORE, () => {

});

function configureTechs(player: MapPlayer): void {
  allUpgrades.forEach((up) => player.addTechResearched(up, 99));
  player.setAbilityAvailable(ABILITY_Burrow.id, false);
}
