const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const boxen = require('boxen');
const fs = require('fs')
const moment = require('moment')
module.exports.run = (client, message, args, data, game, announcement, colors) => {
    var suprt = message.content.split(' ').slice(1).join(' ')

    if (!fs.existsSync(`./data/serverdata/${message.guild.id}/litemode.txt`)) {
        fs.writeFileSync(`./data/serverdata/${message.guild.id}/litemode.txt`, 'false', function(err) {
        });
      };
      fs.readFile(`./data/serverdata/${message.guild.id}/litemode.txt`, function (err, litedata) {
        if (!litedata.includes('true')) {

    var noSupport = new Discord.RichEmbed()
        .setColor(`#696969`)
        .setTitle('Bug Report')
        .setDescription('you can checkout my forums or github using the links below, you can also send me a message to submit any bug reports using the below command.\n**Usage**: `' + data.prefix +'bugreport <message>`')
        .addField('**Links**', '[NULL Security Forums](https://nullsec.online/)\n' + 
                '[GitHub](https://github.com/SirCryptic/)')
        .setAuthor(client.user.username, client.user.displayAavatarURL)
        .setFooter(`This form was made at ${moment().format()}`)
    if(suprt.length < 1) return message.channel.send({embed: noSupport})

    var DM = client.users.get('473300671169298432')
            var support = new Discord.RichEmbed()
                .setColor(colors.success)
                .setTitle('Support')
                .setDescription('A Bug Report came in from ' + message.member.user.username + ' in the server ' + message.guild.name + ': ' + suprt)
                .addField('Guild ID', message.guild.id)
                .addField('Guild Name', message.guild.name)
                .addField('Author Name', message.member.user.username)
                .addField('Author Discriminator', message.member.user.tag)
                .addField('Author ID', message.author.id)
                .setFooter(`This form was made at ${moment().format()}`)
                var sent = new Discord.RichEmbed()
                .setColor(colors.success)
                .setTitle('Bug Report Sent')
                .setDescription(':heavy_check_mark: Bug Report Sent Successfully!')
                message.channel.send({embed: sent}).then( () => {
                       DM.send({embed: support})
                })
                return;
    

        } else {
            //Sunset LiteMode

            var noSupport = 'you can checkout my forums or github here, [Litemode Enabled].\n**Usage**: `' + data.prefix +'bugreport <message>`\n\n' +
                            '**Links**\n' +
                            'https://nullsec.online\n' + 
                            'https://github.com/SirCryptic\n' + 
                            'https://github.com/SirCryptic/phisherprice'
    if(suprt.length < 1) return message.channel.send(noSupport)

    var DM = client.users.get('473300671169298432')
            var support = new Discord.RichEmbed()
                .setColor(colors.success)
                .setTitle('Bug Report')
                .setDescription('Some Support came in from ' + message.user.username + ' in the server ' + message.guild.name + ': ' + suprt)
                .addField('Guild ID', message.guild.id)
                .addField('Guild Name', message.guild.name)
                .addField('Author Name', message.member.user.username)
                .addField('Author Discriminator', message.member.user.tag)
                .addField('Author ID', message.author.id)
                .setFooter(`This form was made at ${moment().format()}`)
                message.channel.send(':heavy_check_mark: Bug Report Sent!').then( () => {
                    DM.send({embed: support})
                })
                return;

        }
    })

}
module.exports.help = {
    name: "bugreport",
    info: "Send a bug report to the developer, Sir Cryptic",
    usage: "bugreport <message>"
}