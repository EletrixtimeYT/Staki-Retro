module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`❌ ${message.author} aucune musique en cours de lecture`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `✅ ${queue.current.title} est désormais entrain d'être joué !` : `❌ ${message.author} une erreur est survenue`);
    },
};