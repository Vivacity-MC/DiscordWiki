const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class DonorRanksCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'donorranks',
      group: 'subhelp',
      memberName: 'donorranks',
      description: 'Ranks List Info',
      });
      }

    async run(message, args) {
      const drp1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Donor Ranks List')
        .setDescription('List of the donor ranks')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066150235107378/IMG_2128.png?width=606&height=606')
        .addField('Blue [$5]', '- [Blue] prefix in game and discord \n - Access to #minechat in discord, chat through discord \n - `/Enderchest` \n - `/Craft` \n - `/Backpack`, 9 slots of storage \n - `/Nick`, no color \n - `/Back` \n - `/Back` on death \n - Access to chestshops \n - `/Playershops` \n - `/Hat` \n - `/Head` Database, full access \n - 7 Additional homes \n - `/Disguise` \n - Player particles [`/pp`] (Check v!playerparticles for more info)')
      const drp2Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Donor Ranks List')
        .setDescription('List of the donor ranks')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066150235107378/IMG_2128.png?width=606&height=606')
        .addField('Yellow [$10]', '- [Yellow] prefix, in game and discord \n - Access to #minechat in discord, chat through discord \n - `/Enderchest` \n - `/Craft` \n - `/Backpack`, 18 slots of storage \n - `/Nick`, with color \n - `/Back` \n - `/Back` on death \n - Access to chestshops \n - `/Playershops` \n - `/Hat` \n - `/Head` Database, full access \n - 10 Additional homes \n - `/Disguise` \n - Player Particles [`/pp`] (Check v!playerparticles for more info)')
      const drp3Embed = new Discord.MessageEmbed(message)
        .setColor('#FF5555')
        .setTitle('Vivacity Wiki - Donor Ranks List')
        .setDescription('List of the donor ranks')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066150235107378/IMG_2128.png?width=606&height=606')
        .addField('Red [$15]', '[Red] prefix, in game and discord \n - Access to #minechat in discord, chat through discord \n - /Enderchest \n - `/Craft` \n - `/Backpack`, 27 slots of storage \n - `/Nick`, with color \n - `/Back` \n - `/Back` on death \n - Access to chestshops \n - `/Playershops` \n - `/Hat` \n - `/Head` Database, full access \n - Access to coloured signs \n - 15 Additional homes \n - `/Disguise` \n - Player Particles [`/pp`] (Check v!playerparticles for more info)')
      const drp4Embed = new Discord.MessageEmbed(message)
        .setColor('#FF55FF')
        .setTitle('Vivacity Wiki - Donor Ranks List')
        .setDescription('List of the donor ranks')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066150235107378/IMG_2128.png?width=606&height=606')
        .addField('Pink [$25]', '[Pink] prefix, in game and discord \n - Access to #minechat in discord, chat through discord \n - `/Enderchest` \n - `/Craft` \n - v`/Backpack`, 36 slots of storage \n - `/Nick`, with color \n - `/Back` \n - `/Back`, on death \n - `/Crusher`, ability to open crusher menu \n - `/Crafter`, custom item crafter menu \n - Access to chestshop \n - `/Playershops` \n - `/Hat` \n - `/Head` Database, full access \n - Access to coloured signs \n - 25 Additional homes \n - Ability to do 3 jobs \n - `/Disguise` \n - Player particles [`/pp`] (Check v!playerparticles for more info)')
      const drp5Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Donor Ranks List')
        .setDescription('List of the donor ranks')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066150235107378/IMG_2128.png?width=606&height=606')
        .addField('Rainbow [$45]', '[Rainbow] prefix, in game and discord \n - Access to #minechat in discord, chat through discord \n - `/Enderchest` \n - `/Craft` \n - `/Backpack`, 45 slots of storage \n - `/Nick`, with HEX colors \n - `/Back` \n - `/Back`, on death \n - `/Crusher`, ability to open crusher menu \n - `/Crafter`, custom item crafter menu \n - `/Stack` \n - `/Hat` \n - `/Fly` \n - Permanent 25% mcmmo bonus xp \n - Permanent 10% bonus for jobs \n - Access to coloured signs \n - 35 Additional homes \n - Ability to do 4 jobs \n - `/Head` Database, full access \n - `/Disguise` \n - Player Particles [`/pp`] (Check /wiki playerparticles for more info)')
      const drp6Embed = new Discord.MessageEmbed(message)
        .setColor('#00AAAA')
        .setTitle('Vivacity Wiki - Donor Ranks List')
        .setDescription('List of the donor ranks')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066150235107378/IMG_2128.png?width=606&height=606')
        .addField('Vivacity  [$70]', '[Vivacity] prefix, in game and discord \n - Access to #minechat in discord, chat through discord \n - `/Enderchest` \n - `/Craft` \n - `/Backpack`, 54 slots of storage \n - `/Nick`, with HEX colors \n - `/Back` \n - `/Back`, on death \n - `/Crusher`, ability to open crusher menu \n - `/Crafter`, custom item crafter menu \n - `/Stack` \n - `/Hat` \n - `/Fly` \n - Permanent 25% mcmmo bonus xp \n - Permanent 10% bonus for jobs \n - Access to coloured signs \n - 50 Additional homes \n - Ability to do 4 jobs \n - `/Head` Database, full access \n - `/Disguise` \n - Player Particles [`/pp`] (Check /wiki playerparticles for more info)');
        var pages = [
          drp1Embed,
          drp2Embed,
          drp3Embed,
          drp4Embed,
          drp5Embed,
          drp6Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};