import { Sound } from 'w3ts';

export function dialogue(filePath: string, speakerName: string, text: string): Sound {
  const sound = Sound.create(filePath, false, false, false, 1, 1, 'DefaultEAXON');
  sound.setChannel(0);
  sound.setVolume(127);
  sound.dialogueSpeakerNameKey = speakerName;
  sound.dialogueTextKey = text;
  return sound;
}
