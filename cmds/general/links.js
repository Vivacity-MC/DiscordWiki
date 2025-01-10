const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class linksCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'links',
            group: 'general',
            memberName: 'links',
            description: 'Links Command',
        });
    }

    async run(message, args) {
      
        const linksEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Links')
        .setDescription('All of the links related to the server')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066118349987870/IMG_2123.png?width=606&height=606')
        .addField('Server IP:', 'play.vivacitymc.com')
        .addField('Site:', 'https://vivacitymc.com')
        .addField('Store:', 'https://vivacitymc.buycraft.net')
        .addField('Forums:', 'https://vivacitymc.com/forums')
        .addField('Voting Links:', '1. https://bit.ly/2V5b3bX \n 2. https://bit.ly/2Wh8c44 \n 3. https://bit.ly/2WVmapt \n 4. https://bit.ly/2GXkPrn \n 5. https://bit.ly/2GY9ibl')
        .addField('Discord:', 'https://discord.gg/eSUgnWx')
        .addField('Youtube:', 'https://bit.ly/2Zeonit')
        .setFooter('Page 1/1');
        message.say(linksEmbed)
      
    }
};