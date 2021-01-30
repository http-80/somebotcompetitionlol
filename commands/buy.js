let discord = require("discord.js")
let pagination = require("discord.js-pagination")
let fetch = require("node-fetch")
module.exports.run = function(message, args, color) {
    let Database = require("easy-json-database");
    let db = new Database("./economy.json");
    let db2 = new Database("./shop.json");
    if (!args[0]) return message.channel.send("Please run ``buy <Item Name>`` and see the shop command for all items.")
    if (db.get(`${message.guild.id}-${message.author.id}`)) {
        let coins = db.get(`${message.guild.id}-${message.author.id}`)
        let items = db2.get(message.guild.id);
        if (!items) {
            message.channel.send("This shop has not been set up yet")
        } else {
            let itemnames = items.map(itm => itm.name)
            if (itemnames.find(itm => itm.name == args[0])) {
                let itemSelected = itemnames.find(itm => itm.name == args[0]);
                if (coins > itemSelected.price) {
                    db.subtract(`${message.guild.id}-${message.author.id}`, itemSelected.price)
                    message.channel.send("Item purchased!")
                } else {
                    message.channel.send("Not enough funds!");
                }
            } else {
                message.channel.send("Item not found!")
            }
        }
    } else {
        message.channel.send(`**Sad champ** How can you buy stuff with 0 coins, Every cost money at this point lol.`)
    }
}