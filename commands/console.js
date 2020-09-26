module.exports = {
	name: '$',
    description: 'console',
    args: true,
	execute(message, args) {
        const arguments = (args.map(i => i + ' ')).join('');
        // const arguments = 
        // const arguments = args.toString();
        console.log(arguments);
        try {
            eval(arguments);
        } catch (e) {
            console.log(e);
            message.channel.send('`'+e.message+'`');
        }
        // console.log(eval(arguments));
	},
};
