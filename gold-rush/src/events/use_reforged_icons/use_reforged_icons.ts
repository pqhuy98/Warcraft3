import { temp } from 'lib/location';
import { buildTrigger } from 'lib/trigger';
import { isDummy } from 'lib/unit';
import { isReforgedForcefully, reforged } from 'lib/utils';
import { Group, Unit } from 'w3ts';

const excludedAbilityIds = [
  FourCC('A00G:AUau'),
  FourCC('Adef'), // Defend
  FourCC('Ablo'), // Bloodlust
];

const abilitySet = new Set<number>(excludedAbilityIds);

export function useReforgedIcons() {
  const units = temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds())));
  units.for(() => updateReforgedIcons(Unit.fromEnum()));

  buildTrigger((t) => {
    TriggerRegisterEnterRectSimple(t.handle, GetEntireMapRect());
    t.registerAnyUnitEvent(EVENT_PLAYER_HERO_SKILL);
    t.addCondition(() => !isDummy(Unit.fromEvent()));
    t.addAction(() => updateReforgedIcons(Unit.fromEvent()));
  });
}

function updateReforgedIcons(unit: Unit) {
  for (let i = 0; ; i++) {
    const ability = unit.getAbilityByIndex(i);
    if (ability) {
      const id = BlzGetAbilityId(ability);
      if (abilitySet.has(id)) {
        continue;
      }
      abilitySet.add(id);
      const iconPath = BlzGetAbilityIcon(id);
      if (!isReforgedForcefully(iconPath)) {
        BlzSetAbilityIcon(id, reforged(BlzGetAbilityIcon(id)));
        BlzSetAbilityActivatedIcon(id, reforged(BlzGetAbilityIcon(id)));
      }
      if (BlzGetAbilityPosY(id) === 2) {
        BlzSetAbilityPosY(id, 0);
        BlzSetAbilityActivatedPosY(id, 0);
      } else if (BlzGetAbilityPosY(id) === 0) {
        BlzSetAbilityPosY(id, 2);
        BlzSetAbilityActivatedPosY(id, 2);
      }
    } else {
      break;
    }
  }
}
