const { PermissionFlagsBits } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'anunciar_proposta',
    description: 'faz um anúncio',
    type: Discord.ApplicationCommandType.ChatInput,
    default_member_permissions: PermissionFlagsBits.Administrator,
    options: [
        {
            name: 'canal_realizado',
            description: 'canal realizado a proposta',
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        },
        {
            name: 'autor_proposta',
            description: 'autor da proposta',
            type: Discord.ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'metodo',
            description: 'metodo da proposta',
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
            choices: [
                { name: '👤 Novo membro', value: 'Novo membro' },
                { name: '🟠 Proposta de Infração', value: 'Proposta de Infração -' },
                { name: '🔴 Proposta de Expulsão', value: 'Proposta de Expulsão -' }
            ]
        },
        {
            name: 'texto',
            description: 'texto',
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'usuario_mencionado',
            description: 'usuario mencionado na proposta',
            type: Discord.ApplicationCommandOptionType.User,
            required: true
        }
        ,
        {
            name: 'resultado',
            description: 'resultado da proposta',
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
            choices: [
                { name: '🟩Aprovado🟩', value: '🟩 Aprovado 🟩' },
                { name: '🟥Reprovado🟥', value: '🟥 Reprovado 🟥' }
            ]
        },
        {
            name: 'votos_a_favor',
            description: 'votos a favor da proposta',
            type: Discord.ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'votos_contra',
            description: 'votos contra a proposta',
            type: Discord.ApplicationCommandOptionType.Number,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const channel = interaction.options.getChannel('canal_realizado')
        const autor = interaction.options.getUser('autor_proposta')
        const motiv = interaction.options.getString('metodo')
        const contentMessage = interaction.options.getString('texto')
        const target = interaction.options.getUser('usuario_mencionado')
        const aprov = interaction.options.getString('resultado')
        const cima = interaction.options.getNumber('votos_a_favor')
        const baixo = interaction.options.getNumber('votos_contra')

        await interaction.reply({content: 'Anúncio realizado', ephemeral: true})
        await interaction.channel.send({
            content: `─────────────── <@&1075618605439398038> ─────────────────────
            
📢 Resultado da votação em ${channel}
👤 Autor: ${autor}

📝 ${motiv} ${contentMessage}
🔸 ${target}

💬 Resultado: ${aprov}
🗳️ Nº de votos: ${cima} <:check:1072492827285667910> ${baixo} <:deny:1072492829735133275> `
        })
    }
}