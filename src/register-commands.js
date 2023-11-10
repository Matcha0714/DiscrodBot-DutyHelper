// require('dotenv').config();
// const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

// const commands = [
//     {
//         name: 'leave',
//         description: '請假',
//         options: [
//             {
//                 name: 'number',
//                 description: '座號',
//                 type: ApplicationCommandOptionType.Number,
//                 require: true,
//             },
//             {
//                 name: 'days',
//                 description: '天數',
//                 type: ApplicationCommandOptionType.Number,
//                 require: false,
//             },
//         ],
//     },
// ];

// const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// (async () => {
//     try {
//         console.log('Registering slash commands...');

//         await rest.put(
//             Routes.applicationGuildCommands(
//                 process.env.CLIENT_ID, 
//                 process.env.GUILD_ID
//             ),
//             { body: commands }
//         );

//         console.log('Slash commands were registered successfully!');
//     } catch (error) {
//         console.log(`There was an error: ${error}`);
//     }
// })();