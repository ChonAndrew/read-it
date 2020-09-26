const Discord = require("discord.js");
const config = require("./auth.json");
const client = new Discord.Client();
const prefix = "!b ";

client.on("message", function (message) {
    if (message.author.bot) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if ((message.content.toLowerCase().includes("fuck you") === true)) {
        message.channel.send("no, fuck YOU");
        console.log("??")
    }
    if (!message.content.startsWith(prefix)) return;
    if (command === "about") {
        message.channel.send(
            "**Read-it, by bepaler**" + "\n**Type `!b (not working yet)` to see the latest updates**\n\n" + "`!b r [args]` - Get a random image post from a given subreddit\n" + "`!b $ [args]` - Run code directly into NodeJS (may crash the entire bot discord-wide!)\n" + "`!b about` - Get info about this bot\n" + "`!b changes` - (not working yet)\n"
        );
    } else if (command === "$") {
        const arguments = (args.map(i => i + ' ')).join('');
        // const arguments = 
        // const arguments = args.toString();
        console.log(arguments);
        try {
            eval(arguments);
        } catch (e) {
            console.log(e);
            message.channel.send("NOTICE: If you are trying to type an apostraphe on a mobile device, double check that it is shown as ' not ‘ .");
        }
        // console.log(eval(arguments));
    } else if (command === "r") {
        any(function (result) {
            console.log(result);
        });
        function any(callback) {
            const fetch = require('node-fetch');
            const arguments = (args.map(i => i + '')).join('');
            var x = fetch('https://www.reddit.com/r/' + arguments + '/hot.json?limit=100')
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(JSON.stringify(responseJSON));
                    if (JSON.stringify(responseJSON) === '{"reason":"private","message":"Forbidden","error":403}') {
                        message.reply('It appears the subreddit you listed is either private or dead.');
                    } else {
                        var image = responseJSON.data.children[Math.floor(Math.random() * 99)].data.url_overridden_by_dest;
                        console.log("eeeee" + JSON.stringify(image));
                        if (JSON.stringify(image).includes("gallery")) {
                            any(function (result) {
                                console.log(result);
                            });

                        } else {
                            console.log(image)
                            message.reply(image);
                        }
                    }
                });
            callback(x);
        }
    }
});

client.login(config.BOT_TOKEN);