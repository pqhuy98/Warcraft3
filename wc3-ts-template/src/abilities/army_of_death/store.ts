import { Group, Timer, Unit } from 'w3ts';

export interface State {
    master: Unit
    abilityId: number

    revivedGroup: Group
    revivedGroupHidden: Group
    activateUntil: Timer
    activated: boolean

    revivedDuration: number
    activatedDuration: number
}
