let discord = require("discord.js")
let pagination = require("discord.js-pagination")
let fetch = require("node-fetch")
module.exports.run = async function(message, args, color) {
    if (!args[0]) return message.channel.send("Almighty eightball says give an actual question.")
    let index = require("./../index")
    let provider = await index.dashboard.getVal(message.guild.id, "provider");
    if (provider == "No Api Key") {
        fetch("https://no-api-key.com/api/v1/magic8ball")
            .then(async(resp) => {
                let text = await resp.text();
                let txtJson = JSON.parse(text);
                let embed = new discord.MessageEmbed()
                    .setTitle("The almighty 8ball said it is")
                    .setDescription(txtJson.response)
                    .setColor(color)
                message.channel.send(embed)
            })
    }
}