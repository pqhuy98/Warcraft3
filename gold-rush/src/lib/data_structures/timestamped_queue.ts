import { getTimeS } from 'lib/trigger';

export class TimestampedQueue<T> {
  private queue: Array<{ timestamp: number, value: T }> = [];

  private startIdx: number = 0;

  private itemExpireS: number;

  private cleanUp: (t: T) => void;

  constructor({ itemExpireS, cleanUp }: { itemExpireS: number, cleanUp: (t: T) => void }) {
    this.itemExpireS = itemExpireS;
    this.cleanUp = cleanUp;
  }

  private currentTimeS(): number {
    return getTimeS();
  }

  private removeExpiredItems(currentTimeS: number): void {
    while (
      this.startIdx < this.queue.length
      && (currentTimeS - this.queue[this.startIdx].timestamp) > this.itemExpireS
    ) {
      this.cleanUp(this.queue[this.startIdx].value);
      this.startIdx++;
    }

    if (this.startIdx > this.queue.length / 2) {
      this.queue = this.queue.slice(this.startIdx);
      this.startIdx = 0;
    }
  }

  push(item: { timestamp: number, value: T }): void {
    this.removeExpiredItems(this.currentTimeS());
    this.queue.push(item);
  }

  get(limit?: number): { timestamp: number, value: T }[] {
    this.removeExpiredItems(this.currentTimeS());
    const items = this.queue.slice(this.startIdx);
    if (limit !== undefined && limit > 0) {
      return items.slice(-limit);
    }
    return items;
  }
}
