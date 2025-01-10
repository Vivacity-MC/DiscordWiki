const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class VillagersCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'villagers',
            group: 'general',
            memberName: 'villagers',
            description: 'Villager Command',
        });
    }

    async run(message) {
      
      const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Villagers')
        .setImage('https://static.planetminecraft.com/files/image/minecraft/blog/2020/415/12754424-fxjlqae-x_l.webp')
      message.say(embed);
  
    }
};