const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const boxen = require('boxen');
const fs = require('fs')
module.exports.run = (client, message, args, data, game, announcement, colors) => {
  var commandlock = data.lock
  if(commandlock.includes('true')) {       
    if(message.author.id !== data.ownerid) return message.channel.send('Sorry, but a command lock is in effect. Only the owner can use commands at this time.')   
  } 
var funhelpArg = args[1]
var pages = args[2]
console.log('funhelpArg | ' + funhelpArg)
console.log('pages | ' + pages)
  if(message.channel.type === 'dm') {
    var dmfunhelpArg = args[1]
    var dmfunhelp = new Discord.RichEmbed()
      .setColor(`#696969`)
      .setDescription('To get a list of commands available for regular text channels use `' + data.prefix + 'fun help`')
	  .addField('**Information**', '`help` `ping` `info`')
	  .addField('**Entertainment**', '`rps`')
    if(dmfunhelpArg === ('dm')) return message.channel.send({embed: dmfunhelp})
    var dmfunhelpembed = new Discord.RichEmbed()
  .setColor(`#696969`)
    .setTitle('NULLBot fun Commands')
    .setDescription('To get a list of commands available in DM channels use `' + data.prefix + 'help dm`\n\n**website:https://nullsec.online**')
    .addField('**memes**','`meme` `heme` `placeholder` `placeholder` `placeholder` `placeholder`')
    .addField('**fun**','`djoke` `mjoke` `joke` `waste` `placeholder` `placeholder` `placeholder`')
   return message.channel.send({embed: dmfunhelpembed})

  }
  if (!fs.existsSync(`./data/serverdata/${message.guild.id}/litemode.txt`)) {
    fs.writeFileSync(`./data/serverdata/${message.guild.id}/litemode.txt`, 'false', function(err) {
    });
  };
  fs.readFile(`./data/serverdata/${message.guild.id}/litemode.txt`, function(err, litedata) {
    if(!litedata.includes('true')) {
// Regular NULLBot
function nofunHelpArg() {
	var noArg = new Discord.RichEmbed()
	.setColor(`#696969`)
	.setTitle('NULLBot Fun Commands Help')
	.setDescription(' NULLBot Beta version 1.0.5.\n\n' +
				'**Get help on all available fun commands**\n' +
				'`' + data.prefix + 'fun help <page>`\n' +
				'The default page is 1\n' + 
				'**View the `' + data.newversion + '` changelog**\n' + 
				'`' + data.prefix + 'changelog`\n\n')
	.addField('Other Links', '[NULLSec Forums](https://nullsec.online)\n[Github](https://github.com/SirCryptic/)')
	.addField('Current Announcement', announcement.announce)
.setThumbnail(client.user.displayAvatarURL)
	message.channel.send({embed: noArg})
}
if(!funhelpArg) {
	return nofunHelpArg()
}
if(funhelpArg.includes('help')) {
function funhelpPageOne() {
	var funhelpPageOne = new Discord.RichEmbed()
			.setTitle('NULLBot Fun Command Page 1')
			.setColor(`#696969`)
			.setDescription('Here\'s the first page of fun commands to use <more to come soon>\n' +
					'**8ball** - `Ask NULLBot a question for a decision`\n' +
					'**flip** - `Full Table Flip`\n' +
					'**coinflip** - `Flip a coin`\n' +
					'**waste** - `waste yourself or another discord user`\n' +
					'**meme** -   `Random meme from subreddits`\n' +
					'**heme** -   `Random Programming meme from subreddits`\n' +
					'**joke** -   `Random Joke`\n' +
					'**djoke** -   `Random Dad Joke`\n' +
					'**mjoke** - `Random Yo Mamma Joke`\n' +
					'**urban** - `Look up a word in the urban dictionary`\n' + 
					'**emojify** - `Emojify the provided message if possible`\n' + 
					'**reverse** - `Reverse Text`\n' +
					'**randomcolor** - `Get a random color in Hex, RGB, LAB, and CMYK`\n' +
		                        '**timer** - `Set a timer for a maximum of 12 hours`\n' +
					'**avatar** - `View the avatar of yourself or of the mentioned member`\n' +
					'**quote** - `random quote`\n' +
					'**anime** - `search anime titles`\n' +
					'**weather** - `Weather Info For Any Location Provided`\n' + 
					'**f** - `tag a user to pay respects`\n' +
					'**debate** - `genreate a image with your text`\n' +
					'**slap** - `slap another discord user :joy: `\n' +
					'**numbergame** - `play a quick number guessing game`\n' +
					'**roll** - `roll some dice`\n' +
						'**rps** - `Play Rock, Paper, Scissors with NULLBot`')
			.setFooter('Page 1')
			.setAuthor(client.user.username, client.user.displayAvatarURL)
			message.channel.send({embed: funhelpPageOne})
}

var parsedPages = parseFloat(pages)
var parsedMaxPages = parseFloat(data.funhelpPages)
if(parsedPages < 1) {
	return funhelpPageOne()
}
if(parsedPages > parsedMaxPages ) {
	return funhelpPageOne()
}
	if(!pages) {
	return funhelpPageOne()
}
	if(parsedPages == 1) {
	return funhelpPageOne()
}


}
  return nofunHelpArg()

    } else {
			function nofunHelpArg() {
				var noArg = new Discord.RichEmbed()
				.setColor(`#696969`)
				.setTitle('NULLBot Fun Help')
				.setDescription('The Beta Bot Of All Bots. NULLBot can suit all of your needs; whether it\'s for fun or moderation NULLBot has your back.\n\n' +
							'**Get help on available commands**\n' +
							'I know how hard it can be to learn how to use commands.\n\n' +
							'`' + data.prefix + 'fun help <page>`\n' +
							'The default page is 1 / ' + data.funhelpPages + '\n\n')
				.addField('Other Links', '[NULLSec Forums](https://nullsec.online/)\n[Developer Github](https://github.com/sircryptic)')
				.addField('Current Announcement', data.announcement)
			.setThumbnail(client.user.displayAvatarURL)
				message.channel.send({embed: noArg})
			}
			if(!funhelpArg) {
				return nofunHelpArg()
			}
			if(funhelpArg.includes('help')) {
			function funhelpPageOne() {
				var funhelpPageOne = new Discord.RichEmbed()
                .setTitle('NULLBot Fun Command Page 1 / ' + data.funhelpPages)
                .setColor(`#696969`)
                .setDescription('Here\'s the first page of fun commands use `' + data.prefix + 'fun help <page>` to navigate <more to come soon>\n\n' +
					'**8ball** - `Ask NULLBot a question for a decision`\n' +
					'**flip** - `Full Table Flip`\n' +
					'**coinflip** - `Flip a coin`\n' +
					'**waste** - `waste yourself or another discord user`\n' +
					'**meme** -   `Random meme from subreddits`\n' +
					'**heme** -   `Random Programming meme from subreddits`\n' +
					'**joke** -   `Random Joke`\n' +
					'**djoke** -   `Random Dad Joke`\n' +
					'**mjoke** - `Random Yo Mamma Joke`\n' +
					'**urban** - `Look up a word in the urban dictionary`\n' + 
					'**emojify** - `Emojify the provided message if possible`\n' + 
					'**reverse** - `Reverse Text`\n' +
					'**randomcolor** - `Get a random color in Hex, RGB, LAB, and CMYK`\n' +
		                        '**timer** - `Set a timer for a maximum of 12 hours`\n' +
					'**avatar** - `View the avatar of yourself or of the mentioned member`\n' +
					'**quote** - `random quote`\n' +
					'**anime** - `search anime titles`\n' +
					'**weather** - `Weather Info For Any Location Provided`\n' + 
					'**f** - `tag a user to pay respects`\n' +
					'**copycat** - `Make a copycat of yourself`\n' +
					'**say** - `Returns the message provided in an embed`\n' +
					'**rps** - `Play Rock, Paper, Scissors with NULLBot`')
						.setFooter('Page 1 / ' + data.funhelpPages)
						.setAuthor(client.user.username, client.user.displayAvatarURL)
						message.channel.send({embed: funhelpPageOne})
			}
			var parsedPages = parseFloat(pages)
var parsedMaxPages = parseFloat(data.funhelpPages)
if(parsedPages < 1) {
	return funhelpPageOne()
}
if(parsedPages > parsedMaxPages ) {
	return funhelpPageOne()
}
	if(!pages) {
	return funhelpPageOne()
}
	if(parsedPages == 1) {
	return funhelpPageOne()
}
		}
		return noHelpArg()
      
    }
  });

}
module.exports.help = {
  name: "fun",
  info: "Get documentation on all of NULLBot's commands",
  usage: "n/fun help <page>"
}
