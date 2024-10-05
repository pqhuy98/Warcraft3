import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import {
  playerBlackTurban, playerHumanAlliance, playerMain, playerOrcishHorde, playerShadowfangCity, playerUndeadInvader,
  UNIT_LumberMillQuest,
} from 'lib/constants';
import {
  centerLocRect,
  currentLoc, fromTempLocation, isRectVisible, Loc, PolarProjection,
} from 'lib/location';
import { log } from 'lib/log';
import { setAllianceState2Way } from 'lib/player';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import { ABILITY_BlightGrowthLarge, ABILITY_BlightGrowthSmall } from 'lib/resources/war3-abilities';
import {
  UNIT_Abomination,
  UNIT_Acolyte, UNIT_AltarofDarkness, UNIT_BlackCitadel, UNIT_Boneyard, UNIT_Crypt,
  UNIT_DagrenTheOrcslayer,
  UNIT_FlyingMachine,
  UNIT_Footman, UNIT_Graveyard, UNIT_GryphonRider, UNIT_Knight, UNIT_MortarTeam, UNIT_Necromancer, UNIT_Peasant, UNIT_Priest, UNIT_Rifleman, UNIT_SacrificialPit,
  UNIT_SiegeEngine,
  UNIT_SiegeEngineUpgraded,
  UNIT_Slaughterhouse, UNIT_Sorceress, UNIT_TempleoftheDamned, UNIT_TheCaptain, UNIT_TombOfRelics, UNIT_VillagerMan, UNIT_VillagerMan2, UNIT_VillagerWoman, UNIT_Ziggurat,
} from 'lib/resources/war3-units';
import { play3dSound, playSpeech, playSpeechUnitType } from 'lib/sound';
import {
  AiCommand,
} from 'lib/systems/ai_command';
import { removeGuardPosition } from 'lib/systems/unit_guard_position';
import { buildTrigger, getTimeS, setTimeout } from 'lib/trigger';
import {
  getUnitsInRangeOfLoc, getUnitsInRect, getUnitsOfPlayer, isBuilding, isUnitType,
} from 'lib/unit';
import {
  AsyncQueue, pickRandom, rangeBetween, waitUntil,
} from 'lib/utils';
import { BaseQuest, BaseQuestProps } from 'quests/base';
import { ShadowFangGate } from 'quests/shadowfang_city/shadowfang_gate';
import {
  Camera, Destructable, sleep, Unit,
} from 'w3ts';

import { dialogues } from './dialogues';

const debug = false;

const defenderIds = [
  UNIT_Peasant,
  UNIT_Footman,
  UNIT_TheCaptain,
  UNIT_Rifleman,
  UNIT_Knight,
  UNIT_Priest,
  UNIT_Sorceress,
  UNIT_MortarTeam,
  UNIT_GryphonRider,
  UNIT_SiegeEngine,
  UNIT_SiegeEngineUpgraded,
  UNIT_FlyingMachine,
].map((t) => t.id);

const deathSounds = {
  [UNIT_VillagerMan.id]: rangeBetween(25, 34).map((i) => dialogues[i]),
  [UNIT_VillagerMan2.id]: rangeBetween(35, 44).map((i) => dialogues[i]),
  [UNIT_VillagerWoman.id]: rangeBetween(45, 54).map((i) => dialogues[i]),
  [UNIT_Footman.id]: rangeBetween(55, 74).map((i) => dialogues[i]),
  [UNIT_Knight.id]: rangeBetween(75, 84).map((i) => dialogues[i]),
  [UNIT_Rifleman.id]: rangeBetween(85, 94).map((i) => dialogues[i]),
  [UNIT_MortarTeam.id]: rangeBetween(95, 104).map((i) => dialogues[i]),
};

// Inially only villagers play death sounds
// Later after wave 4, all units play death sounds
let deathSoundIds = [
  UNIT_VillagerMan.id,
  UNIT_VillagerMan2.id,
  UNIT_VillagerWoman.id,
];

export class UndeadInvasionQuest extends BaseQuest {
  constructor(public globals: BaseQuestProps &{
    undeadBaseRects: rect[],
  }) {
    super(globals);
    void this.register();
  }

