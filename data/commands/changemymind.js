exports.run = async (client, message, args, level) => {

const fs = require('fs');
const Jimp = require('jimp');
    
  const text = args.slice(1).join(' ');
  
    if (!text) {
        return message.reply(`Bruh you're going to have to give me something to work with here :joy: `);
    };
    
    var isLongText = text.length >= 58 ? Jimp.FONT_SANS_16_BLACK : Jimp.FONT_SANS_32_BLACK;
    
    function getTextSize(length) {
        if (length >= 34) {
            return Jimp.FONT_SANS_16_BLACK;
        } else {
            return Jimp.FONT_SANS_32_BLACK;
        }
    };
    
    message.channel.startTyping();
    
    Jimp.read('https://cdn.discordapp.com/attachments/722623153368727643/728049452903956490/change-my-mind.jpg').then(function (image) {     
        
        Jimp.loadFont(isLongText).then(function(font) {
          image.print(font, 148, 292, { text: text.toUpperCase(), alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER }, 280).getBufferAsync(Jimp.MIME_JPEG);

        let outputfile = "./" + Math.random().toString(15).substr(2, 5) + "." + image.getExtension();
            image.write(outputfile, function () {
                
                message.channel.send({ files: [{ attachment: outputfile, name: "output.jpg" }]}).then(function () {
                    
                    fs.unlink(outputfile, (err) => {
                        if (err) throw err;
                        console.log(`Image Created in Guild: ${message.guild.name}`);
                        message.channel.stopTyping();
            });
          });
        });
      });
    }).catch(function (err) {
      console.error(err);
      message.channel.send(";-; I-I couldn't create the image, sorry.")
        
      message.channel.stopTyping();
    })
    
    message.channel.stopTyping();
};

exports.conf = {
  enabled: true,
  permLevel: "Open"
};

exports.help = {
  name: "debate",
  description: "Make your own 'Change My Mind' sign!",
  usage: "changemymind <text>"
};