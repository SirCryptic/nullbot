const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

    let pepe1 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Deal With It.")
    .setImage("https://cdn.discordapp.com/emojis/708430852346085499.png?v=1");

    let pepe2 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("scheming pepe")
    .setImage("https://cdn.discordapp.com/emojis/428556326482739230.png?v=1");

    let pepe3 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("Sad Pepe")
    .setImage("https://cdn.discordapp.com/emojis/428556486235389973.png?v=1");

    let pepe4 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("huh...")
    .setImage("https://cdn.discordapp.com/emojis/428556308929576960.png?v=1");

    let pepe5 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("thonking hard")
    .setImage("https://cdn.discordapp.com/emojis/428556295218659329.png?v=1");

    let pepe6 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("Crazy Pepe")
    .setImage("https://cdn.discordapp.com/emojis/428556467021545473.png?v=1");

    let pepe7 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("Gangsta Pepe")
    .setImage("https://cdn.discordapp.com/emojis/428556448507625474.png?v=1");

    let pepe8 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("YIKES....")
    .setImage("https://cdn.discordapp.com/emojis/708402073766461641.png?v=1");

    let pepe9 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("King Pepe")
    .setImage("https://cdn.discordapp.com/emojis/712451965732257823.png?v=1");

    let pepe10 = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle("I AM... pepe not Thor")
    .setImage("https://cdn.discordapp.com/emojis/428556266366042112.png?v=1");

    let pepes = [pepe1, pepe2, pepe3, pepe4, pepe5, pepe6, pepe7, pepe8, pepe9, pepe10]

    let dapepe = Math.floor((Math.random() * pepes.length));

    message.channel.send(pepes[dapepe])

}
module.exports.help = {
  name: "pepe"
}