export function createDialogSound(filePath: string, speakerName: string, text: string): sound {
  const sound = CreateSound(filePath, false, false, false, 1, 1, 'DefaultEAXON');
  SetSoundChannel(sound, 0);
  SetSoundVolumeBJ(sound, 127);
  SetDialogueSpeakerNameKey(sound, speakerName);
  SetDialogueTextKey(sound, text);
  return sound;
}
