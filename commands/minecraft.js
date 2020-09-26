module.exports = {
    name: 'minecraft',
    description: 'mc',
    execute(message, args) {
        any(function (result) {
            console.log(result);
        });
        
        
        function any(callback) {
            const fetch = require('node-fetch');
            const arguments = (args.map(i => i + '')).join('');
        
            function ISODateString(d) {
                function pad(n) {
                    return n < 10 ? '0' + n : n
                }
                return d.getUTCFullYear() + '-' +
                    pad(d.getUTCMonth() + 1) + '-' +
                    pad(d.getUTCDate()) + 'T' +
                    pad(d.getUTCHours()) + ':' +
                    pad(d.getUTCMinutes()) + ':' +
                    pad(d.getUTCSeconds()) + 'Z'
            }
        
            // var d = new Date().setMinutes(endDate.getMinutes() - 5);
            var d = new Date( Date.now() - 100000 * 60 );
            var finald = (ISODateString(d));
        
        
            console.log('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&publishedAfter=' + finald + '&q=minecraft&safeSearch=none&type=video&key=AIzaSyDKAHjQ2RsTeiWqXTXRaFGfVwkc9zvLVMw');
            var x = fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&publishedAfter=' + finald + '&q=minecraft&safeSearch=none&type=video&key=AIzaSyDKAHjQ2RsTeiWqXTXRaFGfVwkc9zvLVMw')
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(JSON.stringify(responseJSON));
                    var image = responseJSON.items[Math.floor(Math.random() * 49)].id.videoId;
                    console.log("eeeee" + JSON.stringify(image));
                    message.reply('https://www.youtube.com/watch?v=' + image);
                });
            callback(x);
        }
    },
};