import { MessageEmbed } from "discord.js";
import { random } from "../../legacy/stuff.js";
import { command } from "../../types.js";

export default {
    name: 'ping',
    aliases: ['pong'],

    async execute(msg, args) {
        msg.reply({ embeds: [
            new MessageEmbed()
                .setTitle('Pong!')
                .setFields([
                    { name: 'Latency', value: `${Date.now() - msg.createdTimestamp}ms` },
                    { name: 'API Latency', value: `${Math.round(msg.client.ws.ping)}ms` }
                ])
                .setColor([random(200, 255), random(200, 255), random(200, 255)])
        ]})
    }
} as command