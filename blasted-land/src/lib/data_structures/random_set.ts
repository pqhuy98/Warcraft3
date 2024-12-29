export class RandomSet<T> {
  private idxMap: Map<T, number>;

  private list: T[];

  constructor(arr: T[] = []) {
    this.list = [...arr];
    this.idxMap = new Map<T, number>(this.list.map((item, i) => [item, i]));
  }

  /**
   * Inserts a value to the set. Returns true if the value was not present, false otherwise.
   * @param {T} val
   * @returns {boolean}
   */
  insert(val: T): boolean {
    if (this.idxMap.has(val)) {
      return false;
    }
    this.idxMap.set(val, this.list.length);
    this.list.push(val);
    return true;
  }

  /**
   * Removes a value from the set. Returns true if the value was present, false otherwise.
   * @param {T} val
   * @returns {boolean}
   */
  delete(val: T): boolean {
    if (!this.idxMap.has(val)) {
      return false;
    }

    const idx = this.idxMap.get(val);
    const lastElement = this.list[this.list.length - 1];

    // If we're not deleting the last element itself
    if (idx !== this.list.length - 1) {
      this.list[idx] = lastElement;
      this.idxMap.set(lastElement, idx);
    }

    this.list.pop();
    this.idxMap.delete(val);

    return true;
  }

  /**
   * Get a random element from the set.
   * @returns {T}
   */
  getRandom(): T | undefined {
    if (this.list.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }

  get size(): number {
    return this.list.length;
  }

  /**
     * Implementation of the iterable protocol.
     */
  * [Symbol.iterator](): Iterator<T> {
    for (const item of this.list) {
      yield item;
    }
  }

  /**
   * Executes a provided function once for each set element.
   * @param {(value: T, index: number, set: RandomSet<T>) => void} callback
   * @returns {void}
   */
  forEach(callback: (value: T, index: number, set: RandomSet<T>) => void): void {
    for (let i = 0; i < this.list.length; i++) {
      callback(this.list[i], i, this);
    }
  }

  /**
   * Creates a new RandomSet with the results of calling a provided function on every element in the calling set.
   * @param {(value: T, index: number, set: RandomSet<T>) => U} callback
   * @returns {RandomSet<U>}
   */
  map<U>(callback: (value: T, index: number, set: RandomSet<T>) => U): RandomSet<U> {
    const newSet = new RandomSet<U>();
    for (let i = 0; i < this.list.length; i++) {
      newSet.insert(callback(this.list[i], i, this));
    }
    return newSet;
  }

  /**
   * Checks if a value is in the set.
   * @param {T} val
   * @returns {boolean}
   */
  has(val: T): boolean {
    return this.idxMap.has(val);
  }
}
