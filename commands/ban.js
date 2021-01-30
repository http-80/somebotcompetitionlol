let discord = require("discord.js")
let pagination = require("discord.js-pagination")
module.exports.run = async function(message, args) {
    if (message.mentions.members.first()) {
        if (message.member.hasPermission("BAN_MEMBERS"))
        try {
            if (args[1]) {
                message.mentions.members.first().ban({reason: args[1]});
            } else {
                message.mentions.members.first().ban();
            }
            let embed = new discord.MessageEmbed()
                .setTitle("User Banned")
                .setColor(color)
                .setDescription("That user has been banned.")
            message.channel.send(embed);
        }
        catch {
            let embed = new discord.MessageEmbed()
                .setTitle("Could not ban user!")
                .setColor("RED")
                .setDescription("I could not ban that user.")
            message.channel.send(embed);
        }
    } else {
        let embed = new discord.MessageEmbed()
            .setTitle("Please mention the user")
            .setColor("ORANGE")
            .setDescription("Please mention the user you would like to ban")
        message.channel.send(embed);
    }
}