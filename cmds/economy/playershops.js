const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class PlayerShopsCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'playershops',
      group: 'subhelp',
      memberName: 'playershops',
      description: 'Player Shops Info',
      });
      }

    async run(message, args) {
      const psp1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Player Shops')
        .setDescription('All of the information for the PlayerShops')
        .addField('Introduction', 'Players can unlock the option to open up their own shop and offer products to the community by ranking up to the 6th rank (Frauria) through /rankup. \n \n These shops are showcased in a fully developed shopping center where players can go via /shops.')
      const psp2Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Player Shops')
        .setDescription('All of the information for the PlayerShops')
        .addField('Renting Rules', 'You are able to modify the interior of the buildings to create your shop enviroment. \n Players inactive for more than 20 days will lose their shops. \n Shops without stock for 1 week will be closed as well \n Please remember to pay on time if you wish to continue your rent period. \n Failure to pay on time will result in your belongings being removed. \n If you do not want to continue renting your shop, please remove your belongings before the rent period is up.')
      const psp3Embed = new Discord.MessageEmbed(message)
        .setColor('#FF5555')
        .setTitle('Vivacity Wiki - Player Shops')
        .setDescription('All of the information for the PlayerShops')
        .addField('How to Own a Shop', 'Visit /shops and find an open shop or kiosk that is not yet rented by another player. \n You can check near the entrance of a shop on the status sign. \n If the shop is "For Rent", you can lease it for the price listed. \n Simply right-click the sign to rent the shop for 1 week. \n You must right-click the sign again to rent it for up to 30 days (3-4 clicks).')
      const psp4Embed = new Discord.MessageEmbed(message)
        .setColor('#FF55FF')
        .setTitle('Vivacity Wiki - Player Shops')
        .setDescription('All of the information for the PlayerShops')
        .addField('How to Set Up Shops', 'When making a shop, place a sign on a chest in the following format: \n \n First Line: leave blank \n Second Line: amount you\'ll buy/sell (e.g. `200`) \n Third Line: When selling, `B`, when buying, `S`, or combine both \n Fourth Line: item name, id, or "?" \n \n Here is an example (Username is added after sign is created)٫ there is also an example at /shops')
        .setImage('https://cdn.discordapp.com/attachments/933492767177441304/946949033828692018/IMG_2331.png')
        var pages = [
          psp1Embed,
          psp2Embed,
          psp3Embed,
          psp4Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};