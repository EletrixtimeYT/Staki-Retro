module.exports = {
    app: {
        prefix: '!',
        token: 'YOUR TOKEN',
        playing: '!help | 💗 By Stasair' 
      
        
    },

    opt: {
        
        maxVol: 300,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
