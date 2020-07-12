import "./config";
import Discord from "discord.js";

const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
const availableCommands = [
  "!hello",
  "!69",
  "!420",
  "!clear",
  "!play",
  "!say",
  "!lottery",
];
const prefix = "!";

client.once("ready", () => {
  console.log("Bot is ready, listening for messages now...");
});

client.login(token);

client.on("message", (message) => {
  try {
    const args = message.content.trim().split(/ +/g);
    const command = args[0];
    const argumentsPassed = args.filter((argument) => argument !== command);

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    switch (command) {
      case availableCommands[0]:
        message.channel.send(`Hello ${message.author.username} 👋🏻`);
        break;
      case availableCommands[1]:
        const isSixtyNine = Math.floor(Math.random() * 100 + 1) === 69;
        if (isSixtyNine) {
          message.reply(
            `Congratulations ${message.author.username}, you hit the magic number 🎊`
          );
        } else {
          message.reply("Filthy Casual 🤡").then(() => {
            message.channel.bulkDelete(2);
          });
        }
        break;
      case availableCommands[2]:
        const isFourTwenty = Math.floor(Math.random() * 500 + 1) === 69;
        if (isFourTwenty) {
          message.reply(
            `Congratulations ${message.author.username}, you hit the magic number 🎊`
          );
        } else {
          message.reply("Filthy Casual 🤡").then(() => {
            message.channel.bulkDelete(2);
          });
        }
        break;
      case availableCommands[3]:
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          const amount = parseInt(argumentsPassed[0]);
          if (!isNaN(amount)) {
            message.channel.messages
              .fetch({ limit: amount + 1 })
              .then((messages) => {
                message.channel.bulkDelete(messages);
              });
          } else {
            message.channel.messages.fetch().then((messages) => {
              message.channel.bulkDelete(messages);
            });
          }
        }
        break;
      case availableCommands[4]:
        message.channel.send(
          `${argumentsPassed[0]},  ${message.author.username} asks you to come out and play...`
        );
        break;
      case availableCommands[5]:
        message.channel.send(
          `${argumentsPassed[0]},  ${
            message.author.username
          } says:  ${argumentsPassed.join(" ")}`
        );
        break;
      case availableCommands[6]:
        if (argumentsPassed.length === 0) {
          message.channel
            .send(
              "Please specify the names of the participants in the lottery!"
            )
            .then(() => {
              message.channel.bulkDelete(2);
            });

          break;
        }
        const rand = Math.floor(Math.random() * argumentsPassed.length);
        const winner = argumentsPassed[rand];
        message.channel.send(`The winner of the lottery is: ${winner}`);
        break;
      case "!help":
        message.reply(
          `the following commands are availabile: ${availableCommands.join(
            ", "
          )}`
        );
        break;
      default:
        message
          .reply("Invalid command, use !help to check the available commands!")
          .then(() => {
            message.channel.bulkDelete(2);
          })
          .catch(console.error);
        break;
    }
  } catch (e) {
    console.error(e);
  }
});
