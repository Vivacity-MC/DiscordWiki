const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class AuctionsCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'auctions',
      group: 'subhelp',
      memberName: 'auctions',
      description: 'Player Auctions Info',
      });
      }

    async run(message, args) {
      const pap1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Player Auctions')
        .setDescription('All of the information for the PlayerAuctions')
        .addField('Introduction', 'Auction items for a specific amount of time and money')
      const pap2Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Player Auctions')
        .setDescription('All of the information for the PlayerAuctions')
        .addField('Start an Auction', '/auction start [amount] [price] [increment] [autobuy] [time]')
        .addField('Start a Sealed Auction', '/auction startsealed [amount] [price] [increment] [autobuy] [time]')
        .addField('Remove a Queued Auction', '/auction remove')
        .addField('Auction Info', '/auction info')
      const pap3Embed = new Discord.MessageEmbed(message)
        .setColor('#FF5555')
        .setTitle('Vivacity Wiki - Player Auctions')
        .setDescription('All of the information for the PlayerAuctions')
        .addField('Bid in an Auction', '/bid [amount]')
        .addField('Cancel an Auction', '/auction cancel')
        .addField('Ignore Auction Scoreboard', '/auction scoreboard')
        .addField('Ignore Spam Messages (bids, anti-snipe)', '/auction spam')
      const pap4Embed = new Discord.MessageEmbed(message)
        .setColor('#FF55FF')
        .setTitle('Vivacity Wiki - Player Auctions')
        .setDescription('All of the information for the PlayerAuctions')
        .addField('Re-Enable an Auction', '/auction enable')
        .addField('Ignore All Auction Broadcasts', '/auction ignore')
        .addField('Ignore Specific Player Auctions', '/auction ignoreplayer [player]')
        var pages = [
          pap1Embed,
          pap2Embed,
          pap3Embed,
          pap4Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};