import { getUnitLocation } from 'lib/location';
import {
  UNIT_Footman, UNIT_Ghoul, UNIT_Grunt, UNIT_Militia, UNIT_Raider, UNIT_SkeletalOrc, UNIT_SkeletonWarrior, UNIT_Zombie,
} from 'lib/resources/war3-units';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import { enumUnitGroupWithDelay, unitPolarProjection } from 'lib/unit';
import { pickRandom } from 'lib/utils';
import {
  Group, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals/order';

const spawnables = [
  UNIT_SkeletonWarrior,
  UNIT_SkeletalOrc,
  UNIT_Footman,
  UNIT_Ghoul,
  UNIT_Zombie,
  UNIT_Militia,
  UNIT_Grunt,
  UNIT_Raider,
];

export class CreepSpawn {
  private spawns: Group;

  constructor(private target: Unit) {
    this.spawns = new Group();
    setIntervalIndefinite(0.2, () => {
      if (!this.target.isAlive()) {
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
  }

  spawnEnemy() {
    if (this.spawns.size >= 80) { return; }

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
    spawn.setPathing(false);
    RemoveGuardPosition(spawn.handle)

    spawn.issueTargetOrder(OrderId.Attack, this.target);
    // spawn.color = PLAYER_COLOR_RED;

    RemoveLocation(targetLoc);
    RemoveLocation(spawnLoc);
  }
}
