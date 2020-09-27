const Discord = require('discord.js')

module.exports.run = (bot, message, args, tools) => {

    var images = ["https://media1.giphy.com/media/gSIz6gGLhguOY/giphy.gif?cid=ecf05e47e9a20469effb390fb2b14bbf300b637571155f97&rid=giphy.gif", "https://media1.giphy.com/media/mEtSQlxqBtWWA/giphy.gif", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor('GRAY')
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor('GRAY')
        .setImage('https://media1.giphy.com/media/k61nOBRRBMxva/giphy.gif?cid=ecf05e4775ee51d349d90e6f2517a199996d27329664b554&rid=giphy.gif');
    if (!args[1]) {
        message.channel.send(`<@${message.author.id}> slapped <@${message.mentions.users.id}>.. They might have issues!`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> slapped ${args.slice(1).join(' ')}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "slap"
}