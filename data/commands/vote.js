const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
        if(!args[0]) return message.channel.send("Usage: **/voting <text here>**").then(msg => {msg.delete(3000)});;
        const voting = args.slice(1).join(' ');
        if(!voting) return message.channel.send("Please write a voting!");
        let user = bot.user
        let iconURL = user.avatarURL

        const voteEmbed = new Discord.RichEmbed()
        .setDescription(`There is a new vote posted by **${message.author.username}**`)
        .setColor('GREY')
        .addField(`vote:`, voting)
        .setTimestamp()
        .setFooter(bot.user.username, (iconURL));

        let votechannel = message.guild.channels.find(`name`, "voting");
        if (!votechannel) return message.channel.send("Couldn't find votings channel.").then(msg => {msg.delete(5000)});;

        let vote = await votechannel.send(voteEmbed);
        message.channel.send(":white_check_mark: You have successfully placed a voting.").then(msg => {msg.delete(5000)});;

        await vote.react('👍');
        await vote.react('👎');
    	await vote.react('🤷');
    
}

module.exports.help = {
    name: "vote",
    aliases: ["vote"],
}