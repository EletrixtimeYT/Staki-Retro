module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ ${message.author} aucune musique en cours de lecture  `);

        const success = queue.skip();

        return message.channel.send(success ? `✅ ${queue.current.title} a été skip` : `❌ ${message.author} une erreur est survenue`);
    },
};