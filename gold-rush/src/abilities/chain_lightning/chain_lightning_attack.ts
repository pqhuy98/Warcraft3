import { ABILITY_ID_LOCUST, BUFF_ID_GENERIC, UNIT_ID_DUMMY } from 'lib/constants';
import { ORDER_chainlightning } from 'lib/resources/war3-orders';
import { buildTrigger } from 'lib/trigger';
import { tieUnitToUnit } from 'lib/unit';
import { Unit } from 'w3ts';

import { ChainLightning } from './chain_lightning';

export class ChainLightningAttack {
  static register(unit: unit, abilityId: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED);
      t.addCondition(() => GetEventDamageSource() === unit
       && BlzGetEventDamageType() === DAMAGE_TYPE_NORMAL
        && !IsUnitAlly(BlzGetEventDamageTarget(), GetOwningPlayer(GetEventDamageSource()))
        && GetUnitAbilityLevel(GetEventDamageSource(), abilityId) > 0);
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
    const order = OrderId2String(ORDER_chainlightning);
    const dummy = new Unit(attacker.owner, UNIT_ID_DUMMY, target.x, target.y, 0);
    dummy.applyTimedLife(BUFF_ID_GENERIC, 5);
    dummy.addAbility(abilityId);
    dummy.setAbilityLevel(abilityId, abilityLevel);
    dummy.addAbility(ABILITY_ID_LOCUST);
    tieUnitToUnit(dummy.handle, target.handle);
    IssueTargetOrder(dummy.handle, order, target.handle);
    ChainLightning.blackListCaster(dummy);
  }
}
