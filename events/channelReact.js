const client = require("..")

client.on("messageCreate", (message) => {
    if (message.channel.id === "") {

        let emoji_accept = "✅"
        let emoji_rejected = "❌"

        message.react(emoji_accept).catch(e => { })
        message.react(emoji_rejected).catch(e => { })

    } else { return; }
})

