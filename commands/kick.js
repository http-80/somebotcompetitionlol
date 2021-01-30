let discord = require("discord.js")
let pagination = require("discord.js-pagination")
module.exports.run = async function(message, args, color) {
    if (message.mentions.members.first()) {
        if (message.member.hasPermission("KICK_MEMBERS"))
            try {
                message.mentions.members.first().kick();
                let embed = new discord.MessageEmbed()
                    .setTitle("User Kicked")
                    .setColor(color)
                    .setDescription("That user has been kicked.")
                message.channel.send(embed);
            }
            catch {
                let embed = new discord.MessageEmbed()
                    .setTitle("Could not kick user!")
                    .setColor("RED")
                    .setDescription("I could not kick that user.")
                message.channel.send(embed);
            }
    } else {
        let embed = new discord.MessageEmbed()
            .setTitle("Please mention the user")
            .setColor("ORANGE")
            .setDescription("Please mention the user you would like to kick")
        message.channel.send(embed);
    }
}