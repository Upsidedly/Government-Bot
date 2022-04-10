import { MessageEmbed, TextChannel } from 'discord.js';
import { command, ready } from './command.js';
import { resolve } from 'jsonsided';
import { MongoClient } from 'mongodb';
import ms from 'ms';
import { readdir } from 'fs/promises';
import { client, massreact, random, wait } from './stuff.js';

client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag} in ${client.guilds.cache.size} server${client.guilds.cache.size === 1 ? '' : 's'}.`)
    const channel = (client.channels.cache.get('959154714480611401')) as TextChannel
})

for (const file of (await readdir('./dist/economy/')).filter(f => f.endsWith('.js'))) {
    const cmd = (await import(`./economy/${file}`)).default
    command(cmd.name, cmd.aliases, cmd.execute)
}


await client.login((await resolve('./config.json')).token);
await ready(client);