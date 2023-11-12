require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");
const fs = require("fs");
const eventHandler = require("./handlers/eventHandler");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

eventHandler(client);

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;


  //   await message.channel.SendFileAsync(File.OpenRead(filePath), "./testt.jpg", embed);

});

client.on('error', (err) => {
  console.log(err)
})

// client.on('interactionCreate', (interaction) => {
//     if (!interaction.isChatInputCommand()) return;

//     if (interaction.commandName === 'leave') {
//         const number = interaction.options.get('number').value;
//         const days = interaction.options.get('days')?.value;

//         interaction.reply(`${number}號已請假${days}天`);
//     }
// });

// client.on('messageCreate', (message) => {
//     if (message.author.bot) {
//         return;
//     }
// });

client.login(process.env.TOKEN);
