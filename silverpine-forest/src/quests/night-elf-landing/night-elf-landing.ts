import { panCameraSmart } from 'lib/camera';
import {
  mainPlayer,
  playerHumanAlliance,
  playerNightElfSentinels,
} from 'lib/constants';
import { PolarProjection } from 'lib/location';
import { setAllianceState2Way } from 'lib/player';
import { cinematicFadeIn, cinematicFadeOut, cinematicMode } from 'lib/quests/utils';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import {
  UNIT_AncientofWar,
  UNIT_Archer, UNIT_DruidoftheClaw, UNIT_DruidoftheClawMorph, UNIT_DruidoftheTalon, UNIT_DruidoftheTalonMorph, UNIT_Huntress,
} from 'lib/resources/war3-units';
import { setRespawnLoc } from 'lib/systems/hearth_stone';
import { removeGuardPosition } from 'lib/systems/unit_guard_position';
import { setIntervalIndefinite } from 'lib/trigger';
import { getUnitsInRect, getUnitsOfPlayer, isBuilding } from 'lib/unit';
import { pickRandom } from 'lib/utils';
import { BlackTurban } from 'quests/black_turban/black_turban';
import {
  sleep, Sound, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

const maxArmyPerType = new Map<number, number>([
  [UNIT_Archer.id, 4],
  [UNIT_Huntress.id, 4],
  [UNIT_DruidoftheClaw.id, 2],
  [UNIT_DruidoftheTalon.id, 2],
]);

export class NightElfLanding extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    elfHero: Unit
    baseRect: rect
  }) {
    super(globals);
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    this.register();
  }

  private async register(): Promise<void> {
    const {
      baseRect, elfHero,
    } = this.globals;

    await this.waitDependenciesDone();
    BlackTurban.disable();
    getUnitsInRect(GetWorldBounds(), (u) => u.owner === mainPlayer && !u.isHero())
      .forEach((u) => u.destroy());
    mainPlayer.color = PLAYER_COLOR_CYAN;
    mainPlayer.setState(PLAYER_STATE_RESOURCE_GOLD, 1000);
    mainPlayer.setState(PLAYER_STATE_RESOURCE_LUMBER, 500);
    ClearSelectionForPlayer(mainPlayer.handle);
    panCameraSmart(elfHero, 0);
    elfHero.select(true);
    setRespawnLoc(elfHero, elfHero);

    let ancientOfWar: Unit;

    getUnitsInRect(baseRect, (u) => u.owner === playerNightElfSentinels)
      .forEach((u) => {
        if (!isBuilding(u) && !u.isUnitType(UNIT_TYPE_PEON) && !u.isUnitType(UNIT_TYPE_MECHANICAL)) {
          u.owner = mainPlayer;
          removeGuardPosition(u);
        }
        if (u.typeId === UNIT_AncientofWar.id) {
          ancientOfWar = u;
        }
      });

    setAllianceState2Way(mainPlayer, playerHumanAlliance, 'allied');
    setAllianceState2Way(mainPlayer, playerNightElfSentinels, 'allied vision');
    getUnitsInRect(GetWorldBounds())
      .forEach((u) => u.shareVision(mainPlayer, false));

    cinematicMode(true, 0);
    cinematicFadeOut(0);
    await sleep(3);
    cinematicMode(false, 1);
    cinematicFadeIn(3);
    await sleep(5);

    // Auto-spawn units
    await sleep(3);
    ancientOfWar.setAnimation('stand work alternate');
    setIntervalIndefinite(10, (idx) => {
      if (idx === 0 || !ancientOfWar.isAlive()) return;

      const spawnTypes: number[] = [];
      const countMap = getUnitTypeCountMap();
      for (const [typeId, maxCount] of maxArmyPerType) {
        let count = countMap.get(typeId) ?? 0;

        if (typeId === UNIT_DruidoftheTalon.id) {
          count += countMap.get(UNIT_DruidoftheTalonMorph.id) ?? 0;
        } else if (typeId === UNIT_DruidoftheClaw.id) {
          count += countMap.get(UNIT_DruidoftheClawMorph.id) ?? 0;
        }

        if (count < maxCount) {
          spawnTypes.push(typeId);
        }
      }
      if (spawnTypes.length === 0) {
        ResetUnitAnimation(ancientOfWar.handle);
        ancientOfWar.queueAnimation('stand alternate');
        return;
      }

      ancientOfWar.setAnimation('stand work alternate');
      const spawnLoc = PolarProjection(ancientOfWar, 100, 255);
      const spawnUnit = Unit.create(mainPlayer, pickRandom(spawnTypes), spawnLoc.x, spawnLoc.y, 255);
      if (elfHero.isAlive()) {
        spawnUnit.issueTargetOrder(OrderId.Smart, elfHero);
      }

      // Play ready sound
      const soundPath = pickRandom(getUnitSounds(spawnUnit.typeId, 'Ready'));
      if (soundPath) {
        const snd = Sound.create(soundPath, false, false, false, 1, 1, 'DefaultEAXON');
        snd.start();
        snd.killWhenDone();
      }

      PingMinimap(spawnLoc.x, spawnLoc.y, 1);
    });
  }
}

function getUnitTypeCountMap(): Map<number, number> {
  const countMap = new Map<number, number>();
  getUnitsOfPlayer(mainPlayer, (u) => u.isAlive()).forEach((u) => {
    const typeId = u.typeId;
    countMap.set(typeId, (countMap.get(typeId) ?? 0) + 1);
  });
  return countMap;
}
