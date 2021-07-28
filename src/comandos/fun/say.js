module.exports = {
    name: "say",
    aliases: [],
    args: 1,
    use: "r!say <Algo>",
    category: "fun",
    dev: false,
    run: (Discord, client, message, args) => {
        let algo = args.join(" ");

        return message.channel.send(algo, {
            allowedMentions: {
                parse: ["roles", "everyone"]
            }
        }).then(() => {
            message.delete();
        });
}}