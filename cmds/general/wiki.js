const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class WikCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'wiki',
            group: 'general',
            memberName: 'wiki',
            description: 'Wiki Info',
        });
    }

    async run(message, args) {
      
        const wikEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Main')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066107826487336/IMG_2121.png?width=606&height=606')
        .setDescription('Main guide of the wiki')
        .addField('Commands:', '`v!help` \n `v!items <page>` \n `v!customs`', true)
        .addField('Description:', 'Displays HelpDesk \n Displays item list', true)
        .setFooter('Page 1/1');
        message.say(wikEmbed)
    }
};