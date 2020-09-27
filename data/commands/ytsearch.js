const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(1).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Please enter a Key Term `)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()

          .addField("Youtube Results For:", `${args.slice(1).join(' ')}`)

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
  name: 'yt',
  description: 'youtube search',
  usage: 'youtube'
};