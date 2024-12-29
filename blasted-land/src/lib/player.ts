import { MapPlayer } from 'w3ts';

import { colorize, playerColorToColor } from './colorize';

export const colorizedName = (player: player): string => colorize[playerColorToColor(GetPlayerColor(player))](GetPlayerName(player));

export const displayToPlayer = (player: player, message: string): void => DisplayTextToPlayer(player, 0, 0, message);

export const isPlayingPlayer = (player: player): boolean => GetPlayerController(player) === MAP_CONTROL_USER
  && GetPlayerSlotState(player) === PLAYER_SLOT_STATE_PLAYING;

export const isComputer = (player: MapPlayer): boolean => player.controller === MAP_CONTROL_COMPUTER;

export const isUser = (player: MapPlayer): boolean => player.controller === MAP_CONTROL_USER;

export const hasLeft = (player: player): boolean => GetPlayerSlotState(player) === PLAYER_SLOT_STATE_LEFT;

export function setAllianceState2Way(p1: MapPlayer, p2: MapPlayer, state:
  'enemy' | 'enemy vision' | 'allied' | 'allied vision' | 'allied share unit' | 'allied share advanced' | 'neutral' | 'neutral vision'): void {
  setAllianceState(p1, p2, state);
  setAllianceState(p2, p1, state);
}

export function setAllianceState(p1: MapPlayer, p2: MapPlayer, state:
  'enemy' | 'enemy vision' | 'allied' | 'allied vision' | 'allied share unit' | 'allied share advanced' | 'neutral' | 'neutral vision'): void {
  if (state === 'enemy') {
    SetPlayerAllianceStateBJ(p2.handle, p1.handle, bj_ALLIANCE_UNALLIED);
  } else if (state === 'enemy vision') {
    SetPlayerAllianceStateBJ(p2.handle, p1.handle, bj_ALLIANCE_UNALLIED_VISION);
  } else if (state === 'allied') {
    SetPlayerAllianceStateBJ(p2.handle, p1.handle, bj_ALLIANCE_ALLIED);
  } else if (state === 'allied vision') {
    SetPlayerAllianceStateBJ(p2.handle, p1.handle, bj_ALLIANCE_ALLIED_VISION);
  } else if (state === 'allied share unit') {
    SetPlayerAllianceStateBJ(p2.handle, p1.handle, bj_ALLIANCE_ALLIED_UNITS);
  } else if (state === 'allied share advanced') {
    SetPlayerAllianceStateBJ(p2.handle, p1.handle, bj_ALLIANCE_ALLIED_ADVUNITS);
  } else if (state === 'neutral') {
    SetPlayerAllianceStateBJ(p2.handle, p1.handle, bj_ALLIANCE_NEUTRAL);
  } else if (state === 'neutral vision') {
    SetPlayerAllianceStateBJ(p2.handle, p1.handle, bj_ALLIANCE_NEUTRAL_VISION);
  }
}
