const Discord = require('discord.js')
const package = require("../../package.json");
const { cpu, mem, os } = require("node-os-utils");
const uptimeBot = require("pretty-ms")
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ChannelType } = require('discord.js')

module.exports = {
  name: 'info',
  description: 'Information about the bot',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    const operatingSystem = `${os.type()} ${await os.oos().then(o => o)} ${os.arch()}`
    const cpuUsage = (await cpu.usage()).toFixed(2) + "%"
    const memoryUsage = (await mem.info()).usedMemMb;
    const memoryTotal = (await mem.info()).totalMemMb;
    const memoryPorcentage = ((memoryUsage / memoryTotal) * 100).toFixed(0) + '%'

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('primary')
          .setLabel('Server Info')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('<:serversvgrepocom:1071432736411238441>'),
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel('Github Project')
          .setStyle(ButtonStyle.Link)
          .setURL('https://github.com/Actunes/Spartacus-Bot')
          .setEmoji('<:github71:1071094653060923533>'),
      )

    let embedInfo = new Discord.EmbedBuilder()
      .setColor('#700000')
      .setTitle('About Spartacus Bot')
      .setDescription('Spartacus bot was created and thought about the needs that the spartacus group needs for its development.\n\nTo start using the bot you can type `/` and select from the available commands.\n\n<:system77:1060391259153375332> System Monitor')
      .addFields(
        { name: `<:ramuse:1071758310660898876> **RAM**`, value: '```' + Math.trunc(memoryUsage) + ' MB' + ' | ' + Math.trunc(memoryTotal) + ' MB ' + `(${memoryPorcentage})` + '```', inline: true },
        { name: `** <:cpus:1071758315471769610> CPU_USAGE**`, value: '```' + `${cpuUsage}` + '```', inline: true },
        { name: `** <:onlinesvgrepocom:1071760303156641823> PING**`, value: '```' + `${Math.round(client.ws.ping)}ms` + '```', inline: true },
        { name: `** <:computer:1071758313466888202> OS**`, value: '```' + operatingSystem + '```', inline: true },
        { name: `** <:node:1071758308937060407> NODE.JS**`, value: '```' + `${process.version.slice(1).split(".").join(".")}` + '```', inline: true },
        { name: `** <:discordicon:1071758318332289176> DISCORD.JS**`, value: '```' + `${package.dependencies["discord.js"].slice(1)}` + '```', inline: true },
        { name: `** <:uptimeicon:1071773570654552084> UPTIME**`, value: '```' + `${uptimeBot(client.uptime, { verbose: true })}` + '```', inline: true }
      )
    await interaction.reply({ embeds: [embedInfo], ephemeral: true, components: [row] })

    const guildName = interaction.guild.name
    const getChannelTypeSize = type => channel.cache.filter(channel => type.includes(channel.type)).size
    await interaction.guild.members.fetch()
    const botCount = interaction.guild.members.cache.filter(member => member.user.bot).size

    let embedServer = new Discord.EmbedBuilder()
      .setColor('#700000')
      .setTitle(guildName)
      .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      .setDescription('Informations about current server')
      .addFields(
        {
          name: 'General', value: [
            `** :calendar_spiral: Created at** <t:${parseInt(interaction.guild.createdTimestamp / 1000)}:R>`,
            `** :identification_card: ID** ${interaction.guild.id}`,
            `** :crown: Owner** <@${interaction.guild.ownerId}>`,
            `** :earth_americas: Language** ${new Intl.DisplayNames(["pt-BR"], { type: "language" }).of(interaction.guild.preferredLocale)}`
          ].join('\n')
        },
        {
          name: `Channels and categories (${interaction.guild.channels.cache.size})`, value: [
            `** :newspaper: Categories** ${interaction.guild.channels.cache.filter(c => c.type === Discord.ChannelType.GuildCategory).size}`,
            `** :thought_balloon: Text channels** ${interaction.guild.channels.cache.filter(c => c.type === Discord.ChannelType.GuildText).size}`,
            `** :microphone2: Voice channels** ${interaction.guild.channels.cache.filter(c => c.type === Discord.ChannelType.GuildVoice).size}`,
          ].join('\n'), inline: true
        },
        {
          name: `Emojis and Stickers (${interaction.guild.emojis.cache.size + interaction.guild.stickers.cache.size})`, value: [
            `** :tv: Animated** ${interaction.guild.emojis.cache.filter(emoji => emoji.animated).size}`,
            `** :moyai: Static** ${interaction.guild.emojis.cache.filter(emoji => !emoji.animated).size}`,
            `** :label: Sticker** ${interaction.guild.stickers.cache.size}`
          ].join('\n'), inline: true
        },
        {
          name: `Members (${interaction.guild.memberCount})`, value: [
            `** :bust_in_silhouette: Users** ${interaction.guild.memberCount - botCount}`,
            `** :robot: Bots** ${botCount}`
          ].join('\n'), inline: true
        }

      )

    client.once(Events.InteractionCreate, interaction => {
      if (!interaction.isButton()) return
      interaction.reply({ embeds: [embedServer], ephemeral: true })
    })

  }
}
