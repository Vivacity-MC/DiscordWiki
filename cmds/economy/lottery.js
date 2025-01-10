const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class LotteryCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'lottery',
      group: 'subhelp',
      memberName: 'lottery',
      description: 'Lottery Info',
      });
      }

    async run(message, args) {
      const lp1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Lottery')
        .setDescription('All of the information for the Lottery')
        .addField('Introduction', 'Chance of winning large sums of money. \n \n You can buy up to 100 tickets.')
      const lp2Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Lottery')
        .setDescription('All of the information for the Lottery')
        .addField('Buy tickets', '/lottery buy')
        .addField('Other items', 'Use `/lottery help`')
        var pages = [
          lp1Embed,
          lp2Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};