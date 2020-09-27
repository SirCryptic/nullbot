const Discord = require("discord.js");
const malScraper = require('mal-scraper');

const boxen = require('boxen');

module.exports.run = async (client, message, args) => {

  malScraper.getInfoFromName(`${args}`)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor(`#696969`)
      .addField('English Title', data.englishTitle, true)
      .addField('Japanese Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('Rating', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField('Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)
      .addField('Link', data.url);

      message.channel.send(malEmbed);

      //console.log(data); 
    })
    .catch((err) => {
      console.log(boxen(err, {padding: 1}));
    });
}

module.exports.help = {
  name: "anime"
}