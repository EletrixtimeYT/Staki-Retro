module.exports = async (client) => {
    console.log(` ${client.user.username} est connecté\n-> Dans ${client.guilds.cache.size} serveurs avec un total de  ${client.users.cache.size} membres `);

    client.user.setActivity(client.config.app.playing);
};