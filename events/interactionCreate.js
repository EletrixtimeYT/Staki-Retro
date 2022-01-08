module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `❌ Aucune musique est entrain d'être jouer`, ephemeral: true, components: [] });

            int.member.send(`✅ Vous avez enregistré la piste  **${queue.current.title} | ${queue.current.author}** sur **${int.member.guild.name} **`).then(() => {
                return int.reply({ content: `✅ Je vous ai envoyé le titre de la musique en MP`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `❌ Impossible de vous envoyer un MP`, ephemeral: true, components: [] });
            });
        }
    }
};