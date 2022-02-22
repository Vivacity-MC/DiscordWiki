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
      
      const economyEmbed = new Discord.MessageEmbed(message)
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranks')
        .setDescription('All of the information from the [Economy] category in the `/help` menu')
        .setThumbnail('')
        .addField('Jobs', 'Everyone starts off with the choice of 1 job, but can also unlock the ability for more than 1 job by ranking up. Read rank requirements by doing `v!ranklist` (discord) or `/ranks` (minecraft). You can earn money and points in-game by doing jobs. \n Check out `v!jobs` for a list of jobs.')
        .addField('Auctions', 'Auction items for a specific amount of time and money. \n Check out `v!auctions` for the list of commands')
        .addField('Player Shops', 'Ability to buy/sell items, shops can be rentedd for __30 days__. \n Check out `v!playershops` for more information.')
        .addField('Market', 'Ability to buy/sell items, purchase unique, exclusive, and common items.')
        .addField('Lottery', 'tbd')
        .addField('Trading', 'tbd')
        .setFooter('Vivacity', 'https://media.discordapp.net/attachments/891832347270451230/944747687897624576/i06wAAAABJRU5ErkJggg.png');
        message.say(economyEmbed)
      
    }
};
