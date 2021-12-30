const Discord = require("discord.js"),
    client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
    let commands = client.application.commands;

    commands.create({
        name: 'ping',
        description: 'Pong!',
    });
});

client.on("interactionCreate", async interaction => {
    if(!interaction.isCommand) return;

    const { commandName, options } = interaction;

    if(commandName === "ping") {
        interaction.reply({
            content: "Pong!"
        })
    }
})

require("dotenv").config();
client.login(process.env.TOKEN);