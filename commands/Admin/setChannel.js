const Discord = require('discord.js')
const { Schema } = require('mongoose')
const schemaData = require('../../schemes/channelReactID')

module.exports = {
    name: 'setchannel',
    description: 'set channel to auto-react',
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
        const channelId = interaction.options.getChannel('channel')

        const dataMongo = await schemaData.findOne({_id: 'channelToReact'})

        await schemaData.findOneAndUpdate({ _id: 'channelToReact' }, {$addToSet: {'idChannel': channelId.id}}, {upsert: true} )

        interaction.reply({ content: `${channelId.id}`, ephemeral: false })
    }
}
