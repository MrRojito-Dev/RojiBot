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
    cacheRoles: false,
    cacheGuilds: true,
    cachePresences: false,
});

client.login()
.then(() => {
    console.log(`Sesión iniciada como ${client.user.tag}`);

    app.listen(process.env.PORT || 3000, () => console.log(`Express server listen on port ${process.env.PORT || 3000}`));
})
.catch((err) => console.error(err));