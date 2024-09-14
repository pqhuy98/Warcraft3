import { getTimeS, setIntervalIndefinite } from 'lib/trigger';
import { Timer } from 'w3ts';

interface Props<T> {
  debugName?: string
  itemExpireS: number,
  capacity?: number,
  cleanUp?: (t: T) => void
}

export class TimestampedQueue<T> {
  private debugName: string;

  private queue: Array<{ timestamp: number, value: T }> = [];

  private startIdx: number = 0;

  private itemExpireS: number;

  private capacity?: number;

  private cleanUp?: (t: T) => void;

  private checkExpiredItemsTimer: Timer;

  private destroyed = false;

  constructor({
    debugName = '', itemExpireS, capacity, cleanUp,
  }: Props<T>) {
    this.debugName = debugName;
    this.itemExpireS = itemExpireS;
    this.capacity = capacity;
    this.cleanUp = cleanUp;
    this.checkExpiredItemsTimer = setIntervalIndefinite(0.5, () => this.checkExpiredItems());
  }

  destroy(): void {
    this.destroyed = true;
  }

  private checkExpiredItems(): void {
    const currentTimeS = getTimeS();
    const oldStartIdx = this.startIdx;
    while (
      this.startIdx < this.queue.length
      && (
        currentTimeS - this.queue[this.startIdx].timestamp > this.itemExpireS
        || (this.capacity != null && this.queue.length - this.startIdx > this.capacity)
      )
    ) {
      this.startIdx++;
    }

    for (let i = oldStartIdx; i < this.startIdx; i++) {
      this.cleanUp?.(this.queue[i].value);
    }

    if (this.startIdx > Math.min(400, this.queue.length / 2)) {
      this.queue = this.queue.slice(this.startIdx);
      this.startIdx = 0;
    }

    if (this.destroyed && this.startIdx === this.queue.length) {
      this.checkExpiredItemsTimer.pause();
      this.checkExpiredItemsTimer.destroy();
      this.queue = [];
      this.cleanUp = undefined;
    }
  }

  push(item: { timestamp: number, value: T }): void {
    this.queue.push(item);
  }

  get(): { timestamp: number, value: T }[] {
    this.checkExpiredItems();
    const items = this.queue.slice(this.startIdx);
    return items;
  }

  getTrueLength(): number {
    return this.queue.length;
  }

  getValidLength(): number {
    return this.queue.length - this.startIdx;
  }
}
