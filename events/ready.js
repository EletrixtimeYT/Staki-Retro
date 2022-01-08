module.exports = async (client) => {
    console.log(` ${client.user.username} est connecté\n-> Dans ${client.guilds.cache.size} serveurs  `);

    client.user.setActivity(client.config.app.playing);
};
