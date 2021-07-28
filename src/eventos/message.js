module.exports = {
    name: "message",
    emitter: "on",
    run: (client, message) => {
        console.log(message.content);
}};