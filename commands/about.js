module.exports = {
	name: 'about',
	description: 'Shows about stuff',
	execute(message, args) {
		message.channel.send(
            "**Read-it, by bepaler**" + "\n**Type `!b (not working yet)` to see the latest updates**\n\n" + "`!b r [args]` - Get a random image post from a given subreddit\n" + "`!b minecraft` - Find the newest Minecraft video\n" + "`!b $ [args]` - Run code directly into NodeJS (may crash the entire bot discord-wide!)\n" + "`!b about` - Get info about this bot\n" + "`!b changes` - (not working yet)\n"
        );
	},
};