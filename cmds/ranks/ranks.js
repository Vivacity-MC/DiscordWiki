const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class DonorRanksCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'ranklist',
      group: 'subhelp',
      memberName: 'ranklist',
      description: 'Ranks List Info',
      });
      }

      async run(message, args) {
        const rlp1Embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranklist')
        .setDescription('All of the ranks from the [Ranks] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066154018361344/IMG_2129.png?width=606&height=606')
        .addField('\u200b', '**Aenetus** \n Cost:FREE \n - No perks \n **Belonia** \n Cost: $650 \n - Able to use `/marry` ($500 cost) \n - Access to all artmap tools at an easel \n **Caisatra** \n Cost: $1040 \n - Able to sit on chairs \n **Dathus** \n Cost: $1625 \n - 1 additional home \n **Ellarian** \n Cost: $2340 \n - Able to create disposal signs \n - Access to `/disposal`');
        const rlp2Embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranklist')
        .setDescription('All of the ranks from the [Ranks] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066154018361344/IMG_2129.png?width=606&height=606')
        .addField('\u200b', '**Frauria** \n Cost: $3250 \n - Able to make chestshops \n - Able to rent shops \n - 2nd job ability \n **Gruasil** \n Cost: $4420 \n - Access to `/craft` \n **Hecrax** \n Cost: $5980 \n - Access to `/ark` \n - Access to `/fish` trader \n - 1 additional home \n **Ivoire** \n Cost: $793 \n - Access to `/echest` (`/ec`) \n - 1 additional row in `/bp`');
        const rlp3Embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranklist')
        .setDescription('All of the ranks from the [Ranks] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066154018361344/IMG_2129.png?width=606&height=606')
        .addField('\u200b', '**Jecrune** \n Cost: $10855 \n - Increase max job level to 20 \n **Kelris** \n Cost: $13900 \n - Access to `/back` \n **Ladrus** \n Cost: $18850 \n - Access to `/back` on death \n **Mushax** \n Cost: $25350 \n - 1 additional home \n - 2 additional rows in `/bp` \n **Negrein** \n Cost: $35000 \n - 3rd job ability \n - increase max job level to 30');
        const rlp4Embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranklist')
        .setDescription('All of the ranks from the [Ranks] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066154018361344/IMG_2129.png?width=606&height=606')
        .addField('\u200b', '**Otraria** \n Cost: $35500 \n - Access to `/ptime` \n - 3 additional rows in `/bp` \n **Progeny** \n Cost: $71500 \n - 1 additional home \n **Qutharia** \n Cost: $97500 \n - Access to `/condense` \n - Access to `/stack` \n **Rastex** \n Cost: $149500 \n - 1 additional home \n - Access to `/crusher` \n **Satoris** \n Cost: $266500 \n - Access to `/nick` no color \n - Increase max job level to 40');
        const rlp5Embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranklist')
        .setDescription('All of the ranks from the [Ranks] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066154018361344/IMG_2129.png?width=606&height=606')
        .addField('\u200b', '**Tathein** \n Cost: $500000 \n - Access to `/deluxe` \n - 4 additional rows in `/bp` \n - Access to `/bp sort` \n **Uthiux** \n Cost: $812500 \n - Access to `/nick` with color \n - Access to `/vendor` \n **Vastala** \n Cost: $1137500 \n - 1 additional home \n - Access to `/feed` \n - RGB nicknames \n **Wisteria** \n Cost: $1950000 \n - XP saved on death \n - 5 additional rows in `/bp` \n **Xethos** \n Cost: $3000000 \n - 4th job ability \n - Increase max job level to 50');
        const rlp6Embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Ranklist')
        .setDescription('All of the ranks from the [Ranks] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066154018361344/IMG_2129.png?width=606&height=606')
        .addField('\u200b', '**Yushar** \n Cost: $4400000 \n - To be determined \n **Zumtris** \n Cost: $6600000 \n - Infinite `/fly` time');
        var pages = [
          rlp1Embed,
          rlp2Embed,
          rlp3Embed,
          rlp4Embed,
          rlp5Embed,
          rlp6Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
      };
};