const client = require("..")

client.on("messageCreate", (message) => {
    if (message.channel.id === "1058745163784142910", "1062861256685531146") {

        let emoji_accept = "✅"
        let emoji_rejected = "❌"

        message.react(emoji_accept).catch(e => { })
        message.react(emoji_rejected).catch(e => { })

    } else { return; }
})

