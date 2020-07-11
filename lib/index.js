import "./config";
import Discord from "discord.js";

const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

client.once("ready", () => {
  console.log("Bot is ready, listening for messages now...");
});

client.login(token);

client.on("message", (message) => {
  switch (message.content) {
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
    default:
      break;
  }
});
