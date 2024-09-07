import { colorize } from 'lib/colorize';
import { buildTrigger, setTimeout } from 'lib/trigger';
import { MapPlayer, Quest, Trigger } from 'w3ts';

export const commandCategories = ['GameControl', 'UI', 'Debug'] as const;
export type CommandCategory = typeof commandCategories[number]

const commandHelpData: Record<CommandCategory, {
  name: string
  description: string
  icon: string
  map: Map<string, string>

}> = {
  GameControl: {
    name: 'Game Settings',
    description: "Commands that change game's settings or influence gameplay.",
    icon: 'ReplaceableTextures\\CommandButtons\\BTNEngineeringUpgrade.blp',
    map: new Map(),
  },
  UI: {
    name: 'UI',
    description: "Commands that affect game's UIs.",
    icon: 'ReplaceableTextures\\CommandButtons\\BTNSentryWard.blp',
    map: new Map(),
  },
  Debug: {
    name: 'Debug',
    description: 'Commands that print debug information useful for the map developer.',
    icon: 'ReplaceableTextures\\CommandButtons\\BTNSelectHeroOn.blp',
    map: new Map(),
  },
};

export function onChatCommand(text: string, exactMatch: boolean, callback: (text: string) => unknown, catetegory?: CommandCategory, description?: string): Trigger {
  if (catetegory && description) {
    commandHelpData[catetegory].map.set(text, `${exactMatch ? '(exact)' : '(substring)'} ${description}`);
  }
  return buildTrigger((t) => {
    const phrase = exactMatch
      ? text
      : text.includes(' ') ? `${text.split(' ')[0]} ` : text;
    t.registerPlayerChatEvent(MapPlayer.fromLocal(), phrase, exactMatch);
    t.addAction(() => callback(GetEventPlayerChatString()));
  });
}

export function createCommandHelpQuests() {
  setTimeout(0.1, () => {
    for (const category of commandCategories) {
      const {
        name, description, icon,
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
      helpQuest.required = false;
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
