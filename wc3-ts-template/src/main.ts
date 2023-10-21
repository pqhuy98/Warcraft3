/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ArmyOfDeath from 'abilities/army_of_death/index';
import BladeDance from 'abilities/blade_dance/index';
import { Gravity } from 'abilities/gravity/index';
import { MulticastNoTarget } from 'abilities/multicast/no-target';
import { WarStomp } from 'abilities/war_stomp/index';
import { AllHeroes } from 'ai/all-heroes';
import { importHeroes } from 'utils/heroes';
import { Group, Unit } from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

const playerHeroesOfAzeroth = Player(5);

function tsMain() {
  importHeroes();
  new AllHeroes(playerHeroesOfAzeroth);

  Gravity.register(FourCC('A009:ANcl'));
  BladeDance.register(FourCC('A000:AHtb'));
  ArmyOfDeath.register(Unit.fromHandle(gg_unit_Osam_0245), FourCC('A004:AHtc'));
  WarStomp.register(FourCC('A00A:AOws'));

  Cheat('warpten');
  Cheat('greedisgood 999999999');
  Cheat('thereisnospoon');

  // MulticastUnit.register();
  // MulticastPoint.register();
  // TODO: fix MulticastNoTarget crashes the game on some unknown unit abilities
  // MulticastNoTarget.register();
  MulticastNoTarget.register(FourCC('A00A:AOws'));

  configurePlayerColor();
}

function configurePlayerColor() {
  const enemyColor = PLAYER_COLOR_EMERALD;

  for (let i = 0; i < 24; i++) {
    const player = Player(i);
    if (player === playerHeroesOfAzeroth) {
      continue;
    }
    const isAlly = IsPlayerAlly(Player(0), player);
    if (!isAlly) {
      SetPlayerColor(player, enemyColor);
      SetPlayerName(player, 'Dark Forces');
    } else {
      switch (GetPlayerRace(player)) {
        case RACE_HUMAN:
          SetPlayerColor(player, PLAYER_COLOR_LIGHT_BLUE);
          SetPlayerName(player, 'Human Alliances');
          break;
        case RACE_ORC:
          SetPlayerColor(player, PLAYER_COLOR_RED);
          SetPlayerName(player, 'Orcish Horde');
          break;
        case RACE_NIGHTELF:
          SetPlayerColor(player, PLAYER_COLOR_CYAN);
          SetPlayerName(player, 'Night Elf Sentinels');
          break;
        case RACE_UNDEAD:
          SetPlayerColor(player, PLAYER_COLOR_GREEN);
          SetPlayerName(player, 'Undead Scourge');
          break;
        default:
      }
    }
    const playerColor = GetPlayerColor(player);
    const allUnitsOfPlayer = GetUnitsInRectOfPlayer(GetPlayableMapRect(), player);
    Group.fromHandle(allUnitsOfPlayer).for(() => {
      const u = Unit.fromEnum();
      u.color = playerColor;
    });
    DestroyGroup(allUnitsOfPlayer);
  }
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
