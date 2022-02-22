const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

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
      
        const genInfoEmbed = new Discord.MessageEmbed(message)
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - General Info')
        .setDescription('All of the information from the [General Info] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066131322974218/IMG_2125.png?width=606&height=606')
        .addField('Rules:', '1. Be respectful \n 2. No spamming in chat or commands to players i.e /tpa \n 3. No advertising other servers \n 4. English only in public chat \n 5. Griefing/stealing is not allowed. Do not take what isn‘t yours \n 6. Rest of the rules are listed here: https://vivacitymc.com/threads/server-rules.2')
        .addField('Parties:', '`/party help [page]`, `/party create <name>`, `/party accept [party]`, `/party deny [party]`, `/party ignore [party]`, `/party info [party]`, `/party list [page]`')
        .addField('Quick CMDs:', 'Notice: This is __not__ the complete list, this is just the most commonly used commands. \n • Main CMDs \n `/help`, `/spawn`, `/warps`, `/wild`, `/rtp`, `/market`, `/shops`, `/guide`, `/ranks`, `/rules` \n *Links* \n `/web`, `/discord`, `/store`, `/vote`, `/buy` \n • Main warps \n `/spawn`٫ `/wild`٫ `/resource`٫ `/pvp`٫ `/nether`٫ `/end`٫ `/rtp`٫ `/market`٫ `/shops`٫ `/dungeons` \n • Sub warps \n `/artisan`٫ `/tinkerer`٫ `/bakery`٫ `/misc`٫ `/farmer`٫ `/gems`٫ `/brewery`٫ `/banner`٫ `/cafe`٫ `/enchanters`٫ `/enchanter`٫ `/redstone`٫ `/blocks`٫ `/spawners`٫ `/fshops`٫ `plants` \n • Custom content \n `/items`٫ `/food`٫ `/ce`٫ `/charges` \n • In-game Rank \n `/marry`٫ `/recipe`٫ `/craft`٫ `/ark`٫ `/ec`٫ `/condense`٫ `/ptime`٫ `/pweather`٫ `/crusher`٫ `/deluxe`٫ `/feed`٫ `/vender` \n • Donor rank \n `/ec`٫ `/craft`٫ `/hat`٫ `/disguise`٫ `/stack`٫ `/crusher`٫ `/deluxe` \n • FAQ related \n `/faq`٫ `/faq-jobs`٫ `/faq-fish`٫ `/faq-dungeons`')
        .addField('Web Links:', '• Forum: \n https://vivacitymc.com/forums \n • Web store: \n https://vivacitymc.buycraft.net \n • Vote links \n 1. https://bit.ly/2V5b3bX \n 2. https://bit.ly/2Wh8c44 \n 3. https://bit.ly/2WVmapt \n 4. https://bit.ly/2GXkPrn \n 5. https://bit.ly/2GY9ibl')
        .setFooter('Vivacity', 'https://media.discordapp.net/attachments/891832347270451230/944747687897624576/i06wAAAABJRU5ErkJggg.png');
        message.say(genInfoEmbed)
      
    }
};