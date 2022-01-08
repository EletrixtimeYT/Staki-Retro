module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`✅ ${message.author} Aucune musique en cours de lecture`);

        if (!queue.tracks[0]) return message.channel.send(`❌ ${message.author} Pas de musique dans la file d’attente après celle en cours`);

        await queue.clear();

        message.channel.send(`🗑️ La file d’attente vient d’être effacée`);
    },
};