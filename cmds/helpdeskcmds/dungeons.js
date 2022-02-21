const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class DungeonsCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'dungeons',
      group: 'help',
      memberName: 'dungeons',
      description: 'Dungeons Info',
      });
      }

    async run(message, args) {
      const dungp1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [Dungeons] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066126650515516/IMG_2124.png?width=606&height=606')
        .addField('Introduction', 'Dungeons is a solo and team-based mini-game. Each mob has a time based spawn time which allow you to challenge yourself to see how long you can last. Survive and hunt for exclusive items. Type `/out` or `/leave` at any time to leave the dungeon.')
        .addField('WARNING!', 'This is a dangerous mini-game and your items __will__ drop if you die. However, if you have a Totem of Undying anywhere in your inventory, your items will be safe.')
      const dungp2Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [Dungeons] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066126650515516/IMG_2124.png?width=606&height=606')
        .addField('The Labyrinth', 'Players: 1-2 \n Rank: Aenetus \n Difficulty: Easy')
        .setImage('https://media.discordapp.net/attachments/933492767177441308/945453059096588328/thelabyrinth.png?width=1145&height=606')
      const dungp3Embed = new Discord.MessageEmbed(message)
        .setColor('#FF5555')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [Dungeons] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066126650515516/IMG_2124.png?width=606&height=606')
        .addField('Realm of Tartarus', 'Players: 1-4 \n Rank: Aenetus \n Difficulty: Medium')
        .setImage('https://media.discordapp.net/attachments/933492767177441308/945455304433340456/realmoftartarus.png?width=1078&height=606')
      const dungp4Embed = new Discord.MessageEmbed(message)
        .setColor('#FF55FF')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [Dungeons] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066126650515516/IMG_2124.png?width=606&height=606')
        .addField('Pirate Cove', 'Players: 2-5 \n Rank: Aenetus \n Difficulty: Hard')
        .setImage('https://media.discordapp.net/attachments/933492767177441308/945456880073965568/piratecove.png?width=1078&height=606')
      const dungp5Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [Dungeons] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066126650515516/IMG_2124.png?width=606&height=606')
        .addField('Old Town', 'Players: 2-7 \n Rank: Aenetus \n Difficulty: Extreme')
        .setImage('https://media.discordapp.net/attachments/933492767177441308/945456938475483187/oldtown.png?width=1078&height=606');
        var pages = [
          dungp1Embed,
          dungp2Embed,
          dungp3Embed,
          dungp4Embed,
          dungp5Embed,
          ];
          paginationEmbed(message, pages);
    }
};