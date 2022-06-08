import { Unit, Group, Timer } from 'w3ts';

export interface Store {
    master: Unit
    abilityId: number

    revivedGroup: Group
    revivedGroupHidden: Group
    activateUntil: Timer
    activated: boolean

    revivedDuration: number
    activatedDuration: number
}
