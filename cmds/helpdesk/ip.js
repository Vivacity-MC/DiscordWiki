const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class IpCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'ip',
      group: 'help',
      memberName: 'ip',
      description: 'Server IP',
      });
      }

    async run(message) {
      const embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Server IP')
        .setDescription('You can join the server at `play.vivacitymc.com`')

      message.say(embed)
    }
};