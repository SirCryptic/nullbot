const Discord = require("discord.js");

const boxen = require('boxen');

module.exports.run = async (client, message, args) => {
    let mUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!mUser) return message.reply("Can't find them, bruh! D:");

    message.channel.send(`Everyone react with F to pay respects for ${mUser}.`)
        .then(function (msg) {
            msg.react(`🇫`);
        })
        .catch(function (err) {
            console.log(boxen(err, { padding: 1 }));
        });
}

module.exports.help = {
    name: "f"
}