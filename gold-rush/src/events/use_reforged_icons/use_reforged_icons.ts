import { temp } from 'lib/location';
import { buildTrigger } from 'lib/trigger';
import { isDummy } from 'lib/unit';
import { Group, Unit } from 'w3ts';

const excludedAbilityIds = [
  FourCC('A00G:AUau'),
];

const abilitySet = new Set<number>(excludedAbilityIds);

export function useReforgedIcons() {
  const units = temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds())));
  units.for(() => updateReforgedIcons(Unit.fromEnum()));

  buildTrigger((t) => {
    TriggerRegisterEnterRectSimple(t.handle, GetEntireMapRect());
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
      const iconPath = BlzGetAbilityIcon(id);
      if (!iconPath.startsWith('_hd.w3mod:')) {
        BlzSetAbilityIcon(id, `_hd.w3mod:${BlzGetAbilityIcon(id)}`);
        BlzSetAbilityActivatedIcon(id, `_hd.w3mod:${BlzGetAbilityIcon(id)}`);
      }
    } else {
      break;
    }
  }
}
