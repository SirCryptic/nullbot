const Discord = require("discord.js");

const getQuote = require('get-random-quote');

const boxen = require('boxen');

module.exports.run = async (client, message, args) => {

  getQuote()
    .then((data) => {
      message.channel.send(`${data.text} - ${data.author}`);
    })
    .catch((err) => {
      console.log(boxen(err, {padding: 1}));
    });
}

module.exports.help = {
  name: "quote"
}