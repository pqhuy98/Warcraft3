import { Loc } from 'lib/location';

export enum InterestingEventType {
  AllyHeroAttack = 0,
  AllyBuildingAttacked = 1
}

export interface InterestingEvent {
  location: Loc
  type: InterestingEventType
}
