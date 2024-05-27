import { getUnitLocation } from 'lib/location';
import { UNIT_SkeletalOrc, UNIT_SkeletonWarrior } from 'lib/resources/war3-units';
import { setIntervalIndefinite } from 'lib/trigger';
import { enumUnitGroupWithDelay, unitPolarProjection } from 'lib/unit';
import { pickRandom } from 'lib/utils';
import {
  Group, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals/order';

const spawnables = [
  UNIT_SkeletonWarrior,
  UNIT_SkeletalOrc,
];

export class CreepSpawn {
  private spawns: Group;

  constructor(private target: Unit) {
    this.spawns = new Group();
    setIntervalIndefinite(1, () => {
      if (!this.target.isAlive()) {
        return;
      }

      this.spawnEnemy();

      enumUnitGroupWithDelay(this.spawns.handle, (unit) => {
        Unit.fromHandle(unit).issueTargetOrder(OrderId.Attack, this.target);
      }, 0.1);
    });

    setIntervalIndefinite(5, () => {
      if (this.spawns.size > 0) {
        enumUnitGroupWithDelay(this.spawns.handle, (unit) => {
          Unit.fromHandle(unit).issueTargetOrder(OrderId.Attack, this.target);
        }, 5 / this.spawns.size);
      }
    });
  }

  spawnEnemy() {
    const unitId = FourCC(pickRandom(spawnables).code);

    const targetLoc = getUnitLocation(this.target);
    const spawnLoc = unitPolarProjection(this.target, 600, GetRandomDirectionDeg());

    const spawn = Unit.fromHandle(CreateUnitAtLoc(
      Player(PLAYER_NEUTRAL_AGGRESSIVE),
      unitId,
      spawnLoc,
      AngleBetweenPoints(spawnLoc, targetLoc),
    ));
    this.spawns.addUnit(spawn);

    spawn.issueTargetOrder(OrderId.Attack, this.target);
    spawn.color = PLAYER_COLOR_RED;

    RemoveLocation(targetLoc);
    RemoveLocation(spawnLoc);
  }
}
