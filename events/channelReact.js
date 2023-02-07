const client = require("..")

client.on('messageCreate', message => {
    if (!['1058745163784142910', '1062861256685531146', '1058393979684667412'].includes(message.channel.id) || message.author.bot) return;

    ['<:check:1072492827285667910>', '<:deny:1072492829735133275>'].map(emj => message.react(emj).catch(e => null))
})
