const Discord = require('discord.js')

module.exports = {
    name: 'setChannelReact',
    description: 'set a channel to use channel react',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'channel',
            description: 'channel',
            type: Discord.ApplicationCommandOptionType.Channel,
            required: false,
        }
    ],
    run: async (client, interaction) => {

    }
}