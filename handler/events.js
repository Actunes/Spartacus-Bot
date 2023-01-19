const fs = require("fs")

const eventFiles = fs.readdirSync("./events")

eventFiles.map((files) => {
    return require(`../events/${files}`)
})