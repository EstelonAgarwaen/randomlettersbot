// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

let token = auth.token;

client.login(token);

client.on('message', msg => {
  
  switch(msg.content){
      case 'ping': msg.reply('pong');
      break;
      case 'hurt me daddy uwu': msg.reply('you fucking dumb weeb cunt');
      break;
  }
});