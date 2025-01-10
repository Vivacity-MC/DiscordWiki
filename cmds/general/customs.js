const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class CustomsCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'customs',
            group: 'general',
            memberName: 'customs',
            description: 'Custom Features Command',
        });
    }

    async run(message, args) {
      
        const CustomsEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Customs')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066107826487336/IMG_2121.png?width=606&height=606')
        .setDescription('All of the custom materials in the server.')
        .addField('Custom Features', 'v!nicknames \n (more coming soon!)')
        .setFooter('Page 1/1');
        message.say(CustomsEmbed)
      
    }
};