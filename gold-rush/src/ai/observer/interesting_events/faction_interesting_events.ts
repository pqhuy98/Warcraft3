import { globalUnits } from 'lib/constants';
import { TimestampedQueue } from 'lib/data_structures/timestamped_queue';
import { getUnitXY } from 'lib/location';
import { log } from 'lib/log';
import { DamageObserver } from 'lib/systems/damage_observer';
import { getTimeS, onChatLocal } from 'lib/trigger';
import { MapPlayer } from 'w3ts';

import { InterestingEvent, InterestingEventType } from './interesting_events.model';

export class FactionInterestingEvents {
  private static recentInterestingEventsLight: TimestampedQueue<InterestingEvent> = new TimestampedQueue({
    itemExpireS: 10,
  });

  private static recentInterestingEventsDark: TimestampedQueue<InterestingEvent> = new TimestampedQueue({
    itemExpireS: 10,
  });

  static register() {
    const playerLight = globalUnits.fountainLight.owner;
    const playerDark = globalUnits.fountainDark.owner;

    DamageObserver.subscribeBuildingDamaged((victim) => {
      let queue: TimestampedQueue<InterestingEvent>;
      if (victim.getOwner().isPlayerAlly(playerLight)) queue = this.recentInterestingEventsLight;
      if (victim.getOwner().isPlayerAlly(playerDark)) queue = this.recentInterestingEventsDark;
      if (!queue) return;

      queue.push({
        timestamp: getTimeS(),
        value: {
          location: getUnitXY(victim),
          type: InterestingEventType.AllyBuildingAttacked,
        },
      });
    });

    DamageObserver.subscribeHeroDamaging((_victim, attacker) => {
      let queue: TimestampedQueue<InterestingEvent>;
      if (attacker.getOwner().isPlayerAlly(playerLight)) queue = this.recentInterestingEventsLight;
      if (attacker.getOwner().isPlayerAlly(playerDark)) queue = this.recentInterestingEventsDark;
      if (!queue) return;

      queue.push({
        timestamp: getTimeS(),
        value: {
          location: getUnitXY(attacker),
          type: InterestingEventType.AllyHeroAttack,
        },
      });
    });

    onChatLocal('-qs', true, () => {
      log('Queue size (light):', this.recentInterestingEventsLight.getValidLength(), this.recentInterestingEventsLight.getTrueLength());
      log('Queue size (dark):', this.recentInterestingEventsDark.getValidLength(), this.recentInterestingEventsDark.getTrueLength());
    });
  }

  static getRecentInterestingEvents(player: MapPlayer, limit?: number): InterestingEvent[] {
    const playerLight = globalUnits.fountainLight.owner;
    const playerDark = globalUnits.fountainDark.owner;
    if (player.isPlayerAlly(playerLight)) {
      return this.recentInterestingEventsLight.get(limit).map((item) => item.value);
    }
    if (player.isPlayerAlly(playerDark)) {
      return this.recentInterestingEventsDark.get(limit).map((item) => item.value);
    }
    return [];
  }
}