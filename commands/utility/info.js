const Discord = require('discord.js')
const package = require("../../package.json");
const { cpu, mem, os } = require("node-os-utils");
const uptimeBot = require("pretty-ms")
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js')

module.exports = {
  name: 'info',
  description: 'Information about the bot',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    const operatingSystem = `${os.type()} ${await os.oos().then(o => o)} ${os.arch()}`
    const cpuUsage = (await cpu.usage()) + "%"
    const memoryUsage = (await mem.info()).usedMemMb;
    const memoryTotal = (await mem.info()).totalMemMb;

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('primary')
          .setLabel('Info Server')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('<:MH_Info_Pink:1060401054379945994>'),
      )

    let embedInfo = new Discord.EmbedBuilder()
      .setColor('#700000')
      .setTitle('About Spartacus Bot')
      .setDescription('Spartacus bot was created and thought about the needs that the spartacus group needs for its development.\n\nTo start using the bot you can type `/` and select from the available commands.\n\n<:system77:1060391259153375332> System Monitor')
      .addFields(
        { name: `**RAM**`, value: '```' + Math.trunc(memoryUsage) + ' MB' + ' | ' + Math.trunc(memoryTotal) + ' MB' + '```', inline: true },
        { name: `**CPU_USAGE**`, value: '```' + `${cpuUsage}` + '```', inline: true },
        { name: `**PING**`, value: '```' + `${Math.round(client.ws.ping)}ms` + '```', inline: true },
        { name: `**OS**`, value: '```' + operatingSystem + '```', inline: true },
        { name: `**NODE.JS**`, value: '```' + `${process.version.slice(1).split(".").join(".")}` + '```', inline: true },
        { name: `**DISCORD.JS**`, value: '```' + `${package.dependencies["discord.js"].slice(1)}` + '```', inline: true },
        { name: `**UPTIME**`, value: '```' + `${uptimeBot(client.uptime, { verbose: true })}` + '```', inline: true }
      )
    interaction.reply({ embeds: [embedInfo], ephemeral: true, components: [row] })
  }
}