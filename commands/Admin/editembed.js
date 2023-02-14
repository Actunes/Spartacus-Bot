const Discord = require("discord.js")
const { PermissionFlagsBits } = require('discord.js')

module.exports = {
    name: 'edit_embed',
    description: 'edit embed',
    type: Discord.ApplicationCommandType.ChatInput,
    default_member_permissions: PermissionFlagsBits.Administrator,
    options: [
        {
            name: 'link',
            description: 'link of message',
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'raw_json',
            description: 'raw_json embed',
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        try {
            const receivedLink = interaction.options.getString('link')
            const [,,,, receivedLinkGuild, receivedLinkChannel, receivedLinkMessage] = receivedLink.split('/')
            const channel = client.channels.cache.get(`${receivedLinkChannel}`)
            const message = await channel.messages.fetch(`${receivedLinkMessage}`)

            const raw = interaction.options.getString('raw_json')
            const jsonObject = JSON.parse(raw)
            const jsonEmbeds = jsonObject.embeds

            await message.edit({ embeds: jsonEmbeds.slice(0, jsonEmbeds.length) }).then(() => {
                interaction.reply({content: `Embed [message](https://discord.com/channels/${receivedLinkGuild}/${receivedLinkChannel}/${receivedLinkMessage}) edited using raw_json`, ephemeral: true})
            })
        } catch (error) {
            await interaction.reply({
                content: 'raw_json is invalid JSON' + `\n\n**[Error]**` + '```' + error.message + '```', ephemeral: true})
        }
    }
}