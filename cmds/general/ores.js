const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class OresCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'ores',
            group: 'general',
            memberName: 'ores',
            description: 'Ore Command',
        });
    }

    async run(message) {
      
      const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ore Distrobution')
        .setImage('https://pbs.twimg.com/media/FFdKHA7X0AQCkVv?format=jpg&name=4096x4096')
      message.say(embed);
  
    }
};