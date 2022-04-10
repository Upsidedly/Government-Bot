import { Client, EmojiResolvable, Intents, Message } from 'discord.js';

export const client = new Client({ intents: new Intents(32767) })

export function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export async function massreact(msg: Message, reactions: EmojiResolvable[]) {
    for (const reaction of reactions) {
        await msg.react(reaction)
    }
}

export const wait = (await import('util')).promisify(setTimeout);