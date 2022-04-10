import { Message } from "discord.js"

export type command = {
    name: string,
    aliases: string[],
    execute: (msg: Message, args: string[], alias: string) => unknown
}