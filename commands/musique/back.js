module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ ${message.author} Aucune musique en cours de lecture`);

        if (!queue.previousTracks[1]) return message.channel.send(`❌ ${message.author} Aucune musique n'a été jouer avant`);
        await queue.back();

        message.channel.send(`✅ Lecture de la piste **précédente** `);
    },
};