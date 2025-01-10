const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class RanksCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'ranks',
            group: 'help',
            memberName: 'ranks',
            description: 'Ranks Command',
        });
    }

    async run(message, args) {
      
      const ranksEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranks')
        .setDescription('All of the information from the [Ranks] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066139170508850/IMG_2126.png?width=606&height=606')
        .addField('In-game Ranks', 'Purchase in-game ranks with in-game money. Rank can __not__ be skipped \n \n • Commands: \n `/ranks` - see a list of in-game ranks (Check `v!ranklist` for the list of ranks & prices) \n `/rankup` - rank up to the next in-game level')
        .addField('Donor Ranks', 'Purchase donor ranks and treasure crates with real-life money, and help support the server. \n \n • Commands: \n `/buy` - see a list of donor ranks, treasure crates, and their perks (Check `v!donorranks` for more information) \n `/store` - provides a link to the store  (Check `v!links` for more information)')
        .setFooter('Page 1/1');
        message.say(ranksEmbed)
      
    }
};