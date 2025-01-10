const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class PocketGamesCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'pocketgames',
      group: 'subhelp',
      memberName: 'pocketgames',
      description: 'PocketGames Info',
      });
      }

    async run(message, args) {
      const pgp1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Pocket Games')
        .setDescription('PocketGames Info')
        .addField('Introduction', 'Pocket Games is accessed by the /pg menu in-game and with it, there are a total of 27 Single player and 8 multiplayer games that you can challenged others to. They`re a mix of retro style and new-age games that brings a twist to anyone`s minecraft experience. \n \n Continue to next page ->')
      const pgp2Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Pocket Games')
        .setDescription('PocketGames Info')
        .addField('Single Player', 'Gap Jump \n Dino Run \n Diamond Collect \n 2048 \n Super 2048 \n Whac A Mole \n Apple Catch \n Floppy Bird \n Match It')
      const pgp3Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Pocket Games')
        .setDescription('PocketGames Info')
        .addField('Single Player (Continued)', 'Simon Says \n Cave In \n Cookie Clicker \n Falling Blocks \n Snake \n Speed Clicker \n The Quiz \n Drop Tower \n OverUnder')
      const pgp4Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Pocket Games')
        .setDescription('PocketGames Info')
        .addField('Single Player (Continued)', 'Name It \n Basket \n Minesweeper \n Tetris \n Block Crush \n Dont Tap \n Tic Tac Toe \n Flow \n Sudoku')
      const pgp5Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Pocket Games')
        .setDescription('PocketGames Info')
        .addField('Multi Player', 'Drop Tower \n Rock Paper Scissors \n Dust Flip \n Tic Tac Toe \n Gomoku \n Connect Four \n Flappy Bird \n Snake')
        var pages = [
          pgp1Embed,
          pgp2Embed,
          pgp3Embed,
          pgp4Embed,
          pgp5Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};