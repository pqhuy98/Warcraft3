import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { TimestampedQueue } from 'lib/data_structures/timestamped_queue';
import { DistanceBetweenLocs, Loc } from 'lib/location';
import { log } from 'lib/log';
import { getCircleCoordinates } from 'lib/maths/geometric_coordinates';
import {
  getTimeS, setIntervalIndefinite,
  setTimeout,
} from 'lib/trigger';
import { pickRandom, shuffleArray } from 'lib/utils';
import { Timer, Trigger, Unit } from 'w3ts';

interface Props {
  unit: Unit,
  radius: number,
  durationS: number,
  terrainTypes: number[],
  onSetTile?: (x: number, y: number) => unknown,
  onUnsetTile?: (x: number, y: number) => unknown
}

export class MovingTerrainEffect {
  private tileQueue: TimestampedQueue<{ loc: Loc, typeId: number }>;

  private timer: Timer;

  private destroyed = false;

  private chatTrigger1: Trigger;

  private chatTrigger2: Trigger;

  constructor({
    unit, radius, durationS, terrainTypes, onSetTile, onUnsetTile,
  }: Props) {
    const terrainTypeSet = new Set(terrainTypes);

    const circleCoordinates = shuffleArray(
      getCircleCoordinates(radius / 32)
        .map((c) => ({ x: c.x * 32, y: c.y * 32 })),
      0.3,
    );
    let idx = 0;

    this.tileQueue = new TimestampedQueue<{ loc: Loc, typeId: number }>({
      debugName: 'terrain',
      itemExpireS: durationS,
      cleanUp: (v): void => {
        if (!this.destroyed && unit.isAlive() && DistanceBetweenLocs(unit, v.loc) <= radius) {
          this.tileQueue.push({
            timestamp: getTimeS(),
            value: v,
          });
        } else {
          setTimeout(GetRandomReal(0.1, 1), () => {
            SetTerrainType(v.loc.x, v.loc.y, v.typeId, -1, 1, 1);
            onUnsetTile?.(v.loc.x, v.loc.y);
          });
        }
      },
    });

    this.chatTrigger1 = onChatCommand('-tcc', true, () => log('circleCoordinates', circleCoordinates.length), 'Debug', 'Show number of circle coordinates.');
    this.chatTrigger2 = onChatCommand('-tqs', true, () => log('titleQueue', this.tileQueue.getValidLength(), this.tileQueue.getTrueLength()), 'Debug', 'Show number of tiles in queue.');

    this.timer = setIntervalIndefinite(0.05, () => {
      if (!unit.isAlive()) return;
      for (let i = 0; i < 20; i++) {
        const { x: dx, y: dy } = circleCoordinates[idx++];
        if (idx >= circleCoordinates.length) {
          idx = 0;
        }

        const x = unit.x + dx;
        const y = unit.y + dy;
        const terrainType = GetTerrainType(x, y);
        if (terrainTypeSet.has(terrainType) || IsPointBlighted(x, y)) {
          continue;
        }

        this.tileQueue.push({
          timestamp: getTimeS(),
          value: {
            loc: { x, y },
            typeId: terrainType,
          },
        });
        SetTerrainType(x, y, pickRandom(terrainTypes), -1, 1, 1);
        onSetTile?.(x, y);
      }
    });
  }

  destroy(): void {
    this.destroyed = true;
    this.tileQueue.destroy();
    this.timer.pause();
    this.timer.destroy();
    this.chatTrigger1.destroy();
    this.chatTrigger2.destroy();
  }
}
