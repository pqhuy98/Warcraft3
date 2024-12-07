import { playerMain } from 'lib/constants';
import { currentLoc, Loc } from 'lib/location';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import {
  ABILITY_AlliedBuilding, ABILITY_NeutralBuilding, ABILITY_PurchaseItem, ABILITY_SellItem,
} from 'lib/resources/war3-abilities';
import {
  UNIT_AltarofElders,
  UNIT_AltarofKings, UNIT_AncientofWar, UNIT_AncientOfWonders, UNIT_ArcaneSanctum, UNIT_Castle, UNIT_GryphonAviary, UNIT_HumanBarracks, UNIT_Keep, UNIT_TownHall, UNIT_Workshop,
} from 'lib/resources/war3-units';
import { buildTrigger, setTimeout } from 'lib/trigger';
import { getUnitsInRect } from 'lib/unit';
import { pickRandom } from 'lib/utils';
import { Trigger, Unit } from 'w3ts';

const itemTypeId = FourCC('I001');

const innMap = new Map<Unit, Trigger>();

export function registerHearthStone(): void {
  // These buildings sell Hearthstone
  const buildingTypeIds = [
    UNIT_HumanBarracks,
    UNIT_Workshop,
    UNIT_ArcaneSanctum,
    UNIT_GryphonAviary,
    UNIT_AltarofKings,
    UNIT_TownHall,
    UNIT_Keep,
    UNIT_Castle,
    UNIT_AncientofWar,
    UNIT_AncientOfWonders,
    UNIT_AltarofElders,
  ].map((unitType) => unitType.id);
  getUnitsInRect(GetWorldBounds(), (u) => buildingTypeIds.includes(u.typeId))
    .forEach((u) => {
      u.addAbility(ABILITY_NeutralBuilding.id); // Select Hero
      u.addAbility(ABILITY_PurchaseItem.id); // Shop Purchase Item
      u.addAbility(ABILITY_SellItem.id); // Sell Items
      u.addAbility(ABILITY_AlliedBuilding.id); // Shop Sharing, Allied Bldg.
      u.addItemToStock(itemTypeId, 1, 1);
    });

  // When acquiring Hearthstone, set inn resurrection location
  buildTrigger((t) => {
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_PICKUP_ITEM);
    t.addCondition(() => GetItemTypeId(GetManipulatedItem()) === itemTypeId
      && Unit.fromHandle(GetManipulatingUnit()).isHero());
    t.addAction(() => {
      const unit = Unit.fromHandle(GetManipulatingUnit());
      setRespawnLoc(unit, currentLoc(unit));
    });
  });

  // Existing player heroes has starting inn
  getUnitsInRect(GetWorldBounds(), (u) => u.isHero() && u.owner === playerMain && !u.isIllusion())
    .forEach((u) => u.addItemById(itemTypeId));
}

export function removeRespawn(unit: Unit): void {
  if (innMap.has(unit)) {
    innMap.get(unit).destroy();
    innMap.delete(unit);
  }
}

export function setRespawnLoc(unit: Unit, loc: Loc): void {
  const respawnLoc = currentLoc(loc); // deep copy

  if (innMap.has(unit)) {
    innMap.get(unit).destroy();
    innMap.delete(unit);
  }

  innMap.set(unit, buildTrigger((t2) => {
    t2.registerDeathEvent(unit);
    t2.addAction(() => {
      setTimeout(10, () => {
        if (!unit.isAlive()) {
          unit.revive(respawnLoc.x, respawnLoc.y, true);
          unit.life = unit.maxLife;
          unit.mana = unit.maxMana;

          const sound = pickRandom(getUnitSounds(unit.typeId, 'Ready'));
          if (sound) {
            const snd = CreateSound(sound, false, false, false, 1, 1, 'DefaultEAXON');
            SetSoundChannel(snd, 4);
            PlaySoundBJ(snd);
            KillSoundWhenDone(snd);
          }
        }
      });
    });
  }));
}
