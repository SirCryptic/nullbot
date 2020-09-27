const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if (!message.guild.member(bot.user).hasPermission('MANAGE_GUILD')) return message.channel.send("I do not have permissions to see the inviations!")

    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I can not see the invitations.');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function (invites) {
        possibleinvites.push(`\`${invites.inviter.username}\` invited **${invites.uses}** people!`)
    })

    let pages = [];
    for (let i = 0; i < possibleinvites.length;) {
        if ((i + 9) > possibleinvites.length) {
            pages.push(possibleinvites.slice(i, (i + 9) - ((i + 9) - possibleinvites.length)).join("\n"));
            break;
        } else {
            pages.push(possibleinvites.slice(i, i + 9).join("\n"));
            i += 9
        };
    }
    let page = 1;

    const embed = new RichEmbed()
        .setTitle(`${message.guild.name} - Top inviters`)
        .setColor('GREY')
        .setFooter(`Page: ${page}/${pages.length}`)
        .setDescription(pages[page - 1])
        .setTimestamp();
    message.channel.send(embed).then(msg => {
        if (!message.guild.member(bot.user).hasPermission('ADD_REACTIONS')) return;

        msg.react("◀").then(r => {
            msg.react("▶")

            const backF = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const ForF = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;

            const back = msg.createReactionCollector(backF, { time: 180000 });
            const For = msg.createReactionCollector(ForF, { time: 180000 });

            back.on('collect', async r => {
                r.remove(message.author.id)
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });

            For.on('collect', async r => {
                r.remove(message.author.id)
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });
        });
    });
}
exports.help = {
    name: "topinvs",
    aliases: ["topinv", "topinviters"],
}