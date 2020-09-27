const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let btc = args.slice(1).join('+');

        let link = `https://tracr.co/user/` + btc;
        if(!btc)return message.reply(`Please enter a Discord ID Or Name#1234`)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("PURPLE")
         
          .setTimestamp()

          .addField("Account Results For:", `${args.slice(1).join(' ')}`)

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
  name: 'dsniper',
  description: 'discord account lookup',
  usage: 'dsniper'
};