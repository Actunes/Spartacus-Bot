const client = require('..')
const cron = require('cron')
const date = new Date()

client.once("ready", () => {
    const guildID = '407878248480112642'
    const channelID = '1055539833407295579'
    const channelIDSec = '638465939977011230'

    const scheduledMessage1 = new cron.CronJob('0 0 3 25 * *', async () => {
        const guild = client.guilds.cache.get(guildID)
        const channel = guild.channels.cache.get(channelID)
        const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        const month = monthNames[date.getMonth()]
        const msg = await channel.send({ content: `📢 Esta é a Chamada Obrigatória do mês de **${month}**. Todos os <@&1020194745722609684> tem 7 dias para confirmar na reação abaixo que estão ativos. Caso contrário, podem receber 2 pontos de infração.\n\n⚠️ Atenção a quem está em <@&1020234436236816394>, teremos uma chamada **especifica** para vocês.` })
        msg.react(`<:spts:863119583275384864>`)
        month = null
    })
    scheduledMessage1.start()
    const scheduledMessage2 = new cron.CronJob('0 0 3 27 * *', async () => {
        const guild = client.guilds.cache.get(guildID)
        const channel = guild.channels.cache.get(channelID)
        const msg = await channel.send({ content: `⚠️ Atenção membros em <@&1020234436236816394> marcados nessa mensagem.\n\nVocê tem 5 dias para reagir no ✅ abaixo. Caso contrário, será considerado inativo e perderá o cargo de membro.` })
        msg.react(`✅`)
    })
    scheduledMessage2.start()
    const scheduledMessage3 = new cron.CronJob('0 0 3 1 January,March,May,July,September,November *', async () => {
        const guild = client.guilds.cache.get(guildID)
        const channel = guild.channels.cache.get(channelIDSec)
        const msg = await channel.send({ content: `---------------- <@&1020202500046987297> --------------------\n\nEstão abertas as eleições para a <@&1020228099419406366> para todos os membros que NÃO ESTEJAM em período probatório. Tudo será explicado e ensinado para aqueles que não tiverem noção de como funciona, portanto, não hesite em se candidatar.\n\nCaso tenha interesse, reaja ao emote abaixo:`})
        msg.react(`<:spts:863119583275384864>`)
    })
    scheduledMessage3.start()
})
