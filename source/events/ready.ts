import { TextChannel } from "discord.js"
import { client } from "../legacy/stuff.js"

client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag} in ${client.guilds.cache.size} server${client.guilds.cache.size === 1 ? '' : 's'}.`)
    const channel = (client.channels.cache.get('959154714480611401')) as TextChannel
})