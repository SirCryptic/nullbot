const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let btc = args.slice(1).join('+');

        let link = `https://btcsniffer.com/index.php?source=go&address=` + btc +`&cb=5`;
        if(!btc)return message.reply(`Please enter a BTC Address`)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("BLUE")
         
          .setTimestamp()

          .addField("All Crypto Currency Transaction Results For:", `${args.slice(1).join(' ')}`)

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
  name: 'crypto',
  description: 'crypto currency data search',
  usage: 'crypto'
};