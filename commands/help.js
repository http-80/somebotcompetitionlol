let discord = require("discord.js")
let pagination = require("discord.js-pagination")
module.exports.run = async function(message, args, color) {
    let embed = new discord.MessageEmbed()
        .setTitle("Bot Help Menu")
        .setColor(color)
        .setDescription("Thanks for using this bot. This was made in 3 hrs btw well enjoy\n\n [My Dashboard] (https://competition.botdash.pro/)")
        .addField("Page 1", "Moderation Commands")
        .addField("Page 2", "Fun Commands")
        .addField("Page 3", "Economy");
    let p1 = new discord.MessageEmbed()
        .setTitle("Bot Help Menu")
        .setColor(color)
        .setDescription("Page: Moderation Commands")
        .addField("ban", "Ban a user or as i would like to call it thanos snap them from your server.")
        .addField("kick", "Another generic kick command to kick a user from your server")
    let p2 = new discord.MessageEmbed()
        .setTitle("Bot Help Menu")
        .setColor(color)
        .setDescription("Page: Fun Commands")
        .addField("cat", "Kitty cat")
        .addField("dog", "Doggo go woof")
        .addField("bear", "I wonder what this command does **H M M M**")
        .addField("panda", "Just as cute as they are in minecraft : ) ")
        .addField("hug", "Anime hug stuff idk like owo bot lol ok bai")
        .addField("kiss", "Idk at this point")
        .addField("quote", "My brain is growing from these quotes.")
        .addField("riddle", "Riddle: What are you going to do in one second ||Run this command.||")
        .addField("car", "Lamborghini bugatti sport s turbo 4x deluxe ultimate **V R O O M**")
        .addField("fact", "Fun fact: Did you know you are currently using this bot?")
        .addField("coinflip", "Flip that coin")
        .addField("8ball", "The almighty eightball, I mean you have to right?")
        .addField("info", "Some information about this bot")

    let p3 = new discord.MessageEmbed()
        .setTitle("Bot Help Menu")
        .setColor(color)
        .setDescription("Page: Economy")
        .addField("balance", "See your balance")
        .addField("daily", "Get your daily coins.")
        .addField("workatgrubhub", "Grubhub perks give you deals on the food you love. The kind of deals that make you boogie.") //Copy pasted the description from the ad script, This is not copy pasting code. So do note that.
        .addField("shop", "See what the shop has")
        .addField("buy", "Sadly could not get completed in time.")
        .addField("additem", "Sadly could not get completed in time.")
    let pages = [
        embed,
        p1,
        p2,
        p3
    ]
    pagination(message, pages);
}