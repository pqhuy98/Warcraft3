import { disableInteractSound, enableInteractSound, setAttention } from 'lib/systems/unit_interaction';
import {
  Effect, sleep, Sound, Unit,
} from 'w3ts';

import { isLocInScreen } from './camera';
import { colorize } from './colorize';
import { MODEL_Chat_Bubble } from './constants';
import { cameraCenter, Loc, tempLocation } from './location';
import { UNIT_TYPE } from './resources/war3-units';
import { Flag, setUnitFlag } from './systems/unit_user_data_flag';
import { createDialogueTextTag } from './texttag';

/**
 * @param options.volumeGroupAdjustment
 */
export async function playSpeech(unit: Unit, sound: Sound, target?: Unit, options?: {
  ignoreVolumeGroupAdjustment?: boolean
  disableInteraction?: boolean
  isFloatText?: boolean
}): Promise<void> {
  if (target) {
    setAttention(unit, target);
  }
  // white circle on ground
  UnitAddIndicator(
    unit.handle,
    bj_TRANSMISSION_IND_RED,
    bj_TRANSMISSION_IND_BLUE,
    bj_TRANSMISSION_IND_GREEN,
    bj_TRANSMISSION_IND_ALPHA,
  );

  const shouldDisableInteraction = !options || options.disableInteraction;
  if (shouldDisableInteraction) {
    disableInteractSound(unit);
    setUnitFlag(unit, Flag.UNBREAKABLE_ATTENTION, true);
  }

  const shouldSetVolumeGroup = !options || !options.ignoreVolumeGroupAdjustment;
  if (shouldSetVolumeGroup) {
    SetSpeechVolumeGroupsBJ();
  }
  const speakEffect = Effect.createAttachment(MODEL_Chat_Bubble, unit, 'overhead');

  PlayDialogueFromSpeakerEx(bj_FORCE_ALL_PLAYERS, unit.handle, unit.typeId, sound.handle, bj_TIMETYPE_ADD, 0, false);
  let isFloatText = !options || !options.ignoreVolumeGroupAdjustment;
  if (bj_cineModeAlreadyIn) isFloatText = false;
  if (!isLocInScreen(unit)) isFloatText = false;

  if (isFloatText) {
    ClearTextMessages();
  }
  // sound.start();
  const durationS = sound.duration / 1000;

  const speechText = sound.dialogueTextKey;
  const speakerName = sound.dialogueSpeakerNameKey;
  if (speechText && speakerName && isFloatText) {
    createDialogueTextTag(`${colorize.yellow(speakerName)}: ${speechText}`, unit, durationS);
  }

  await sleep(durationS);
  speakEffect.destroy();

  if (shouldSetVolumeGroup) {
    VolumeGroupReset();
  }
  if (shouldDisableInteraction) {
    setUnitFlag(unit, Flag.UNBREAKABLE_ATTENTION, false);
    enableInteractSound(unit);
  }
}

/**
 * @param options.volumeGroupAdjustment
 */
export async function playSpeechUnitType(unitType: UNIT_TYPE, sound: Sound, options?: {
  ignoreVolumeGroupAdjustment?: boolean
}): Promise<void> {
  const shouldSetVolumeGroup = !options || !options?.ignoreVolumeGroupAdjustment;
  if (shouldSetVolumeGroup) {
    SetSpeechVolumeGroupsBJ();
  }

  const speechText = sound.dialogueTextKey;
  const speakerName = sound.dialogueSpeakerNameKey;
  if (speechText && speakerName) {
    PlayDialogueFromSpeakerTypeEx(bj_FORCE_ALL_PLAYERS, GetLocalPlayer(), unitType.id, tempLocation(cameraCenter()), sound.handle, bj_TIMETYPE_ADD, 0, false);
  }

  await sleep(sound.duration / 1000);

  if (shouldSetVolumeGroup) {
    VolumeGroupReset();
  }
}

export async function playSoundIsolate(
  sound: Sound,
): Promise<void> {
  sound.stop(false, false);
  SetMusicVolume(0);
  sound.start();
  await sleep(sound.duration / 1000);
  SetMusicVolume(100);
}

export function playGlobalSound(path: string): void {
  const snd = Sound.create(path, false, false, false, 1, 1, 'DefaultEAXON');
  snd.start();
  snd.killWhenDone();
}

export async function play3dSound(path: string, loc: Loc, volume = 127): Promise<void> {
  const snd = Sound.create(path, false, false, false, 1, 1, 'DefaultEAXON');
  snd.setVolume(volume);
  snd.setPosition(loc.x, loc.y, 0);
  snd.start();
  snd.killWhenDone();
  await sleep(snd.duration / 1000);
}
