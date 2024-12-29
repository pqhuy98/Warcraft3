/* eslint-disable no-throw-literal */
/** @noSelfInFile * */

import { addScriptHook, W3TS_HOOK } from 'w3ts';

const ESCAPED_CHARS = ' \\';
const OPERATION_MAP = {
  add: '+=',
  sub: '-=',
  set: '=',
};

let cache: gamecache;
let messageId = 0;

let ready = false;
// a queue that may build up until init has finished
let queue: string[] = [];

let stopInitFlag = false;

/**
 * Escapes w3mmd control characters (" " and "\")
 * @param value String to replace control characters on
 */
export const pack = (value: string): string => {
  let result = '';

  for (let i = 0; i < value.length; i++) {
    let c = value[i];

    for (let j = 0; j < ESCAPED_CHARS.length; j++) {
      // escape control characters
      if (c === ESCAPED_CHARS[j]) {
        c = `\\${c}`;
        break;
      }
    }

    result += c;
  }

  return result;
};

/**
 * Emits a message to be consumed by a parser
 * @param message String to be consumed
 */
export const emit = (message: string): void => {
  // We block and queue messages if init hasn't finished yet
  if (!message.startsWith('init') && !ready) {
    queue.push(message);
    return;
  }

  const thisMessageId = messageId++;

  // grab a player to emit the message
  let emitter: player | null = null;
  let remainingTries = 1000;
  while (emitter == null && remainingTries-- > 0) {
    const testPlayer = Player(GetRandomInt(0, bj_MAX_PLAYERS));

    if (
      testPlayer
      && GetPlayerController(testPlayer) === MAP_CONTROL_USER
      && GetPlayerSlotState(testPlayer) === PLAYER_SLOT_STATE_PLAYING
    ) {
      emitter = testPlayer;
    }
  }
  if (!emitter) throw 'w3mmd: could not find an emitter';

  // only the emitter should emit 😃
  if (emitter === GetLocalPlayer()) {
    StoreInteger(
      cache,
      `val:${thisMessageId}`,
      message,
      (thisMessageId * message.length) % 127,
    );
    SyncStoredInteger(cache, `val:${thisMessageId}`, message);
  }
};

/**
 * Sets a player's flag to be consumed by a parser
 * @param player Player for who the flag is set
 * @param flag The flag value
 */
export const setPlayerFlag = (
  player: player,
  flag: 'drawer' | 'loser' | 'winner' | 'leaver' | 'practicing',
): void => {
  emit(`FlagP ${GetPlayerId(player)} ${flag}`);
};

export interface FixedLengthArray<T, L extends number> extends Array<T> {
  length: L;
}

/**
 * Defines an event that will occur multiple times. Returns a function that
 * allows logging th event
 * @param name The name of the event. Should be between 1 and 32 characters.
 * @param format String to format an event into a user-consumable string. E.g.,
 *               For a player kills player event, we'd do "{0} killed {1}",
 *               where {0} is the first argument (the killer) and {1} is the
 *               second argument (the victim).
 * @param args Name of the arguments. E.g., [ "killer", "victim" ].
 */
export const defineEvent = <L extends number>(
  name: string,
  format: string,
  ...args: FixedLengthArray<string, L>
): (...args: FixedLengthArray<string, L>) => void => {
  const packedName = pack(name);
  const packedArgs = args.map((arg) => pack(arg)).join(' ');
  const finalArgs = args.length > 0
    ? `${args.length} ${packedArgs}`
    : args.length;

  emit(`DefEvent ${packedName} ${finalArgs} ${pack(format)}`);

  return (...args1: FixedLengthArray<string, L>): void => {
    const packedArgs1 = args1.map((arg) => pack(arg)).join(' ');
    emit(`Event ${packedName}${args1.length > 0 ? ` ${packedArgs1}` : ''}`);
  };
};

/**
 * Defines a player string value that can be mutated throughout the game.
 * Useful to classifications.
 * @param name Name of the value.
 * @param suggestionType A suggestion for how a parser/viewer should treat the
 *                       value.
 */
export const defineStringValue = (
  name: string,
  suggestionType: 'none' | 'track' | 'leaderboard' = 'none',
): (player: player, value: string) => void => {
  if (name.length > 32) throw `w3mmd: value name '${name}' is too long`;
  if (name.length === 0) throw 'w3mmd: value name is empty';

  const packedName = pack(name);

  emit(`DefVarP ${packedName} string none ${suggestionType}`);

  return (player: player, value: string): void => {
    emit(`VarP ${GetPlayerId(player)} ${packedName} = ${pack(value)}`);
  };
};

/**
 * Defines a player numerical value that can be mutated throughout the game.
 * @param name Name of the value.
 * @param valueType Indicates if the value is an integer (int) or float (real).
 * @param goalType Whether the player is trying to get a high or low value (or
 *                 none).
 * @param suggestionType A suggestion for how a parser/viewer should treat the
 *                       value.
 */
export const defineNumberValue = (
  name: string,
  goalType: 'none' | 'high' | 'low',
  suggestionType: 'none' | 'track' | 'leaderboard' = 'none',
  valueType: 'int' | 'real' = 'int',
): (
  player: player,
  value: number,
  operation?: 'add' | 'sub' | 'set',
) => void => {
  if (name.length > 32) throw `w3mmd: value name '${name}' is too long`;
  if (name.length === 0) throw 'w3mmd: value name is empty';

  const packedName = pack(name);

  emit(`DefVarP ${packedName} ${valueType} ${goalType} ${suggestionType}`);

  return (
    player: player,
    value: number,
    operation: 'add' | 'sub' | 'set' = 'set',
  ): void => {
    const w3mmdOperation = OPERATION_MAP[operation];
    const playerId = GetPlayerId(player);
    emit(`VarP ${playerId} ${packedName} ${w3mmdOperation} ${value}`);
  };
};

/**
 * Emits custom data that may be used by parsers/viewers.
 * @param key A key to identify the data.
 * @param data The data emitted.
 */
export const emitCustom = (key: string, data: string): void => {
  emit(`custom ${pack(key)} ${pack(data)}`);
};

const onReadyHooks: (() => void)[] = [];

/**
 * Adds a callback that will be invoked when w3mmd has finished initializing.
 * @param fn The callback to be invoked.
 */
export const onReady = (fn: () => void): void => {
  onReadyHooks.push(fn);
};

/**
 * Manually sets the internal state to ready and flushes the queue. Called
 * automatically unless `stopInit` is called.
 */
export const flagReady = (): void => {
  ready = true;
  queue.forEach((message) => emit(message));
  queue = [];
  for (const hook of onReadyHooks) hook();
};

/**
 * Manually begins initialization. Called automatically unless `stopInit` is
 * called.
 */
export const init = (): void => {
  emit('init version 1 1');

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const player = Player(i);
    if (
      player
      && GetPlayerController(player) === MAP_CONTROL_USER
      && GetPlayerSlotState(player) !== PLAYER_SLOT_STATE_EMPTY
    ) {
      emit(`init pid ${i} ${pack(GetPlayerName(player) ?? '')}`);
    }
  }

  flagReady();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, (): void => {
  FlushGameCache(InitGameCache('MMD.dat'));
  cache = InitGameCache('MMD.dat')!;

  const t = CreateTimer();
  TimerStart(t, 0, false, () => {
    DestroyTimer(t);

    if (!stopInitFlag) init();
  });
});

/** Stops automatic initialization. */
export const stopInit = (): void => {
  stopInitFlag = true;
};
