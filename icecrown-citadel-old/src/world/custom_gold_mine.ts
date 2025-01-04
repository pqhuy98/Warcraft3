import { buildTrigger } from 'lib/trigger';

const UNIT_ID_CUSTOM_HAUNTED_GOLD_MINE = FourCC('u001:ugol');

export function customHauntedGoldMine() {
  buildTrigger((t) => {
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_CONSTRUCT_FINISH);
    t.addCondition(() => GetUnitTypeId(GetConstructedStructure()) === UNIT_ID_CUSTOM_HAUNTED_GOLD_MINE);
    t.addAction(() => {
      SetResourceAmount(GetConstructedStructure(), 50000);
    });
  });
}
