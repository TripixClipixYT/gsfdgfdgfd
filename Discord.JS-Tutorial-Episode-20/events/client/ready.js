module.exports = async bot => {
     console.log(`${bot.user.username} is online`)
    // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});

    let statuses = [
        `${bot.guilds.size} servers!`,
        "%help",
        `over ${bot.users.size} users!`,
        `Tripix Studios 2019-2020`,
        `Tripix`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 2000)

}