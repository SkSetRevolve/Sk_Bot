const Discord = require('discord.js');
const client = new Discord.Client()

var prefix = 'sk!'
var token = 'NjA1NzcwNDMwMjg3OTcwMzE0.XULSVA.biYvhNAo13fH-Nk7Fyrm_0krGsE'

client.login(token);

client.on('ready, function(){
    console.log("Je suis connecté !")
})

client.on('message',function(message{
    if(message.content.includes(prefix + 'déconnexion')){
        message.channel.send('** au revoir :sob: ...**')
        message.delete().then(client.destroy())
    }
})

//https://discordapp.com/oauth2/authorize?client_id=605770430287970314&scope=bot&permissions=8