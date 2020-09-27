const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	let roles = message.guild.roles.array();

	// Filter out @everyone and roles that have management powers
	let roleList = roles.filter(r =>
		!r.hasPermission('MANAGE_ROLES') &&
		!r.hasPermission('KICK_MEMBERS') &&
		!r.hasPermission('BAN_MEMBERS') &&
		r.name !== '@everyone');

	// Put their names in a new array to prevent pinging when sent
	roleList = roleList.map(r => r.name);

	return message.channel.send(roleList.join(', '));
};

module.exports.help = {
	name: 'roles',
	description: 'Prints the list of roles'
};