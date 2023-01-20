const mongoose = require("mongoose")

const scheme = new mongoose.scheme({
    _channelReactID: { type: String, required: true },
    status: { type: Boolean, defaunt: false }
})

module.exports = mongoose.model("channelReactID", scheme)