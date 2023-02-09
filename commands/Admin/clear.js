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

        let number = interaction.options.getNumber('amount')
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
            interaction.reply({ content: '```You do not have permission to use this command ❌```', ephemeral: true })
        } else {
            if (parseInt(number) >= 1 && parseInt(number) <= 100) {
                interaction.channel.bulkDelete(parseInt(number))
                let embed = new Discord.EmbedBuilder()
                    .setColor([112, 0, 0])
                    .setDescription(`${number} deleted messages in ${interaction.channel}`)
                interaction.reply({ embeds: [embed], ephemeral: true })
            } else {
                if (parseInt(number) < 1) {
                    await interaction.reply({ content: '```Enter a number greater than 1 🛠```', ephemeral: true })
                }
                else {
                    await interaction.reply({ content: '```Enter a number below or equal than 100 🛠```', ephemeral: true })
                }
            }
        }
    }
}
