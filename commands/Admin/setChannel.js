const Discord = require('discord.js')
const { Schema } = require('mongoose')
const schemaData = require('../../schemes/channelReactID')

module.exports = {
    name: 'setchannel',
    description: 'Set channel to auto-react',
    type: Discord.ApplicationCommandType.ChatInput,
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

            await schemaData.findOneAndUpdate({ _id: 'channelToReact' }, { $addToSet: { 'idChannel': channelId.id } }, { upsert: true })

            interaction.reply({ content: `Channel ${channelId} added auto-react successfully <:check:1072492827285667910>`, ephemeral: false })

        }
    }
}
