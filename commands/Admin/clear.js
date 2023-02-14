const { PermissionFlagsBits } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'clear',
    description: 'clear chat messages',
    type: Discord.ApplicationCommandType.ChatInput,
    default_member_permissions: PermissionFlagsBits.Administrator,
    options: [
        {
            name: 'amount',
            description: 'number of messages to be deleted',
            type: Discord.ApplicationCommandOptionType.Number,
            required: true,
        }
    ],
    run: async (client, interaction) => {

        const number = interaction.options.getNumber('amount')

        try {
            if (number < 1 || number > 100) {
                return interaction.reply({
                    content: `[Error]` + '```' + `Enter a number between 1 and 100 🛠` + '```',
                    ephemeral: true,
                })
            }
            const deletedMessages = await interaction.channel.bulkDelete(number)

            const embed = new Discord.EmbedBuilder()
                .setColor([112, 0, 0])
                .setDescription(`${deletedMessages.size} deleted messages in ${interaction.channel}`)
            return interaction.reply({
                embeds: [embed],
                ephemeral: true,
            })
        } catch (error) {
            await interaction.reply({
                content: `[Error]` + '```' + error.message + '```',
                ephemeral: true,
            })
        }
    }
}