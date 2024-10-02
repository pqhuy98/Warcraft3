import { Sound } from 'w3ts';

export function dialogue(filePath: string, speakerName: string, text: string): Sound {
  const sound = Sound.create(filePath, false, false, false, 1, 1, 'DefaultEAXON');
  sound.setChannel(0);
  sound.setVolume(127);
  sound.dialogueSpeakerNameKey = speakerName;
  sound.dialogueTextKey = text;
  return sound;
}

export interface DialogueData {
  questName: string;
  dialogues: {
    speaker: string;
    text: string;
    fileName: string;
  }[]
}

export function getDialogues(dialogueData: DialogueData): Sound[] {
  const { questName, dialogues } = dialogueData;
  const sounds: Sound[] = [];
  for (const { speaker, text, fileName } of dialogues) {
    sounds.push(dialogue(`QuestSounds\\__refined\\${questName}\\${fileName}`, speaker, text));
  }
  return sounds;
}
