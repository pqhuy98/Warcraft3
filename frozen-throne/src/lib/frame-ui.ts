import { chatParamInt, chatParamString, onChatCommand } from 'events/chat_commands/chat_commands.model';
import { Frame } from 'w3ts';

import { playerMain } from './constants';
import { log } from './log';
import { buildTrigger } from './trigger';
import { METAKEY_CONTROL } from './utils';

let isShowUi = false;

export function showUi(show: boolean): void {
  isShowUi = show;
  // Frame.hideOrigin(!isShowUi);
}

export function isShowingUi(): boolean {
  return isShowUi;
}

export function registerFrameUiExperiments(): void {
  buildTrigger((t) => {
    t.registerPlayerKeyEvent(playerMain, OSKEY_Z, METAKEY_CONTROL, true);
    t.addAction(() => {
      if (bj_cineModeAlreadyIn) return;
      showUi(!isShowUi);
    });
  });
  // setTimeout(5, () => QuestLog.hint('You can press Ctrl+Z to hide/show game UI.'));

  const origin = chatParamInt('fo', 0);
  const name = chatParamString('fn', '');
  const idx = chatParamInt('fi', 0);

  const originMap: Record<number, originframetype> = {
    1: ORIGIN_FRAME_CHAT_MSG,
    2: ORIGIN_FRAME_COMMAND_BUTTON,
    3: ORIGIN_FRAME_GAME_UI,
    4: ORIGIN_FRAME_HERO_BAR,
    5: ORIGIN_FRAME_HERO_BUTTON,
    6: ORIGIN_FRAME_HERO_BUTTON_INDICATOR,
    7: ORIGIN_FRAME_HERO_HP_BAR,
    8: ORIGIN_FRAME_HERO_MANA_BAR,
    9: ORIGIN_FRAME_ITEM_BUTTON,
    10: ORIGIN_FRAME_MINIMAP,
    11: ORIGIN_FRAME_MINIMAP_BUTTON,
    12: ORIGIN_FRAME_PORTRAIT,
    13: ORIGIN_FRAME_PORTRAIT_HP_TEXT,
    14: ORIGIN_FRAME_PORTRAIT_MANA_TEXT,
    15: ORIGIN_FRAME_SIMPLE_UI_PARENT,
    16: ORIGIN_FRAME_SYSTEM_BUTTON,
    17: ORIGIN_FRAME_TOOLTIP,
    18: ORIGIN_FRAME_TOP_MSG,
    19: ORIGIN_FRAME_UBERTOOLTIP,
    20: ORIGIN_FRAME_UNIT_MSG,
    21: ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR,
    22: ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR_LABEL,
    23: ORIGIN_FRAME_WORLD_FRAME,
  };

  onChatCommand('ftn', false, () => {
    const frame = Frame.fromName(name.current, idx.current);
    frame.visible = !frame.visible;
    log(frame.id);
  });

  onChatCommand('fto', true, () => {
    const frame = Frame.fromOrigin(originMap[origin.current], idx.current);
    frame.visible = !frame.visible;
    log(frame.id);
  });

  onChatCommand('noui', true, () => {
    Frame.hideOrigin(true);
    const gameUi = forigin(ORIGIN_FRAME_GAME_UI);
    const portrait = forigin(ORIGIN_FRAME_PORTRAIT).parent;
    const map = forigin(ORIGIN_FRAME_MINIMAP);
    const cmd = fname('CommandBarFrame');
    const bottomCenterUi = fname('SimpleInfoPanelUnitDetail').parent;
    const heroes = forigin(ORIGIN_FRAME_HERO_BAR, 0);
    const menus = fname('UpperButtonBarFrame');
    const resources = fname('ResourceBarFrame');
    [
      gameUi,
      portrait,
      cmd,
      bottomCenterUi,
      heroes,
      menus,
      resources,
      map,
    ].forEach((f) => {
      f.visible = true;
    });
    fname('SimpleInventoryCover').alpha = 0;
    const simpleUi = forigin(ORIGIN_FRAME_SIMPLE_UI_PARENT);
    simpleUi.setSize(0, 0.0001);
    fname('ConsoleUIBackdrop').setSize(0, 0.0001);
    fname('ConsoleUI').children[5].visible = false;
    fname('ConsoleUI').children[7].visible = true;
    gameUi.children[5].children[0].visible = true;
    // addBorder(bottomCenterUi);
    // addBorder(resources);
    // addBorder(map);
  });
}

function forigin(origin: originframetype, idx = 0): Frame {
  return Frame.fromOrigin(origin, idx);
}

function fname(name: string, idx = 0): Frame {
  return Frame.fromName(name, idx);
}

// function addBorder(frame: Frame): void {
//   const border = Frame.create('QuestButtonBaseTemplate', Frame.fromName('ConsoleUIBackdrop', 0), 0, 0);
//   border.parent = frame;
//   border.setAllPoints(frame);
//   border.setLevel(-1);
// }
