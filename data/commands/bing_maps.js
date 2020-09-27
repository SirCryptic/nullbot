const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let mapper = args.slice(1).join('+');

        let link = `https://www.bing.com/maps?q=` + mapper;
        if(!mapper)return message.reply(`Please enter a post/zip code & or street / house number`)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("GRAY")
         
          .setTimestamp()

          .addField("Bing Map Results Results For:", `${args.slice(1).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter("Searched By", message.author.avatarURL);
          

                       message.channel.send(embed);
        
    
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bmap',
  description: 'bing maps search',
  usage: 'n/bmap <zip/post code>'
};