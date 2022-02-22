const { Command, Client } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class TpCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'teleportation',
            group: 'help',
            memberName: 'teleportation',
            description: 'Teleportation',
        });
    }

    async run(message, args) {
      
        const tpEmbed = new Discord.MessageEmbed(message)
        .setColor('#0099ff')
        .setTitle('Vivacity Wiki - Teleportation')
        .setDescription('All of the information from the [Teleportation] category in the `/help` menu')
        .setThumbnail('https://media.discordapp.net/attachments/933492767177441304/945066143499059270/IMG_2127.png?width=606&height=606')
        .addField('Spawn Teleport', '`/spawn`')
        .addField('Homes', '`/sethome [name]` - Create a home \n `/home [name]` - Teleport to a home \n `/delhome [name]` - Delete a home')
        .addField('Warp List', '• Worlds \n `/resource` - Teleport to the resource world \n `/end` - Teleport to the end \n `/nether` - Teleport to the nether \n •  Dungeons \n `/dungeons` (Check `v!dungeons` for more information) \n • Market Shops \n `/market` \n • Blacksmith \n `/blacksmith` \n • Crates \n `/crates` \n • Public Enchant Table \n `/enchanter`, `/enchants`')
        .addField('Random Teleport', '`/rtp`')
        .setFooter('Vivacity', 'https://media.discordapp.net/attachments/891832347270451230/944747687897624576/i06wAAAABJRU5ErkJggg.png');
        message.say(tpEmbed)
      
    }
};