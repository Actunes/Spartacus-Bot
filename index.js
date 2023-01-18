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
const { loadEvents } = require("./handler/events")
loadEvents(client)
require("dotenv").config()

// MongoDB
const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGO)
  .then(() => console.log(chalk.cyan("MongoDB conectado!")))

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
  console.log(chalk.cyan(`Bot online em ` + chalk.red(`${client.user.username}!`)))
})

//
client.slashCommands = new Discord.Collection()

//Handler 
require('./handler')(client)

//
client.login(process.env.TOKEN)

//Doesn't shut down

process.on('multipleResolves', (type, promise, reason) => {
  console.log('Error ' + type, promise, reason)
})
process.on('unhandRejection', (promise, reason) => {
  console.log('Error ' + reason, promise)
})
process.on('uncaughtException', (error, origin) => {
  console.log('Error ' + error, origin)
})
process.on('uncaughtExceptionMonitor', (error, origin) => {
  console.log('Error ' + error, origin)
})