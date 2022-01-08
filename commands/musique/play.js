const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p'],
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`❌ ${message.author} Veuillez saisir une recherche valide`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`❌ ${message.author} aucun résultat trouvé`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`❌ ${message.author} j'ai pas peu rejoindre le salon vocal`);
        }

        await message.channel.send(`🎧 chargement de votre ${res.playlist ? 'playlist' : 'chanson'}... `);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};