  private async register(): Promise<void> {
    const {
      undeadBaseRects,
    } = this.globals;

    playerUndeadInvader.name = 'Undead Forsaken';
    playerUndeadInvader.color = PLAYER_COLOR_PURPLE;

    for (const player of [playerShadowfangCity, playerUndeadInvader]) {
      player.setState(PLAYER_STATE_RESOURCE_GOLD, 3000000);
      player.setState(PLAYER_STATE_RESOURCE_LUMBER, 1500000);
      player.setState(PLAYER_STATE_RESOURCE_FOOD_CAP, 300);
    }

    setAllianceState2Way(playerUndeadInvader, playerMain, 'enemy');
    setAllianceState2Way(playerUndeadInvader, playerShadowfangCity, 'enemy');
    setAllianceState2Way(playerUndeadInvader, playerBlackTurban, 'enemy');
    setAllianceState2Way(playerUndeadInvader, playerHumanAlliance, 'enemy');
    setAllianceState2Way(playerUndeadInvader, playerOrcishHorde, 'enemy');

    await this.waitDependenciesDone();
    await sleep(1);
    await waitUntil(1, () => undeadBaseRects.every((rect) => !isRectVisible(rect, playerMain)));

    if (debug) {
      setAllianceState2Way(playerShadowfangCity, playerMain, 'allied share advanced');
    } else {
      setAllianceState2Way(playerShadowfangCity, playerMain, 'allied vision');
    }

    const lumberMill = undeadBaseRects.flatMap((rect) => getUnitsInRect(rect, (u) => u.typeId === UNIT_LumberMillQuest.id && u.owner === playerShadowfangCity))[0];
    if (lumberMill) {
      lumberMill.shareVision(playerMain, true);
    }

    const spawnLoc: Loc = {
      x: playerUndeadInvader.startLocationX,
      y: playerUndeadInvader.startLocationY,
    };

    const citadel = Unit.create(
      playerUndeadInvader,
      UNIT_BlackCitadel.id,
      spawnLoc.x,
      spawnLoc.y,
    );
    citadel.addAbility(ABILITY_BlightGrowthLarge.id);
    citadel.invulnerable = true;

    const acolyte = Unit.create(
      playerUndeadInvader,
      UNIT_Acolyte.id,
      spawnLoc.x,
      spawnLoc.y,
    );
    acolyte.moveSpeed = 400;
    acolyte.invulnerable = true;

    if (debug) {
      // Create full base
      const startingUnits: Record<string, number> = {
        [UNIT_AltarofDarkness.code]: 1,
        [UNIT_Crypt.code]: 2,
        [UNIT_Slaughterhouse.code]: 2,
        [UNIT_TempleoftheDamned.code]: 2,
        [UNIT_Boneyard.code]: 2,
        [UNIT_Graveyard.code]: 1,
        [UNIT_TombOfRelics.code]: 1,
        [UNIT_SacrificialPit.code]: 1,
        [UNIT_Ziggurat.code]: 13,
      };
      for (const [code, count] of Object.entries(startingUnits)) {
        for (let i = 0; i < count; i++) {
          const loc = PolarProjection(fromTempLocation(playerUndeadInvader.startLocationPoint), GetRandomReal(500, 1000), GetRandomDirectionDeg());
          Unit.create(playerUndeadInvader, FourCC(code), loc.x, loc.y);
        }
      }
    }

    // Fast building
    buildTrigger((t) => {
      t.registerPlayerUnitEvent(playerUndeadInvader, EVENT_PLAYER_UNIT_CONSTRUCT_START, null);
      t.addAction(() => {
        const building = Unit.fromHandle(GetConstructingStructure());
        const typeId = building.typeId;
        const loc = currentLoc(building);
        building.destroy();
        const replacement = Unit.create(playerUndeadInvader, typeId, loc.x, loc.y);
        replacement.setAnimation('birth');
        replacement.setTimeScale(10);
        replacement.paused = true;
        setTimeout(6, () => {
          if (!replacement.isAlive()) return;
          replacement.paused = false;
          replacement.setTimeScale(1);
          replacement.setAnimation('stand');
          replacement.queueAnimation('stand');
          replacement.addAbility(ABILITY_BlightGrowthSmall.id);
        });
      });
      setTimeout(600, () => {
        t.destroy();
        acolyte.invulnerable = false;
        citadel.invulnerable = false;
      });
    });

    StartCampaignAI(playerUndeadInvader.handle, 'AIScripts\\undead-invasion.ai');

    const gatherLoc = centerLocRect(gg_rct_Undead_invasion_startXY);
    AiCommand.sendSetStartXy(playerUndeadInvader, gatherLoc.x, gatherLoc.y);
    AiCommand.sendSetTargetPlayerId(playerUndeadInvader, playerShadowfangCity.id);

    StartCampaignAI(playerShadowfangCity.handle, 'AIScripts\\undead-invasion-human-defense.ai');
    AiCommand.sendSetTownXy(playerShadowfangCity, playerShadowfangCity.startLocationX, playerShadowfangCity.startLocationY);

    // Needs async queue to avoid sounds overlap
    const asyncQueue = new AsyncQueue();
    const debug2 = false;

    onChatCommand('-aq', true, () => log(`Async queue: ${asyncQueue.pendingCount()} ${asyncQueue.isRunning() ? 'running' : 'not running'}, jobs: ${asyncQueue.getJobNames().join(', ')}`));

    // Lumber mill is near undead
    void waitUntil(3.123, () => {
      const nearUndeads = getUnitsInRangeOfLoc(1250, lumberMill, (u) => u.owner === playerUndeadInvader && u.isAlive() && u.isVisible(playerShadowfangCity));
      if (nearUndeads.length > 0) {
        debug2 && print('Lumber mill is near undead');
        Camera.panTimed(lumberMill.x, lumberMill.y, 0.5, null);
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Footman, dialogues[0]), 'd0');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_DagrenTheOrcslayer, dialogues[1]), 'd1');

