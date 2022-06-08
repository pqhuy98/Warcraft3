import { Group, Timer, Unit } from 'w3ts';
import { Store } from 'abilities/army_of_death/store';
import { onActivate } from 'abilities/army_of_death/activate';
import { collectSouls } from 'abilities/army_of_death/collect_souls';
import { returnToMaster } from 'abilities/army_of_death/return_to_master';
import { followMaster } from 'abilities/army_of_death/follow_master';

export default class ArmyOfDeath {
  constructor(caster: Unit, abilityId: number) {
    const s: Store = {
      master: caster,
      abilityId,

      revivedGroup: new Group(),
      revivedGroupHidden: new Group(),
      activateUntil: new Timer(),
      activated: false,

      revivedDuration: 180,
      activatedDuration: 20,
    };
    onActivate(s);
    collectSouls(s);
    returnToMaster(s);
    followMaster(s);
  }
}
