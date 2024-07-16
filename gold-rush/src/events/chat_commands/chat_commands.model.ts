import { colorize } from 'lib/colorize';
import { buildTrigger, setTimeout } from 'lib/trigger';
import { MapPlayer, Quest, Trigger } from 'w3ts';

export const commandCategories = ['GameControl', 'UI & scaling', 'Debug'] as const;
export type CommandCategory = typeof commandCategories[number]

const commandHelpData: Record<CommandCategory, {
  name: string
  description: string
  icon: string
  map: Map<string, string>
  questType: 'main' | 'optional'

}> = {
  GameControl: {
    name: 'Game Settings',
    description: "Commands that change game's settings or influence gameplay.",
    icon: 'ReplaceableTextures\\CommandButtons\\BTNEngineeringUpgrade.blp',
    map: new Map(),
    questType: 'main',
  },
  'UI & scaling': {
    name: 'UI & scaling',
    description: "Commands that change game's unit scaling and UIs. Unit scaling changes some abilities' area of effects.",
    icon: 'ReplaceableTextures\\CommandButtons\\BTNSentryWard.blp',
    map: new Map(),
    questType: 'main',
  },
  Debug: {
    name: 'Debug',
    description: 'Commands that print debug information useful for the map developer.',
    icon: 'ReplaceableTextures\\CommandButtons\\BTNSelectHeroOn.blp',
    map: new Map(),
    questType: 'optional',
  },
};

export function onChatCommand(text: string, exactMatch: boolean, callback: (text: string) => unknown, catetegory: CommandCategory, description: string): Trigger {
  commandHelpData[catetegory].map.set(text, `${exactMatch ? '(exact)' : '(substring)'} ${description}`);
  return buildTrigger((t) => {
    t.registerPlayerChatEvent(MapPlayer.fromLocal(), exactMatch ? text : text.split(' ')[0], exactMatch);
    t.addAction(() => callback(GetEventPlayerChatString()));
  });
}

export function createCommandHelpQuests() {
  setTimeout(0.1, () => {
    for (const category of commandCategories) {
      const {
        name, description, icon, questType,
      } = commandHelpData[category];
      const helpQuest = Quest.create();
      helpQuest.setTitle(`${name} chat commands`);
      helpQuest.setIcon(icon);
      helpQuest.setDescription(
        [
          description,
          ...getHelpMessage(category),
        ].join('|n|n'),
      );
      helpQuest.discovered = true;
      helpQuest.enabled = true;
      helpQuest.required = questType === 'main';
    }
  });
}

function getHelpMessage(category: CommandCategory) {
  const result: string[] = [];
  for (const key of commandHelpData[category].map.keys()) {
    result.push(`${colorize.yellow(key)}|n${commandHelpData[category].map.get(key)}`);
  }
  return result;
}
