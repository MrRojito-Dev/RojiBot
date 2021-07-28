const Discord = require('discord.js-light');
module.exports = {
    name: "messageReactionAdd",
    emitter: "on",
    run: async (client, messageReaction, user) => {
        // Reaction roles
        if (messageReaction.message.id !== "870032853545664553") return;

        const member = await messageReaction.message.guild.members.fetch(user.id);

        switch (messageReaction.emoji.name) {
            case "🪀":
                await member.roles.add("860952790602874900");
                break;
    
            case "🍍":
                await member.roles.add("869968063867518997");
                break;

            default:
                break;
        };
}}