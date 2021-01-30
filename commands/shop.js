let discord = require("discord.js")
let pagination = require("discord.js-pagination")
let fetch = require("node-fetch")
module.exports.run = function(message, args, color) {
    let Database = require("easy-json-database");
    let db = new Database("./economy.json");
    let db2 = new Database("./shop.json");
    if (db.get(`${message.guild.id}-${message.author.id}`)) {
        let coins = db.get(`${message.guild.id}-${message.author.id}`)
        let embed = new discord.MessageEmbed()
            .setTitle("Shop Items")
            .setColor(color)
            .setDescription("These are some things you can buy:");
        let items = db2.get(message.guild.id);
        if (!items) {
            embed.addField("No Items", "This shop does not have any items yet");
            message.channel.send(embed);
        } else {
            items.forEach((item, i) => {
                embed.addField(item.name, `This role will cost you ${item.price} coins!`)
            })
            message.channel.send(embed);
        }
    } else {
        message.channel.send(`**Sad champ** How can you buy stuff with 0 coins, Every cost money at this point lol.`)
    }
}