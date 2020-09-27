const Discord = require("discord.js");
const joke = require('give-me-a-joke');



module.exports.run = async (client, message, args) => {

  joke.getRandomDadJoke (function(dadJoke) {

      message.channel.send(dadJoke);
  });

}

module.exports.help = {
  name: "joke"
}