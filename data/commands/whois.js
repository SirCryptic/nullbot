const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports.run = async (client, message, args) => {


    let host = args.slice(1).join('=');

        fetch('https://api.ip2whois.com/v1?key=free&domain=' + host).then((results) =>
  results.json()
);
fetch("https://api.ip2whois.com/v1?key=free&domain=" + host)
  .then((results) => results.json())
  .then(console.log);
        if(!host)return message.reply(`Please enter a valid host `)
        if(!host)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor('#696969')
         
          .setTimestamp()

          .addField("Results For:", `${args.slice(1).join(' ')}`)

          .addField(`results.json`)
         
          .setFooter("Whois Searched By", message.author.avatarURL);
                        message.channel.send(embed);
        
    
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'test',
  description: 'whois search',
  usage: 'whois'
};