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
            const receivedLinkSplit = receivedLink.split('/')
            const receivedLinkSplitGuild = receivedLinkSplit[receivedLinkSplit.length-3]
            const receivedLinkSplitChannel = receivedLinkSplit[receivedLinkSplit.length-2]
            const receivedLinkSplitMessage = receivedLinkSplit[receivedLinkSplit.length-1]
            const channel = client.channels.cache.get(`${receivedLinkSplitChannel}`)
            const message = await channel.messages.fetch(`${receivedLinkSplitMessage}`)
            const raw = interaction.options.getString('raw_json')
            var obj = JSON.parse(raw)
            var obj2 = obj.embeds
            objLength = obj2.length
            message_raw = `Embed [message](https://discord.com/channels/${receivedLinkSplitGuild}/${receivedLinkSplitChannel}/${receivedLinkSplitMessage}) edited using raw_json`
            if (objLength == 1) {
                await message.edit({ embeds: [obj2[0]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 2) {
                await message.edit({ embeds: [obj2[0], obj2[1]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 3) {
                await message.edit({ embeds: [obj2[0], obj2[1], obj2[2]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 4) {
                await message.edit({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 5) {
                await message.edit({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 6) {
                await message.edit({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 7) {
                await message.edit({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 8) {
                await message.edit({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 9) {
                await message.edit({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7], obj2[8]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            } else if (objLength == 10) {
                await message.edit({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7], obj2[8], obj2[9]] }).then(() => {
                    interaction.reply({ content: `${message_raw}` })
                })
            }
        } catch (error) {
            await interaction.reply({ content: 'link or raw_json invalid', ephemeral: true})
        }
    }
}