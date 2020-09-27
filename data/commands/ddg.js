const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let sterm = args.slice(1).join('+');

        let link = `https://duckduckgo.com/?q=` + sterm;
        if(!sterm)return message.reply(`Please enter a word `)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor('#696969')
         
          .setTimestamp()

          .addField("Search Results For:", `${args.slice(1).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter("Searched By", message.author.displayAvatarURL);
              message.channel.send(embed);
        
    
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'search',
  description: 'duckduckgo search',
  usage: 'search'
};