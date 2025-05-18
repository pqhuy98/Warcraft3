import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { sleep, TextTag, Unit } from 'w3ts';

import { playerMain } from './constants';
import { Loc } from './location';
import { log } from './log';
import { getUnitScale, getUnitsInRect } from './unit';

export interface TextTagConfig {
  r: number
  g: number
  b: number
  a: number
  lifespan: number
  fadepoint: number
  heightOffset: number
  fontSize: number
  velocityUp: number
  permanent: boolean
}

const defaultSetting: TextTagConfig = {
  r: 255,
  g: 255,
  b: 255,
  a: 255,
  heightOffset: 50,
  fontSize: 7,
  lifespan: 1.5,
  fadepoint: 0,
  velocityUp: 0.005,
  permanent: false,
};

function cf(
  r: number,
  g: number,
  b: number,
  lifespan: number,
  fadepoint: number,
  heightOffset: number,
  fontSize: number,
  velocityUp: number,
  permanent: boolean,
): TextTagConfig {
  return {
    r,
    g,
    b,
    a: 255,
    lifespan,
    fadepoint,
    heightOffset,
    fontSize,
    velocityUp,
    permanent,
  };
}

export const TTSetting = {
  gold: cf(255, 220, 0, 2, 1, 0, 10, 0.03, false),
  lumber: cf(0, 200, 80, 2, 1, 0, 10, 0.03, false),
  bounty: cf(255, 220, 0, 3, 2, 0, 10, 0.03, false),
  lumberBounty: cf(0, 200, 80, 3, 2, 0, 10, 0.03, false),
  xp: cf(111, 111, 255, 2, 1, 0, 10, 0.02, false),
  miss: cf(255, 0, 0, 3, 1, 0, 10, 0.03, false),
  criticalStrike: cf(255, 0, 0, 5, 2, 0, 10, 0.04, false),
  shadowStrike: cf(160, 255, 0, 5, 2, 0, 10, 0.04, false),
  manaBurn: cf(82, 82, 255, 5, 2, 0, 10, 0.04, false),

  heroSoul: cf(255, 0, 0, 5, 2, 0, 15, 0.02, false),

  info: defaultSetting,
  dialogue: {
    ...defaultSetting,
    heightOffset: 150,
    fontSize: 9,
  },
} satisfies Record<string, TextTagConfig>;

export function createTextTag(text: string, loc: Loc, {
  r,
  g,
  b,
  a,
  lifespan,
  fadepoint,
  heightOffset,
  fontSize,
  velocityUp,
  permanent,
}: TextTagConfig): TextTag {
  const tt = TextTag.create();
  tt.setColor(r, g, b, a);
  tt.setLifespan(lifespan);
  tt.setFadepoint(fadepoint);
  tt.setPos(loc.x, loc.y, heightOffset);
  tt.setText(text, fontSize, true);
  tt.setVelocity(0, velocityUp);
  tt.setPermanent(permanent);
  tt.setVisible(true);
  return tt;
}

export function createDialogueTextTag(text: string, unit: Unit, durationS: number): TextTag {
  return createTextTag(text, {
    x: unit.x + 25,
    y: unit.y,
  }, {
    ...TTSetting.dialogue,
    heightOffset: TTSetting.dialogue.heightOffset * getUnitScale(unit),
    lifespan: durationS + 0.5,
    fadepoint: durationS - 0.5,
    velocityUp: 0,
  });
}

export function registerFloatTextExperiments(): void {
  let r = 255;
  let g = 255;
  let b = 255;
  let a = 255;
  let heightOffset = 50;
  let fontSize = 7;
  let lifespan = 1.5;
  let fadepoint = 0;
  let vu = 0.05;
  let permanent = false;

  let ox = 0;
  let af = 8;
  let text = '4564';
  let itv = 1;

  onChatCommand('tc $r $g $b % a', false, (msg) => {
    r = parseInt(msg.split(' ')[1], 10);
    g = parseInt(msg.split(' ')[2], 10);
    b = parseInt(msg.split(' ')[3], 10);
    a = parseInt(msg.split(' ')[4], 10);
  });

  onChatCommand('tho $1', false, (msg) => {
    heightOffset = parseFloat(msg.split(' ')[1]);
  });
  onChatCommand('tf $1', false, (msg) => {
    fontSize = parseFloat(msg.split(' ')[1]);
  });
  onChatCommand('tvu $1', false, (msg) => {
    vu = parseFloat(msg.split(' ')[1]);
  });
  onChatCommand('tl $1', false, (msg) => {
    lifespan = parseFloat(msg.split(' ')[1]);
  });
  onChatCommand('tfp $1', false, (msg) => {
    fadepoint = parseFloat(msg.split(' ')[1]);
  });
  onChatCommand('tpmn $1', false, (msg) => {
    permanent = msg === '1';
  });
  onChatCommand('titv $1', false, (msg) => {
    itv = parseFloat(msg.split(' ')[1]);
  });
  onChatCommand('ttxt $1', false, (msg) => {
    text = msg.split(' ').slice(1).join(' ');
  });
  onChatCommand('tox $1', false, (msg) => {
    ox = parseFloat(msg.split(' ')[1]);
  });
  onChatCommand('taf $1', false, (msg) => {
    af = parseFloat(msg.split(' ')[1]);
  });

  onChatCommand('t', true, () => {
    log('r', r);
    log('g', g);
    log('b', b);
    log('heightOffset', heightOffset);
    log('fontSize', fontSize);
    log('lifespan', lifespan);
    log('fadepoint', fadepoint);
    log('velocityUp', vu);
    log('permanent', permanent);
    log('------');
    log('itv', itv);
    log('text', text);
  });

  const hero = getUnitsInRect(GetWorldBounds(), (u) => u.owner === playerMain && u.isHero())[0];

  onChatCommand('-ttexp', true, async () => {
    for (;;) {
      await sleep(itv);
      const loc = {
        x: hero.x + ox / 100 * text.length * af,
        y: hero.y,
      };

      createTextTag(text, loc, {
        r,
        g,
        b,
        a,
        heightOffset,
        fontSize,
        lifespan,
        fadepoint,
        velocityUp: vu,
        permanent,
      });
    }
  });
}
