let discord = require("discord.js")
let pagination = require("discord.js-pagination")
let fetch = require("node-fetch")
module.exports.run = async function(message, args, color) {
    let embed = new discord.MessageEmbed()
        .setTitle("Bot Info")
        .addField("Coded at: ", "https://www.youtube.com/watch?v=LY0OyzvdK1M&feature=youtu.be&ab_channel=MBCraftnl")
        .addField("Made for: ", "ADAMJR's 3 Hour bot challange")
        .addField("Specs of hosting: ", "2.8GHZ Amd Epyc (Epicness) Cpu")
        .addField("Note for ADAMJR: ", "In order to run this fully with dashboard and all please contact me ProDev#6969 ill give you access to the control panel with files console etc.")
        .setColor(color)
}