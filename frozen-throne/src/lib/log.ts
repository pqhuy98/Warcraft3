/* eslint-disable no-throw-literal */
/* eslint-disable no-template-curly-in-string */

import { colorize } from './colorize';
import { colorizedName } from './player';
import { debounce } from './utils';
import { defineEvent } from './vendors/w3ts-wmmd/index';

export const logEvent = debounce(
  { threshold: 5, duration: 60 },
  defineEvent('log', '${0}: {1}', 'key', 'message'),
);

export const emitLog = (key: string, arg: unknown, ...args: Array<unknown>): void => {
  const allArgs = [arg, ...args];
  const message = allArgs.map((v) => termToString(v, false)).join(' ');
  logEvent(key, message);
  log(key, ...allArgs);
};

const isArray = (obj: unknown): boolean => {
  if (typeof obj !== 'object') return false;

  // Lua uses 1 as the starter index
  return Object.keys(obj).every((v, index) => S2I(v) === index + 1 || S2I(v) === index)
    && (obj[0] != null || obj[1] != null);
};

const userdataType = (userdata: Record<string, unknown>): string => {
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const typeString = userdata.toString();
  return typeString.slice(0, typeString.indexOf(':'));
};

export const termToString = (v: unknown, color = true): string => {
  if (typeof v === 'string') return color ? colorize.string(`"${v}"`) : v;
  if (typeof v === 'number') return color ? colorize.number(v) : v.toString();
  if (typeof v === 'boolean') return color ? colorize.boolean(v) : v.toString();
  if (typeof v === 'function') return color ? colorize.number('[function]') : '[function]';
  if (v == null) return color ? colorize.boolean('null') : 'null';

  if (isArray(v)) {
    const arr = v as Array<unknown>;
    return `[ ${arr.map((v1: unknown) => termToString(v1)).join(', ')} ]`;
  }

  if (typeof v === 'object' && v != null) { return `{ ${Object.entries(v).map(([key, value]) => `${key}: ${termToString(value)}`).join(', ')} }`; }

  const type = userdataType(v as Record<string, unknown>);

  switch (type) {
    case 'player': return `Player ${termToString({ id: GetPlayerId(v as player), name: GetPlayerName(v as player) })}`;
    case 'unit': return `Unit ${termToString({ id: GetHandleId(v as unit), name: GetUnitName(v as unit), owner: colorizedName(GetOwningPlayer(v as unit)) })}`;
    case 'force': {
      const arr: player[] = [];
      ForForce(v as force, () => arr.push(GetEnumPlayer()));
      return `Force ${termToString(arr)}`;
    }
    default: {
      let handleId = -1;
      try {
        handleId = GetHandleId(v as handle);
      } catch (err) { /* do nothing */ }

      return `[${type}(${handleId === -1 ? 'not-handle' : handleId})]`;
    }
  }
};

export const log = (...args: Array<unknown>): void => BJDebugMsg(args.map((v) => termToString(v)).join(' '));
