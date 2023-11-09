require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

eventHandler(client);

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
