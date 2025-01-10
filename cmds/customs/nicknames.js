const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class NicknamesCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'nicknames',
            group: 'subhelp',
            memberName: 'nicknames',
            description: 'Nickname Info',
        });
    }

    async run(message, args) {
      
        const nicknameEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Nicknames')
        .setDescription('All of the information for nicknames (`/nick`)')
        .addField('No-Color Nicknames', 'Simply do `/nick <nickname>`. \n \n Nicking others: `/nick <user> <nickname>`')
        .addField('Colored Nicknames', 'For this you will need to know the color codes, provided here: https://htmlcolorcodes.com/minecraft-color-codes/. this is how it will look: \n `/nick &c<nickname>` \n \n Nicking others: `/nick <user> &c<nickname>`')
        .addField('HEX Nicknames', 'This is more complicated than basic nicknames, to do this, you will need to get a hex color (can be found here: https://www.rapidtables.com/web/color/RGB_Color.html), this is what it would look like: \n `/nick &#AABBCC` \n \n Nicking others: `/nick <user> &#AABBCC<nickname>`')
        .setFooter('Page 1/1');
        message.say(nicknameEmbed)
      
    }
};