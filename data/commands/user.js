exports.run = (client, message,args) => {
    const Discord = require('discord.js');
    let user = message.mentions.users.first();
    if (!user) {
        return message.reply('You must mention someone!');
    }
    const mentioneduser = message.mentions.users.first();
    const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '-' + (mentioneduser.createdAt.getMonth() + 1) + '-' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'Not currently Playing.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'He/She didnt sent a message.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'Do Not Disturb';
    } else if (user.presence.status === 'idle') {
        status = 'Idle / Chilling';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
    let stat;
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**Joined Discord:** ${joineddiscord}\n**Last Message:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, '``' + message.mentions.members.first().roles.map(r => r.name).join(', ') + '``')
  .addField('DiscordInfo:', `**Discriminator:** ${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`Info for ${user.username} Below`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
 module.exports.help = {
  name: "profile",
  info: "Shows the profile of the mentioned user or yourself",
  usage: "profile <@user>"
}