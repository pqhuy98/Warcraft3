import { UNIT_TirionFordring } from 'lib/constants';
import { temp } from 'lib/location';
import {
  UNIT_Abomination,
  UNIT_AnubArak,
  UNIT_Balnazzar,
  UNIT_CairneBloodhoof, UNIT_DagrenTheOrcslayer, UNIT_DarkMinion3, UNIT_Dethecus, UNIT_DrekThar, UNIT_FleshGolem,
  UNIT_Footman, UNIT_FrostWyrm, UNIT_GiantSkeletonWarrior, UNIT_GromHellscream, UNIT_HalahkTheLifebringer, UNIT_HeroBladeMaster,
  UNIT_HeroCryptLord, UNIT_HeroDreadLord, UNIT_HeroFarSeer, UNIT_HeroLich, UNIT_HeroPaladin,
  UNIT_HeroTaurenChieftain, UNIT_Kelthuzadlich, UNIT_MagrothTheDefender, UNIT_Nazgrel, UNIT_PaladinBoss1,
  UNIT_PaladinBoss2, UNIT_Raider, UNIT_SkeletalArcher, UNIT_SkeletalMage, UNIT_SkeletalMarksman,
  UNIT_SkeletalOrc, UNIT_SkeletalOrcChampion, UNIT_SkeletalOrcGrunt, UNIT_SkeletonWarrior, UNIT_TheCaptain,
  UNIT_TYPE,
  UNIT_UndeadAzurelore,
  UNIT_Varimathras,
  UNIT_Vengyr,
} from 'lib/resources/war3-units';
import { buildTrigger } from 'lib/trigger';
import {
  Group, MapPlayer, Rectangle, Unit,
} from 'w3ts';

interface ConversionData {
  baseUnit: UNIT_TYPE
  newUnit: UNIT_TYPE
  chance: number
}

const conversionData: ConversionData[] = [
  // Human
  {
    baseUnit: UNIT_Footman, newUnit: UNIT_TheCaptain, chance: 0.25,
  },
  {
    baseUnit: UNIT_HeroPaladin, newUnit: UNIT_TirionFordring, chance: 0.15,
  },
  {
    baseUnit: UNIT_HeroPaladin, newUnit: UNIT_DagrenTheOrcslayer, chance: 0.15,
  },
  {
    baseUnit: UNIT_HeroPaladin, newUnit: UNIT_HalahkTheLifebringer, chance: 0.15,
  },
  {
    baseUnit: UNIT_HeroPaladin, newUnit: UNIT_MagrothTheDefender, chance: 0.15,
  },
  {
    baseUnit: UNIT_HeroPaladin, newUnit: UNIT_PaladinBoss1, chance: 0.15,
  },
  {
    baseUnit: UNIT_HeroPaladin, newUnit: UNIT_PaladinBoss2, chance: 0.15,
  },
  // Orc
  {
    baseUnit: UNIT_Raider, newUnit: UNIT_Nazgrel, chance: 0.25,
  },
  {
    baseUnit: UNIT_HeroTaurenChieftain, newUnit: UNIT_CairneBloodhoof, chance: 0.5,
  },
  {
    baseUnit: UNIT_HeroFarSeer, newUnit: UNIT_DrekThar, chance: 0.5,
  },
  {
    baseUnit: UNIT_HeroBladeMaster, newUnit: UNIT_GromHellscream, chance: 0.5,
  },
  // Undead
  {
    baseUnit: UNIT_HeroCryptLord, newUnit: UNIT_AnubArak, chance: 0.2,
  },
  {
    baseUnit: UNIT_HeroLich, newUnit: UNIT_Kelthuzadlich, chance: 0.5,
  },
  {
    baseUnit: UNIT_HeroDreadLord, newUnit: UNIT_Balnazzar, chance: 0.2,
  },
  {
    baseUnit: UNIT_HeroDreadLord, newUnit: UNIT_Vengyr, chance: 0.2,
  },
  {
    baseUnit: UNIT_HeroDreadLord, newUnit: UNIT_Dethecus, chance: 0.2,
  },
  {
    baseUnit: UNIT_HeroDreadLord, newUnit: UNIT_Varimathras, chance: 0.2,
  },
  {
    baseUnit: UNIT_Abomination, newUnit: UNIT_FleshGolem, chance: 0.15,
  },
  {
    baseUnit: UNIT_FrostWyrm, newUnit: UNIT_UndeadAzurelore, chance: 0.1,
  },
  {
    baseUnit: UNIT_SkeletonWarrior, newUnit: UNIT_GiantSkeletonWarrior, chance: 0.16,
  },
  {
    baseUnit: UNIT_SkeletonWarrior, newUnit: UNIT_DarkMinion3, chance: 0.16,
  },
  {
    baseUnit: UNIT_SkeletonWarrior, newUnit: UNIT_SkeletalOrc, chance: 0.16,
  },
  {
    baseUnit: UNIT_SkeletonWarrior, newUnit: UNIT_SkeletalOrcGrunt, chance: 0.16,
  },
  {
    baseUnit: UNIT_SkeletonWarrior, newUnit: UNIT_SkeletalOrcChampion, chance: 0.16,
  },
  {
    baseUnit: UNIT_SkeletalMage, newUnit: UNIT_SkeletalArcher, chance: 0.33,
  },
  {
    baseUnit: UNIT_SkeletalMage, newUnit: UNIT_SkeletalMarksman, chance: 0.33,
  },
];

