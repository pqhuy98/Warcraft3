import { UNIT_LichKing } from 'lib/constants';
import {
  buildTrigger,
} from 'lib/trigger';
import {
  Unit,
} from 'w3ts';

export default class HowOfTerrorLichKing {
  static register(registeredAbilityId: number): void {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_CAST);
      t.addCondition(() => GetSpellAbilityId() === registeredAbilityId
        && Unit.fromEvent().typeId === UNIT_LichKing.id);
      t.addAction(() => {
        Unit.fromEvent().setAnimation(2);
      });
    });

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_ENDCAST);
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === registeredAbilityId
        && Unit.fromEvent().typeId === UNIT_LichKing.id);
      t.addAction(() => {
        Unit.fromEvent().queueAnimation('stand');
      });
    });
  }
}
