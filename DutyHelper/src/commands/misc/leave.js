const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
} = require('discord.js');

module.exports = {
    name: 'leave',
    description: '請假',
    options: [
        {
            name: 'number',
            description: '座號',
            type: ApplicationCommandOptionType.Number,
            require: true,
        },
        {
            name: 'days',
            description: '天數',
            type: ApplicationCommandOptionType.Number,
            require: false,
        },
    ],

    callback: (client, interaction) => {

        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'leave') {
            const number = interaction.options.get('number').value;
            const days = interaction.options.get('days')?.value;

            interaction.reply(`${number}號已請假${days}天`);
        }
    },
};