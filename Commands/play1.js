const ytsearch = require('yt-search');

exports.run = async (client, message, args, ops) => { 
    
    ytsearch(args.join(' '), function (err, result) {
        if (err) return message.channel.send('Sorry, something went wrong...');

        let commandFile = require(`./play`);
        commandFile.run(client, message, [result.videos[0].url], ops);

    });
}