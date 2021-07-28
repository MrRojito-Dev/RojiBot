const Discord = require("discord.js-light");
module.exports = {
    name: "messageReactionRemove",
    emitter: "on",
    run: async (client, messageReaction, user) => {
        // Reaction roles
        if (messageReaction.message.id !== "870032853545664553") return;

        const member = await messageReaction.message.guild.members.fetch(user.id);

        const PiñaFan = messageReaction.message.guild.roles.cache.get("869968063867518997");
        const RojiFan = messageReaction.message.guild.roles.cache.get("860952790602874900");

        switch (messageReaction.emoji.name) {
            case "🪀":
                if (member.roles.cache.get(RojiFan.id)) {
                    member.roles.remove(RojiFan);
                }
                break;
    
            case "🍍":
                if (member.roles.cache.get(PiñaFan.id)) {
                    member.roles.remove(PiñaFan);
                }
                break;

            default:
                break;
        };
}}