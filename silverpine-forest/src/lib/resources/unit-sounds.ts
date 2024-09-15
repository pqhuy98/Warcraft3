import { UNIT_HarvestGolem } from 'lib/constants';

import { UNIT_GoblinShredder, UNIT_TYPE } from './war3-units';

/* eslint-disable max-len */
interface SoundGroup {
  FileNames: string,
  DirectoryBase: string,
  Channel: number,
  SoundName: string,
}
export type SoundType = 'What' | 'Pissed' | 'YesAttack' | 'Yes' | 'Ready' | 'Warcry'

type UnitSounds = {
  id: string
  name: string
  sounds: Record<SoundType, SoundGroup[]>
};

const unitSounds: UnitSounds[] = [
  {
    id: 'Hamg',
    name: 'archmage',
    sounds: {
      What: [
        {
          FileNames: 'HeroArchMageWhat1.wav,HeroArchMageWhat2.wav,HeroArchMageWhat3.wav,HeroArchMageWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroArchMagePissed1.wav,HeroArchMagePissed2.wav,HeroArchMagePissed3.wav,HeroArchMagePissed4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMagePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroArchMageYesAttack1.wav,HeroArchMageYesAttack2.wav,HeroArchMageYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 2,
          SoundName: 'HeroArchMageYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroArchMageYes1.wav,HeroArchMageYes2.wav,HeroArchMageYes3.wav,HeroArchMageYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 3,
          SoundName: 'HeroArchMageYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroArchMageReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 4,
          SoundName: 'HeroArchMageReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroArchMageWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWarcry',
        },
      ],
    },
  },
  {
    id: 'Hblm',
    name: 'bloodmage',
    sounds: {
      What: [
        {
          FileNames: 'BloodElfMageWhat1.wav,BloodElfMageWhat2.wav,BloodElfMageWhat3.wav,BloodElfMageWhat4.wav,BloodElfMageWhat5.wav',
          DirectoryBase: 'Units\\Human\\HeroBloodElf\\',
          Channel: 1,
          SoundName: 'BloodElfSorcerorWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BloodElfMagePissed1.wav,BloodElfMagePissed2.wav,BloodElfMagePissed3.wav,BloodElfMagePissed4.wav,BloodElfMagePissed5.wav,BloodElfMagePissed6.wav',
          DirectoryBase: 'Units\\Human\\HeroBloodElf\\',
          Channel: 1,
          SoundName: 'BloodElfSorcerorPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BloodElfMageYesAttack1.wav,BloodElfMageYesAttack2.wav,BloodElfMageYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroBloodElf\\',
          Channel: 2,
          SoundName: 'BloodElfSorcerorYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BloodElfMageYes1.wav,BloodElfMageYes2.wav,BloodElfMageYes3.wav,BloodElfMageYes4.wav,BloodElfMageYes5.wav',
          DirectoryBase: 'Units\\Human\\HeroBloodElf\\',
          Channel: 3,
          SoundName: 'BloodElfSorcerorYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BloodElfMageReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroBloodElf\\',
          Channel: 4,
          SoundName: 'BloodElfSorcerorReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BloodElfMageWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroBloodElf\\',
          Channel: 1,
          SoundName: 'BloodElfSorcerorWarcry',
        },
      ],
    },
  },
  {
    id: 'Hmkg',
    name: 'mountainking',
    sounds: {
      What: [
        {
          FileNames: 'HeroMountainKingWhat1.wav,HeroMountainKingWhat2.wav,HeroMountainKingWhat3.wav,HeroMountainKingWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroMountainKing\\',
          Channel: 1,
          SoundName: 'HeroMountainKingWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroMountainKingPissed1.wav,HeroMountainKingPissed2.wav,HeroMountainKingPissed3.wav,HeroMountainKingPissed4.wav,HeroMountainKingPissed5.wav,HeroMountainKingPissed6.wav,HeroMountainKingPissed7.wav',
          DirectoryBase: 'Units\\Human\\HeroMountainKing\\',
          Channel: 1,
          SoundName: 'HeroMountainKingPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroMountainKingYesAttack1.wav,HeroMountainKingYesAttack2.wav,HeroMountainKingYesAttack3.wav,HeroMountainKingYesAttack4.wav',
          DirectoryBase: 'Units\\Human\\HeroMountainKing\\',
          Channel: 2,
          SoundName: 'HeroMountainKingYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroMountainKingYes1.wav,HeroMountainKingYes2.wav,HeroMountainKingYes3.wav,HeroMountainKingYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroMountainKing\\',
          Channel: 3,
          SoundName: 'HeroMountainKingYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroMountainKingReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroMountainKing\\',
          Channel: 4,
          SoundName: 'HeroMountainKingReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroMountainKingWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroMountainKing\\',
          Channel: 1,
          SoundName: 'HeroMountainKingWarcry',
        },
      ],
    },
  },
  {
    id: 'Hpal',
    name: 'paladin',
    sounds: {
      What: [
        {
          FileNames: 'HeroPaladinWhat1.wav,HeroPaladinWhat2.wav,HeroPaladinWhat3.wav,HeroPaladinWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroPaladinPissed1.wav,HeroPaladinPissed2.wav,HeroPaladinPissed3.wav,HeroPaladinPissed4.wav,HeroPaladinPissed5.wav,HeroPaladinPissed6.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroPaladinYesAttack1.wav,HeroPaladinYesAttack2.wav,HeroPaladinYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 2,
          SoundName: 'HeroPaladinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroPaladinYes1.wav,HeroPaladinYes2.wav,HeroPaladinYes3.wav,HeroPaladinYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 3,
          SoundName: 'HeroPaladinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroPaladinReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 4,
          SoundName: 'HeroPaladinReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroPaladinWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWarcry',
        },
      ],
    },
  },
  {
    id: 'hbot',
    name: 'humantransportship',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'hbsh',
    name: 'humanbattleship',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'hdes',
    name: 'humandestroyer',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'hdhw',
    name: 'dragonhawk',
    sounds: {
      What: [
        {
          FileNames: 'DragonHawkWhat1.wav,DragonHawkWhat2.wav,DragonHawkWhat3.wav,DragonHawkWhat4.wav,DragonHawkWhat5.wav',
          DirectoryBase: 'Units\\Human\\BloodElfDragonHawk\\',
          Channel: 1,
          SoundName: 'BloodElfDragonHawkWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonHawkPissed1.wav,DragonHawkPissed2.wav,DragonHawkPissed3.wav,DragonHawkPissed4.wav,DragonHawkPissed5.wav,DragonHawkPissed6.wav,DragonHawkPissed7.wav,DragonHawkPissed8.wav',
          DirectoryBase: 'Units\\Human\\BloodElfDragonHawk\\',
          Channel: 1,
          SoundName: 'BloodElfDragonHawkPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonHawkYesAttack1.wav,DragonHawkYesAttack2.wav,DragonHawkYesAttack3.wav,DragonHawkYesAttack4.wav,DragonHawkYesAttack5.wav',
          DirectoryBase: 'Units\\Human\\BloodElfDragonHawk\\',
          Channel: 2,
          SoundName: 'BloodElfDragonHawkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonHawkYes1.wav,DragonHawkYes2.wav,DragonHawkYes3.wav,DragonHawkYes4.wav',
          DirectoryBase: 'Units\\Human\\BloodElfDragonHawk\\',
          Channel: 3,
          SoundName: 'BloodElfDragonHawkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonHawkReady1.wav',
          DirectoryBase: 'Units\\Human\\BloodElfDragonHawk\\',
          Channel: 4,
          SoundName: 'BloodElfDragonHawkReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DragonHawkWarcry1.wav',
          DirectoryBase: 'Units\\Human\\BloodElfDragonHawk\\',
          Channel: 1,
          SoundName: 'BloodElfDragonHawkWarcry',
        },
      ],
    },
  },
  {
    id: 'hfoo',
    name: 'footman',
    sounds: {
      What: [
        {
          FileNames: 'FootmanWhat1.wav,FootmanWhat2.wav,FootmanWhat3.wav,FootmanWhat4.wav',
          DirectoryBase: 'Units\\Human\\Footman\\',
          Channel: 1,
          SoundName: 'FootmanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FootmanPissed1.wav,FootmanPissed2.wav,FootmanPissed3.wav,FootmanPissed4.wav',
          DirectoryBase: 'Units\\Human\\Footman\\',
          Channel: 1,
          SoundName: 'FootmanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FootmanYesAttack1.wav,FootmanYesAttack2.wav,FootmanYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\Footman\\',
          Channel: 2,
          SoundName: 'FootmanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FootmanYes1.wav,FootmanYes2.wav,FootmanYes3.wav,FootmanYes4.wav',
          DirectoryBase: 'Units\\Human\\Footman\\',
          Channel: 3,
          SoundName: 'FootmanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FootmanReady1.wav',
          DirectoryBase: 'Units\\Human\\Footman\\',
          Channel: 4,
          SoundName: 'FootmanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'FootmanWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Footman\\',
          Channel: 1,
          SoundName: 'FootmanWarcry',
        },
      ],
    },
  },
  {
    id: 'hgry',
    name: 'gryphonrider',
    sounds: {
      What: [
        {
          FileNames: 'GryphonRiderWhat1.wav,GryphonRiderWhat2.wav,GryphonRiderWhat3.wav,GryphonRiderWhat4.wav,GryphonRiderWhat5.wav',
          DirectoryBase: 'Units\\Human\\GryphonRider\\',
          Channel: 1,
          SoundName: 'GryphonRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GryphonRiderPissed1.wav,GryphonRiderPissed2.wav,GryphonRiderPissed3.wav,GryphonRiderPissed5.wav',
          DirectoryBase: 'Units\\Human\\GryphonRider\\',
          Channel: 1,
          SoundName: 'GryphonRiderPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GryphonRiderYesAttack1.wav,GryphonRiderYesAttack2.wav,GryphonRiderYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\GryphonRider\\',
          Channel: 2,
          SoundName: 'GryphonRiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GryphonRiderYes1.wav,GryphonRiderYes2.wav,GryphonRiderYes3.wav,GryphonRiderYes4.wav,GryphonRiderYes5.wav',
          DirectoryBase: 'Units\\Human\\GryphonRider\\',
          Channel: 3,
          SoundName: 'GryphonRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GryphonRiderReady1.wav',
          DirectoryBase: 'Units\\Human\\GryphonRider\\',
          Channel: 4,
          SoundName: 'GryphonRiderReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GryphonRiderWarcry1.wav',
          DirectoryBase: 'Units\\Human\\GryphonRider\\',
          Channel: 1,
          SoundName: 'GryphonRiderWarcry',
        },
      ],
    },
  },
  {
    id: 'hgyr',
    name: 'flyingmachine',
    sounds: {
      What: [
        {
          FileNames: 'GyrocopterWhat1.wav,GyrocopterWhat2.wav,GyrocopterWhat3.wav,GyrocopterWhat4.wav,GyrocopterWhat5.wav',
          DirectoryBase: 'Units\\Human\\Gyrocopter\\',
          Channel: 1,
          SoundName: 'GyrocopterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GyrocopterPissed1.wav,GyrocopterPissed2.wav,GyrocopterPissed3.wav,GyrocopterPissed4.wav,GyrocopterPissed5.wav,GyrocopterPissed6.wav,GyrocopterPissed7.wav,GyrocopterPissed8.wav',
          DirectoryBase: 'Units\\Human\\Gyrocopter\\',
          Channel: 1,
          SoundName: 'GyrocopterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GyrocopterYesAttack1.wav,GyrocopterYesAttack2.wav,GyrocopterYesAttack3.wav,GyrocopterYesAttack4.wav',
          DirectoryBase: 'Units\\Human\\Gyrocopter\\',
          Channel: 2,
          SoundName: 'GyrocopterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GyrocopterYes1.wav,GyrocopterYes2.wav,GyrocopterYes3.wav,GyrocopterYes4.wav,GyrocopterYes5.wav',
          DirectoryBase: 'Units\\Human\\Gyrocopter\\',
          Channel: 3,
          SoundName: 'GyrocopterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GyrocopterReady1.wav',
          DirectoryBase: 'Units\\Human\\Gyrocopter\\',
          Channel: 4,
          SoundName: 'GyrocopterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GyrocopterWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Gyrocopter\\',
          Channel: 1,
          SoundName: 'GyrocopterWarcry',
        },
      ],
    },
  },
  {
    id: 'hkni',
    name: 'knight',
    sounds: {
      What: [
        {
          FileNames: 'KnightWhat1.wav,KnightWhat2.wav,KnightWhat3.wav,KnightWhat4.wav',
          DirectoryBase: 'Units\\Human\\Knight\\',
          Channel: 1,
          SoundName: 'KnightWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KnightPissed1.wav,KnightPissed2.wav,KnightPissed3.wav,KnightPissed4.wav,KnightPissed5.wav,KnightPissed6.wav',
          DirectoryBase: 'Units\\Human\\Knight\\',
          Channel: 1,
          SoundName: 'KnightPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KnightYesAttack1.wav,KnightYesAttack2.wav,KnightYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\Knight\\',
          Channel: 2,
          SoundName: 'KnightYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KnightYes1.wav,KnightYes2.wav,KnightYes3.wav,KnightYes4.wav',
          DirectoryBase: 'Units\\Human\\Knight\\',
          Channel: 3,
          SoundName: 'KnightYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KnightReady1.wav',
          DirectoryBase: 'Units\\Human\\Knight\\',
          Channel: 4,
          SoundName: 'KnightReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'KnightWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Knight\\',
          Channel: 1,
          SoundName: 'KnightWarcry',
        },
      ],
    },
  },
  {
    id: 'hmil',
    name: 'militia',
    sounds: {
      What: [
        {
          FileNames: 'PeasantWhat1.wav,PeasantWhat2.wav,PeasantWhat3.wav,PeasantWhat4.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 1,
          SoundName: 'PeasantWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PeasantPissed1.wav,PeasantPissed2.wav,PeasantPissed3.wav,PeasantPissed4.wav,PeasantPissed5.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 1,
          SoundName: 'PeasantPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PeasantYesAttack1.wav,PeasantYesAttack2.wav,PeasantYesAttack3.wav,PeasantYesAttack4.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 2,
          SoundName: 'PeasantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PeasantYes1.wav,PeasantYes2.wav,PeasantYes3.wav,PeasantYes4.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 3,
          SoundName: 'PeasantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PeasantReady1.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 4,
          SoundName: 'PeasantReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PeasantWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 1,
          SoundName: 'PeasantWarcry',
        },
      ],
    },
  },
  {
    id: 'hmpr',
    name: 'priest',
    sounds: {
      What: [
        {
          FileNames: 'PriestWhat1.wav,PriestWhat2.wav,PriestWhat3.wav,PriestWhat4.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'PriestWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PriestPissed1.wav,PriestPissed2.wav,PriestPissed3.wav,PriestPissed4.wav,PriestPissed5.wav,PriestPissed6.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'PriestPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PriestYesAttack1.wav,PriestYesAttack2.wav,PriestYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 2,
          SoundName: 'PriestYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PriestYes1.wav,PriestYes2.wav,PriestYes3.wav,PriestYes4.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 3,
          SoundName: 'PriestYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PriestReady1.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 4,
          SoundName: 'PriestReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PriestWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'PriestWarcry',
        },
      ],
    },
  },
  {
    id: 'hmtm',
    name: 'mortarteam',
    sounds: {
      What: [
        {
          FileNames: 'MortarTeamWhat1.wav,MortarTeamWhat2.wav,MortarTeamWhat3.wav,MortarTeamWhat4.wav',
          DirectoryBase: 'Units\\Human\\MortarTeam\\',
          Channel: 1,
          SoundName: 'MortarTeamWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MortarTeamPissed1.wav,MortarTeamPissed2.wav,MortarTeamPissed3.wav,MortarTeamPissed4.wav,MortarTeamPissed5.wav,MortarTeamPissed6.wav,MortarTeamPissed7.wav,MortarTeamPissed8.wav,MortarTeamPissed9.wav',
          DirectoryBase: 'Units\\Human\\MortarTeam\\',
          Channel: 1,
          SoundName: 'MortarTeamPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MortarTeamYesAttack1.wav,MortarTeamYesAttack2.wav,MortarTeamYesAttack3.wav,MortarTeamYesAttack4.wav,MortarTeamYesAttack5.wav',
          DirectoryBase: 'Units\\Human\\MortarTeam\\',
          Channel: 2,
          SoundName: 'MortarTeamYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MortarTeamYes1.wav,MortarTeamYes2.wav,MortarTeamYes3.wav,MortarTeamYes4.wav,MortarTeamYes5.wav,MortarTeamYes6.wav',
          DirectoryBase: 'Units\\Human\\MortarTeam\\',
          Channel: 3,
          SoundName: 'MortarTeamYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MortarTeamReady1.wav',
          DirectoryBase: 'Units\\Human\\MortarTeam\\',
          Channel: 4,
          SoundName: 'MortarTeamReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'MortarTeamWarcry1.wav',
          DirectoryBase: 'Units\\Human\\MortarTeam\\',
          Channel: 1,
          SoundName: 'MortarTeamWarcry',
        },
      ],
    },
  },
  {
    id: 'hmtt',
    name: 'siegeengine',
    sounds: {
      What: [
        {
          FileNames: 'SteamTankWhat1.wav,SteamTankWhat2.wav,SteamTankWhat3.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 1,
          SoundName: 'SteamTankWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SteamTankPissed1.wav,SteamTankPissed2.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 1,
          SoundName: 'SteamTankPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SteamTankYesAttack1.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 2,
          SoundName: 'SteamTankYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SteamTankYes1.wav,SteamTankYes2.wav,SteamTankYes3.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 3,
          SoundName: 'SteamTankYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SteamTankReady1.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 4,
          SoundName: 'SteamTankReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'hpea',
    name: 'peasant',
    sounds: {
      What: [
        {
          FileNames: 'PeasantWhat1.wav,PeasantWhat2.wav,PeasantWhat3.wav,PeasantWhat4.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 1,
          SoundName: 'PeasantWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PeasantPissed1.wav,PeasantPissed2.wav,PeasantPissed3.wav,PeasantPissed4.wav,PeasantPissed5.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 1,
          SoundName: 'PeasantPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PeasantYesAttack1.wav,PeasantYesAttack2.wav,PeasantYesAttack3.wav,PeasantYesAttack4.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 2,
          SoundName: 'PeasantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PeasantYes1.wav,PeasantYes2.wav,PeasantYes3.wav,PeasantYes4.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 3,
          SoundName: 'PeasantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PeasantReady1.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 4,
          SoundName: 'PeasantReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PeasantWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Peasant\\',
          Channel: 1,
          SoundName: 'PeasantWarcry',
        },
      ],
    },
  },
  {
    id: 'hphx',
    name: 'phoenix',
    sounds: {
      What: [
        {
          FileNames: 'PhoenixWhat1.wav,PhoenixWhat2.wav,PhoenixWhat3.wav',
          DirectoryBase: 'Units\\Human\\Phoenix\\',
          Channel: 1,
          SoundName: 'PhoenixWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PhoenixYes3.wav',
          DirectoryBase: 'Units\\Human\\Phoenix\\',
          Channel: 1,
          SoundName: 'PhoenixPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PhoenixYes1.wav,PhoenixYes2.wav,PhoenixYes3.wav',
          DirectoryBase: 'Units\\Human\\Phoenix\\',
          Channel: 2,
          SoundName: 'PhoenixYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PhoenixYes1.wav,PhoenixYes2.wav,PhoenixYes3.wav',
          DirectoryBase: 'Units\\Human\\Phoenix\\',
          Channel: 3,
          SoundName: 'PhoenixYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PhoenixYes1.wav',
          DirectoryBase: 'Units\\Human\\Phoenix\\',
          Channel: 4,
          SoundName: 'PhoenixReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PhoenixYes3.wav',
          DirectoryBase: 'Units\\Human\\Phoenix\\',
          Channel: 1,
          SoundName: 'PhoenixWarcry',
        },
      ],
    },
  },
  {
    id: 'hpxe',
    name: 'phoenixegg',
    sounds: {
      What: [
        {
          FileNames: 'PhoenixEggWhat1.wav',
          DirectoryBase: 'Units\\Human\\Phoenix\\',
          Channel: 1,
          SoundName: 'PhoenixEggWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hrif',
    name: 'rifleman',
    sounds: {
      What: [
        {
          FileNames: 'RiflemanWhat1.wav,RiflemanWhat2.wav,RiflemanWhat3.wav,RiflemanWhat4.wav',
          DirectoryBase: 'Units\\Human\\Rifleman\\',
          Channel: 1,
          SoundName: 'RiflemanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'RiflemanPissed1.wav,RiflemanPissed2.wav,RiflemanPissed3.wav,RiflemanPissed4.wav,RiflemanPissed5.wav,RiflemanPissed6.wav,RiflemanPissed7.wav,RiflemanPissed8.wav',
          DirectoryBase: 'Units\\Human\\Rifleman\\',
          Channel: 1,
          SoundName: 'RiflemanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'RiflemanYesAttack1.wav,RiflemanYesAttack2.wav,RiflemanYesAttack3.wav,RiflemanYesAttack4.wav',
          DirectoryBase: 'Units\\Human\\Rifleman\\',
          Channel: 2,
          SoundName: 'RiflemanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'RiflemanYes1.wav,RiflemanYes2.wav,RiflemanYes3.wav,RiflemanYes4.wav',
          DirectoryBase: 'Units\\Human\\Rifleman\\',
          Channel: 3,
          SoundName: 'RiflemanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'RiflemanReady1.wav',
          DirectoryBase: 'Units\\Human\\Rifleman\\',
          Channel: 4,
          SoundName: 'RiflemanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'RiflemanWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Rifleman\\',
          Channel: 1,
          SoundName: 'RiflemanWarcry',
        },
      ],
    },
  },
  {
    id: 'hrtt',
    name: 'rocketengine',
    sounds: {
      What: [
        {
          FileNames: 'SteamTankWhat1.wav,SteamTankWhat2.wav,SteamTankWhat3.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 1,
          SoundName: 'SteamTankWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SteamTankPissed1.wav,SteamTankPissed2.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 1,
          SoundName: 'SteamTankPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SteamTankYesAttack1.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 2,
          SoundName: 'SteamTankYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SteamTankYes1.wav,SteamTankYes2.wav,SteamTankYes3.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 3,
          SoundName: 'SteamTankYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SteamTankReady1.wav',
          DirectoryBase: 'Units\\Human\\SteamTank\\',
          Channel: 4,
          SoundName: 'SteamTankReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'hsor',
    name: 'sorceress',
    sounds: {
      What: [
        {
          FileNames: 'SorceressWhat1.wav,SorceressWhat2.wav,SorceressWhat3.wav,SorceressWhat4.wav,SorceressWhat5.wav',
          DirectoryBase: 'Units\\Human\\Sorceress\\',
          Channel: 1,
          SoundName: 'SorceressWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SorceressPissed1.wav,SorceressPissed2.wav,SorceressPissed3.wav,SorceressPissed4.wav,SorceressPissed5.wav,SorceressPissed6.wav',
          DirectoryBase: 'Units\\Human\\Sorceress\\',
          Channel: 1,
          SoundName: 'SorceressPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SorceressYesAttack1.wav,SorceressYesAttack2.wav,SorceressYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\Sorceress\\',
          Channel: 2,
          SoundName: 'SorceressYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SorceressYes1.wav,SorceressYes2.wav,SorceressYes3.wav,SorceressYes4.wav',
          DirectoryBase: 'Units\\Human\\Sorceress\\',
          Channel: 3,
          SoundName: 'SorceressYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SorceressReady1.wav',
          DirectoryBase: 'Units\\Human\\Sorceress\\',
          Channel: 4,
          SoundName: 'SorceressReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SorceressWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Sorceress\\',
          Channel: 1,
          SoundName: 'SorceressWarcry',
        },
      ],
    },
  },
  {
    id: 'hspt',
    name: 'spellbreaker',
    sounds: {
      What: [
        {
          FileNames: 'SpellbreakerWhat1.wav,SpellbreakerWhat2.wav,SpellbreakerWhat3.wav,SpellbreakerWhat4.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 1,
          SoundName: 'SpellBreakerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SpellbreakerPissed1.wav,SpellbreakerPissed2.wav,SpellbreakerPissed3.wav,SpellbreakerPissed4.wav,SpellbreakerPissed5.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 1,
          SoundName: 'SpellBreakerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SpellbreakerYesAttack1.wav,SpellbreakerYesAttack2.wav,SpellbreakerYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 2,
          SoundName: 'SpellBreakerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpellbreakerYes1.wav,SpellbreakerYes2.wav,SpellbreakerYes3.wav,SpellbreakerYes4.wav,SpellbreakerYes5.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 3,
          SoundName: 'SpellBreakerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpellbreakerReady1.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 4,
          SoundName: 'SpellBreakerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SpellbreakerWarcry1.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 1,
          SoundName: 'SpellBreakerWarcry',
        },
      ],
    },
  },
  {
    id: 'hwat',
    name: 'waterelemental1',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'WaterElementalYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'WaterElementalYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hwt2',
    name: 'waterelemental2',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'WaterElementalYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'WaterElementalYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hwt3',
    name: 'waterelemental3',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'WaterElementalYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'WaterElementalYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'halt',
    name: 'altarofkings',
    sounds: {
      What: [
        {
          FileNames: 'AltarOfKingsWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\AltarOfKings\\',
          Channel: 1,
          SoundName: 'AltarOfKingsWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'harm',
    name: 'workshop',
    sounds: {
      What: [
        {
          FileNames: 'WorkshopWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\Workshop\\',
          Channel: 1,
          SoundName: 'WorkshopWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hars',
    name: 'arcanesanctum',
    sounds: {
      What: [
        {
          FileNames: 'ArcaneSanctumWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\ArcaneSanctum\\',
          Channel: 1,
          SoundName: 'ArcaneSanctumWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hatw',
    name: 'humanarcanetower',
    sounds: {
      What: [
        {
          FileNames: 'ArcaneTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\HumanTower\\',
          Channel: 1,
          SoundName: 'ArcaneTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hbar',
    name: 'humanbarracks',
    sounds: {
      What: [
        {
          FileNames: 'HumanBarracksWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\HumanBarracks\\',
          Channel: 1,
          SoundName: 'HumanBarracksWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hbla',
    name: 'blacksmith',
    sounds: {
      What: [
        {
          FileNames: 'BlacksmithWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\Blacksmith\\',
          Channel: 1,
          SoundName: 'BlacksmithWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hcas',
    name: 'castle',
    sounds: {
      What: [
        {
          FileNames: 'CastleWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\TownHall\\',
          Channel: 1,
          SoundName: 'CastleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hctw',
    name: 'cannontower',
    sounds: {
      What: [
        {
          FileNames: 'CannonTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\HumanTower\\',
          Channel: 1,
          SoundName: 'CannonTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hgra',
    name: 'gryphonaviary',
    sounds: {
      What: [
        {
          FileNames: 'GryphonAviaryWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\GryphonAviary\\',
          Channel: 1,
          SoundName: 'GryphonAviaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hgtw',
    name: 'guardtower',
    sounds: {
      What: [
        {
          FileNames: 'GuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\HumanTower\\',
          Channel: 1,
          SoundName: 'GuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hhou',
    name: 'farm',
    sounds: {
      What: [
        {
          FileNames: 'FarmWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\Farm\\',
          Channel: 1,
          SoundName: 'FarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hkee',
    name: 'keep',
    sounds: {
      What: [
        {
          FileNames: 'KeepWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\TownHall\\',
          Channel: 1,
          SoundName: 'KeepWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hlum',
    name: 'humanlumbermill',
    sounds: {
      What: [
        {
          FileNames: 'HumanLumberMillWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\HumanLumberMill\\',
          Channel: 1,
          SoundName: 'HumanLumberMillWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hshy',
    name: 'humanshipyard',
    sounds: {
      What: [
        {
          FileNames: 'GoblinShipyardWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\GoblinShipyard\\',
          Channel: 1,
          SoundName: 'GoblinShipyardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'htow',
    name: 'townhall',
    sounds: {
      What: [
        {
          FileNames: 'TownHallWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\TownHall\\',
          Channel: 1,
          SoundName: 'TownHallWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hvlt',
    name: 'arcanevault',
    sounds: {
      What: [
        {
          FileNames: 'ArcaneVaultWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\ArcaneVault\\',
          Channel: 1,
          SoundName: 'ArcaneVaultWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hwtw',
    name: 'scouttower',
    sounds: {
      What: [
        {
          FileNames: 'WatchTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Human\\HumanTower\\',
          Channel: 1,
          SoundName: 'ScoutTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'Obla',
    name: 'blademaster',
    sounds: {
      What: [
        {
          FileNames: 'HeroBladeMasterWhat1.wav,HeroBladeMasterWhat2.wav,HeroBladeMasterWhat3.wav,HeroBladeMasterWhat4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroBladeMasterPissed1.wav,HeroBladeMasterPissed2.wav,HeroBladeMasterPissed3.wav,HeroBladeMasterPissed4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroBladeMasterYesAttack1.wav,HeroBladeMasterYesAttack2.wav,HeroBladeMasterYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 2,
          SoundName: 'HeroBladeMasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroBladeMasterYes1.wav,HeroBladeMasterYes2.wav,HeroBladeMasterYes3.wav,HeroBladeMasterYes4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 3,
          SoundName: 'HeroBladeMasterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroBladeMasterReady1.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 4,
          SoundName: 'HeroBladeMasterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroBladeMasterWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterWarcry',
        },
      ],
    },
  },
  {
    id: 'Ofar',
    name: 'farseer',
    sounds: {
      What: [
        {
          FileNames: 'HeroFarseerWhat1.wav,HeroFarseerWhat2.wav,HeroFarseerWhat3.wav,HeroFarseerWhat4.wav',
          DirectoryBase: 'Units\\Orc\\HeroFarseer\\',
          Channel: 1,
          SoundName: 'HeroFarseerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroFarseerPissed1.wav,HeroFarseerPissed2.wav,HeroFarseerPissed3.wav,HeroFarseerPissed4.wav,HeroFarseerPissed5.wav',
          DirectoryBase: 'Units\\Orc\\HeroFarseer\\',
          Channel: 1,
          SoundName: 'HeroFarseerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroFarseerYesAttack1.wav,HeroFarseerYesAttack2.wav,HeroFarseerYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\HeroFarseer\\',
          Channel: 2,
          SoundName: 'HeroFarseerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroFarseerYes1.wav,HeroFarseerYes2.wav,HeroFarseerYes3.wav,HeroFarseerYes4.wav',
          DirectoryBase: 'Units\\Orc\\HeroFarseer\\',
          Channel: 3,
          SoundName: 'HeroFarseerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroFarseerReady1.wav',
          DirectoryBase: 'Units\\Orc\\HeroFarseer\\',
          Channel: 4,
          SoundName: 'HeroFarseerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroFarseerWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\HeroFarseer\\',
          Channel: 1,
          SoundName: 'HeroFarseerWarcry',
        },
      ],
    },
  },
  {
    id: 'Oshd',
    name: 'shadowhunter',
    sounds: {
      What: [
        {
          FileNames: 'ShadowHunterWhat1.wav,ShadowHunterWhat2.wav,ShadowHunterWhat3.wav,ShadowHunterWhat4.wav,ShadowHunterWhat5.wav',
          DirectoryBase: 'Units\\Orc\\HeroShadowHunter\\',
          Channel: 1,
          SoundName: 'HeroShadowHunterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShadowHunterPissed1.wav,ShadowHunterPissed2.wav,ShadowHunterPissed3.wav,ShadowHunterPissed4.wav,ShadowHunterPissed5.wav,ShadowHunterPissed6.wav,ShadowHunterPissed7.wav,ShadowHunterPissed8.wav,ShadowHunterPissed9.wav',
          DirectoryBase: 'Units\\Orc\\HeroShadowHunter\\',
          Channel: 1,
          SoundName: 'HeroShadowHunterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShadowHunterYesAttack1.wav,ShadowHunterYesAttack2.wav,ShadowHunterYesAttack3.wav,ShadowHunterYesAttack4.wav,ShadowHunterYesAttack5.wav',
          DirectoryBase: 'Units\\Orc\\HeroShadowHunter\\',
          Channel: 2,
          SoundName: 'HeroShadowHunterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShadowHunterYes1.wav,ShadowHunterYes2.wav,ShadowHunterYes3.wav,ShadowHunterYes4.wav,ShadowHunterYes5.wav,ShadowHunterYes6.wav,ShadowHunterYes7.wav',
          DirectoryBase: 'Units\\Orc\\HeroShadowHunter\\',
          Channel: 3,
          SoundName: 'HeroShadowHunterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShadowHunterReady1.wav',
          DirectoryBase: 'Units\\Orc\\HeroShadowHunter\\',
          Channel: 4,
          SoundName: 'HeroShadowHunterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShadowHunterWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\HeroShadowHunter\\',
          Channel: 1,
          SoundName: 'HeroShadowHunterWarcry',
        },
      ],
    },
  },
  {
    id: 'Otch',
    name: 'taurenchieftain',
    sounds: {
      What: [
        {
          FileNames: 'HeroTaurenChieftainWhat1.wav,HeroTaurenChieftainWhat2.wav,HeroTaurenChieftainWhat3.wav,HeroTaurenChieftainWhat4.wav',
          DirectoryBase: 'Units\\Orc\\HeroTaurenChieftain\\',
          Channel: 1,
          SoundName: 'HeroTaurenChieftainWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroTaurenChieftainPissed1.wav,HeroTaurenChieftainPissed2.wav,HeroTaurenChieftainPissed3.wav,HeroTaurenChieftainPissed4.wav,HeroTaurenChieftainPissed5.wav,HeroTaurenChieftainPissed6.wav',
          DirectoryBase: 'Units\\Orc\\HeroTaurenChieftain\\',
          Channel: 1,
          SoundName: 'HeroTaurenChieftainPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroTaurenChieftainYesAttack1.wav,HeroTaurenChieftainYesAttack2.wav,HeroTaurenChieftainYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\HeroTaurenChieftain\\',
          Channel: 2,
          SoundName: 'HeroTaurenChieftainYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroTaurenChieftainYes1.wav,HeroTaurenChieftainYes2.wav,HeroTaurenChieftainYes3.wav,HeroTaurenChieftainYes4.wav',
          DirectoryBase: 'Units\\Orc\\HeroTaurenChieftain\\',
          Channel: 3,
          SoundName: 'HeroTaurenChieftainYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroTaurenChieftainReady1.wav',
          DirectoryBase: 'Units\\Orc\\HeroTaurenChieftain\\',
          Channel: 4,
          SoundName: 'HeroTaurenChieftainReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroTaurenChieftainWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\HeroTaurenChieftain\\',
          Channel: 1,
          SoundName: 'HeroTaurenChieftainWarcry',
        },
      ],
    },
  },
  {
    id: 'nwad',
    name: 'watcherward',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'obot',
    name: 'orcishtransportship',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ocat',
    name: 'demolisher',
    sounds: {
      What: [
        {
          FileNames: 'CatapultWhat1.wav,CatapultWhat2.wav',
          DirectoryBase: 'Units\\Orc\\Catapult\\',
          Channel: 1,
          SoundName: 'CatapultWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'CatapultYesAttack1.wav,CatapultYesAttack2.wav,CatapultYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Catapult\\',
          Channel: 2,
          SoundName: 'CatapultYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CatapultYes1.wav,CatapultYes2.wav,CatapultYes3.wav',
          DirectoryBase: 'Units\\Orc\\Catapult\\',
          Channel: 3,
          SoundName: 'CatapultYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CatapultReady1.wav',
          DirectoryBase: 'Units\\Orc\\Catapult\\',
          Channel: 4,
          SoundName: 'CatapultReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'odes',
    name: 'orcishdestroyer',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'odoc',
    name: 'witchdoctor',
    sounds: {
      What: [
        {
          FileNames: 'WitchDoctorWhat1.wav,WitchDoctorWhat2.wav,WitchDoctorWhat3.wav,WitchDoctorWhat4.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 1,
          SoundName: 'WitchDoctorWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WitchDoctorPissed1.wav,WitchDoctorPissed2.wav,WitchDoctorPissed3.wav,WitchDoctorPissed4.wav,WitchDoctorPissed5.wav,WitchDoctorPissed6.wav,WitchDoctorPissed7.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 1,
          SoundName: 'WitchDoctorPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WitchDoctorYesAttack1.wav,WitchDoctorYesAttack2.wav,WitchDoctorYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 2,
          SoundName: 'WitchDoctorYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WitchDoctorYes1.wav,WitchDoctorYes2.wav,WitchDoctorYes3.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 3,
          SoundName: 'WitchDoctorYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WitchDoctorReady1.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 4,
          SoundName: 'WitchDoctorReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WitchDoctorWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 1,
          SoundName: 'WitchDoctorWarcry',
        },
      ],
    },
  },
  {
    id: 'oeye',
    name: 'sentryward',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ogru',
    name: 'grunt',
    sounds: {
      What: [
        {
          FileNames: 'GruntWhat1.wav,GruntWhat2.wav,GruntWhat3.wav,GruntWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 1,
          SoundName: 'GruntWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GruntPissed1.wav,GruntPissed2.wav,GruntPissed3.wav,GruntPissed4.wav,GruntPissed5.wav,GruntPissed6.wav,GruntPissed7.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 1,
          SoundName: 'GruntPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GruntYesAttack1.wav,GruntYesAttack2.wav,GruntYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 2,
          SoundName: 'GruntYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GruntYes1.wav,GruntYes2.wav,GruntYes3.wav,GruntYes4.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 3,
          SoundName: 'GruntYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GruntReady1.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 4,
          SoundName: 'GruntReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GruntWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 1,
          SoundName: 'GruntWarcry',
        },
      ],
    },
  },
  {
    id: 'ohun',
    name: 'headhunter',
    sounds: {
      What: [
        {
          FileNames: 'HeadHunterWhat1.wav,HeadHunterWhat2.wav,HeadHunterWhat3.wav,HeadHunterWhat4.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 1,
          SoundName: 'HeadHunterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeadHunterPissed1.wav,HeadHunterPissed2.wav,HeadHunterPissed3.wav,HeadHunterPissed4.wav,HeadHunterPissed5.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 1,
          SoundName: 'HeadHunterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeadHunterYesAttack1.wav,HeadHunterYesAttack2.wav,HeadHunterYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 2,
          SoundName: 'HeadHunterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeadHunterYes1.wav,HeadHunterYes2.wav,HeadHunterYes3.wav,HeadHunterYes4.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 3,
          SoundName: 'HeadHunterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeadHunterReady1.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 4,
          SoundName: 'HeadHunterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeadHunterWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 1,
          SoundName: 'HeadHunterWarcry',
        },
      ],
    },
  },
  {
    id: 'ohwd',
    name: 'healingward',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'okod',
    name: 'kotobeast',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav,KotoBeastPissed3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'opeo',
    name: 'peon',
    sounds: {
      What: [
        {
          FileNames: 'PeonWhat1.wav,PeonWhat2.wav,PeonWhat3.wav,PeonWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 1,
          SoundName: 'PeonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PeonPissed1.wav,PeonPissed2.wav,PeonPissed3.wav,PeonPissed4.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 1,
          SoundName: 'PeonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PeonYesAttack1.wav,PeonYesAttack2.wav,PeonYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 2,
          SoundName: 'PeonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PeonYes1.wav,PeonYes2.wav,PeonYes3.wav,PeonYes4.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 3,
          SoundName: 'PeonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PeonReady1.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 4,
          SoundName: 'PeonReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PeonWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 1,
          SoundName: 'PeonWarcry',
        },
      ],
    },
  },
  {
    id: 'orai',
    name: 'wolfrider',
    sounds: {
      What: [
        {
          FileNames: 'WolfriderWhat1.wav,WolfriderWhat2.wav,WolfriderWhat3.wav,WolfriderWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 1,
          SoundName: 'WolfriderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WolfriderPissed1.wav,WolfriderPissed2.wav,WolfriderPissed3.wav,WolfriderPissed4.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 1,
          SoundName: 'WolfriderPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WolfriderYesAttack1.wav,WolfriderYesAttack2.wav,WolfriderYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 2,
          SoundName: 'WolfriderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WolfriderYes1.wav,WolfriderYes2.wav,WolfriderYes3.wav,WolfriderYes4.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 3,
          SoundName: 'WolfriderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WolfriderReady1.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 4,
          SoundName: 'WolfriderReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WolfriderWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 1,
          SoundName: 'WolfriderWarcry',
        },
      ],
    },
  },
  {
    id: 'oshm',
    name: 'shaman',
    sounds: {
      What: [
        {
          FileNames: 'ShamanWhat1.wav,ShamanWhat2.wav,ShamanWhat3.wav,ShamanWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShamanPissed1.wav,ShamanPissed2.wav,ShamanPissed3.wav,ShamanPissed4.wav,ShamanPissed5.wav,ShamanPissed6.wav,ShamanPissed7.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShamanYesAttack1.wav,ShamanYesAttack2.wav,ShamanYesAttack3.wav,ShamanYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 2,
          SoundName: 'ShamanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShamanYes1.wav,ShamanYes2.wav,ShamanYes3.wav,ShamanYes4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 3,
          SoundName: 'ShamanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 4,
          SoundName: 'ShamanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShamanWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanWarcry',
        },
      ],
    },
  },
  {
    id: 'osp1',
    name: 'serpentward1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'osp2',
    name: 'serpentward2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'osp3',
    name: 'serpentward3',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'osp4',
    name: 'serpentward4',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ospm',
    name: 'spiritwalkermorph',
    sounds: {
      What: [
        {
          FileNames: 'WhiteTaurenWhat1.wav,WhiteTaurenWhat2.wav,WhiteTaurenWhat3.wav,WhiteTaurenWhat4.wav,WhiteTaurenWhat5.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 1,
          SoundName: 'SpiritWalkerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WhiteTaurenPissed1.wav,WhiteTaurenPissed2.wav,WhiteTaurenPissed3.wav,WhiteTaurenPissed4.wav,WhiteTaurenPissed5.wav,WhiteTaurenPissed6.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 1,
          SoundName: 'SpiritWalkerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WhiteTaurenYesAttack1.wav,WhiteTaurenYesAttack2.wav,WhiteTaurenYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 2,
          SoundName: 'SpiritWalkerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WhiteTaurenYes1.wav,WhiteTaurenYes2.wav,WhiteTaurenYes3.wav,WhiteTaurenYes4.wav,WhiteTaurenYes5.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 3,
          SoundName: 'SpiritWalkerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WhiteTaurenReady1.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 4,
          SoundName: 'SpiritWalkerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WhiteTaurenWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 1,
          SoundName: 'SpiritWalkerWarcry',
        },
      ],
    },
  },
  {
    id: 'ospw',
    name: 'spiritwalker',
    sounds: {
      What: [
        {
          FileNames: 'WhiteTaurenWhat1.wav,WhiteTaurenWhat2.wav,WhiteTaurenWhat3.wav,WhiteTaurenWhat4.wav,WhiteTaurenWhat5.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 1,
          SoundName: 'SpiritWalkerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WhiteTaurenPissed1.wav,WhiteTaurenPissed2.wav,WhiteTaurenPissed3.wav,WhiteTaurenPissed4.wav,WhiteTaurenPissed5.wav,WhiteTaurenPissed6.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 1,
          SoundName: 'SpiritWalkerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WhiteTaurenYesAttack1.wav,WhiteTaurenYesAttack2.wav,WhiteTaurenYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 2,
          SoundName: 'SpiritWalkerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WhiteTaurenYes1.wav,WhiteTaurenYes2.wav,WhiteTaurenYes3.wav,WhiteTaurenYes4.wav,WhiteTaurenYes5.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 3,
          SoundName: 'SpiritWalkerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WhiteTaurenReady1.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 4,
          SoundName: 'SpiritWalkerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WhiteTaurenWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\SpiritWalker\\',
          Channel: 1,
          SoundName: 'SpiritWalkerWarcry',
        },
      ],
    },
  },
  {
    id: 'osw1',
    name: 'spiritwolf1',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'osw2',
    name: 'spiritwolf2',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'osw3',
    name: 'spiritwolf3',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'otau',
    name: 'tauren',
    sounds: {
      What: [
        {
          FileNames: 'TaurenWhat1.wav,TaurenWhat2.wav,TaurenWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Tauren\\',
          Channel: 1,
          SoundName: 'TaurenWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'TaurenPissed1.wav,TaurenPissed2.wav,TaurenPissed3.wav,TaurenPissed4.wav,TaurenPissed5.wav,TaurenPissed6.wav,TaurenPissed7.wav',
          DirectoryBase: 'Units\\Orc\\Tauren\\',
          Channel: 1,
          SoundName: 'TaurenPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'TaurenYesAttack1.wav,TaurenYesAttack2.wav,TaurenYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Tauren\\',
          Channel: 2,
          SoundName: 'TaurenYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TaurenYes1.wav,TaurenYes2.wav,TaurenYes3.wav',
          DirectoryBase: 'Units\\Orc\\Tauren\\',
          Channel: 3,
          SoundName: 'TaurenYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TaurenReady1.wav',
          DirectoryBase: 'Units\\Orc\\Tauren\\',
          Channel: 4,
          SoundName: 'TaurenReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'TaurenWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Tauren\\',
          Channel: 1,
          SoundName: 'TaurenWarcry',
        },
      ],
    },
  },
  {
    id: 'otbk',
    name: 'berserker',
    sounds: {
      What: [
        {
          FileNames: 'HeadHunterWhat1.wav,HeadHunterWhat2.wav,HeadHunterWhat3.wav,HeadHunterWhat4.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 1,
          SoundName: 'HeadHunterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeadHunterPissed1.wav,HeadHunterPissed2.wav,HeadHunterPissed3.wav,HeadHunterPissed4.wav,HeadHunterPissed5.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 1,
          SoundName: 'HeadHunterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeadHunterYesAttack1.wav,HeadHunterYesAttack2.wav,HeadHunterYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 2,
          SoundName: 'HeadHunterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeadHunterYes1.wav,HeadHunterYes2.wav,HeadHunterYes3.wav,HeadHunterYes4.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 3,
          SoundName: 'HeadHunterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeadHunterReady1.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 4,
          SoundName: 'HeadHunterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeadHunterWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\HeadHunter\\',
          Channel: 1,
          SoundName: 'HeadHunterWarcry',
        },
      ],
    },
  },
  {
    id: 'otbr',
    name: 'trollbatrider',
    sounds: {
      What: [
        {
          FileNames: 'TrollbatriderWhat1.wav,TrollbatriderWhat2.wav,TrollbatriderWhat3.wav,TrollbatriderWhat4.wav,TrollbatriderWhat5.wav',
          DirectoryBase: 'Units\\Orc\\BatTroll\\',
          Channel: 1,
          SoundName: 'TrollBatriderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'TrollbatriderPissed1.wav,TrollbatriderPissed2.wav,TrollbatriderPissed3.wav,TrollbatriderPissed4.wav,TrollbatriderPissed5.wav',
          DirectoryBase: 'Units\\Orc\\BatTroll\\',
          Channel: 1,
          SoundName: 'TrollBatriderPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'TrollbatriderYesAttack1.wav,TrollbatriderYesAttack2.wav,TrollbatriderYesAttack3.wav,TrollbatriderYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\BatTroll\\',
          Channel: 2,
          SoundName: 'TrollBatriderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TrollbatriderYes1.wav,TrollbatriderYes2.wav,TrollbatriderYes3.wav,TrollbatriderYes4.wav,TrollbatriderYes5.wav',
          DirectoryBase: 'Units\\Orc\\BatTroll\\',
          Channel: 3,
          SoundName: 'TrollBatriderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TrollbatriderReady1.wav',
          DirectoryBase: 'Units\\Orc\\BatTroll\\',
          Channel: 4,
          SoundName: 'TrollBatriderReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'TrollbatriderWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\BatTroll\\',
          Channel: 1,
          SoundName: 'TrollBatriderWarcry',
        },
      ],
    },
  },
  {
    id: 'otot',
    name: 'stasistraptotem',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'owyv',
    name: 'windrider',
    sounds: {
      What: [
        {
          FileNames: 'WyvernRiderWhat1.wav,WyvernRiderWhat2.wav,WyvernRiderWhat3.wav,WyvernRiderWhat4.wav',
          DirectoryBase: 'Units\\Orc\\WyvernRider\\',
          Channel: 1,
          SoundName: 'WyvernRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WyvernRiderPissed1.wav,WyvernRiderPissed2.wav,WyvernRiderPissed3.wav,WyvernRiderPissed4.wav,WyvernRiderPissed5.wav,WyvernRiderPissed6.wav,WyvernRiderPissed7.wav',
          DirectoryBase: 'Units\\Orc\\WyvernRider\\',
          Channel: 1,
          SoundName: 'WyvernRiderPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WyvernRiderYesAttack1.wav,WyvernRiderYesAttack2.wav,WyvernRiderYesAttack3.wav,WyvernRiderYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\WyvernRider\\',
          Channel: 2,
          SoundName: 'WyvernRiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WyvernRiderYes1.wav,WyvernRiderYes2.wav,WyvernRiderYes3.wav,WyvernRiderYes4.wav',
          DirectoryBase: 'Units\\Orc\\WyvernRider\\',
          Channel: 3,
          SoundName: 'WyvernRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WyvernRiderReady1.wav',
          DirectoryBase: 'Units\\Orc\\WyvernRider\\',
          Channel: 4,
          SoundName: 'WyvernRiderReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WyvernRiderWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\WyvernRider\\',
          Channel: 1,
          SoundName: 'WyvernRiderWarcry',
        },
      ],
    },
  },
  {
    id: 'oalt',
    name: 'altarofstorms',
    sounds: {
      What: [
        {
          FileNames: 'AltarOfStormsWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\AltarOfStorms\\',
          Channel: 1,
          SoundName: 'AltarOfStormsWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'obar',
    name: 'orcbarracks',
    sounds: {
      What: [
        {
          FileNames: 'OrcBarracksWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\OrcBarracks\\',
          Channel: 1,
          SoundName: 'OrcBarracksWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'obea',
    name: 'beastiary',
    sounds: {
      What: [
        {
          FileNames: 'BeastiaryWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\Beastiary\\',
          Channel: 1,
          SoundName: 'BeastiaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ofor',
    name: 'warmill',
    sounds: {
      What: [
        {
          FileNames: 'TrollWoodWorksWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\WarMill\\',
          Channel: 1,
          SoundName: 'WarMillWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ofrt',
    name: 'fortress',
    sounds: {
      What: [
        {
          FileNames: 'FortressWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\GreatHall\\',
          Channel: 1,
          SoundName: 'FortressWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ogre',
    name: 'greathall',
    sounds: {
      What: [
        {
          FileNames: 'GreatHallWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\GreatHall\\',
          Channel: 1,
          SoundName: 'GreatHallWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'oshy',
    name: 'orcshipyard',
    sounds: {
      What: [
        {
          FileNames: 'GoblinShipyardWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\GoblinShipyard\\',
          Channel: 1,
          SoundName: 'GoblinShipyardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'osld',
    name: 'spiritlodge',
    sounds: {
      What: [
        {
          FileNames: 'SpiritLodgeWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\SpiritLodge\\',
          Channel: 1,
          SoundName: 'SpiritLodgeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ostr',
    name: 'stronghold',
    sounds: {
      What: [
        {
          FileNames: 'StrongholdWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\GreatHall\\',
          Channel: 1,
          SoundName: 'StrongholdWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'otrb',
    name: 'trollburrow',
    sounds: {
      What: [
        {
          FileNames: 'OrcBurrowWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\TrollBurrow\\',
          Channel: 1,
          SoundName: 'TrollBurrowWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'otto',
    name: 'taurentotem',
    sounds: {
      What: [
        {
          FileNames: 'TaurenTotemWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\TaurenTotem\\',
          Channel: 1,
          SoundName: 'TaurenTotemWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ovln',
    name: 'voodoolounge',
    sounds: {
      What: [
        {
          FileNames: 'VoodooLoungeWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\VoodooLounge\\',
          Channel: 1,
          SoundName: 'VoodooLoungeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'owtw',
    name: 'watchtower',
    sounds: {
      What: [
        {
          FileNames: 'OrcWatchTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\WatchTower\\',
          Channel: 1,
          SoundName: 'WatchTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'Edem',
    name: 'demonhunter',
    sounds: {
      What: [
        {
          FileNames: 'HeroDemonHunterWhat1.wav,HeroDemonHunterWhat2.wav,HeroDemonHunterWhat3.wav,HeroDemonHunterWhat4.wav,HeroDemonHunterWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 1,
          SoundName: 'HeroDemonHunterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroDemonHunterPissed1.wav,HeroDemonHunterPissed2.wav,HeroDemonHunterPissed3.wav,HeroDemonHunterPissed4.wav,HeroDemonHunterPissed5.wav,HeroDemonHunterPissed6.wav,HeroDemonHunterPissed7.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 1,
          SoundName: 'HeroDemonHunterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroDemonHunterYesAttack1.wav,HeroDemonHunterYesAttack2.wav,HeroDemonHunterYesAttack3.wav,HeroDemonHunterYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 2,
          SoundName: 'HeroDemonHunterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroDemonHunterYes1.wav,HeroDemonHunterYes2.wav,HeroDemonHunterYes3.wav,HeroDemonHunterYes4.wav,HeroDemonHunterYes5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 3,
          SoundName: 'HeroDemonHunterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroDemonHunterReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 4,
          SoundName: 'HeroDemonHunterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroDemonHunterWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 1,
          SoundName: 'HeroDemonHunterWarcry',
        },
      ],
    },
  },
  {
    id: 'Edmm',
    name: 'demonhuntermorphed',
    sounds: {
      What: [
        {
          FileNames: 'DemonHunterMorphedWhat1.wav,DemonHunterMorphedWhat2.wav,DemonHunterMorphedWhat3.wav,DemonHunterMorphedWhat4.wav,DemonHunterMorphedWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 1,
          SoundName: 'HeroDemonHunterMorphedWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DemonHunterMorphedPissed1.wav,DemonHunterMorphedPissed2.wav,DemonHunterMorphedPissed3.wav,DemonHunterMorphedPissed4.wav,DemonHunterMorphedPissed5.wav,DemonHunterMorphedPissed6.wav,DemonHunterMorphedPissed7.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 1,
          SoundName: 'HeroDemonHunterMorphedPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DemonHunterMorphedYesAttack1.wav,DemonHunterMorphedYesAttack2.wav,DemonHunterMorphedYesAttack3.wav,DemonHunterMorphedYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 2,
          SoundName: 'HeroDemonHunterMorphedYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DemonHunterMorphedYes1.wav,DemonHunterMorphedYes2.wav,DemonHunterMorphedYes3.wav,DemonHunterMorphedYes4.wav,DemonHunterMorphedYes5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 3,
          SoundName: 'HeroDemonHunterMorphedYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DemonHunterMorphedReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 4,
          SoundName: 'HeroDemonHunterMorphedReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DemonHunterMorphedWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroDemonHunter\\',
          Channel: 1,
          SoundName: 'HeroDemonHunterMorphedWarcry',
        },
      ],
    },
  },
  {
    id: 'Ekee',
    name: 'keeperofthegrove',
    sounds: {
      What: [
        {
          FileNames: 'KeeperOfTheGroveWhat1.wav,KeeperOfTheGroveWhat2.wav,KeeperOfTheGroveWhat3.wav,KeeperOfTheGroveWhat4.wav,KeeperOfTheGroveWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGroveWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KeeperOfTheGrovePissed1.wav,KeeperOfTheGrovePissed2.wav,KeeperOfTheGrovePissed3.wav,KeeperOfTheGrovePissed4.wav,KeeperOfTheGrovePissed5.wav,KeeperOfTheGrovePissed6.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGrovePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KeeperOfTheGroveYesAttack1.wav,KeeperOfTheGroveYesAttack2.wav,KeeperOfTheGroveYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 2,
          SoundName: 'HeroKeeperOfTheGroveYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KeeperOfTheGroveYes1.wav,KeeperOfTheGroveYes2.wav,KeeperOfTheGroveYes3.wav,KeeperOfTheGroveYes4.wav,KeeperOfTheGroveYes5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 3,
          SoundName: 'HeroKeeperOfTheGroveYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KeeperOfTheGroveReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 4,
          SoundName: 'HeroKeeperOfTheGroveReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'KeeperOfTheGroveWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGroveWarcry',
        },
      ],
    },
  },
  {
    id: 'Emoo',
    name: 'priestessofthemoon',
    sounds: {
      What: [
        {
          FileNames: 'HeroMoonPriestessWhat1.wav,HeroMoonPriestessWhat2.wav,HeroMoonPriestessWhat3.wav,HeroMoonPriestessWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\HeroMoonPriestess\\',
          Channel: 1,
          SoundName: 'HeroMoonPriestessWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroMoonPriestessPissed1.wav,HeroMoonPriestessPissed2.wav,HeroMoonPriestessPissed3.wav,HeroMoonPriestessPissed4.wav,HeroMoonPriestessPissed5.wav,HeroMoonPriestessPissed6.wav',
          DirectoryBase: 'Units\\NightElf\\HeroMoonPriestess\\',
          Channel: 1,
          SoundName: 'HeroMoonPriestessPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroMoonPriestessYesAttack1.wav,HeroMoonPriestessYesAttack2.wav,HeroMoonPriestessYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\HeroMoonPriestess\\',
          Channel: 2,
          SoundName: 'HeroMoonPriestessYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroMoonPriestessYes1.wav,HeroMoonPriestessYes2.wav,HeroMoonPriestessYes3.wav,HeroMoonPriestessYes4.wav',
          DirectoryBase: 'Units\\NightElf\\HeroMoonPriestess\\',
          Channel: 3,
          SoundName: 'HeroMoonPriestessYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroMoonPriestessReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroMoonPriestess\\',
          Channel: 4,
          SoundName: 'HeroMoonPriestessReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'MoonPriestessWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroMoonPriestess\\',
          Channel: 1,
          SoundName: 'HeroMoonPriestessWarcry',
        },
      ],
    },
  },
  {
    id: 'Ewar',
    name: 'warden',
    sounds: {
      What: [
        {
          FileNames: 'HeroWardenWhat1.wav,HeroWardenWhat2.wav,HeroWardenWhat3.wav,HeroWardenWhat4.wav,HeroWardenWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroWarden\\',
          Channel: 1,
          SoundName: 'HeroWardenWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroWardenPissed1.wav,HeroWardenPissed2.wav,HeroWardenPissed3.wav,HeroWardenPissed4.wav,HeroWardenPissed5.wav,HeroWardenPissed6.wav,HeroWardenPissed7.wav,HeroWardenPissed8.wav',
          DirectoryBase: 'Units\\NightElf\\HeroWarden\\',
          Channel: 1,
          SoundName: 'HeroWardenPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroWardenYesAttack1.wav,HeroWardenYesAttack2.wav,HeroWardenYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\HeroWarden\\',
          Channel: 2,
          SoundName: 'HeroWardenYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroWardenYes1.wav,HeroWardenYes2.wav,HeroWardenYes4.wav,HeroWardenYes5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroWarden\\',
          Channel: 3,
          SoundName: 'HeroWardenYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroWardenReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroWarden\\',
          Channel: 4,
          SoundName: 'HeroWardenReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroWardenWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroWarden\\',
          Channel: 1,
          SoundName: 'HeroWardenWarcry',
        },
      ],
    },
  },
  {
    id: 'earc',
    name: 'archer',
    sounds: {
      What: [
        {
          FileNames: 'ArcherWhat1.wav,ArcherWhat2.wav,ArcherWhat3.wav,ArcherWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'ArcherWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ArcherPissed1.wav,ArcherPissed2.wav,ArcherPissed3.wav,ArcherPissed4.wav,ArcherPissed5.wav,ArcherPissed6.wav,ArcherPissed7.wav,ArcherPissed8.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'ArcherPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ArcherYesAttack1.wav,ArcherYesAttack2.wav,ArcherYesAttack3.wav,ArcherYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 2,
          SoundName: 'ArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArcherYes1.wav,ArcherYes2.wav,ArcherYes3.wav,ArcherYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 3,
          SoundName: 'ArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArcherReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 4,
          SoundName: 'ArcherReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ArcherWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'ArcherWarcry',
        },
      ],
    },
  },
  {
    id: 'ebal',
    name: 'glaivethrower',
    sounds: {
      What: [
        {
          FileNames: 'BallistaWhat1.wav,BallistaWhat2.wav,BallistaWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\Ballista\\',
          Channel: 1,
          SoundName: 'BallistaWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BallistaYesAttack1.wav,BallistaYesAttack2.wav,BallistaYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Ballista\\',
          Channel: 2,
          SoundName: 'BallistaYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BallistaYes1.wav,BallistaYes2.wav,BallistaYes3.wav',
          DirectoryBase: 'Units\\NightElf\\Ballista\\',
          Channel: 3,
          SoundName: 'BallistaYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BallistaReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Ballista\\',
          Channel: 4,
          SoundName: 'BallistaReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ebsh',
    name: 'nightelfbattleship',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'echm',
    name: 'chimaera',
    sounds: {
      What: [
        {
          FileNames: 'ChimaeraWhat1.wav,ChimaeraWhat2.wav,ChimaeraWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\Chimaera\\',
          Channel: 1,
          SoundName: 'ChimaeraWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ChimaeraPissed1.wav,ChimaeraPissed2.wav,ChimaeraPissed3.wav',
          DirectoryBase: 'Units\\NightElf\\Chimaera\\',
          Channel: 1,
          SoundName: 'ChimaeraPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ChimaeraYesAttack1.wav,ChimaeraYesAttack2.wav,ChimaeraYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Chimaera\\',
          Channel: 2,
          SoundName: 'ChimaeraYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ChimaeraYes1.wav,ChimaeraYes2.wav,ChimaeraYes3.wav',
          DirectoryBase: 'Units\\NightElf\\Chimaera\\',
          Channel: 3,
          SoundName: 'ChimaeraYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ChimaeraReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Chimaera\\',
          Channel: 4,
          SoundName: 'ChimaeraReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'edcm',
    name: 'druidoftheclawmorphed',
    sounds: {
      What: [
        {
          FileNames: 'DruidOfTheClawMorphedWhat1.wav,DruidOfTheClawMorphedWhat2.wav,DruidOfTheClawMorphedWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 1,
          SoundName: 'DruidOfTheClawMorphedWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DruidOfTheClawMorphedPissed1.wav,DruidOfTheClawMorphedPissed2.wav,DruidOfTheClawMorphedPissed3.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 1,
          SoundName: 'DruidOfTheClawMorphedPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DruidOfTheClawMorphedYesAttack1.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 2,
          SoundName: 'DruidOfTheClawMorphedYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DruidOfTheClawMorphedYes1.wav,DruidOfTheClawMorphedYes2.wav,DruidOfTheClawMorphedYes3.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 3,
          SoundName: 'DruidOfTheClawMorphedYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DruidOfTheClawMorphedWhat1.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 4,
          SoundName: 'DruidOfTheClawMorphedReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DruidOfTheClawMorphedWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 1,
          SoundName: 'DruidOfTheClawMorphedWarcry',
        },
      ],
    },
  },
  {
    id: 'edes',
    name: 'nightelfdestroyer',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'edoc',
    name: 'druidoftheclaw',
    sounds: {
      What: [
        {
          FileNames: 'DruidOfTheClawWhat1.wav,DruidOfTheClawWhat2.wav,DruidOfTheClawWhat3.wav,DruidOfTheClawWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 1,
          SoundName: 'DruidOfTheClawWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DruidOfTheClawPissed1.wav,DruidOfTheClawPissed2.wav,DruidOfTheClawPissed3.wav,DruidOfTheClawPissed4.wav,DruidOfTheClawPissed5.wav,DruidOfTheClawPissed6.wav,DruidOfTheClawPissed7.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 1,
          SoundName: 'DruidOfTheClawPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DruidOfTheClawYesAttack1.wav,DruidOfTheClawYesAttack2.wav,DruidOfTheClawYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 2,
          SoundName: 'DruidOfTheClawYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DruidOfTheClawYes1.wav,DruidOfTheClawYes2.wav,DruidOfTheClawYes3.wav,DruidOfTheClawYes4.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 3,
          SoundName: 'DruidOfTheClawYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DruidOfTheClawReady1.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 4,
          SoundName: 'DruidOfTheClawReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DruidOfTheClawWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheClaw\\',
          Channel: 1,
          SoundName: 'DruidOfTheClawWarcry',
        },
      ],
    },
  },
  {
    id: 'edot',
    name: 'druidofthetalon',
    sounds: {
      What: [
        {
          FileNames: 'DruidOfTheTalonWhat1.wav,DruidOfTheTalonWhat2.wav,DruidOfTheTalonWhat3.wav,DruidOfTheTalonWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 1,
          SoundName: 'DruidOfTheTalonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DruidOfTheTalonPissed1.wav,DruidOfTheTalonPissed2.wav,DruidOfTheTalonPissed3.wav,DruidOfTheTalonPissed4.wav,DruidOfTheTalonPissed5.wav,DruidOfTheTalonPissed6.wav,DruidOfTheTalonPissed7.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 1,
          SoundName: 'DruidOfTheTalonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DruidOfTheTalonYesAttack1.wav,DruidOfTheTalonYesAttack2.wav,DruidOfTheTalonYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 2,
          SoundName: 'DruidOfTheTalonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DruidOfTheTalonYes1.wav,DruidOfTheTalonYes2.wav,DruidOfTheTalonYes3.wav,DruidOfTheTalonYes4.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 3,
          SoundName: 'DruidOfTheTalonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DruidOfTheTalonReady1.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 4,
          SoundName: 'DruidOfTheTalonReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DruidOfTheTalonWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 1,
          SoundName: 'DruidOfTheTalonWarcry',
        },
      ],
    },
  },
  {
    id: 'edry',
    name: 'dryad',
    sounds: {
      What: [
        {
          FileNames: 'DryadWhat1.wav,DryadWhat2.wav,DryadWhat3.wav,DryadWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Dryad\\',
          Channel: 1,
          SoundName: 'DryadWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DryadPissed1.wav,DryadPissed2.wav,DryadPissed3.wav,DryadPissed4.wav,DryadPissed5.wav,DryadPissed6.wav,DryadPissed7.wav,DryadPissed8.wav,DryadPissed9.wav',
          DirectoryBase: 'Units\\NightElf\\Dryad\\',
          Channel: 1,
          SoundName: 'DryadPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DryadYesAttack2.wav,DryadYesAttack3.wav,DryadYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\Dryad\\',
          Channel: 2,
          SoundName: 'DryadYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DryadYes1.wav,DryadYes2.wav,DryadYes3.wav,DryadYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Dryad\\',
          Channel: 3,
          SoundName: 'DryadYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DryadReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Dryad\\',
          Channel: 4,
          SoundName: 'DryadReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DryadWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Dryad\\',
          Channel: 1,
          SoundName: 'DryadWarcry',
        },
      ],
    },
  },
  {
    id: 'edtm',
    name: 'druidofthetalonmorphed',
    sounds: {
      What: [
        {
          FileNames: 'DruidOfTheTalonMorphedWhat1.wav,DruidOfTheTalonMorphedWhat2.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 1,
          SoundName: 'DruidOfTheTalonMorphedWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'DruidOfTheTalonMorphedYes1.wav,DruidOfTheTalonMorphedYes2.wav,DruidOfTheTalonMorphedYes3.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 3,
          SoundName: 'DruidOfTheTalonMorphedYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'DruidOfTheTalonMorphedWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\DruidOfTheTalon\\',
          Channel: 1,
          SoundName: 'DruidOfTheTalonMorphedWarcry',
        },
      ],
    },
  },
  {
    id: 'efdr',
    name: 'faeriedragon',
    sounds: {
      What: [
        {
          FileNames: 'FaerieDragonWhat1.wav,FaerieDragonWhat2.wav',
          DirectoryBase: 'Units\\NightElf\\FaerieDragon\\',
          Channel: 1,
          SoundName: 'FaerieDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FaerieDragonPissed1.wav',
          DirectoryBase: 'Units\\NightElf\\FaerieDragon\\',
          Channel: 1,
          SoundName: 'FaerieDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FaerieDragonYes2.wav',
          DirectoryBase: 'Units\\NightElf\\FaerieDragon\\',
          Channel: 2,
          SoundName: 'FaerieDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FaerieDragonYes1.wav,FaerieDragonYes2.wav',
          DirectoryBase: 'Units\\NightElf\\FaerieDragon\\',
          Channel: 3,
          SoundName: 'FaerieDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FaerieDragonReady1.wav',
          DirectoryBase: 'Units\\NightElf\\FaerieDragon\\',
          Channel: 4,
          SoundName: 'FaerieDragonReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'FaerieDragonReady1.wav',
          DirectoryBase: 'Units\\NightElf\\FaerieDragon\\',
          Channel: 1,
          SoundName: 'FaerieDragonWarcry',
        },
      ],
    },
  },
  {
    id: 'efon',
    name: 'forceofnature',
    sounds: {
      What: [
        {
          FileNames: 'EntWhat1.wav',
          DirectoryBase: 'Units\\NightElf\\Ent\\',
          Channel: 1,
          SoundName: 'EntWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'EntYes1.wav',
          DirectoryBase: 'Units\\NightElf\\Ent\\',
          Channel: 3,
          SoundName: 'EntYes',
        },
      ],
      Ready: [
        {
          FileNames: 'EntReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Ent\\',
          Channel: 4,
          SoundName: 'EntReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ehip',
    name: 'hippogryph',
    sounds: {
      What: [
        {
          FileNames: 'HippoGryphWhat1.wav,HippoGryphWhat2.wav,HippoGryphWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 1,
          SoundName: 'HippoGryphWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HippogryphPissed1.wav,HippogryphPissed2.wav,HippogryphPissed3.wav',
          DirectoryBase: 'Units\\NightElf\\Hippogryph\\',
          Channel: 1,
          SoundName: 'HippoGryphPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HippogryphYesAttack1.wav,HippogryphYesAttack2.wav,HippogryphYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 2,
          SoundName: 'HippoGryphYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HippoGryphYes1.wav,HippoGryphYes2.wav,HippoGryphYes3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 3,
          SoundName: 'HippoGryphYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HippoGryphReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 4,
          SoundName: 'HippoGryphReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ehpr',
    name: 'riddenhippogryph',
    sounds: {
      What: [
        {
          FileNames: 'HippogryphWithRiderWhat1.wav,HippogryphWithRiderWhat2.wav,HippogryphWithRiderWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\RiddenHippoGryph\\',
          Channel: 1,
          SoundName: 'RiddenHippoGryphWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HippogryphWithRiderPissed1.wav,HippogryphWithRiderPissed2.wav,HippogryphWithRiderPissed3.wav,HippogryphWithRiderPissed4.wav',
          DirectoryBase: 'Units\\NightElf\\RiddenHippoGryph\\',
          Channel: 1,
          SoundName: 'RiddenHippoGryphPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HippogryphWithRiderYesAttack1.wav,HippogryphWithRiderYesAttack2.wav,HippogryphWithRiderYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\RiddenHippoGryph\\',
          Channel: 2,
          SoundName: 'RiddenHippoGryphYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HippogryphWithRiderYes1.wav,HippogryphWithRiderYes2.wav,HippogryphWithRiderYes3.wav,HippogryphWithRiderYes4.wav',
          DirectoryBase: 'Units\\NightElf\\RiddenHippoGryph\\',
          Channel: 3,
          SoundName: 'RiddenHippoGryphYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HippogryphWithRiderReady1.wav',
          DirectoryBase: 'Units\\NightElf\\RiddenHippoGryph\\',
          Channel: 4,
          SoundName: 'RiddenHippoGryphReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HippogryphWithRiderWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\RiddenHippoGryph\\',
          Channel: 1,
          SoundName: 'RiddenHippoGryphWarcry',
        },
      ],
    },
  },
  {
    id: 'emtg',
    name: 'mountaingiant',
    sounds: {
      What: [
        {
          FileNames: 'MountainGiantWhat1.wav,MountainGiantWhat2.wav,MountainGiantWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\MountainGiant\\',
          Channel: 1,
          SoundName: 'MountainGiantWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MountainGiantPissed1.wav',
          DirectoryBase: 'Units\\NightElf\\MountainGiant\\',
          Channel: 1,
          SoundName: 'MountainGiantPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MountainGiantYes1.wav,MountainGiantYes2.wav,MountainGiantYes3.wav',
          DirectoryBase: 'Units\\NightElf\\MountainGiant\\',
          Channel: 2,
          SoundName: 'MountainGiantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MountainGiantYes1.wav,MountainGiantYes2.wav,MountainGiantYes3.wav',
          DirectoryBase: 'Units\\NightElf\\MountainGiant\\',
          Channel: 3,
          SoundName: 'MountainGiantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MountainGiantPissed1.wav',
          DirectoryBase: 'Units\\NightElf\\MountainGiant\\',
          Channel: 4,
          SoundName: 'MountainGiantReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'MountainGiantPissed1.wav',
          DirectoryBase: 'Units\\NightElf\\MountainGiant\\',
          Channel: 1,
          SoundName: 'MountainGiantWarcry',
        },
      ],
    },
  },
  {
    id: 'esen',
    name: 'huntress',
    sounds: {
      What: [
        {
          FileNames: 'HuntressWhat1.wav,HuntressWhat2.wav,HuntressWhat3.wav,HuntressWhat4.wav,HuntressWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\Huntress\\',
          Channel: 1,
          SoundName: 'HuntressWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HuntressPissed1.wav,HuntressPissed2.wav,HuntressPissed3.wav,HuntressPissed4.wav,HuntressPissed5.wav,HuntressPissed6.wav,HuntressPissed7.wav,HuntressPissed8.wav',
          DirectoryBase: 'Units\\NightElf\\Huntress\\',
          Channel: 1,
          SoundName: 'HuntressPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HuntressYesAttack1.wav,HuntressYesAttack2.wav,HuntressYesAttack3.wav,HuntressYesAttack4.wav,HuntressYesAttack5.wav',
          DirectoryBase: 'Units\\NightElf\\Huntress\\',
          Channel: 2,
          SoundName: 'HuntressYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HuntressYes1.wav,HuntressYes2.wav,HuntressYes3.wav,HuntressYes4.wav,HuntressYes5.wav',
          DirectoryBase: 'Units\\NightElf\\Huntress\\',
          Channel: 3,
          SoundName: 'HuntressYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HuntressReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Huntress\\',
          Channel: 4,
          SoundName: 'HuntressReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HuntressWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Huntress\\',
          Channel: 1,
          SoundName: 'HuntressWarcry',
        },
      ],
    },
  },
  {
    id: 'espv',
    name: 'spiritofvengeance',
    sounds: {
      What: [
        {
          FileNames: 'SpiritOfVengeanceWhat1.wav,SpiritOfVengeanceWhat2.wav,SpiritOfVengeanceWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\SpiritOfVengeance\\',
          Channel: 1,
          SoundName: 'SpiritOfVengeanceWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SpiritOfVengeanceReady1.wav',
          DirectoryBase: 'Units\\NightElf\\SpiritOfVengeance\\',
          Channel: 1,
          SoundName: 'SpiritOfVengeancePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SpiritOfVengeanceYes1.wav,SpiritOfVengeanceYes2.wav,SpiritOfVengeanceYes3.wav',
          DirectoryBase: 'Units\\NightElf\\SpiritOfVengeance\\',
          Channel: 2,
          SoundName: 'SpiritOfVengeanceYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritOfVengeanceYes1.wav,SpiritOfVengeanceYes2.wav,SpiritOfVengeanceYes3.wav',
          DirectoryBase: 'Units\\NightElf\\SpiritOfVengeance\\',
          Channel: 3,
          SoundName: 'SpiritOfVengeanceYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpiritOfVengeanceReady1.wav',
          DirectoryBase: 'Units\\NightElf\\SpiritOfVengeance\\',
          Channel: 4,
          SoundName: 'SpiritOfVengeanceReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SpiritOfVengeanceReady1.wav',
          DirectoryBase: 'Units\\NightElf\\SpiritOfVengeance\\',
          Channel: 1,
          SoundName: 'SpiritOfVengeanceWarcry',
        },
      ],
    },
  },
  {
    id: 'even',
    name: 'vengeance',
    sounds: {
      What: [
        {
          FileNames: 'MiniSpiritWhat1.wav,MiniSpiritWhat2.wav,MiniSpiritWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\Vengeance\\',
          Channel: 1,
          SoundName: 'VengeanceWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MiniSpiritPissed1.wav',
          DirectoryBase: 'Units\\NightElf\\Vengeance\\',
          Channel: 1,
          SoundName: 'VengeancePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MiniSpiritYes1.wav,MiniSpiritYes2.wav,MiniSpiritYes3.wav',
          DirectoryBase: 'Units\\NightElf\\Vengeance\\',
          Channel: 2,
          SoundName: 'VengeanceYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MiniSpiritYes1.wav,MiniSpiritYes2.wav,MiniSpiritYes3.wav',
          DirectoryBase: 'Units\\NightElf\\Vengeance\\',
          Channel: 3,
          SoundName: 'VengeanceYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MiniSpiritReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Vengeance\\',
          Channel: 4,
          SoundName: 'VengeanceReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'MiniSpiritReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Vengeance\\',
          Channel: 1,
          SoundName: 'VengeanceWarcry',
        },
      ],
    },
  },
  {
    id: 'ewsp',
    name: 'wisp',
    sounds: {
      What: [
        {
          FileNames: 'WispWhat1.wav,WispWhat2.wav,WispWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\Wisp\\',
          Channel: 1,
          SoundName: 'WispWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WispPissed1.wav,WispPissed2.wav,WispPissed3.wav',
          DirectoryBase: 'Units\\NightElf\\Wisp\\',
          Channel: 1,
          SoundName: 'WispPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'WispYes1.wav,WispYes2.wav,WispYes3.wav',
          DirectoryBase: 'Units\\NightElf\\Wisp\\',
          Channel: 3,
          SoundName: 'WispYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WispReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Wisp\\',
          Channel: 4,
          SoundName: 'WispReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'eaoe',
    name: 'ancientoflore',
    sounds: {
      What: [
        {
          FileNames: 'AncientOfTheEarthWhat1.wav,AncientOfTheEarthWhat2.wav,AncientOfTheEarthWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfLore\\',
          Channel: 1,
          SoundName: 'AncientOfLoreWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'AncientOfTheEarthYesAttack1.wav,AncientOfTheEarthYesAttack2.wav,AncientOfTheEarthYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfLore\\',
          Channel: 2,
          SoundName: 'AncientOfLoreYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AncientOfTheEarthYes1.wav,AncientOfTheEarthYes2.wav,AncientOfTheEarthYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfLore\\',
          Channel: 3,
          SoundName: 'AncientOfLoreYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'eaom',
    name: 'ancientofwar',
    sounds: {
      What: [
        {
          FileNames: 'AncientOfTheMoonWhat1.wav,AncientOfTheMoonWhat2.wav,AncientOfTheMoonWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWar\\',
          Channel: 1,
          SoundName: 'AncientOfWarWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'AncientOfTheMoonYesAttack1.wav,AncientOfTheMoonYesAttack2.wav,AncientOfTheMoonYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWar\\',
          Channel: 2,
          SoundName: 'AncientOfWarYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AncientOfTheMoonYes1.wav,AncientOfTheMoonYes2.wav,AncientOfTheMoonYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWar\\',
          Channel: 3,
          SoundName: 'AncientOfWarYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'eaow',
    name: 'ancientofwind',
    sounds: {
      What: [
        {
          FileNames: 'AncientOfTheWildWhat1.wav,AncientOfTheWildWhat2.wav,AncientOfTheWildWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWind\\',
          Channel: 1,
          SoundName: 'AncientOfWindWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'AncientOfTheWildYesAttack1.wav,AncientOfTheWildYesAttack2.wav,AncientOfTheWildYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWind\\',
          Channel: 2,
          SoundName: 'AncientOfWindYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AncientOfTheWildYes1.wav,AncientOfTheWildYes2.wav,AncientOfTheWildYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWind\\',
          Channel: 3,
          SoundName: 'AncientOfWindYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'eate',
    name: 'altarofelders',
    sounds: {
      What: [
        {
          FileNames: 'AltarOfEldersWhat1.wav',
          DirectoryBase: 'Buildings\\NightElf\\AltarOfElders\\',
          Channel: 1,
          SoundName: 'AltarOfEldersWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'eden',
    name: 'ancientofwonders',
    sounds: {
      What: [
        {
          FileNames: 'AncientofWonderWhat1.wav,AncientofWonderWhat2.wav,AncientofWonderWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWonder\\',
          Channel: 1,
          SoundName: 'AncientOfWonderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'AncientofWonderYesAttack1.wav,AncientofWonderYesAttack2.wav,AncientofWonderYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWonder\\',
          Channel: 2,
          SoundName: 'AncientOfWonderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AncientofWonderYes1.wav,AncientofWonderYes2.wav,AncientofWonderYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWonder\\',
          Channel: 3,
          SoundName: 'AncientOfWonderYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'edob',
    name: 'huntershall',
    sounds: {
      What: [
        {
          FileNames: 'HuntersHallWhat1.wav',
          DirectoryBase: 'Buildings\\NightElf\\HuntersHall\\',
          Channel: 1,
          SoundName: 'HuntersHallWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'edos',
    name: 'chimaeraroost',
    sounds: {
      What: [
        {
          FileNames: 'DenOfShadowsWhat1.wav',
          DirectoryBase: 'Buildings\\NightElf\\ChimaeraRoost\\',
          Channel: 1,
          SoundName: 'ChimaeraRoostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'egol',
    name: 'entangledgoldmine',
    sounds: {
      What: [
        {
          FileNames: 'NightElfGoldMineWhat1.wav',
          DirectoryBase: 'Buildings\\NightElf\\EntangledGoldMine\\',
          Channel: 1,
          SoundName: 'EntangledGoldMineWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'emow',
    name: 'moonwell',
    sounds: {
      What: [
        {
          FileNames: 'MoonWellWhat1.wav',
          DirectoryBase: 'Buildings\\NightElf\\MoonWell\\',
          Channel: 1,
          SoundName: 'MoonWellWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'eshy',
    name: 'nightelfshipyard',
    sounds: {
      What: [
        {
          FileNames: 'GoblinShipyardWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\GoblinShipyard\\',
          Channel: 1,
          SoundName: 'GoblinShipyardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'etoa',
    name: 'treeofages',
    sounds: {
      What: [
        {
          FileNames: 'TreeOfLifeWhat1.wav,TreeOfLifeWhat2.wav,TreeOfLifeWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 1,
          SoundName: 'TreeOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TreeOfLifeYesAttack1.wav,TreeOfLifeYesAttack2.wav,TreeOfLifeYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 2,
          SoundName: 'TreeOfLifeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TreeOfLifeYes1.wav,TreeOfLifeYes2.wav,TreeOfLifeYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 3,
          SoundName: 'TreeOfLifeYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'etoe',
    name: 'treeofeternity',
    sounds: {
      What: [
        {
          FileNames: 'TreeOfLifeWhat1.wav,TreeOfLifeWhat2.wav,TreeOfLifeWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 1,
          SoundName: 'TreeOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TreeOfLifeYesAttack1.wav,TreeOfLifeYesAttack2.wav,TreeOfLifeYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 2,
          SoundName: 'TreeOfLifeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TreeOfLifeYes1.wav,TreeOfLifeYes2.wav,TreeOfLifeYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 3,
          SoundName: 'TreeOfLifeYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'etol',
    name: 'treeoflife',
    sounds: {
      What: [
        {
          FileNames: 'TreeOfLifeWhat1.wav,TreeOfLifeWhat2.wav,TreeOfLifeWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 1,
          SoundName: 'TreeOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TreeOfLifeYesAttack1.wav,TreeOfLifeYesAttack2.wav,TreeOfLifeYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 2,
          SoundName: 'TreeOfLifeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TreeOfLifeYes1.wav,TreeOfLifeYes2.wav,TreeOfLifeYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 3,
          SoundName: 'TreeOfLifeYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'etrp',
    name: 'ancientprotector',
    sounds: {
      What: [
        {
          FileNames: 'TreantWhat1.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientProtector\\',
          Channel: 1,
          SoundName: 'AncientProtectorWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'TreantYes1.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientProtector\\',
          Channel: 3,
          SoundName: 'AncientProtectorYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TreantReady1.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientProtector\\',
          Channel: 4,
          SoundName: 'AncientProtectorReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'Ucrl',
    name: 'cryptlord',
    sounds: {
      What: [
        {
          FileNames: 'NerubianCryptLordWhat1.wav,NerubianCryptLordWhat2.wav,NerubianCryptLordWhat3.wav,NerubianCryptLordWhat4.wav,NerubianCryptLordWhat5.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 1,
          SoundName: 'HeroCryptLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NerubianCryptLordPissed1.wav,NerubianCryptLordPissed2.wav,NerubianCryptLordPissed3.wav,NerubianCryptLordPissed4.wav,NerubianCryptLordPissed5.wav,NerubianCryptLordPissed6.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 1,
          SoundName: 'HeroCryptLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NerubianCryptLordYesAttack1.wav,NerubianCryptLordYesAttack2.wav,NerubianCryptLordYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 2,
          SoundName: 'HeroCryptLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NerubianCryptLordYes1.wav,NerubianCryptLordYes2.wav,NerubianCryptLordYes3.wav,NerubianCryptLordYes4.wav,NerubianCryptLordYes5.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 3,
          SoundName: 'HeroCryptLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NerubianCryptLordReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 4,
          SoundName: 'HeroCryptLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NerubianCryptLordWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 1,
          SoundName: 'HeroCryptLordWarcry',
        },
      ],
    },
  },
  {
    id: 'Udea',
    name: 'deathknight',
    sounds: {
      What: [
        {
          FileNames: 'DeathKnightWhat1.wav,DeathKnightWhat2.wav,DeathKnightWhat3.wav,DeathKnightWhat4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDeathKnight\\',
          Channel: 1,
          SoundName: 'HeroDeathKnightWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DeathKnightPissed1.wav,DeathKnightPissed2.wav,DeathKnightPissed3.wav,DeathKnightPissed4.wav,DeathKnightPissed5.wav,DeathKnightPissed6.wav',
          DirectoryBase: 'Units\\Undead\\HeroDeathKnight\\',
          Channel: 1,
          SoundName: 'HeroDeathKnightPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DeathKnightYesAttack1.wav,DeathKnightYesAttack2.wav,DeathKnightYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroDeathKnight\\',
          Channel: 2,
          SoundName: 'HeroDeathKnightYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DeathKnightYes1.wav,DeathKnightYes2.wav,DeathKnightYes3.wav,DeathKnightYes4.wav,DeathKnightYes5.wav',
          DirectoryBase: 'Units\\Undead\\HeroDeathKnight\\',
          Channel: 3,
          SoundName: 'HeroDeathKnightYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DeathKnightReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDeathKnight\\',
          Channel: 4,
          SoundName: 'HeroDeathKnightReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DeathKnightWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDeathKnight\\',
          Channel: 1,
          SoundName: 'HeroDeathKnightWarcry',
        },
      ],
    },
  },
  {
    id: 'Udre',
    name: 'dreadlord',
    sounds: {
      What: [
        {
          FileNames: 'HeroDreadlordWhat1.wav,HeroDreadlordWhat2.wav,HeroDreadlordWhat3.wav,HeroDreadlordWhat4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroDreadlordPissed1.wav,HeroDreadlordPissed2.wav,HeroDreadlordPissed3.wav,HeroDreadlordPissed4.wav,HeroDreadlordPissed5.wav,HeroDreadlordPissed6.wav,HeroDreadlordPissed7.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroDreadlordYesAttack1.wav,HeroDreadlordYesAttack2.wav,HeroDreadlordYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 2,
          SoundName: 'HeroDreadLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroDreadlordYes1.wav,HeroDreadlordYes2.wav,HeroDreadlordYes3.wav,HeroDreadlordYes4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 3,
          SoundName: 'HeroDreadLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroDreadlordReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 4,
          SoundName: 'HeroDreadLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroDreadlordWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWarcry',
        },
      ],
    },
  },
  {
    id: 'Ulic',
    name: 'lich',
    sounds: {
      What: [
        {
          FileNames: 'HeroLichWhat1.wav,HeroLichWhat2.wav,HeroLichWhat3.wav,HeroLichWhat4.wav',
          DirectoryBase: 'Units\\Undead\\HeroLich\\',
          Channel: 1,
          SoundName: 'HeroLichWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroLichPissed1.wav,HeroLichPissed2.wav,HeroLichPissed3.wav,HeroLichPissed4.wav,HeroLichPissed5.wav,HeroLichPissed6.wav,HeroLichPissed7.wav,HeroLichPissed8.wav',
          DirectoryBase: 'Units\\Undead\\HeroLich\\',
          Channel: 1,
          SoundName: 'HeroLichPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroLichYesAttack1.wav,HeroLichYesAttack2.wav,HeroLichYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroLich\\',
          Channel: 2,
          SoundName: 'HeroLichYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroLichYes1.wav,HeroLichYes2.wav,HeroLichYes3.wav,HeroLichYes4.wav,HeroLichYes5.wav',
          DirectoryBase: 'Units\\Undead\\HeroLich\\',
          Channel: 3,
          SoundName: 'HeroLichYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroLichReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroLich\\',
          Channel: 4,
          SoundName: 'HeroLichReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroLichWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroLich\\',
          Channel: 1,
          SoundName: 'HeroLichWarcry',
        },
      ],
    },
  },
  {
    id: 'uabo',
    name: 'abomination',
    sounds: {
      What: [
        {
          FileNames: 'AbominationWhat1.wav,AbominationWhat2.wav,AbominationWhat3.wav,AbominationWhat4.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'AbominationPissed1.wav,AbominationPissed2.wav,AbominationPissed3.wav,AbominationPissed4.wav,AbominationPissed5.wav,AbominationPissed6.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'AbominationYesAttack1.wav,AbominationYesAttack2.wav,AbominationYesAttack3.wav,AbominationYesAttack4.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 2,
          SoundName: 'AbominationYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AbominationYes1.wav,AbominationYes2.wav,AbominationYes3.wav,AbominationYes4.wav,AbominationYes5.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 3,
          SoundName: 'AbominationYes',
        },
      ],
      Ready: [
        {
          FileNames: 'AbominationReady1.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 4,
          SoundName: 'AbominationReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'AbominationWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationWarcry',
        },
      ],
    },
  },
  {
    id: 'uaco',
    name: 'acolyte',
    sounds: {
      What: [
        {
          FileNames: 'AcolyteWhat1.wav,AcolyteWhat2.wav,AcolyteWhat3.wav,AcolyteWhat4.wav,AcolyteWhat5.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolyteWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'AcolytePissed1.wav,AcolytePissed2.wav,AcolytePissed3.wav,AcolytePissed4.wav,AcolytePissed5.wav,AcolytePissed6.wav,AcolytePissed7.wav,AcolytePissed8.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolytePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'AcolyteYesAttack1.wav,AcolyteYesAttack2.wav,AcolyteYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 2,
          SoundName: 'AcolyteYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AcolyteYes1.wav,AcolyteYes2.wav,AcolyteYes3.wav,AcolyteYes4.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 3,
          SoundName: 'AcolyteYes',
        },
      ],
      Ready: [
        {
          FileNames: 'AcolyteReady1.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 4,
          SoundName: 'AcolyteReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'AcolyteWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolyteWarcry',
        },
      ],
    },
  },
  {
    id: 'uban',
    name: 'banshee',
    sounds: {
      What: [
        {
          FileNames: 'BansheeWhat1.wav,BansheeWhat2.wav,BansheeWhat3.wav,BansheeWhat4.wav,BansheeWhat5.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 1,
          SoundName: 'BansheeWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BansheePissed1.wav,BansheePissed2.wav,BansheePissed3.wav,BansheePissed4.wav,BansheePissed5.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 1,
          SoundName: 'BansheePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BansheeYesAttack1.wav,BansheeYesAttack2.wav,BansheeYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 2,
          SoundName: 'BansheeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BansheeYes1.wav,BansheeYes2.wav,BansheeYes3.wav,BansheeYes4.wav,BansheeYes5.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 3,
          SoundName: 'BansheeYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BansheeReady1.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 4,
          SoundName: 'BansheeReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BansheeWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 1,
          SoundName: 'BansheeWarcry',
        },
      ],
    },
  },
  {
    id: 'ubsp',
    name: 'obsidiandestroyer',
    sounds: {
      What: [
        {
          FileNames: 'ObsidianAvengerWhat1.wav,ObsidianAvengerWhat2.wav,ObsidianAvengerWhat3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ObsidianAvengerPissed1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ObsidianAvengerYesAttack1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 2,
          SoundName: 'ObsidianDestroyerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ObsidianAvengerYes1.wav,ObsidianAvengerYes2.wav,ObsidianAvengerYes3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 3,
          SoundName: 'ObsidianDestroyerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 4,
          SoundName: 'ObsidianDestroyerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWarcry',
        },
      ],
    },
  },
  {
    id: 'ucrm',
    name: 'cryptfiendmorph',
    sounds: {
      What: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav,CryptFiendWhat4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'CryptFiendWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CryptFiendPissed1.wav,CryptFiendPissed2.wav,CryptFiendPissed3.wav,CryptFiendPissed4.wav,CryptFiendPissed5.wav,CryptFiendPissed6.wav,CryptFiendPissed7.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'CryptFiendPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CryptFiendYesAttack1.wav,CryptFiendYesAttack2.wav,CryptFiendYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 2,
          SoundName: 'CryptFiendYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CryptFiendYes1.wav,CryptFiendYes2.wav,CryptFiendYes3.wav,CryptFiendYes4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 3,
          SoundName: 'CryptFiendYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CryptFiendReady1.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 4,
          SoundName: 'CryptFiendReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'CryptFiendWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'CryptFiendWarcry',
        },
      ],
    },
  },
  {
    id: 'ucry',
    name: 'cryptfiend',
    sounds: {
      What: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav,CryptFiendWhat4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'CryptFiendWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CryptFiendPissed1.wav,CryptFiendPissed2.wav,CryptFiendPissed3.wav,CryptFiendPissed4.wav,CryptFiendPissed5.wav,CryptFiendPissed6.wav,CryptFiendPissed7.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'CryptFiendPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CryptFiendYesAttack1.wav,CryptFiendYesAttack2.wav,CryptFiendYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 2,
          SoundName: 'CryptFiendYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CryptFiendYes1.wav,CryptFiendYes2.wav,CryptFiendYes3.wav,CryptFiendYes4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 3,
          SoundName: 'CryptFiendYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CryptFiendReady1.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 4,
          SoundName: 'CryptFiendReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'CryptFiendWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'CryptFiendWarcry',
        },
      ],
    },
  },
  {
    id: 'ucs1',
    name: 'carrionscarab1',
    sounds: {
      What: [
        {
          FileNames: 'ScarabWhat1.wav,ScarabWhat2.wav,ScarabWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ScarabPissed1.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'ScarabYes1.wav,ScarabYes2.wav,ScarabYes3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 3,
          SoundName: 'ScarabYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ucs2',
    name: 'carrionscarab2',
    sounds: {
      What: [
        {
          FileNames: 'ScarabWhat1.wav,ScarabWhat2.wav,ScarabWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ScarabPissed1.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'ScarabYes1.wav,ScarabYes2.wav,ScarabYes3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 3,
          SoundName: 'ScarabYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ucs3',
    name: 'carrionscarab3',
    sounds: {
      What: [
        {
          FileNames: 'ScarabWhat1.wav,ScarabWhat2.wav,ScarabWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ScarabPissed1.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'ScarabYes1.wav,ScarabYes2.wav,ScarabYes3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 3,
          SoundName: 'ScarabYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ucsB',
    name: 'carrionscarabburrowed2',
    sounds: {
      What: [
        {
          FileNames: 'ScarabWhat1.wav,ScarabWhat2.wav,ScarabWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ScarabPissed1.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'ScarabYes1.wav,ScarabYes2.wav,ScarabYes3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 3,
          SoundName: 'ScarabYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ucsC',
    name: 'carrionscarabburrowed3',
    sounds: {
      What: [
        {
          FileNames: 'ScarabWhat1.wav,ScarabWhat2.wav,ScarabWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ScarabPissed1.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 1,
          SoundName: 'ScarabPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'ScarabYes1.wav,ScarabYes2.wav,ScarabYes3.wav',
          DirectoryBase: 'Units\\Undead\\Scarab\\',
          Channel: 3,
          SoundName: 'ScarabYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ufro',
    name: 'frostwyrm',
    sounds: {
      What: [
        {
          FileNames: 'FrostwyrmWhat1.wav,FrostwyrmWhat2.wav,FrostwyrmWhat3.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 1,
          SoundName: 'FrostWyrmWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FrostwyrmPissed1.wav,FrostwyrmPissed2.wav,FrostwyrmPissed3.wav,FrostwyrmPissed4.wav,FrostwyrmPissed5,wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 1,
          SoundName: 'FrostWyrmPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FrostwyrmYesAttack1.wav,FrostwyrmYesAttack2.wav,FrostwyrmYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 2,
          SoundName: 'FrostWyrmYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FrostwyrmYes1.wav,FrostwyrmYes2.wav,FrostwyrmYes3.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 3,
          SoundName: 'FrostWyrmYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FrostwyrmReady1.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 4,
          SoundName: 'FrostWyrmReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'FrostwyrmWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 1,
          SoundName: 'FrostWyrmWarcry',
        },
      ],
    },
  },
  {
    id: 'ugar',
    name: 'gargoyle',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat1.wav,GargoyleWhat2.wav,GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'GargoyleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack1.wav,GargoyleYesAttack2.wav,GargoyleYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'GargoyleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes1.wav,GargoyleYes2.wav,GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'GargoyleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleReady1.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'GargoyleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ugho',
    name: 'ghoul',
    sounds: {
      What: [
        {
          FileNames: 'GhoulWhat1.wav,GhoulWhat2.wav,GhoulWhat3.wav,GhoulWhat4.wav',
          DirectoryBase: 'Units\\Undead\\Ghoul\\',
          Channel: 1,
          SoundName: 'GhoulWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GhoulPissed1.wav,GhoulPissed2.wav,GhoulPissed3.wav,GhoulPissed4.wav',
          DirectoryBase: 'Units\\Undead\\Ghoul\\',
          Channel: 1,
          SoundName: 'GhoulPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GhoulYesAttack1.wav,GhoulYesAttack2.wav,GhoulYesAttack3.wav,GhoulYesAttack4.wav',
          DirectoryBase: 'Units\\Undead\\Ghoul\\',
          Channel: 2,
          SoundName: 'GhoulYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GhoulYes1.wav,GhoulYes2.wav,GhoulYes3.wav,GhoulYes4.wav',
          DirectoryBase: 'Units\\Undead\\Ghoul\\',
          Channel: 3,
          SoundName: 'GhoulYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GhoulReady1.wav',
          DirectoryBase: 'Units\\Undead\\Ghoul\\',
          Channel: 4,
          SoundName: 'GhoulReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GhoulWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Ghoul\\',
          Channel: 1,
          SoundName: 'GhoulWarcry',
        },
      ],
    },
  },
  {
    id: 'ugrm',
    name: 'gargoylemorphed',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat1.wav,GargoyleWhat2.wav,GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'GargoyleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack1.wav,GargoyleYesAttack2.wav,GargoyleYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'GargoyleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes1.wav,GargoyleYes2.wav,GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'GargoyleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleReady1.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'GargoyleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'uloc',
    name: 'locust',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'umtw',
    name: 'meatwagon',
    sounds: {
      What: [
        {
          FileNames: 'MeatWagonWhat1.wav,MeatWagonWhat2.wav,MeatWagonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Meatwagon\\',
          Channel: 1,
          SoundName: 'MeatwagonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'MeatWagonYesAttack1.wav,MeatWagonYesAttack2.wav,MeatWagonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Meatwagon\\',
          Channel: 2,
          SoundName: 'MeatwagonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MeatWagonYes1.wav,MeatWagonYes2.wav,MeatWagonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Meatwagon\\',
          Channel: 3,
          SoundName: 'MeatwagonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MeatWagonReady1.wav',
          DirectoryBase: 'Units\\Undead\\Meatwagon\\',
          Channel: 4,
          SoundName: 'MeatwagonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'unec',
    name: 'necromancer',
    sounds: {
      What: [
        {
          FileNames: 'NecromancerWhat1.wav,NecromancerWhat2.wav,NecromancerWhat3.wav,NecromancerWhat4.wav',
          DirectoryBase: 'Units\\Undead\\Necromancer\\',
          Channel: 1,
          SoundName: 'NecromancerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NecromancerPissed1.wav,NecromancerPissed2.wav,NecromancerPissed3.wav,NecromancerPissed4.wav,NecromancerPissed5.wav',
          DirectoryBase: 'Units\\Undead\\Necromancer\\',
          Channel: 1,
          SoundName: 'NecromancerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NecromancerYesAttack1.wav,NecromancerYesAttack2.wav,NecromancerYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Necromancer\\',
          Channel: 2,
          SoundName: 'NecromancerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NecromancerYes1.wav,NecromancerYes2.wav,NecromancerYes3.wav,NecromancerYes4.wav',
          DirectoryBase: 'Units\\Undead\\Necromancer\\',
          Channel: 3,
          SoundName: 'NecromancerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NecromancerReady1.wav',
          DirectoryBase: 'Units\\Undead\\Necromancer\\',
          Channel: 4,
          SoundName: 'NecromancerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NecromancerWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Necromancer\\',
          Channel: 1,
          SoundName: 'NecromancerWarcry',
        },
      ],
    },
  },
  {
    id: 'uobs',
    name: 'obsidianstatue',
    sounds: {
      What: [
        {
          FileNames: 'ObsidianStatueWhat1.wav,ObsidianStatueWhat2.wav,ObsidianStatueWhat3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianStatueWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ObsidianStatueReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianStatuePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ObsidianStatueYes1.wav,ObsidianStatueYes2.wav,ObsidianStatueYes3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 2,
          SoundName: 'ObsidianStatueYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ObsidianStatueYes1.wav,ObsidianStatueYes2.wav,ObsidianStatueYes3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 3,
          SoundName: 'ObsidianStatueYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ObsidianStatueReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 4,
          SoundName: 'ObsidianStatueReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ObsidianStatueReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianStatueWarcry',
        },
      ],
    },
  },
  {
    id: 'uplg',
    name: 'plagueward',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ushd',
    name: 'shade',
    sounds: {
      What: [
        {
          FileNames: 'ShadeWhat1.wav,ShadeWhat2.wav,ShadeWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Shade\\',
          Channel: 1,
          SoundName: 'ShadeWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShadePissed1.wav,ShadePissed2.wav,ShadePissed3.wav,ShadePissed4.wav,ShadePissed5.wav,ShadePissed6.wav',
          DirectoryBase: 'Units\\Undead\\Shade\\',
          Channel: 1,
          SoundName: 'ShadePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShadeYesAttack1.wav,ShadeYesAttack2.wav,ShadeYesAttack3.wav,ShadeYesAttack4.wav,ShadeYesAttack5.wav',
          DirectoryBase: 'Units\\Undead\\Shade\\',
          Channel: 2,
          SoundName: 'ShadeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShadeYes1.wav,ShadeYes2.wav,ShadeYes3.wav,ShadeYes4.wav',
          DirectoryBase: 'Units\\Undead\\Shade\\',
          Channel: 3,
          SoundName: 'ShadeYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShadeReady1.wav',
          DirectoryBase: 'Units\\Undead\\Shade\\',
          Channel: 4,
          SoundName: 'ShadeReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShadeWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Shade\\',
          Channel: 1,
          SoundName: 'ShadeWarcry',
        },
      ],
    },
  },
  {
    id: 'uske',
    name: 'skeletonwarrior',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'uskm',
    name: 'skeletalmage',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'uubs',
    name: 'undeadbattleship',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'uaod',
    name: 'altarofdarkness',
    sounds: {
      What: [
        {
          FileNames: 'AltarOfDarknessWhat.wav',
          DirectoryBase: 'Buildings\\Undead\\AltarOfDarkness\\',
          Channel: 1,
          SoundName: 'AltarOfDarknessWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ubon',
    name: 'boneyard',
    sounds: {
      What: [
        {
          FileNames: 'BoneyardWhat1.wav',
          DirectoryBase: 'Buildings\\Undead\\Boneyard\\',
          Channel: 1,
          SoundName: 'BoneyardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ugol',
    name: 'undeadgoldmine2',
    sounds: {
      What: [
        {
          FileNames: 'UndeadMiningWhat1.wav',
          DirectoryBase: 'Buildings\\Undead\\HauntedMine\\',
          Channel: 1,
          SoundName: 'HauntedMineWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ugrv',
    name: 'graveyard',
    sounds: {
      What: [
        {
          FileNames: 'GraveYardWhat1.wav',
          DirectoryBase: 'Buildings\\Undead\\Graveyard\\',
          Channel: 1,
          SoundName: 'GraveyardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'unp1',
    name: 'necropolis1',
    sounds: {
      What: [
        {
          FileNames: 'NecropolisUpgrade1.wav',
          DirectoryBase: 'Buildings\\Undead\\Necropolis\\',
          Channel: 1,
          SoundName: 'Necropolisu1What',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'unp2',
    name: 'necropolis2',
    sounds: {
      What: [
        {
          FileNames: 'NecropolisUpgrade2.wav',
          DirectoryBase: 'Buildings\\Undead\\Necropolis\\',
          Channel: 1,
          SoundName: 'Necropolisu2What',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'unpl',
    name: 'necropolis',
    sounds: {
      What: [
        {
          FileNames: 'NecropolisWhat.wav',
          DirectoryBase: 'Buildings\\Undead\\Necropolis\\',
          Channel: 1,
          SoundName: 'NecropolisWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'usap',
    name: 'sacrificialpit',
    sounds: {
      What: [
        {
          FileNames: 'SacrificialPitWhat1.wav',
          DirectoryBase: 'Buildings\\Undead\\SacrificialPit\\',
          Channel: 1,
          SoundName: 'SacrificialPitWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'usep',
    name: 'crypt',
    sounds: {
      What: [
        {
          FileNames: 'CryptWhat.wav',
          DirectoryBase: 'Buildings\\Undead\\Crypt\\',
          Channel: 1,
          SoundName: 'CryptWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ushp',
    name: 'undeadshipyard',
    sounds: {
      What: [
        {
          FileNames: 'GoblinShipyardWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\GoblinShipyard\\',
          Channel: 1,
          SoundName: 'GoblinShipyardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'uslh',
    name: 'slaughterhouse',
    sounds: {
      What: [
        {
          FileNames: 'SlaughterHouseWhat1.wav',
          DirectoryBase: 'Buildings\\Undead\\SlaughterHouse\\',
          Channel: 1,
          SoundName: 'SlaughterHouseWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'utod',
    name: 'templeofthedamned',
    sounds: {
      What: [
        {
          FileNames: 'TempleOfTheDamnedWhat.wav',
          DirectoryBase: 'Buildings\\Undead\\TempleOfTheDamned\\',
          Channel: 1,
          SoundName: 'TempleOfTheDamnedWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'utom',
    name: 'tombofrelics',
    sounds: {
      What: [
        {
          FileNames: 'TombOfRelicsWhat1.wav',
          DirectoryBase: 'Buildings\\Undead\\TombOfRelics\\',
          Channel: 1,
          SoundName: 'TombOfRelicsWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'uzg1',
    name: 'ziggurat1',
    sounds: {
      What: [
        {
          FileNames: 'ZigguratUpgrade.wav',
          DirectoryBase: 'Buildings\\Undead\\Ziggurat\\',
          Channel: 1,
          SoundName: 'ZigguratUpgradeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'uzg2',
    name: 'frosttower',
    sounds: {
      What: [
        {
          FileNames: 'FrostTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Undead\\Ziggurat\\',
          Channel: 1,
          SoundName: 'FrostTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'uzig',
    name: 'ziggurat',
    sounds: {
      What: [
        {
          FileNames: 'ZigguratWhat.wav',
          DirectoryBase: 'Buildings\\Undead\\Ziggurat\\',
          Channel: 1,
          SoundName: 'ZigguratWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'Nbrn',
    name: 'darkranger',
    sounds: {
      What: [
        {
          FileNames: 'DarkRangerWhat1.wav,DarkRangerWhat2.wav,DarkRangerWhat3.wav,DarkRangerWhat4.wav,DarkRangerWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeRanger\\',
          Channel: 1,
          SoundName: 'DarkRangerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DarkRangerPissed1.wav,DarkRangerPissed2.wav,DarkRangerPissed3.wav,DarkRangerPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeRanger\\',
          Channel: 1,
          SoundName: 'DarkRangerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DarkRangerYesAttack1.wav,DarkRangerYesAttack2.wav,DarkRangerYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeRanger\\',
          Channel: 2,
          SoundName: 'DarkRangerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DarkRangerYes1.wav,DarkRangerYes2.wav,DarkRangerYes3.wav,DarkRangerYes4.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeRanger\\',
          Channel: 3,
          SoundName: 'DarkRangerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DarkRangerReady1.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeRanger\\',
          Channel: 4,
          SoundName: 'DarkRangerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DarkRangerWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeRanger\\',
          Channel: 1,
          SoundName: 'DarkRangerWarcry',
        },
      ],
    },
  },
  {
    id: 'Nbst',
    name: 'beastmaster',
    sounds: {
      What: [
        {
          FileNames: 'OgreBeastMasterWhat1.wav,OgreBeastMasterWhat2.wav,OgreBeastMasterWhat3.wav,OgreBeastMasterWhat4.wav,OgreBeastMasterWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 1,
          SoundName: 'BeastmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'OgreBeastMasterPissed1.wav,OgreBeastMasterPissed2.wav,OgreBeastMasterPissed3.wav,OgreBeastMasterPissed4.wav,OgreBeastMasterPissed5.wav,OgreBeastMasterPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 1,
          SoundName: 'BeastmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'OgreBeastMasterYesAttack1.wav,OgreBeastMasterYesAttack2.wav,OgreBeastMasterYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 2,
          SoundName: 'BeastmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreBeastMasterYes1.wav,OgreBeastMasterYes2.wav,OgreBeastMasterYes3.wav,OgreBeastMasterYes4.wav,OgreBeastMasterYes5.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 3,
          SoundName: 'BeastmasterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreBeastMasterReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 4,
          SoundName: 'BeastmasterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreBeastMasterWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 1,
          SoundName: 'BeastmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'Nngs',
    name: 'seawitch',
    sounds: {
      What: [
        {
          FileNames: 'LadyVashjWhat1.wav,LadyVashjWhat2.wav,LadyVashjWhat3.wav,LadyVashjWhat4.wav,LadyVashjWhat5.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 1,
          SoundName: 'SeaWitchWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'LadyVashjPissed1.wav,LadyVashjPissed2.wav,LadyVashjPissed3.wav,LadyVashjPissed4.wav,LadyVashjPissed5.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 1,
          SoundName: 'SeaWitchPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'LadyVashjYesAttack1.wav,LadyVashjYesAttack2.wav,LadyVashjYesAttack3.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 2,
          SoundName: 'SeaWitchYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LadyVashjYes1.wav,LadyVashjYes2.wav,LadyVashjYes3.wav,LadyVashjYes4.wav,LadyVashjYes5.wav,LadyVashjYes6.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 3,
          SoundName: 'SeaWitchYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LadyVashjReady1.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 4,
          SoundName: 'SeaWitchReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'LadyVashjWarcry1.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 1,
          SoundName: 'SeaWitchWarcry',
        },
      ],
    },
  },
  {
    id: 'Npbm',
    name: 'pandarenbrewmaster',
    sounds: {
      What: [
        {
          FileNames: 'PandarenBrewmasterWhat1.wav,PandarenBrewmasterWhat2.wav,PandarenBrewmasterWhat3.wav,PandarenBrewmasterWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'PandarenBrewmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PandarenBrewmasterPissed1.wav,PandarenBrewmasterPissed2.wav,PandarenBrewmasterPissed3.wav,PandarenBrewmasterPissed4.wav,PandarenBrewmasterPissed5.wav,PandarenBrewmasterPissed6.wav,PandarenBrewmasterPissed7.wav,PandarenBrewmasterPissed8.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'PandarenBrewmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PandarenBrewmasterYesAttack1.wav,PandarenBrewmasterYesAttack2.wav,PandarenBrewmasterYesAttack3.wav,PandarenBrewmasterYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 2,
          SoundName: 'PandarenBrewmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PandarenBrewmasterYes1.wav,PandarenBrewmasterYes2.wav,PandarenBrewmasterYes3.wav,PandarenBrewmasterYes4.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 3,
          SoundName: 'PandarenBrewmasterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PandarenBrewmasterReady1.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 4,
          SoundName: 'PandarenBrewmasterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PandarenBrewmasterWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'PandarenBrewmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'Nalc',
    name: 'alchemist',
    sounds: {
      What: [
        {
          FileNames: 'HeroAlchemistWhat1.wav,HeroAlchemistWhat2.wav,HeroAlchemistWhat3.wav,HeroAlchemistWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroAlchemistPissed1.wav,HeroAlchemistPissed2.wav,HeroAlchemistPissed3.wav,HeroAlchemistPissed4.wav,HeroAlchemistPissed5.wav,HeroAlchemistPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroAlchemistYesAttack1.wav,HeroAlchemistYesAttack2.wav,HeroAlchemistYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 2,
          SoundName: 'HEROGoblinALCHEMISTYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroAlchemistYes1.wav,HeroAlchemistYes2.wav,HeroAlchemistYes3.wav,HeroAlchemistYes4.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 3,
          SoundName: 'HEROGoblinALCHEMISTYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroAlchemistReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroAlchemistWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTWarcry',
        },
      ],
    },
  },
  {
    id: 'Nalm',
    name: 'alchemistmorph',
    sounds: {
      What: [
        {
          FileNames: 'HeroAlchemistWhat1.wav,HeroAlchemistWhat2.wav,HeroAlchemistWhat3.wav,HeroAlchemistWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroAlchemistPissed1.wav,HeroAlchemistPissed2.wav,HeroAlchemistPissed3.wav,HeroAlchemistPissed4.wav,HeroAlchemistPissed5.wav,HeroAlchemistPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroAlchemistYesAttack1.wav,HeroAlchemistYesAttack2.wav,HeroAlchemistYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 2,
          SoundName: 'HEROGoblinALCHEMISTYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroAlchemistYes1.wav,HeroAlchemistYes2.wav,HeroAlchemistYes3.wav,HeroAlchemistYes4.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 3,
          SoundName: 'HEROGoblinALCHEMISTYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroAlchemistReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroAlchemistWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTWarcry',
        },
      ],
    },
  },
  {
    id: 'Nal2',
    name: 'alchemistmorph2',
    sounds: {
      What: [
        {
          FileNames: 'HeroAlchemistWhat1.wav,HeroAlchemistWhat2.wav,HeroAlchemistWhat3.wav,HeroAlchemistWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroAlchemistPissed1.wav,HeroAlchemistPissed2.wav,HeroAlchemistPissed3.wav,HeroAlchemistPissed4.wav,HeroAlchemistPissed5.wav,HeroAlchemistPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroAlchemistYesAttack1.wav,HeroAlchemistYesAttack2.wav,HeroAlchemistYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 2,
          SoundName: 'HEROGoblinALCHEMISTYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroAlchemistYes1.wav,HeroAlchemistYes2.wav,HeroAlchemistYes3.wav,HeroAlchemistYes4.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 3,
          SoundName: 'HEROGoblinALCHEMISTYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroAlchemistReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroAlchemistWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTWarcry',
        },
      ],
    },
  },
  {
    id: 'Nal3',
    name: 'alchemistmorph3',
    sounds: {
      What: [
        {
          FileNames: 'HeroAlchemistWhat1.wav,HeroAlchemistWhat2.wav,HeroAlchemistWhat3.wav,HeroAlchemistWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroAlchemistPissed1.wav,HeroAlchemistPissed2.wav,HeroAlchemistPissed3.wav,HeroAlchemistPissed4.wav,HeroAlchemistPissed5.wav,HeroAlchemistPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroAlchemistYesAttack1.wav,HeroAlchemistYesAttack2.wav,HeroAlchemistYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 2,
          SoundName: 'HEROGoblinALCHEMISTYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroAlchemistYes1.wav,HeroAlchemistYes2.wav,HeroAlchemistYes3.wav,HeroAlchemistYes4.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 3,
          SoundName: 'HEROGoblinALCHEMISTYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroAlchemistReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroAlchemistWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\HEROGoblinALCHEMIST',
          Channel: 1,
          SoundName: 'HEROGoblinALCHEMISTWarcry',
        },
      ],
    },
  },
  {
    id: 'Ntin',
    name: 'tinker',
    sounds: {
      What: [
        {
          FileNames: 'HeroTinkerWhat1.wav,HeroTinkerWhat2.wav,HeroTinkerWhat3.wav,HeroTinkerWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 1,
          SoundName: 'HeroTinkerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroTinkerPissed1.wav,HeroTinkerPissed2.wav,HeroTinkerPissed3.wav,HeroTinkerPissed4.wav,HeroTinkerPissed5.wav,HeroTinkerPissed6.wav,HeroTinkerPissed7.wav,HeroTinkerPissed8.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 1,
          SoundName: 'HeroTinkerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroTinkerYesAttack1.wav,HeroTinkerYesAttack2.wav,HeroTinkerYesAttack3.wav,HeroTinkerYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 2,
          SoundName: 'HeroTinkerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroTinkerYes1.wav,HeroTinkerYes2.wav,HeroTinkerYes3.wav,HeroTinkerYes4.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 3,
          SoundName: 'HeroTinkerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroTinkerReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 1,
          SoundName: 'HeroTinkerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroTinkerWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 1,
          SoundName: 'HeroTinkerWarcry',
        },
      ],
    },
  },
  {
    id: 'Nrob',
    name: 'robogoblintinker',
    sounds: {
      What: [
        {
          FileNames: 'HeroTinkerWhat1.wav,HeroTinkerWhat2.wav,HeroTinkerWhat3.wav,HeroTinkerWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 1,
          SoundName: 'HeroTinkerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroTinkerPissed1.wav,HeroTinkerPissed2.wav,HeroTinkerPissed3.wav,HeroTinkerPissed4.wav,HeroTinkerPissed5.wav,HeroTinkerPissed6.wav,HeroTinkerPissed7.wav,HeroTinkerPissed8.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 1,
          SoundName: 'HeroTinkerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroTinkerYesAttack1.wav,HeroTinkerYesAttack2.wav,HeroTinkerYesAttack3.wav,HeroTinkerYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 2,
          SoundName: 'HeroTinkerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroTinkerYes1.wav,HeroTinkerYes2.wav,HeroTinkerYes3.wav,HeroTinkerYes4.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 3,
          SoundName: 'HeroTinkerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroTinkerReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 1,
          SoundName: 'HeroTinkerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroTinkerWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinker',
          Channel: 1,
          SoundName: 'HeroTinkerWarcry',
        },
      ],
    },
  },
  {
    id: 'ncgb',
    name: 'clockwerkgoblin1',
    sounds: {
      What: [
        {
          FileNames: 'ClockwerkGoblinWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ClockwerkGoblinYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ClockwerkGoblinYes1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ClockwerkGoblinReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncg1',
    name: 'clockwerkgoblin2',
    sounds: {
      What: [
        {
          FileNames: 'ClockwerkGoblinWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ClockwerkGoblinYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ClockwerkGoblinYes1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ClockwerkGoblinReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncg2',
    name: 'clockwerkgoblin3',
    sounds: {
      What: [
        {
          FileNames: 'ClockwerkGoblinWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ClockwerkGoblinYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ClockwerkGoblinYes1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ClockwerkGoblinReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncg3',
    name: 'clockwerkgoblin4',
    sounds: {
      What: [
        {
          FileNames: 'ClockwerkGoblinWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ClockwerkGoblinYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ClockwerkGoblinYes1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ClockwerkGoblinReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroTinkerRobot',
          Channel: 1,
          SoundName: 'ClockwerkGoblinReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfac',
    name: 'pocketfactory',
    sounds: {
      What: [
        {
          FileNames: 'PocketFactoryWhat.wav',
          DirectoryBase: '\\Units\\Creeps\\HeroTinkerFactory',
          Channel: 1,
          SoundName: 'PocketFactoryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfa1',
    name: 'pocketfactory2',
    sounds: {
      What: [
        {
          FileNames: 'PocketFactoryWhat.wav',
          DirectoryBase: '\\Units\\Creeps\\HeroTinkerFactory',
          Channel: 1,
          SoundName: 'PocketFactoryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfa2',
    name: 'pocketfactory3',
    sounds: {
      What: [
        {
          FileNames: 'PocketFactoryWhat.wav',
          DirectoryBase: '\\Units\\Creeps\\HeroTinkerFactory',
          Channel: 1,
          SoundName: 'PocketFactoryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'Nplh',
    name: 'pitlord',
    sounds: {
      What: [
        {
          FileNames: 'HPitLordWhat1.wav,HPitLordWhat2.wav,HPitLordWhat3.wav,HPitLordWhat4.wav,HPitLordWhat5.wav',
          DirectoryBase: 'Units\\Demon\\HeroPitLord\\',
          Channel: 1,
          SoundName: 'HeroPitLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HPitLordPissed1.wav,HPitLordPissed2.wav,HPitLordPissed3.wav,HPitLordPissed4.wav,HPitLordPissed5.wav',
          DirectoryBase: 'Units\\Demon\\HeroPitLord\\',
          Channel: 1,
          SoundName: 'HeroPitLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HPitLordYesAttack1.wav,HPitLordYesAttack2.wav,HPitLordYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\HeroPitLord\\',
          Channel: 2,
          SoundName: 'HeroPitLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HPitLordYes1.wav,HPitLordYes2.wav,HPitLordYes3.wav,HPitLordYes4.wav,HPitLordYes5.wav',
          DirectoryBase: 'Units\\Demon\\HeroPitLord\\',
          Channel: 3,
          SoundName: 'HeroPitLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HPitLordReady1.wav',
          DirectoryBase: 'Units\\Demon\\HeroPitLord\\',
          Channel: 4,
          SoundName: 'HeroPitLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HPitLordWarcry1.wav',
          DirectoryBase: 'Units\\Demon\\HeroPitLord\\',
          Channel: 1,
          SoundName: 'HeroPitLordWarcry',
        },
      ],
    },
  },
  {
    id: 'Nfir',
    name: 'firelord',
    sounds: {
      What: [
        {
          FileNames: 'HeroFirelordWhat1.wav,HeroFirelordWhat2.wav,HeroFirelordWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HeroFlameLord',
          Channel: 1,
          SoundName: 'HeroFireLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroFirelordPissed1.wav,HeroFirelordPissed2.wav,HeroFirelordPissed3.wav,HeroFirelordPissed4.wav,HeroFirelordPissed5.wav,HeroFirelordPissed6.wav,HeroFirelordPissed7.wav',
          DirectoryBase: 'Units\\Creeps\\HeroFlameLord',
          Channel: 1,
          SoundName: 'HeroFireLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroFirelordYesAttack1.wav,HeroFirelordYesAttack2.wav,HeroFirelordYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\HeroFlameLord',
          Channel: 2,
          SoundName: 'HeroFireLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroFirelordYes1.wav,HeroFirelordYes2.wav,HeroFirelordYes3.wav,HeroFirelordYes4.wav',
          DirectoryBase: 'Units\\Creeps\\HeroFlameLord',
          Channel: 3,
          SoundName: 'HeroFireLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroFirelordReady1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroFlameLord',
          Channel: 1,
          SoundName: 'HeroFireLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroFirelordWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\HeroFlameLord',
          Channel: 1,
          SoundName: 'HeroFireLordWarcry',
        },
      ],
    },
  },
  {
    id: 'nlv1',
    name: 'lavaspawn',
    sounds: {
      What: [
        {
          FileNames: 'LavaSpawnWhat1.wav,LavaSpawnWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 1,
          SoundName: 'LavaSpawnWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LavaSpawnYesAttack1.wav,LavaSpawnYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 2,
          SoundName: 'LavaSpawnYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LavaSpawnYes1.wav,LavaSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 3,
          SoundName: 'LavaSpawnYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nlv2',
    name: 'lavaspawn2',
    sounds: {
      What: [
        {
          FileNames: 'LavaSpawnWhat1.wav,LavaSpawnWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 1,
          SoundName: 'LavaSpawnWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LavaSpawnYesAttack1.wav,LavaSpawnYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 2,
          SoundName: 'LavaSpawnYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LavaSpawnYes1.wav,LavaSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 3,
          SoundName: 'LavaSpawnYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nlv3',
    name: 'lavaspawn3',
    sounds: {
      What: [
        {
          FileNames: 'LavaSpawnWhat1.wav,LavaSpawnWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 1,
          SoundName: 'LavaSpawnWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LavaSpawnYesAttack1.wav,LavaSpawnYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 2,
          SoundName: 'LavaSpawnYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LavaSpawnYes1.wav,LavaSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\LavaSpawn',
          Channel: 3,
          SoundName: 'LavaSpawnYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndr1',
    name: 'darkminion1',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ndr2',
    name: 'darkminion2',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ndr3',
    name: 'darkminion3',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngz1',
    name: 'grizzlybear1',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'ngz2',
    name: 'grizzlybear2',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'ngz3',
    name: 'grizzlybear3',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'ngzc',
    name: 'misha1',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'ngzd',
    name: 'misha2',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'ngza',
    name: 'misha3',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'ngz4',
    name: 'misha4',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'npn1',
    name: 'panda1',
    sounds: {
      What: [
        {
          FileNames: 'PandarenBrewmasterFireWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'FirePandarenBrewmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PandarenBrewmasterFirePissed1.wav,PandarenBrewmasterFirePissed2.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'FirePandarenBrewmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PandarenBrewmasterFireYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 2,
          SoundName: 'FirePandarenBrewmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PandarenBrewmasterFireYes1.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 3,
          SoundName: 'FirePandarenBrewmasterYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'PandarenBrewmasterFireWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'FirePandarenBrewmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'npn2',
    name: 'panda2',
    sounds: {
      What: [
        {
          FileNames: 'PandarenBrewmasterStormWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'StormPandarenBrewmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PandarenBrewmasterStormPissed1.wav,PandarenBrewmasterStormPissed2.wav,PandarenBrewmasterStormPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'StormPandarenBrewmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PandarenBrewmasterStormYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 2,
          SoundName: 'StormPandarenBrewmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PandarenBrewmasterStormYes1.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 3,
          SoundName: 'StormPandarenBrewmasterYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'PandarenBrewmasterStormWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'StormPandarenBrewmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'npn3',
    name: 'panda3',
    sounds: {
      What: [
        {
          FileNames: 'PandarenBrewmasterEarthWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'EarthPandarenBrewmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PandarenBrewmasterEarthPissed1.wav,PandarenBrewmasterEarthPissed2.wav,PandarenBrewmasterEarthPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'EarthPandarenBrewmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PandarenBrewmasterEarthYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 2,
          SoundName: 'EarthPandarenBrewmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PandarenBrewmasterEarthYes1.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 3,
          SoundName: 'EarthPandarenBrewmasterYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'PandarenBrewmasterEarthWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'EarthPandarenBrewmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'npn4',
    name: 'panda4',
    sounds: {
      What: [
        {
          FileNames: 'PandarenBrewmasterFireWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'FirePandarenBrewmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PandarenBrewmasterFirePissed1.wav,PandarenBrewmasterFirePissed2.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'FirePandarenBrewmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PandarenBrewmasterFireYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 2,
          SoundName: 'FirePandarenBrewmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PandarenBrewmasterFireYes1.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 3,
          SoundName: 'FirePandarenBrewmasterYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'PandarenBrewmasterFireWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\FirePandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'FirePandarenBrewmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'npn5',
    name: 'panda5',
    sounds: {
      What: [
        {
          FileNames: 'PandarenBrewmasterStormWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'StormPandarenBrewmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PandarenBrewmasterStormPissed1.wav,PandarenBrewmasterStormPissed2.wav,PandarenBrewmasterStormPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'StormPandarenBrewmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PandarenBrewmasterStormYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 2,
          SoundName: 'StormPandarenBrewmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PandarenBrewmasterStormYes1.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 3,
          SoundName: 'StormPandarenBrewmasterYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'PandarenBrewmasterStormWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\StormPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'StormPandarenBrewmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'npn6',
    name: 'panda6',
    sounds: {
      What: [
        {
          FileNames: 'PandarenBrewmasterEarthWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'EarthPandarenBrewmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PandarenBrewmasterEarthPissed1.wav,PandarenBrewmasterEarthPissed2.wav,PandarenBrewmasterEarthPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'EarthPandarenBrewmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PandarenBrewmasterEarthYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 2,
          SoundName: 'EarthPandarenBrewmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PandarenBrewmasterEarthYes1.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 3,
          SoundName: 'EarthPandarenBrewmasterYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'PandarenBrewmasterEarthWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\EarthPandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'EarthPandarenBrewmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'nqb1',
    name: 'quillbeast1',
    sounds: {
      What: [
        {
          FileNames: 'QuillBoarWhat1.wav,QuillBoarWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 1,
          SoundName: 'QuillBeastWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 2,
          SoundName: 'QuillBeastYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 3,
          SoundName: 'QuillBeastYes',
        },
      ],
      Ready: [
        {
          FileNames: 'QuillBoarReady1.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 4,
          SoundName: 'QuillBeastReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nqb2',
    name: 'quillbeast2',
    sounds: {
      What: [
        {
          FileNames: 'QuillBoarWhat1.wav,QuillBoarWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 1,
          SoundName: 'QuillBeastWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 2,
          SoundName: 'QuillBeastYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 3,
          SoundName: 'QuillBeastYes',
        },
      ],
      Ready: [
        {
          FileNames: 'QuillBoarReady1.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 4,
          SoundName: 'QuillBeastReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nqb3',
    name: 'quillbeast3',
    sounds: {
      What: [
        {
          FileNames: 'QuillBoarWhat1.wav,QuillBoarWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 1,
          SoundName: 'QuillBeastWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 2,
          SoundName: 'QuillBeastYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 3,
          SoundName: 'QuillBeastYes',
        },
      ],
      Ready: [
        {
          FileNames: 'QuillBoarReady1.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 4,
          SoundName: 'QuillBeastReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nqb4',
    name: 'quillbeast4',
    sounds: {
      What: [
        {
          FileNames: 'QuillBoarWhat1.wav,QuillBoarWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 1,
          SoundName: 'QuillBeastWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 2,
          SoundName: 'QuillBeastYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 3,
          SoundName: 'QuillBeastYes',
        },
      ],
      Ready: [
        {
          FileNames: 'QuillBoarReady1.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 4,
          SoundName: 'QuillBeastReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nwe1',
    name: 'wareagle1',
    sounds: {
      What: [
        {
          FileNames: 'HawkWhat1.wav,HawkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 1,
          SoundName: 'WarEagleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'HawkYes1.wav,HawkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 2,
          SoundName: 'WarEagleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HawkYes1.wav,HawkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 3,
          SoundName: 'WarEagleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HawkReady1.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 4,
          SoundName: 'WarEagleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nwe2',
    name: 'wareagle2',
    sounds: {
      What: [
        {
          FileNames: 'HawkWhat1.wav,HawkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 1,
          SoundName: 'WarEagleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'HawkYes1.wav,HawkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 2,
          SoundName: 'WarEagleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HawkYes1.wav,HawkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 3,
          SoundName: 'WarEagleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HawkReady1.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 4,
          SoundName: 'WarEagleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nwe3',
    name: 'wareagle3',
    sounds: {
      What: [
        {
          FileNames: 'HawkWhat1.wav,HawkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 1,
          SoundName: 'WarEagleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'HawkYes1.wav,HawkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 2,
          SoundName: 'WarEagleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HawkYes1.wav,HawkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 3,
          SoundName: 'WarEagleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HawkReady1.wav',
          DirectoryBase: 'Units\\Creeps\\WarEagle\\',
          Channel: 4,
          SoundName: 'WarEagleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nadk',
    name: 'azuredrake',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nadr',
    name: 'azuredragon',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nadw',
    name: 'azuredragonwhelp',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nahy',
    name: 'ancienthydra',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nanb',
    name: 'barbedarachnathid',
    sounds: {
      What: [
        {
          FileNames: 'ArachnathidWhat1.wav,ArachnathidWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 1,
          SoundName: 'ArachnathidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 2,
          SoundName: 'ArachnathidYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 3,
          SoundName: 'ArachnathidYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArachnathidWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 4,
          SoundName: 'ArachnathidReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nanm',
    name: 'barbedarachnathidmerc',
    sounds: {
      What: [
        {
          FileNames: 'ArachnathidWhat1.wav,ArachnathidWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 1,
          SoundName: 'ArachnathidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 2,
          SoundName: 'ArachnathidYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 3,
          SoundName: 'ArachnathidYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArachnathidWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 4,
          SoundName: 'ArachnathidReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nanc',
    name: 'crystalarachnathid',
    sounds: {
      What: [
        {
          FileNames: 'ArachnathidWhat1.wav,ArachnathidWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 1,
          SoundName: 'ArachnathidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 2,
          SoundName: 'ArachnathidYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 3,
          SoundName: 'ArachnathidYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArachnathidWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 4,
          SoundName: 'ArachnathidReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nane',
    name: 'earthborerarachnathid',
    sounds: {
      What: [
        {
          FileNames: 'ArachnathidWhat1.wav,ArachnathidWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 1,
          SoundName: 'ArachnathidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 2,
          SoundName: 'ArachnathidYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 3,
          SoundName: 'ArachnathidYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArachnathidWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 4,
          SoundName: 'ArachnathidReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nano',
    name: 'overlordarachnathid',
    sounds: {
      What: [
        {
          FileNames: 'ArachnathidWhat1.wav,ArachnathidWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 1,
          SoundName: 'ArachnathidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 2,
          SoundName: 'ArachnathidYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 3,
          SoundName: 'ArachnathidYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArachnathidWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 4,
          SoundName: 'ArachnathidReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nanw',
    name: 'warriorarachnathid',
    sounds: {
      What: [
        {
          FileNames: 'ArachnathidWhat1.wav,ArachnathidWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 1,
          SoundName: 'ArachnathidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 2,
          SoundName: 'ArachnathidYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 3,
          SoundName: 'ArachnathidYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArachnathidWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 4,
          SoundName: 'ArachnathidReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'narg',
    name: 'battlegolem',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nass',
    name: 'assassin',
    sounds: {
      What: [
        {
          FileNames: 'BanditWhat1.wav,BanditWhat2.wav,BanditWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BanditPissed1.wav,BanditPissed2.wav,BanditPissed3.wav,BanditPissed4.wav,BanditPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BanditYesAttack1.wav,BanditYesAttack2.wav,BanditYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 2,
          SoundName: 'BanditYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BanditYes1.wav,BanditYes2.wav,BanditYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 3,
          SoundName: 'BanditYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BanditWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 4,
          SoundName: 'BanditReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BanditWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWarcry',
        },
      ],
    },
  },
  {
    id: 'nbal',
    name: 'doomguard',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'DoomGuardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'DoomGuardYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'DoomGuardYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nba2',
    name: 'doomguardsummoned',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'DoomGuardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'DoomGuardYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'DoomGuardYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nban',
    name: 'bandit',
    sounds: {
      What: [
        {
          FileNames: 'BanditWhat1.wav,BanditWhat2.wav,BanditWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BanditPissed1.wav,BanditPissed2.wav,BanditPissed3.wav,BanditPissed4.wav,BanditPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BanditYesAttack1.wav,BanditYesAttack2.wav,BanditYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 2,
          SoundName: 'BanditYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BanditYes1.wav,BanditYes2.wav,BanditYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 3,
          SoundName: 'BanditYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BanditWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 4,
          SoundName: 'BanditReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BanditWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWarcry',
        },
      ],
    },
  },
  {
    id: 'nbda',
    name: 'bluedragonspawnapprentice',
    sounds: {
      What: [
        {
          FileNames: 'DragonSpawnWhat1.wav,DragonSpawnWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 1,
          SoundName: 'DragonSpawnWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 2,
          SoundName: 'DragonSpawnYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 3,
          SoundName: 'DragonSpawnYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonSpawnWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 4,
          SoundName: 'DragonSpawnReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbdk',
    name: 'blackdrake',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbdm',
    name: 'bluedragonspawnmeddler',
    sounds: {
      What: [
        {
          FileNames: 'DragonSpawnWhat1.wav,DragonSpawnWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 1,
          SoundName: 'DragonSpawnWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 2,
          SoundName: 'DragonSpawnYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 3,
          SoundName: 'DragonSpawnYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonSpawnWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 4,
          SoundName: 'DragonSpawnReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbdo',
    name: 'bluedragonspawnoverseer',
    sounds: {
      What: [
        {
          FileNames: 'DragonSpawnWhat1.wav,DragonSpawnWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 1,
          SoundName: 'DragonSpawnWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 2,
          SoundName: 'DragonSpawnYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 3,
          SoundName: 'DragonSpawnYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonSpawnWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 4,
          SoundName: 'DragonSpawnReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbdr',
    name: 'blackdragonwhelp',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbds',
    name: 'bluedragonspawnsorceror',
    sounds: {
      What: [
        {
          FileNames: 'DragonSpawnWhat1.wav,DragonSpawnWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 1,
          SoundName: 'DragonSpawnWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 2,
          SoundName: 'DragonSpawnYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 3,
          SoundName: 'DragonSpawnYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonSpawnWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 4,
          SoundName: 'DragonSpawnReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbdw',
    name: 'bluedragonspawnwarrior',
    sounds: {
      What: [
        {
          FileNames: 'DragonSpawnWhat1.wav,DragonSpawnWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 1,
          SoundName: 'DragonSpawnWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 2,
          SoundName: 'DragonSpawnYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonSpawnYes1.wav,DragonSpawnYes2.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 3,
          SoundName: 'DragonSpawnYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonSpawnWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\DragonSpawnBlue\\',
          Channel: 4,
          SoundName: 'DragonSpawnReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbld',
    name: 'banditlord',
    sounds: {
      What: [
        {
          FileNames: 'BanditWhat1.wav,BanditWhat2.wav,BanditWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BanditPissed1.wav,BanditPissed2.wav,BanditPissed3.wav,BanditPissed4.wav,BanditPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BanditYesAttack1.wav,BanditYesAttack2.wav,BanditYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 2,
          SoundName: 'BanditYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BanditYes1.wav,BanditYes2.wav,BanditYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 3,
          SoundName: 'BanditYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BanditWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 4,
          SoundName: 'BanditReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BanditWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWarcry',
        },
      ],
    },
  },
  {
    id: 'nbnb',
    name: 'barbedarachnathidburrowed',
    sounds: {
      What: [
        {
          FileNames: 'ArachnathidWhat1.wav,ArachnathidWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 1,
          SoundName: 'ArachnathidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 2,
          SoundName: 'ArachnathidYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArachnathidYes1.wav,ArachnathidYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 3,
          SoundName: 'ArachnathidYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArachnathidWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Archnathid\\',
          Channel: 4,
          SoundName: 'ArachnathidReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbot',
    name: 'transportship',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbrg',
    name: 'brigand',
    sounds: {
      What: [
        {
          FileNames: 'BanditWhat1.wav,BanditWhat2.wav,BanditWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BanditPissed1.wav,BanditPissed2.wav,BanditPissed3.wav,BanditPissed4.wav,BanditPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BanditYesAttack1.wav,BanditYesAttack2.wav,BanditYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 2,
          SoundName: 'BanditYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BanditYes1.wav,BanditYes2.wav,BanditYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 3,
          SoundName: 'BanditYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BanditWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 4,
          SoundName: 'BanditReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BanditWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWarcry',
        },
      ],
    },
  },
  {
    id: 'nbwm',
    name: 'blackdragon',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbzd',
    name: 'bronzedragon',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbzk',
    name: 'bronzedrake',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbzw',
    name: 'bronzedragonwhelp',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncea',
    name: 'centaurarcher',
    sounds: {
      What: [
        {
          FileNames: 'CentaurArcherWhat1.wav,CentaurArcherWhat2.wav,CentaurArcherWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 1,
          SoundName: 'CentaurArcherWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CentaurArcherPissed1.wav,CentaurArcherPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 1,
          SoundName: 'CentaurArcherPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CentaurArcherYesAttack1.wav,CentaurArcherYesAttack2.wav,CentaurArcherYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 2,
          SoundName: 'CentaurArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CentaurArcherYes1.wav,CentaurArcherYes2.wav,CentaurArcherYes3.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 3,
          SoundName: 'CentaurArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CentaurArcherReady1.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 4,
          SoundName: 'CentaurArcherReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncen',
    name: 'centauroutrunner',
    sounds: {
      What: [
        {
          FileNames: 'CentaurWhat1.wav,CentaurWhat2.wav,CentaurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 1,
          SoundName: 'CentaurWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CentaurPissed1.wav,CentaurPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 1,
          SoundName: 'CentaurPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CentaurYesAttack1.wav,CentaurYesAttack2.wav,CentaurYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 2,
          SoundName: 'CentaurYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CentaurYes1.wav,CentaurYes2.wav,CentaurYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 3,
          SoundName: 'CentaurYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CentaurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 4,
          SoundName: 'CentaurReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncer',
    name: 'centaurdrudge',
    sounds: {
      What: [
        {
          FileNames: 'CentaurWhat1.wav,CentaurWhat2.wav,CentaurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 1,
          SoundName: 'CentaurWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CentaurPissed1.wav,CentaurPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 1,
          SoundName: 'CentaurPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CentaurYesAttack1.wav,CentaurYesAttack2.wav,CentaurYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 2,
          SoundName: 'CentaurYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CentaurYes1.wav,CentaurYes2.wav,CentaurYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 3,
          SoundName: 'CentaurYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CentaurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 4,
          SoundName: 'CentaurReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncfs',
    name: 'wateryminioncliffrunner',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncim',
    name: 'centaurimpaler',
    sounds: {
      What: [
        {
          FileNames: 'CentaurArcherWhat1.wav,CentaurArcherWhat2.wav,CentaurArcherWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 1,
          SoundName: 'CentaurArcherWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CentaurArcherPissed1.wav,CentaurArcherPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 1,
          SoundName: 'CentaurArcherPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CentaurArcherYesAttack1.wav,CentaurArcherYesAttack2.wav,CentaurArcherYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 2,
          SoundName: 'CentaurArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CentaurArcherYes1.wav,CentaurArcherYes2.wav,CentaurArcherYes3.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 3,
          SoundName: 'CentaurArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CentaurArcherReady1.wav',
          DirectoryBase: 'Units\\Creeps\\CentaurArcher\\',
          Channel: 4,
          SoundName: 'CentaurArcherReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncks',
    name: 'centaursorceror',
    sounds: {
      What: [
        {
          FileNames: 'CentaurWhat1.wav,CentaurWhat2.wav,CentaurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 1,
          SoundName: 'CentaurWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CentaurPissed1.wav,CentaurPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 1,
          SoundName: 'CentaurPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CentaurYesAttack1.wav,CentaurYesAttack2.wav,CentaurYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 2,
          SoundName: 'CentaurYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CentaurYes1.wav,CentaurYes2.wav,CentaurYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 3,
          SoundName: 'CentaurYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CentaurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 4,
          SoundName: 'CentaurReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncnk',
    name: 'centaurkhan',
    sounds: {
      What: [
        {
          FileNames: 'CentaurWhat1.wav,CentaurWhat2.wav,CentaurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 1,
          SoundName: 'CentaurWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CentaurPissed1.wav,CentaurPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 1,
          SoundName: 'CentaurPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CentaurYesAttack1.wav,CentaurYesAttack2.wav,CentaurYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 2,
          SoundName: 'CentaurYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CentaurYes1.wav,CentaurYes2.wav,CentaurYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 3,
          SoundName: 'CentaurYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CentaurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Centaur\\',
          Channel: 4,
          SoundName: 'CentaurReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ndqn',
    name: 'succubus',
    sounds: {
      What: [
        {
          FileNames: 'SuccubusWhat1.wav,SuccubusWhat2.wav,SuccubusWhat3.wav,SuccubusWhat4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SuccubusPissed1.wav,SuccubusPissed2.wav,SuccubusPissed3.wav,SuccubusPissed4.wav,SuccubusPissed5.wav,SuccubusPissed6.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SuccubusYesAttack1.wav,SuccubusYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 2,
          SoundName: 'DemonessYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SuccubusYes1.wav,SuccubusYes2.wav,SuccubusYes3.wav,SuccubusYes4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 3,
          SoundName: 'DemonessYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SuccubusReady1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 4,
          SoundName: 'DemonessReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SuccubusWarcry1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWarcry',
        },
      ],
    },
  },
  {
    id: 'ndqp',
    name: 'maidenofpain',
    sounds: {
      What: [
        {
          FileNames: 'SuccubusWhat1.wav,SuccubusWhat2.wav,SuccubusWhat3.wav,SuccubusWhat4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SuccubusPissed1.wav,SuccubusPissed2.wav,SuccubusPissed3.wav,SuccubusPissed4.wav,SuccubusPissed5.wav,SuccubusPissed6.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SuccubusYesAttack1.wav,SuccubusYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 2,
          SoundName: 'DemonessYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SuccubusYes1.wav,SuccubusYes2.wav,SuccubusYes3.wav,SuccubusYes4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 3,
          SoundName: 'DemonessYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SuccubusReady1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 4,
          SoundName: 'DemonessReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SuccubusWarcry1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWarcry',
        },
      ],
    },
  },
  {
    id: 'ndqs',
    name: 'queenofsuffering',
    sounds: {
      What: [
        {
          FileNames: 'SuccubusWhat1.wav,SuccubusWhat2.wav,SuccubusWhat3.wav,SuccubusWhat4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SuccubusPissed1.wav,SuccubusPissed2.wav,SuccubusPissed3.wav,SuccubusPissed4.wav,SuccubusPissed5.wav,SuccubusPissed6.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SuccubusYesAttack1.wav,SuccubusYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 2,
          SoundName: 'DemonessYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SuccubusYes1.wav,SuccubusYes2.wav,SuccubusYes3.wav,SuccubusYes4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 3,
          SoundName: 'DemonessYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SuccubusReady1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 4,
          SoundName: 'DemonessReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SuccubusWarcry1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWarcry',
        },
      ],
    },
  },
  {
    id: 'ndqt',
    name: 'viletemptress',
    sounds: {
      What: [
        {
          FileNames: 'SuccubusWhat1.wav,SuccubusWhat2.wav,SuccubusWhat3.wav,SuccubusWhat4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SuccubusPissed1.wav,SuccubusPissed2.wav,SuccubusPissed3.wav,SuccubusPissed4.wav,SuccubusPissed5.wav,SuccubusPissed6.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SuccubusYesAttack1.wav,SuccubusYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 2,
          SoundName: 'DemonessYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SuccubusYes1.wav,SuccubusYes2.wav,SuccubusYes3.wav,SuccubusYes4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 3,
          SoundName: 'DemonessYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SuccubusReady1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 4,
          SoundName: 'DemonessReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SuccubusWarcry1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWarcry',
        },
      ],
    },
  },
  {
    id: 'ndqv',
    name: 'viletormentor',
    sounds: {
      What: [
        {
          FileNames: 'SuccubusWhat1.wav,SuccubusWhat2.wav,SuccubusWhat3.wav,SuccubusWhat4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SuccubusPissed1.wav,SuccubusPissed2.wav,SuccubusPissed3.wav,SuccubusPissed4.wav,SuccubusPissed5.wav,SuccubusPissed6.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SuccubusYesAttack1.wav,SuccubusYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 2,
          SoundName: 'DemonessYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SuccubusYes1.wav,SuccubusYes2.wav,SuccubusYes3.wav,SuccubusYes4.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 3,
          SoundName: 'DemonessYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SuccubusReady1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 4,
          SoundName: 'DemonessReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SuccubusWarcry1.wav',
          DirectoryBase: 'Units\\Demon\\Demoness\\',
          Channel: 1,
          SoundName: 'DemonessWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrv',
    name: 'revenantofthedepths',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ndtb',
    name: 'darktrollberserker',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'ndth',
    name: 'darktrollhighpriest',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollShadowPriestYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollShadowPriestYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollShadowPriestReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestWarcry',
        },
      ],
    },
  },
  {
    id: 'ndtp',
    name: 'darktrollshadowpriest',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollShadowPriestYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollShadowPriestYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollShadowPriestReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestWarcry',
        },
      ],
    },
  },
  {
    id: 'ndtr',
    name: 'darktroll',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'ndtt',
    name: 'darktrolltrapper',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'ndtw',
    name: 'darktrollwarlord',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'nehy',
    name: 'elderhydra',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nelb',
    name: 'bereserkelemental',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'WaterElementalYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'WaterElementalYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nele',
    name: 'enragedelemental',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'WaterElementalYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'WaterElementalYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nenc',
    name: 'corruptedent',
    sounds: {
      What: [
        {
          FileNames: 'EntWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 1,
          SoundName: 'CorruptedEntWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'EntYes1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 3,
          SoundName: 'CorruptedEntYes',
        },
      ],
      Ready: [
        {
          FileNames: 'EntReady1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 4,
          SoundName: 'CorruptedEntReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nenf',
    name: 'enforcer',
    sounds: {
      What: [
        {
          FileNames: 'BanditWhat1.wav,BanditWhat2.wav,BanditWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BanditPissed1.wav,BanditPissed2.wav,BanditPissed3.wav,BanditPissed4.wav,BanditPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BanditYesAttack1.wav,BanditYesAttack2.wav,BanditYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 2,
          SoundName: 'BanditYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BanditYes1.wav,BanditYes2.wav,BanditYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 3,
          SoundName: 'BanditYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BanditWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 4,
          SoundName: 'BanditReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BanditWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWarcry',
        },
      ],
    },
  },
  {
    id: 'nenp',
    name: 'poisonent',
    sounds: {
      What: [
        {
          FileNames: 'EntWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 1,
          SoundName: 'CorruptedEntWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'EntYes1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 3,
          SoundName: 'CorruptedEntYes',
        },
      ],
      Ready: [
        {
          FileNames: 'EntReady1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 4,
          SoundName: 'CorruptedEntReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nepl',
    name: 'plagueent',
    sounds: {
      What: [
        {
          FileNames: 'EntWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 1,
          SoundName: 'CorruptedEntWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'EntYes1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 3,
          SoundName: 'CorruptedEntYes',
        },
      ],
      Ready: [
        {
          FileNames: 'EntReady1.wav',
          DirectoryBase: 'Units\\Creeps\\CorruptedEnt\\',
          Channel: 4,
          SoundName: 'CorruptedEntReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nerd',
    name: 'eredardiabolist',
    sounds: {
      What: [
        {
          FileNames: 'PitLordWhat1.wav,PitLordWhat2.wav,PitLordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 1,
          SoundName: 'PitLordWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'PitLordYesAttack1.wav,PitLordYesAttack2.wav,PitLordYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 2,
          SoundName: 'PitLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PitLordYes1.wav,PitLordYes2.wav,PitLordYes3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 3,
          SoundName: 'PitLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PitLordWhat1.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 4,
          SoundName: 'PitLordReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ners',
    name: 'eredarsorceror',
    sounds: {
      What: [
        {
          FileNames: 'PitLordWhat1.wav,PitLordWhat2.wav,PitLordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 1,
          SoundName: 'PitLordWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'PitLordYesAttack1.wav,PitLordYesAttack2.wav,PitLordYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 2,
          SoundName: 'PitLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PitLordYes1.wav,PitLordYes2.wav,PitLordYes3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 3,
          SoundName: 'PitLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PitLordWhat1.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 4,
          SoundName: 'PitLordReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nerw',
    name: 'eredarwarlock',
    sounds: {
      What: [
        {
          FileNames: 'PitLordWhat1.wav,PitLordWhat2.wav,PitLordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 1,
          SoundName: 'PitLordWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'PitLordYesAttack1.wav,PitLordYesAttack2.wav,PitLordYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 2,
          SoundName: 'PitLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PitLordYes1.wav,PitLordYes2.wav,PitLordYes3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 3,
          SoundName: 'PitLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PitLordWhat1.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 4,
          SoundName: 'PitLordReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfel',
    name: 'felstalker',
    sounds: {
      What: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 1,
          SoundName: 'FelhoundWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FelHoundYesAttack1.wav,FelHoundYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 2,
          SoundName: 'FelhoundYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FelHoundYes1.wav,FelHoundYes2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 3,
          SoundName: 'FelhoundYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 4,
          SoundName: 'FelhoundReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfgb',
    name: 'bloodfiend',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'DoomGuardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'DoomGuardYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'DoomGuardYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfgo',
    name: 'forgottenone',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfgt',
    name: 'tentacle',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfgu',
    name: 'felguard',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'DoomGuardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'DoomGuardYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'DoomGuardYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfod',
    name: 'facelessonedeathbringer',
    sounds: {
      What: [
        {
          FileNames: 'FacelessOneWhat1.wav,FacelessOneWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 1,
          SoundName: 'FacelessOneWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FacelessOneYes1.wav,FacelessOneYes2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 2,
          SoundName: 'FacelessOneYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FacelessOneYes1.wav,FacelessOneYes2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 3,
          SoundName: 'FacelessOneYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FacelessOneWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 4,
          SoundName: 'FacelessOneReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfor',
    name: 'facelessonetrickster',
    sounds: {
      What: [
        {
          FileNames: 'FacelessOneWhat1.wav,FacelessOneWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 1,
          SoundName: 'FacelessOneWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FacelessOneYes1.wav,FacelessOneYes2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 2,
          SoundName: 'FacelessOneYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FacelessOneYes1.wav,FacelessOneYes2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 3,
          SoundName: 'FacelessOneYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FacelessOneWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 4,
          SoundName: 'FacelessOneReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfot',
    name: 'facelessoneterror',
    sounds: {
      What: [
        {
          FileNames: 'FacelessOneWhat1.wav,FacelessOneWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 1,
          SoundName: 'FacelessOneWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FacelessOneYes1.wav,FacelessOneYes2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 2,
          SoundName: 'FacelessOneYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FacelessOneYes1.wav,FacelessOneYes2.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 3,
          SoundName: 'FacelessOneYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FacelessOneWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\FacelessOne\\',
          Channel: 4,
          SoundName: 'FacelessOneReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfov',
    name: 'overlord',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'DoomGuardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'DoomGuardYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'DoomGuardYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfpc',
    name: 'polarfurbolgchampion',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfpe',
    name: 'polarfurbolgeldershaman',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfpl',
    name: 'polarfurbolg',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfps',
    name: 'polarfurbolgshaman',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfpt',
    name: 'polarfurbolgtracker',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfpu',
    name: 'polarfurbolgursawarrior',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfra',
    name: 'furbolgancient',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfrb',
    name: 'furbolgtracker',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfre',
    name: 'furbolgeldershaman',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfrg',
    name: 'furbolgchampion',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfrl',
    name: 'furbolg',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfrp',
    name: 'furbolgpanda',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfrs',
    name: 'furbolgshaman',
    sounds: {
      What: [
        {
          FileNames: 'FurbolgWhat1.wav,FurbolgWhat2.wav,FurbolgWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurbolgPissed1.wav,FurbolgPissed2.wav,FurbolgPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 1,
          SoundName: 'FurbolgPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurbolgYesAttack1.wav,FurbolgYesAttack2.wav,FurbolgYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 2,
          SoundName: 'FurbolgYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurbolgYes1.wav,FurbolgYes2.wav,FurbolgYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 3,
          SoundName: 'FurbolgYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FurbolgWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Furbolg\\',
          Channel: 4,
          SoundName: 'FurbolgReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nfsh',
    name: 'foresttrollhighpriest',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollShadowPriestYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollShadowPriestYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollShadowPriestReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestWarcry',
        },
      ],
    },
  },
  {
    id: 'nfsp',
    name: 'foresttrollshadowpriest',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollShadowPriestYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollShadowPriestYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollShadowPriestReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollShadowPriestWarcry',
        },
      ],
    },
  },
  {
    id: 'nftb',
    name: 'foresttrollberserker',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'nftk',
    name: 'foresttrollking',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'nftr',
    name: 'foresttroll',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'nftt',
    name: 'foresttrolltrapper',
    sounds: {
      What: [
        {
          FileNames: 'ForestTrollWhat1.wav,ForestTrollWhat2.wav,ForestTrollWhat3.wav,ForestTrollWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ForestTrollPissed1.wav,ForestTrollPissed2.wav,ForestTrollPissed3.wav,ForestTrollPissed4.wav,ForestTrollPissed5.wav,ForestTrollPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ForestTrollYesAttack1.wav,ForestTrollYesAttack2.wav,ForestTrollYesAttack3.wav,ForestTrollYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 2,
          SoundName: 'ForestTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ForestTrollYes1.wav,ForestTrollYes2.wav,ForestTrollYes3.wav,ForestTrollYes4.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 3,
          SoundName: 'ForestTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ForestTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 4,
          SoundName: 'ForestTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ForestTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\ForestTroll\\',
          Channel: 1,
          SoundName: 'ForestTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'ngdk',
    name: 'greendrake',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nggr',
    name: 'granitegolem',
    sounds: {
      What: [
        {
          FileNames: 'RockGolemWhat1.wav,RockGolemWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 1,
          SoundName: 'RockGolemWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'RockGolemPissed1.wav,RockGolemPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 1,
          SoundName: 'RockGolemPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'RockGolemYesAttack1.wav,RockGolemYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 2,
          SoundName: 'RockGolemYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'RockGolemYes1.wav,RockGolemYes2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 3,
          SoundName: 'RockGolemYes',
        },
      ],
      Ready: [
        {
          FileNames: 'RockGolemWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 4,
          SoundName: 'RockGolemReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngh1',
    name: 'ghost',
    sounds: {
      What: [
        {
          FileNames: 'BansheeGhostWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeGhost\\',
          Channel: 1,
          SoundName: 'GhostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BansheeGhostYesAttack1.wav,BansheeGhostYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeGhost\\',
          Channel: 2,
          SoundName: 'GhostYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BansheeGhostYes1.wav,BansheeGhostYes2.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeGhost\\',
          Channel: 3,
          SoundName: 'GhostYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BansheeGhostWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeGhost\\',
          Channel: 4,
          SoundName: 'GhostReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngh2',
    name: 'wraith',
    sounds: {
      What: [
        {
          FileNames: 'BansheeGhostWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeGhost\\',
          Channel: 1,
          SoundName: 'GhostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BansheeGhostYesAttack1.wav,BansheeGhostYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeGhost\\',
          Channel: 2,
          SoundName: 'GhostYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BansheeGhostYes1.wav,BansheeGhostYes2.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeGhost\\',
          Channel: 3,
          SoundName: 'GhostYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BansheeGhostWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BansheeGhost\\',
          Channel: 4,
          SoundName: 'GhostReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngir',
    name: 'goblinshredder',
    sounds: {
      What: [
        {
          FileNames: 'IronGolemWhat1.wav,IronGolemWhat2.wav,IronGolemWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 1,
          SoundName: 'IronGolemWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IronGolemPissed1.wav,IronGolemPissed2.wav,IronGolemPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 1,
          SoundName: 'IronGolemPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IronGolemYesAttack1.wav,IronGolemYesAttack2.wav,IronGolemYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 2,
          SoundName: 'IronGolemYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IronGolemYes1.wav,IronGolemYes2.wav,IronGolemYes3.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 3,
          SoundName: 'IronGolemYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IronGolemWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 4,
          SoundName: 'IronGolemReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nglm',
    name: 'goblinlandmine',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngna',
    name: 'gnollpoacher',
    sounds: {
      What: [
        {
          FileNames: 'GnollArcherWhat1.wav,GnollArcherWhat2.wav,GnollArcherWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 1,
          SoundName: 'GnollArcherWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GnollArcherPissed1.wav,GnollArcherPissed2.wav,GnollArcherPissed3.wav,GnollArcherPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 1,
          SoundName: 'GnollArcherPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GnollArcherYesAttack1.wav,GnollArcherYesAttack2.wav,GnollArcherYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 2,
          SoundName: 'GnollArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GnollArcherYes1.wav,GnollArcherYes2.wav,GnollArcherYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 3,
          SoundName: 'GnollArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GnollArcherReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 4,
          SoundName: 'GnollArcherReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngnb',
    name: 'gnollbrute',
    sounds: {
      What: [
        {
          FileNames: 'GnollWhat1.wav,GnollWhat2.wav,GnollWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 1,
          SoundName: 'GnollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GnollPissed1.wav,GnollPissed2.wav,GnollPissed3.wav,GnollPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 1,
          SoundName: 'GnollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GnollYesAttack1.wav,GnollYesAttack2.wav,GnollYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 2,
          SoundName: 'GnollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GnollYes1.wav,GnollYes2.wav,GnollYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 3,
          SoundName: 'GnollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GnollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 4,
          SoundName: 'GnollReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngno',
    name: 'gnoll1',
    sounds: {
      What: [
        {
          FileNames: 'GnollWhat1.wav,GnollWhat2.wav,GnollWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 1,
          SoundName: 'GnollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GnollPissed1.wav,GnollPissed2.wav,GnollPissed3.wav,GnollPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 1,
          SoundName: 'GnollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GnollYesAttack1.wav,GnollYesAttack2.wav,GnollYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 2,
          SoundName: 'GnollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GnollYes1.wav,GnollYes2.wav,GnollYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 3,
          SoundName: 'GnollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GnollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 4,
          SoundName: 'GnollReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngns',
    name: 'gnollassassin',
    sounds: {
      What: [
        {
          FileNames: 'GnollArcherWhat1.wav,GnollArcherWhat2.wav,GnollArcherWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 1,
          SoundName: 'GnollArcherWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GnollArcherPissed1.wav,GnollArcherPissed2.wav,GnollArcherPissed3.wav,GnollArcherPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 1,
          SoundName: 'GnollArcherPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GnollArcherYesAttack1.wav,GnollArcherYesAttack2.wav,GnollArcherYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 2,
          SoundName: 'GnollArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GnollArcherYes1.wav,GnollArcherYes2.wav,GnollArcherYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 3,
          SoundName: 'GnollArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GnollArcherReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GnollArcher\\',
          Channel: 4,
          SoundName: 'GnollArcherReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngnv',
    name: 'gnollking',
    sounds: {
      What: [
        {
          FileNames: 'GnollWhat1.wav,GnollWhat2.wav,GnollWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 1,
          SoundName: 'GnollKingWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GnollPissed1.wav,GnollPissed2.wav,GnollPissed3.wav,GnollPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 1,
          SoundName: 'GnollKingPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GnollYesAttack1.wav,GnollYesAttack2.wav,GnollYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 2,
          SoundName: 'GnollKingYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GnollYes1.wav,GnollYes2.wav,GnollYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 3,
          SoundName: 'GnollKingYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GnollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 4,
          SoundName: 'GnollKingReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngnw',
    name: 'gnoll3',
    sounds: {
      What: [
        {
          FileNames: 'GnollWhat1.wav,GnollWhat2.wav,GnollWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 1,
          SoundName: 'GnollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GnollPissed1.wav,GnollPissed2.wav,GnollPissed3.wav,GnollPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 1,
          SoundName: 'GnollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GnollYesAttack1.wav,GnollYesAttack2.wav,GnollYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 2,
          SoundName: 'GnollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GnollYes1.wav,GnollYes2.wav,GnollYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 3,
          SoundName: 'GnollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GnollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Gnoll\\',
          Channel: 4,
          SoundName: 'GnollReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngrd',
    name: 'greendragon',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngrk',
    name: 'mudgolem',
    sounds: {
      What: [
        {
          FileNames: 'RockGolemWhat1.wav,RockGolemWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 1,
          SoundName: 'RockGolemWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'RockGolemPissed1.wav,RockGolemPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 1,
          SoundName: 'RockGolemPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'RockGolemYesAttack1.wav,RockGolemYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 2,
          SoundName: 'RockGolemYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'RockGolemYes1.wav,RockGolemYes2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 3,
          SoundName: 'RockGolemYes',
        },
      ],
      Ready: [
        {
          FileNames: 'RockGolemWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 4,
          SoundName: 'RockGolemReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngrw',
    name: 'greendragonwhelp',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngsp',
    name: 'goblinsapper',
    sounds: {
      What: [
        {
          FileNames: 'GoblinSapperWhat1.wav,GoblinSapperWhat2.wav,GoblinSapperWhat3.wav,GoblinSapperWhat4.wav,GoblinSapperWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 1,
          SoundName: 'GoblinSapperWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GoblinSapperPissed1.wav,GoblinSapperPissed2.wav,GoblinSapperPissed3.wav,GoblinSapperPissed4.wav,GoblinSapperPissed5.wav,GoblinSapperPissed6.wav,GoblinSapperPissed7.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 1,
          SoundName: 'GoblinSapperPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GoblinSapperYesAttack1.wav,GoblinSapperYesAttack2.wav,GoblinSapperYesAttack3.wav,GoblinSapperYesAttack4.wav,GoblinSapperYesAttack5.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 2,
          SoundName: 'GoblinSapperYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GoblinSapperYes1.wav,GoblinSapperYes2.wav,GoblinSapperYes3.wav,GoblinSapperYes4.wav,GoblinSapperYes5.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 3,
          SoundName: 'GoblinSapperYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GoblinSapperReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 4,
          SoundName: 'GoblinSapperReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ngst',
    name: 'rockgolem',
    sounds: {
      What: [
        {
          FileNames: 'RockGolemWhat1.wav,RockGolemWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 1,
          SoundName: 'RockGolemWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'RockGolemPissed1.wav,RockGolemPissed2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 1,
          SoundName: 'RockGolemPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'RockGolemYesAttack1.wav,RockGolemYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 2,
          SoundName: 'RockGolemYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'RockGolemYes1.wav,RockGolemYes2.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 3,
          SoundName: 'RockGolemYes',
        },
      ],
      Ready: [
        {
          FileNames: 'RockGolemWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\RockGolem\\',
          Channel: 4,
          SoundName: 'RockGolemReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhar',
    name: 'harpyscout',
    sounds: {
      What: [
        {
          FileNames: 'HarpyWhat1.wav,HarpyWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HarpyPissed1.wav,HarpyPissed2.wav,HarpyPissed3.wav,HarpyPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HarpyYesAttack1.wav,HarpyYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 2,
          SoundName: 'HarpyYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HarpyYes1.wav,HarpyYes2.wav,HarpyYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 3,
          SoundName: 'HarpyYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HarpyWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 4,
          SoundName: 'HarpyReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhdc',
    name: 'deceiver',
    sounds: {
      What: [
        {
          FileNames: 'AcolyteWhat1.wav,AcolyteWhat2.wav,AcolyteWhat3.wav,AcolyteWhat4.wav,AcolyteWhat5.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolyteWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'AcolytePissed1.wav,AcolytePissed2.wav,AcolytePissed3.wav,AcolytePissed4.wav,AcolytePissed5.wav,AcolytePissed6.wav,AcolytePissed7.wav,AcolytePissed8.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolytePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'AcolyteYesAttack1.wav,AcolyteYesAttack2.wav,AcolyteYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 2,
          SoundName: 'AcolyteYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AcolyteYes1.wav,AcolyteYes2.wav,AcolyteYes3.wav,AcolyteYes4.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 3,
          SoundName: 'AcolyteYes',
        },
      ],
      Ready: [
        {
          FileNames: 'AcolyteReady1.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 4,
          SoundName: 'AcolyteReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'AcolyteWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolyteWarcry',
        },
      ],
    },
  },
  {
    id: 'nhfp',
    name: 'fallenpriest',
    sounds: {
      What: [
        {
          FileNames: 'AcolyteWhat1.wav,AcolyteWhat2.wav,AcolyteWhat3.wav,AcolyteWhat4.wav,AcolyteWhat5.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolyteWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'AcolytePissed1.wav,AcolytePissed2.wav,AcolytePissed3.wav,AcolytePissed4.wav,AcolytePissed5.wav,AcolytePissed6.wav,AcolytePissed7.wav,AcolytePissed8.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolytePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'AcolyteYesAttack1.wav,AcolyteYesAttack2.wav,AcolyteYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 2,
          SoundName: 'AcolyteYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AcolyteYes1.wav,AcolyteYes2.wav,AcolyteYes3.wav,AcolyteYes4.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 3,
          SoundName: 'AcolyteYes',
        },
      ],
      Ready: [
        {
          FileNames: 'AcolyteReady1.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 4,
          SoundName: 'AcolyteReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'AcolyteWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolyteWarcry',
        },
      ],
    },
  },
  {
    id: 'nhhr',
    name: 'heretic',
    sounds: {
      What: [
        {
          FileNames: 'AcolyteWhat1.wav,AcolyteWhat2.wav,AcolyteWhat3.wav,AcolyteWhat4.wav,AcolyteWhat5.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolyteWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'AcolytePissed1.wav,AcolytePissed2.wav,AcolytePissed3.wav,AcolytePissed4.wav,AcolytePissed5.wav,AcolytePissed6.wav,AcolytePissed7.wav,AcolytePissed8.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolytePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'AcolyteYesAttack1.wav,AcolyteYesAttack2.wav,AcolyteYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 2,
          SoundName: 'AcolyteYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AcolyteYes1.wav,AcolyteYes2.wav,AcolyteYes3.wav,AcolyteYes4.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 3,
          SoundName: 'AcolyteYes',
        },
      ],
      Ready: [
        {
          FileNames: 'AcolyteReady1.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 4,
          SoundName: 'AcolyteReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'AcolyteWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Acolyte\\',
          Channel: 1,
          SoundName: 'AcolyteWarcry',
        },
      ],
    },
  },
  {
    id: 'nhrh',
    name: 'harpyhag',
    sounds: {
      What: [
        {
          FileNames: 'HarpyWhat1.wav,HarpyWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HarpyPissed1.wav,HarpyPissed2.wav,HarpyPissed3.wav,HarpyPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HarpyYesAttack1.wav,HarpyYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 2,
          SoundName: 'HarpyYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HarpyYes1.wav,HarpyYes2.wav,HarpyYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 3,
          SoundName: 'HarpyYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HarpyWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 4,
          SoundName: 'HarpyReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhrq',
    name: 'harpyqueen',
    sounds: {
      What: [
        {
          FileNames: 'HarpyWhat1.wav,HarpyWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HarpyPissed1.wav,HarpyPissed2.wav,HarpyPissed3.wav,HarpyPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HarpyYesAttack1.wav,HarpyYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 2,
          SoundName: 'HarpyYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HarpyYes1.wav,HarpyYes2.wav,HarpyYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 3,
          SoundName: 'HarpyYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HarpyWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 4,
          SoundName: 'HarpyReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhrr',
    name: 'harpyrogue',
    sounds: {
      What: [
        {
          FileNames: 'HarpyWhat1.wav,HarpyWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HarpyPissed1.wav,HarpyPissed2.wav,HarpyPissed3.wav,HarpyPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HarpyYesAttack1.wav,HarpyYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 2,
          SoundName: 'HarpyYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HarpyYes1.wav,HarpyYes2.wav,HarpyYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 3,
          SoundName: 'HarpyYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HarpyWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 4,
          SoundName: 'HarpyReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhrw',
    name: 'harpywitch',
    sounds: {
      What: [
        {
          FileNames: 'HarpyWhat1.wav,HarpyWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HarpyPissed1.wav,HarpyPissed2.wav,HarpyPissed3.wav,HarpyPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 1,
          SoundName: 'HarpyPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HarpyYesAttack1.wav,HarpyYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 2,
          SoundName: 'HarpyYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HarpyYes1.wav,HarpyYes2.wav,HarpyYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 3,
          SoundName: 'HarpyYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HarpyWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Harpy\\',
          Channel: 4,
          SoundName: 'HarpyReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhyc',
    name: 'campaignturtle',
    sounds: {
      What: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav,GiantSeaTurtleWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 1,
          SoundName: 'GiantSeaTurtleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 2,
          SoundName: 'GiantSeaTurtleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 3,
          SoundName: 'GiantSeaTurtleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 4,
          SoundName: 'GiantSeaTurtleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhyd',
    name: 'hydra',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhyh',
    name: 'hydrahatchling',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nina',
    name: 'infernaljuggernaut',
    sounds: {
      What: [
        {
          FileNames: 'InfernalMachineWhat1.wav,InfernalMachineWhat2.wav,InfernalMachineWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 1,
          SoundName: 'InfernalMachineWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'InfernalMachineYes1.wav,InfernalMachineYes2.wav,InfernalMachineYes3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 2,
          SoundName: 'InfernalMachineYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'InfernalMachineYes1.wav,InfernalMachineYes2.wav,InfernalMachineYes3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 3,
          SoundName: 'InfernalMachineYes',
        },
      ],
      Ready: [
        {
          FileNames: 'InfernalMachineWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 4,
          SoundName: 'InfernalMachineReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ninc',
    name: 'infernalcontraption',
    sounds: {
      What: [
        {
          FileNames: 'InfernalMachineWhat1.wav,InfernalMachineWhat2.wav,InfernalMachineWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 1,
          SoundName: 'InfernalMachineWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'InfernalMachineYes1.wav,InfernalMachineYes2.wav,InfernalMachineYes3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 2,
          SoundName: 'InfernalMachineYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'InfernalMachineYes1.wav,InfernalMachineYes2.wav,InfernalMachineYes3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 3,
          SoundName: 'InfernalMachineYes',
        },
      ],
      Ready: [
        {
          FileNames: 'InfernalMachineWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 4,
          SoundName: 'InfernalMachineReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ninf',
    name: 'infernal',
    sounds: {
      What: [
        {
          FileNames: 'InfernalWhat1.wav,InfernalWhat2.wav,InfernalWhat3.wav',
          DirectoryBase: 'Units\\Demon\\Infernal\\',
          Channel: 1,
          SoundName: 'InfernalWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'InfernalPissed1.wav,InfernalPissed2.wav,InfernalPissed3.wav',
          DirectoryBase: 'Units\\Demon\\Infernal\\',
          Channel: 1,
          SoundName: 'InfernalPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'InfernalYesAttack1.wav,InfernalYesAttack2.wav,InfernalYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\Infernal\\',
          Channel: 2,
          SoundName: 'InfernalYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'InfernalYes1.wav,InfernalYes2.wav,InfernalYes3.wav',
          DirectoryBase: 'Units\\Demon\\Infernal\\',
          Channel: 3,
          SoundName: 'InfernalYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ninm',
    name: 'infernalmachine',
    sounds: {
      What: [
        {
          FileNames: 'InfernalMachineWhat1.wav,InfernalMachineWhat2.wav,InfernalMachineWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 1,
          SoundName: 'InfernalMachineWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'InfernalMachineYes1.wav,InfernalMachineYes2.wav,InfernalMachineYes3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 2,
          SoundName: 'InfernalMachineYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'InfernalMachineYes1.wav,InfernalMachineYes2.wav,InfernalMachineYes3.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 3,
          SoundName: 'InfernalMachineYes',
        },
      ],
      Ready: [
        {
          FileNames: 'InfernalMachineWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\InfernalCannonCannon\\',
          Channel: 4,
          SoundName: 'InfernalMachineReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nith',
    name: 'icetrollhighpriest',
    sounds: {
      What: [
        {
          FileNames: 'IceTrollWhat1.wav,IceTrollWhat2.wav,IceTrollWhat3.wav,IceTrollWhat4.wav,IceTrollWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollShadowPriestWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IceTrollPissed1.wav,IceTrollPissed2.wav,IceTrollPissed3.wav,IceTrollPissed4.wav,IceTrollPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollShadowPriestPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IceTrollYesAttack1.wav,IceTrollYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 2,
          SoundName: 'IceTrollShadowPriestYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IceTrollYes1.wav,IceTrollYes2.wav,IceTrollYes3.wav,IceTrollYes4.wav,IceTrollYes5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 3,
          SoundName: 'IceTrollShadowPriestYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IceTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 4,
          SoundName: 'IceTrollShadowPriestReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IceTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollShadowPriestWarcry',
        },
      ],
    },
  },
  {
    id: 'nitp',
    name: 'icetrollshadowpriest',
    sounds: {
      What: [
        {
          FileNames: 'IceTrollWhat1.wav,IceTrollWhat2.wav,IceTrollWhat3.wav,IceTrollWhat4.wav,IceTrollWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollShadowPriestWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IceTrollPissed1.wav,IceTrollPissed2.wav,IceTrollPissed3.wav,IceTrollPissed4.wav,IceTrollPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollShadowPriestPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IceTrollYesAttack1.wav,IceTrollYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 2,
          SoundName: 'IceTrollShadowPriestYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IceTrollYes1.wav,IceTrollYes2.wav,IceTrollYes3.wav,IceTrollYes4.wav,IceTrollYes5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 3,
          SoundName: 'IceTrollShadowPriestYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IceTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 4,
          SoundName: 'IceTrollShadowPriestReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IceTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollShadowPriestWarcry',
        },
      ],
    },
  },
  {
    id: 'nitr',
    name: 'icetroll',
    sounds: {
      What: [
        {
          FileNames: 'IceTrollWhat1.wav,IceTrollWhat2.wav,IceTrollWhat3.wav,IceTrollWhat4.wav,IceTrollWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IceTrollPissed1.wav,IceTrollPissed2.wav,IceTrollPissed3.wav,IceTrollPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IceTrollYesAttack1.wav,IceTrollYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 2,
          SoundName: 'IceTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IceTrollYes1.wav,IceTrollYes2.wav,IceTrollYes3.wav,IceTrollYes4.wav,IceTrollYes5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 3,
          SoundName: 'IceTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IceTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 4,
          SoundName: 'IceTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IceTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'nits',
    name: 'icetrollberserker',
    sounds: {
      What: [
        {
          FileNames: 'IceTrollWhat1.wav,IceTrollWhat2.wav,IceTrollWhat3.wav,IceTrollWhat4.wav,IceTrollWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IceTrollPissed1.wav,IceTrollPissed2.wav,IceTrollPissed3.wav,IceTrollPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IceTrollYesAttack1.wav,IceTrollYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 2,
          SoundName: 'IceTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IceTrollYes1.wav,IceTrollYes2.wav,IceTrollYes3.wav,IceTrollYes4.wav,IceTrollYes5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 3,
          SoundName: 'IceTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IceTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 4,
          SoundName: 'IceTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IceTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'nitt',
    name: 'icetrolltrapper',
    sounds: {
      What: [
        {
          FileNames: 'IceTrollWhat1.wav,IceTrollWhat2.wav,IceTrollWhat3.wav,IceTrollWhat4.wav,IceTrollWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IceTrollPissed1.wav,IceTrollPissed2.wav,IceTrollPissed3.wav,IceTrollPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IceTrollYesAttack1.wav,IceTrollYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 2,
          SoundName: 'IceTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IceTrollYes1.wav,IceTrollYes2.wav,IceTrollYes3.wav,IceTrollYes4.wav,IceTrollYes5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 3,
          SoundName: 'IceTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IceTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 4,
          SoundName: 'IceTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IceTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'nitw',
    name: 'icetrollwarlord',
    sounds: {
      What: [
        {
          FileNames: 'IceTrollWhat1.wav,IceTrollWhat2.wav,IceTrollWhat3.wav,IceTrollWhat4.wav,IceTrollWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IceTrollPissed1.wav,IceTrollPissed2.wav,IceTrollPissed3.wav,IceTrollPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IceTrollYesAttack1.wav,IceTrollYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 2,
          SoundName: 'IceTrollYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IceTrollYes1.wav,IceTrollYes2.wav,IceTrollYes3.wav,IceTrollYes4.wav,IceTrollYes5.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 3,
          SoundName: 'IceTrollYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IceTrollReady1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 4,
          SoundName: 'IceTrollReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IceTrollWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\IceTroll\\',
          Channel: 1,
          SoundName: 'IceTrollWarcry',
        },
      ],
    },
  },
  {
    id: 'njgb',
    name: 'enrangedjunglestalker',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'njga',
    name: 'elderjunglestalker',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'njg1',
    name: 'junglestalker',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nkob',
    name: 'kobold',
    sounds: {
      What: [
        {
          FileNames: 'KoboldWhat1.wav,KoboldWhat2.wav,KoboldWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KoboldPissed1.wav,KoboldPissed2.wav,KoboldPissed3.wav,KoboldPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KoboldYesAttack1.wav,KoboldYesAttack2.wav,KoboldYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 2,
          SoundName: 'KoboldYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KoboldYes1.wav,KoboldYes2.wav,KoboldYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 3,
          SoundName: 'KoboldYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KoboldReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 4,
          SoundName: 'KoboldReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nkog',
    name: 'koboldgeomancer',
    sounds: {
      What: [
        {
          FileNames: 'KoboldWhat1.wav,KoboldWhat2.wav,KoboldWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KoboldPissed1.wav,KoboldPissed2.wav,KoboldPissed3.wav,KoboldPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KoboldYesAttack1.wav,KoboldYesAttack2.wav,KoboldYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 2,
          SoundName: 'KoboldYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KoboldYes1.wav,KoboldYes2.wav,KoboldYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 3,
          SoundName: 'KoboldYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KoboldReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 4,
          SoundName: 'KoboldReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nkol',
    name: 'koboldtaskmaster',
    sounds: {
      What: [
        {
          FileNames: 'KoboldWhat1.wav,KoboldWhat2.wav,KoboldWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KoboldPissed1.wav,KoboldPissed2.wav,KoboldPissed3.wav,KoboldPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KoboldYesAttack1.wav,KoboldYesAttack2.wav,KoboldYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 2,
          SoundName: 'KoboldYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KoboldYes1.wav,KoboldYes2.wav,KoboldYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 3,
          SoundName: 'KoboldYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KoboldReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 4,
          SoundName: 'KoboldReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nkot',
    name: 'kobolttunneler',
    sounds: {
      What: [
        {
          FileNames: 'KoboldWhat1.wav,KoboldWhat2.wav,KoboldWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KoboldPissed1.wav,KoboldPissed2.wav,KoboldPissed3.wav,KoboldPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KoboldYesAttack1.wav,KoboldYesAttack2.wav,KoboldYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 2,
          SoundName: 'KoboldYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KoboldYes1.wav,KoboldYes2.wav,KoboldYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 3,
          SoundName: 'KoboldYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KoboldReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 4,
          SoundName: 'KoboldReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nlds',
    name: 'lobstrokkdeepseer',
    sounds: {
      What: [
        {
          FileNames: 'LobstrokkWhat1.wav,LobstrokkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 1,
          SoundName: 'LobstrokkWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 2,
          SoundName: 'LobstrokkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 3,
          SoundName: 'LobstrokkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LobstrokkWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 4,
          SoundName: 'LobstrokkReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nlkl',
    name: 'lobstrokktidallord',
    sounds: {
      What: [
        {
          FileNames: 'LobstrokkWhat1.wav,LobstrokkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 1,
          SoundName: 'LobstrokkWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 2,
          SoundName: 'LobstrokkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 3,
          SoundName: 'LobstrokkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LobstrokkWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 4,
          SoundName: 'LobstrokkReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nlpd',
    name: 'lobstrokkpooldweller',
    sounds: {
      What: [
        {
          FileNames: 'LobstrokkWhat1.wav,LobstrokkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 1,
          SoundName: 'LobstrokkWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 2,
          SoundName: 'LobstrokkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 3,
          SoundName: 'LobstrokkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LobstrokkWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 4,
          SoundName: 'LobstrokkReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nlpr',
    name: 'lobstrokkprawn',
    sounds: {
      What: [
        {
          FileNames: 'LobstrokkWhat1.wav,LobstrokkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 1,
          SoundName: 'LobstrokkWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 2,
          SoundName: 'LobstrokkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 3,
          SoundName: 'LobstrokkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LobstrokkWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 4,
          SoundName: 'LobstrokkReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nlps',
    name: 'lobstrokkprawnsummoned',
    sounds: {
      What: [
        {
          FileNames: 'LobstrokkWhat1.wav,LobstrokkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 1,
          SoundName: 'LobstrokkWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 2,
          SoundName: 'LobstrokkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 3,
          SoundName: 'LobstrokkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LobstrokkWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 4,
          SoundName: 'LobstrokkReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nlrv',
    name: 'deeplordrevenant',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nlsn',
    name: 'lobstrokksnapper',
    sounds: {
      What: [
        {
          FileNames: 'LobstrokkWhat1.wav,LobstrokkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 1,
          SoundName: 'LobstrokkWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 2,
          SoundName: 'LobstrokkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 3,
          SoundName: 'LobstrokkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LobstrokkWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 4,
          SoundName: 'LobstrokkReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nltc',
    name: 'lobstrokktidecaller',
    sounds: {
      What: [
        {
          FileNames: 'LobstrokkWhat1.wav,LobstrokkWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 1,
          SoundName: 'LobstrokkWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 2,
          SoundName: 'LobstrokkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LobstrokkYes1.wav,LobstrokkYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 3,
          SoundName: 'LobstrokkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LobstrokkWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Lobstrokkblue\\',
          Channel: 4,
          SoundName: 'LobstrokkReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nltl',
    name: 'lightninglizard',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nlur',
    name: 'monsterlure',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmam',
    name: 'mammoth',
    sounds: {
      What: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 1,
          SoundName: 'MammothWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 2,
          SoundName: 'MammothYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 3,
          SoundName: 'MammothYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MammothYes1.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 4,
          SoundName: 'MammothReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmbg',
    name: 'murgulbloodgill',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmcf',
    name: 'murgulcliffrunner',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmdr',
    name: 'diremammoth',
    sounds: {
      What: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 1,
          SoundName: 'MammothWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 2,
          SoundName: 'MammothYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 3,
          SoundName: 'MammothYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MammothYes1.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 4,
          SoundName: 'MammothReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmfs',
    name: 'murlocflesheater',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmgd',
    name: 'magnataurdestroyer',
    sounds: {
      What: [
        {
          FileNames: 'MagnataurWhat1.wav,MagnataurWhat2.wav,MagnataurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MagnataurWhat1.wav,MagnataurWhat2.wav,MagnataurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MagnataurYesAttack1.wav,MagnataurYesAttack2.wav,MagnataurYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 2,
          SoundName: 'MagnataurYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MagnataurYes1.wav,MagnataurYes2.wav,MagnataurYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 3,
          SoundName: 'MagnataurYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MagnataurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 4,
          SoundName: 'MagnataurReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'MagnataurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurWarcry',
        },
      ],
    },
  },
  {
    id: 'nmgr',
    name: 'magnataurreaver',
    sounds: {
      What: [
        {
          FileNames: 'MagnataurWhat1.wav,MagnataurWhat2.wav,MagnataurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MagnataurWhat1.wav,MagnataurWhat2.wav,MagnataurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MagnataurYesAttack1.wav,MagnataurYesAttack2.wav,MagnataurYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 2,
          SoundName: 'MagnataurYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MagnataurYes1.wav,MagnataurYes2.wav,MagnataurYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 3,
          SoundName: 'MagnataurYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MagnataurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 4,
          SoundName: 'MagnataurReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'MagnataurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurWarcry',
        },
      ],
    },
  },
  {
    id: 'nmgw',
    name: 'magnataurwarrior',
    sounds: {
      What: [
        {
          FileNames: 'MagnataurWhat1.wav,MagnataurWhat2.wav,MagnataurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MagnataurWhat1.wav,MagnataurWhat2.wav,MagnataurWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MagnataurYesAttack1.wav,MagnataurYesAttack2.wav,MagnataurYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 2,
          SoundName: 'MagnataurYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MagnataurYes1.wav,MagnataurYes2.wav,MagnataurYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 3,
          SoundName: 'MagnataurYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MagnataurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 4,
          SoundName: 'MagnataurReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'MagnataurReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Magnataur\\',
          Channel: 1,
          SoundName: 'MagnataurWarcry',
        },
      ],
    },
  },
  {
    id: 'nmit',
    name: 'icetuskmammoth',
    sounds: {
      What: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 1,
          SoundName: 'MammothWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 2,
          SoundName: 'MammothYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MammothYes1.wav,MammothYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 3,
          SoundName: 'MammothYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MammothYes1.wav',
          DirectoryBase: 'Units\\Creeps\\Mammoth\\',
          Channel: 4,
          SoundName: 'MammothReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmmu',
    name: 'murlocmutant',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmpg',
    name: 'murlocplaguebearer',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmrl',
    name: 'murloctiderunner',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmrm',
    name: 'murlocnightcrawler',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmrr',
    name: 'murlochuntsman',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmrv',
    name: 'murgulreaver',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmsc',
    name: 'murgulshadowcaster',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmsn',
    name: 'murgulsnarecaster',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmtw',
    name: 'murgultidewarrior',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmyr',
    name: 'nagamyrmidon',
    sounds: {
      What: [
        {
          FileNames: 'NagaMyrmadonWhat1.wav,NagaMyrmadonWhat2.wav,NagaMyrmadonWhat3.wav,NagaMyrmadonWhat4.wav,NagaMyrmadonWhat5.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 1,
          SoundName: 'NagaMyrmidonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NagaMyrmadonPissed1.wav,NagaMyrmadonPissed2.wav,NagaMyrmadonPissed3.wav,NagaMyrmadonPissed4.wav,NagaMyrmadonPissed5.wav,NagaMyrmadonPissed6.wav,NagaMyrmadonPissed7.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 1,
          SoundName: 'NagaMyrmidonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NagaMyrmadonYesAttack1.wav,NagaMyrmadonYesAttack2.wav,NagaMyrmadonYesAttack3.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 2,
          SoundName: 'NagaMyrmidonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NagaMyrmadonYes1.wav,NagaMyrmadonYes2.wav,NagaMyrmadonYes3.wav,NagaMyrmadonYes4.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 3,
          SoundName: 'NagaMyrmidonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NagaMyrmadonReady1.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 4,
          SoundName: 'NagaMyrmidonReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NagaMyrmadonWarcry1.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 1,
          SoundName: 'NagaMyrmidonWarcry',
        },
      ],
    },
  },
  {
    id: 'nmys',
    name: 'nagamyrmidonmorph',
    sounds: {
      What: [
        {
          FileNames: 'NagaMyrmadonWhat1.wav,NagaMyrmadonWhat2.wav,NagaMyrmadonWhat3.wav,NagaMyrmadonWhat4.wav,NagaMyrmadonWhat5.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 1,
          SoundName: 'NagaMyrmidonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NagaMyrmadonPissed1.wav,NagaMyrmadonPissed2.wav,NagaMyrmadonPissed3.wav,NagaMyrmadonPissed4.wav,NagaMyrmadonPissed5.wav,NagaMyrmadonPissed6.wav,NagaMyrmadonPissed7.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 1,
          SoundName: 'NagaMyrmidonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NagaMyrmadonYesAttack1.wav,NagaMyrmadonYesAttack2.wav,NagaMyrmadonYesAttack3.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 2,
          SoundName: 'NagaMyrmidonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NagaMyrmadonYes1.wav,NagaMyrmadonYes2.wav,NagaMyrmadonYes3.wav,NagaMyrmadonYes4.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 3,
          SoundName: 'NagaMyrmidonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NagaMyrmadonReady1.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 4,
          SoundName: 'NagaMyrmidonReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NagaMyrmadonWarcry1.wav',
          DirectoryBase: 'Units\\Naga\\NagaMyrmidon\\',
          Channel: 1,
          SoundName: 'NagaMyrmidonWarcry',
        },
      ],
    },
  },
  {
    id: 'nndk',
    name: 'netherdrake',
    sounds: {
      What: [
        {
          FileNames: 'NetherDragonWhat1.wav,NetherDragonWhat2.wav,NetherDragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 1,
          SoundName: 'NetherDragonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'NetherDragonYesAttack1.wav,NetherDragonYesAttack2.wav,NetherDragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 2,
          SoundName: 'NetherDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NetherDragonYes1.wav,NetherDragonYes2.wav,NetherDragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 3,
          SoundName: 'NetherDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NetherDragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 4,
          SoundName: 'NetherDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nndr',
    name: 'netherdragon',
    sounds: {
      What: [
        {
          FileNames: 'NetherDragonWhat1.wav,NetherDragonWhat2.wav,NetherDragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 1,
          SoundName: 'NetherDragonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'NetherDragonYesAttack1.wav,NetherDragonYesAttack2.wav,NetherDragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 2,
          SoundName: 'NetherDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NetherDragonYes1.wav,NetherDragonYes2.wav,NetherDragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 3,
          SoundName: 'NetherDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NetherDragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 4,
          SoundName: 'NetherDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nnht',
    name: 'netherdragonhatchling',
    sounds: {
      What: [
        {
          FileNames: 'NetherDragonWhat1.wav,NetherDragonWhat2.wav,NetherDragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 1,
          SoundName: 'NetherDragonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'NetherDragonYesAttack1.wav,NetherDragonYesAttack2.wav,NetherDragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 2,
          SoundName: 'NetherDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NetherDragonYes1.wav,NetherDragonYes2.wav,NetherDragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 3,
          SoundName: 'NetherDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NetherDragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\NetherDragon\\',
          Channel: 4,
          SoundName: 'NetherDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nnmg',
    name: 'nagamurgul',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nnrg',
    name: 'nagaroyalguard',
    sounds: {
      What: [
        {
          FileNames: 'NagaRoyalGuardWhat1.wav,NagaRoyalGuardWhat2.wav,NagaRoyalGuardWhat3.wav,NagaRoyalGuardWhat4.wav,NagaRoyalGuardWhat5.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 1,
          SoundName: 'NagaRoyalGuardWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NagaRoyalGuardPissed1.wav,NagaRoyalGuardPissed2.wav,NagaRoyalGuardPissed3.wav,NagaRoyalGuardPissed4.wav,NagaRoyalGuardPissed5.wav,NagaRoyalGuardPissed6.wav,NagaRoyalGuardPissed7.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 1,
          SoundName: 'NagaRoyalGuardPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NagaRoyalGuardYesAttack1.wav,NagaRoyalGuardYesAttack2.wav,NagaRoyalGuardYesAttack3.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 2,
          SoundName: 'NagaRoyalGuardYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NagaRoyalGuardYes1.wav,NagaRoyalGuardYes2.wav,NagaRoyalGuardYes3.wav,NagaRoyalGuardYes4.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 3,
          SoundName: 'NagaRoyalGuardYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NagaRoyalGuardReady1.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 4,
          SoundName: 'NagaRoyalGuardReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NagaRoyalGuardWarcry1.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 1,
          SoundName: 'NagaRoyalGuardWarcry',
        },
      ],
    },
  },
  {
    id: 'nnrs',
    name: 'nagaroyalguardmorph',
    sounds: {
      What: [
        {
          FileNames: 'NagaRoyalGuardWhat1.wav,NagaRoyalGuardWhat2.wav,NagaRoyalGuardWhat3.wav,NagaRoyalGuardWhat4.wav,NagaRoyalGuardWhat5.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 1,
          SoundName: 'NagaRoyalGuardWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NagaRoyalGuardPissed1.wav,NagaRoyalGuardPissed2.wav,NagaRoyalGuardPissed3.wav,NagaRoyalGuardPissed4.wav,NagaRoyalGuardPissed5.wav,NagaRoyalGuardPissed6.wav,NagaRoyalGuardPissed7.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 1,
          SoundName: 'NagaRoyalGuardPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NagaRoyalGuardYesAttack1.wav,NagaRoyalGuardYesAttack2.wav,NagaRoyalGuardYesAttack3.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 2,
          SoundName: 'NagaRoyalGuardYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NagaRoyalGuardYes1.wav,NagaRoyalGuardYes2.wav,NagaRoyalGuardYes3.wav,NagaRoyalGuardYes4.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 3,
          SoundName: 'NagaRoyalGuardYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NagaRoyalGuardReady1.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 4,
          SoundName: 'NagaRoyalGuardReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NagaRoyalGuardWarcry1.wav',
          DirectoryBase: 'Units\\Naga\\NagaRoyalGuard\\',
          Channel: 1,
          SoundName: 'NagaRoyalGuardWarcry',
        },
      ],
    },
  },
  {
    id: 'nnsu',
    name: 'summoner',
    sounds: {
      What: [
        {
          FileNames: 'NagaSirenWhat1.wav,NagaSirenWhat2.wav,NagaSirenWhat3.wav,NagaSirenWhat4.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 1,
          SoundName: 'NagaSirenWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NagaSirenPissed1.wav,NagaSirenPissed2.wav,NagaSirenPissed3.wav,NagaSirenPissed4.wav,NagaSirenPissed5.wav,NagaSirenPissed6.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 1,
          SoundName: 'NagaSirenPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NagaSirenYesAttack1.wav,NagaSirenYesAttack2.wav,NagaSirenYesAttack3.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 2,
          SoundName: 'NagaSirenYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NagaSirenYes1.wav,NagaSirenYes2.wav,NagaSirenYes3.wav,NagaSirenYes4.wav,NagaSirenYes5.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 3,
          SoundName: 'NagaSirenYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NagaSirenReady1.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 4,
          SoundName: 'NagaSirenReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NagaSirenWarcry1.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 1,
          SoundName: 'NagaSirenWarcry',
        },
      ],
    },
  },
  {
    id: 'nnsw',
    name: 'siren',
    sounds: {
      What: [
        {
          FileNames: 'NagaSirenWhat1.wav,NagaSirenWhat2.wav,NagaSirenWhat3.wav,NagaSirenWhat4.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 1,
          SoundName: 'NagaSirenWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NagaSirenPissed1.wav,NagaSirenPissed2.wav,NagaSirenPissed3.wav,NagaSirenPissed4.wav,NagaSirenPissed5.wav,NagaSirenPissed6.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 1,
          SoundName: 'NagaSirenPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NagaSirenYesAttack1.wav,NagaSirenYesAttack2.wav,NagaSirenYesAttack3.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 2,
          SoundName: 'NagaSirenYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NagaSirenYes1.wav,NagaSirenYes2.wav,NagaSirenYes3.wav,NagaSirenYes4.wav,NagaSirenYes5.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 3,
          SoundName: 'NagaSirenYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NagaSirenReady1.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 4,
          SoundName: 'NagaSirenReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NagaSirenWarcry1.wav',
          DirectoryBase: 'Units\\Naga\\NagaSiren\\',
          Channel: 1,
          SoundName: 'NagaSirenWarcry',
        },
      ],
    },
  },
  {
    id: 'nnwa',
    name: 'nerubianwarrior',
    sounds: {
      What: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'NerubianWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'CryptFiendYesAttack1.wav,CryptFiendYesAttack2.wav,CryptFiendYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 2,
          SoundName: 'NerubianYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CryptFiendYes2.wav,CryptFiendYes3.wav,CryptFiendYes4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 3,
          SoundName: 'NerubianYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 4,
          SoundName: 'NerubianReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nnwl',
    name: 'nerubianwebspinner',
    sounds: {
      What: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'NerubianWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'CryptFiendYesAttack1.wav,CryptFiendYesAttack2.wav,CryptFiendYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 2,
          SoundName: 'NerubianYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CryptFiendYes2.wav,CryptFiendYes3.wav,CryptFiendYes4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 3,
          SoundName: 'NerubianYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 4,
          SoundName: 'NerubianReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nnwq',
    name: 'nerubianqueen',
    sounds: {
      What: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'NerubianWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'CryptFiendYesAttack1.wav,CryptFiendYesAttack2.wav,CryptFiendYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 2,
          SoundName: 'NerubianYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CryptFiendYes2.wav,CryptFiendYes3.wav,CryptFiendYes4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 3,
          SoundName: 'NerubianYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 4,
          SoundName: 'NerubianReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nnwr',
    name: 'nerubianseer',
    sounds: {
      What: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'NerubianWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'CryptFiendYesAttack1.wav,CryptFiendYesAttack2.wav,CryptFiendYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 2,
          SoundName: 'NerubianYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CryptFiendYes2.wav,CryptFiendYes3.wav,CryptFiendYes4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 3,
          SoundName: 'NerubianYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 4,
          SoundName: 'NerubianReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nnws',
    name: 'nerubianspiderlord',
    sounds: {
      What: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'NerubianWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'CryptFiendYesAttack1.wav,CryptFiendYesAttack2.wav,CryptFiendYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 2,
          SoundName: 'NerubianYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CryptFiendYes2.wav,CryptFiendYes3.wav,CryptFiendYes4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 3,
          SoundName: 'NerubianYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 4,
          SoundName: 'NerubianReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'noga',
    name: 'stonemaulwarchief',
    sounds: {
      What: [
        {
          FileNames: 'OgreWhat1.wav,OgreWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreOneHeadWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'OgreYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 2,
          SoundName: 'OgreOneHeadYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreYes1.wav,OgreYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 3,
          SoundName: 'OgreOneHeadYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 4,
          SoundName: 'OgreOneHeadReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreOneHeadWarcry',
        },
      ],
    },
  },
  {
    id: 'nogl',
    name: 'ogrelord',
    sounds: {
      What: [
        {
          FileNames: 'OgreWhat1.wav,OgreWhat2.wav,OgreWhat3.wav,OgreWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'OgrePissed1.wav,OgrePissed2.wav,OgrePissed3.wav,OgrePissed4.wav,OgrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgrePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'OgreYesAttack1.wav,OgreYesAttack2.wav,OgreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 2,
          SoundName: 'OgreYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreYes1.wav,OgreYes2.wav,OgreYes3.wav,OgreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 3,
          SoundName: 'OgreYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 4,
          SoundName: 'OgreReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWarcry',
        },
      ],
    },
  },
  {
    id: 'nogm',
    name: 'ogre2',
    sounds: {
      What: [
        {
          FileNames: 'OgreWhat1.wav,OgreWhat2.wav,OgreWhat3.wav,OgreWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'OgrePissed1.wav,OgrePissed2.wav,OgrePissed3.wav,OgrePissed4.wav,OgrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgrePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'OgreYesAttack1.wav,OgreYesAttack2.wav,OgreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 2,
          SoundName: 'OgreYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreYes1.wav,OgreYes2.wav,OgreYes3.wav,OgreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 3,
          SoundName: 'OgreYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 4,
          SoundName: 'OgreReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWarcry',
        },
      ],
    },
  },
  {
    id: 'nogn',
    name: 'stonemaulmagi',
    sounds: {
      What: [
        {
          FileNames: 'OgreWhat1.wav,OgreWhat2.wav,OgreWhat3.wav,OgreWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'OgrePissed1.wav,OgrePissed2.wav,OgrePissed3.wav,OgrePissed4.wav,OgrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgrePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'OgreYesAttack1.wav,OgreYesAttack2.wav,OgreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 2,
          SoundName: 'OgreYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreYes1.wav,OgreYes2.wav,OgreYes3.wav,OgreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 3,
          SoundName: 'OgreYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 4,
          SoundName: 'OgreReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWarcry',
        },
      ],
    },
  },
  {
    id: 'nogo',
    name: 'stonemaulogre',
    sounds: {
      What: [
        {
          FileNames: 'OgreWhat1.wav,OgreWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreOneHeadWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'OgreYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 2,
          SoundName: 'OgreOneHeadYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreYes1.wav,OgreYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 3,
          SoundName: 'OgreOneHeadYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 4,
          SoundName: 'OgreOneHeadReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreOneHeadWarcry',
        },
      ],
    },
  },
  {
    id: 'nogr',
    name: 'ogre1',
    sounds: {
      What: [
        {
          FileNames: 'OgreWhat1.wav,OgreWhat2.wav,OgreWhat3.wav,OgreWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'OgrePissed1.wav,OgrePissed2.wav,OgrePissed3.wav,OgrePissed4.wav,OgrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgrePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'OgreYesAttack1.wav,OgreYesAttack2.wav,OgreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 2,
          SoundName: 'OgreYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreYes1.wav,OgreYes2.wav,OgreYes3.wav,OgreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 3,
          SoundName: 'OgreYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 4,
          SoundName: 'OgreReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWarcry',
        },
      ],
    },
  },
  {
    id: 'nomg',
    name: 'ogremagi',
    sounds: {
      What: [
        {
          FileNames: 'OgreWhat1.wav,OgreWhat2.wav,OgreWhat3.wav,OgreWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'OgrePissed1.wav,OgrePissed2.wav,OgrePissed3.wav,OgrePissed4.wav,OgrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgrePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'OgreYesAttack1.wav,OgreYesAttack2.wav,OgreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 2,
          SoundName: 'OgreYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreYes1.wav,OgreYes2.wav,OgreYes3.wav,OgreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 3,
          SoundName: 'OgreYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 4,
          SoundName: 'OgreReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Ogre\\',
          Channel: 1,
          SoundName: 'OgreWarcry',
        },
      ],
    },
  },
  {
    id: 'nowb',
    name: 'owlbear',
    sounds: {
      What: [
        {
          FileNames: 'OwlBearWhat1.wav,OwlBearWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 1,
          SoundName: 'OwlbearWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'OwlBearYesAttack1.wav,OwlBearYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 2,
          SoundName: 'OwlbearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OwlBearYes1.wav,OwlBearYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 3,
          SoundName: 'OwlbearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OwlBearWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 4,
          SoundName: 'OwlbearReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nowe',
    name: 'enragedowlbear',
    sounds: {
      What: [
        {
          FileNames: 'OwlBearWhat1.wav,OwlBearWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 1,
          SoundName: 'OwlbearWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'OwlBearYesAttack1.wav,OwlBearYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 2,
          SoundName: 'OwlbearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OwlBearYes1.wav,OwlBearYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 3,
          SoundName: 'OwlbearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OwlBearWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 4,
          SoundName: 'OwlbearReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nowk',
    name: 'berserkowlbear',
    sounds: {
      What: [
        {
          FileNames: 'OwlBearWhat1.wav,OwlBearWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 1,
          SoundName: 'OwlbearWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'OwlBearYesAttack1.wav,OwlBearYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 2,
          SoundName: 'OwlbearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OwlBearYes1.wav,OwlBearYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 3,
          SoundName: 'OwlbearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OwlBearWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Owlbear\\',
          Channel: 4,
          SoundName: 'OwlbearReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'npfl',
    name: 'purplefelstalker',
    sounds: {
      What: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 1,
          SoundName: 'FelhoundWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FelHoundYesAttack1.wav,FelHoundYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 2,
          SoundName: 'FelhoundYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FelHoundYes1.wav,FelHoundYes2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 3,
          SoundName: 'FelhoundYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 4,
          SoundName: 'FelhoundReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'npfm',
    name: 'felravager',
    sounds: {
      What: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 1,
          SoundName: 'FelhoundWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FelHoundYesAttack1.wav,FelHoundYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 2,
          SoundName: 'FelhoundYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FelHoundYes1.wav,FelHoundYes2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 3,
          SoundName: 'FelhoundYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 4,
          SoundName: 'FelhoundReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nplb',
    name: 'polarbear',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'nplg',
    name: 'giantpolarbear',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'nqbh',
    name: 'quillboarhunter',
    sounds: {
      What: [
        {
          FileNames: 'BristlebackWhat1.wav,BristlebackWhat2.wav,BristlebackWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 1,
          SoundName: 'BristlebackWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BristlebackYesAttack1.wav,BristlebackYesAttack2.wav,BristlebackYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 2,
          SoundName: 'BristlebackYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BristlebackYes1.wav,BristlebackYes2.wav,BristlebackYes3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 3,
          SoundName: 'BristlebackYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BristlebackWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 4,
          SoundName: 'BristlebackReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrdk',
    name: 'reddragonwhelp',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrdr',
    name: 'reddrake',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrel',
    name: 'reefelemental',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'WaterElementalYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'WaterElementalYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nrog',
    name: 'rogue',
    sounds: {
      What: [
        {
          FileNames: 'BanditWhat1.wav,BanditWhat2.wav,BanditWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BanditPissed1.wav,BanditPissed2.wav,BanditPissed3.wav,BanditPissed4.wav,BanditPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BanditYesAttack1.wav,BanditYesAttack2.wav,BanditYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 2,
          SoundName: 'BanditYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BanditYes1.wav,BanditYes2.wav,BanditYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 3,
          SoundName: 'BanditYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BanditWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 4,
          SoundName: 'BanditReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BanditWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWarcry',
        },
      ],
    },
  },
  {
    id: 'nrvd',
    name: 'deathrevenant',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrvf',
    name: 'firerevenant',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrvi',
    name: 'icerevenant',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrvl',
    name: 'lightningrevenant',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrvs',
    name: 'frostrevenant',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrwm',
    name: 'reddragon',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrzb',
    name: 'razormanebrute',
    sounds: {
      What: [
        {
          FileNames: 'BristlebackWhat1.wav,BristlebackWhat2.wav,BristlebackWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 1,
          SoundName: 'RazorManeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BristlebackYesAttack1.wav,BristlebackYesAttack2.wav,BristlebackYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 2,
          SoundName: 'RazorManeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BristlebackYes1.wav,BristlebackYes2.wav,BristlebackYes3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 3,
          SoundName: 'RazorManeYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BristlebackWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 4,
          SoundName: 'RazorManeReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrzg',
    name: 'razormanechieftain',
    sounds: {
      What: [
        {
          FileNames: 'BristlebackWhat1.wav,BristlebackWhat2.wav,BristlebackWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 1,
          SoundName: 'RazorManeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BristlebackYesAttack1.wav,BristlebackYesAttack2.wav,BristlebackYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 2,
          SoundName: 'RazorManeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BristlebackYes1.wav,BristlebackYes2.wav,BristlebackYes3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 3,
          SoundName: 'RazorManeYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BristlebackWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 4,
          SoundName: 'RazorManeReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrzm',
    name: 'razormanemedicineman',
    sounds: {
      What: [
        {
          FileNames: 'BristlebackWhat1.wav,BristlebackWhat2.wav,BristlebackWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 1,
          SoundName: 'RazorManeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BristlebackYesAttack1.wav,BristlebackYesAttack2.wav,BristlebackYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 2,
          SoundName: 'RazorManeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BristlebackYes1.wav,BristlebackYes2.wav,BristlebackYes3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 3,
          SoundName: 'RazorManeYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BristlebackWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 4,
          SoundName: 'RazorManeReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrzs',
    name: 'razormanescout',
    sounds: {
      What: [
        {
          FileNames: 'BristlebackWhat1.wav,BristlebackWhat2.wav,BristlebackWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 1,
          SoundName: 'RazorManeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BristlebackYesAttack1.wav,BristlebackYesAttack2.wav,BristlebackYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 2,
          SoundName: 'RazorManeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BristlebackYes1.wav,BristlebackYes2.wav,BristlebackYes3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 3,
          SoundName: 'RazorManeYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BristlebackWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 4,
          SoundName: 'RazorManeReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nrzt',
    name: 'quillboar',
    sounds: {
      What: [
        {
          FileNames: 'BristlebackWhat1.wav,BristlebackWhat2.wav,BristlebackWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 1,
          SoundName: 'BristlebackWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BristlebackYesAttack1.wav,BristlebackYesAttack2.wav,BristlebackYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 2,
          SoundName: 'BristlebackYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BristlebackYes1.wav,BristlebackYes2.wav,BristlebackYes3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 3,
          SoundName: 'BristlebackYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BristlebackWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 4,
          SoundName: 'BristlebackReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsat',
    name: 'satyrtrickster',
    sounds: {
      What: [
        {
          FileNames: 'SatyreWhat1.wav,SatyreWhat2.wav,SatyreWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SatyrePissed1.wav,SatyrePissed2.wav,SatyrePissed3.wav,SatyrePissed4.wav,SatyrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SatyreYesAttack1.wav,SatyreYesAttack2.wav,SatyreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 2,
          SoundName: 'SatyrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SatyreYes1.wav,SatyreYes2.wav,SatyreYes3.wav,SatyreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 3,
          SoundName: 'SatyrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SatyreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 4,
          SoundName: 'SatyrReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SatyreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWarcry',
        },
      ],
    },
  },
  {
    id: 'nsbm',
    name: 'broodmother',
    sounds: {
      What: [
        {
          FileNames: 'SpiderWhat1.wav,SpiderWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 1,
          SoundName: 'SpiderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiderYesAttack1.wav,SpiderYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 2,
          SoundName: 'SpiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiderYes1.wav,SpiderYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 3,
          SoundName: 'SpiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpiderWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 4,
          SoundName: 'SpiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsbs',
    name: 'snapdragonmorph',
    sounds: {
      What: [
        {
          FileNames: 'SnapDragonWhat1.wav,SnapDragonWhat2.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 1,
          SoundName: 'SnapDragonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SnapDragonYesAttack1.wav,SnapDragonYesAttack2.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 2,
          SoundName: 'SnapDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SnapDragonYes1.wav,SnapDragonYes2.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 3,
          SoundName: 'SnapDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SnapDragonReady1.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 4,
          SoundName: 'SnapDragonReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SnapDragonReady1.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 1,
          SoundName: 'SnapDragonWarcry',
        },
      ],
    },
  },
  {
    id: 'nsc2',
    name: 'spidercrab2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nsc3',
    name: 'spidercrab3',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nscb',
    name: 'spidercrab',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nsel',
    name: 'seaelemental',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'WaterElementalPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'WaterElementalYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'WaterElementalYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nsgb',
    name: 'seagiantbehemoth',
    sounds: {
      What: [
        {
          FileNames: 'SeaGiantWhat1.wav,SeaGiantWhat2.wav,SeaGiantWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SeaGiantYes1.wav,SeaGiantYes2.wav,SeaGiantYes3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 2,
          SoundName: 'SeaGiantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SeaGiantYes1.wav,SeaGiantYes2.wav,SeaGiantYes3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 3,
          SoundName: 'SeaGiantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 4,
          SoundName: 'SeaGiantReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantWarcry',
        },
      ],
    },
  },
  {
    id: 'nsgg',
    name: 'siegegolem',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nsgh',
    name: 'seagianthunter',
    sounds: {
      What: [
        {
          FileNames: 'SeaGiantWhat1.wav,SeaGiantWhat2.wav,SeaGiantWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SeaGiantYes1.wav,SeaGiantYes2.wav,SeaGiantYes3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 2,
          SoundName: 'SeaGiantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SeaGiantYes1.wav,SeaGiantYes2.wav,SeaGiantYes3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 3,
          SoundName: 'SeaGiantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 4,
          SoundName: 'SeaGiantReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantWarcry',
        },
      ],
    },
  },
  {
    id: 'nsgn',
    name: 'seagiant',
    sounds: {
      What: [
        {
          FileNames: 'SeaGiantWhat1.wav,SeaGiantWhat2.wav,SeaGiantWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SeaGiantYes1.wav,SeaGiantYes2.wav,SeaGiantYes3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 2,
          SoundName: 'SeaGiantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SeaGiantYes1.wav,SeaGiantYes2.wav,SeaGiantYes3.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 3,
          SoundName: 'SeaGiantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 4,
          SoundName: 'SeaGiantReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SeaGiantPissed1.wav',
          DirectoryBase: 'Units\\Creeps\\SeaGiant\\',
          Channel: 1,
          SoundName: 'SeaGiantWarcry',
        },
      ],
    },
  },
  {
    id: 'nsgt',
    name: 'giantspider',
    sounds: {
      What: [
        {
          FileNames: 'SpiderWhat1.wav,SpiderWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 1,
          SoundName: 'SpiderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiderYesAttack1.wav,SpiderYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 2,
          SoundName: 'SpiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiderYes1.wav,SpiderYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 3,
          SoundName: 'SpiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpiderWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 4,
          SoundName: 'SpiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nska',
    name: 'skeletalarcher',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonArcherWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonArcherReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nske',
    name: 'skeleton',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsca',
    name: 'skeletalarchersummoned',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonArcherWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonArcherReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsce',
    name: 'skeletonsummoned',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nskf',
    name: 'burningarcher',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonArcherWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonArcherReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nskg',
    name: 'giantskeleton',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nskm',
    name: 'skeletalmarksman',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonArcherWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonArcherReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsko',
    name: 'skeletalorc',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nslf',
    name: 'sludgeflinger',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'SludgeMonsterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'SludgeMonsterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'SludgeMonsterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'SludgeMonsterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WaterElementalWhat1.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 4,
          SoundName: 'SludgeMonsterReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nslh',
    name: 'salamanderhatchling',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsll',
    name: 'salamanderlord',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nslm',
    name: 'sludgeminion',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'SludgeMonsterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'SludgeMonsterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'SludgeMonsterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'SludgeMonsterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WaterElementalWhat1.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 4,
          SoundName: 'SludgeMonsterReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsln',
    name: 'sludgemonstrosity',
    sounds: {
      What: [
        {
          FileNames: 'WaterElementalWhat1.wav,WaterElementalWhat2.wav,WaterElementalWhat3.wav,WaterElementalWhat4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'SludgeMonsterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WaterElementalPissed1.wav,WaterElementalPissed2.wav,WaterElementalPissed3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 1,
          SoundName: 'SludgeMonsterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WaterElementalYesAttack1.wav,WaterElementalYesAttack2.wav,WaterElementalYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 2,
          SoundName: 'SludgeMonsterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WaterElementalYes1.wav,WaterElementalYes2.wav,WaterElementalYes3.wav,WaterElementalYes4.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 3,
          SoundName: 'SludgeMonsterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WaterElementalWhat1.wav',
          DirectoryBase: 'Units\\Human\\WaterElemental\\',
          Channel: 4,
          SoundName: 'SludgeMonsterReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nslr',
    name: 'salamander',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nslv',
    name: 'salamandervizier',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsnp',
    name: 'snapdragon',
    sounds: {
      What: [
        {
          FileNames: 'SnapDragonWhat1.wav,SnapDragonWhat2.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 1,
          SoundName: 'SnapDragonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SnapDragonYesAttack1.wav,SnapDragonYesAttack2.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 2,
          SoundName: 'SnapDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SnapDragonYes1.wav,SnapDragonYes2.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 3,
          SoundName: 'SnapDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SnapDragonReady1.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 4,
          SoundName: 'SnapDragonReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SnapDragonReady1.wav',
          DirectoryBase: 'Units\\Naga\\SnapDragon\\',
          Channel: 1,
          SoundName: 'SnapDragonWarcry',
        },
      ],
    },
  },
  {
    id: 'nsns',
    name: 'wateryminionsnarecaster',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsoc',
    name: 'skeletalorcchampion',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsog',
    name: 'skeletalorcgrunt',
    sounds: {
      What: [
        {
          FileNames: 'SkeletonWhat1.wav,SkeletonWhat2.wav,SkeletonWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 1,
          SoundName: 'SkeletonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SkeletonYesAttack1.wav,SkeletonYesAttack2.wav,SkeletonYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 2,
          SoundName: 'SkeletonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SkeletonYes1.wav,SkeletonYes2.wav,SkeletonYes3.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 3,
          SoundName: 'SkeletonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SkeletonWhat1.wav',
          DirectoryBase: 'Units\\Undead\\Skeleton\\',
          Channel: 4,
          SoundName: 'SkeletonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nspb',
    name: 'spiderblack',
    sounds: {
      What: [
        {
          FileNames: 'SpiderWhat1.wav,SpiderWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 1,
          SoundName: 'SpiderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiderYesAttack1.wav,SpiderYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 2,
          SoundName: 'SpiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiderYes1.wav,SpiderYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 3,
          SoundName: 'SpiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpiderWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 4,
          SoundName: 'SpiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nspd',
    name: 'spiderling',
    sounds: {
      What: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 1,
          SoundName: 'NerubianWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'CryptFiendYesAttack1.wav,CryptFiendYesAttack2.wav,CryptFiendYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 2,
          SoundName: 'NerubianYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CryptFiendYes2.wav,CryptFiendYes3.wav,CryptFiendYes4.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 3,
          SoundName: 'NerubianYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CryptFiendWhat1.wav,CryptFiendWhat2.wav,CryptFiendWhat3.wav',
          DirectoryBase: 'Units\\Undead\\CryptFiend\\',
          Channel: 4,
          SoundName: 'NerubianReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nspg',
    name: 'forestspider',
    sounds: {
      What: [
        {
          FileNames: 'SpiderWhat1.wav,SpiderWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 1,
          SoundName: 'SpiderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiderYesAttack1.wav,SpiderYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 2,
          SoundName: 'SpiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiderYes1.wav,SpiderYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 3,
          SoundName: 'SpiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpiderWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 4,
          SoundName: 'SpiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nspp',
    name: 'spiritpig',
    sounds: {
      What: [
        {
          FileNames: 'BristlebackWhat1.wav,BristlebackWhat2.wav,BristlebackWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 1,
          SoundName: 'RazorManeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'BristlebackYesAttack1.wav,BristlebackYesAttack2.wav,BristlebackYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 2,
          SoundName: 'RazorManeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BristlebackYes1.wav,BristlebackYes2.wav,BristlebackYes3.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 3,
          SoundName: 'RazorManeYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BristlebackWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\BristleBack\\',
          Channel: 4,
          SoundName: 'RazorManeReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nspr',
    name: 'spider',
    sounds: {
      What: [
        {
          FileNames: 'SpiderWhat1.wav,SpiderWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 1,
          SoundName: 'SpiderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiderYesAttack1.wav,SpiderYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 2,
          SoundName: 'SpiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiderYes1.wav,SpiderYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 3,
          SoundName: 'SpiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpiderWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 4,
          SoundName: 'SpiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsqa',
    name: 'ancientsasquatch',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsqe',
    name: 'eldersasquatch',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsqo',
    name: 'sasquatchoracle',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsqt',
    name: 'sasquatch',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsra',
    name: 'stormreaverapprentice',
    sounds: {
      What: [
        {
          FileNames: 'ShamanWhat1.wav,ShamanWhat3.wav,ShamanWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShamanPissed1.wav,ShamanPissed2.wav,ShamanPissed3.wav,ShamanPissed5.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShamanYesAttack1.wav,ShamanYesAttack3.wav,ShamanYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 2,
          SoundName: 'ShamanXYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShamanYes1.wav,ShamanYes2.wav,ShamanYes4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 3,
          SoundName: 'ShamanXYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 4,
          SoundName: 'ShamanXReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWarcry',
        },
      ],
    },
  },
  {
    id: 'nsrh',
    name: 'stormreaverhermit',
    sounds: {
      What: [
        {
          FileNames: 'ShamanWhat1.wav,ShamanWhat3.wav,ShamanWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShamanPissed1.wav,ShamanPissed2.wav,ShamanPissed3.wav,ShamanPissed5.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShamanYesAttack1.wav,ShamanYesAttack3.wav,ShamanYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 2,
          SoundName: 'ShamanXYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShamanYes1.wav,ShamanYes2.wav,ShamanYes4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 3,
          SoundName: 'ShamanXYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 4,
          SoundName: 'ShamanXReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWarcry',
        },
      ],
    },
  },
  {
    id: 'nsrn',
    name: 'stormreavernecrolyte',
    sounds: {
      What: [
        {
          FileNames: 'ShamanWhat1.wav,ShamanWhat3.wav,ShamanWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShamanPissed1.wav,ShamanPissed2.wav,ShamanPissed3.wav,ShamanPissed5.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShamanYesAttack1.wav,ShamanYesAttack3.wav,ShamanYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 2,
          SoundName: 'ShamanXYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShamanYes1.wav,ShamanYes2.wav,ShamanYes4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 3,
          SoundName: 'ShamanXYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 4,
          SoundName: 'ShamanXReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWarcry',
        },
      ],
    },
  },
  {
    id: 'nsrv',
    name: 'revenantoftheseas',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsrw',
    name: 'stormreaverwarlock',
    sounds: {
      What: [
        {
          FileNames: 'ShamanWhat1.wav,ShamanWhat3.wav,ShamanWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShamanPissed1.wav,ShamanPissed2.wav,ShamanPissed3.wav,ShamanPissed5.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShamanYesAttack1.wav,ShamanYesAttack3.wav,ShamanYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 2,
          SoundName: 'ShamanXYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShamanYes1.wav,ShamanYes2.wav,ShamanYes4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 3,
          SoundName: 'ShamanXYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 4,
          SoundName: 'ShamanXReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWarcry',
        },
      ],
    },
  },
  {
    id: 'nssp',
    name: 'spittingspider',
    sounds: {
      What: [
        {
          FileNames: 'SpiderWhat1.wav,SpiderWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 1,
          SoundName: 'SpiderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiderYesAttack1.wav,SpiderYesAttack2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 2,
          SoundName: 'SpiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiderYes1.wav,SpiderYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 3,
          SoundName: 'SpiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpiderWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Spider\\',
          Channel: 4,
          SoundName: 'SpiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsth',
    name: 'satyrhellcaller',
    sounds: {
      What: [
        {
          FileNames: 'SatyreWhat1.wav,SatyreWhat2.wav,SatyreWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SatyrePissed1.wav,SatyrePissed2.wav,SatyrePissed3.wav,SatyrePissed4.wav,SatyrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SatyreYesAttack1.wav,SatyreYesAttack2.wav,SatyreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 2,
          SoundName: 'SatyrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SatyreYes1.wav,SatyreYes2.wav,SatyreYes3.wav,SatyreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 3,
          SoundName: 'SatyrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SatyreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 4,
          SoundName: 'SatyrReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SatyreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWarcry',
        },
      ],
    },
  },
  {
    id: 'nstl',
    name: 'satyrsoulstealer',
    sounds: {
      What: [
        {
          FileNames: 'SatyreWhat1.wav,SatyreWhat2.wav,SatyreWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SatyrePissed1.wav,SatyrePissed2.wav,SatyrePissed3.wav,SatyrePissed4.wav,SatyrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SatyreYesAttack1.wav,SatyreYesAttack2.wav,SatyreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 2,
          SoundName: 'SatyrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SatyreYes1.wav,SatyreYes2.wav,SatyreYes3.wav,SatyreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 3,
          SoundName: 'SatyrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SatyreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 4,
          SoundName: 'SatyrReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SatyreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWarcry',
        },
      ],
    },
  },
  {
    id: 'nsts',
    name: 'satyrshadowdancer',
    sounds: {
      What: [
        {
          FileNames: 'SatyreWhat1.wav,SatyreWhat2.wav,SatyreWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SatyrePissed1.wav,SatyrePissed2.wav,SatyrePissed3.wav,SatyrePissed4.wav,SatyrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SatyreYesAttack1.wav,SatyreYesAttack2.wav,SatyreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 2,
          SoundName: 'SatyrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SatyreYes1.wav,SatyreYes2.wav,SatyreYes3.wav,SatyreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 3,
          SoundName: 'SatyrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SatyreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 4,
          SoundName: 'SatyrReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SatyreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWarcry',
        },
      ],
    },
  },
  {
    id: 'nstw',
    name: 'stormwyrm',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsty',
    name: 'satyr',
    sounds: {
      What: [
        {
          FileNames: 'SatyreWhat1.wav,SatyreWhat2.wav,SatyreWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SatyrePissed1.wav,SatyrePissed2.wav,SatyrePissed3.wav,SatyrePissed4.wav,SatyrePissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SatyreYesAttack1.wav,SatyreYesAttack2.wav,SatyreYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 2,
          SoundName: 'SatyrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SatyreYes1.wav,SatyreYes2.wav,SatyreYes3.wav,SatyreYes4.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 3,
          SoundName: 'SatyrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SatyreReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 4,
          SoundName: 'SatyrReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SatyreWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Satyr\\',
          Channel: 1,
          SoundName: 'SatyrWarcry',
        },
      ],
    },
  },
  {
    id: 'nthl',
    name: 'thunderlizard',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntka',
    name: 'tuskarrspearman',
    sounds: {
      What: [
        {
          FileNames: 'TuskarrWhat1.wav,TuskarrWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 1,
          SoundName: 'TuskarrWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 2,
          SoundName: 'TuskarrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 3,
          SoundName: 'TuskarrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TuskarrWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 4,
          SoundName: 'TuskarrReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntkc',
    name: 'tuskarrchieftain',
    sounds: {
      What: [
        {
          FileNames: 'TuskarrWhat1.wav,TuskarrWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 1,
          SoundName: 'TuskarrWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 2,
          SoundName: 'TuskarrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 3,
          SoundName: 'TuskarrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TuskarrWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 4,
          SoundName: 'TuskarrReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntkf',
    name: 'tuskarrfighter',
    sounds: {
      What: [
        {
          FileNames: 'TuskarrWhat1.wav,TuskarrWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 1,
          SoundName: 'TuskarrWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 2,
          SoundName: 'TuskarrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 3,
          SoundName: 'TuskarrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TuskarrWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 4,
          SoundName: 'TuskarrReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntkh',
    name: 'tuskarrhealer',
    sounds: {
      What: [
        {
          FileNames: 'TuskarrWhat1.wav,TuskarrWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 1,
          SoundName: 'TuskarrWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 2,
          SoundName: 'TuskarrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 3,
          SoundName: 'TuskarrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TuskarrWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 4,
          SoundName: 'TuskarrReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntks',
    name: 'tuskarrsorceror',
    sounds: {
      What: [
        {
          FileNames: 'TuskarrWhat1.wav,TuskarrWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 1,
          SoundName: 'TuskarrWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 2,
          SoundName: 'TuskarrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 3,
          SoundName: 'TuskarrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TuskarrWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 4,
          SoundName: 'TuskarrReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntkt',
    name: 'tuskarrtrapper',
    sounds: {
      What: [
        {
          FileNames: 'TuskarrWhat1.wav,TuskarrWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 1,
          SoundName: 'TuskarrWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 2,
          SoundName: 'TuskarrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 3,
          SoundName: 'TuskarrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TuskarrWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 4,
          SoundName: 'TuskarrReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntkw',
    name: 'tuskarrwarrior',
    sounds: {
      What: [
        {
          FileNames: 'TuskarrWhat1.wav,TuskarrWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 1,
          SoundName: 'TuskarrWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 2,
          SoundName: 'TuskarrYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TuskarrYes1.wav,TuskarrYes2.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 3,
          SoundName: 'TuskarrYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TuskarrWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\tuskar\\',
          Channel: 4,
          SoundName: 'TuskarrReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntor',
    name: 'tornado',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ntrd',
    name: 'dragonturtle',
    sounds: {
      What: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav,GiantSeaTurtleWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 1,
          SoundName: 'GiantSeaTurtleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 2,
          SoundName: 'GiantSeaTurtleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 3,
          SoundName: 'GiantSeaTurtleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 4,
          SoundName: 'GiantSeaTurtleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntrg',
    name: 'gargantuanseaturtle',
    sounds: {
      What: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav,GiantSeaTurtleWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 1,
          SoundName: 'GiantSeaTurtleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 2,
          SoundName: 'GiantSeaTurtleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 3,
          SoundName: 'GiantSeaTurtleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 4,
          SoundName: 'GiantSeaTurtleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntrh',
    name: 'seaturtlehatchling',
    sounds: {
      What: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav,GiantSeaTurtleWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 1,
          SoundName: 'GiantSeaTurtleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 2,
          SoundName: 'GiantSeaTurtleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 3,
          SoundName: 'GiantSeaTurtleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 4,
          SoundName: 'GiantSeaTurtleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntrs',
    name: 'seaturtle',
    sounds: {
      What: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav,GiantSeaTurtleWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 1,
          SoundName: 'GiantSeaTurtleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 2,
          SoundName: 'GiantSeaTurtleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 3,
          SoundName: 'GiantSeaTurtleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 4,
          SoundName: 'GiantSeaTurtleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntrt',
    name: 'giantseaturtle',
    sounds: {
      What: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav,GiantSeaTurtleWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 1,
          SoundName: 'GiantSeaTurtleWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 2,
          SoundName: 'GiantSeaTurtleYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GiantSeaTurtleYes1.wav,GiantSeaTurtleYes2.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 3,
          SoundName: 'GiantSeaTurtleYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GiantSeaTurtleWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\GiantSeaTurtle\\',
          Channel: 4,
          SoundName: 'GiantSeaTurtleReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntrv',
    name: 'revenantofthetides',
    sounds: {
      What: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 1,
          SoundName: 'RevenantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GargoyleYesAttack2.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 2,
          SoundName: 'RevenantYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GargoyleYes3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 3,
          SoundName: 'RevenantYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GargoyleWhat3.wav',
          DirectoryBase: 'Units\\Undead\\Gargoyle\\',
          Channel: 4,
          SoundName: 'RevenantReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ntws',
    name: 'wateryminiontidewarrior',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nubk',
    name: 'unbrokendarkhunter',
    sounds: {
      What: [
        {
          FileNames: 'UnbrokenWhat1.wav,UnbrokenWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 1,
          SoundName: 'UnbrokenWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'UnbrokenYes1.wav,UnbrokenYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 2,
          SoundName: 'UnbrokenYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'UnbrokenYes1.wav,UnbrokenYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 3,
          SoundName: 'UnbrokenYes',
        },
      ],
      Ready: [
        {
          FileNames: 'UnbrokenWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 4,
          SoundName: 'UnbrokenReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nubr',
    name: 'unbrokenrager',
    sounds: {
      What: [
        {
          FileNames: 'UnbrokenWhat1.wav,UnbrokenWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 1,
          SoundName: 'UnbrokenWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'UnbrokenYes1.wav,UnbrokenYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 2,
          SoundName: 'UnbrokenYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'UnbrokenYes1.wav,UnbrokenYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 3,
          SoundName: 'UnbrokenYes',
        },
      ],
      Ready: [
        {
          FileNames: 'UnbrokenWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 4,
          SoundName: 'UnbrokenReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nubw',
    name: 'unbrokendarkweaver',
    sounds: {
      What: [
        {
          FileNames: 'UnbrokenWhat1.wav,UnbrokenWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 1,
          SoundName: 'UnbrokenWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'UnbrokenYes1.wav,UnbrokenYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 2,
          SoundName: 'UnbrokenYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'UnbrokenYes1.wav,UnbrokenYes2.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 3,
          SoundName: 'UnbrokenYes',
        },
      ],
      Ready: [
        {
          FileNames: 'UnbrokenWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Unbroken\\',
          Channel: 4,
          SoundName: 'UnbrokenReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nvde',
    name: 'eldervoidwalker',
    sounds: {
      What: [
        {
          FileNames: 'ObsidianAvengerWhat1.wav,ObsidianAvengerWhat2.wav,ObsidianAvengerWhat3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ObsidianAvengerPissed1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ObsidianAvengerYesAttack1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 2,
          SoundName: 'ObsidianDestroyerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ObsidianAvengerYes1.wav,ObsidianAvengerYes2.wav,ObsidianAvengerYes3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 3,
          SoundName: 'ObsidianDestroyerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 4,
          SoundName: 'ObsidianDestroyerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWarcry',
        },
      ],
    },
  },
  {
    id: 'nvdg',
    name: 'greatervoidwalker',
    sounds: {
      What: [
        {
          FileNames: 'ObsidianAvengerWhat1.wav,ObsidianAvengerWhat2.wav,ObsidianAvengerWhat3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ObsidianAvengerPissed1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ObsidianAvengerYesAttack1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 2,
          SoundName: 'ObsidianDestroyerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ObsidianAvengerYes1.wav,ObsidianAvengerYes2.wav,ObsidianAvengerYes3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 3,
          SoundName: 'ObsidianDestroyerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 4,
          SoundName: 'ObsidianDestroyerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWarcry',
        },
      ],
    },
  },
  {
    id: 'nvdl',
    name: 'lesservoidwalker',
    sounds: {
      What: [
        {
          FileNames: 'ObsidianAvengerWhat1.wav,ObsidianAvengerWhat2.wav,ObsidianAvengerWhat3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ObsidianAvengerPissed1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ObsidianAvengerYesAttack1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 2,
          SoundName: 'ObsidianDestroyerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ObsidianAvengerYes1.wav,ObsidianAvengerYes2.wav,ObsidianAvengerYes3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 3,
          SoundName: 'ObsidianDestroyerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 4,
          SoundName: 'ObsidianDestroyerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWarcry',
        },
      ],
    },
  },
  {
    id: 'nvdw',
    name: 'voidwalker',
    sounds: {
      What: [
        {
          FileNames: 'ObsidianAvengerWhat1.wav,ObsidianAvengerWhat2.wav,ObsidianAvengerWhat3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ObsidianAvengerPissed1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ObsidianAvengerYesAttack1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 2,
          SoundName: 'ObsidianDestroyerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ObsidianAvengerYes1.wav,ObsidianAvengerYes2.wav,ObsidianAvengerYes3.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 3,
          SoundName: 'ObsidianDestroyerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 4,
          SoundName: 'ObsidianDestroyerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ObsidianAvengerReady1.wav',
          DirectoryBase: 'Units\\Undead\\ObsidianStatue\\',
          Channel: 1,
          SoundName: 'ObsidianDestroyerWarcry',
        },
      ],
    },
  },
  {
    id: 'nwen',
    name: 'wendigo1',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nwgs',
    name: 'nagacoutl',
    sounds: {
      What: [
        {
          FileNames: 'WingedSerpentWhat1.wav,WingedSerpentWhat2.wav',
          DirectoryBase: 'Units\\Naga\\WindSerpent\\',
          Channel: 1,
          SoundName: 'WingedSerpentWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WingedSerpentYes1.wav,WingedSerpentYes2.wav',
          DirectoryBase: 'Units\\Naga\\WindSerpent\\',
          Channel: 2,
          SoundName: 'WingedSerpentYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WingedSerpentYes1.wav,WingedSerpentYes2.wav',
          DirectoryBase: 'Units\\Naga\\WindSerpent\\',
          Channel: 3,
          SoundName: 'WingedSerpentYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WingedSerpentReady1.wav',
          DirectoryBase: 'Units\\Naga\\WindSerpent\\',
          Channel: 4,
          SoundName: 'WingedSerpentReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WingedSerpentReady1.wav',
          DirectoryBase: 'Units\\Naga\\WindSerpent\\',
          Channel: 1,
          SoundName: 'WingedSerpentWarcry',
        },
      ],
    },
  },
  {
    id: 'nwiz',
    name: 'apprenticewizard',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwld',
    name: 'direwolf',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwlg',
    name: 'giantwolf',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwlt',
    name: 'timberwolf',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwna',
    name: 'ancientwendigo',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nwnr',
    name: 'elderwendigo',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nwns',
    name: 'wendigoshaman',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat1.wav,WendigoWhat2.wav,WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WendigoPissed1.wav,WendigoPissed2.wav,WendigoPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'WendigoPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav,WendigoYesAttack2.wav,WendigoYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'WendigoYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYes1.wav,WendigoYes2.wav,WendigoYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'WendigoYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WendigoWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 4,
          SoundName: 'WendigoReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nwrg',
    name: 'wargolem',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nws1',
    name: 'windserpent',
    sounds: {
      What: [
        {
          FileNames: 'WindSerpentWhat1.wav,WindSerpentWhat2.wav,WindSerpentWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\WindSerpent\\',
          Channel: 1,
          SoundName: 'DragonHawkWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WindSerpentPissed1.wav,WindSerpentPissed2.wav,WindSerpentPissed3.wav,WindSerpentPissed4.wav,WindSerpentPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\WindSerpent\\',
          Channel: 1,
          SoundName: 'DragonHawkPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WindSerpentYesAttack1.wav,WindSerpentYesAttack2.wav,WindSerpentYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\WindSerpent\\',
          Channel: 2,
          SoundName: 'DragonHawkYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WindSerpentYes1.wav,WindSerpentYes2.wav,WindSerpentYes3.wav',
          DirectoryBase: 'Units\\Creeps\\WindSerpent\\',
          Channel: 3,
          SoundName: 'DragonHawkYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WindSerpentReady1.wav',
          DirectoryBase: 'Units\\Creeps\\WindSerpent\\',
          Channel: 4,
          SoundName: 'DragonHawkReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WindSerpentWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\WindSerpent\\',
          Channel: 1,
          SoundName: 'DragonHawkWarcry',
        },
      ],
    },
  },
  {
    id: 'nwwd',
    name: 'whitedirewolf',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwwf',
    name: 'whitewolf',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwwg',
    name: 'giantwhitewolf',
    sounds: {
      What: [
        {
          FileNames: 'SpiritWolfWhat1.wav,SpiritWolfWhat2.wav,SpiritWolfWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 1,
          SoundName: 'SpiritWolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'SpiritWolfYesAttack1.wav,SpiritWolfYesAttack2.wav,SpiritWolfYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 2,
          SoundName: 'SpiritWolfYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpiritWolfYes1.wav,SpiritWolfYes2.wav,SpiritWolfYes3.wav',
          DirectoryBase: 'Units\\Orc\\Spiritwolf\\',
          Channel: 3,
          SoundName: 'SpiritWolfYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwzd',
    name: 'darkwizard',
    sounds: {
      What: [
        {
          FileNames: 'HeroArchMageWhat1.wav,HeroArchMageWhat2.wav,HeroArchMageWhat3.wav,HeroArchMageWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroArchMagePissed1.wav,HeroArchMagePissed2.wav,HeroArchMagePissed3.wav,HeroArchMagePissed4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMagePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroArchMageYesAttack1.wav,HeroArchMageYesAttack2.wav,HeroArchMageYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 2,
          SoundName: 'HeroArchMageYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroArchMageYes1.wav,HeroArchMageYes2.wav,HeroArchMageYes3.wav,HeroArchMageYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 3,
          SoundName: 'HeroArchMageYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroArchMageReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 4,
          SoundName: 'HeroArchMageReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroArchMageWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWarcry',
        },
      ],
    },
  },
  {
    id: 'nwzg',
    name: 'renegadewizard',
    sounds: {
      What: [
        {
          FileNames: 'HeroArchMageWhat1.wav,HeroArchMageWhat2.wav,HeroArchMageWhat3.wav,HeroArchMageWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroArchMagePissed1.wav,HeroArchMagePissed2.wav,HeroArchMagePissed3.wav,HeroArchMagePissed4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMagePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroArchMageYesAttack1.wav,HeroArchMageYesAttack2.wav,HeroArchMageYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 2,
          SoundName: 'HeroArchMageYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroArchMageYes1.wav,HeroArchMageYes2.wav,HeroArchMageYes3.wav,HeroArchMageYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 3,
          SoundName: 'HeroArchMageYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroArchMageReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 4,
          SoundName: 'HeroArchMageReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroArchMageWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWarcry',
        },
      ],
    },
  },
  {
    id: 'nwzr',
    name: 'roguewizard',
    sounds: {
      What: [
        {
          FileNames: 'HeroArchMageWhat1.wav,HeroArchMageWhat2.wav,HeroArchMageWhat3.wav,HeroArchMageWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroArchMagePissed1.wav,HeroArchMagePissed2.wav,HeroArchMagePissed3.wav,HeroArchMagePissed4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMagePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroArchMageYesAttack1.wav,HeroArchMageYesAttack2.wav,HeroArchMageYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 2,
          SoundName: 'HeroArchMageYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroArchMageYes1.wav,HeroArchMageYes2.wav,HeroArchMageYes3.wav,HeroArchMageYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 3,
          SoundName: 'HeroArchMageYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroArchMageReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 4,
          SoundName: 'HeroArchMageReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroArchMageWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWarcry',
        },
      ],
    },
  },
  {
    id: 'nzep',
    name: 'goblinzeppelin',
    sounds: {
      What: [
        {
          FileNames: 'GoblinZeppelinWhat1.wav,GoblinZeppelinWhat2.wav,GoblinZeppelinWhat3.wav,GoblinZeppelinWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinZeppelin\\',
          Channel: 1,
          SoundName: 'GoblinZeppelinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GoblinZeppelinPissed1.wav,GoblinZeppelinPissed2.wav,GoblinZeppelinPissed3.wav,GoblinZeppelinPissed4.wav,GoblinZeppelinPissed5.wav,GoblinZeppelinPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinZeppelin\\',
          Channel: 1,
          SoundName: 'GoblinZeppelinPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'GoblinZeppelinYes1.wav,GoblinZeppelinYes2.wav,GoblinZeppelinYes3.wav,GoblinZeppelinYes4.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinZeppelin\\',
          Channel: 3,
          SoundName: 'GoblinZeppelinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GoblinZeppelinReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinZeppelin\\',
          Channel: 4,
          SoundName: 'GoblinZeppelinReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nzom',
    name: 'zombie',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'ZombieWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'ZombieYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'ZombieYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nchp',
    name: 'chaplain',
    sounds: {
      What: [
        {
          FileNames: 'PriestWhat1.wav,PriestWhat2.wav,PriestWhat3.wav,PriestWhat4.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'PriestWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PriestPissed1.wav,PriestPissed2.wav,PriestPissed3.wav,PriestPissed4.wav,PriestPissed5.wav,PriestPissed6.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'PriestPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PriestYesAttack1.wav,PriestYesAttack2.wav,PriestYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 2,
          SoundName: 'PriestYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PriestYes1.wav,PriestYes2.wav,PriestYes3.wav,PriestYes4.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 3,
          SoundName: 'PriestYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PriestReady1.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 4,
          SoundName: 'PriestReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PriestWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'PriestWarcry',
        },
      ],
    },
  },
  {
    id: 'nhym',
    name: 'hydromancer',
    sounds: {
      What: [
        {
          FileNames: 'HeroArchMageWhat1.wav,HeroArchMageWhat2.wav,HeroArchMageWhat3.wav,HeroArchMageWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroArchMagePissed1.wav,HeroArchMagePissed2.wav,HeroArchMagePissed3.wav,HeroArchMagePissed4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMagePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroArchMageYesAttack1.wav,HeroArchMageYesAttack2.wav,HeroArchMageYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 2,
          SoundName: 'HeroArchMageYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroArchMageYes1.wav,HeroArchMageYes2.wav,HeroArchMageYes3.wav,HeroArchMageYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 3,
          SoundName: 'HeroArchMageYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroArchMageReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 4,
          SoundName: 'HeroArchMageReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroArchMageWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWarcry',
        },
      ],
    },
  },
  {
    id: 'nalb',
    name: 'albatross',
    sounds: {
      What: [
        {
          FileNames: 'AlbatrossWhat1.wav,AlbatrossWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Albatross\\',
          Channel: 1,
          SoundName: 'AlbatrossWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfro',
    name: 'frog',
    sounds: {
      What: [
        {
          FileNames: 'FrogWhat1.wav',
          DirectoryBase: 'Units\\Critters\\Frog\\',
          Channel: 1,
          SoundName: 'FrogWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nech',
    name: 'chicken',
    sounds: {
      What: [
        {
          FileNames: 'ChickenWhat1.wav',
          DirectoryBase: 'Units\\Critters\\EasterChicken',
          Channel: 1,
          SoundName: 'ChickenWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'necr',
    name: 'rabbit',
    sounds: {
      What: [
        {
          FileNames: 'RabbitWhat1.wav',
          DirectoryBase: 'Units\\Critters\\EasterRabbit',
          Channel: 1,
          SoundName: 'RabbitWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nrac',
    name: 'raccoon',
    sounds: {
      What: [
        {
          FileNames: 'RacoonWhat1.wav',
          DirectoryBase: 'Units\\Critters\\Raccoon',
          Channel: 1,
          SoundName: 'RaccoonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncrb',
    name: 'crab',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nder',
    name: 'deer',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngog',
    name: 'dog',
    sounds: {
      What: [
        {
          FileNames: 'Wolf1.wav,Wolf2.wav',
          DirectoryBase: 'Units\\Critters\\Wolf\\',
          Channel: 1,
          SoundName: 'WolfWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndwm',
    name: 'duneworm',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfbr',
    name: 'felboar',
    sounds: {
      What: [
        {
          FileNames: 'QuillBoarWhat1.wav,QuillBoarWhat2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 1,
          SoundName: 'QuillBeastWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 2,
          SoundName: 'QuillBeastYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'QuillBoarYes1.wav,QuillBoarYes2.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 3,
          SoundName: 'QuillBeastYes',
        },
      ],
      Ready: [
        {
          FileNames: 'QuillBoarReady1.wav',
          DirectoryBase: 'Units\\Creeps\\QuillBeast\\',
          Channel: 4,
          SoundName: 'QuillBeastReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhmc',
    name: 'hermitcrab',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'now2',
    name: 'owl2',
    sounds: {
      What: [
        {
          FileNames: 'OwlWhat1.wav,OwlWhat2.wav',
          DirectoryBase: 'Units\\Critters\\SnowOwl\\',
          Channel: 1,
          SoundName: 'SnowOwlWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'now3',
    name: 'owl3',
    sounds: {
      What: [
        {
          FileNames: 'OwlWhat1.wav,OwlWhat2.wav',
          DirectoryBase: 'Units\\Critters\\SnowOwl\\',
          Channel: 1,
          SoundName: 'SnowOwlWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nowl',
    name: 'owl',
    sounds: {
      What: [
        {
          FileNames: 'OwlWhat1.wav,OwlWhat2.wav',
          DirectoryBase: 'Units\\Critters\\SnowOwl\\',
          Channel: 1,
          SoundName: 'SnowOwlWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'npig',
    name: 'pig',
    sounds: {
      What: [
        {
          FileNames: 'PigWhat1.wav,PigWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Pig\\',
          Channel: 1,
          SoundName: 'PigWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'npng',
    name: 'penguin',
    sounds: {
      What: [
        {
          FileNames: 'PenguinWhat1.wav,PenguinWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Penguin\\',
          Channel: 1,
          SoundName: 'PenguinWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'npnw',
    name: 'waterpenguin',
    sounds: {
      What: [
        {
          FileNames: 'PenguinWhat1.wav,PenguinWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Penguin\\',
          Channel: 1,
          SoundName: 'PenguinWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nrat',
    name: 'rat',
    sounds: {
      What: [
        {
          FileNames: 'RatWhat1.wav,RatWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Rat\\',
          Channel: 1,
          SoundName: 'RatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nsea',
    name: 'seal',
    sounds: {
      What: [
        {
          FileNames: 'SealWhat1.wav,SealWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Seal\\',
          Channel: 1,
          SoundName: 'SealWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nsha',
    name: 'amphibioussheep',
    sounds: {
      What: [
        {
          FileNames: 'SheepWhat1.wav,SheepWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Sheep\\',
          Channel: 1,
          SoundName: 'SheepWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nshe',
    name: 'sheep',
    sounds: {
      What: [
        {
          FileNames: 'SheepWhat1.wav,SheepWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Sheep\\',
          Channel: 1,
          SoundName: 'SheepWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nshf',
    name: 'flyingsheep',
    sounds: {
      What: [
        {
          FileNames: 'SheepWhat1.wav,SheepWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Sheep\\',
          Channel: 1,
          SoundName: 'SheepWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nshw',
    name: 'watersheep',
    sounds: {
      What: [
        {
          FileNames: 'SheepWhat1.wav,SheepWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Sheep\\',
          Channel: 1,
          SoundName: 'SheepWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nskk',
    name: 'skink',
    sounds: {
      What: [
        {
          FileNames: 'SkinkWhat1.wav,SkinkWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Skink\\',
          Channel: 1,
          SoundName: 'SkinkWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nsno',
    name: 'snowyowl',
    sounds: {
      What: [
        {
          FileNames: 'OwlWhat1.wav,OwlWhat2.wav',
          DirectoryBase: 'Units\\Critters\\SnowOwl\\',
          Channel: 1,
          SoundName: 'SnowOwlWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvil',
    name: 'villagerman',
    sounds: {
      What: [
        {
          FileNames: 'VillagerM1.wav,VillagerM2.wav,VillagerM3.wav',
          DirectoryBase: 'Units\\Critters\\VillagerMan\\',
          Channel: 1,
          SoundName: 'VillagerManWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvk2',
    name: 'villagerkid2',
    sounds: {
      What: [
        {
          FileNames: 'VillagerCWhat1.wav,VillagerCWhat2.wav,VillagerCWhat3.wav,VillagerCWhat4.wav,VillagerCWhat5.wav',
          DirectoryBase: 'Units\\Critters\\VillagerKid\\',
          Channel: 1,
          SoundName: 'VillagerKidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvl2',
    name: 'villagerman2',
    sounds: {
      What: [
        {
          FileNames: 'VillagerMAWhat1.wav,VillagerMAWhat2.wav,VillagerMAWhat3.wav,VillagerMAWhat4.wav,VillagerMAWhat5.wav,VillagerMAWhat6.wav',
          DirectoryBase: 'Units\\Critters\\VillagerMan1\\',
          Channel: 1,
          SoundName: 'VillagerMan2What',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvlk',
    name: 'villagerkid',
    sounds: {
      What: [
        {
          FileNames: 'VillagerCWhat1.wav,VillagerCWhat2.wav,VillagerCWhat3.wav,VillagerCWhat4.wav,VillagerCWhat5.wav',
          DirectoryBase: 'Units\\Critters\\VillagerKid\\',
          Channel: 1,
          SoundName: 'VillagerKidWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvlw',
    name: 'villagerwoman',
    sounds: {
      What: [
        {
          FileNames: 'VillagerF1.wav,VillagerF2.wav,VillagerF3.wav',
          DirectoryBase: 'Units\\Critters\\VillagerWoman\\',
          Channel: 1,
          SoundName: 'VillagerWomanWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvul',
    name: 'vulture',
    sounds: {
      What: [
        {
          FileNames: 'VultureWhat1.wav',
          DirectoryBase: 'Units\\Critters\\Vulture\\',
          Channel: 1,
          SoundName: 'VultureWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb0',
    name: 'citybuildingSmall 0',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb1',
    name: 'citybuildingSmall 1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb2',
    name: 'citybuildingSmall 2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb3',
    name: 'citybuildingSmall 3',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb4',
    name: 'citybuildingSmall 4',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb5',
    name: 'citybuildingSmall 5',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb6',
    name: 'citybuildingSmall 6',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb7',
    name: 'citybuildingSmall 7',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb8',
    name: 'citybuildingSmall 8',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncb9',
    name: 'citybuildingSmall 9',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncba',
    name: 'citybuildingSmall a',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncbb',
    name: 'citybuildingSmall b',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncbc',
    name: 'CityBuildingLarge 0',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncbd',
    name: 'CityBuildingLarge 1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncbe',
    name: 'CityBuildingLarge 2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncbf',
    name: 'CityBuildingLarge 3',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncnt',
    name: 'centaurtent',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncop',
    name: 'circleofpower',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncp2',
    name: 'circleofpowermedium',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncp3',
    name: 'circleofpowerlarge',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nct1',
    name: 'centaurtent1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nct2',
    name: 'centaurtent2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndch',
    name: 'chieftainhut',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndh0',
    name: 'draneihut0',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiHutWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DraeneiHut0\\',
          Channel: 1,
          SoundName: 'DraeneiHutWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndh1',
    name: 'draneihut1',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiHutWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DraeneiHut0\\',
          Channel: 1,
          SoundName: 'DraeneiHutWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndh2',
    name: 'draeneihaven',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiChieftainHutWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ChieftainHut\\',
          Channel: 1,
          SoundName: 'DraeneiChieftainHutWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndh3',
    name: 'draeneiwarriorshall',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiHutWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DraeneiHut0\\',
          Channel: 1,
          SoundName: 'DraeneiHutWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndh4',
    name: 'draeneiseerden',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiHutWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DraeneiHut0\\',
          Channel: 1,
          SoundName: 'DraeneiHutWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndrg',
    name: 'greendragonroost',
    sounds: {
      What: [
        {
          FileNames: 'DragonRoostWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DragonRoost\\',
          Channel: 1,
          SoundName: 'DragonRoostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndrk',
    name: 'blackdragonroost',
    sounds: {
      What: [
        {
          FileNames: 'DragonRoostWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DragonRoost\\',
          Channel: 1,
          SoundName: 'DragonRoostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndro',
    name: 'outlanddragonroost',
    sounds: {
      What: [
        {
          FileNames: 'DragonRoostWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DragonRoost\\',
          Channel: 1,
          SoundName: 'DragonRoostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndrr',
    name: 'reddragonroost',
    sounds: {
      What: [
        {
          FileNames: 'DragonRoostWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DragonRoost\\',
          Channel: 1,
          SoundName: 'DragonRoostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndru',
    name: 'bluedragonroost',
    sounds: {
      What: [
        {
          FileNames: 'DragonRoostWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DragonRoost\\',
          Channel: 1,
          SoundName: 'DragonRoostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndrz',
    name: 'bronzedragonroost',
    sounds: {
      What: [
        {
          FileNames: 'DragonRoostWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DragonRoost\\',
          Channel: 1,
          SoundName: 'DragonRoostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfh0',
    name: 'foresttrollhut0',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfh1',
    name: 'foresttrollhut1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfoh',
    name: 'fountainofhealth',
    sounds: {
      What: [
        {
          FileNames: 'FountainOfLifeWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\FountainOfLife\\',
          Channel: 1,
          SoundName: 'FountainOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfr1',
    name: 'furbolghut1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfr2',
    name: 'furbolghut2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngad',
    name: 'goblinammodump',
    sounds: {
      What: [
        {
          FileNames: 'AmmoDumpWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\AmmoDump\\',
          Channel: 1,
          SoundName: 'AmmoDumpWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngme',
    name: 'goblinmerchant',
    sounds: {
      What: [
        {
          FileNames: 'GoblinMerchantWhat1.wav,GoblinMerchantWhat2.wav,GoblinMerchantWhat3.wav',
          DirectoryBase: 'Sound\\Buildings\\Other\\Merchant\\',
          Channel: 1,
          SoundName: 'MerchantWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngnh',
    name: 'gnollhut',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngni',
    name: 'granaryinfected',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngol',
    name: 'goldmine',
    sounds: {
      What: [
        {
          FileNames: 'GoldMineWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\GoldMine\\',
          Channel: 1,
          SoundName: 'GoldMineWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngt2',
    name: 'gnollhut2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngwr',
    name: 'grainwarehouse',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nhns',
    name: 'harpynest',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmer',
    name: 'mercenarycampl',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmg0',
    name: 'murgulhut0',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmg1',
    name: 'murgulhut1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmh0',
    name: 'murlochut0',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmh1',
    name: 'murlochut1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmoo',
    name: 'fountainofmana',
    sounds: {
      What: [
        {
          FileNames: 'FountainOfLifeWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\FountainOfLife\\',
          Channel: 1,
          SoundName: 'FountainOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr0',
    name: 'mercenarycampv',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr2',
    name: 'mercenarycampf',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr3',
    name: 'mercenarycampw',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr4',
    name: 'mercenarycampb',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr5',
    name: 'mercenarycampa',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr6',
    name: 'mercenarycampc',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr7',
    name: 'mercenarycampn',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr8',
    name: 'mercenarycampy',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmr9',
    name: 'mercenarycampx',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmra',
    name: 'mercenarycampd',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmrb',
    name: 'mercenarycampg',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmrc',
    name: 'mercenarycampz',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmrd',
    name: 'mercenarycampi',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmre',
    name: 'mercenarycampo',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmrf',
    name: 'mercenarycampk',
    sounds: {
      What: [
        {
          FileNames: 'MercenaryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Mercenary\\',
          Channel: 1,
          SoundName: 'MercenaryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmrk',
    name: 'marketplace',
    sounds: {
      What: [
        {
          FileNames: 'Marketplace.wav',
          DirectoryBase: 'Buildings\\Other\\Marketplace\\',
          Channel: 1,
          SoundName: 'MarketplaceWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nnzg',
    name: 'nerubianziggurat',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nshp',
    name: 'goblinshipyard',
    sounds: {
      What: [
        {
          FileNames: 'GoblinShipyardWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\GoblinShipyard\\',
          Channel: 1,
          SoundName: 'GoblinShipyardWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ntav',
    name: 'cantina',
    sounds: {
      What: [
        {
          FileNames: 'Cantina.wav',
          DirectoryBase: 'Buildings\\Other\\Tavern\\',
          Channel: 1,
          SoundName: 'CantinaWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nten',
    name: 'tent',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nth0',
    name: 'icetrollhut0',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nth1',
    name: 'icetrollhut1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ntn2',
    name: 'tent2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ntnt',
    name: 'taurentent',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ntt2',
    name: 'taurentent2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwgt',
    name: 'waygate',
    sounds: {
      What: [
        {
          FileNames: 'WayGateWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\Waygate\\',
          Channel: 1,
          SoundName: 'WaygateWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'Ecen',
    name: 'cenarius',
    sounds: {
      What: [
        {
          FileNames: 'KeeperOfTheGroveWhat1.wav,KeeperOfTheGroveWhat2.wav,KeeperOfTheGroveWhat3.wav,KeeperOfTheGroveWhat4.wav,KeeperOfTheGroveWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGroveWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KeeperOfTheGrovePissed1.wav,KeeperOfTheGrovePissed2.wav,KeeperOfTheGrovePissed3.wav,KeeperOfTheGrovePissed4.wav,KeeperOfTheGrovePissed5.wav,KeeperOfTheGrovePissed6.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGrovePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KeeperOfTheGroveYesAttack1.wav,KeeperOfTheGroveYesAttack2.wav,KeeperOfTheGroveYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 2,
          SoundName: 'HeroKeeperOfTheGroveYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KeeperOfTheGroveYes1.wav,KeeperOfTheGroveYes2.wav,KeeperOfTheGroveYes3.wav,KeeperOfTheGroveYes4.wav,KeeperOfTheGroveYes5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 3,
          SoundName: 'HeroKeeperOfTheGroveYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KeeperOfTheGroveReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 4,
          SoundName: 'HeroKeeperOfTheGroveReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'KeeperOfTheGroveWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGroveWarcry',
        },
      ],
    },
  },
  {
    id: 'Eevi',
    name: 'evilillidan',
    sounds: {
      What: [
        {
          FileNames: 'IllidanWhat1.wav,IllidanWhat2.wav,IllidanWhat3.wav,IllidanWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'EvilIllidanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IllidanPissed1.wav,IllidanPissed2.wav,IllidanPissed3.wav,IllidanPissed4.wav,IllidanPissed5.wav,IllidanPissed6.wav,IllidanPissed7.wav,IllidanPissed8.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'EvilIllidanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IllidanYesAttack1.wav,IllidanYesAttack2.wav,IllidanYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 2,
          SoundName: 'EvilIllidanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IllidanYes1.wav,IllidanYes2.wav,IllidanYes3.wav,IllidanYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 3,
          SoundName: 'EvilIllidanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IllidanYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 4,
          SoundName: 'EvilIllidanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IllidanWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'EvilIllidanWarcry',
        },
      ],
    },
  },
  {
    id: 'Eevm',
    name: 'evilillidandemonform',
    sounds: {
      What: [
        {
          FileNames: 'IllidanMorphedWhat1.wav,IllidanMorphedWhat2.wav,IllidanMorphedWhat3.wav,IllidanMorphedWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'EvilIllidanMorphedWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IllidanMorphedPissed1.wav,IllidanMorphedPissed2.wav,IllidanMorphedPissed3.wav,IllidanMorphedPissed4.wav,IllidanMorphedPissed5.wav,IllidanMorphedPissed6.wav,IllidanMorphedPissed7.wav,IllidanMorphedPissed8.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'EvilIllidanMorphedPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IllidanMorphedYesAttack1.wav,IllidanMorphedYesAttack2.wav,IllidanMorphedYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 2,
          SoundName: 'EvilIllidanMorphedYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IllidanMorphedYes1.wav,IllidanMorphedYes2.wav,IllidanMorphedYes3.wav,IllidanMorphedYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 3,
          SoundName: 'EvilIllidanMorphedYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IllidanMorphedYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 4,
          SoundName: 'EvilIllidanMorphedReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IllidanMorphedWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'EvilIllidanMorphedWarcry',
        },
      ],
    },
  },
  {
    id: 'Efur',
    name: 'furion',
    sounds: {
      What: [
        {
          FileNames: 'FurionWhat1.wav,FurionWhat2.wav,FurionWhat3.wav,FurionWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 1,
          SoundName: 'FurionWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurionPissed1.wav,FurionPissed2.wav,FurionPissed3.wav,FurionPissed4.wav,FurionPissed5.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 1,
          SoundName: 'FurionPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurionYesAttack1.wav,FurionYesAttack2.wav,FurionYesAttack3.wav,FurionYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 2,
          SoundName: 'FurionYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurionYes1.wav,FurionYes2.wav,FurionYes3.wav,FurionYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 3,
          SoundName: 'FurionYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'FurionWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 1,
          SoundName: 'FurionWarcry',
        },
      ],
    },
  },
  {
    id: 'Eidm',
    name: 'illidandemonform',
    sounds: {
      What: [
        {
          FileNames: 'IllidanMorphedWhat1.wav,IllidanMorphedWhat2.wav,IllidanMorphedWhat3.wav,IllidanMorphedWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanMorphedWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IllidanMorphedPissed1.wav,IllidanMorphedPissed2.wav,IllidanMorphedPissed3.wav,IllidanMorphedPissed4.wav,IllidanMorphedPissed5.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanMorphedPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IllidanMorphedYesAttack1.wav,IllidanMorphedYesAttack2.wav,IllidanMorphedYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 2,
          SoundName: 'IllidanMorphedYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IllidanMorphedYes1.wav,IllidanMorphedYes2.wav,IllidanMorphedYes3.wav,IllidanMorphedYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 3,
          SoundName: 'IllidanMorphedYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IllidanMorphedYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 4,
          SoundName: 'IllidanMorphedReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IllidanMorphedWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanMorphedWarcry',
        },
      ],
    },
  },
  {
    id: 'Eill',
    name: 'illidan',
    sounds: {
      What: [
        {
          FileNames: 'IllidanWhat1.wav,IllidanWhat2.wav,IllidanWhat3.wav,IllidanWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IllidanPissed1.wav,IllidanPissed2.wav,IllidanPissed3.wav,IllidanPissed4.wav,IllidanPissed5.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IllidanYesAttack1.wav,IllidanYesAttack2.wav,IllidanYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 2,
          SoundName: 'IllidanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IllidanYes1.wav,IllidanYes2.wav,IllidanYes3.wav,IllidanYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 3,
          SoundName: 'IllidanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IllidanYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 4,
          SoundName: 'IllidanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IllidanWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanWarcry',
        },
      ],
    },
  },
  {
    id: 'Eilm',
    name: 'illidanmorphed',
    sounds: {
      What: [
        {
          FileNames: 'IllidanMorphedWhat1.wav,IllidanMorphedWhat2.wav,IllidanMorphedWhat3.wav,IllidanMorphedWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanMorphedWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IllidanMorphedPissed1.wav,IllidanMorphedPissed2.wav,IllidanMorphedPissed3.wav,IllidanMorphedPissed4.wav,IllidanMorphedPissed5.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanMorphedPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IllidanMorphedYesAttack1.wav,IllidanMorphedYesAttack2.wav,IllidanMorphedYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 2,
          SoundName: 'IllidanMorphedYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IllidanMorphedYes1.wav,IllidanMorphedYes2.wav,IllidanMorphedYes3.wav,IllidanMorphedYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 3,
          SoundName: 'IllidanMorphedYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IllidanMorphedYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 4,
          SoundName: 'IllidanMorphedReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'IllidanMorphedWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Illidan\\',
          Channel: 1,
          SoundName: 'IllidanMorphedWarcry',
        },
      ],
    },
  },
  {
    id: 'Ekgg',
    name: 'keeperofthegroveghost',
    sounds: {
      What: [
        {
          FileNames: 'KeeperOfTheGroveWhat1.wav,KeeperOfTheGroveWhat2.wav,KeeperOfTheGroveWhat3.wav,KeeperOfTheGroveWhat4.wav,KeeperOfTheGroveWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGroveWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KeeperOfTheGrovePissed1.wav,KeeperOfTheGrovePissed2.wav,KeeperOfTheGrovePissed3.wav,KeeperOfTheGrovePissed4.wav,KeeperOfTheGrovePissed5.wav,KeeperOfTheGrovePissed6.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGrovePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KeeperOfTheGroveYesAttack1.wav,KeeperOfTheGroveYesAttack2.wav,KeeperOfTheGroveYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 2,
          SoundName: 'HeroKeeperOfTheGroveYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KeeperOfTheGroveYes1.wav,KeeperOfTheGroveYes2.wav,KeeperOfTheGroveYes3.wav,KeeperOfTheGroveYes4.wav,KeeperOfTheGroveYes5.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 3,
          SoundName: 'HeroKeeperOfTheGroveYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KeeperOfTheGroveReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 4,
          SoundName: 'HeroKeeperOfTheGroveReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'KeeperOfTheGroveWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\HeroKeeperOfTheGrove\\',
          Channel: 1,
          SoundName: 'HeroKeeperOfTheGroveWarcry',
        },
      ],
    },
  },
  {
    id: 'Emfr',
    name: 'malfurion',
    sounds: {
      What: [
        {
          FileNames: 'MalfurionWhat1.wav,MalfurionWhat2.wav,MalfurionWhat3.wav,MalfurionWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\MalFurion\\',
          Channel: 1,
          SoundName: 'MalFurionWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MalfurionPissed1.wav,MalfurionPissed2.wav,MalfurionPissed3.wav,MalfurionPissed4.wav,MalfurionPissed5.wav',
          DirectoryBase: 'Units\\NightElf\\MalFurion\\',
          Channel: 1,
          SoundName: 'MalFurionPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MalfurionYesAttack1.wav,MalfurionYesAttack2.wav,MalfurionYesAttack3.wav,MalfurionYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\MalFurion\\',
          Channel: 2,
          SoundName: 'MalFurionYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MalfurionYes1.wav,MalfurionYes2.wav,MalfurionYes3.wav,MalfurionYes4.wav',
          DirectoryBase: 'Units\\NightElf\\MalFurion\\',
          Channel: 3,
          SoundName: 'MalFurionYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'MalfurionWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\MalFurion\\',
          Channel: 1,
          SoundName: 'MalFurionWarcry',
        },
      ],
    },
  },
  {
    id: 'Emns',
    name: 'malfurionnostag',
    sounds: {
      What: [
        {
          FileNames: 'FurionWhat1.wav,FurionWhat2.wav,FurionWhat3.wav,FurionWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 1,
          SoundName: 'FurionWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FurionPissed1.wav,FurionPissed2.wav,FurionPissed3.wav,FurionPissed4.wav,FurionPissed5.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 1,
          SoundName: 'FurionPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FurionYesAttack1.wav,FurionYesAttack2.wav,FurionYesAttack3.wav,FurionYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 2,
          SoundName: 'FurionYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FurionYes1.wav,FurionYes2.wav,FurionYes3.wav,FurionYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 3,
          SoundName: 'FurionYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'FurionWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Furion\\',
          Channel: 1,
          SoundName: 'FurionWarcry',
        },
      ],
    },
  },
  {
    id: 'Etyr',
    name: 'tyrande',
    sounds: {
      What: [
        {
          FileNames: 'TyrandeWhat1.wav,TyrandeWhat2.wav,TyrandeWhat3.wav,TyrandeWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Tyrande\\',
          Channel: 1,
          SoundName: 'TyrandeWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'TyrandePissed1.wav,TyrandePissed2.wav,TyrandePissed3.wav,TyrandePissed4.wav,TyrandePissed5.wav',
          DirectoryBase: 'Units\\NightElf\\Tyrande\\',
          Channel: 1,
          SoundName: 'TyrandePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'TyrandeYesAttack1.wav,TyrandeYesAttack2.wav,TyrandeYesAttack3.wav,TyrandeYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\Tyrande\\',
          Channel: 2,
          SoundName: 'TyrandeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TyrandeYes1.wav,TyrandeYes2.wav,TyrandeYes3.wav,TyrandeYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Tyrande\\',
          Channel: 3,
          SoundName: 'TyrandeYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'TyrandeWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Tyrande\\',
          Channel: 1,
          SoundName: 'TyrandeWarcry',
        },
      ],
    },
  },
  {
    id: 'Ewrd',
    name: 'maiev',
    sounds: {
      What: [
        {
          FileNames: 'MaievWhat1.wav,MaievWhat2.wav,MaievWhat3.wav,MaievWhat4.wav,MaievWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\Maiev\\',
          Channel: 1,
          SoundName: 'MaievWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MaievPissed1.wav,MaievPissed2.wav,MaievPissed3.wav,MaievPissed4.wav,MaievPissed5.wav',
          DirectoryBase: 'Units\\NightElf\\Maiev\\',
          Channel: 1,
          SoundName: 'MaievPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MaievYesAttack1.wav,MaievYesAttack2.wav,MaievYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Maiev\\',
          Channel: 2,
          SoundName: 'MaievYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MaievYes1.wav,MaievYes2.wav,MaievYes3.wav,MaievYes4.wav,MaievYes5.wav',
          DirectoryBase: 'Units\\NightElf\\Maiev\\',
          Channel: 3,
          SoundName: 'MaievYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MaievReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Maiev\\',
          Channel: 4,
          SoundName: 'MaievReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'MaievWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Maiev\\',
          Channel: 1,
          SoundName: 'MaievWarcry',
        },
      ],
    },
  },
  {
    id: 'Hant',
    name: 'antonidus',
    sounds: {
      What: [
        {
          FileNames: 'HeroArchMageWhat1.wav,HeroArchMageWhat2.wav,HeroArchMageWhat3.wav,HeroArchMageWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroArchMagePissed1.wav,HeroArchMagePissed2.wav,HeroArchMagePissed3.wav,HeroArchMagePissed4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMagePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroArchMageYesAttack1.wav,HeroArchMageYesAttack2.wav,HeroArchMageYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 2,
          SoundName: 'HeroArchMageYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroArchMageYes1.wav,HeroArchMageYes2.wav,HeroArchMageYes3.wav,HeroArchMageYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 3,
          SoundName: 'HeroArchMageYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroArchMageReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 4,
          SoundName: 'HeroArchMageReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroArchMageWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWarcry',
        },
      ],
    },
  },
  {
    id: 'Hapm',
    name: 'admiralproudmoore',
    sounds: {
      What: [
        {
          FileNames: 'HeroPaladinWhat1.wav,HeroPaladinWhat3.wav,HeroPaladinWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'ProudmooreWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroPaladinPissed3.wav,HeroPaladinPissed4.wav,HeroPaladinPissed5.wav,HeroPaladinPissed6.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'ProudmoorePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroPaladinYesAttack1.wav,HeroPaladinYesAttack2.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 2,
          SoundName: 'ProudmooreYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroPaladinYes1.wav,HeroPaladinYes2.wav,HeroPaladinYes3.wav,HeroPaladinYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 3,
          SoundName: 'ProudmooreYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroPaladinWhat2.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 4,
          SoundName: 'ProudmooreReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroPaladinYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'ProudmooreWarcry',
        },
      ],
    },
  },
  {
    id: 'Harf',
    name: 'arthaswithfrostmourne',
    sounds: {
      What: [
        {
          FileNames: 'ArthasWhat1.wav,ArthasWhat2.wav,ArthasWhat3.wav,ArthasWhat4.wav,ArthasWhat5.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 1,
          SoundName: 'ArthasWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ArthasPissed1.wav,ArthasPissed2.wav,ArthasPissed3.wav,ArthasPissed4.wav,ArthasPissed5.wav,ArthasPissed6.wav,ArthasPissed7.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 1,
          SoundName: 'ArthasPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ArthasYesAttack1.wav,ArthasYesAttack2.wav,ArthasYesAttack3.wav,ArthasYesAttack4.wav,ArthasYesAttack5.wav,ArthasYesAttack6.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 2,
          SoundName: 'ArthasYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArthasYes1.wav,ArthasYes2.wav,ArthasYes3.wav,ArthasYes4.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 3,
          SoundName: 'ArthasYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'ArthasWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 1,
          SoundName: 'ArthasWarcry',
        },
      ],
    },
  },
  {
    id: 'Hart',
    name: 'arthas',
    sounds: {
      What: [
        {
          FileNames: 'ArthasWhat1.wav,ArthasWhat2.wav,ArthasWhat3.wav,ArthasWhat4.wav,ArthasWhat5.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 1,
          SoundName: 'ArthasWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ArthasPissed1.wav,ArthasPissed2.wav,ArthasPissed3.wav,ArthasPissed4.wav,ArthasPissed5.wav,ArthasPissed6.wav,ArthasPissed7.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 1,
          SoundName: 'ArthasPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ArthasYesAttack1.wav,ArthasYesAttack2.wav,ArthasYesAttack3.wav,ArthasYesAttack4.wav,ArthasYesAttack5.wav,ArthasYesAttack6.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 2,
          SoundName: 'ArthasYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArthasYes1.wav,ArthasYes2.wav,ArthasYes3.wav,ArthasYes4.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 3,
          SoundName: 'ArthasYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'ArthasWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Arthas\\',
          Channel: 1,
          SoundName: 'ArthasWarcry',
        },
      ],
    },
  },
  {
    id: 'Hdgo',
    name: 'dagren',
    sounds: {
      What: [
        {
          FileNames: 'HeroPaladinWhat1.wav,HeroPaladinWhat2.wav,HeroPaladinWhat3.wav,HeroPaladinWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroPaladinPissed1.wav,HeroPaladinPissed2.wav,HeroPaladinPissed3.wav,HeroPaladinPissed4.wav,HeroPaladinPissed5.wav,HeroPaladinPissed6.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroPaladinYesAttack1.wav,HeroPaladinYesAttack2.wav,HeroPaladinYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 2,
          SoundName: 'HeroPaladinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroPaladinYes1.wav,HeroPaladinYes2.wav,HeroPaladinYes3.wav,HeroPaladinYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 3,
          SoundName: 'HeroPaladinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroPaladinReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 4,
          SoundName: 'HeroPaladinReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroPaladinWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWarcry',
        },
      ],
    },
  },
  {
    id: 'Hhkl',
    name: 'halahk',
    sounds: {
      What: [
        {
          FileNames: 'HeroPaladinWhat1.wav,HeroPaladinWhat2.wav,HeroPaladinWhat3.wav,HeroPaladinWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroPaladinPissed1.wav,HeroPaladinPissed2.wav,HeroPaladinPissed3.wav,HeroPaladinPissed4.wav,HeroPaladinPissed5.wav,HeroPaladinPissed6.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroPaladinYesAttack1.wav,HeroPaladinYesAttack2.wav,HeroPaladinYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 2,
          SoundName: 'HeroPaladinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroPaladinYes1.wav,HeroPaladinYes2.wav,HeroPaladinYes3.wav,HeroPaladinYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 3,
          SoundName: 'HeroPaladinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroPaladinReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 4,
          SoundName: 'HeroPaladinReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroPaladinWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWarcry',
        },
      ],
    },
  },
  {
    id: 'Hjai',
    name: 'jaina',
    sounds: {
      What: [
        {
          FileNames: 'JainaWhat1.wav,JainaWhat2.wav,JainaWhat3.wav,JainaWhat4.wav',
          DirectoryBase: 'Units\\Human\\Jaina\\',
          Channel: 1,
          SoundName: 'JainaWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'JainaPissed1.wav,JainaPissed2.wav,JainaPissed3.wav,JainaPissed4.wav,JainaPissed5.wav',
          DirectoryBase: 'Units\\Human\\Jaina\\',
          Channel: 1,
          SoundName: 'JainaPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'JainaYesAttack1.wav,JainaYesAttack2.wav',
          DirectoryBase: 'Units\\Human\\Jaina\\',
          Channel: 2,
          SoundName: 'JainaYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'JainaYes1.wav,JainaYes2.wav,JainaYes3.wav,JainaYes4.wav',
          DirectoryBase: 'Units\\Human\\Jaina\\',
          Channel: 3,
          SoundName: 'JainaYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'JainaWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Jaina\\',
          Channel: 1,
          SoundName: 'JainaWarcry',
        },
      ],
    },
  },
  {
    id: 'Hkal',
    name: 'kael',
    sounds: {
      What: [
        {
          FileNames: 'KaelWhat1.wav,KaelWhat2.wav,KaelWhat3.wav,KaelWhat4.wav,KaelWhat5.wav',
          DirectoryBase: 'Units\\Human\\Kael\\',
          Channel: 1,
          SoundName: 'KaelWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KaelPissed1.wav,KaelPissed2.wav,KaelPissed3.wav,KaelPissed4.wav',
          DirectoryBase: 'Units\\Human\\Kael\\',
          Channel: 1,
          SoundName: 'KaelPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KaelYesAttack1.wav,KaelYesAttack2.wav,KaelYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\Kael\\',
          Channel: 2,
          SoundName: 'KaelYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KaelYes1.wav,KaelYes2.wav,KaelYes3.wav,KaelYes4.wav,KaelYes5.wav',
          DirectoryBase: 'Units\\Human\\Kael\\',
          Channel: 3,
          SoundName: 'KaelYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KaelReady1.wav',
          DirectoryBase: 'Units\\Human\\Kael\\',
          Channel: 4,
          SoundName: 'KaelReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'KaelWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Kael\\',
          Channel: 1,
          SoundName: 'KaelWarcry',
        },
      ],
    },
  },
  {
    id: 'Hlgr',
    name: 'lordgarithos',
    sounds: {
      What: [
        {
          FileNames: 'GarithosWhat1.wav,GarithosWhat2.wav,GarithosWhat3.wav,GarithosWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\LordGarithos\\',
          Channel: 1,
          SoundName: 'GarithosWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GarithosPissed1.wav,GarithosPissed2.wav,GarithosPissed3.wav,GarithosPissed4.wav,GarithosPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\LordGarithos\\',
          Channel: 1,
          SoundName: 'GarithosPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GarithosYesAttack1.wav,GarithosYesAttack2.wav,GarithosYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\LordGarithos\\',
          Channel: 2,
          SoundName: 'GarithosYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GarithosYes1.wav,GarithosYes2.wav,GarithosYes3.wav,GarithosYes4.wav,GarithosYes5.wav',
          DirectoryBase: 'Units\\Creeps\\LordGarithos\\',
          Channel: 3,
          SoundName: 'GarithosYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GarithosReady1.wav',
          DirectoryBase: 'Units\\Creeps\\LordGarithos\\',
          Channel: 4,
          SoundName: 'GarithosReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GarithosWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\LordGarithos\\',
          Channel: 1,
          SoundName: 'GarithosWarcry',
        },
      ],
    },
  },
  {
    id: 'Hmbr',
    name: 'muradinbronzebeard',
    sounds: {
      What: [
        {
          FileNames: 'MuradinWhat1.wav,MuradinWhat2.wav,MuradinWhat3.wav,MuradinWhat4.wav',
          DirectoryBase: 'Units\\Human\\Muradin\\',
          Channel: 1,
          SoundName: 'MuradinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MuradinPissed1.wav,MuradinPissed2.wav,MuradinPissed3.wav,MuradinPissed4.wav,MuradinPissed5.wav,MuradinPissed6.wav,MuradinPissed7.wav,MuradinPissed8.wav',
          DirectoryBase: 'Units\\Human\\Muradin\\',
          Channel: 1,
          SoundName: 'MuradinPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MuradinYesAttack1.wav,MuradinYesAttack2.wav,MuradinYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\Muradin\\',
          Channel: 2,
          SoundName: 'MuradinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MuradinYes1.wav,MuradinYes2.wav,MuradinYes3.wav,MuradinYes4.wav',
          DirectoryBase: 'Units\\Human\\Muradin\\',
          Channel: 3,
          SoundName: 'MuradinYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'MuradinWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Muradin\\',
          Channel: 1,
          SoundName: 'MuradinWarcry',
        },
      ],
    },
  },
  {
    id: 'Hmgd',
    name: 'margoth',
    sounds: {
      What: [
        {
          FileNames: 'HeroPaladinWhat1.wav,HeroPaladinWhat2.wav,HeroPaladinWhat3.wav,HeroPaladinWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroPaladinPissed1.wav,HeroPaladinPissed2.wav,HeroPaladinPissed3.wav,HeroPaladinPissed4.wav,HeroPaladinPissed5.wav,HeroPaladinPissed6.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroPaladinYesAttack1.wav,HeroPaladinYesAttack2.wav,HeroPaladinYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 2,
          SoundName: 'HeroPaladinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroPaladinYes1.wav,HeroPaladinYes2.wav,HeroPaladinYes3.wav,HeroPaladinYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 3,
          SoundName: 'HeroPaladinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroPaladinReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 4,
          SoundName: 'HeroPaladinReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroPaladinWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWarcry',
        },
      ],
    },
  },
  {
    id: 'Hpb1',
    name: 'paladinboss1',
    sounds: {
      What: [
        {
          FileNames: 'HeroPaladinWhat1.wav,HeroPaladinWhat2.wav,HeroPaladinWhat3.wav,HeroPaladinWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroPaladinPissed1.wav,HeroPaladinPissed2.wav,HeroPaladinPissed3.wav,HeroPaladinPissed4.wav,HeroPaladinPissed5.wav,HeroPaladinPissed6.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroPaladinYesAttack1.wav,HeroPaladinYesAttack2.wav,HeroPaladinYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 2,
          SoundName: 'HeroPaladinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroPaladinYes1.wav,HeroPaladinYes2.wav,HeroPaladinYes3.wav,HeroPaladinYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 3,
          SoundName: 'HeroPaladinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroPaladinReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 4,
          SoundName: 'HeroPaladinReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroPaladinWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWarcry',
        },
      ],
    },
  },
  {
    id: 'Hpb2',
    name: 'paladinboss2',
    sounds: {
      What: [
        {
          FileNames: 'HeroPaladinWhat1.wav,HeroPaladinWhat2.wav,HeroPaladinWhat3.wav,HeroPaladinWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroPaladinPissed1.wav,HeroPaladinPissed2.wav,HeroPaladinPissed3.wav,HeroPaladinPissed4.wav,HeroPaladinPissed5.wav,HeroPaladinPissed6.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroPaladinYesAttack1.wav,HeroPaladinYesAttack2.wav,HeroPaladinYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 2,
          SoundName: 'HeroPaladinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroPaladinYes1.wav,HeroPaladinYes2.wav,HeroPaladinYes3.wav,HeroPaladinYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 3,
          SoundName: 'HeroPaladinYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroPaladinReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 4,
          SoundName: 'HeroPaladinReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroPaladinWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroPaladin\\',
          Channel: 1,
          SoundName: 'HeroPaladinWarcry',
        },
      ],
    },
  },
  {
    id: 'Huth',
    name: 'uther',
    sounds: {
      What: [
        {
          FileNames: 'UtherWhat1.wav,UtherWhat2.wav,UtherWhat3.wav,UtherWhat4.wav',
          DirectoryBase: 'Units\\Human\\Uther\\',
          Channel: 1,
          SoundName: 'UtherWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'UtherPissed1.wav,UtherPissed2.wav,UtherPissed3.wav,UtherPissed4.wav',
          DirectoryBase: 'Units\\Human\\Uther\\',
          Channel: 1,
          SoundName: 'UtherPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'UtherYesAttack1.wav,UtherYesAttack2.wav,UtherYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\Uther\\',
          Channel: 2,
          SoundName: 'UtherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'UtherYes1.wav,UtherYes2.wav,UtherYes3.wav,UtherYes4.wav',
          DirectoryBase: 'Units\\Human\\Uther\\',
          Channel: 3,
          SoundName: 'UtherYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'UtherWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Uther\\',
          Channel: 1,
          SoundName: 'UtherWarcry',
        },
      ],
    },
  },
  {
    id: 'Hvsh',
    name: 'ladyvashj',
    sounds: {
      What: [
        {
          FileNames: 'LadyVashjWhat1.wav,LadyVashjWhat2.wav,LadyVashjWhat3.wav,LadyVashjWhat4.wav,LadyVashjWhat5.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 1,
          SoundName: 'SeaWitchWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'LadyVashjPissed1.wav,LadyVashjPissed2.wav,LadyVashjPissed3.wav,LadyVashjPissed4.wav,LadyVashjPissed5.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 1,
          SoundName: 'SeaWitchPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'LadyVashjYesAttack1.wav,LadyVashjYesAttack2.wav,LadyVashjYesAttack3.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 2,
          SoundName: 'SeaWitchYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'LadyVashjYes1.wav,LadyVashjYes2.wav,LadyVashjYes3.wav,LadyVashjYes4.wav,LadyVashjYes5.wav,LadyVashjYes6.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 3,
          SoundName: 'SeaWitchYes',
        },
      ],
      Ready: [
        {
          FileNames: 'LadyVashjReady1.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 4,
          SoundName: 'SeaWitchReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'LadyVashjWarcry1.wav',
          DirectoryBase: 'Units\\Naga\\LadyVashj\\',
          Channel: 1,
          SoundName: 'SeaWitchWarcry',
        },
      ],
    },
  },
  {
    id: 'Hvwd',
    name: 'sylvanuswindrunner',
    sounds: {
      What: [
        {
          FileNames: 'SylvanasWhat1.wav,SylvanasWhat2.wav,SylvanasWhat3.wav,SylvanasWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\SylvanusWindrunner\\',
          Channel: 1,
          SoundName: 'SylvanusWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SylvanasPissed1.wav,SylvanasPissed2.wav,SylvanasPissed3.wav,SylvanasPissed4.wav,SylvanasPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\SylvanusWindrunner\\',
          Channel: 1,
          SoundName: 'SylvanusPissed',
        },
      ],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [
        {
          FileNames: 'SylvanasWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\SylvanusWindrunner\\',
          Channel: 1,
          SoundName: 'SylvanusWarcry',
        },
      ],
    },
  },
  {
    id: 'Nbbc',
    name: 'blackrockblademaster',
    sounds: {
      What: [
        {
          FileNames: 'HeroBladeMasterWhat1.wav,HeroBladeMasterWhat2.wav,HeroBladeMasterWhat3.wav,HeroBladeMasterWhat4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroBladeMasterPissed1.wav,HeroBladeMasterPissed2.wav,HeroBladeMasterPissed3.wav,HeroBladeMasterPissed4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroBladeMasterYesAttack1.wav,HeroBladeMasterYesAttack2.wav,HeroBladeMasterYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 2,
          SoundName: 'HeroBladeMasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroBladeMasterYes1.wav,HeroBladeMasterYes2.wav,HeroBladeMasterYes3.wav,HeroBladeMasterYes4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 3,
          SoundName: 'HeroBladeMasterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroBladeMasterReady1.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 4,
          SoundName: 'HeroBladeMasterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroBladeMasterWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterWarcry',
        },
      ],
    },
  },
  {
    id: 'Nklj',
    name: 'kiljaeden',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'Nkjx',
    name: 'kiljaedencinematic',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'Nmag',
    name: 'magtheridon',
    sounds: {
      What: [
        {
          FileNames: 'PitLordWhat1.wav,PitLordWhat2.wav,PitLordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 1,
          SoundName: 'PitLordWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'PitLordYesAttack1.wav,PitLordYesAttack2.wav,PitLordYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 2,
          SoundName: 'PitLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PitLordYes1.wav,PitLordYes2.wav,PitLordYes3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 3,
          SoundName: 'PitLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PitLordWhat1.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 4,
          SoundName: 'PitLordReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'Nman',
    name: 'mannoroth',
    sounds: {
      What: [
        {
          FileNames: 'PitLordWhat1.wav,PitLordWhat2.wav,PitLordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 1,
          SoundName: 'PitLordWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'PitLordYesAttack1.wav,PitLordYesAttack2.wav,PitLordYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 2,
          SoundName: 'PitLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PitLordYes1.wav,PitLordYes2.wav,PitLordYes3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 3,
          SoundName: 'PitLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PitLordWhat1.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 4,
          SoundName: 'PitLordReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'Npld',
    name: 'oldpitlord',
    sounds: {
      What: [
        {
          FileNames: 'PitLordWhat1.wav,PitLordWhat2.wav,PitLordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 1,
          SoundName: 'PitLordWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'PitLordYesAttack1.wav,PitLordYesAttack2.wav,PitLordYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 2,
          SoundName: 'PitLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PitLordYes1.wav,PitLordYes2.wav,PitLordYes3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 3,
          SoundName: 'PitLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PitLordWhat1.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 4,
          SoundName: 'PitLordReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'Nsjs',
    name: 'sinjostormstout',
    sounds: {
      What: [
        {
          FileNames: 'PandarenBrewmasterWhat1.wav,PandarenBrewmasterWhat2.wav,PandarenBrewmasterWhat3.wav,PandarenBrewmasterWhat4.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'PandarenBrewmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PandarenBrewmasterPissed1.wav,PandarenBrewmasterPissed2.wav,PandarenBrewmasterPissed3.wav,PandarenBrewmasterPissed4.wav,PandarenBrewmasterPissed5.wav,PandarenBrewmasterPissed6.wav,PandarenBrewmasterPissed7.wav,PandarenBrewmasterPissed8.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'PandarenBrewmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PandarenBrewmasterYesAttack1.wav,PandarenBrewmasterYesAttack2.wav,PandarenBrewmasterYesAttack3.wav,PandarenBrewmasterYesAttack4.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 2,
          SoundName: 'PandarenBrewmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PandarenBrewmasterYes1.wav,PandarenBrewmasterYes2.wav,PandarenBrewmasterYes3.wav,PandarenBrewmasterYes4.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 3,
          SoundName: 'PandarenBrewmasterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PandarenBrewmasterReady1.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 4,
          SoundName: 'PandarenBrewmasterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PandarenBrewmasterWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\PandarenBrewmaster\\',
          Channel: 1,
          SoundName: 'PandarenBrewmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'Ocbh',
    name: 'cairnebloodhoof',
    sounds: {
      What: [
        {
          FileNames: 'CairneWhat1.wav,CairneWhat2.wav,CairneWhat3.wav,CairneWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairneWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CairnePissed1.wav,CairnePissed2.wav,CairnePissed3.wav,CairnePissed4.wav,CairnePissed5.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairnePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CairneYesAttack1.wav,CairneYesAttack2.wav,CairneYesAttack3.wav,CairneYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 2,
          SoundName: 'CairneYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CairneYes1.wav,CairneYes2.wav,CairneYes3.wav,CairneYes4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 3,
          SoundName: 'CairneYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'CairneWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairneWarcry',
        },
      ],
    },
  },
  {
    id: 'Ocb2',
    name: 'cairnebloodhoofexp',
    sounds: {
      What: [
        {
          FileNames: 'CairneWhat1.wav,CairneWhat2.wav,CairneWhat3.wav,CairneWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairneWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CairnePissed1.wav,CairnePissed2.wav,CairnePissed3.wav,CairnePissed4.wav,CairnePissed5.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairnePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CairneYesAttack1.wav,CairneYesAttack2.wav,CairneYesAttack3.wav,CairneYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 2,
          SoundName: 'CairneYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CairneYes1.wav,CairneYes2.wav,CairneYes3.wav,CairneYes4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 3,
          SoundName: 'CairneYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'CairneWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairneWarcry',
        },
      ],
    },
  },
  {
    id: 'Odrt',
    name: 'drekthar',
    sounds: {
      What: [
        {
          FileNames: 'DrekTharWhat1.wav,DrekTharWhat2.wav,DrekTharWhat3.wav',
          DirectoryBase: 'Units\\Other\\DrekThar\\',
          Channel: 1,
          SoundName: 'DrekTharWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DrekTharPissed1.wav,DrekTharPissed2.wav,DrekTharPissed3.wav',
          DirectoryBase: 'Units\\Other\\DrekThar\\',
          Channel: 1,
          SoundName: 'DrekTharPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DrekTharYesAttack1.wav,DrekTharYesAttack2.wav',
          DirectoryBase: 'Units\\Other\\DrekThar\\',
          Channel: 2,
          SoundName: 'DrekTharYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DrekTharYes1.wav,DrekTharYes2.wav,DrekTharYes3.wav',
          DirectoryBase: 'Units\\Other\\DrekThar\\',
          Channel: 3,
          SoundName: 'DrekTharYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DrekTharReady1.wav',
          DirectoryBase: 'Units\\Other\\DrekThar\\',
          Channel: 4,
          SoundName: 'DrekTharReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DrekTharWarcry1.wav',
          DirectoryBase: 'Units\\Other\\DrekThar\\',
          Channel: 1,
          SoundName: 'DrekTharWarcry',
        },
      ],
    },
  },
  {
    id: 'Ogld',
    name: 'guldan',
    sounds: {
      What: [
        {
          FileNames: 'PitLordWhat1.wav,PitLordWhat2.wav,PitLordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 1,
          SoundName: 'PitLordWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'PitLordYesAttack1.wav,PitLordYesAttack2.wav,PitLordYesAttack3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 2,
          SoundName: 'PitLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PitLordYes1.wav,PitLordYes2.wav,PitLordYes3.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 3,
          SoundName: 'PitLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PitLordWhat1.wav',
          DirectoryBase: 'Units\\Demon\\Pitlord\\',
          Channel: 4,
          SoundName: 'PitLordReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'Ogrh',
    name: 'gromhellscream',
    sounds: {
      What: [
        {
          FileNames: 'GromWhat1.wav,GromWhat2.wav,GromWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 1,
          SoundName: 'GromWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GromPissed1.wav,GromPissed2.wav,GromPissed3.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 1,
          SoundName: 'GromPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GromYesAttack1.wav,GromYesAttack2.wav,GromYesAttack3.wav,GromYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 2,
          SoundName: 'GromYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GromYes1.wav,GromYes2.wav,GromYes3.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 3,
          SoundName: 'GromYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'GromWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 1,
          SoundName: 'GromWarcry',
        },
      ],
    },
  },
  {
    id: 'Opgh',
    name: 'possessedgromhellscream',
    sounds: {
      What: [
        {
          FileNames: 'GromWhat1.wav,GromWhat2.wav,GromWhat3.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 1,
          SoundName: 'GromWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GromPissed1.wav,GromPissed2.wav,GromPissed3.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 1,
          SoundName: 'GromPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GromYesAttack1.wav,GromYesAttack2.wav,GromYesAttack3.wav,GromYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 2,
          SoundName: 'GromYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GromYes1.wav,GromYes2.wav,GromYes3.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 3,
          SoundName: 'GromYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'GromWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Hellscream\\',
          Channel: 1,
          SoundName: 'GromWarcry',
        },
      ],
    },
  },
  {
    id: 'Orex',
    name: 'rexxar',
    sounds: {
      What: [
        {
          FileNames: 'OgreBeastMasterWhat1.wav,OgreBeastMasterWhat2.wav,OgreBeastMasterWhat3.wav,OgreBeastMasterWhat4.wav,OgreBeastMasterWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 1,
          SoundName: 'BeastmasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'OgreBeastMasterPissed1.wav,OgreBeastMasterPissed2.wav,OgreBeastMasterPissed3.wav,OgreBeastMasterPissed4.wav,OgreBeastMasterPissed5.wav,OgreBeastMasterPissed6.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 1,
          SoundName: 'BeastmasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'OgreBeastMasterYesAttack1.wav,OgreBeastMasterYesAttack2.wav,OgreBeastMasterYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 2,
          SoundName: 'BeastmasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'OgreBeastMasterYes1.wav,OgreBeastMasterYes2.wav,OgreBeastMasterYes3.wav,OgreBeastMasterYes4.wav,OgreBeastMasterYes5.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 3,
          SoundName: 'BeastmasterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'OgreBeastMasterReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 4,
          SoundName: 'BeastmasterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'OgreBeastMasterWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Beastmaster\\',
          Channel: 1,
          SoundName: 'BeastmasterWarcry',
        },
      ],
    },
  },
  {
    id: 'Orkn',
    name: 'rokhan',
    sounds: {
      What: [
        {
          FileNames: 'RokhanWhat1.wav,RokhanWhat2.wav,RokhanWhat3.wav,RokhanWhat4.wav',
          DirectoryBase: 'Units\\Other\\Rokhan\\',
          Channel: 1,
          SoundName: 'RokhanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'RokhanPissed1.wav,RokhanPissed2.wav,RokhanPissed3.wav,RokhanPissed4.wav,RokhanPissed5.wav',
          DirectoryBase: 'Units\\Other\\Rokhan\\',
          Channel: 1,
          SoundName: 'RokhanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'RokhanYesAttack1.wav,RokhanYesAttack2.wav,RokhanYesAttack3.wav,RokhanYesAttack4.wav',
          DirectoryBase: 'Units\\Other\\Rokhan\\',
          Channel: 2,
          SoundName: 'RokhanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'RokhanYes1.wav,RokhanYes2.wav,RokhanYes3.wav,RokhanYes4.wav',
          DirectoryBase: 'Units\\Other\\Rokhan\\',
          Channel: 3,
          SoundName: 'RokhanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'RokhanReady1.wav',
          DirectoryBase: 'Units\\Other\\Rokhan\\',
          Channel: 4,
          SoundName: 'RokhanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'RokhanWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Rokhan\\',
          Channel: 1,
          SoundName: 'RokhanWarcry',
        },
      ],
    },
  },
  {
    id: 'Osam',
    name: 'samuro',
    sounds: {
      What: [
        {
          FileNames: 'HeroBladeMasterWhat1.wav,HeroBladeMasterWhat2.wav,HeroBladeMasterWhat3.wav,HeroBladeMasterWhat4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroBladeMasterPissed1.wav,HeroBladeMasterPissed2.wav,HeroBladeMasterPissed3.wav,HeroBladeMasterPissed4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroBladeMasterYesAttack1.wav,HeroBladeMasterYesAttack2.wav,HeroBladeMasterYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 2,
          SoundName: 'HeroBladeMasterYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroBladeMasterYes1.wav,HeroBladeMasterYes2.wav,HeroBladeMasterYes3.wav,HeroBladeMasterYes4.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 3,
          SoundName: 'HeroBladeMasterYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroBladeMasterReady1.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 4,
          SoundName: 'HeroBladeMasterReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroBladeMasterWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\HeroBladeMaster\\',
          Channel: 1,
          SoundName: 'HeroBladeMasterWarcry',
        },
      ],
    },
  },
  {
    id: 'Otcc',
    name: 'cairnebloodhoofcinematic',
    sounds: {
      What: [
        {
          FileNames: 'CairneWhat1.wav,CairneWhat2.wav,CairneWhat3.wav,CairneWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairneWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CairnePissed1.wav,CairnePissed2.wav,CairnePissed3.wav,CairnePissed4.wav,CairnePissed5.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairnePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CairneYesAttack1.wav,CairneYesAttack2.wav,CairneYesAttack3.wav,CairneYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 2,
          SoundName: 'CairneYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CairneYes1.wav,CairneYes2.wav,CairneYes3.wav,CairneYes4.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 3,
          SoundName: 'CairneYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'CairneWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Cairne\\',
          Channel: 1,
          SoundName: 'CairneWarcry',
        },
      ],
    },
  },
  {
    id: 'Othr',
    name: 'thrall',
    sounds: {
      What: [
        {
          FileNames: 'ThrallWhat1.wav,ThrallWhat2.wav,ThrallWhat3.wav,ThrallWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Thrall\\',
          Channel: 1,
          SoundName: 'ThrallWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ThrallPissed1.wav,ThrallPissed2.wav,ThrallPissed3.wav,ThrallPissed4.wav',
          DirectoryBase: 'Units\\Orc\\Thrall\\',
          Channel: 1,
          SoundName: 'ThrallPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ThrallYesAttack1.wav,ThrallYesAttack2.wav,ThrallYesAttack3.wav,ThrallYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Thrall\\',
          Channel: 2,
          SoundName: 'ThrallYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ThrallYes1.wav,ThrallYes2.wav,ThrallYes3.wav,ThrallYes4.wav',
          DirectoryBase: 'Units\\Orc\\Thrall\\',
          Channel: 3,
          SoundName: 'ThrallYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'ThrallWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Thrall\\',
          Channel: 1,
          SoundName: 'ThrallWarcry',
        },
      ],
    },
  },
  {
    id: 'Uanb',
    name: 'anubarak',
    sounds: {
      What: [
        {
          FileNames: 'NerubianCryptLordWhat1.wav,NerubianCryptLordWhat2.wav,NerubianCryptLordWhat3.wav,NerubianCryptLordWhat4.wav,NerubianCryptLordWhat5.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 1,
          SoundName: 'HeroCryptLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NerubianCryptLordPissed1.wav,NerubianCryptLordPissed2.wav,NerubianCryptLordPissed3.wav,NerubianCryptLordPissed4.wav,NerubianCryptLordPissed5.wav,NerubianCryptLordPissed6.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 1,
          SoundName: 'HeroCryptLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NerubianCryptLordYesAttack1.wav,NerubianCryptLordYesAttack2.wav,NerubianCryptLordYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 2,
          SoundName: 'HeroCryptLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NerubianCryptLordYes1.wav,NerubianCryptLordYes2.wav,NerubianCryptLordYes3.wav,NerubianCryptLordYes4.wav,NerubianCryptLordYes5.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 3,
          SoundName: 'HeroCryptLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NerubianCryptLordReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 4,
          SoundName: 'HeroCryptLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NerubianCryptLordWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroCryptLord\\',
          Channel: 1,
          SoundName: 'HeroCryptLordWarcry',
        },
      ],
    },
  },
  {
    id: 'Ubal',
    name: 'balnazzar',
    sounds: {
      What: [
        {
          FileNames: 'HeroDreadlordWhat1.wav,HeroDreadlordWhat2.wav,HeroDreadlordWhat3.wav,HeroDreadlordWhat4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroDreadlordPissed1.wav,HeroDreadlordPissed2.wav,HeroDreadlordPissed3.wav,HeroDreadlordPissed4.wav,HeroDreadlordPissed5.wav,HeroDreadlordPissed6.wav,HeroDreadlordPissed7.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroDreadlordYesAttack1.wav,HeroDreadlordYesAttack2.wav,HeroDreadlordYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 2,
          SoundName: 'HeroDreadLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroDreadlordYes1.wav,HeroDreadlordYes2.wav,HeroDreadlordYes3.wav,HeroDreadlordYes4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 3,
          SoundName: 'HeroDreadLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroDreadlordReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 4,
          SoundName: 'HeroDreadLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroDreadlordWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWarcry',
        },
      ],
    },
  },
  {
    id: 'Uclc',
    name: 'kelthuzadlichcinematic',
    sounds: {
      What: [
        {
          FileNames: 'KelThuzadWhat1.wav,KelThuzadWhat2.wav,KelThuzadWhat3.wav,KelThuzadWhat4.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KelThuzadPissed1.wav,KelThuzadPissed2.wav,KelThuzadPissed3.wav,KelThuzadPissed4.wav,KelThuzadPissed5.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KelThuzadYesAttack1.wav,KelThuzadYesAttack2.wav,KelThuzadYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 2,
          SoundName: 'KelThuzadLichYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KelThuzadYes1.wav,KelThuzadYes2.wav,KelThuzadYes3.wav,KelThuzadYes4.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 3,
          SoundName: 'KelThuzadLichYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'KelThuzadWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichWarcry',
        },
      ],
    },
  },
  {
    id: 'Udth',
    name: 'detheroc',
    sounds: {
      What: [
        {
          FileNames: 'HeroDreadlordWhat1.wav,HeroDreadlordWhat2.wav,HeroDreadlordWhat3.wav,HeroDreadlordWhat4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroDreadlordPissed1.wav,HeroDreadlordPissed2.wav,HeroDreadlordPissed3.wav,HeroDreadlordPissed4.wav,HeroDreadlordPissed5.wav,HeroDreadlordPissed6.wav,HeroDreadlordPissed7.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroDreadlordYesAttack1.wav,HeroDreadlordYesAttack2.wav,HeroDreadlordYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 2,
          SoundName: 'HeroDreadLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroDreadlordYes1.wav,HeroDreadlordYes2.wav,HeroDreadlordYes3.wav,HeroDreadlordYes4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 3,
          SoundName: 'HeroDreadLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroDreadlordReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 4,
          SoundName: 'HeroDreadLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroDreadlordWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWarcry',
        },
      ],
    },
  },
  {
    id: 'Uear',
    name: 'evilarthas',
    sounds: {
      What: [
        {
          FileNames: 'EvilArthasWhat1.wav,EvilArthasWhat2.wav,EvilArthasWhat3.wav,EvilArthasWhat4.wav',
          DirectoryBase: 'Units\\Undead\\EvilArthas\\',
          Channel: 1,
          SoundName: 'EvilArthasWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'EvilArthasPissed1.wav,EvilArthasPissed2.wav,EvilArthasPissed3.wav,EvilArthasPissed4.wav,EvilArthasPissed5.wav',
          DirectoryBase: 'Units\\Undead\\EvilArthas\\',
          Channel: 1,
          SoundName: 'EvilArthasPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'EvilArthasYesAttack1.wav,EvilArthasYesAttack2.wav,EvilArthasYesAttack3.wav,EvilArthasYesAttack4.wav,EvilArthasYesAttack5.wav,EvilArthasYesAttack6.wav',
          DirectoryBase: 'Units\\Undead\\EvilArthas\\',
          Channel: 2,
          SoundName: 'EvilArthasYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'EvilArthasYes1.wav,EvilArthasYes2.wav,EvilArthasYes3.wav,EvilArthasYes4.wav',
          DirectoryBase: 'Units\\Undead\\EvilArthas\\',
          Channel: 3,
          SoundName: 'EvilArthasYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'EvilArthasWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\EvilArthas\\',
          Channel: 1,
          SoundName: 'EvilArthasWarcry',
        },
      ],
    },
  },
  {
    id: 'Uktl',
    name: 'kelthuzadlich',
    sounds: {
      What: [
        {
          FileNames: 'KelThuzadWhat1.wav,KelThuzadWhat2.wav,KelThuzadWhat3.wav,KelThuzadWhat4.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KelThuzadPissed1.wav,KelThuzadPissed2.wav,KelThuzadPissed3.wav,KelThuzadPissed4.wav,KelThuzadPissed5.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KelThuzadYesAttack1.wav,KelThuzadYesAttack2.wav,KelThuzadYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 2,
          SoundName: 'KelThuzadLichYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KelThuzadYes1.wav,KelThuzadYes2.wav,KelThuzadYes3.wav,KelThuzadYes4.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 3,
          SoundName: 'KelThuzadLichYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'KelThuzadWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichWarcry',
        },
      ],
    },
  },
  {
    id: 'Umal',
    name: 'malganis',
    sounds: {
      What: [
        {
          FileNames: 'HeroDreadlordWhat1.wav,HeroDreadlordWhat2.wav,HeroDreadlordWhat3.wav,HeroDreadlordWhat4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroDreadlordPissed1.wav,HeroDreadlordPissed2.wav,HeroDreadlordPissed3.wav,HeroDreadlordPissed4.wav,HeroDreadlordPissed5.wav,HeroDreadlordPissed6.wav,HeroDreadlordPissed7.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroDreadlordYesAttack1.wav,HeroDreadlordYesAttack2.wav,HeroDreadlordYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 2,
          SoundName: 'HeroDreadLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroDreadlordYes1.wav,HeroDreadlordYes2.wav,HeroDreadlordYes3.wav,HeroDreadlordYes4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 3,
          SoundName: 'HeroDreadLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroDreadlordReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 4,
          SoundName: 'HeroDreadLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroDreadlordWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWarcry',
        },
      ],
    },
  },
  {
    id: 'Usyl',
    name: 'evilsylvanas',
    sounds: {
      What: [
        {
          FileNames: 'EvilSylvanasWhat1.wav,EvilSylvanasWhat2.wav,EvilSylvanasWhat3.wav,EvilSylvanasWhat4.wav',
          DirectoryBase: 'Units\\Undead\\EvilSylvanas\\',
          Channel: 1,
          SoundName: 'EvilSylvanasWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'EvilSylvanasPissed1.wav,EvilSylvanasPissed2.wav,EvilSylvanasPissed3.wav,EvilSylvanasPissed4.wav',
          DirectoryBase: 'Units\\Undead\\EvilSylvanas\\',
          Channel: 1,
          SoundName: 'EvilSylvanasPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'EvilSylvanasYesAttack1.wav,EvilSylvanasYesAttack2.wav,EvilSylvanasYesAttack3.wav,EvilSylvanasYesAttack4.wav',
          DirectoryBase: 'Units\\Undead\\EvilSylvanas\\',
          Channel: 2,
          SoundName: 'EvilSylvanasYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'EvilSylvanasYes1.wav,EvilSylvanasYes2.wav,EvilSylvanasYes3.wav,EvilSylvanasYes4.wav,EvilSylvanasYes5.wav',
          DirectoryBase: 'Units\\Undead\\EvilSylvanas\\',
          Channel: 3,
          SoundName: 'EvilSylvanasYes',
        },
      ],
      Ready: [
        {
          FileNames: 'EvilSylvanasReady1.wav',
          DirectoryBase: 'Units\\Undead\\EvilSylvanas\\',
          Channel: 4,
          SoundName: 'EvilSylvanasReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'EvilSylvanasWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\EvilSylvanas\\',
          Channel: 1,
          SoundName: 'EvilSylvanasWarcry',
        },
      ],
    },
  },
  {
    id: 'Utic',
    name: 'tichondrius',
    sounds: {
      What: [
        {
          FileNames: 'TichondriusWhat1.wav,TichondriusWhat2.wav,TichondriusWhat3.wav,TichondriusWhat4.wav',
          DirectoryBase: 'Units\\Undead\\Tichondrius\\',
          Channel: 1,
          SoundName: 'TichondriusWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'TichondriusPissed1.wav,TichondriusPissed2.wav,TichondriusPissed3.wav,TichondriusPissed4.wav,TichondriusPissed5.wav',
          DirectoryBase: 'Units\\Undead\\Tichondrius\\',
          Channel: 1,
          SoundName: 'TichondriusPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'TichondriusYesAttack1.wav,TichondriusYesAttack2.wav,TichondriusYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Tichondrius\\',
          Channel: 2,
          SoundName: 'TichondriusYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TichondriusYes1.wav,TichondriusYes2.wav,TichondriusYes3.wav,TichondriusYes4.wav',
          DirectoryBase: 'Units\\Undead\\Tichondrius\\',
          Channel: 3,
          SoundName: 'TichondriusYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'TichondriusWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Tichondrius\\',
          Channel: 1,
          SoundName: 'TichondriusWarcry',
        },
      ],
    },
  },
  {
    id: 'Uvar',
    name: 'varimathras',
    sounds: {
      What: [
        {
          FileNames: 'VarimathrasWhat1.wav,VarimathrasWhat2.wav,VarimathrasWhat3.wav,VarimathrasWhat4.wav,VarimathrasWhat5.wav',
          DirectoryBase: 'Units\\Undead\\Varimathras\\',
          Channel: 1,
          SoundName: 'VarimathrasWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'VarimathrasPissed1.wav,VarimathrasPissed2.wav,VarimathrasPissed3.wav,VarimathrasPissed4.wav,VarimathrasPissed5.wav,VarimathrasPissed6.wav,VarimathrasPissed7.wav,VarimathrasPissed8.wav',
          DirectoryBase: 'Units\\Undead\\Varimathras\\',
          Channel: 1,
          SoundName: 'VarimathrasPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'VarimathrasYesAttack1.wav,VarimathrasYesAttack2.wav,VarimathrasYesAttack3.wav,VarimathrasYesAttack4.wav',
          DirectoryBase: 'Units\\Undead\\Varimathras\\',
          Channel: 2,
          SoundName: 'VarimathrasYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'VarimathrasYes1.wav,VarimathrasYes2.wav,VarimathrasYes3.wav,VarimathrasYes4.wav,VarimathrasYes5.wav',
          DirectoryBase: 'Units\\Undead\\Varimathras\\',
          Channel: 3,
          SoundName: 'VarimathrasYes',
        },
      ],
      Ready: [
        {
          FileNames: 'VarimathrasReady1.wav',
          DirectoryBase: 'Units\\Undead\\Varimathras\\',
          Channel: 4,
          SoundName: 'VarimathrasReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'VarimathrasWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Varimathras\\',
          Channel: 1,
          SoundName: 'VarimathrasWarcry',
        },
      ],
    },
  },
  {
    id: 'Uvng',
    name: 'vengyr',
    sounds: {
      What: [
        {
          FileNames: 'HeroDreadlordWhat1.wav,HeroDreadlordWhat2.wav,HeroDreadlordWhat3.wav,HeroDreadlordWhat4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroDreadlordPissed1.wav,HeroDreadlordPissed2.wav,HeroDreadlordPissed3.wav,HeroDreadlordPissed4.wav,HeroDreadlordPissed5.wav,HeroDreadlordPissed6.wav,HeroDreadlordPissed7.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroDreadlordYesAttack1.wav,HeroDreadlordYesAttack2.wav,HeroDreadlordYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 2,
          SoundName: 'HeroDreadLordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroDreadlordYes1.wav,HeroDreadlordYes2.wav,HeroDreadlordYes3.wav,HeroDreadlordYes4.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 3,
          SoundName: 'HeroDreadLordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroDreadlordReady1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 4,
          SoundName: 'HeroDreadLordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroDreadlordWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\HeroDreadLord\\',
          Channel: 1,
          SoundName: 'HeroDreadLordWarcry',
        },
      ],
    },
  },
  {
    id: 'Uwar',
    name: 'archimonde',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'Hgam',
    name: 'ghostlyarchmage',
    sounds: {
      What: [
        {
          FileNames: 'HeroArchMageWhat1.wav,HeroArchMageWhat2.wav,HeroArchMageWhat3.wav,HeroArchMageWhat4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HeroArchMagePissed1.wav,HeroArchMagePissed2.wav,HeroArchMagePissed3.wav,HeroArchMagePissed4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMagePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HeroArchMageYesAttack1.wav,HeroArchMageYesAttack2.wav,HeroArchMageYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 2,
          SoundName: 'HeroArchMageYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HeroArchMageYes1.wav,HeroArchMageYes2.wav,HeroArchMageYes3.wav,HeroArchMageYes4.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 3,
          SoundName: 'HeroArchMageYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HeroArchMageReady1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 4,
          SoundName: 'HeroArchMageReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'HeroArchMageWarcry1.wav',
          DirectoryBase: 'Units\\Human\\HeroArchMage\\',
          Channel: 1,
          SoundName: 'HeroArchMageWarcry',
        },
      ],
    },
  },
  {
    id: 'eilw',
    name: 'illidanwagon',
    sounds: {
      What: [
        {
          FileNames: 'PrisonWagonWhat1.wav,PrisonWagonWhat2.wav',
          DirectoryBase: 'Units\\Other\\IllidanEvilCaged\\',
          Channel: 1,
          SoundName: 'PrisonWagonWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'PrisonWagonYes1.wav,PrisonWagonYes2.wav,PrisonWagonYes3.wav',
          DirectoryBase: 'Units\\Other\\IllidanEvilCaged\\',
          Channel: 3,
          SoundName: 'PrisonWagonYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'enec',
    name: 'nightelfrunner',
    sounds: {
      What: [
        {
          FileNames: 'RunnerWhat1.wav,RunnerWhat2.wav,RunnerWhat3.wav,RunnerWhat4.wav,RunnerWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\Runner\\',
          Channel: 1,
          SoundName: 'RunnerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'RunnerPissed1.wav,RunnerPissed2.wav,RunnerPissed3.wav,RunnerPissed4.wav,RunnerPissed5.wav,RunnerPissed6.wav,RunnerPissed7.wav',
          DirectoryBase: 'Units\\NightElf\\Runner\\',
          Channel: 1,
          SoundName: 'RunnerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'RunnerYesAttack1.wav,RunnerYesAttack2.wav,RunnerYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Runner\\',
          Channel: 2,
          SoundName: 'RunnerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'RunnerYes1.wav,RunnerYes2.wav,RunnerYes3.wav,RunnerYes4.wav,RunnerYes5.wav',
          DirectoryBase: 'Units\\NightElf\\Runner\\',
          Channel: 3,
          SoundName: 'RunnerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'RunnerReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Runner\\',
          Channel: 4,
          SoundName: 'RunnerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'RunnerWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Runner\\',
          Channel: 1,
          SoundName: 'RunnerWarcry',
        },
      ],
    },
  },
  {
    id: 'ensh',
    name: 'naisha',
    sounds: {
      What: [
        {
          FileNames: 'NaishaWhat1.wav,NaishaWhat2.wav,NaishaWhat3.wav,NaishaWhat4.wav,NaishaWhat5.wav',
          DirectoryBase: 'Units\\NightElf\\Naisha\\',
          Channel: 1,
          SoundName: 'NaishaWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NaishaPissed1.wav,NaishaPissed2.wav,NaishaPissed3.wav',
          DirectoryBase: 'Units\\NightElf\\Naisha\\',
          Channel: 1,
          SoundName: 'NaishaPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NaishaYesAttack1.wav,NaishaYesAttack2.wav,NaishaYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Naisha\\',
          Channel: 2,
          SoundName: 'NaishaYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NaishaYes1.wav,NaishaYes2.wav,NaishaYes3.wav,NaishaYes4.wav,NaishaYes5.wav',
          DirectoryBase: 'Units\\NightElf\\Naisha\\',
          Channel: 3,
          SoundName: 'NaishaYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NaishaReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Naisha\\',
          Channel: 4,
          SoundName: 'NaishaReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NaishaWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Naisha\\',
          Channel: 1,
          SoundName: 'NaishaWarcry',
        },
      ],
    },
  },
  {
    id: 'eshd',
    name: 'shandris',
    sounds: {
      What: [
        {
          FileNames: 'ShandrisWhat1.wav,ShandrisWhat2.wav,ShandrisWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\Shandris\\',
          Channel: 1,
          SoundName: 'ShandrisWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShandrisPissed1.wav,ShandrisPissed2.wav,ShandrisPissed3.wav,ShandrisPissed4.wav',
          DirectoryBase: 'Units\\NightElf\\Shandris\\',
          Channel: 1,
          SoundName: 'ShandrisPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShandrisYesAttack1.wav,ShandrisYesAttack2.wav,ShandrisYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\Shandris\\',
          Channel: 2,
          SoundName: 'ShandrisYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShandrisYes1.wav,ShandrisYes2.wav,ShandrisYes3.wav',
          DirectoryBase: 'Units\\NightElf\\Shandris\\',
          Channel: 3,
          SoundName: 'ShandrisYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'ShandrisWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Shandris\\',
          Channel: 1,
          SoundName: 'ShandrisWarcry',
        },
      ],
    },
  },
  {
    id: 'etrs',
    name: 'nightelftransportship',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'hbew',
    name: 'bloodelfwagon',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'hcth',
    name: 'thecaptain',
    sounds: {
      What: [
        {
          FileNames: 'CaptainWhat1.wav,CaptainWhat2.wav,CaptainWhat3.wav',
          DirectoryBase: 'Units\\Human\\TheCaptain\\',
          Channel: 1,
          SoundName: 'CaptainWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'CaptainPissed1.wav,CaptainPissed2.wav,CaptainPissed3.wav',
          DirectoryBase: 'Units\\Human\\TheCaptain\\',
          Channel: 1,
          SoundName: 'CaptainPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'CaptainYesAttack1.wav',
          DirectoryBase: 'Units\\Human\\TheCaptain\\',
          Channel: 2,
          SoundName: 'CaptainYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CaptainYes1.wav,CaptainYes2.wav,CaptainYes3.wav',
          DirectoryBase: 'Units\\Human\\TheCaptain\\',
          Channel: 3,
          SoundName: 'CaptainYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'CaptainWarcry1.wav',
          DirectoryBase: 'Units\\Human\\TheCaptain\\',
          Channel: 1,
          SoundName: 'CaptainWarcry',
        },
      ],
    },
  },
  {
    id: 'hhdl',
    name: 'riderlesshorse',
    sounds: {
      What: [
        {
          FileNames: 'KnightNoRiderWhat1.wav,KnightNoRiderWhat2.wav,KnightNoRiderWhat3.wav',
          DirectoryBase: 'Units\\Human\\KnightNoRider\\',
          Channel: 1,
          SoundName: 'KnightNoRiderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'KnightNoRiderYesAttack1.wav,KnightNoRiderYesAttack2.wav',
          DirectoryBase: 'Units\\Human\\KnightNoRider\\',
          Channel: 2,
          SoundName: 'KnightNoRiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KnightNoRiderYes1.wav,KnightNoRiderYes2.wav,KnightNoRiderYes3.wav',
          DirectoryBase: 'Units\\Human\\KnightNoRider\\',
          Channel: 3,
          SoundName: 'KnightNoRiderYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'KnightNoRiderWarcry1.wav',
          DirectoryBase: 'Units\\Human\\KnightNoRider\\',
          Channel: 1,
          SoundName: 'KnightNoRiderWarcry',
        },
      ],
    },
  },
  {
    id: 'hhes',
    name: 'highelvenswordsman',
    sounds: {
      What: [
        {
          FileNames: 'PriestWhat2.wav,PriestWhat3.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'HighElfSwordsmanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PriestPissed2.wav,PriestPissed4.wav,PriestPissed5.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'HighElfSwordsmanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PriestYesAttack1.wav,PriestYesAttack2.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 2,
          SoundName: 'HighElfSwordsmanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PriestYes1.wav,PriestYes2.wav,PriestYes3.wav,PriestYes4.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 3,
          SoundName: 'HighElfSwordsmanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PriestReady1.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 4,
          SoundName: 'HighElfSwordsmanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PriestWarcry1.wav',
          DirectoryBase: 'Units\\Human\\Priest\\',
          Channel: 1,
          SoundName: 'HighElfSwordsmanWarcry',
        },
      ],
    },
  },
  {
    id: 'hrdh',
    name: 'packhorse',
    sounds: {
      What: [
        {
          FileNames: 'KnightNoRiderWhat1.wav,KnightNoRiderWhat2.wav,KnightNoRiderWhat3.wav',
          DirectoryBase: 'Units\\Human\\KnightNoRider\\',
          Channel: 1,
          SoundName: 'KnightNoRiderWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'KnightNoRiderYesAttack1.wav,KnightNoRiderYesAttack2.wav',
          DirectoryBase: 'Units\\Human\\KnightNoRider\\',
          Channel: 2,
          SoundName: 'KnightNoRiderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KnightNoRiderYes1.wav,KnightNoRiderYes2.wav,KnightNoRiderYes3.wav',
          DirectoryBase: 'Units\\Human\\KnightNoRider\\',
          Channel: 3,
          SoundName: 'KnightNoRiderYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'KnightNoRiderWarcry1.wav',
          DirectoryBase: 'Units\\Human\\KnightNoRider\\',
          Channel: 1,
          SoundName: 'KnightNoRiderWarcry',
        },
      ],
    },
  },
  {
    id: 'Naka',
    name: 'akama',
    sounds: {
      What: [
        {
          FileNames: 'AkamaWhat1.wav,AkamaWhat2.wav,AkamaWhat3.wav,AkamaWhat4.wav,AkamaWhat5.wav',
          DirectoryBase: 'Units\\Other\\DranaiAkama\\',
          Channel: 1,
          SoundName: 'AkamaWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'AkamaPissed1.wav,AkamaPissed2.wav,AkamaPissed3.wav,AkamaPissed4.wav,AkamaPissed5.wav,AkamaPissed6.wav,AkamaPissed7.wav,AkamaPissed8.wav,AkamaPissed9.wav',
          DirectoryBase: 'Units\\Other\\DranaiAkama\\',
          Channel: 1,
          SoundName: 'AkamaPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'AkamaYesAttack1.wav,AkamaYesAttack2.wav,AkamaYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\DranaiAkama\\',
          Channel: 2,
          SoundName: 'AkamaYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AkamaYes1.wav,AkamaYes2.wav,AkamaYes3.wav,AkamaYes4.wav,AkamaYes5.wav',
          DirectoryBase: 'Units\\Other\\DranaiAkama\\',
          Channel: 3,
          SoundName: 'AkamaYes',
        },
      ],
      Ready: [
        {
          FileNames: 'AkamaReady1.wav',
          DirectoryBase: 'Units\\Other\\DranaiAkama\\',
          Channel: 4,
          SoundName: 'AkamaReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'AkamaWarcry1.wav',
          DirectoryBase: 'Units\\Other\\DranaiAkama\\',
          Channel: 1,
          SoundName: 'AkamaWarcry',
        },
      ],
    },
  },
  {
    id: 'nsw1',
    name: 'spiritbeast',
    sounds: {
      What: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 1,
          SoundName: 'FelhoundWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FelHoundYesAttack1.wav,FelHoundYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 2,
          SoundName: 'FelhoundYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FelHoundYes1.wav,FelHoundYes2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 3,
          SoundName: 'FelhoundYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 4,
          SoundName: 'FelhoundReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsw2',
    name: 'spiritbeast2',
    sounds: {
      What: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 1,
          SoundName: 'FelhoundWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FelHoundYesAttack1.wav,FelHoundYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 2,
          SoundName: 'FelhoundYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FelHoundYes1.wav,FelHoundYes2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 3,
          SoundName: 'FelhoundYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 4,
          SoundName: 'FelhoundReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nsw3',
    name: 'spiritbeast3',
    sounds: {
      What: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 1,
          SoundName: 'FelhoundWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'FelHoundYesAttack1.wav,FelHoundYesAttack2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 2,
          SoundName: 'FelhoundYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FelHoundYes1.wav,FelHoundYes2.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 3,
          SoundName: 'FelhoundYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FelHoundWhat1.wav',
          DirectoryBase: 'Units\\Demon\\felhound\\',
          Channel: 4,
          SoundName: 'FelhoundReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncat',
    name: 'demolisherdraenei',
    sounds: {
      What: [
        {
          FileNames: 'CatapultWhat1.wav,CatapultWhat2.wav',
          DirectoryBase: 'Units\\Orc\\Catapult\\',
          Channel: 1,
          SoundName: 'CatapultWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'CatapultYesAttack1.wav,CatapultYesAttack2.wav,CatapultYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Catapult\\',
          Channel: 2,
          SoundName: 'CatapultYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'CatapultYes1.wav,CatapultYes2.wav,CatapultYes3.wav',
          DirectoryBase: 'Units\\Orc\\Catapult\\',
          Channel: 3,
          SoundName: 'CatapultYes',
        },
      ],
      Ready: [
        {
          FileNames: 'CatapultReady1.wav',
          DirectoryBase: 'Units\\Orc\\Catapult\\',
          Channel: 4,
          SoundName: 'CatapultReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nbee',
    name: 'bloodelfengineer',
    sounds: {
      What: [
        {
          FileNames: 'BloodElfEngineerWhat1.wav,BloodElfEngineerWhat2.wav,BloodElfEngineerWhat3.wav,BloodElfEngineerWhat4.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 1,
          SoundName: 'BloodElfEngineerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BloodElfEngineerPissed1.wav,BloodElfEngineerPissed2.wav,BloodElfEngineerPissed3.wav,BloodElfEngineerPissed4.wav,BloodElfEngineerPissed5.wav,BloodElfEngineerPissed6.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 1,
          SoundName: 'BloodElfEngineerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BloodElfEngineerYesAttack1.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 2,
          SoundName: 'BloodElfEngineerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BloodElfEngineerYes1.wav,BloodElfEngineerYes2.wav,BloodElfEngineerYes3.wav,BloodElfEngineerYes4.wav,BloodElfEngineerYes5.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 3,
          SoundName: 'BloodElfEngineerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BloodElfEngineerReady1.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 4,
          SoundName: 'BloodElfEngineerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BloodElfEngineerWarcry1.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 1,
          SoundName: 'BloodElfEngineerWarcry',
        },
      ],
    },
  },
  {
    id: 'nbel',
    name: 'bloodelflieutenant',
    sounds: {
      What: [
        {
          FileNames: 'SpellbreakerWhat1.wav,SpellbreakerWhat2.wav,SpellbreakerWhat3.wav,SpellbreakerWhat4.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 1,
          SoundName: 'SpellBreakerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'SpellbreakerPissed1.wav,SpellbreakerPissed2.wav,SpellbreakerPissed3.wav,SpellbreakerPissed4.wav,SpellbreakerPissed5.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 1,
          SoundName: 'SpellBreakerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'SpellbreakerYesAttack1.wav,SpellbreakerYesAttack2.wav,SpellbreakerYesAttack3.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 2,
          SoundName: 'SpellBreakerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'SpellbreakerYes1.wav,SpellbreakerYes2.wav,SpellbreakerYes3.wav,SpellbreakerYes4.wav,SpellbreakerYes5.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 3,
          SoundName: 'SpellBreakerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'SpellbreakerReady1.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 4,
          SoundName: 'SpellBreakerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'SpellbreakerWarcry1.wav',
          DirectoryBase: 'Units\\Human\\BloodElfSpellThief\\',
          Channel: 1,
          SoundName: 'SpellBreakerWarcry',
        },
      ],
    },
  },
  {
    id: 'nbsp',
    name: 'battleship',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nchg',
    name: 'chaosgrunt',
    sounds: {
      What: [
        {
          FileNames: 'GruntWhat3.wav,GruntWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 1,
          SoundName: 'ChaosGruntWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'GruntYesAttack1.wav,GruntYesAttack2.wav,GruntYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 2,
          SoundName: 'ChaosGruntYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GruntYes1.wav,GruntYes3.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 3,
          SoundName: 'ChaosGruntYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GruntReady1.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 4,
          SoundName: 'ChaosGruntReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nchr',
    name: 'chaoswolfrider',
    sounds: {
      What: [
        {
          FileNames: 'WolfriderWhat1.wav,WolfriderWhat2.wav,WolfriderWhat3.wav,WolfriderWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 1,
          SoundName: 'WolfriderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WolfriderPissed1.wav,WolfriderPissed2.wav,WolfriderPissed3.wav,WolfriderPissed4.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 1,
          SoundName: 'WolfriderPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WolfriderYesAttack1.wav,WolfriderYesAttack2.wav,WolfriderYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 2,
          SoundName: 'WolfriderYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WolfriderYes1.wav,WolfriderYes2.wav,WolfriderYes3.wav,WolfriderYes4.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 3,
          SoundName: 'WolfriderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WolfriderReady1.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 4,
          SoundName: 'WolfriderReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WolfriderWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Wolfrider\\',
          Channel: 1,
          SoundName: 'WolfriderWarcry',
        },
      ],
    },
  },
  {
    id: 'nchw',
    name: 'chaoswarlock',
    sounds: {
      What: [
        {
          FileNames: 'ShamanWhat1.wav,ShamanWhat2.wav,ShamanWhat3.wav,ShamanWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShamanPissed1.wav,ShamanPissed2.wav,ShamanPissed3.wav,ShamanPissed4.wav,ShamanPissed5.wav,ShamanPissed6.wav,ShamanPissed7.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShamanYesAttack1.wav,ShamanYesAttack2.wav,ShamanYesAttack3.wav,ShamanYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 2,
          SoundName: 'ShamanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShamanYes1.wav,ShamanYes2.wav,ShamanYes3.wav,ShamanYes4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 3,
          SoundName: 'ShamanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 4,
          SoundName: 'ShamanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShamanWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanWarcry',
        },
      ],
    },
  },
  {
    id: 'nckb',
    name: 'chaoskotobeast',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav,KotoBeastPissed3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncpn',
    name: 'chaospeon',
    sounds: {
      What: [
        {
          FileNames: 'PeonWhat1.wav,PeonWhat2.wav,PeonWhat3.wav,PeonWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 1,
          SoundName: 'PeonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'PeonPissed1.wav,PeonPissed2.wav,PeonPissed3.wav,PeonPissed4.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 1,
          SoundName: 'PeonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'PeonYesAttack1.wav,PeonYesAttack2.wav,PeonYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 2,
          SoundName: 'PeonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'PeonYes1.wav,PeonYes2.wav,PeonYes3.wav,PeonYes4.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 3,
          SoundName: 'PeonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'PeonReady1.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 4,
          SoundName: 'PeonReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'PeonWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Peon\\',
          Channel: 1,
          SoundName: 'PeonWarcry',
        },
      ],
    },
  },
  {
    id: 'ndmu',
    name: 'dalaranmutant',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'ZombieWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'ZombieYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'ZombieYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndrd',
    name: 'draeneidarkslayer',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrn',
    name: 'draeneivindicator',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrt',
    name: 'draeneistalker',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrf',
    name: 'draeneiguardian',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrh',
    name: 'draeneiharbinger',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrj',
    name: 'dalaranreject',
    sounds: {
      What: [
        {
          FileNames: 'WendigoWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 1,
          SoundName: 'ZombieWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'WendigoYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 2,
          SoundName: 'ZombieYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WendigoYesAttack1.wav',
          DirectoryBase: 'Units\\Creeps\\Wendigo\\',
          Channel: 3,
          SoundName: 'ZombieYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndrm',
    name: 'draeneidisciple',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrp',
    name: 'draeneiprotector',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrs',
    name: 'draeneiseer',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrw',
    name: 'draeneiwatcher',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndrl',
    name: 'draeneilaborer',
    sounds: {
      What: [
        {
          FileNames: 'DraeneiWhat1.wav,DraeneiWhat2.wav,DraeneiWhat3.wav,DraeneiWhat4.wav,DraeneiWhat5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DraeneiPissed1.wav,DraeneiPissed2.wav,DraeneiPissed3.wav,DraeneiPissed4.wav,DraeneiPissed5.wav,DraeneiPissed6.wav,DraeneiPissed7.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DraeneiYesAttack1.wav,DraeneiYesAttack2.wav,DraeneiYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 2,
          SoundName: 'DraeneiYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DraeneiYes1.wav,DraeneiYes2.wav,DraeneiYes3.wav,DraeneiYes4.wav,DraeneiYes5.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 3,
          SoundName: 'DraeneiYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DraeneiReady1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 4,
          SoundName: 'DraeneiReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'DraeneiWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Dranai\\',
          Channel: 1,
          SoundName: 'DraeneiWarcry',
        },
      ],
    },
  },
  {
    id: 'ndsa',
    name: 'draeneisalamander',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'negz',
    name: 'engineergazlowe',
    sounds: {
      What: [
        {
          FileNames: 'GoblinSapperWhat1.wav,GoblinSapperWhat2.wav,GoblinSapperWhat3.wav,GoblinSapperWhat4.wav,GoblinSapperWhat5.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 1,
          SoundName: 'GoblinSapperWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GoblinSapperPissed1.wav,GoblinSapperPissed2.wav,GoblinSapperPissed3.wav,GoblinSapperPissed4.wav,GoblinSapperPissed5.wav,GoblinSapperPissed6.wav,GoblinSapperPissed7.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 1,
          SoundName: 'GoblinSapperPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GoblinSapperYesAttack1.wav,GoblinSapperYesAttack2.wav,GoblinSapperYesAttack3.wav,GoblinSapperYesAttack4.wav,GoblinSapperYesAttack5.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 2,
          SoundName: 'GoblinSapperYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GoblinSapperYes1.wav,GoblinSapperYes2.wav,GoblinSapperYes3.wav,GoblinSapperYes4.wav,GoblinSapperYes5.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 3,
          SoundName: 'GoblinSapperYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GoblinSapperReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GoblinSapper\\',
          Channel: 4,
          SoundName: 'GoblinSapperReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nemi',
    name: 'emissary',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfgl',
    name: 'fleshgolem',
    sounds: {
      What: [
        {
          FileNames: 'AbominationWhat1.wav,AbominationWhat2.wav,AbominationWhat3.wav,AbominationWhat4.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'AbominationPissed1.wav,AbominationPissed2.wav,AbominationPissed3.wav,AbominationPissed4.wav,AbominationPissed5.wav,AbominationPissed6.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'AbominationYesAttack1.wav,AbominationYesAttack2.wav,AbominationYesAttack3.wav,AbominationYesAttack4.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 2,
          SoundName: 'AbominationYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AbominationYes1.wav,AbominationYes2.wav,AbominationYes3.wav,AbominationYes4.wav,AbominationYes5.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 3,
          SoundName: 'AbominationYes',
        },
      ],
      Ready: [
        {
          FileNames: 'AbominationReady1.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 4,
          SoundName: 'AbominationReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'AbominationWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationWarcry',
        },
      ],
    },
  },
  {
    id: 'ngbl',
    name: 'goblinblaster',
    sounds: {
      What: [
        {
          FileNames: 'IronGolemWhat1.wav,IronGolemWhat2.wav,IronGolemWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 1,
          SoundName: 'IronGolemWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'IronGolemPissed1.wav,IronGolemPissed2.wav,IronGolemPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 1,
          SoundName: 'IronGolemPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'IronGolemYesAttack1.wav,IronGolemYesAttack2.wav,IronGolemYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 2,
          SoundName: 'IronGolemYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'IronGolemYes1.wav,IronGolemYes2.wav,IronGolemYes3.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 3,
          SoundName: 'IronGolemYes',
        },
      ],
      Ready: [
        {
          FileNames: 'IronGolemWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\IronGolem\\',
          Channel: 4,
          SoundName: 'IronGolemReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nhea',
    name: 'highelvenarcher',
    sounds: {
      What: [
        {
          FileNames: 'ArcherWhat1.wav,ArcherWhat2.wav,ArcherWhat3.wav,ArcherWhat4.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'ArcherWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ArcherPissed1.wav,ArcherPissed2.wav,ArcherPissed3.wav,ArcherPissed4.wav,ArcherPissed5.wav,ArcherPissed6.wav,ArcherPissed7.wav,ArcherPissed8.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'ArcherPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ArcherYesAttack1.wav,ArcherYesAttack2.wav,ArcherYesAttack3.wav,ArcherYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 2,
          SoundName: 'ArcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArcherYes1.wav,ArcherYes2.wav,ArcherYes3.wav,ArcherYes4.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 3,
          SoundName: 'ArcherYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ArcherReady1.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 4,
          SoundName: 'ArcherReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ArcherWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'ArcherWarcry',
        },
      ],
    },
  },
  {
    id: 'nhef',
    name: 'highelvenfemale',
    sounds: {
      What: [
        {
          FileNames: 'VillagerF1.wav,VillagerF2.wav,VillagerF3.wav',
          DirectoryBase: 'Units\\Critters\\VillagerWoman\\',
          Channel: 1,
          SoundName: 'VillagerWomanWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nhem',
    name: 'highelvenmale',
    sounds: {
      What: [
        {
          FileNames: 'VillagerM1.wav,VillagerM2.wav,VillagerM3.wav',
          DirectoryBase: 'Units\\Critters\\VillagerMan\\',
          Channel: 1,
          SoundName: 'VillagerManWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nhew',
    name: 'bloodelfworker',
    sounds: {
      What: [
        {
          FileNames: 'BloodElfEngineerWhat1.wav,BloodElfEngineerWhat2.wav,BloodElfEngineerWhat4.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 1,
          SoundName: 'BloodElfWorkerWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BloodElfEngineerPissed2.wav,BloodElfEngineerPissed3.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 1,
          SoundName: 'BloodElfWorkerPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BloodElfEngineerYesAttack1.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 2,
          SoundName: 'BloodElfWorkerYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BloodElfEngineerYes2.wav,BloodElfEngineerYes3.wav,BloodElfEngineerYes4.wav,BloodElfEngineerYes5.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 3,
          SoundName: 'BloodElfWorkerYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BloodElfEngineerReady1.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 4,
          SoundName: 'BloodElfWorkerReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BloodElfEngineerWarcry1.wav',
          DirectoryBase: 'Units\\Critters\\BloodElfPeasant\\',
          Channel: 1,
          SoundName: 'BloodElfWorkerWarcry',
        },
      ],
    },
  },
  {
    id: 'njks',
    name: 'jailorkassan',
    sounds: {
      What: [
        {
          FileNames: 'BanditWhat1.wav,BanditWhat2.wav,BanditWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BanditPissed1.wav,BanditPissed2.wav,BanditPissed3.wav,BanditPissed4.wav,BanditPissed5.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BanditYesAttack1.wav,BanditYesAttack2.wav,BanditYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 2,
          SoundName: 'BanditYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BanditYes1.wav,BanditYes2.wav,BanditYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 3,
          SoundName: 'BanditYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BanditWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 4,
          SoundName: 'BanditReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BanditWarcry1.wav',
          DirectoryBase: 'Units\\Creeps\\Bandit\\',
          Channel: 1,
          SoundName: 'BanditWarcry',
        },
      ],
    },
  },
  {
    id: 'nmdm',
    name: 'medivhmorphed',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmed',
    name: 'medivh',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmpe',
    name: 'murgulslave',
    sounds: {
      What: [
        {
          FileNames: 'MurlocWhat1.wav,MurlocWhat2.wav,MurlocWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'MurlocPissed1.wav,MurlocPissed2.wav,MurlocPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 1,
          SoundName: 'MurlocPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'MurlocYesAttack1.wav,MurlocYesAttack2.wav,MurlocYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 2,
          SoundName: 'MurlocYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'MurlocYes1.wav,MurlocYes2.wav,MurlocYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 3,
          SoundName: 'MurlocYes',
        },
      ],
      Ready: [
        {
          FileNames: 'MurlocReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Murloc\\',
          Channel: 4,
          SoundName: 'MurlocReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nmsh',
    name: 'misha',
    sounds: {
      What: [
        {
          FileNames: 'GrizzlyBearWhat1.wav,GrizzlyBearWhat2.wav,GrizzlyBearWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 2,
          SoundName: 'GrizzlyBearYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GrizzlyBearYes1.wav,GrizzlyBearYes2.wav,GrizzlyBearYes3.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 3,
          SoundName: 'GrizzlyBearYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 4,
          SoundName: 'GrizzlyBearReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GrizzlyBearReady1.wav',
          DirectoryBase: 'Units\\Creeps\\GrizzlyBear\\',
          Channel: 1,
          SoundName: 'GrizzlyBearWarcry',
        },
      ],
    },
  },
  {
    id: 'nser',
    name: 'searinox',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nspc',
    name: 'supportcolumn',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nssn',
    name: 'nightelfassassin',
    sounds: {
      What: [
        {
          FileNames: 'ArcherWhat2.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'AssassinWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ArcherPissed2.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'AssassinPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ArcherYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 2,
          SoundName: 'AssassinYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArcherYes2.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 3,
          SoundName: 'AssassinYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'ArcherWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'AssassinWarcry',
        },
      ],
    },
  },
  {
    id: 'nthr',
    name: 'tharifas',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'nw2w',
    name: 'war2warlock',
    sounds: {
      What: [
        {
          FileNames: 'ShamanWhat1.wav,ShamanWhat2.wav,ShamanWhat3.wav,ShamanWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShamanPissed1.wav,ShamanPissed2.wav,ShamanPissed3.wav,ShamanPissed4.wav,ShamanPissed5.wav,ShamanPissed6.wav,ShamanPissed7.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShamanYesAttack1.wav,ShamanYesAttack2.wav,ShamanYesAttack3.wav,ShamanYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 2,
          SoundName: 'ShamanYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShamanYes1.wav,ShamanYes2.wav,ShamanYes3.wav,ShamanYes4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 3,
          SoundName: 'ShamanYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 4,
          SoundName: 'ShamanReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShamanWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanWarcry',
        },
      ],
    },
  },
  {
    id: 'nwat',
    name: 'watcher',
    sounds: {
      What: [
        {
          FileNames: 'ArcherWhat1.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'WatcherWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ArcherPissed2.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'WatcherPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ArcherYesAttack4.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 2,
          SoundName: 'WatcherYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ArcherYes1.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 3,
          SoundName: 'WatcherYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'ArcherWarcry1.wav',
          DirectoryBase: 'Units\\NightElf\\Archer\\',
          Channel: 1,
          SoundName: 'WatcherWarcry',
        },
      ],
    },
  },
  {
    id: 'odkt',
    name: 'drakthul',
    sounds: {
      What: [
        {
          FileNames: 'ShamanWhat1.wav,ShamanWhat3.wav,ShamanWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'ShamanPissed1.wav,ShamanPissed2.wav,ShamanPissed3.wav,ShamanPissed5.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'ShamanYesAttack1.wav,ShamanYesAttack3.wav,ShamanYesAttack4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 2,
          SoundName: 'ShamanXYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'ShamanYes1.wav,ShamanYes2.wav,ShamanYes4.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 3,
          SoundName: 'ShamanXYes',
        },
      ],
      Ready: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 4,
          SoundName: 'ShamanXReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'ShamanReady1.wav',
          DirectoryBase: 'Units\\Orc\\Shaman\\',
          Channel: 1,
          SoundName: 'ShamanXWarcry',
        },
      ],
    },
  },
  {
    id: 'ogrk',
    name: 'garthok',
    sounds: {
      What: [
        {
          FileNames: 'GruntWhat1.wav,GruntWhat2.wav,GruntWhat3.wav,GruntWhat4.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 1,
          SoundName: 'GruntWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'GruntPissed1.wav,GruntPissed2.wav,GruntPissed3.wav,GruntPissed4.wav,GruntPissed5.wav,GruntPissed6.wav,GruntPissed7.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 1,
          SoundName: 'GruntPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'GruntYesAttack1.wav,GruntYesAttack2.wav,GruntYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 2,
          SoundName: 'GruntYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'GruntYes1.wav,GruntYes2.wav,GruntYes3.wav,GruntYes4.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 3,
          SoundName: 'GruntYes',
        },
      ],
      Ready: [
        {
          FileNames: 'GruntReady1.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 4,
          SoundName: 'GruntReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'GruntWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\Grunt\\',
          Channel: 1,
          SoundName: 'GruntWarcry',
        },
      ],
    },
  },
  {
    id: 'ojgn',
    name: 'juggernaut',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'omtg',
    name: 'mathog',
    sounds: {
      What: [
        {
          FileNames: 'WarlordWhat1.wav,WarlordWhat2.wav,WarlordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 1,
          SoundName: 'ChaosWarlordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WarlordPissed1.wav,WarlordPissed2.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 1,
          SoundName: 'ChaosWarlordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WarlordYesAttack1.wav,WarlordYesAttack2.wav,WarlordYesAttack3.wav,WarlordYesAttack4.wav,WarlordYesAttack5.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 2,
          SoundName: 'ChaosWarlordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WarlordYes1.wav,WarlordYes2.wav,WarlordYes3.wav,WarlordYes4.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 3,
          SoundName: 'ChaosWarlordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WarlordReady1.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 4,
          SoundName: 'ChaosWarlordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WarlordWarcry1.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 1,
          SoundName: 'ChaosWarlordWarcry',
        },
      ],
    },
  },
  {
    id: 'onzg',
    name: 'nazgrel',
    sounds: {
      What: [
        {
          FileNames: 'NazgrelWhat1.wav,NazgrelWhat2.wav',
          DirectoryBase: 'Units\\Other\\Nazgrel\\',
          Channel: 1,
          SoundName: 'NazgrelWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'NazgrelPissed1.wav,NazgrelPissed2.wav',
          DirectoryBase: 'Units\\Other\\Nazgrel\\',
          Channel: 1,
          SoundName: 'NazgrelPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'NazgrelYesAttack1.wav,NazgrelYesAttack2.wav,NazgrelYesAttack3.wav',
          DirectoryBase: 'Units\\Other\\Nazgrel\\',
          Channel: 2,
          SoundName: 'NazgrelYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'NazgrelYes1.wav,NazgrelYes2.wav',
          DirectoryBase: 'Units\\Other\\Nazgrel\\',
          Channel: 3,
          SoundName: 'NazgrelYes',
        },
      ],
      Ready: [
        {
          FileNames: 'NazgrelReady1.wav',
          DirectoryBase: 'Units\\Other\\Nazgrel\\',
          Channel: 4,
          SoundName: 'NazgrelReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'NazgrelWarcry1.wav',
          DirectoryBase: 'Units\\Other\\Nazgrel\\',
          Channel: 1,
          SoundName: 'NazgrelWarcry',
        },
      ],
    },
  },
  {
    id: 'oosc',
    name: 'kotobeastnorider',
    sounds: {
      What: [
        {
          FileNames: 'KotoBeastWhat1.wav,KotoBeastWhat2.wav,KotoBeastWhat3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KotoBeastPissed1.wav,KotoBeastPissed2.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 1,
          SoundName: 'KotoBeastNoRiderPissed',
        },
      ],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'KotoBeastYes1.wav,KotoBeastYes2.wav,KotoBeastYes3.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 3,
          SoundName: 'KotoBeastNoRiderYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KotoBeastReady1.wav',
          DirectoryBase: 'Units\\Orc\\KotoBeast\\',
          Channel: 4,
          SoundName: 'KotoBeastNoRiderReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'oswy',
    name: 'spiritwyvern',
    sounds: {
      What: [
        {
          FileNames: 'HippoGryphWhat1.wav,HippoGryphWhat2.wav,HippoGryphWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 1,
          SoundName: 'HippoGryphWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HippogryphPissed1.wav,HippogryphPissed2.wav,HippogryphPissed3.wav',
          DirectoryBase: 'Units\\NightElf\\Hippogryph\\',
          Channel: 1,
          SoundName: 'HippoGryphPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HippogryphYesAttack1.wav,HippogryphYesAttack2.wav,HippogryphYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 2,
          SoundName: 'HippoGryphYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HippoGryphYes1.wav,HippoGryphYes2.wav,HippoGryphYes3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 3,
          SoundName: 'HippoGryphYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HippoGryphReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 4,
          SoundName: 'HippoGryphReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ovlj',
    name: 'voljin',
    sounds: {
      What: [
        {
          FileNames: 'WitchDoctorWhat1.wav,WitchDoctorWhat2.wav,WitchDoctorWhat3.wav,WitchDoctorWhat4.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 1,
          SoundName: 'WitchDoctorWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WitchDoctorPissed1.wav,WitchDoctorPissed2.wav,WitchDoctorPissed3.wav,WitchDoctorPissed4.wav,WitchDoctorPissed5.wav,WitchDoctorPissed6.wav,WitchDoctorPissed7.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 1,
          SoundName: 'WitchDoctorPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WitchDoctorYesAttack1.wav,WitchDoctorYesAttack2.wav,WitchDoctorYesAttack3.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 2,
          SoundName: 'WitchDoctorYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WitchDoctorYes1.wav,WitchDoctorYes2.wav,WitchDoctorYes3.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 3,
          SoundName: 'WitchDoctorYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WitchDoctorReady1.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 4,
          SoundName: 'WitchDoctorReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WitchDoctorWarcry1.wav',
          DirectoryBase: 'Units\\Orc\\WitchDoctor\\',
          Channel: 1,
          SoundName: 'WitchDoctorWarcry',
        },
      ],
    },
  },
  {
    id: 'owar',
    name: 'chaoswarlord',
    sounds: {
      What: [
        {
          FileNames: 'WarlordWhat1.wav,WarlordWhat2.wav,WarlordWhat3.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 1,
          SoundName: 'ChaosWarlordWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'WarlordPissed1.wav,WarlordPissed2.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 1,
          SoundName: 'ChaosWarlordPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'WarlordYesAttack1.wav,WarlordYesAttack2.wav,WarlordYesAttack3.wav,WarlordYesAttack4.wav,WarlordYesAttack5.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 2,
          SoundName: 'ChaosWarlordYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'WarlordYes1.wav,WarlordYes2.wav,WarlordYes3.wav,WarlordYes4.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 3,
          SoundName: 'ChaosWarlordYes',
        },
      ],
      Ready: [
        {
          FileNames: 'WarlordReady1.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 4,
          SoundName: 'ChaosWarlordReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'WarlordWarcry1.wav',
          DirectoryBase: 'Units\\Demon\\ChaosWarlord\\',
          Channel: 1,
          SoundName: 'ChaosWarlordWarcry',
        },
      ],
    },
  },
  {
    id: 'ownr',
    name: 'riderlesswyvern',
    sounds: {
      What: [
        {
          FileNames: 'HippoGryphWhat1.wav,HippoGryphWhat2.wav,HippoGryphWhat3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 1,
          SoundName: 'HippoGryphWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'HippogryphPissed1.wav,HippogryphPissed2.wav,HippogryphPissed3.wav',
          DirectoryBase: 'Units\\NightElf\\Hippogryph\\',
          Channel: 1,
          SoundName: 'HippoGryphPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'HippogryphYesAttack1.wav,HippogryphYesAttack2.wav,HippogryphYesAttack3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 2,
          SoundName: 'HippoGryphYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HippoGryphYes1.wav,HippoGryphYes2.wav,HippoGryphYes3.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 3,
          SoundName: 'HippoGryphYes',
        },
      ],
      Ready: [
        {
          FileNames: 'HippoGryphReady1.wav',
          DirectoryBase: 'Units\\NightElf\\HippoGryph\\',
          Channel: 4,
          SoundName: 'HippoGryphReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'uabc',
    name: 'abominationcinematic',
    sounds: {
      What: [
        {
          FileNames: 'AbominationWhat1.wav,AbominationWhat2.wav,AbominationWhat3.wav,AbominationWhat4.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'AbominationPissed1.wav,AbominationPissed2.wav,AbominationPissed3.wav,AbominationPissed4.wav,AbominationPissed5.wav,AbominationPissed6.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'AbominationYesAttack1.wav,AbominationYesAttack2.wav,AbominationYesAttack3.wav,AbominationYesAttack4.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 2,
          SoundName: 'AbominationYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AbominationYes1.wav,AbominationYes2.wav,AbominationYes3.wav,AbominationYes4.wav,AbominationYes5.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 3,
          SoundName: 'AbominationYes',
        },
      ],
      Ready: [
        {
          FileNames: 'AbominationReady1.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 4,
          SoundName: 'AbominationReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'AbominationWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Abomination\\',
          Channel: 1,
          SoundName: 'AbominationWarcry',
        },
      ],
    },
  },
  {
    id: 'uarb',
    name: 'airbarge',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ubdd',
    name: 'azurelordfrostwyrm',
    sounds: {
      What: [
        {
          FileNames: 'FrostwyrmWhat1.wav,FrostwyrmWhat2.wav,FrostwyrmWhat3.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 1,
          SoundName: 'FrostWyrmWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'FrostwyrmPissed1.wav,FrostwyrmPissed2.wav,FrostwyrmPissed3.wav,FrostwyrmPissed4.wav,FrostwyrmPissed5,wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 1,
          SoundName: 'FrostWyrmPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'FrostwyrmYesAttack1.wav,FrostwyrmYesAttack2.wav,FrostwyrmYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 2,
          SoundName: 'FrostWyrmYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'FrostwyrmYes1.wav,FrostwyrmYes2.wav,FrostwyrmYes3.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 3,
          SoundName: 'FrostWyrmYes',
        },
      ],
      Ready: [
        {
          FileNames: 'FrostwyrmReady1.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 4,
          SoundName: 'FrostWyrmReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'FrostwyrmWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\FrostWyrm\\',
          Channel: 1,
          SoundName: 'FrostWyrmWarcry',
        },
      ],
    },
  },
  {
    id: 'ubdr',
    name: 'azureloredragon',
    sounds: {
      What: [
        {
          FileNames: 'DragonWhat1.wav,DragonWhat2.wav,DragonWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'DragonPissed1.wav,DragonPissed2.wav,DragonPissed3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 1,
          SoundName: 'AzureDragonPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'DragonYesAttack1.wav,DragonYesAttack2.wav,DragonYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 2,
          SoundName: 'AzureDragonYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'DragonYes1.wav,DragonYes2.wav,DragonYes3.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 3,
          SoundName: 'AzureDragonYes',
        },
      ],
      Ready: [
        {
          FileNames: 'DragonWhat1.wav',
          DirectoryBase: 'Units\\Creeps\\AzureDragon\\',
          Channel: 4,
          SoundName: 'AzureDragonReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ubot',
    name: 'undeadtransportship',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'udes',
    name: 'undeaddestroyer',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'uktg',
    name: 'kelthuzadghost',
    sounds: {
      What: [
        {
          FileNames: 'KelThuzadWhat1.wav,KelThuzadWhat2.wav,KelThuzadWhat3.wav,KelThuzadWhat4.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KelThuzadPissed1.wav,KelThuzadPissed2.wav,KelThuzadPissed3.wav,KelThuzadPissed4.wav,KelThuzadPissed5.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KelThuzadYesAttack1.wav,KelThuzadYesAttack2.wav,KelThuzadYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 2,
          SoundName: 'KelThuzadLichYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KelThuzadYes1.wav,KelThuzadYes2.wav,KelThuzadYes3.wav,KelThuzadYes4.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 3,
          SoundName: 'KelThuzadLichYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'KelThuzadWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadLich\\',
          Channel: 1,
          SoundName: 'KelThuzadLichWarcry',
        },
      ],
    },
  },
  {
    id: 'uktn',
    name: 'kelthuzadnecro',
    sounds: {
      What: [
        {
          FileNames: 'KelThuzadWhat1.wav,KelThuzadWhat2.wav,KelThuzadWhat3.wav,KelThuzadWhat4.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadNecro\\',
          Channel: 1,
          SoundName: 'KelThuzadNecroWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KelThuzadPissed1.wav,KelThuzadPissed2.wav,KelThuzadPissed3.wav,KelThuzadPissed4.wav,KelThuzadPissed5.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadNecro\\',
          Channel: 1,
          SoundName: 'KelThuzadNecroPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KelThuzadYesAttack1.wav,KelThuzadYesAttack2.wav,KelThuzadYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadNecro\\',
          Channel: 2,
          SoundName: 'KelThuzadNecroYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KelThuzadYes1.wav,KelThuzadYes2.wav,KelThuzadYes3.wav,KelThuzadYes4.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadNecro\\',
          Channel: 3,
          SoundName: 'KelThuzadNecroYes',
        },
      ],
      Ready: [],
      Warcry: [
        {
          FileNames: 'KelThuzadWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\KelThuzadNecro\\',
          Channel: 1,
          SoundName: 'KelThuzadNecroWarcry',
        },
      ],
    },
  },
  {
    id: 'uswb',
    name: 'sylvanusbanshee',
    sounds: {
      What: [
        {
          FileNames: 'BansheeWhat1.wav,BansheeWhat2.wav,BansheeWhat3.wav,BansheeWhat4.wav,BansheeWhat5.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 1,
          SoundName: 'BansheeWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'BansheePissed1.wav,BansheePissed2.wav,BansheePissed3.wav,BansheePissed4.wav,BansheePissed5.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 1,
          SoundName: 'BansheePissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'BansheeYesAttack1.wav,BansheeYesAttack2.wav,BansheeYesAttack3.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 2,
          SoundName: 'BansheeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'BansheeYes1.wav,BansheeYes2.wav,BansheeYes3.wav,BansheeYes4.wav,BansheeYes5.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 3,
          SoundName: 'BansheeYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BansheeReady1.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 4,
          SoundName: 'BansheeReady',
        },
      ],
      Warcry: [
        {
          FileNames: 'BansheeWarcry1.wav',
          DirectoryBase: 'Units\\Undead\\Banshee\\',
          Channel: 1,
          SoundName: 'BansheeWarcry',
        },
      ],
    },
  },
  {
    id: 'hprt',
    name: 'shimmeringportal',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'haro',
    name: 'arcaneobservatory',
    sounds: {
      What: [
        {
          FileNames: 'ArcaneObservatoryWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ArcaneObservatory\\',
          Channel: 1,
          SoundName: 'ArcaneObservatoryWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nbfl',
    name: 'bloodfountain',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nbsm',
    name: 'bookofsummoning',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nbt1',
    name: 'bouldertower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nbt2',
    name: 'bouldertowerupgrade',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nbwd',
    name: 'barrowden',
    sounds: {
      What: [
        {
          FileNames: 'BarrowDenWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\BarrowDens\\',
          Channel: 1,
          SoundName: 'BarrowDenWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncap',
    name: 'corruptedancientprotector',
    sounds: {
      What: [
        {
          FileNames: 'TreantWhat1.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientProtector\\',
          Channel: 1,
          SoundName: 'AncientProtectorWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'TreantYes1.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientProtector\\',
          Channel: 3,
          SoundName: 'AncientProtectorYes',
        },
      ],
      Ready: [
        {
          FileNames: 'TreantReady1.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientProtector\\',
          Channel: 4,
          SoundName: 'AncientProtectorReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'ncaw',
    name: 'corruptedancientofwar',
    sounds: {
      What: [
        {
          FileNames: 'AncientOfTheMoonWhat1.wav,AncientOfTheMoonWhat2.wav,AncientOfTheMoonWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWar\\',
          Channel: 1,
          SoundName: 'AncientOfWarWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'AncientOfTheMoonYesAttack1.wav,AncientOfTheMoonYesAttack2.wav,AncientOfTheMoonYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWar\\',
          Channel: 2,
          SoundName: 'AncientOfWarYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'AncientOfTheMoonYes1.wav,AncientOfTheMoonYes2.wav,AncientOfTheMoonYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\AncientOfWar\\',
          Channel: 3,
          SoundName: 'AncientOfWarYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncmw',
    name: 'corruptedmoonwell',
    sounds: {
      What: [
        {
          FileNames: 'MoonWellWhat1.wav',
          DirectoryBase: 'Buildings\\NightElf\\MoonWell\\',
          Channel: 1,
          SoundName: 'MoonWellWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncta',
    name: 'corruptedtreeofages',
    sounds: {
      What: [
        {
          FileNames: 'TreeOfLifeWhat1.wav,TreeOfLifeWhat2.wav,TreeOfLifeWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 1,
          SoundName: 'TreeOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TreeOfLifeYesAttack1.wav,TreeOfLifeYesAttack2.wav,TreeOfLifeYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 2,
          SoundName: 'TreeOfLifeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TreeOfLifeYes1.wav,TreeOfLifeYes2.wav,TreeOfLifeYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 3,
          SoundName: 'TreeOfLifeYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ncte',
    name: 'corruptedtreeofeternity',
    sounds: {
      What: [
        {
          FileNames: 'TreeOfLifeWhat1.wav,TreeOfLifeWhat2.wav,TreeOfLifeWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 1,
          SoundName: 'TreeOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TreeOfLifeYesAttack1.wav,TreeOfLifeYesAttack2.wav,TreeOfLifeYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 2,
          SoundName: 'TreeOfLifeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TreeOfLifeYes1.wav,TreeOfLifeYes2.wav,TreeOfLifeYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 3,
          SoundName: 'TreeOfLifeYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nctl',
    name: 'corruptedtreeoflife',
    sounds: {
      What: [
        {
          FileNames: 'TreeOfLifeWhat1.wav,TreeOfLifeWhat2.wav,TreeOfLifeWhat3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 1,
          SoundName: 'TreeOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'TreeOfLifeYesAttack1.wav,TreeOfLifeYesAttack2.wav,TreeOfLifeYesAttack3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 2,
          SoundName: 'TreeOfLifeYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'TreeOfLifeYes1.wav,TreeOfLifeYes2.wav,TreeOfLifeYes3.wav',
          DirectoryBase: 'Buildings\\NightElf\\TreeOfLife\\',
          Channel: 3,
          SoundName: 'TreeOfLifeYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndfl',
    name: 'defiledfountainoflife',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndgt',
    name: 'dalaranguardtower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndke',
    name: 'darkportalse',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndkw',
    name: 'darkportalsw',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndmg',
    name: 'demongate',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndrb',
    name: 'dragonbuilding',
    sounds: {
      What: [
        {
          FileNames: 'DragonRoostWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\DragonRoost\\',
          Channel: 1,
          SoundName: 'DragonRoostWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndt1',
    name: 'coldtower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ndt2',
    name: 'coldtowerupgrade',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nef0',
    name: 'elvenfarm0',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nef1',
    name: 'elvenfarm1',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nef2',
    name: 'elvenfarm2',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nef3',
    name: 'elvenfarm3',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nef4',
    name: 'elvenfarm4',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nef5',
    name: 'elvenfarm5',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nef6',
    name: 'elvenfarm6',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nef7',
    name: 'elvenfarm7',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nefm',
    name: 'elvenfarm',
    sounds: {
      What: [
        {
          FileNames: 'ElvenFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenFarm\\',
          Channel: 1,
          SoundName: 'ElvenFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'negf',
    name: 'earthfurytower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'negm',
    name: 'skyfurytower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'negt',
    name: 'elvenguardtower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'net1',
    name: 'energytower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'net2',
    name: 'energytowerupgrade',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfnp',
    name: 'purplefountain',
    sounds: {
      What: [
        {
          FileNames: 'FountainOfLifeWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\FountainOfLife\\',
          Channel: 1,
          SoundName: 'FountainOfLifeWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfrm',
    name: 'frostmourne',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfrt',
    name: 'fruitstand',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nft1',
    name: 'flametower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nft2',
    name: 'flametowerupgrade',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfv0',
    name: 'elvenfishingvillage0',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfv1',
    name: 'elvenfishingvillage1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfv2',
    name: 'elvenfishingvillage2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfv3',
    name: 'elvenfishingvillage3',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nfv4',
    name: 'elvenfishingvillage4',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ngob',
    name: 'gemstoneobelisk',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nhcn',
    name: 'hornofcenarius',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nheb',
    name: 'highelfbarracks',
    sounds: {
      What: [
        {
          FileNames: 'MageTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\MageTower\\',
          Channel: 1,
          SoundName: 'MageTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nico',
    name: 'icecrownobelisk',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nitb',
    name: 'treasurebox',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nmgv',
    name: 'magicvault',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nnad',
    name: 'altarofthedepths',
    sounds: {
      What: [
        {
          FileNames: 'AltarOfDepthsWhat1.wav',
          DirectoryBase: 'Buildings\\Naga\\AltarOfDepths\\',
          Channel: 1,
          SoundName: 'AltarOfDepthsWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nnfm',
    name: 'coralbed',
    sounds: {
      What: [
        {
          FileNames: 'CoralBedWhat1.wav',
          DirectoryBase: 'Buildings\\Naga\\CoralBed\\',
          Channel: 1,
          SoundName: 'CoralBedWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nnsa',
    name: 'shrineofazshara',
    sounds: {
      What: [
        {
          FileNames: 'ShrineOfAzsharaWhat1.wav',
          DirectoryBase: 'Buildings\\Naga\\ShrineOfAshjara\\',
          Channel: 1,
          SoundName: 'ShrineOfAzsharaWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nnsg',
    name: 'spawninggrounds',
    sounds: {
      What: [
        {
          FileNames: 'SpawningGroundsWhat1.wav',
          DirectoryBase: 'Buildings\\Naga\\SpawningGrounds\\',
          Channel: 1,
          SoundName: 'SpawningGroundsWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nntg',
    name: 'tidalguardian',
    sounds: {
      What: [
        {
          FileNames: 'TidalGuardianWhat1.wav',
          DirectoryBase: 'Buildings\\Naga\\TidalGuardian\\',
          Channel: 1,
          SoundName: 'TidalGuardianWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nntt',
    name: 'templeoftides',
    sounds: {
      What: [
        {
          FileNames: 'TempleOfTidesWhat1.wav',
          DirectoryBase: 'Buildings\\Naga\\TempleofTides\\',
          Channel: 1,
          SoundName: 'TempleOfTidesWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'npgf',
    name: 'pigfarm',
    sounds: {
      What: [
        {
          FileNames: 'PigFarmWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\PigFarm\\',
          Channel: 1,
          SoundName: 'PigFarmWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'npgr',
    name: 'powergenerator',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nshr',
    name: 'shrine',
    sounds: {
      What: [
        {
          FileNames: 'SacrificialAltarWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\SacrificialAltar\\',
          Channel: 1,
          SoundName: 'SacrificialAltarWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ntt1',
    name: 'deathtower',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ntx2',
    name: 'deathtowerupgrade',
    sounds: {
      What: [
        {
          FileNames: 'ElvenGuardTowerWhat1.wav',
          DirectoryBase: 'Buildings\\Other\\ElvenGuardTower\\',
          Channel: 1,
          SoundName: 'ElvenGuardTowerWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvr0',
    name: 'ruinedelvenfishingvillage0',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvr1',
    name: 'ruinedelvenfishingvillage1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nvr2',
    name: 'ruinedelvenfishingvillage2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwc1',
    name: 'wyverncage1',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nwc2',
    name: 'wyverncage2',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'ocbw',
    name: 'chaosorcburrow',
    sounds: {
      What: [
        {
          FileNames: 'OrcBurrowWhat1.wav',
          DirectoryBase: 'Buildings\\Orc\\TrollBurrow\\',
          Channel: 1,
          SoundName: 'TrollBurrowWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nzin',
    name: 'zoneindicator',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nbse',
    name: 'bindstonese',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nbsw',
    name: 'bindstonesw',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'zcso',
    name: 'chaosspaceorc',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'zhyd',
    name: 'hydralisk',
    sounds: {
      What: [
        {
          FileNames: 'HydraliskWhat1.wav,HydraliskWhat2.wav',
          DirectoryBase: 'Units\\Critters\\Hydralisk\\',
          Channel: 1,
          SoundName: 'HydraliskWhat',
        },
      ],
      Pissed: [],
      YesAttack: [
        {
          FileNames: 'HydraliskYesAttack1.wav,HydraliskYesAttack2.wav',
          DirectoryBase: 'Units\\Critters\\Hydralisk\\',
          Channel: 2,
          SoundName: 'HydraliskYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'HydraliskYes1.wav,HydraliskYes2.wav,HydraliskYes3.wav',
          DirectoryBase: 'Units\\Critters\\Hydralisk\\',
          Channel: 3,
          SoundName: 'HydraliskYes',
        },
      ],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'zjug',
    name: 'orcjuggernaut',
    sounds: {
      What: [
        {
          FileNames: 'BoatWhat1.wav,BoatWhat2.wav,BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatWhat',
        },
      ],
      Pissed: [],
      YesAttack: [],
      Yes: [
        {
          FileNames: 'BoatYes1.wav,BoatYes2.wav,BoatYes3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 1,
          SoundName: 'BoatYes',
        },
      ],
      Ready: [
        {
          FileNames: 'BoatWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\HumanTransportShip\\',
          Channel: 4,
          SoundName: 'BoatReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'zmar',
    name: 'marine',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'zshv',
    name: 'theshoveler',
    sounds: {
      What: [
        {
          FileNames: 'KoboldWhat1.wav,KoboldWhat2.wav,KoboldWhat3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldWhat',
        },
      ],
      Pissed: [
        {
          FileNames: 'KoboldPissed1.wav,KoboldPissed2.wav,KoboldPissed3.wav,KoboldPissed4.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 1,
          SoundName: 'KoboldPissed',
        },
      ],
      YesAttack: [
        {
          FileNames: 'KoboldYesAttack1.wav,KoboldYesAttack2.wav,KoboldYesAttack3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 2,
          SoundName: 'KoboldYesAttack',
        },
      ],
      Yes: [
        {
          FileNames: 'KoboldYes1.wav,KoboldYes2.wav,KoboldYes3.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 3,
          SoundName: 'KoboldYes',
        },
      ],
      Ready: [
        {
          FileNames: 'KoboldReady1.wav',
          DirectoryBase: 'Units\\Creeps\\Kobold\\',
          Channel: 4,
          SoundName: 'KoboldReady',
        },
      ],
      Warcry: [],
    },
  },
  {
    id: 'zsmc',
    name: 'sammycube',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'zzrg',
    name: 'zergling',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
  {
    id: 'nzlc',
    name: 'lichking',
    sounds: {
      What: [],
      Pissed: [],
      YesAttack: [],
      Yes: [],
      Ready: [],
      Warcry: [],
    },
  },
];

// Sounds of custom units
addCustomUnitSound(UNIT_HarvestGolem, UNIT_GoblinShredder);

/**
 * Functions
 */
const unitSoundsMap = new Map(unitSounds.map((s) => [FourCC(s.id), s]));
const unitSoundCache = new Map<string, string[]>();

export function getUnitSounds(unitTypeId: number, ...soundTypes: SoundType[]): string[] {
  const key = `${unitTypeId},${soundTypes.join(',')}`;
  if (!unitSoundCache.has(key)) {
    if (!unitSoundsMap.has(unitTypeId)) return [];
    const ss = unitSoundsMap.get(unitTypeId);
    const sounds: SoundGroup[] = [];
    if (ss) {
      for (const st of soundTypes) {
        sounds.push(...ss.sounds[st]);
      }
    }

    const result = sounds.flatMap((s) => s.FileNames.split(',').flatMap((path) => s.DirectoryBase + path));
    unitSoundCache.set(key, result);
    return result;
  }
  return unitSoundCache.get(key);
}

export function addCustomUnitSound(unit: UNIT_TYPE, baseUnit: UNIT_TYPE): void {
  const customUnitSound: UnitSounds = {
    ...unitSoundsMap.get(baseUnit.id),
    id: unit.code,
  };

  unitSounds.push(customUnitSound);
  unitSoundsMap.set(unit.id, customUnitSound);
}
