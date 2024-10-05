import {
  playerBlackTurban, playerHumanAlliance, playerMain, playerOrcishHorde, playerShadowfangCity, playerUndeadInvader,
} from 'lib/constants';
import {
  centerLocRect,
  currentLoc, fromTempLocation, isRectVisible, Loc, PolarProjection,
} from 'lib/location';
import { setAllianceState2Way } from 'lib/player';
import { ABILITY_BlightGrowthLarge, ABILITY_BlightGrowthSmall } from 'lib/resources/war3-abilities';
import {
  UNIT_Acolyte, UNIT_AltarofDarkness, UNIT_BlackCitadel, UNIT_Boneyard, UNIT_Crypt,
  UNIT_FlyingMachine,
  UNIT_Footman, UNIT_Graveyard, UNIT_GryphonRider, UNIT_Knight, UNIT_LumberMill, UNIT_MortarTeam, UNIT_Peasant, UNIT_Priest, UNIT_Rifleman, UNIT_SacrificialPit,
  UNIT_SiegeEngine,
  UNIT_SiegeEngineUpgraded,
  UNIT_Slaughterhouse, UNIT_Sorceress, UNIT_TempleoftheDamned, UNIT_TheCaptain, UNIT_TombOfRelics, UNIT_Ziggurat,
} from 'lib/resources/war3-units';
import {
  AiCommand,
} from 'lib/systems/ai_command';
import { removeGuardPosition } from 'lib/systems/unit_guard_position';
import { buildTrigger, setTimeout } from 'lib/trigger';
import { enumUnitsWithDelay, getUnitsInRect, getUnitsOfPlayer } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import { BaseQuest, BaseQuestProps } from 'quests/base';
import { ShadowFangGate } from 'quests/shadowfang_city/shadowfang_gate';
import { sleep, Unit } from 'w3ts';

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

    const lumberMill = undeadBaseRects.flatMap((rect) => getUnitsInRect(rect, (u) => u.typeId === UNIT_LumberMill.id && u.owner === playerShadowfangCity))[0];
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

    // Gate destroyed then
    void waitUntil(1, () => {
      if (ShadowFangGate.gateDestroyed) {
        getUnitsInRect(gg_rct_Shadowfang_soldier_training, (u) => defenderIds.includes(u.typeId) && u.isAlive())
          .forEach((u) => {
            removeGuardPosition(u);
            u.recycleGuardPosition();
          });
        return true;
      }
      return false;
    });

    // Send AddGuardPos
    setTimeout(6, () => {
      const guards = getUnitsOfPlayer(
        playerShadowfangCity,
        (u) => defenderIds.includes(u.typeId),
      );
      enumUnitsWithDelay(guards, (u) => {
        if (defenderIds.includes(u.typeId)) {
          AiCommand.sendAddGuardPos(playerUndeadInvader, u.typeId, u.x, u.y);
          removeGuardPosition(u);
        }
      }, 0.1);
    });
  }
}
