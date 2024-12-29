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
import { SmallUnitModel } from 'events/small_unit_model/small_unit_model';
import { SummonBirthAnimation } from 'events/summon/summon_birth_animation';
import { registerCameraExperiments } from 'lib/camera';
import {
  neutralHostile,
  neutralPassive,
  playerMain,
} from 'lib/constants';
import {
  daemonTempCleanUp,
} from 'lib/location';
import { setAllianceState, setAllianceState2Way } from 'lib/player';
import { daemonQuestMarker } from 'lib/quests/utils';
import { ABILITY_Burrow } from 'lib/resources/war3-abilities';
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
  Camera, FogModifier, MapPlayer,
  Rectangle,
} from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

function tsMain(): void {
  UnlockGameSpeedBJ();
  SetGameSpeed(MAP_SPEED_FASTEST);
  LockGameSpeedBJ();
  BlzShowTerrain(false);
  FogModifier.fromRect(playerMain, FOG_OF_WAR_VISIBLE, Rectangle.getWorldBounds(), true, false).start();

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

  // Multicasts

  registerChatCommands();
  Camera.setSmoothingFactor(1);
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
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
addScriptHook(W3TS_HOOK.MAIN_BEFORE, () => {

});

function configureTechs(player: MapPlayer): void {
  allUpgrades.forEach((up) => player.addTechResearched(up, 99));
  player.setAbilityAvailable(ABILITY_Burrow.id, false);
}
