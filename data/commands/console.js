const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const boxen = require('boxen');
const fs = require('fs')
const prettyMs = require('pretty-ms');
const pusage = require('pidusage');
const cowsay = require('cowsay');
const figlet = require('figlet');

module.exports.run = (client, message, args, data, game, announcement, colors) => {
    var commandlock = data.lock
  if(commandlock.includes('true')) {       
    if(message.author.id !== data.ownerid) return message.channel.send('Sorry, but a command lock is in effect. Only the owner can use commands at this time.')   
  } 
  /*
  Created By Nullsec
  */
  
function parseAddress(str) {
    if (!typeof str === "string") {return null;}
    if (str.includes("&") || str.includes("|") || str.includes(";")) {return "127.0.0.1";}
    return str;
}

function isValidInput(str) {
    if (!typeof str === "string") {return false;}
    if (str.includes("&") || str.includes("|") || str.includes(";")) {return false;}
    return true;
}

    var command = args[1]
    var basicParameter = args[2]
    var advParameter = message.content.split(/\s+/g).slice(2).join(" ");
    var terParameter = message.content.split(/\s+/g).slice(3).join(" "); 
    var cmd = message.content.split(' ').slice(1).join(' ')

    var consoleHeader = '```' + client.user.username +' v' + data.newversion + ' Console v' + data.consoleVer + '\n' +
                        '____________________________________________________________\n' 
    var noCommand = '\nError: No command specified.\n' +
                    'Use ' + data.prefix + 'console help for more info.```'
    var noCMD = new Discord.RichEmbed()
        .setColor(`#696969`)
        .setDescription(consoleHeader + noCommand)
    if(cmd.length < 1) return message.channel.send({embed: noCMD})
    if(command.includes('help')) {
        var commandHelp = '\n' +client.user.username + ' Help Command v' + data.consoleVer +'\n\n' +
                        data.prefix + 'console help - List all available commands\n' +
                        data.prefix + 'console nmap - Detect OS & Find Open Ports On A Host\n' +
                        data.prefix + 'console nikto - Scan A Host For Vulnrabiltys\n' +
                        data.prefix + 'console links - Extract All Links From A Host\n' +
                        data.prefix + 'console dns - DNS Lookup On A Domain\n' +
                        data.prefix + 'console rdns - Reverse DNS Lookup On A Domain or IP\n' +
                        data.prefix + 'console mtr -  Measures The Speed & Route Data Takes To A Host\n' +
                        data.prefix + 'console http - Review the HTTP Headers From A Web Server\n' +
                        data.prefix + 'console bgrab - Discover Network Services\n' +
                        data.prefix + 'console ras - Reverse Analytics Search Domain Or ID\n' +
                        data.prefix + 'console ztt - Attempt to get all DNS records For Host. \n' +
                        data.prefix + 'console pnsearch - Attempt To Get Phone Number Information. \n' +
                        data.prefix + 'console ipsearch - Attempt To Get Information From An IP. \n' +
                        data.prefix + 'console sys - Shows system info\n' + 
                        data.prefix + 'console cowthink - Use the cowthink From Linux\n' +
                        data.prefix + 'console cowsay - Use the cowsay From Linux\n' +
                        data.prefix + 'console figlet - Use the Figlet From Linux```'
        var cmdHelp = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandHelp)
            return message.channel.send({embed: cmdHelp})
    }
    if(command.includes('sys')) {
        pusage.stat(process.pid, function (err, stat) {
            var cpuusage = parseFloat(Math.round(stat.cpu * 100) / 100).toFixed(2)
            var memusage = parseFloat(Math.round(stat.memory / 1000000 * 100) / 100).toFixed(2)
        var commandSys1 = '\n' + client.user.username + ' System Command v' + data.consoleVer + '\n\n' +
                        'Retrieving System Info...```'
        var  commandSys2 = '\n' + client.user.username + ' System Command v' + data.consoleVer + '\n\n' +
                            'System Uptime -- ' + prettyMs(client.uptime, {verbose: true}) + '\n' + 
                            'CPU Usage -- ' + cpuusage + '%\n' + 
                            'Memory Usage -- ' + memusage + 'MB\n```'
        var cmdSys1 = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandSys1)
        var cmdSys2 = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandSys2)
        message.channel.send({embed: cmdSys1}).then(msg => {
            function sysInfo() {
                msg.edit({embed: cmdSys2})
            }
            setTimeout(sysInfo, 3000)
            return;
        })

        return;
        });
        return;
    }
    if(command.includes('cowsay')) {
        var commandCowSayNoArg = '\n' + client.user.username +' Cowsay Command v' + data.consoleVer + '\n' +  
                            '\nERROR\n' +
                            'Invalid argument provided\nMessage: PLEASE PROVIDE MESSAGE```'
        var cmdCowSayNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandCowSayNoArg)

        if(advParameter.length < 1) return message.channel.send({embed: cmdCowSayNoArg})
        var commandCowSay = '\n' + client.user.username +' Cowsay Command v' + data.consoleVer + '\n' +  
                               '' +  cowsay.say({text: advParameter, e: "oO", T: "U"}) + '```'
        var cmdCowSay = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandCowSay)
        return message.channel.send({embed: cmdCowSay})
    }
    if(command.includes('cowthink')) {
        var commandCowSayNoArg = '\n' + client.user.username +' Cowthink Command v' + data.consoleVer + '\n' +  
                            '\nERROR\n' +
                            'Invalid argument provided\nMessage: Please provide something for the cow to think```'
        var cmdCowSayNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandCowSayNoArg)

        if(advParameter.length < 1) return message.channel.send({embed: cmdCowSayNoArg})
        var commandCowSay = '\n' + client.user.username +' Cowthink Command v' + data.consoleVer + '\n' +  
                               '' +  cowsay.think({text: advParameter, e: "oO", T: "U"}) + '```'
        var cmdCowSay = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandCowSay)
        return message.channel.send({embed: cmdCowSay})
    }
    if(command.includes('figlet')) {
        var commandFigletNoArg = "\n"  + client.user.username + ' Figlet Command v' + data.consoleVer + '\n' +
                                 "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE TEXT```"
        var commandFigletNoColor = "\n"  + client.user.username + ' Figlet Command v' + data.consoleVer + '\n' +
                                    "\nError\n" +
                                    "Invalid argument provided\nMessage: PLEASE PROVIDE COLOR\n\nUse " + data.prefix +"console figlet help for more help```"
        var commandFigletHelp = "\n"  + client.user.username + ' Figlet Command v' + data.consoleVer + '\n' +
                                "\nFiglet Help\n" + 
                                data.prefix + "console figlet css <text>\n" +
                                data.prefix + "console figlet md <text>\n" +
                                data.prefix + "console figlet js <text>\n" +
                                data.prefix + "console figlet c# <text>\n" +
                                data.prefix + "console figlet bash <text>\n" +
                                data.prefix + "console figlet php <text>\n" +
                                data.prefix + "console figlet shell <text>\n" +
                                data.prefix + "console figlet java <text>\n" +
                                data.prefix + "console figlet help```"
        var commandFigletWrongColor = "\n"  + client.user.username + ' Figlet Command v' + data.consoleVer + '\n' +
                                    "\nError\n" + 
                                    "Figlet Color, " + basicParameter + ", does not exist.\nUse " + data.prefix +"console figlet help```"
        var validColors = ['css', 'md', 'js', 'c#', 'java', 'bash', 'php', 'shell']
        var cmdFigletNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandFigletNoArg)
        var cmdFigletNoColor = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandFigletNoColor)
        var cmdFigletHelp = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandFigletHelp)
        var cmdFigletWrongColor = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandFigletWrongColor)
        if(!basicParameter) return message.channel.send({embed: cmdFigletNoColor})
        if(basicParameter.includes('help')) return message.channel.send({embed: cmdFigletHelp})
        if(validColors.some(col => advParameter.includes(col))) {
        figlet(terParameter, function(err, fig) {
            var commandFigletErr = "\n"  + client.user.username + ' Figlet Command v' + data.consoleVer + '\n' +
                                    "\nERROR\n" +
                                    "An unexpected error occurred: " + err + '```'
            var cmdFigletErr = new Discord.RichEmbed()
                .setColor(colors.critical)
                .setDescription(consoleHeader + commandFigletErr)
        
        if(err) return message.channel.send({embed: cmdFigletErr})

        var commandFiglet = "\n"  + client.user.username + ' Figlet Command v' + data.consoleVer + '```' +
                            "```" + basicParameter +"\n" + fig + "```"
        var cmdFiglet = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandFiglet)
            return message.channel.send({embed: cmdFiglet})
        });
        return;
    } else return message.channel.send({embed: cmdFigletWrongColor})
    return;
    }


	  if(command.includes('rdns')) {
        const { exec } = require('child_process');
        var commandsshscanNoArg = "\n" + client.user.username + ' Reverse DNS Lookup v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE IP ADDRESS / RANGE OR DOMAIN```"
        var retardoText = "\n" + client.user.username + ' SSHScanner By Evict v v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdsshscanshNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandsshscanNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdsshscanNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandsshscaning = "\n" + client.user.username + ' Reverse DNS Lookup v' + data.consoleVer + '\n' + 
                                "\Scanning Host\n```"
            var cmdsshscaning = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandsshscaning)
             message.channel.send({embed: cmdsshscaning}).then(message => {

             
        exec('curl https://api.hackertarget.com/reversedns/?q=' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandsshscanErr = "\n" + client.user.username + ' Reverse DNS Lookup v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdsshscanErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandsshscanErr)
                return message.edit({embed: cmdsshscanErr})
            }
            var commandsshscan = "\n" + client.user.username + ' Reverse DNS Lookup v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdsshscan = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandsshscan)
                return message.edit({embed: cmdsshscan})
          
          });
        })
          return;
        }
        
    }

	  if(command.includes('ipsearch')) {
        const { exec } = require('child_process');
        var commandnmapNoArg = "\n" + client.user.username + ' IP Lookup Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A IP```"
        var retardoText = "\n" + client.user.username + ' IP Lookup Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdnmapNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandnmapNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdnmapNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandnmaping = "\n" + client.user.username + ' IP Lookup Command v' + data.consoleVer + '\n' + 
                                "\Searching IP Info...\n```"
            var cmdnmaping = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandnmaping)
             message.channel.send({embed: cmdnmaping}).then(message => {

             
        exec('curl http://ip-api.com/json/' + parseAddress(basicParameter) + '?fields=66846719', (err, stdout, stderr) => {
            if (err) {
                var commandnmapErr = "\n" + client.user.username + ' IP Lookup Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdnmapErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandnmapErr)
                return message.edit({embed: cmdnmapErr})
            }
            var commandnmap = "\n" + client.user.username + ' IP Lookup Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdnmap = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandnmap)
                return message.edit({embed: cmdnmap})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('pnsearch')) {
        const { exec } = require('child_process');
        var commandnmapNoArg = "\n" + client.user.username + ' Phone Number Lookup Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A PHONE NUMBER```"
        var retardoText = "\n" + client.user.username + ' Phone Number Lookup Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdnmapNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandnmapNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdnmapNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandnmaping = "\n" + client.user.username + ' Phone Number Lookup Command v' + data.consoleVer + '\n' + 
                                "\Searching For Info...\n```"
            var cmdnmaping = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandnmaping)
             message.channel.send({embed: cmdnmaping}).then(message => {

             
        exec('curl https://api.telnyx.com/anonymous/v2/number_lookup/' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandnmapErr = "\n" + client.user.username + ' Phone Number Lookup Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdnmapErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandnmapErr)
                return message.edit({embed: cmdnmapErr})
            }
            var commandnmap = "\n" + client.user.username + ' Phone Number Lookup Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdnmap = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandnmap)
                return message.edit({embed: cmdnmap})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('nmap')) {
        const { exec } = require('child_process');
        var commandnmapNoArg = "\n" + client.user.username + ' nmap Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE HOST TO NMAP```"
        var retardoText = "\n" + client.user.username + ' nmap Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdnmapNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandnmapNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdnmapNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandnmaping = "\n" + client.user.username + ' nmap Command v' + data.consoleVer + '\n' + 
                                "\Mapping Network...\n```"
            var cmdnmaping = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandnmaping)
             message.channel.send({embed: cmdnmaping}).then(message => {

             
        exec('nmap -Pn' + ' ' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandnmapErr = "\n" + client.user.username + ' nmap Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdnmapErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandnmapErr)
                return message.edit({embed: cmdnmapErr})
            }
            var commandnmap = "\n" + client.user.username + ' nmap Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdnmap = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandnmap)
                return message.edit({embed: cmdnmap})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('ras')) {
        const { exec } = require('child_process');
        var commandrevanalyticNoArg = "\n" + client.user.username + ' Reverse Analytics Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A VALID HOST OR ID```"
        var retardoText = "\n" + client.user.username + ' Reverse Analytics Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdrevanalyticNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandrevanalyticNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdrevanalyticNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandrevanalyticing = "\n" + client.user.username + ' Reverse Analytics Command v' + data.consoleVer + '\n' + 
                                "\Reversing Analytics Please Wait...\n```"
            var cmdrevanalyticing = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandrevanalyticing)
             message.channel.send({embed: cmdrevanalyticing}).then(message => {

             
        exec('sudo curl https://api.hackertarget.com/analyticslookup/?q=' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandrevanalyticErr = "\n" + client.user.username + ' Reverse Analytics Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdrevanalyticErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandrevanalyticErr)
                return message.edit({embed: cmdrevanalyticErr})
            }
            var commandrevanalytic = "\n" + client.user.username + ' Reverse Analytics Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdrevanalytic = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandrevanalytic)
                return message.edit({embed: cmdrevanalytic})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('mtr')) {
        const { exec } = require('child_process');
        var commandmtrNoArg = "\n" + client.user.username + ' MTR Traceroute Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A VALID HOST```"
        var retardoText = "\n" + client.user.username + ' test Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdmtrNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandmtrNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdmtrNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandmtring = "\n" + client.user.username + ' MTR Traceroute Command v' + data.consoleVer + '\n' + 
                                "\Tracing Provided Host Please Wait...\n```"
            var cmdmtring = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandmtring)
             message.channel.send({embed: cmdmtring}).then(message => {

             
        exec('sudo curl https://api.hackertarget.com/mtr/?q=' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandmtrErr = "\n" + client.user.username + ' MTR Traceroute Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdmtrErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandmtrErr)
                return message.edit({embed: cmdmtrErr})
            }
            var commandmtr = "\n" + client.user.username + ' MTR Traceroute Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdmtr = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandmtr)
                return message.edit({embed: cmdmtr})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('dns')) {
        const { exec } = require('child_process');
        var commandmtrNoArg = "\n" + client.user.username + ' DNS Lookup Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A VALID HOST```"
        var retardoText = "\n" + client.user.username + ' test Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdmtrNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandmtrNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdmtrNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandmtring = "\n" + client.user.username + ' DNS Lookup Command v' + data.consoleVer + '\n' + 
                                "\Extracting All Links From Host Please Wait...\n```"
            var cmdmtring = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandmtring)
             message.channel.send({embed: cmdmtring}).then(message => {

             
        exec('sudo curl https://api.hackertarget.com/dnslookup/?q=' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandmtrErr = "\n" + client.user.username + ' DNS Lookup Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdmtrErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandmtrErr)
                return message.edit({embed: cmdmtrErr})
            }
            var commandmtr = "\n" + client.user.username + ' DNS Lookup Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdmtr = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandmtr)
                return message.edit({embed: cmdmtr})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('links')) {
        const { exec } = require('child_process');
        var commandmtrNoArg = "\n" + client.user.username + ' Extract Links Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A VALID HOST```"
        var retardoText = "\n" + client.user.username + ' test Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdmtrNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandmtrNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdmtrNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandmtring = "\n" + client.user.username + ' Extract Links Command v' + data.consoleVer + '\n' + 
                                "\Extracting All Links From Host Please Wait...\n```"
            var cmdmtring = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandmtring)
             message.channel.send({embed: cmdmtring}).then(message => {

             
        exec('sudo curl https://api.hackertarget.com/pagelinks/?q=' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandmtrErr = "\n" + client.user.username + ' Extract Links Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdmtrErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandmtrErr)
                return message.edit({embed: cmdmtrErr})
            }
            var commandmtr = "\n" + client.user.username + ' Extract Links Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdmtr = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandmtr)
                return message.edit({embed: cmdmtr})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('nikto')) {
        const { exec } = require('child_process');
        var commandmtrNoArg = "\n" + client.user.username + ' Nikto Scan Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A VALID HOST```"
        var retardoText = "\n" + client.user.username + ' test Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdmtrNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandmtrNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdmtrNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandmtring = "\n" + client.user.username + ' Nikto Scan Command v' + data.consoleVer + '\n' + 
                                "\Scanning Provided Host Please Wait This May Take Some Time...\n```"
            var cmdmtring = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandmtring)
             message.channel.send({embed: cmdmtring}).then(message => {

             
        exec('nikto -C none -host' + ' ' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandmtrErr = "\n" + client.user.username + ' Nikto Scan Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdmtrErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandmtrErr)
                return message.edit({embed: cmdmtrErr})
            }
            var commandmtr = "\n" + client.user.username + ' Nikto Scan Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdmtr = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandmtr)
                return message.edit({embed: cmdmtr})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('bgrab')) {
        const { exec } = require('child_process');
        var commandbgrabNoArg = "\n" + client.user.username + ' Banner Grab Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A VALID HOST```"
        var retardoText = "\n" + client.user.username + ' Banner Grab Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdbgrabNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandbgrabNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdbgrabNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandbgrabing = "\n" + client.user.username + ' Banner Grab Command v' + data.consoleVer + '\n' + 
                                "\Connecting To Provided Network...\n```"
            var cmdbgrabing = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandbgrabing)
             message.channel.send({embed: cmdbgrabing}).then(message => {

             
        exec('sudo curl https://api.hackertarget.com/bannerlookup/?q=' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandbgrabErr = "\n" + client.user.username + ' Banner Grab Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdbgrabErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandbgrabErr)
                return message.edit({embed: cmdbgrabErr})
            }
            var commandbgrab = "\n" + client.user.username + ' Banner Grab Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdbgrab = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandbgrab)
                return message.edit({embed: cmdbgrab})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('ztt')) {
        const { exec } = require('child_process');
        var commandheadersNoArg = "\n" + client.user.username + ' Zone Transfer Test Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A VALID HOST```"
        var retardoText = "\n" + client.user.username + ' Zone Transfer Test Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdheadersNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandheadersNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdheadersNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandheadersing = "\n" + client.user.username + ' Zone Transfer Test Command v' + data.consoleVer + '\n' + 
                                "\Zone Transfer Test In Progress...\n```"
            var cmdheadersing = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandheadersing)
             message.channel.send({embed: cmdheadersing}).then(message => {

             
        exec('sudo curl https://api.hackertarget.com/zonetransfer/?q=' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandheadersErr = "\n" + client.user.username + ' Zone Transfer Test Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdheadersErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandheadersErr)
                return message.edit({embed: cmdheadersErr})
            }
            var commandheaders = "\n" + client.user.username + ' Zone Transfer Test Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdheaders = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandheaders)
                return message.edit({embed: cmdheaders})
          
          });
        })
          return;
        }
        
    }
	  if(command.includes('http')) {
        const { exec } = require('child_process');
        var commandheadersNoArg = "\n" + client.user.username + ' Review Host HTTP Headers Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "Invalid argument provided\nMessage: PLEASE PROVIDE A VALID HOST```"
        var retardoText = "\n" + client.user.username + ' Review Host HTTP Headers Command v' + data.consoleVer + '\n' + 
                                "\nAt Least You Tried Your Best\n" +
                                "To Bad It Didn't Work```"
        var cmdheadersNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandheadersNoArg)
        if(!basicParameter) {
            return message.channel.send({embed: cmdheadersNoArg});
        } else if(isValidInput(basicParameter) == false){
            return message.channel.send({embed: retardoText});
        } else {
            var commandheadersing = "\n" + client.user.username + ' Review Host HTTP Headers Command v' + data.consoleVer + '\n' + 
                                "\Reviewing Host HTTP Headers...\n```"
            var cmdheadersing = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandheadersing)
             message.channel.send({embed: cmdheadersing}).then(message => {

             
        exec('sudo curl https://api.hackertarget.com/httpheaders/?q=' + parseAddress(basicParameter), (err, stdout, stderr) => {
            if (err) {
                var commandheadersErr = "\n" + client.user.username + ' Review Host HTTP Headers Command v' + data.consoleVer + '\n' + 
                                        "\nError\n" +
                                        "An unexpected error occured: " + err + '```'
                var cmdheadersErr = new Discord.RichEmbed()
                    .setColor(colors.critical)
                    .setDescription(consoleHeader + commandheadersErr)
                return message.edit({embed: cmdheadersErr})
            }
            var commandheaders = "\n" + client.user.username + ' Review Host HTTP Headers Command v' + data.consoleVer + '\n' + 
                                '\n' + stdout + '```'
            var cmdheaders = new Discord.RichEmbed()
                .setColor(`#696969`)
                .setDescription(consoleHeader + commandheaders)
                return message.edit({embed: cmdheaders})
          
          });
        })
          return;
        }
        
    }
    if(command.includes('cmd')) {
        const { exec } = require('child_process');
        var commandCMDNotOwner = "\n" + client.user.username + ' CMD Command v' + data.consoleVer + '\n' + 
                                "\nError\n" +
                                "This command is locked to the Bot Owner.```"
        var cmdCMDNotOwner = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandCMDNotOwner)
        if(message.author.id !== data.ownerid) return message.channel.send({embed: cmdCMDNotOwner})
        var commandCMDNoArg = "\n" + client.user.username + ' CMD Command v' + data.consoleVer + '\n' + 
                                "\nError\n" + 
                                "Invalid argument provided\nMessage: PLEASE PROVIDE COMMAND```"
        var cmdCMDNoArg = new Discord.RichEmbed()
            .setColor(colors.critical)
            .setDescription(consoleHeader + commandCMDNoArg)
        if(!advParameter) return message.channel.send({embed: cmdCMDNoArg})
        
        var commandWaiting = "\n" + client.user.username + ' CMD Command v' + data.consoleVer + '\n' + 
                            "\nProcessing...```"

        var cmdWaiting = new Discord.RichEmbed()
            .setColor(`#696969`)
            .setDescription(consoleHeader + commandWaiting)
            message.channel.send({embed: cmdWaiting}).then(message => {
                exec(advParameter, (err, stdout, stderr) => {
                    if(err) {
                        var commandError = "\n" + client.user.username + ' CMD Command v' + data.consoleVer + '\n' + 
                                            "\nError\n" +
                                            "An unexpected error occured: " + err + '```'
                        var cmdError = new Discord.RichEmbed()
                            .setColor(colors.critical)
                            .setDescription(consoleHeader + commandError)
                            return message.edit({embed: cmdError})
                     }
                     var commandCMD = "\n" + client.user.username + ' CMD Command v' + data.consoleVer + '\n' + 
                                    "\n " +stdout + '```'
                    var cmdCMD = new Discord.RichEmbed()
                        .setColor(`#696969`)
                        .setDescription(consoleHeader + commandCMD)
                        return message.edit({embed: cmdCMD}) 
                        

                }); 
                return;
            })
            return;
    }
    var failCommand = '\nERROR\n' +
                    'Command does not exists\nError Code: 404```'
    var failCMD = new Discord.RichEmbed()
        .setColor(colors.critical)
        .setDescription(consoleHeader + failCommand)
        return message.channel.send({embed: failCMD})


}
module.exports.help = {
    name: "console",
    info: "Console/Terminal access on Discord",
    usage: "console" //The usage varies depeding on the command
}