
const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const boxen = require('boxen');
const fs = require('fs')
const inspections = ['invite', 'video']
const vui = require('video-url-inspector');
module.exports.run = (client, message, args, data, game, announcement,colors) => {
    var commandlock = data.lock
    if(commandlock.includes('true')) {       
      if(message.author.id !== data.ownerid) return message.channel.send('Sorry, but a command lock is in effect. Only the owner can use commands at this time.')   
    } 
    if (!fs.existsSync(`./data/serverdata/${message.guild.id}/litemode.txt`)) {
        fs.writeFileSync(`./data/serverdata/${message.guild.id}/litemode.txt`, 'false', function(err) {
        });
    };
var option = args[1];

var item = message.content.split(/\s+/g).slice(2).join(" ");

var noArgs = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle('Inspect Help')
    .setDescription('**Inspect Discord Invites**\n' +
                    '`n/inspect invite aTbExhe`\n' +
                    '**Inpsect Video URLs**\n' +
                    '`n/inspect video https://www.youtube.com/watch?v=dQw4w9WgXcQ`\n' +
                    'Inspector:tm:')

if(!option || !item) return message.channel.send({embed: noArgs})
if(inspections.some(insp => option.includes(insp))) {
    if(option.includes('invite')) {
        var noInvURL = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setTitle('No Invite URL')
            .setDescription('No Invite URL Provided')
        if(!item) return message.channel.send({embed: noInvURL})
        client.fetchInvite(item).then(invite => {
            var tcCount = parseFloat(invite.textChannelCount)
            var vcCount = parseFloat(invite.voiceChannelCount)
            var channelCount = parseFloat(vcCount + tcCount)
            var fetchedInvite = new Discord.RichEmbed()
                .setColor(colors.success)
                .setTitle('Invite Fetched')
                .setDescription('**Channel**: `' + invite.channel + '`'+ invite.channel +'\n' +
                                '**Client**: `' + invite.client + '`\n' +
                                '**Code**: `' + invite.code + '`\n' +
                                '**CreatedAt**: `' + invite.createdAt + ' | '+ invite.createdTimestamp +'`\n' +
                                '**ExpiresAt**: `' + invite.expiresAt + ' | '+ invite.expiresTimestamp + '`\n' +
                                '**Guild**: `' + invite.guild + '`\n' +
                                '**Inviter**: `' + invite.inviter + '`'+ invite.inviter +'\n' +
                                '**MaxAge**: `' + invite.maxAge + '`\n' +
                                '**MemberCount**: `' + invite.memberCount + '`\n' +
                                '**PresenceCount**: `' + invite.presenceCount + '`\n' +
                                '**Temporary**: `' + invite.temporary + '`\n' +
                                '**URL**: `' + invite.url + '`\n' + 
                                '**Uses**: `' + invite.uses + '`\n' + 
                                '**ChannelCount:** `' + channelCount + '`\n')
                                message.channel.send({embed: fetchedInvite})
}).catch({
    if(error) {
        message.channel.send('An unexpected error occured: ' + error)
    }
})

    }
    if(option.includes('video')) {
        var noVidURL = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setTitle('No Video URL')
            .setDescription('No Video URL Provided')

        if(!item) return message.channel.send({embed: noVidURL})
        var video = vui(item)

        var videoInspect = new Discord.RichEmbed()
            .setColor(colors.success)
            .setTitle('Video Inspected')
            .setDescription('**Hoster** `' + video.hoster + '`\n' +
                            '**RemoteID** `' + video.remoteId + '`\n' +
                            '**EmbedURL** `' + video.embedUrl + '`\n')
                            message.channel.send({embed: videoInspect})
    }

} else {
    var invalidInspection = new Discord.RichEmbed()
        .setColor(colors.critical)
        .setTitle('Invalid Inspection Option')
        .setDescription('That inspection option is not valid')
        return message.channel.send({embed: invalidInspection})
}


}
module.exports.help = {
    name: "inspect",
    info: "Inspect a multitude of things",
    usage: "inspect"
}