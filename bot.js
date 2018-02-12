const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('message', (message) =>{
    
    if(message.content == 'ping') {
        //message.reply('pong');
        message.channel.sendMessage('pong');
    }

});
client.on('message', (message) =>{
    
    if(message.content == '-help') {
        message.reply('Use the command !help');
    }

});
client.on('message', (message) =>{
    
    if(message.content == 'Dogs are the best') {
        message.reply('Wrong');
    }

});
client.on('message', (message) =>{
    
    if(message.content == 'Cats are the best') {
        message.reply('Correct');
    }

});
client.on('message', (message) =>{
    
    if(message.content == 'What is the website?') {
        message.reply('http://mcconnetwork.com/');
    }

});
client.on('message', (message) =>{
    
    if(message.content == 'I want a rank!') {
        message.reply('http://mcconnetwork.com/donate');
    }

});
client.login (process.env.BOT_TOKEN);
