const client = require("..")
const schemaData = require('../schemes/channelReactID')

client.on('messageCreate', async message => {
    const dataMongo = await schemaData.findOne({ _id: 'channelToReact' })

    if (!dataMongo.idChannel.includes(message.channel.id)) return;

    ['<:check:1072492827285667910>', '<:deny:1072492829735133275>'].map(emj => message.react(emj).catch(e => null))
})
