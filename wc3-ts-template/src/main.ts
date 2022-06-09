import { Unit } from 'w3ts';
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BladeDance from 'abilities/blade_dance/index';
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks';
import ArmyOfDeath from 'abilities/army_of_death/index';
import { Gravity } from 'abilities/gravity/index';
import { multicastUnit } from 'abilities/multicast/unit';

function tsMain() {
  Gravity.register(FourCC('A009:ANcl'));
  BladeDance.register(FourCC('A000:AHtb'));
  new ArmyOfDeath(Unit.fromHandle(gg_unit_Osam_0245), FourCC('A004:AHtc'));

  Cheat('warpten');
  Cheat('greedisgood 999999999');
  Cheat('thereisnospoon');

  multicastUnit();
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
