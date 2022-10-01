const Discord = require("discord.js");
const config = require("./config.json");
const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Bot foi Iniciado, com ${client.users.size} usuárions, em ${client.channels.size} canais, em ${client.guilds.size} servidores`);
    client.user.setActivity("Eu estou em ${client.guilds.size}");
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor ${guild.name} (id: ${guild.id}. Populaçao: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log.setActivity(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id}`);
    client.user.setActivity(`Serving ${client.guilds.size}`);
});

client.on("message", async message => {


});

client.login("OTA2MzczMzU1NjM5Mjc1NTIx.YYXr9w.noqfR6UlpGl9zjh7h1_vB6ClnxI");


