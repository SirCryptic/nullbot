const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const boxen = require('boxen');
const fs = require('fs')
module.exports.run = (client, message, args, data, game, announcement, colors) => {
  var commandlock = data.lock
  if(commandlock.includes('true')) {       
    if(message.author.id !== data.ownerid) return message.channel.send('Sorry, but a command lock is in effect. Only the owner can use commands at this time.')   
  } 
var helpArg = args[1]
var pages = args[2]
console.log('helpArg | ' + helpArg)
console.log('pages | ' + pages)
  if(message.channel.type === 'dm') {
    var dmArg = args[1]
    var dmHelp = new Discord.RichEmbed()
      .setColor(`#696969`)
      .setDescription('To get a list of commands available for regular text channels use `' + data.prefix + 'help`')
	  .addField('**Information**', '`help` `ping` `info`')
	  .addField('**Entertainment**', '`rps`')
    if(dmArg === ('dm')) return message.channel.send({embed: dmHelp})
    var dmhelpembed = new Discord.RichEmbed()
  .setColor(`#696969`)
    .setTitle('NULLBot Commands')
    .setDescription('To get a list of commands available in DM channels use `' + data.prefix + 'help dm`\n\n**website:https://nullsec.online**')
    .addField('**Information**','`litemode` `bugreport` `changelog` `help` `ping` `info` `fun help`')
    .addField('**Server Info**','`inspect` `serversettings` `invite` `serverinfo` `avatar` `profile`')
    .addField('**Entertainment**','`translate` `emojify` `fliptext` `say` `randomcolor` `urban` `8ball` `f` `debate`')
    .addField('**More Entertainment**', '`copycat` `weather` `flip` `timer` `coinflip` `roll` `reverse` `joke` `djoke` `mjoke` `meme`')
    .addField('**OSINT**', '`nmap` `nikto` `http` `links` `dns` `mtr` `ras` `ztt`')
    .addField('**Content Generation**', '`morsecode` `binary` `url` `rot13` `base64` `qrcode` `txt` `yt`')
    .addField('**Moderation**','`warn` `warnings` `rules` `channelsettings` `report` `mute` `unmute` `ban` `unban` `kick` `purge` `mkchannel` `delchannel` `setnick`')
    .addField('**Owner Only Commands**','`flush` `settings`')
   return message.channel.send({embed: dmhelpembed})

  }
  if (!fs.existsSync(`./data/serverdata/${message.guild.id}/litemode.txt`)) {
    fs.writeFileSync(`./data/serverdata/${message.guild.id}/litemode.txt`, 'false', function(err) {
    });
  };
  fs.readFile(`./data/serverdata/${message.guild.id}/litemode.txt`, function(err, litedata) {
    if(!litedata.includes('true')) {
// Regular NULLBot
function noHelpArg() {
	var noArg = new Discord.RichEmbed()
	.setColor(`#696969`)
	.setTitle('NULLBot Beta Help')
	.setDescription(' NULLBot Beta version 1.0.6.\n\n' +
				'**Get help on available commands**\n' +
				'I know how hard it can be to learn how to use commands.\n\n' +
				'`' + data.prefix + 'help commands <page>`\n' +
				'The default page is 1 / ' + data.helpPages + '\n\n' + 
				'You can also use *some* commands in DM Channels. Just use `' +data.prefix + 'help` in a DM with NULLBot!\n\n' + 
				'**View the `' + data.newversion + '` changelog**\n' + 
				'`' + data.prefix + 'changelog`\n\n')
	.addField('Other Links', '[NULLSec Forums](https://nullsec.online)\n[Github](https://github.com/SirCryptic/)')
	.addField('Current Announcement', announcement.announce)
.setThumbnail(client.user.displayAvatarURL)
	message.channel.send({embed: noArg})
}
if(!helpArg) {
	return noHelpArg()
}
if(helpArg.includes('commands')) {
function helpPageOne() {
	var helpPageOne = new Discord.RichEmbed()
			.setTitle('NULLBot Command Page 1 / ' + data.helpPages)
			.setColor(`#696969`)
			.setDescription('Here\'s the first page of commands use `' + data.prefix + 'help commands <page>` to navigate\n\n' +
						'**fun help** - `n/fun help for list of fun commands`\n' +
						'**rot13** - `Encode and Decode the provided message in rot13 To Your DMs`\n' + 
						'**base64** - `Encode and Decode the provided message in Base64`\n' + 
						'**binary** - `Encode and Decode the provided message in binary`\n' +
						'**morsecode** - `Encode and Decode the provided message in Morse Code`\n' +
						'**leet** - `Turn the provided message into leet text`\n' +
					        '**qrcode** - `Encode and Recover QR Codes`\n' +
		                                '**txt** - `Write and Recover text files`\n' +
					        '**url** - `Shorten the provided URL`\n' +
		                                '**ping** - `Ping NULLBot**\n' +
						'**changelog** - `View the changes in this new version of NULLBot`\n' +
						'**help** - `Get documentation on available commands`\n' +
						'**info** - `Get info on NULLBot`\n' +
						'**console** - `Interact with the NULLBot CLI')
			.setFooter('Page 1 / ' + data.helpPages)
			.setAuthor(client.user.username, client.user.displayAvatarURL)
			message.channel.send({embed: helpPageOne})
}
function helpPageTwo() {
	var HelpPageTwo = new Discord.RichEmbed()
		.setTitle('NULLBot Command Page 2 / ' + data.helpPages)
		.setColor(`#696969`)
		.setDescription('**inspect** - `Inspect many types of URLs`\n' +
					'**profile** - `View the profile of yourself or of the mentioned member`\n' +
					'**uid** - `View the profile of yourself or of the Discord ID`\n' +
					'**crypto** - `search the blockchain for wallet` `n/crypto <walletid>`\n' +
					'**vote** - `make a vote` **requires** `voting` **channel**\n' +
					'**suggest** - `make a suggestion` **requires** `suggestions` **channel**\n' +
					'**invite** - `Get an invite to the server for the provided channel`')
		.setFooter('Page 2 / ' + data.helpPages)
		.setAuthor(client.user.username, client.user.displayAvatarURL)
		message.channel.send({embed: HelpPageTwo})
}
function helpPageThree() {
	 var HelpPageThree = new Discord.RichEmbed()
		.setTitle('NULLBot Command Page 3 /' + data.helpPages)
		.setColor(`#696969`)
		.setDescription('**bugreport** - `For Reporting Bugs With NULLBot`\n' +
		'**translate** - `Translate messages from English to the provided language`\n' +
		'**poll** - `Create A Poll`\n' +
		'**search** - `search duckduckgo`\n' +
		'**yt** - `Search youtube`')
		.setFooter('Page 3 / ' + data.helpPages)
		.setAuthor(client.user.username, client.user.displayAvatarURL)
		message.channel.send({embed: HelpPageThree})
		//.setDescription(
}
function helpPageFour() {
	var HelpPageFour = new Discord.RichEmbed()
		.setTitle('NULLBot Command Page 4 / ' + data.helpPages)
		.setColor(`#696969`)
		.setDescription('**kick** - `Kick the mentioned member`\n' +
		'**rules** - `View the rules of the server`\n' +
		'**serverinfo** - `View the current server/guild\'s info`\n' +
		'**serversettings** - `Change how NULLBot functions for your server`\n' + 
		'**setnick** - `Set the nickname of the mentioned member`\n' +
		'**softban** - `Bans then unbans the mentioned member`\n' + 
	        '**announce** - `Make announcements in a seperate channel`\n' +
		'**unban** - `Unban the mentioned member`\n' +
		'**unmute** - `Unmute the mentioned member`\n' +
		'**mute** - `mute the mentioned member`\n' +
		'**delchannel** - `Delete the current text channel`\n' + 
		'**channelsettings** - `Modify the metadata of the current channel`\n' +
		'**report** - `Report the mentioned member <reason text>`\n' +  
		'**warn** - `Warn the mentioned member`\n' +
		'**warnings** - `Check the warnings of the mentioned user`\n')
		.setFooter('Page 4 / ' + data.helpPages)
		.setAuthor(client.user.username, client.user.displayAvatarURL)
		message.channel.send({embed: HelpPageFour})
}
function helpPageFive() {
	var HelpPageFive = new Discord.RichEmbed()
	.setTitle('NULLBot Command Page 5 / ' + data.helpPages)
	.setColor(`#696969`)
	.setDescription('**flush** - `Flush parts of NULLBot`\n' +
									'**litemode** - `Toggle NULLBot LiteMode`\n' +
									'**settings** - `Change the settings of NULLBot`')
	.setFooter('Page 5 / ' + data.helpPages)
	.setAuthor(client.user.username, client.user.displayAvatarURL)
	message.channel.send({embed: HelpPageFive})
}
var parsedPages = parseFloat(pages)
var parsedMaxPages = parseFloat(data.helpPages)
if(parsedPages < 1) {
	return helpPageOne()
}
if(parsedPages > parsedMaxPages ) {
	return helpPageOne()
}
	if(!pages) {
	return helpPageOne()
}
	if(parsedPages == 1) {
	return helpPageOne()
}
	if(parsedPages == 2) {
	return helpPageTwo()
}
if(parsedPages == 3) {
	return helpPageThree()
}
if(parsedPages == 4) {
	return helpPageFour()
}
if(parsedPages == 5) {
	return helpPageFive()
}


}
  return noHelpArg()

    } else {
			function noHelpArg() {
				var noArg = new Discord.RichEmbed()
				.setColor(`#696969`)
				.setTitle('NULLBot Help')
				.setDescription('The Beta Bot Of All Bots. NULLBot can suit all of your needs; whether it\'s for fun or moderation NULLBot has your back.\n\n' +
							'**Get help on available commands**\n' +
							'I know how hard it can be to learn how to use commands.\n\n' +
							'`' + data.prefix + 'help commands <page>`\n' +
							'The default page is 1 / ' + data.helpPages + '\n\n')
				.addField('Other Links', '[NULLSec Forums](https://nullsec.online/)\n[Developer Github](https://github.com/sircryptic)')
				.addField('Current Announcement', data.announcement)
			.setThumbnail(client.user.displayAvatarURL)
				message.channel.send({embed: noArg})
			}
			if(!helpArg) {
				return noHelpArg()
			}
			if(helpArg.includes('commands')) {
			function helpPageOne() {
				var helpPageOne = new Discord.RichEmbed()
						.setTitle('NULLBot Command Page 1 / ' + data.helpPages)
						.setColor(`#696969`)
						.setDescription('Here\'s the first page of commands use `' + data.prefix + 'help commands <page>` to navigate\n\n' +
						'**rot13** - `Encode and Decode the provided message in rot13 To Your DMs`\n' +  
						'**base64** - `Encode and Decode the provided message in Base64`\n' + 
						'**binary** - `Encode and Decode the provided message in binary`\n' +
						'**morsecode** - `Encode and Decode the provided message in Morse Code`\n' +
					        '**qrcode** - `Encode and Recover QR Codes`\n' +
		                                '**txt** - `Write and Recover text files`\n' +
					        '**url** - `Shorten the provided URL`\n' +
		                                '**ping** - `Ping NULLBot**\n' +
						'**changelog** - `View the changes in this new version of NULLBot`\n' +
						'**help** - `Get documentation on available commands`\n' +
						'**info** - `Get info on NULLBot`\n' +
						'**console** - `Interact with the NULLBot CLI')
						.setFooter('Page 1 / ' + data.helpPages)
						.setAuthor(client.user.username, client.user.displayAvatarURL)
						message.channel.send({embed: helpPageOne})
			}
			function helpPageTwo() {
				var HelpPageTwo = new Discord.RichEmbed()
					.setTitle('NULLBot Command Page 2 / ' + data.helpPages)
					.setColor(`#696969`)
					.setDescription('**inspect** - `Inspect many types of URLs`\n' +
					'**profile** - `View the profile of yourself or of the mentioned member`\n' +
					'**uid** - `View the profile of yourself or of the Discord ID`\n' +
					'**crypto** - `search the blockchain for wallet` `n/crypto <walletid>`\n' +
					'**vote** - `make a vote` **requires** `voting` **channel**\n' +
					'**invite** - `Get an invite to the server for the provided channel`')
					.setFooter('Page 2 / ' + data.helpPages)
					.setAuthor(client.user.username, client.user.displayAvatarURL)
					message.channel.send({embed: HelpPageTwo})
			}
			function helpPageThree() {
				 var HelpPageThree = new Discord.RichEmbed()
					.setTitle('NULLBot Command Page 3 /' + data.helpPages)
					.setColor(`#696969`)
					.setDescription('**bugreport** - `For Reporting Bugs With NULLBot`\n' +
					'**translate** - `Translate messages from English to the provided language`\n' +
					'**poll** - `Create A Poll`\n' +
					'**search** - `search duckduckgo`\n' +
					'**yt** - `Search youtube returns as DM **BETA**`\n' +
					'**say** - `Returns the message provided in an embed`')
					.setFooter('Page 3 / ' + data.helpPages)
					.setAuthor(client.user.username, client.user.displayAvatarURL)
					message.channel.send({embed: HelpPageThree})
					//.setDescription(
			}
			function helpPageFour() {
				var HelpPageFour = new Discord.RichEmbed()
					.setTitle('NULLBot Command Page 4 / ' + data.helpPages)
					.setColor(`#696969`)
					.setDescription('**kick** - `Kick the mentioned member`\n' +
					'**rules** - `View the rules of the server`\n' +
					'**serverinfo** - `View the current server/guild\'s info`\n' +
					'**serversettings** - `Change how NULLBot functions for your server`\n' + 
					'**setnick** - `Set the nickname of the mentioned member`\n' +
					'**softban** - `Bans then unbans the mentioned member`\n' + 
	      				'**announce** - `Make announcements in a seperate channel`\n' +
					'**unban** - `Unban the mentioned member`\n' +
					'**unmute** - `Unmute the mentioned member`\n' +
					'**mute** - `mute the mentioned member`\n' +
					'**delchannel** - `Delete the current text channel`\n' + 
					'**channelsettings** - `Modify the metadata of the current channel`\n' +
					'**report** - `Report the mentioned member <reason text>`\n' + 
					'**warn** - `Warn the mentioned member`\n' +
					'**warnings** - `Check the warnings of the mentioned user`\n')
					.setFooter('Page 4 / ' + data.helpPages)
					.setAuthor(client.user.username, client.user.displayAvatarURL)
					message.channel.send({embed: HelpPageFour})
			}
			function helpPageFive() {
				var HelpPageFive = new Discord.RichEmbed()
				.setTitle('NULLBot Command Page 5 / ' + data.helpPages)
				.setColor(`#696969`)
				.setDescription('**jsexec** - `Execute NodeJS through eval`\n' +
									'**flush** - `Flush parts of NULLBot`\n' +
									'**litemode** - `Toggle NULLBot LiteMode`\n' +
									'**settings** - `Change the settings of NULLBot`')
				.setFooter('Page 5 / ' + data.helpPages)
				.setAuthor(client.user.username, client.user.displayAvatarURL)
				message.channel.send({embed: HelpPageFive})
			}
			var parsedPages = parseFloat(pages)
var parsedMaxPages = parseFloat(data.helpPages)
if(parsedPages < 1) {
	return helpPageOne()
}
if(parsedPages > parsedMaxPages ) {
	return helpPageOne()
}
	if(!pages) {
	return helpPageOne()
}
	if(parsedPages == 1) {
	return helpPageOne()
}
	if(parsedPages == 2) {
	return helpPageTwo()
}
if(parsedPages == 3) {
	return helpPageThree()
}
if(parsedPages == 4) {
	return helpPageFour()
}
if(parsedPages == 5) {
	return helpPageFive()
}
		}
		return noHelpArg()
      
    }
  });

}
module.exports.help = {
  name: "help",
  info: "Get documentation on all of NULLBot's commands",
  usage: "help"
}
