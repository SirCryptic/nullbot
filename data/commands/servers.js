const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if(message.author.id != "473300671169298432") return message.channel.send("I am sorry but you do not have access to this command!")
  message.channel.send(`Serving ${client.guilds.size} servers`)
  message.channel.send(client.guilds.map(g=>g.name).join('\n'))
  }


module.exports.help = {
  name: "servers"
}