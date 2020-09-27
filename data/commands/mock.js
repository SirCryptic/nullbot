const Discord = require("discord.js");
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
exports.run = (bot, message, args) => {
if (!args.length < 0) {
        return message.reply('Please provide some text to Mock');
    }
    let mockEmbed = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setDescription(args.map(randomizeCase))
    .setImage("https://cdn.discordapp.com/attachments/655192626844139583/723180125297836082/little-spongebob-meme-wallpaper.png")

    message.channel.send(mockEmbed)

    message.delete();

}

module.exports.help = {
    name: "mock"
}