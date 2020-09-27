exports.run = async (client, message, level) => {

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let number = randomIntFromInterval(0, 100);
  var guesses = 20;

  function isBetween(n) {
    var returned = n >= 1 && n <= 100 ? true : false;
    return returned;
  };

  function endScore(postScore) {
    var totalScore = postScore * 500;
    return message.channel.send({ embed: { color: 0xCFD9F9, title: `Congratulations! You figured out my number!`, fields: [{ name: 'Guesses left:', value: `\`${guesses}\``, inline: true }, { name: 'Score:', value: `\`${totalScore}\``, inline: true }] } });
  };

  function game() {
    message.channel.send("I\'m thinking of a number between 1 and 100... (You have 20 guesses)\n**Type stop/cancel to stop the game**")
      .then(() => {
        collect()
      })
      .catch((err) => console.log(err));

    function collect() {
      const filter = msg => msg.author.id == message.author.id;
      message.channel.awaitMessages(filter, { max: 1, time: 25000, errors: ['time'], })
        .then((collected) => {
          checker(collected.first())
        })
        .catch((err) => {
          console.log(err)
        });
    }

    function checker(collected) {
      if (collected.content === "stop" || collected.content === "cancel") {
        return message.channel.send("Stopped your game.");
      }
      if (isNaN(collected.content)) {
        message.channel.send(`That isn\'t even a number...`);
        collect();
      } else if (collected.content > number.toString()) {
        guesses--;
        message.channel.send(`My number is lower than that...\n**You have ${guesses} guesses left**`);
        collect();
      } else if (collected.content < number.toString()) {
        guesses--;
        message.channel.send(`My number is higher than that...\n**You have ${guesses} guesses left**`);
        collect();
      } else if (collected.content === number.toString()) {
        endScore(guesses)
      }
    }
  }

  game();

};

exports.conf = {
  enabled: true,
  permLevel: "Open"
};

exports.help = {
  category: "Fun",
  name: "numbergame",
  description: "I think of a number between 1 and 100, and you try to guess it within 20 guesses!",
  usage: "numbergame"
};