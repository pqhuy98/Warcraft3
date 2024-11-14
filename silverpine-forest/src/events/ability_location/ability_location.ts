import { temp } from 'lib/location';
import { buildTrigger } from 'lib/trigger';
import { isDummy } from 'lib/unit';
import { Group, Unit } from 'w3ts';

const excludedAbilityIds = [
  FourCC('A00G:AUau'),
];

const abilitySet = new Set<number>(excludedAbilityIds);

export function registerAbilityLocation(): void {
  const units = temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds())));
  units.for(() => updateAbilityLocation(Unit.fromEnum()));

  buildTrigger((t) => {
    TriggerRegisterEnterRectSimple(t.handle, GetEntireMapRect());
    t.registerAnyUnitEvent(EVENT_PLAYER_HERO_SKILL);
    t.addCondition(() => !isDummy(Unit.fromEvent()));
    t.addAction(() => updateAbilityLocation(Unit.fromEvent()));
  });
}

function updateAbilityLocation(unit: Unit): void {
  for (let i = 0; ; i++) {
    const ability = unit.getAbilityByIndex(i);
    if (ability) {
      const id = BlzGetAbilityId(ability);
      if (abilitySet.has(id)) {
        continue;
      }
      abilitySet.add(id);
      if (BlzGetAbilityPosY(id) === 2) {
        BlzSetAbilityPosY(id, 0);
        BlzSetAbilityActivatedPosY(id, 0);
      } else if (BlzGetAbilityPosY(id) === 0) {
        BlzSetAbilityPosY(id, 2);
        BlzSetAbilityActivatedPosY(id, 2);
      } else if (BlzGetAbilityPosY(id) === 1) {
        if (BlzGetAbilityPosX(id) > 1) {
          BlzSetAbilityPosX(id, BlzGetAbilityPosX(id) - 1);
          BlzSetAbilityActivatedPosX(id, BlzGetAbilityPosX(id) - 1);
        }
      }
    } else {
      break;
    }
  }
}
