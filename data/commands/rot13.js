const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	if (!args) return;

	let input = args.join(' ');

	if (input.length === 0) return;

	let output = input.split('');
	output.forEach((c, i, s) => {
		s[i] = rot(c, 13);
	});

	message.channel.send(output.join(''));
	message.delete()
};

module.exports.help = {
	name: 'rot13',
	description: 'PM this bot with !rot13 <message> to encode/decode spoilers, react to messages with :1234: to decode them automagically'
};

// http://stackoverflow.com/a/617685/987044
function rot(s, i){
	return s.replace(/[a-zA-Z]/g, c => {
		return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26);
	});
}