const conversionMap = new Map<number, ConversionData[]>();
const prototypeMap = new Map<number, Unit>();

export class PrototypeUnits {
  static register() {
    const worldBounds = Rectangle.getWorldBounds();

    for (const data of conversionData) {
      const baseTypeId = FourCC(data.baseUnit.code);
      const arr = conversionMap.get(baseTypeId) ?? [];
      conversionMap.set(baseTypeId, [...arr, data]);

      const newTypeId = FourCC(data.newUnit.code);

      const proto = Unit.create(MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE), newTypeId, worldBounds.maxX - 1, worldBounds.maxY - 1);
      proto.show = false;
      prototypeMap.set(newTypeId, proto);
    }

    temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds()))).for(() => {
      if (conversionMap.has(Unit.fromEnum().typeId)) {
        this.replaceUnit(Unit.fromEnum());
      }
    });

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_FINISH);
      t.addCondition(() => conversionMap.has(GetTrainedUnitType()));
      t.addAction(() => {
        this.replaceUnit(Unit.fromHandle(GetTrainedUnit()));
      });
    });

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON);
      t.addCondition(() => conversionMap.has(GetUnitTypeId(GetSummonedUnit())));
      t.addAction(() => {
        this.replaceUnit(Unit.fromHandle(GetSummonedUnit()));
      });
    });
  }

  static replaceUnit(unit: Unit) {
    const validNewUnits = conversionMap.get(unit.typeId);

    const randomResult = chooseRandom(validNewUnits);
    if (!randomResult) return;

    const newTypeId = FourCC(randomResult.code);
    const proto = prototypeMap.get(newTypeId);

    unit.skin = proto.skin;
    unit.name = proto.name;
    if (unit.isHero()) {
      unit.nameProper = proto.nameProper;
    }
    for (let i = 0; i < 2; i++) {
      const damage = Math.max(unit.getBaseDamage(i) * 2, proto.getBaseDamage(i));
      unit.setBaseDamage(damage, i);
    }
    unit.maxLife = Math.max(unit.life * 2, proto.life);
    unit.life = unit.maxLife;
    unit.setflyHeight(proto.getflyHeight(), 0);
  }
}

function chooseRandom(options: ConversionData[]) {
  // Select a unit randomly based on each chance
  const totalChance = options.reduce((sum, option) => sum + option.chance, 0);
  const random = Math.random();

  if (random > totalChance) return null;

  let cumulativeChance = 0;
  for (const option of options) {
    cumulativeChance += option.chance;
    if (random <= cumulativeChance) {
      return option.newUnit;
    }
  }

  // This should never happen
  return options[0].newUnit;
}
