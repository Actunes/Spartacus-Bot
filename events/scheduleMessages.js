const client = require('..')
const cron = require('cron')
const date = new Date()

client.once("ready", () => {
    const guildID = '407878248480112642'
    const channelID = '1055539833407295579'
    const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const month = monthNames[date.getMonth()]

    const scheduledMessage1 = new cron.CronJob('0 0 3 25 * *', async () => {
        const guild = client.guilds.cache.get(guildID)
        const channel = guild.channels.cache.get(channelID)
        const msg = await channel.send({ content: `📢 Esta é a Chamada Obrigatória do mês de **${month}**. Todos os <@&1020194745722609684> tem 7 dias para confirmar na reação abaixo que estão ativos. Caso contrário, podem receber 2 pontos de infração.\n\n⚠️ Atenção a quem está em <@&1020234436236816394>, teremos uma chamada **especifica** para vocês.` })
        msg.react(`<:spts:863119583275384864>`)
    })
    scheduledMessage1.start()
    const scheduledMessage2 = new cron.CronJob('0 0 3 27 * *', async () => {
        const guild = client.guilds.cache.get(guildID)
        const channel = guild.channels.cache.get(channelID)
        const msg = await channel.send({ content: `⚠️ Atenção membros em <@&1020234436236816394> marcados nessa mensagem.\n\nVocê tem 5 dias para reagir no ✅ abaixo. Caso contrário, será considerado inativo e perderá o cargo de membro.` })
        msg.react(`✅`)
    })
    scheduledMessage2.start()
})