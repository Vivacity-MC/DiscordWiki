const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class PlayPartCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'playerparticles',
      group: 'subhelp',
      memberName: 'playerparticles',
      description: 'PlayerParticles Info Command',
      });
      }

    async run(message, args) {
      const ppp1Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Player Particles')
        .setDescription('All of the PlayerParticles')
        .addField('Introduction', 'Player particles is accessed by the /pp menu in-game and with it, you can make 3 effects with almost endless combos. They only show when you are standing still (unless using specific moving styles like move) so they don`t annoy you. When you enter the GUI, you pick a particle to use then a style for example. If I pick a note with orbit, I will end up with this. Some particles can have extra data such as color, like note and dust. \n \n Continue to next page ->')
      const ppp2Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Player Particles')
        .setDescription('All of the PlayerParticles')
        .addField('Rank(s)', 'Blue, Yellow, Red, Pink, Rainbow, Vivacity')
        .addField('Particles', 'Ambient effect \n Dolphin \n Fishing \n Underwater', true)
        .addField('Styles', 'Arrows \n Point', true)
      const ppp3Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Player Particles')
        .setDescription('All of the PlayerParticles')
        .addField('Rank(s)', 'Yellow, Red, Pink, Rainbow, Vivacity')
        .addField('Particles', 'Enchant \n Mycelium \n Heart \n Rain \n Ambient Effect \n Dolphin \n Fishing \n Underwater', true)
        .addField('Styles', 'Blockbreak \n Blockplace \n Thick \n Arrows \n Point', true)
      const ppp4Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Player Particles')
        .setDescription('All of the PlayerParticles')
        .addField('Rank(s)', 'Red, Pink, Rainbow, Vivacity')
        .addField('Particles', 'Happy Villager \n Item \n Nautilus \n Item Slime \n Item Snowball \n Splash \n Enchant \n Mycelium \n Heart \n Rain \n Ambient Effect \n Dolphin \n Fishing \n Underwater', true)
        .addField('Styles', 'Move \n Whirl \n Pulse \n Blockbreak \n Blockplace \n Thick \n Arrows \n Point', true)
      const ppp5Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Player Particles')
        .setDescription('All of the PlayerParticles')
        .addField('Rank(s)', 'Pink, Rainbow, Vivacity')
        .addField('Particles', 'Entity Effect \n Cloud \n Dripping Lava \n Dripping Water \n Happy Villager \n Item \n Nautilus \n Item Slime \n Item Snowball \n Splash \n Enchant \n Mycelium \n Heart \n Rain \n Ambient Effect \n Dolphin \n Fishing \n Underwater', true)
        .addField('Styles', 'Feet \n Spin \n Orbit \n Popper \n Move \n Whirl \n Pulse \n Blockbreak \n Blockplace \n Thick \n Arrows \n Point', true)
      const ppp6Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Player Particles')
        .setDescription('All of the PlayerParticles')
        .addField('Rank(s)', 'Rainbow, Vivacity')
        .addField('Particles', 'Enchanted Hit \n Flame \n Portal \n Spell \n Block \n End Rod \n Firework \n Damager Indicator \n Entity Effect \n Cloud \n Dripping Lava \n Dripping Water \n Happy Villager \n Item \n Nautilus \n Item Slime \n Item Snowball \n Splash \n Enchant \n Mycelium \n Heart \n Rain \n Ambient Effect \n Dolphin \n Fishing \n Underwater', true)
        .addField('Styles', 'Hurt \n Whirlwind\n Swords \n Twins \n Companion \n  Feet \n Spin \n Orbit \n Popper \n Move \n Whirl \n Pulse \n Blockbreak \n Blockplace \n Thick \n Arrows \n Point', true)
      const ppp7Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Player Particles')
        .setDescription('All of the PlayerParticles')
        .addField('Rank(s)', 'Vivacity')
        .addField('Particles', 'Crit \n Dragon Breath \n Dust \n Instant Effect \n Smoke \n Witch \n Large Smoke \n Poof \n Enchanted Hit \n Flame \n Portal \n Spell \n Block \n End Rod \n Firework \n Damager Indicator \n Entity Effect\n Cloud \n Dripping Lava \n Dripping Water \n Happy Villager \n Item \n Nautilus \n Item Slime \n Item Snowball \n Splash \n Enchant \n Mycelium \n Heart \n Rain \n Ambient Effect \n Dolphin \n Fishing \n Underwater', true)
        .addField('Styles', 'Wing \n Normal \n QuadHelix \n Overhead \n Vortex \n Halo \n Hurt \n Whirlwind \n Swords \n Twins \n Companion \n Feet \n Spin \n Orbit \n Popper \n Move \n Whirl \n Pulse \n Blockbreak \n Blockplace \n Thick \n Arrows \n Point', true)
        var pages = [
          ppp1Embed,
          ppp2Embed,
          ppp3Embed,
          ppp4Embed,
          ppp5Embed,
          ppp6Embed,
          ppp7Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};