const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class MarketCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'market',
      group: 'subhelp',
      memberName: 'market',
      description: 'Market Info',
      });
      }

    async run(message, args) {
      const mp1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Market')
        .setDescription('All of the information for the Market')
        .addField('Location 1', 'Redstone & Blocks')
        .addField('Location 2', 'Cafe & Enchants')
        .addField('Location 3', 'Brewery & Gems')
        .addField('Location 4', 'Banner Shop')
      const mp2Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Market')
        .setDescription('All of the information for the Market')
        .addField('Location 5', 'Fisherman')
        .addField('Location 6', 'Stables, Blacksmith, & Baker')
        .addField('Location 7', 'Pier & Dungeon')
        var pages = [
          mp1Embed,
          mp2Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};