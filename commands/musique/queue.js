const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`❌ ${message.author} aucune musique en cours de lecture`);

        if (!queue.tracks[0]) return message.channel.send(`❌ ${message.author} aucune musique ne sera joué après celle-là`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`queue du serveur - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Par ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `Et **${songs - 5}** autre songs` : `dans la playlist **${songs}** chanson(s)`;

        embed.setDescription(`musique actuel ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('Staki - 💗 Par Stasair', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};