        // a hack to speed up undead's attack on lumber mill
        // lumbermill will occasionally deal 1 damage to nearby undeads to aggro them
        void waitUntil(10, () => {
          const enemy = pickRandom(getUnitsInRangeOfLoc(1250, lumberMill, (u) => u.owner === playerUndeadInvader && u.isAlive() && u.isVisible(playerShadowfangCity)));
          lumberMill.damageTarget(enemy.handle, 1, true, false, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_NORMAL, WEAPON_TYPE_WHOKNOWS);
          return !lumberMill.isAlive();
        });
      }
      return nearUndeads.length > 0;
    });

    // Waves dialogues
    void (async (): Promise<void> => {
      const waitWaveStarts = (): Promise<void> => waitUntil(
        2.123,
        () => getUnitsInRect(
          gg_rct_shadowfang_guards,
          (u2) => u2.owner === playerUndeadInvader && u2.isAlive(),
        ).length > 0,
      );

      const waitWaveEnds = (): Promise<void> => waitUntil(
        2.345,
        () => getUnitsInRect(
          gg_rct_shadowfang_guards,
          (u2) => u2.owner === playerUndeadInvader && u2.isAlive(),
        ).length === 0,
        60,
      );

      // wave 1
      debug2 && print('start wave dialogues');
      await waitWaveStarts();
      debug2 && log('wave 1');
      asyncQueue.addJob(() => playSpeechUnitType(UNIT_Rifleman, dialogues[2]), 'd2');
      asyncQueue.addJob(() => playSpeechUnitType(UNIT_MortarTeam, dialogues[3]), 'd3');
      await waitWaveEnds();

      // wave 2
      await waitWaveStarts();
      debug2 && log('wave 2');
      asyncQueue.addJob(() => playSpeechUnitType(UNIT_Footman, dialogues[4]), 'd4');
      asyncQueue.addJob(() => playSpeechUnitType(UNIT_DagrenTheOrcslayer, dialogues[5]), 'd5');
      await waitWaveEnds();

      // Wave 3 - Necromancer
      await waitWaveStarts();
      debug2 && log('wave 3');
      await waitUntil(3.123, () => { // wait till necromancer are visible
        const necros = getUnitsOfPlayer(playerUndeadInvader, (u) => isUnitType(u, UNIT_Necromancer) && u.isAlive() && u.isVisible(playerShadowfangCity));
        return necros.length > 0;
      });
      asyncQueue.addJob(() => playSpeechUnitType(UNIT_Rifleman, dialogues[6]), 'd6');
      asyncQueue.addJob(() => playSpeechUnitType(UNIT_DagrenTheOrcslayer, dialogues[7]), 'd7');
      await waitWaveEnds();

      // Wave 4 - Abomination
      await waitWaveStarts();
      debug2 && log('wave 4');
      await waitUntil(3.123, () => { // wait till necromancer are visible
        const abom = getUnitsOfPlayer(playerUndeadInvader, (u) => isUnitType(u, UNIT_Abomination) && u.isAlive() && u.isVisible(playerShadowfangCity));
        return abom.length > 0;
      });
      asyncQueue.addJob(() => playSpeechUnitType(UNIT_MortarTeam, dialogues[8]), 'd8');

      await sleep(10);
      // All units will play death sound
      deathSoundIds = Object.keys(deathSounds).map((id) => Number(id));
    })();

    // Gate under attack
    const gate = Destructable.fromHandle(gg_dest_LTg3_4633);
    void waitUntil(1.23, () => {
      const gateDamaged = gate.life < gate.maxLife && gate.life > 0;
      if (gateDamaged) {
        debug2 && print('gate is damaged');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Rifleman, dialogues[9]), 'd9');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Footman, dialogues[10]), 'd10');
      }
      return gateDamaged;
    });

    // Gate about to be destroyed
    void waitUntil(1, () => {
      const gateSevereDamaged = gate.life * 2 < gate.maxLife && gate.life > 0;
      if (gateSevereDamaged) {
        debug2 && print('gate is about to be destroyed');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Footman, dialogues[11]), 'd11');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_DagrenTheOrcslayer, dialogues[12]), 'd12');
      }
      return gateSevereDamaged;
    });

    // Gate is destroyed
    void waitUntil(1, () => {
      const gateDestroyed = ShadowFangGate.gateDestroyed;
      if (gateDestroyed) {
        debug2 && print('gate is about to be destroyed');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Footman, dialogues[23]), 'd23');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_DagrenTheOrcslayer, dialogues[24]), 'd24');

        getUnitsInRect(gg_rct_Shadowfang_soldier_training, (u) => defenderIds.includes(u.typeId) && u.isAlive())
          .forEach((u) => {
            removeGuardPosition(u);
            u.recycleGuardPosition();
          });
      }
      return gateDestroyed;
    });

    // Undead inside
    void waitUntil(4.123, () => {
      const undeadInside = getUnitsInRect(gg_rct_shadowfang_guards_inner, (u) => u.owner === playerUndeadInvader && u.isAlive()).length > 0;

      if (undeadInside) {
        debug2 && print('undead is inside');

        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Footman, dialogues[13]), 'd13');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_MortarTeam, dialogues[14]), 'd14');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Rifleman, dialogues[15]), 'd15');
      }
      return undeadInside;
    });

    // Keep is under attack
    const keep = Unit.fromHandle(gg_unit_hkee_1302);
    void waitUntil(1, () => {
      const keepDamaged = keep.life < keep.maxLife && keep.life > 0;
      if (keepDamaged) {
        debug2 && print('keep is damaged');

        asyncQueue.addJob(() => playSpeechUnitType(UNIT_DagrenTheOrcslayer, dialogues[16]), 'd16');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Footman, dialogues[17]), 'd17');
      }
      return keepDamaged;
    });

    // Keep is about to be destroyed
    void waitUntil(1, () => {
      const keepSevereDamaged = keep.life * 8 < keep.maxLife;
      if (keepSevereDamaged) {
        debug2 && print('keep is about to be destroyed');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_MortarTeam, dialogues[18]), 'd18');
        asyncQueue.addJob(() => playSpeechUnitType(UNIT_Rifleman, dialogues[19]), 'd19');
      }
      return keepSevereDamaged;
    });

    // Units die
    let nextPlayS = 0;
    buildTrigger((t) => {
      t.registerPlayerUnitEvent(playerShadowfangCity, EVENT_PLAYER_UNIT_DEATH, null);
      t.addCondition(() => deathSoundIds.includes(Unit.fromEvent().typeId)
        && Unit.fromHandle(GetKillingUnit()).owner === playerUndeadInvader
        && !asyncQueue.isRunning()
        && nextPlayS <= getTimeS());
      t.addAction(() => {
        const unit = Unit.fromEvent();
        debug2 && print(`${unit.name} dies`);

        const sound = pickRandom(deathSounds[unit.typeId]);
        if (!sound) {
          log('no sound for', unit.name, unit.typeId, deathSounds[unit.typeId].length);
          return;
        }
        // remove from list
        deathSounds[unit.typeId] = deathSounds[unit.typeId].filter((s) => s !== sound);

        asyncQueue.addJob(async () => {
          nextPlayS = getTimeS() + GetRandomInt(20, 40);
          await playSpeech(
            unit,
            sound,
          );
        }, `d-${unit.name}`);
      });
    });

    // Units attacking with voice sounds
    buildTrigger((t) => {
      t.registerPlayerUnitEvent(playerUndeadInvader, EVENT_PLAYER_UNIT_ATTACKED, null);
      t.addCondition(() => GetRandomInt(1, 20) === 1
        && !asyncQueue.isRunning()
        && Unit.fromHandle(GetAttacker()).owner === playerShadowfangCity
        && !isBuilding(Unit.fromHandle(GetAttacker())));
      t.addAction(() => {
        debug2 && log('attacker', Unit.fromHandle(GetAttacker()).name);
        const attacker = Unit.fromHandle(GetAttacker());
        const sound = pickRandom(getUnitSounds(attacker.typeId, 'YesAttack', 'Warcry'));
        if (!sound) return;
        void play3dSound(sound, attacker, GetRandomInt(30, 80));
      });
    });
  }
}
