const fs = require("fs")
const chalk = require('chalk')

const eventFiles = fs.readdirSync("./events")

eventFiles.map((files) => {
    return require(`../events/${files}`)
})

console.log(chalk.cyan(`[Eventos] | Eventos carregados.`))