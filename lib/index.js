import "./config";
import Discord from "discord.js";

const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
const availableCommands = ["!hello", "!69", "!420", "!clear", "!play", "!say"];
const prefix = "!";

client.once("ready", () => {
  console.log("Bot is ready, listening for messages now...");
});

client.login(token);

client.on("message", (message) => {
  const args = message.content.trim().split(/ +/g);
  const command = args[0];
  const argumentsPassed = args.filter((argument) => argument !== command);
  if (message.author.bot) return;
  switch (command) {
    case "!hello":
      message.channel.send(`Hello ${message.author.username} 👋🏻`);
      break;
    case "!69":
      const isSixtyNine = Math.floor(Math.random() * 100 + 1) === 69;
      message.channel.send(
        isSixtyNine
          ? `Congratulations ${message.author.username}, you hit peak performance 🎊`
          : "Filthy Casual 🤡"
      );
      break;
    case "!420":
      const isFourTwenty = Math.floor(Math.random() * 500 + 1) === 69;
      message.channel.send(
        isFourTwenty
          ? `Congratulations ${message.author.username}, you hit peak performance 🎊`
          : "Filthy Casual 🤡"
      );
      break;
    case "!clear":
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.messages.fetch().then((messages) => {
          message.channel.bulkDelete(messages);
        });
      }
      break;
    case "!play":
      message.channel.send(
        `${argumentsPassed[0]},  ${message.author.username} asks you to come out and play...`
      );
      break;
    case "!say":
      message.channel.send(
        `${argumentsPassed[0]},  ${
          message.author.username
        } says:  ${argumentsPassed.join(" ")}`
      );
      break;
    case "!help":
      message.reply(
        `the following commands are availabile: ${availableCommands.join(", ")}`
      );
      break;
    default:
      message
        .reply("Invalid command, use !help to check the available commands!")
        .then((msg) => {
          msg.delete(1000);
        })
        .catch(console.error);
      break;
  }
});
