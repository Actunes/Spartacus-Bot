const { PermissionFlagsBits } = require('discord.js')
const Discord = require('discord.js')
const { Schema } = require('mongoose')
const schemaData = require('../../schemes/channelReactID')

module.exports = {
    name: 'unsetchannel',
    description: 'Unset channel to auto-react',
    type: Discord.ApplicationCommandType.ChatInput,
    default_member_permissions: PermissionFlagsBits.Administrator,
    options: [
        {
            name: 'channel',
            description: 'channel to auto-react',
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
            interaction.reply({ content: '```You do not have permission to use this command ❌```', ephemeral: true })
        } else {
            const channelId = interaction.options.getChannel('channel')

            const dataMongo = await schemaData.findOne({ _id: 'channelToReact' })

            await schemaData.findOneAndUpdate({ _id: 'channelToReact' }, { $pull: { 'idChannel': channelId.id } }, { upsert: true })

            interaction.reply({ content: `Channel ${channelId} removed auto-react successfully <:deny:1072492829735133275>`, ephemeral: false })
        }

    }
}
