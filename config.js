module.exports = {
    app: {
        token: 'MTEwMTk5OTAxNjM1MjQyODAzMg.GzsSTm.r7fwx5TBPF09Q5PKqbv9O7fH4qGdIZSSkFOKmo',
        playing: 'Sus',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'BOT',
            commands: []
        },
        maxVol: 200,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 100,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
