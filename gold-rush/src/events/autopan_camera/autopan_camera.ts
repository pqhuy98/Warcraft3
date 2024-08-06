// eslint-disable-next-line max-classes-per-file
import { mainPlayer } from 'lib/constants';
import { temp } from 'lib/location';
import { systemConfig } from 'lib/systems/system-config';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import { getUnitsFromGroup, GetUnitsInRangeOfXYMatching } from 'lib/unit';
import { shuffleArray } from 'lib/utils';
import {
  Frame, Rectangle, Timer, Unit,
} from 'w3ts';

function getScore(unit: Unit): number {
  if (!unit.isAlive()) return 0;

  const nearbyEnemies = GetUnitsInRangeOfXYMatching(
    1000,
    unit,
    () => Unit.fromFilter().isEnemy(unit.owner),
  ).length;

  const nearbyAllies = GetUnitsInRangeOfXYMatching(
    1000,
    unit,
    () => Unit.fromFilter().isAlly(unit.owner),
  ).length;

  return nearbyEnemies * 2 + nearbyAllies * 1;
}

type State = 'off' | 'follow-one' | 'follow-random'

export class AutoPanCamera {
  static selectedUnit: Unit;

  static state: State = systemConfig.defaultAutoPanCamera as State;

  static timer: Timer = null;

  static register() {
    new ToggleButton(
      Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0),
      this.state,
      (state) => {
        if (state === 'off') {
          this.updateState('follow-random');
        } else if (state === 'follow-random') {
          this.updateState('follow-one');
        } else if (state === 'follow-one') {
          this.updateState('off');
        }
        return this.state;
      },
    );

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SELECTED);
      t.addAction(() => {
        this.selectedUnit = Unit.fromEvent();
      });
    });

    setIntervalIndefinite(10, () => {
      const heroes = GetUnitsInRectMatching(
        temp(Rectangle.getWorldBounds()).handle,
        Condition(() => Unit.fromFilter().isHero()
          && Unit.fromFilter().isAlive()
          && !Unit.fromFilter().isIllusion()),
      );

      const units = shuffleArray(getUnitsFromGroup(heroes));
      DestroyGroup(heroes);

      let bestUnit = units[0];
      let bestScore = getScore(bestUnit);

      for (const unit of units) {
        const unitScore = getScore(unit);
        if (bestScore < unitScore) {
          bestUnit = unit;
          bestScore = unitScore;
        }
      }
      if (this.state === 'follow-random') {
        if (this.selectedUnit !== bestUnit) {
          this.selectedUnit = bestUnit;
          SetCameraField(CAMERA_FIELD_ROTATION, GetRandomDirectionDeg(), 0.5);
          PanCameraToTimedForPlayer(mainPlayer.handle, this.selectedUnit.x, this.selectedUnit.y, 0.5);
        }

        SelectUnitForPlayerSingle(this.selectedUnit.handle, mainPlayer.handle);
      }
    });

    this.updateState(this.state);
  }

  static updateState(state: State) {
    this.state = state;
    if (this.state !== 'off' && this.selectedUnit) {
      SelectUnitForPlayerSingle(this.selectedUnit.handle, mainPlayer.handle);
    }

    if (this.timer) {
      this.timer.pause();
      this.timer.destroy();
      this.timer = null;
    }
    if (this.state !== 'off') {
      this.timer = setIntervalIndefinite(0.5, () => {
        if (this.selectedUnit) {
          PanCameraToTimedForPlayer(mainPlayer.handle, this.selectedUnit.x, this.selectedUnit.y, 0.75);
        }
      });
    } else {
      ResetToGameCamera(1);
    }
  }
}

class ToggleButton {
  private button: Frame;

  constructor(parent: Frame, private state: State, private onClick: (newValue: State) => State) {
    // Create a button frame
    this.button = Frame.createType('ToggleButton', parent, 0, 'GLUETEXTBUTTON', 'ScriptDialogButton');
    this.button.setAbsPoint(FRAMEPOINT_TOPLEFT, 0, 0.575);
    this.button.setSize(0.037, 0.0325);
    this.updateButtonText();

    // Create a trigger for the button click event
    buildTrigger((t) => {
      t.triggerRegisterFrameEvent(this.button, FRAMEEVENT_CONTROL_CLICK);
      t.addAction(() => this.click());
    });
  }

  // Handle the button click event
  private click(): void {
    this.state = this.onClick(this.state);
    this.updateButtonText();
  }

  // Update the button text based on its state
  private updateButtonText(): void {
    if (this.state === 'off') {
      this.button.setText('OFF');
    } else if (this.state === 'follow-one') {
      this.button.setText('ON');
    } else if (this.state === 'follow-random') {
      this.button.setText('ON?');
    }
  }
}
