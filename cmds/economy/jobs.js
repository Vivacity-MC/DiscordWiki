const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class JobsCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'jobs',
      group: 'subhelp',
      memberName: 'jobs',
      description: 'Jobs Info',
      });
      }

    async run(message, args) {
      const jobsp1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Jobs')
        .setDescription('All of the information for the Jobs')
        .addField('Introduction', 'Everyone starts off with the ability to do 1 Job, but can also unlock the ability for more than 1 Job with the use of ranking up. Read rank requirements by doing `v!ranklist` (`/ranks` in-game).')
        .addField('Extra', 'Earn money and points by doing jobs!')
      const jobsp2Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Jobs')
        .setDescription('All of the information for the Jobs')
        .addField('Logger', 'Tree chopping')
        .addField('Geology', 'Pickaxe mining \n Shovel mining')
        .addField('Engineer', 'Placing blocks')
      const jobsp3Embed = new Discord.MessageEmbed(message)
        .setColor('#FF5555')
        .setTitle('Vivacity Wiki - Jobs')
        .setDescription('All of the information for the Jobs')
        .addField('Farmer', 'Placing plants \n Picking plants \n Breeding mobs \n Sheer sheep \n Tame mobs')
        .addField('Slayer', 'Killing mobs')
        .addField('Mariner', 'Fishing \n __Bonus actions:__ \n lvl 10: Tier 1 Fish \n lvl 20: Tier 2 Fish \n lvl 30: Tier 3 Fish \n lvl 40: Tier 4 Fish \n lvl 50: Tier 5 Fish')
      const jobsp4Embed = new Discord.MessageEmbed(message)
        .setColor('#FF55FF')
        .setTitle('Vivacity Wiki - Jobs')
        .setDescription('All of the information for the Jobs')
        .addField('Artisan', 'Crafting tools and armor')
        .addField('Culinary', 'Cook food \n Brew potions')
        .addField('Magician', 'Enchant items')
        var pages = [
          jobsp1Embed,
          jobsp2Embed,
          jobsp3Embed,
          jobsp4Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};