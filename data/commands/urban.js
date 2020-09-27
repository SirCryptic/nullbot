const Discord = require("discord.js");
const urban = require('relevant-urban');

module.exports.run = async (bot, message, args) => {
  var noMessageReply = new Discord.RichEmbed()
  .setTitle("Urban command help")
  .setColor("#696969")
  .addField("Command name", "Urban")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Example", ".urban skid\n.urban linux\n.urban windows")
  .setFooter(bot.user.username, bot.user.avatarURL);

  if (!args[0]) return message.channel.send(noMessageReply);

  var keyWord = args.join(" ");

  let noMessageMessage = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("Urban Dictionary", "https://www.urbandictionary.com/")
  .setDescription(`"` + keyWord + `" not found on Urban Dictionary.`)
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  let response = await urban(args.join(' ')).catch(e => {
    message.channel.send(noMessageMessage);
  });


  let messagetoSend = new Discord.RichEmbed()
  .setColor("#696969")
  .setTitle(`Urban Dictionary Definition: ${response.word}`)
  .setURL(response.urbanURL)
  .addField("**Word**", response.word)
  .addField("**Definition**", response.definition, true)
  .addField("**Example**", response.example)
  .addField("Author", response.author)
  .addField("Rating", `${response.thumbsUp}:thumbsup:/${response.thumbsDown}:thumbsdown:`)
  .setFooter(bot.user.username, bot.user.avatarURL);


  if (response.tags.length > 0 && response.tags.join(" ").length < 1024) {
    messagetoSend.addField("Tags", response.tags.join(", "), true)
  }
  
  messagetoSend.setTimestamp();

  message.channel.send(messagetoSend);
  console.log(`@${message.author.username} used urban dictionary to define "${keyWord}" in #${message.channel.name}`);

}

module.exports.help = {
  name:"urban"
}