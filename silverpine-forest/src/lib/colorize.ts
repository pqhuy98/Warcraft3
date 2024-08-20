const color = {
  red: '|cffff0303',
  blue: '|cff0042ff',
  teal: '|cff1ce6b9',
  purple: '|cff540081',
  yellow: '|cfffffc00',
  orange: '|cfffe8a0e',
  green: '|cff20c000',
  pink: '|cffe55bb0',
  gray: '|cff959697',
  lightblue: '|cff7ebff1',
  darkgreen: '|cff106246',
  brown: '|cff4a2a04',

  maroon: '|cff9b0000',
  navy: '|cff0000c3',
  turquoise: '|cff00eaff',
  violet: '|cffbe00fe',
  wheat: '|cffebcd87',
  peach: '|cfff8a48b',
  mint: '|cffbfff80',
  lavender: '|cffdcb9eb',
  coal: '|cff282828',
  snow: '|cffebf0ff',
  emerald: '|cff00781e',
  peanut: '|cffa46f33',

  sheepblue: '|CFF3F81F8',
  wolfred: '|CFFC00040',
  gold: '|CFFD9D919',

  string: '|cffce915b',
  number: '|cffdcdc8b',
  boolean: '|cff569cd6',
  white: '|cffffffff',
};

export type Color = keyof typeof color;

const wc3ColorMap: Map<playercolor, Color> = new Map();
wc3ColorMap.set(PLAYER_COLOR_RED, 'red');
wc3ColorMap.set(PLAYER_COLOR_BLUE, 'blue');
wc3ColorMap.set(PLAYER_COLOR_CYAN, 'teal');
wc3ColorMap.set(PLAYER_COLOR_PURPLE, 'purple');
wc3ColorMap.set(PLAYER_COLOR_YELLOW, 'yellow');
wc3ColorMap.set(PLAYER_COLOR_ORANGE, 'orange');
wc3ColorMap.set(PLAYER_COLOR_GREEN, 'green');
wc3ColorMap.set(PLAYER_COLOR_PINK, 'pink');
wc3ColorMap.set(PLAYER_COLOR_LIGHT_GRAY, 'gray');
wc3ColorMap.set(PLAYER_COLOR_LIGHT_BLUE, 'lightblue');
wc3ColorMap.set(PLAYER_COLOR_AQUA, 'darkgreen');
wc3ColorMap.set(PLAYER_COLOR_BROWN, 'brown');
wc3ColorMap.set(PLAYER_COLOR_MAROON, 'maroon');
wc3ColorMap.set(PLAYER_COLOR_NAVY, 'navy');
wc3ColorMap.set(PLAYER_COLOR_TURQUOISE, 'turquoise');
wc3ColorMap.set(PLAYER_COLOR_VIOLET, 'violet');
wc3ColorMap.set(PLAYER_COLOR_WHEAT, 'wheat');
wc3ColorMap.set(PLAYER_COLOR_PEACH, 'peach');
wc3ColorMap.set(PLAYER_COLOR_MINT, 'mint');
wc3ColorMap.set(PLAYER_COLOR_LAVENDER, 'lavender');
wc3ColorMap.set(PLAYER_COLOR_COAL, 'coal');
wc3ColorMap.set(PLAYER_COLOR_SNOW, 'snow');
wc3ColorMap.set(PLAYER_COLOR_EMERALD, 'emerald');
wc3ColorMap.set(PLAYER_COLOR_PEANUT, 'peanut');

export const playerColorToColor = (playerColor: playercolor): Color => wc3ColorMap.get(playerColor) ?? 'white';

export const colorize = {} as Record<Color, (v: unknown) => string>;
Object.entries(color).forEach(([color, code]) => {
  colorize[color as Color] = (string: string): string => `${code}${string}|r`;
});
