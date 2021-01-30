const fs = require('fs');
const discord = require("discord.js");
const client = new discord.Client();
const commands = new discord.Collection();
let fetch = require("node-fetch");
require("dotenv").config();
let botdash = require("botdash.pro");
const acokey = process.env.aco
//Sorry for minor blankout, I created a API Key for a AI and added this one line of code above. See stream and compare code to see i did not do anything else
let dashboard = new botdash.APIclient(process.env.BOTDASH)
client.on('ready', () => {
    fs.readdirSync("./commands").forEach((command, i) => {
        let commandFile = require(`./commands/${command}`)
        commands.set(`${command.replace(".js", "")}`, commandFile);
        console.log("Loaded the command " + command.replace(".js", ""));
    })
})
client.on("message", async(message) => {
    const prefix = await dashboard.getVal(message.guild.id, "prefix") //TODO: Add bot dashboard to prefix
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let msgArr = message.content.split(" ");
    let args = msgArr.splice(1);
    let command = msgArr[0];
    if (commands.get(command.slice(prefix.length)))
    {
        if (command != prefix + command.slice(prefix.length)) return;
        let commandRun = commands.get(command.slice(prefix.length))
        const color = await dashboard.getVal(message.guild.id, "color");
        commandRun.run(message, args, color);
    }
    //TODO: Add AI
    const useAI = await dashboard.getVal(message.guild.id, "enableai");
    if (useAI === "Enable") {
        const aiChannel = await dashboard.getVal(message.guild.id, "ai");
        if (message.channel.id == aiChannel) {
            fetch('http://api.brainshop.ai/get?bid=154717&key=' + acokey + '&uid=' + message.member.id + '&msg= ' + encodeURIComponent(message.content)).then(async(res) => {
                const txtRaw = await res.text();
                const txtJson = await JSON.parse(txtRaw)
                message.channel.send(txtJson.cnt)
            }) //Copy paste API URL, This is from the API Dashboard, I just created this api token. See above
        }
    }
})
// IDK at this point do i have to restart
client.login(process.env.TOKEN);
module.exports = {
    dashboard: dashboard
}