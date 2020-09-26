module.exports = {
    name: 'r',
    description: 'reddit',
    args: true,
    execute(message, args) {
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
    },
};