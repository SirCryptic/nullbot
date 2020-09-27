const discord = require('discord.js');
const request = require('request');
const subs = [ 'hmmm', 'dankmemes', 'memes', 'funny', 'deepfriedmemes', 'wholesomememes', 'meirl', 'me_irl', '2meirl4meirl', 'ComedyCemetery', 'Memes_Of_The_Dank']
module.exports.run = async (bot, message, args) => {
    var sub = subs[Math.floor(Math.random() * subs.length)];
    console.log(sub)

    if (message.channel.nsfw === false) {

        request(`https://reddit.com/r/${sub}/random.json`, function (error, response, body) {
            body = JSON.parse(body)
            var data = body[0]['data']['children'][0]['data']
            var embed = new discord.RichEmbed()
            
            if(data['url'].match('.jpg') || data['url'].match('.png')) {
                embed.setColor(`#696969`)
                embed.setTitle(`r/${sub}`)
                embed.setURL(`https://reddit.com${data['permalink']}`)
                embed.setFooter(`Meme by ${data['author']} 🤭`)
                embed.setImage(data['url'])
                message.channel.send(embed);
            } else if(data['url'].match('gfycat, youtube, github, tenor')) {
                console.log('shmeet ')
                embed.setColor(`#696969`)
                embed.setTitle(`r/${sub}`)
                embed.setURL(`https://reddit.com${data['permalink']}`)
                embed.setFooter(`Meme by ${data['author']} 🤭`)
                embed.setImage(data['url']+'.gif')
                message.channel.send(embed);
            }
        });
    } else {
        message.channel.send('Posting Memes in a NSFW Channel dont make sense bruh!')
    }
}

module.exports.help = {
    name: 'meme',
    usage: 'n/meme',
    description: 'Gets a random meme via Reddit!'
} 