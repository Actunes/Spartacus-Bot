const { PermissionFlagsBits } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'send_embed',
    description: 'send embed',
    type: Discord.ApplicationCommandType.ChatInput,
    default_member_permissions: PermissionFlagsBits.Administrator,
    options: [
        {
            name: 'raw_json',
            description: 'raw_json embed',
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const raw = interaction.options.getString('raw_json')
        // Gambiarra '-'
        try {
            var obj = JSON.parse(raw)
            var obj2 = obj.embeds
            objLength = obj2.length
            message_raw = 'Embed submitted using raw_json'
            if (objLength == 1) {
                await interaction.channel.send({ embeds: [obj2[0]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 2) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 3) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1], obj2[2]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 4) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 5) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 6) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 7) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 8) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 9) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7], obj2[8]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 10) {
                await interaction.channel.send({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7], obj2[8], obj2[9]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            }
        } catch (error) {
            await interaction.reply({ content: 'raw_json invalid', ephemeral: true})
        }

    }
}
