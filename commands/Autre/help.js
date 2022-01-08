const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription("**Staki** a été développé par [L'équipe Stasair](https://discord.gg/nMC3XJMEwu)! \nMon prefix : \`?\` \nKati est un bot musical francophone 100% gratuit ! pas de premium ni rien ! Car on sait combien c'est frustrant et nous voulons pas sa.");
        embed.addField(`${commands.size} Commandes`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Staki - 💗 Par Stasair', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};