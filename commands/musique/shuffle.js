module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ ${message.author} aucune musique en cours de lecture`);

        if (!queue.tracks[0]) return message.channel.send(`❌ ${message.author} aucune musique ne sera jouer après celle-là`);

        await queue.shuffle();

        return message.channel.send(`✅`);
    },
};