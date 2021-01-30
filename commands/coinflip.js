let discord = require("discord.js")
let pagination = require("discord.js-pagination")
let fetch = require("node-fetch")
module.exports.run = async function(message, args, color) {
    let index = require("./../index")
    let provider = await index.dashboard.getVal(message.guild.id, "provider");
    if (provider == "No Api Key") {
        fetch("https://no-api-key.com/api/v1/coin-flip")
            .then(async(resp) => {
                let text = await resp.text();
                let txtJson = JSON.parse(text);
                let embed = new discord.MessageEmbed()
                    .setTitle("And it landed on...")
                    .setDescription(txtJson.coin)
                    .setColor(color)
                    .setImage(txtJson.gif);
                message.channel.send(embed)
            })
    }
}