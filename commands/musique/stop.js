module.exports = {
    name: 'stop',
    aliases: ['leave'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ ${message.author} aucune musique en cours de lecture`);

        queue.destroy();

        message.channel.send(`✅ oh la fête est fini ?! Bon bas à plus tard, moi je vais regarder un film ! 👋`);
    },
};