import {
  FOLLOW_MOVEMENT_SPEED,
  REVIVED_ALPHA, REVIVED_BLUE, REVIVED_GREEN, REVIVED_RED,
} from 'abilities/army_of_death/constants';
import { State } from 'abilities/army_of_death/store';
import { MODEL_UndeadDissipate } from 'resources/war3-models';
import { ABILITY_ID_LOCUST, BUFF_ID_GENERIC } from 'utils/constants';
import { getUnitLocation } from 'utils/location';
import { buildTrigger } from 'utils/trigger';
import { Unit } from 'w3ts';

export function collectSouls(s: State) {
  const cleanupOnDeath = buildTrigger((t) => {
    t.addAction(() => {
      const loc = getUnitLocation(Unit.fromEvent());
      const effect = AddSpecialEffectLoc(MODEL_UndeadDissipate, loc);
      DestroyEffect(effect);
      RemoveLocation(loc);

      s.revivedGroup.removeUnit(Unit.fromEvent());
      s.revivedGroupHidden.removeUnit(Unit.fromEvent());
      Unit.fromEvent().destroy();
    });
  });

  buildTrigger((t) => {
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
    t.addCondition(() => {
      const dead = GetDyingUnit();
      return (GetKillingUnit() === s.master.handle || IsUnitInGroup(GetKillingUnit(), s.revivedGroup.handle))
        && !IsUnitType(dead, UNIT_TYPE_STRUCTURE)
        && !IsUnitIllusion(dead)
        && !IsUnitType(dead, UNIT_TYPE_HERO)
        && !IsUnitType(dead, UNIT_TYPE_MECHANICAL)
        && !IsUnitType(dead, UNIT_TYPE_SUMMONED)
        && dead !== s.master.handle;
    });
    t.addAction(() => {
      const dead = Unit.fromHandle(GetDyingUnit());
      const revived = new Unit(s.master.owner, dead.typeId, dead.x, dead.y, dead.facing);

      s.revivedGroup.addUnit(revived);
      revived.addAbility(ABILITY_ID_LOCUST);

      revived.mana = revived.maxMana;
      revived.color = PLAYER_COLOR_COAL;
      revived.moveSpeed = FOLLOW_MOVEMENT_SPEED;
      revived.setVertexColor(REVIVED_RED, REVIVED_GREEN, REVIVED_BLUE, REVIVED_ALPHA);
      revived.invulnerable = true;
      revived.setPathing(false);

      revived.applyTimedLife(BUFF_ID_GENERIC, s.revivedDuration);
      cleanupOnDeath.registerUnitEvent(revived, EVENT_UNIT_DEATH);
    });
  });
}
