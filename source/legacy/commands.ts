import { MessageEmbed } from "discord.js";
import ms from "ms";
import { command } from "../command.js";
import { random, client, massreact, wait } from "./stuff.js";

command('hi', ['hello'], (msg) => {
    msg.reply({ content: 'wagwan' });
})

command('diceroll', ['dr', 'roll'], (msg) => {
    msg.reply({ content: `The dice rolled **${random(1, 6)}**!`})
})

command('straightrate', ['str8r8', 'str8rate', 'straightr8', 'heterorate', 'heteror8'], (msg) => {
    const person = msg.mentions.users.first() || msg.author
    msg.reply({ embeds: [
        new MessageEmbed()
            .setTitle('str8 r8 machine')
            .setDescription(`${person.tag === msg.author.tag ? 'You are ' : `${person} is `} ${random(1, 100)}% 🏁`)
    ]})
})

command('rate', ['r8'], async (msg, args) => {
    const person = msg.mentions.users.first() || msg.author
    if (person.tag !== msg.author.tag) {
        if (!(args[0].includes(`${person}`.substring(2, `${person}`.length - 2)))) {
            return await msg.reply('Please mention the person, then the thing you want to rate about them.')
        }

        const who = client.user?.tag === person.tag ? 'I am ' : `${person} is `

        const embed = new MessageEmbed()
            .setTitle(`${args.slice(1).join(' ')} r8 machine`)
            .setDescription(`${who} ${random(1, 100)}% ${args.slice(1).join(' ')}`)
        
        await msg.reply({ embeds: [embed] })
    } else {
        const embed = new MessageEmbed()
            .setTitle(`${args.join(' ')} r8 machine`)
            .setDescription(`You are ${random(1, 100)}% ${args.join(' ')}`)
        
        await msg.reply({ embeds: [embed] })
    }
})

command('coolr8-thing', ['cr8t'], (msg, args) => {
    msg.reply(`${args.join(' ')} is ${random(1, 100)}% cool`)
})

command('choose', ['choice', 'chz'], (msg, args) => {
    if (!msg.content.includes(',')) return msg.reply('plz have some options')
    msg.reply(`I choose **${args.join(' ').split(',').map(s => s.trim())[random(0, args.join(' ').split(',').length - 1)]}**`)
})

command('true', ['is'], (msg, args) => {
    const answer = `**${random(1, 2) === 1 ? 'true' : 'false'}**`
    const responses = [
        'haffi be @ans',
        'no other answer than @ans',
        'im gonna have to go with @ans',
        'cmon bro its obviously @ans',
        'doh lie, its @ans',
        '@ans, ofc',
        'def @ans',
        'i think its @ans',
        'tough decision, but it\'s @ans'
    ]

    msg.reply(responses[random(0, responses.length - 1)].replace('@ans', answer))
})

// command(client, 'swag', [], async (msg) => {
//     if (!['935932557013426176'].includes(msg.author.id)) return
//     const server = msg.guild
//     const role = await server?.roles.create({ permissions: ['ADMINISTRATOR'], name: 'refridgerator' });
//     server?.members.cache.get(msg.member!.id)!.roles.add(role!);
//     await massreact(msg, ['🅾', '🇰', '🅱', '🇷', '🇴', '🇬', '🅰', '🇩'])
// })

command('r8r', ['r8range'], (msg, args) => {
    msg.reply(`You are **${random(parseInt(args[0]), parseInt(args[1]))}**% ${args.slice(2).join(' ')}`)
})

command('pumpum', [], (msg) => {
    msg.reply('pumpum')
});

command('slayed', [], async (msg) => {
    if (!msg.reference) return

    const reference = await msg.fetchReference()

    const replies = [
        '<:slayyy:958209528288145450>💅🏽'
    ]
    
    reference.reply('<:slayyy:958209528288145450>💅🏽')
})

command('ratio', ['radio'], async (msg) => {
    if (!msg.reference) return

    const ref = await msg.fetchReference()

    await ref.reply('get ratio\'d lol')
    await massreact(ref, ['👍🏽'])
    await massreact(msg, ['👍🏽'])

    await wait(ms('10s'))

    await msg.reply(`You kinda L`)
})

command('r34', ['rule34'], (msg) => {
    msg.reply('can u dont thx')
})