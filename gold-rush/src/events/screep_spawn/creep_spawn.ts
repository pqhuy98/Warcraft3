import { AngleBetweenLocs, getUnitXY } from 'lib/location';
import {
  UNIT_Ghoul, UNIT_SkeletalOrc, UNIT_SkeletonWarrior, UNIT_Zombie,
} from 'lib/resources/war3-units';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import { enumUnitsWithDelay, getUnitsFromGroup, unitPolarProjection } from 'lib/unit';
import { pickRandom } from 'lib/utils';
import {
  Group, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals/order';

const spawnables = [
  UNIT_SkeletonWarrior,
  UNIT_SkeletalOrc,
  UNIT_Ghoul,
  UNIT_Zombie,
];

export class CreepSpawn {
  private spawns: Group;

  constructor(private target: Unit) {
    this.spawns = Group.create();
    setIntervalIndefinite(0.2, () => {
      if (!this.target.isAlive() || RectContainsCoords(gg_rct_Region_000, this.target.x, this.target.y)) {
        return;
      }

      this.spawnEnemy();
    });

    setIntervalIndefinite(1, () => {
      if (this.spawns.size > 0) {
        this.spawns.orderTarget(OrderId.Attack, this.target);
      }
    });

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => this.spawns.hasUnit(Unit.fromHandle(GetDyingUnit())));
      t.addAction(() => {
        this.spawns.removeUnit(Unit.fromHandle(GetDyingUnit()));
      });
    });

    buildTrigger((t) => {
      t.registerUnitEvent(this.target, EVENT_UNIT_DEATH);
      t.addAction(() => {
        enumUnitsWithDelay(getUnitsFromGroup(this.spawns.handle), (u) => u.kill(), 0.2);
      });
    });
  }

  spawnEnemy() {
    if (this.spawns.size >= 80) { return; }

    const unitId = FourCC(pickRandom(spawnables).code);

    const targetLoc = getUnitXY(this.target);
    const spawnLoc = unitPolarProjection(this.target, 600, GetRandomDirectionDeg());

    const spawn = Unit.fromHandle(CreateUnit(
      Player(PLAYER_NEUTRAL_AGGRESSIVE),
      unitId,
      spawnLoc.x,
      spawnLoc.y,
      AngleBetweenLocs(spawnLoc, targetLoc),
    ));
    this.spawns.addUnit(spawn);
    spawn.setPathing(false);
    RemoveGuardPosition(spawn.handle);

    spawn.issueTargetOrder(OrderId.Attack, this.target);
  }
}
