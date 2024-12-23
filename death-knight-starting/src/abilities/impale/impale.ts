import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { log } from 'lib/log';
import { setIntervalIndefinite } from 'lib/trigger';
import { createDummy, makeFlyable } from 'lib/unit';
import { Timer, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

interface Data {
  caster: Unit
  target: Unit
  tossDurationS: number
  maxHeight: number
  stunDurationS: number
  elapseS: number
  initialVelocity: number
  gravity: number
  onComplete: () => unknown
}

const stunSystemAbilityId = FourCC('A00M');

export class Impale {
  static dataInstances: Data[] = [];

  static affectedUnits = new Set<Unit>();

  static intervalS = 0.06;

  static timer: Timer;

  static register(): void {
    onChatCommand('-imp', true, () => log('Impale list', this.dataInstances.length), 'Debug', 'Print current number of impaled units.');
  }

  static loop(): void {
    for (let i = 0; i < this.dataInstances.length; i++) {
      const data = this.dataInstances[i];
      data.elapseS += this.intervalS;
      const t = data.elapseS;

      const height = data.initialVelocity * t - 0.5 * data.gravity * t * t;

      if (height > 0 && data.elapseS < data.tossDurationS) {
        data.target.setflyHeight(height, 0);
      } else {
        data.target.setflyHeight(0, 0);
        this.affectedUnits.delete(data.target);
        const last = this.dataInstances.pop();
        if (i < this.dataInstances.length) {
          this.dataInstances[i] = last;
        }
        data.onComplete();
      }
    }
    if (this.dataInstances.length === 0) {
      this.timer.pause();
      this.timer.destroy();
      this.timer = null;
    }
  }

  static create({
    caster, target, tossDurationS, maxHeight, stunDurationS,
    onStart, onComplete,
  }: {
    caster: Unit, target: Unit, tossDurationS: number, maxHeight: number, stunDurationS: number,
    onStart: () => unknown, onComplete: () => unknown
  }): void {
    if (Impale.affectedUnits.has(target)) return;
    Impale.affectedUnits.add(target);

    makeFlyable(target);

    const t_up = tossDurationS / 2;
    const g = (8 * maxHeight) / (tossDurationS * tossDurationS);
    const v0 = g * t_up;

    Impale.dataInstances.push({
      caster,
      target,
      tossDurationS,
      maxHeight,
      stunDurationS,
      elapseS: 0,
      initialVelocity: v0,
      gravity: g,
      onComplete,
    });
    onStart();

    const dummy = createDummy(caster.owner, target.x, target.y, null, 0.1);
    dummy.addAbility(stunSystemAbilityId);
    BlzSetAbilityRealLevelField(dummy.getAbility(stunSystemAbilityId), ABILITY_RLF_DURATION_HERO, 0, stunDurationS + tossDurationS);
    BlzSetAbilityRealLevelField(dummy.getAbility(stunSystemAbilityId), ABILITY_RLF_DURATION_NORMAL, 0, stunDurationS + tossDurationS);
    dummy.issueTargetOrder(OrderId.Thunderbolt, target);

    if (this.timer === null) {
      this.timer = setIntervalIndefinite(this.intervalS, () => this.loop());
    }
  }
}
