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
import { MulticastPoint } from 'abilities/multicast/point';
import { MulticastUnit } from 'abilities/multicast/unit';
import { WarStomp } from 'abilities/war_stomp/index';
import { AllHeroes } from 'ai/all-heroes';
import { importHeroes } from 'utils/heroes';
import { Unit } from 'w3ts';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';

function tsMain() {
  importHeroes();
  new AllHeroes(Player(5));

  Gravity.register(FourCC('A009:ANcl'));
  BladeDance.register(FourCC('A000:AHtb'));
  new ArmyOfDeath(Unit.fromHandle(gg_unit_Osam_0245), FourCC('A004:AHtc'));
  WarStomp.register(FourCC('A00A:AOws'));

  Cheat('warpten');
  Cheat('greedisgood 999999999');
  // Cheat('thereisnospoon');

  MulticastUnit.register();
  MulticastPoint.register();
  // TODO: fix MulticastNoTarget crashes the game on some unknown unit abilities
  MulticastNoTarget.register();
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
