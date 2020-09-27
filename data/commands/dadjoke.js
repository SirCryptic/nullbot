const sa = require('superagent')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let {body} = await sa
  .get(`https://icanhazdadjoke.com/slack`);
  message.channel.send(body.attachments.map(a => a.text))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "djoke",
  category: "Fun Commands",
  description: "Tells you shitty dad joke",
  usage: "djoke"
};