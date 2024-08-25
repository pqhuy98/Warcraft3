import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import {
  currentLoc, DistanceBetweenLocs, Loc,
} from 'lib/location';
import { log } from 'lib/log';
import { angleDifference } from 'lib/maths/misc';
import { isPlayingPlayer } from 'lib/player';
import { isAttending } from 'lib/systems/unit_interaction';
import { getTimeS, setIntervalIndefinite } from 'lib/trigger';
import {
  isBuilding, isUnitIdle, setUnitFacingWithRate,
} from 'lib/unit';
import { shuffleArray } from 'lib/utils';
import { Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

interface GuardPositonData {
  position: Loc
  angle: number
  maxRadius: number
  animation: string
  lastBusyTimeS: number
  lastAnimationSetS: number
  paused: boolean
}

const unitPositions = new Map<Unit, GuardPositonData>();

export function setGuardPosition(u: Unit, loc: Loc, facing: number, maxRadius: number = 9999999, animation = '') {
  if (isBuilding(u)) return;
  removeGuardPosition(u);
  unitPositions.set(u, {
    position: loc,
    angle: facing,
    maxRadius,
    animation,
    lastBusyTimeS: -99,
    lastAnimationSetS: -999,
    paused: false,
  });
}

export function guardCurrentPosition(unit: Unit, radius?: number, animation?: string) {
  unit.issueImmediateOrder(OrderId.Stop);
  setGuardPosition(unit, currentLoc(unit), unit.facing, radius, animation);
}

export function removeGuardPosition(...units: Unit[]) {
  for (const u of units) {
    u.removeGuardPosition();
    unitPositions.delete(u);
  }
}

export function pauseGuardPosition(units: Unit[], state: boolean) {
  for (const u of units) {
    u.removeGuardPosition();
    if (unitPositions.has(u)) {
      unitPositions.get(u).paused = state;
    }
  }
}

export function daemonGuardPosition() {
  // setIntervalIndefinite(7, () => {
  //   const units = getUnitsInRect(GetWorldBounds());
  //   if (units.length === 0) return;
  //   enumUnitsWithDelay(getUnitsInRect(GetWorldBounds()), (u) => {
  //     const loc = PolarProjection(u, 300, GetRandomDirectionDeg());
  //     u.issueOrderAt(OrderId.Move, loc.x, loc.y);
  //   }, 7 / units.length);
  // });

  const unitsPerIteration = 50;
  let shuffledUnits: Unit[] = [];
  let currentIndex = 0;

  onChatCommand('-gup', true, () => log('Guard unit positions', shuffledUnits.length), 'Debug', 'Print number of guard unit positions');

  setIntervalIndefinite(0.1, () => {
    const now = getTimeS();

    if (currentIndex >= shuffledUnits.length) {
      if (unitPositions.size === 0) return;
      // Start a new pass: shuffle the units
      shuffledUnits = shuffleArray(Array.from(unitPositions.keys()));
      currentIndex = 0;
    }

    const remainingUnits = shuffledUnits.length - currentIndex;
    const unitsToProcess = Math.min(unitsPerIteration, remainingUnits);

    for (let processedCount = 0; processedCount < unitsToProcess; processedCount++) {
      const unit = shuffledUnits[currentIndex];
      currentIndex++;

      // Check if the unit has been deleted during the pass
      const data = unitPositions.get(unit);
      if (data) {
        updateUnit(unit, data, now);
      }
    }
  });
}

function updateUnit(unit: Unit, data: GuardPositonData, now: number) {
  const {
    position, angle, maxRadius, paused, animation,
  } = data;
  if (!unit.isAlive() || paused || isPlayingPlayer(unit.owner.handle)) return;
  const distance = DistanceBetweenLocs(unit, position);
  if (distance > maxRadius) { // unit too far from guard area
    if (unit.currentOrder !== OrderId.Move) {
      unit.issueOrderAt(OrderId.Move, position.x, position.y);
    }
  } else if (distance > 50) { // unit far from guard position but still within guard area
    if (isUnitIdle(unit) && data.lastBusyTimeS + 1 < now) {
      unit.issueOrderAt(OrderId.Attack, position.x, position.y);
    }
  } else {
    // unit is at guard position
    const angleDiff = angleDifference(unit.facing, angle);
    if (angleDiff > 1) {
      const isUnitAttending = !isAttending(unit);
      if (isUnitIdle(unit) && !isAttending(unit)) {
        if (isUnitAttending) {
          data.lastBusyTimeS = now;
        }
        setUnitFacingWithRate(unit, angle);
      }
    } else {
      if (animation.length > 0 && data.lastAnimationSetS + 1 < data.lastBusyTimeS) {
        ResetUnitAnimation(unit.handle);
        unit.setAnimation(animation);
        data.lastAnimationSetS = now;
      }
    }
  }

  if (!isUnitIdle(unit) || isAttending(unit)) {
    data.lastBusyTimeS = now;
  }
}
