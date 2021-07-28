const Discord = require("discord.js-light");
module.exports = {
    name: "message",
    emitter: "on",
    run: (client, message) => {
        let prefix = client.config.prefix;
        
        if (message.channel.type === "dm" || message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        let cmd = client.commands.get(command) || client.commands.find((c) => c.aliases && c.aliases.includes(command));
        if (!cmd) return;

        if (cmd.dev && !client.config.devs.includes(message.author.id)) return message.reply(`solo mis desarrolladores pueden utilizar este comando.`);
        if (cmd.args > args.length) return message.reply(`te faltaron argumentos.\n> El uso correcto es: \`${cmd.use}\``)

        

        try {
            cmd.run(Discord, client, message, args);
        } catch (error) {
            console.log(`Error en el comando ${cmd.name}: ${error.message}`);

            return message.channel.send(`Ocurrió un error:\n \`\`\`${error.message}\`\`\``);
        }
}};