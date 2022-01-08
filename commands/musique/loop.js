const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ ${message.author} Aucune musique en cours de lecture`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`❌ ${message.author} Vous devez d’abord désactiver la musique actuelle en mode boucle   (${client.config.app.prefix}loop). 
`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode de répétition **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** toute la file d’attente sera répétée à l’infini 🔁 `:`❌ ${message.author} Quelque chose s’est mal passé`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`❌ ${message.author} Vous devez d’abord désactiver la file d’attente actuelle en mode boucle  (${client.config.app.prefix}loop queue)`);
            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode répétition** ${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** la musique actuelle sera répétée à l’infini (vous pouvez boucler la file d’attente avec l’option <queue>) 🔂` : `❌ ${message.author} Une erreur est survenue`);
        };
    },
};