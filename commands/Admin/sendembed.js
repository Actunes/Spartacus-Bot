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

        try {
            const jsonObject = JSON.parse(raw)
            const jsonEmbeds = jsonObject.embeds
            
            await interaction.channel.send({ embeds: jsonEmbeds.slice(0, jsonEmbeds.length) }).then(() => {
                interaction.reply({ content: 'Embed submitted using raw_json', ephemeral: true})
            })
        } catch (error) {
            await interaction.reply({ content: 'raw_json is invalid JSON' + `\n\n**[Error]**` + '```' + error.message + '```', ephemeral: true })
        }
    }
}