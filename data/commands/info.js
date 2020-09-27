const prettyMs = require('pretty-ms');
const pusage = require('pidusage')
const RichEmbed = require("discord.js").RichEmbed;
const Attachment = require("discord.js").Attachment;
const Discord = require("discord.js");
const raspiInfo = require('raspberry-info');
const boxen = require('boxen');
const fs = require('fs')
module.exports.run = (client, message, args, data, game, announcement, colors) => {
  var commandlock = data.lock
  if(commandlock.includes('true')) {       
    if(message.author.id !== data.ownerid) return message.channel.send('Sorry, but a command lock is in effect. Only the owner can use commands at this time.')   
  } 
  
  pusage.stat(process.pid, function (err, stat) {
    var cpuusage = parseFloat(Math.round(stat.cpu * 100) / 100).toFixed(2)
    var memusage = parseFloat(Math.round(stat.memory / 1000000 * 100) / 100).toFixed(2)

  if(message.channel.type === 'dm') {
    var dmArg = args[1]

    var infoDM = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle(client.user.username + ' Info')
    .addField('Host', '[Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)', true)
    .addField('Library', '[' + data.library + '](https://discord.js.org/)', true )
    .addField('Language', '[' + data.language + '](https://nodejs.org/)', true)
    .addField('Uptime', prettyMs(client.uptime, {verbose: true}), true)
    .addField('CPU Usage', cpuusage + '%', true)
    .addField('Memory Usage', memusage + 'MB', true)
    .addField('Server Count', client.guilds.size, true)
    .addField('Version', data.newversion, true)
    .addField('Invite', '[NULLBot Invite](https://discord.com/api/oauth2/authorize?client_id=696654238675107843&permissions=2147483127&redirect_uri=https%3A%2F%2Fnullsec.online%2Fconnected_account.php&scope=bot)', true)
    .setThumbnail(client.user.displayAvatarURL)
    .setImage('https://cdn.discordapp.com/attachments/747247527266615378/748008293213012068/info.gif')
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    message.channel.send({embed: infoDM})
    
    return;
    
  }
  let total = 0;
client.guilds.map(g => total += g.memberCount)

  if (!fs.existsSync(`./data/serverdata/${message.guild.id}/litemode.txt`)) {
    fs.writeFileSync(`./data/serverdata/${message.guild.id}/litemode.txt`, 'false', function(err) {
    });
  };
  fs.readFile(`./data/serverdata/${message.guild.id}/litemode.txt`, function(err, litedata) {

    if(!litedata.includes('true')) {
      
  const modlog = message.guild.channels.find('name', 'mod-log');
  const announcements = message.guild.channels.find('name', 'announcements')
let total = 0;
client.guilds.map(g => total += g.memberCount)
  pusage.stat(process.pid, function (err, stat) {
    const cpuusage = parseFloat(Math.round(stat.cpu * 100) / 100).toFixed(2)
    const memusage = parseFloat(Math.round(stat.memory / 1000000 * 100) / 100).toFixed(2)      

var infosembed = new Discord.RichEmbed()
    .setColor(`#696969`)
    .setTitle(client.user.username + ' Info')
    .setDescription('Please make sure to create channels: #mod-log & #reports for moderation support.')
    .addField('Owner', '`' + client.users.get('473300671169298432').tag + '`', true)
    .addField('Host', '[Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)', true)
    .addField('Library', '[' + data.library + '](https://discord.js.org/)', true )
    .addField('Language', '[' + data.language + '](https://nodejs.org/)', true)
    .addField('Uptime', prettyMs(client.uptime, {verbose: true}), true)
    .addField('CPU Usage', cpuusage + '%', true)
    .addField('Memory Usage', memusage + 'MB', true)
    .addField('Total Members', total, true )
    .addField('Server Count', client.guilds.size, true)
    .addField('Version', data.newversion, true)
    .addField('Invite', '[NULLBot Invite](https://discord.com/api/oauth2/authorize?client_id=696654238675107843&permissions=2147483127&redirect_uri=https%3A%2F%2Fnullsec.online%2Fconnected_account.php&scope=bot)', true)
    .setThumbnail(client.user.displayAvatarURL)
    .setImage('https://cdn.discordapp.com/attachments/747247527266615378/748008293213012068/info.gif')
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    // removed 


    message.channel.send({embed: infosembed}).then( () => {
      pusage.unmonitor(process.pid)
    })
    console.log(boxen('[Info] ' + message.guild.name + ' | ' + message.author.tag, {padding: 1}))
    var infosmlembed = new Discord.RichEmbed()
      .setColor(`#696969`)
      .setTitle('Info Command Used')
      .setDescription(message.author.username)
      .setAuthor(message.author.username ,message.author.avatarURL)
      // removed 
if(modlog) return modlog.send({embed: infosmlembed}).catch(console.error);
});
    } else {
            
      
      var infosembed = new Discord.RichEmbed()
          .setColor(`#696969`)
          .setTitle(client.user.username + ' Info')
          .addField('Owner', '`' + client.users.get('473300671169298432').tag + '`', true)
          .addField('Host', '[Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)', true)
          .addField('Library', '[' + data.library + '](https://discord.js.org/)', true )
          .addField('Language', '[' + data.language + '](https://nodejs.org/)', true)
          .addField('Uptime', prettyMs(client.uptime, {verbose: true}), true)
          .addField('CPU Usage', cpuusage + '%', true)
          .addField('Memory Usage', memusage + 'MB', true)
          .addField('Total Members', total, true )
          .addField('Server Count', client.guilds.size, true)
          .addField('Version', data.newversion, true)
    .addField('Invite', '[NULLBot Invite](https://discord.com/api/oauth2/authorize?client_id=696654238675107843&permissions=2147483127&redirect_uri=https%3A%2F%2Fnullsec.online%2Fconnected_account.php&scope=bot)', true)
    .setThumbnail(client.user.displayAvatarURL)
    .setImage('https://cdn.discordapp.com/attachments/725927843145449503/732024925350527046/powerd-by-pi.png')
          .setAuthor(client.user.username, client.user.displayAvatarURL)
          // removed 
      
      
          message.channel.send({embed: infosembed}).then( () => {
            pusage.unmonitor(process.pid)
          })
    }
  });
  
  });
}
module.exports.help = {
  name: "info",
  info: "Get info on NULLBot",
  usage: "info"
}
