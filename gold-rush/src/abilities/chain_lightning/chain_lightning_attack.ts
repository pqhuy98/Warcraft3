import { ORDER_chainlightning } from 'lib/resources/war3-orders';
import { buildTrigger } from 'lib/trigger';
import { createDummy, tieUnitToUnit } from 'lib/unit';
import { Unit } from 'w3ts';

import { ChainLightningMulticast } from './chain_lightning_multicast';

export class ChainLightningAttack {
  static register(abilityId: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED);
      t.addCondition(() => GetUnitAbilityLevel(GetEventDamageSource(), abilityId) > 0
        && BlzGetEventDamageType() === DAMAGE_TYPE_NORMAL
        && !IsUnitAlly(BlzGetEventDamageTarget(), GetOwningPlayer(GetEventDamageSource())));
      t.addAction(() => {
        new ChainLightningAttack(
          abilityId,
          Unit.fromHandle(GetEventDamageSource()),
          Unit.fromHandle(BlzGetEventDamageTarget()),
          GetUnitAbilityLevel(GetEventDamageSource(), abilityId),
        );
      });
    });
  }

  constructor(
    abilityId:number,
    attacker: Unit,
    target: Unit,
    abilityLevel: number,
  ) {
    const dummy = createDummy(attacker.owner, target.x, target.y, attacker, 1);
    ChainLightningMulticast.blackListCaster(dummy);
    dummy.addAbility(abilityId);
    dummy.setAbilityLevel(abilityId, abilityLevel);
    tieUnitToUnit(dummy, target);
    dummy.issueTargetOrder(ORDER_chainlightning, target);
  }
}
