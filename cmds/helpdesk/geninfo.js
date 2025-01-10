const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = class GenInfoCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'geninfo',
      group: 'help',
      memberName: 'geninfo',
      description: 'General Info',
      });
      }

    async run(message, args) {
      const gip1Embed = new Discord.MessageEmbed(message)
        .setColor('#55FFFF')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Rules', '1. Be respectful \n 2. No spamming in chat or commands to players i.e /tpa \n 3. No advertising other servers \n 4. English only in public chat \n 5. Griefing/stealing is not allowed. Do not take what isn‘t yours \n 6. Rest of the rules are listed here: https://vivacitymc.com/threads/server-rules.2')
      const gip2Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Parties', '`/party help [page]` \n `/party create <name>` \n `/party accept [party]` \n `/party deny [party]` \n `/party ignore [party]` \n `/party info [party]` \n `/party list [page]`')
        
      const gip3Embed = new Discord.MessageEmbed(message)
        .setColor('#FF5555')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('QUICK CMDS', 'Notice: This is __not__ the complete list, this is just the most commonly used commands. \n \n Continue to next page ->')
        
      const gip4Embed = new Discord.MessageEmbed(message)
        .setColor('#FF55FF')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Main CMDs', '`/help` \n `/spawn` \n `/warps` \n `/wild` \n `/rtp` \n `/market` \n `/shops` \n `/guide` \n `/ranks` \n `/rules` \n *Links* \n `/web` \n `/discord` \n `/store` \n `/vote` \n `/buy`')
      const gip5Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Main Warps', '`/spawn` \n `/wild` \n `/resource` \n `/pvp` \n `/nether` \n `/end` \n `/rtp` \n `/market` \n `/shops` \n `/dungeons`')
        
      const gip6Embed = new Discord.MessageEmbed(message)
        .setColor('#5555FF')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Sub warps', '`/artisan` \n `/tinkerer` \n `/bakery` \n `/misc` \n `/farmer` \n `/gems` \n `/brewery` \n `/banner` \n `/cafe` \n `/enchanters` \n `/enchanter` \n `/redstone` \n `/blocks` \n `/spawners` \n `/fshops` \n `plants`')
      const gip7Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Custom Items', '`/items` \n `/food` \n `/ce` \n `/charges`')
      const gip8Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Donor CMDs', '`/marry` \n `/recipe` \n `/craft` \n `/ark` \n `/ec` \n `/condense` \n `/ptime` \n `/pweather` \n `/crusher` \n `/deluxe` \n `/feed` \n `/vender`')
      const gip9Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('In-game CMDs', '`/ec` \n `/craft` \n `/hat` \n `/disguise` \n `/stack` \n `/crusher` \n `/deluxe`')
      const gip10Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('FAQ Related', '`/faq` \n `/faq-jobs` \n `/faq-fish` \n `/faq-dungeons`')
      const gip11Embed = new Discord.MessageEmbed(message)
        .setColor('#FFFF55')
        .setTitle('Vivacity Wiki - Dungeons')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Web Links', '• Forum: \n https://vivacitymc.com/forums \n • Web store: \n https://vivacitymc.buycraft.net \n • Vote links \n 1. https://bit.ly/2V5b3bX \n 2. https://bit.ly/2Wh8c44 \n 3. https://bit.ly/2WVmapt \n 4. https://bit.ly/2GXkPrn \n 5. https://bit.ly/2GY9ibl')
        var pages = [
          gip1Embed,
          gip2Embed,
          gip3Embed,
          gip4Embed,
          gip5Embed,
          gip6Embed,
          gip7Embed,
          gip8Embed,
          gip9Embed,
          gip10Embed,
          gip11Embed,
          ];
          paginationEmbed(message, pages, ['⬅️', '➡️']);
    }
};