module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`❌ ${message.author} Aucune musique en cours de lecture`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `✅ La musique ${queue.current.title}
 est en pause` : `❌ ${message.author} Une erreur est survenue`);
    },
};