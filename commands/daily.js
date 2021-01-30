let discord = require("discord.js")
let pagination = require("discord.js-pagination")
let fetch = require("node-fetch")
let Database = require("easy-json-database");
let db = new Database("./economy.json");
let cooldown = new Set();
module.exports.run = async function(message, args, color) {
   if (cooldown.has(message.author.id)) {
       message.channel.send("Sad Champ, No more moneysss for u my friend.")
   } else {
       let index = require("./../index");
       let dailyAmount = await index.dashboard.getVal(message.guild.id, "ecodaily");
       let multiplier = await index.dashboard.getVal(message.guild.id, "ecomultiplier");
       let amountTotal = dailyAmount * multiplier;
       db.add(`${message.guild.id}-${message.author.id}`, amountTotal);
       if (multiplier == 1) {
           message.channel.send("You got " + dailyAmount + " Coins for today!");
       } else {
           message.channel.send("You got " + dailyAmount + " Coins for today, But wait due to a multiplier of " + multiplier + " You in reality got " + amountTotal + " so congrats!");
       }
       cooldown.add(message.author.id);
       setTimeout(() => {
           cooldown.delete(message.author.id);
       }, 86400000)
   }
}