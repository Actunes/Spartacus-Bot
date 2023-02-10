const { PermissionFlagsBits } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'send_embed',
    description: 'send embed',
    type: Discord.ApplicationCommandType.ChatInput,
    default_member_permissions: PermissionFlagsBits.Administrator,
    options: [
        {
            name: 'raw_json',
            description: 'raw_json embed',
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const raw = interaction.options.getString('raw_json')
        var obj = JSON.parse(raw)
        var obj2 = obj.embeds
        console.log(obj2.length)
        objLength = obj2.length
        // Gambiarra '-'
        if (objLength == 1) {
            await interaction.reply({ embeds: [obj2[0]] })
        } else if (objLength == 2) {
            await interaction.reply({ embeds: [obj2[0], obj2[1]] })
        } else if (objLength == 3) {
            await interaction.reply({ embeds: [obj2[0], obj2[1], obj2[2]] })
        } else if (objLength == 4) {
            await interaction.reply({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3]] })
        } else if (objLength == 5) {
            await interaction.reply({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4]] })
        } else if (objLength == 6) {
            await interaction.reply({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5]] })
        } else if (objLength == 7) {
            await interaction.reply({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6]] })
        } else if (objLength == 8) {
            await interaction.reply({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7]] })
        } else if (objLength == 9) {
            await interaction.reply({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7], obj2[8]] })
        } else if (objLength == 10) {
            await interaction.reply({ embeds: [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4], obj2[5], obj2[6], obj2[7], obj2[8], obj2[9]] })
        }
    }
}
