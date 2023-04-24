const Discord = require("discord.js")
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildVoiceStates
  ]
})
const chalk = require('chalk')
require("dotenv").config()

// MongoDB
const mongoose = require("mongoose")
const { ActivityType } = require("discord.js")
mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGO)
  .then(() => console.log(chalk.magentaBright(`[MongoDB] | Banco de dados conectado!`)))

//
module.exports = client

client.on('interactionCreate', (interaction) => {

  if (interaction.type === Discord.InteractionType.ApplicationCommand) {

    const cmd = client.slashCommands.get(interaction.commandName)

    if (!cmd) return interaction.reply(`Error`)

    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id)

    cmd.run(client, interaction)

  }
})

//Log bot online
client.on("ready", () => {
  console.log(chalk.cyan(`[Bot] | online em ` + chalk.red(`${client.user.username}!`)))
  client.user.setActivity({
    name: `/info`,
    type: ActivityType.Listening
  })
})

//
client.slashCommands = new Discord.Collection()

//Handler 
require('./handler')(client)
require('./handler/events')

//
client.login(process.env.TOKEN)

//Doesn't shut down

process.on('unhandRejection', (reason, promise) => {
  console.log(`❗ | [Erro]\n\n` + reason, promise);
});
process.on('uncaughtException', (error, origin) => {
  console.log(`❗ | [Erro]\n\n` + error, origin);
});
process.on('uncaughtExceptionMonitor', (error, origin) => {
  console.log(`❗ | [Erro]\n\n` + error, origin);
});