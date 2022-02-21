const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class HelpCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'help',
            group: 'general',
            memberName: 'help',
            description: 'Help Command',
        });
    }

    async run(message, args) {
      
      const helpDeskEmbed = new Discord.MessageEmbed(message)
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - HelpDesk')
        .setDescription('All of the information from `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066154928529539/IMG_2122.png?width=606&height=606')
        .addField('Categories:', 'General Info \n Teleportation \n Dungeons \n Ranks \n Economy \n Fishing \n Extras \n Mythic Drops \n Grief Prevention', true)
        .addField('Command:', '`v!geninfo` \n `v!teleportation` \n `v!dungeons` \n `v!ranks` \n `v!economy` \n `v!fishing` \n `v!extras` \n `v!mythicdrops` \n `v!griefprev`', true)
        .setFooter('Vivacity', 'https://media.discordapp.net/attachments/891832347270451230/944747687897624576/i06wAAAABJRU5ErkJggg.png');
        message.say(helpDeskEmbed)
      
    }
};