import { Client, Collection, Message, TextChannel } from "discord.js";
import { resolve } from "jsonsided";

const commands = new Collection<string, [(msg: Message, args: string[], alias: string) => unknown, string[]]>()

export function command(name: string, aliases: string[], fn: (msg: Message, args: string[], alias: string) => unknown) {
    commands.set(name.toLowerCase().trim(), [fn, aliases])
    for (const alias of aliases) {
        commands.set(alias.toLowerCase().trim(), [fn, aliases.concat(name).filter(a => a !== alias)])
    }
}

export function newCommand(options: { name: string, aliases: string[], execute: (msg: Message, args: string[], alias: string) => unknown}) {
    command(options.name, options.aliases, options.execute)
}

export async function ready(client: Client) {
    const { prefix } = await resolve('./config.json');

    client.on('messageCreate', (msg) => {
        if (!msg.content.startsWith(prefix)) return

        const args = msg.content.split(/ +/);
        const n = args.shift()!.slice(prefix.length).trim().toLowerCase();

        if (!commands.has(n)) return

        commands.get(n)![0](msg, args, n)
    })
}