require("dotenv").config();

/* Express server */
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('Hola mundo');
});

/* Bot */
const Discord = require("discord.js-light");
const client = new Discord.Client({
    ws: {
        intents: Discord.Intents.ALL
    },
    presence: {
        activity: {
            name: "el laboratorio",
            type: "WATCHING"
        },
        status: "dnd"
    },
    cacheEmojis: false,
    cacheChannels: false,
    cacheOverwrites: false,
    cacheRoles: true,
    cacheGuilds: true,
    cachePresences: false,
});

client.commands = new Discord.Collection();
client.config = require('./utils/config.json');

/* Handler */
let { readdirSync } = require('fs');

// Eventos
for (const file of readdirSync(`${__dirname}/eventos/`)) {
    if (file.endsWith(".js")) {
        let event = require(`${__dirname}/eventos/${file}`);
        
        client[event.emitter](event.name, event.run.bind(null, client));
    }
}

// Comandos
for (const subFolder of readdirSync(`${__dirname}/comandos`)) {
    for (const file of readdirSync(`${__dirname}/comandos/${subFolder}`)) {
        if (file.endsWith(".js")) {
            let command = require(`${__dirname}/comandos/${subFolder}/${file}`);

            client.commands.set(command.name, command);
        }
    }
}

client.login()
.then(() => {
    console.log(`Sesión iniciada como ${client.user.tag}`);

    app.listen(process.env.PORT || 3000, () => console.log(`Express server listen on port ${process.env.PORT || 3000}`));
})
.catch((err) => console.error(err));