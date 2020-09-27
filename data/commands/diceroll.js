const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let roll = Math.floor(Math.random() * 6) + 1;
message.delete();
message.reply(":game_die: Your dice has landed on **" + roll + "** :game_die:");

}

module.exports.help = {
    name: "roll",
    aliases: ["dice"],
}