const { CommandoClient } = require('discord.js-commando');
const express = require('express');
const Discord = require('discord.js')
const path = require('path');
const app = express();

const client = new CommandoClient({
  commandPrefix: "v!",
  owner: ['275015570284478466', '325878409823649804', '674045612857229322'],
  disableEveryone: true,
});

client.on('ready', () => {
  console.clear();
  console.log("Bot now online");
  console.log(`Watching over ${client.users.cache.size} users in ${client.guilds.cache.size} servers`)
  client.user.setActivity("for v!wiki", {
    type: "WATCHING"
    });
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['general', 'General'],
    ['help', 'Help Desk'],
    ['subhelp', 'Sub Categories']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    prefix: false,
    unknownCommand: false,
    help: false,
  })
  .registerCommandsIn(path.join(__dirname, 'cmds'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('server started');
});

client.login(process.env.BOT_TOKEN);
