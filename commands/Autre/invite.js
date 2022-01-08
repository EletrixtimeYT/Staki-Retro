const { MessageEmbed } = require('discord.js');

module.exports = {

    name: 'invite',

    aliases: [],

    utilisation: '{prefix}invite',

execute(client, message, args) {

        const embed = new MessageEmbed();
    embed.setColor('RED') 
    embed.setDescription(`[Invite moi](https://discord.com/oauth2/authorize?client_id=928622249869709372&permissions=8&scope=bot) 
         \n[Mon Discord](https://discord.gg/nMC3XJMEwu) ` )
    embed.setTitle('INVITATION')
    message.channel.send({ embeds: [embed] });
    },

};