const Util = require('util');
module.exports = {
    name: "eval",
    aliases: ["e"],
    args: 1,
    use: "r!eval <Código>",
    category: "dev",
    dev: true,
    run: (Discord, client, message, args) => {
        try {
            let output = await eval(args.join(' '));
            let type = typeof output;
            if (typeof output !== 'string') output = Util.inspect(output, { depth: 0 })

            if (output.length >= 1020) output = `${output.substr(0, 1010)}...`;

            return message.channel.send(`Tipo: ${type.substring(0, 1).toUpperCase() + type.substring(1)}\n${output.replace(client.token, 'token secreto xd')}`, { code: "js" })
    } catch (err) {
        return message.channel.send(`Tipo: ${err.name}\n${err.message}`, { code: "js" })
    }
}}