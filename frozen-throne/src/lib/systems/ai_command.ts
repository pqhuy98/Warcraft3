import { log } from 'lib/log';
import { MapPlayer } from 'w3ts';

export enum Command {
  NONE = -1,

  COMMAND_SET_START_XY = 1,
  COMMAND_SET_TARGET_PLAYER_ID = 2,
  COMMAND_ADD_GUARD_POS = 3,
  COMMAND_SET_TOWN_XY = 4,

  COMMAND_INCLUDE_HEROES = 1001
}

const debug = false;

export class AiCommand {
  static sendSetStartXy(player: MapPlayer, x: number, y: number): void {
    debug && log('sendSetStartXy', x, y);
    this.sendCommand(player, Command.COMMAND_SET_START_XY, [x, y]);
  }

  static sendSetTargetPlayerId(player: MapPlayer, playerId: number): void {
    debug && log('sendSetTargetPlayerId', playerId);
    this.sendCommand(player, Command.COMMAND_SET_TARGET_PLAYER_ID, [playerId]);
  }

  static sendAddGuardPos(player: MapPlayer, unitId: number, x: number, y: number): void {
    debug && log('sendAddGuardPos', unitId, x, y);
    this.sendCommand(player, Command.COMMAND_ADD_GUARD_POS, [unitId, x, y]);
  }

  static sendSetTownXy(player: MapPlayer, x: number, y: number): void {
    debug && log('sendSetTownXy', x, y);
    this.sendCommand(player, Command.COMMAND_SET_TOWN_XY, [x, y]);
  }

  static sendIncludeHeroes(player: MapPlayer): void {
    debug && log('sendIncludeHeroes');
    this.sendCommand(player, Command.COMMAND_INCLUDE_HEROES, [0]);
  }

  private static sendCommand(player: MapPlayer, command: Command, data: number[]): void {
    // Needs to be reversed because AI commands are pushed into a LIFO stack
    // and the last command data is the first to be read.
    for (let i = data.length - 1; i >= 0; i--) {
      CommandAI(player.handle, i === 0 ? command : Command.NONE, Math.round(data[i]));
    }
  }
}
