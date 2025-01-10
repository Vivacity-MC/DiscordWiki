const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class EconomyCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'economy',
            group: 'help',
            memberName: 'economy',
            description: 'Economy Command',
        });
    }

    async run(message, args) {
      const economyEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranks')
        .setDescription('All of the information from the [Economy] category in the `/help` menu')
        .setThumbnail('')
        .addField('Jobs', 'Check `v!jobs`')
        .addField('Auctions', 'Check `v!auctions`')
        .addField('Player Shops', 'Ability to buy/sell items, shops can be rented for __30 days__. \n Check out `v!playershops` for more information.')
        .addField('Market', 'WIP')
        .addField('Lottery', 'wip')
        .addField('Trading', 'wip')
        .setFooter('Page 1/1');
        message.say(economyEmbed)
      
    }
};
