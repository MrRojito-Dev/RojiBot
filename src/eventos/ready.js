module.exports = {
    name: "ready",
    emitter: "once",
    run: (client) => {
        let presences = [
            {
                name: "https://github.com/MrRojito-Dev/RojiBot",
                type: "WATCHING"
            },
            {
                name: "explotar cosas",
                type: "PLAYING"
            },
            {
                name: "el laboratorio",
                type: "WATCHING"
            }
        ];

        setInterval(() => { 
            client.setPresence({
                activity: presences[Math.floor(Math.random() * presences.length)],
                status: "dnd"
            });
        }, 30000);
}}