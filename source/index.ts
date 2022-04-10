import { TextChannel } from 'discord.js';
import { command, ready } from './command.js';
import { resolve } from 'jsonsided';
import { MongoClient } from 'mongodb';
import { readdir } from 'fs/promises';
import { client, } from './legacy/stuff.js';

for (const file of (await readdir('./dist/events/'))) {
    await import(`./events/${file}`);
}

for (const file of (await readdir('./dist/economy/')).filter(f => f.endsWith('.js'))) {
    const cmd = (await import(`./economy/${file}`)).default
    command(cmd.name, cmd.aliases, cmd.execute)
}

for (const dir of await readdir('./dist/commands/')) {
    for (const file of (await readdir(`./dist/commands/${dir}`)).filter(f => f.endsWith('.js'))) {
        const cmd = (await import(`./commands/${dir}/${file}`)).default
        command(cmd.name, cmd.aliases, cmd.execute)
    }
}

await import('./legacy/commands.js');
await client.login((await resolve('./config.json')).token);
await ready(client);