// eslint-disable-next-line max-classes-per-file
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
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

export class AutoPanCamera {
  static selectedUnit: Unit;

  static enabled = systemConfig.defaultAutoPanCamera;

  static timer: Timer = null;

  static register() {
    const button = new ToggleButton(
      Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0),
      this.enabled,
      (isEnabled) => {
        if (isEnabled) {
          this.enable();
        } else {
          this.disable();
        }
      },
    );

    onChatCommand('-autocam 1', true, () => button.change(true), 'UI & scaling', 'Enable automatic camera control.');
    onChatCommand('-autocam 0', true, () => button.change(false), 'UI & scaling', 'Disable automatic camera control.');

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
      if (this.enabled) {
        if (this.selectedUnit !== bestUnit) {
          this.selectedUnit = bestUnit;
          SetCameraField(CAMERA_FIELD_ROTATION, GetRandomDirectionDeg(), 0.5);
          PanCameraToTimedForPlayer(mainPlayer.handle, this.selectedUnit.x, this.selectedUnit.y, 0.5);
        }

        SelectUnitForPlayerSingle(this.selectedUnit.handle, mainPlayer.handle);
      }
    });

    if (this.enabled) {
      this.enable();
    }
  }

  static enable() {
    this.enabled = true;
    if (this.selectedUnit) {
      SelectUnitForPlayerSingle(this.selectedUnit.handle, mainPlayer.handle);
    }

    if (this.timer) {
      this.timer.pause();
      this.timer.destroy();
    }
    this.timer = setIntervalIndefinite(0.5, () => {
      if (this.selectedUnit) {
        PanCameraToTimedForPlayer(mainPlayer.handle, this.selectedUnit.x, this.selectedUnit.y, 0.75);
      }
    });
  }

  static disable() {
    this.enabled = false;
    if (this.timer) {
      this.timer.pause();
      this.timer.destroy();
      this.timer = null;
    }
    ResetToGameCamera(1);
  }
}

class ToggleButton {
  private button: Frame;

  constructor(parent: Frame, private isActive: boolean, private onChange: (newValue: boolean) => unknown) {
    // Create a button frame
    this.button = Frame.createType('ToggleButton', parent, 0, 'GLUETEXTBUTTON', 'ScriptDialogButton');
    this.button.setAbsPoint(FRAMEPOINT_TOPLEFT, 0, 0.575);
    this.button.setSize(0.037, 0.0325);
    this.button.setText(isActive ? 'ON' : 'OFF');

    // Create a trigger for the button click event
    buildTrigger((t) => {
      t.triggerRegisterFrameEvent(this.button, FRAMEEVENT_CONTROL_CLICK);
      t.addAction(() => this.onClick());
    });
  }

  change(newValue: boolean) {
    this.isActive = newValue;
    this.updateButtonText();
    this.onChange(this.isActive);
  }

  // Handle the button click event
  private onClick(): void {
    this.isActive = !this.isActive;
    this.change(this.isActive);
  }

  // Update the button text based on its state
  private updateButtonText(): void {
    if (this.isActive) {
      this.button.setText('ON');
    } else {
      this.button.setText('OFF');
    }
  }
}