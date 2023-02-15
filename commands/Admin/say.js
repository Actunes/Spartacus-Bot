const { PermissionFlagsBits } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'say',
    description: 'say one message with the bot',
    type: Discord.ApplicationCommandType.ChatInput,
    default_member_permissions: PermissionFlagsBits.Administrator,
    options: [
        {
            name: 'content',
            description: 'content of your message',
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const contentMessage = interaction.options.getString('content')
        await Promise.all([
            interaction.channel.send({ content: contentMessage}),
            interaction.reply({content: 'Message sent successfully.', ephemeral: true})
        ]) 
        
    }
}