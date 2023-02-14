const { PermissionFlagsBits } = require('discord.js')
const Discord = require('discord.js')
const schemaData = require('../../schemes/channelReactID')

module.exports = {
    name: 'setchannel',
    description: 'Set channel to auto-react',
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
            const channelId = interaction.options.getChannel('channel')
            await schemaData.findOneAndUpdate({ _id: 'channelToReact' }, { $addToSet: { 'idChannel': channelId.id } }, { upsert: true })
            interaction.reply({ content: `Channel ${channelId} added auto-react successfully <:check:1072492827285667910>`, ephemeral: true })

    }
}
