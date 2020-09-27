const Discord = require("discord.js");


exports.run = (client, message, args) => {
	let userID = message.author.id;

	//Find by mention
	if(args.join('').startsWith("<@") || args.join('').startsWith("<!@")){
	userID = args[1];
	userID = userID.replace("<@", " ");
	userID = userID.replace("<@!", " ");
	userID = userID.replace(">", " ");
	userID = userID.replace("!", " ");
	} else if(!args[1]){
		userID = message.author.id;
	} else if(args[1].match(/^\d/)){
		userID = args[1];
	}

	function dhm(t){
		var cd = 24 * 60 * 60 * 1000,
			ch = 60 * 60 * 1000,
			d = Math.floor(t / cd),
			h = Math.floor( (t - d * cd) / ch),
			m = Math.round( (t - d * cd - h * ch) / 60000),
			pad = function(n){ return n < 10 ? '0' + n : n; };
	  if( m === 60 ){
		h++;
		m = 0;
	  }
	  if( h === 24 ){
		d++;
		h = 0;
	  }
	  return [d, pad(h), pad(m)].join(':');
	}

	client.fetchUser(userID).then((member) => {

		if(!member) return;

		//console.log(member);

		if(!member.avatarURL){
			var thumbnailVar = "https://www.kitk.us/image/discord.png";
		} else {
			var thumbnailVar = member.avatarURL;
		}

		//console.log(member);
		var gDate = new Date(userID /4194304 + 1420070400000);
		var lUsername = `${member.username}#${member.discriminator}`;

		if(member.bot){
			lUsername = lUsername + ' **This User Is A** :robot:';
		}

		const embed = new Discord.RichEmbed()
				.setAuthor(`User Lookup`, `${message.author.avatarURL}`)
				.setThumbnail(`${thumbnailVar}`)
				.addField("Username", `${lUsername}`)
				.addField("User ID", `${member.id}`)
				.addField("Account Age", dhm((Date.parse(new Date(userID /4194304 + 1420070400000))) - Date.now()).replace("-", "") + `\n**Created** ${gDate}`)
    				.setColor(`#696969`)
				message.channel.send({embed});

	});
}

exports.conf = {
    help: "Look up a user by their ID",
    format: "lid [ID]",
    DM: true,
    OwnerOnly: false,
}
module.exports.help = {
  name: "uid",
  info: "lookup a user by their ID",
  usage: "uid"
}
