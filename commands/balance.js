let discord = require("discord.js")
let pagination = require("discord.js-pagination")
let fetch = require("node-fetch")
module.exports.run = async function(message, args, color) {
    let Database = require("easy-json-database");
    let db = new Database("./economy.json");
    if (db.get(`${message.guild.id}-${message.author.id}`)) {
        let coins = db.get(`${message.guild.id}-${message.author.id}`)
        message.channel.send(`<:coins:805140295259783168> **You have a total of** ${coins} **Coins!**`)
    } else {
        message.channel.send(`**Sad champ** You are broke in this digital currency lol.`)
    }
}