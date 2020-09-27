const Discord = require("discord.js");
const weather = require('weather-js')
module.exports.run = async (client, message, args) => {
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
if(result.length === 0){
message.channel.send("**Please provide a valid location.**")
return;
}
  var current = result[0].current;
  var location = result[0].location;
	if (err) message.channel.send(err);
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(`#696969`)
    .addField('Timezone', `UTC${location.timezone}`, true)
    .addField('Temperature', `${current.temperature}°c`, true)
    .addField('Feels Like', `${current.feelslike} Degrees`, true)
    .addField('Winds', current.winddisplay, true)
    .addField('Humidity', `${current.humidity}%`, true)
    message.channel.send(embed)
});
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };
  exports.help = {
    name: "weather",
    category: "Info Commands",
    description: "Weather info for a location",
    usage: "weather location"
  };