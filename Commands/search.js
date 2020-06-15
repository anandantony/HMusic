const ytsearch = require('yt-search');

exports.run = async (client, message, args, ops) => { 
    
    ytsearch(args.join(' '), function (err, result) {
        if (err) return message.channel.send('Sorry, something went wrong...');

        let videos = result.videos.slice(0, 10);

        let resp = '';
        for (var i in videos) {
            resp += `**[${parseInt(i) + 1}]:** \`${videos[i].title}\`\n`;
        }

        resp += `\n**Choose a number between \`1-${videos.length}\` or enter c to cancel search**`;

        message.channel.send(resp);

        // const filter = m => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0 && m.content == 'c';
        const filter = m => (m.content < videos.length + 1 && m.content > 0) || m.content == 'c';
        const collector = message.channel.createMessageCollector(filter, { max: 1, maxProcessed: 1 });

        try {
            collector.once('collect', function (m) {
                if (m.content === 'c') {
                    return message.channel.send('Search cancelled...');
                }
                let commandFile = require(`./play`);
                commandFile.run(client, message, [videos[parseInt(m.content) - 1].url], ops);
            });
        } catch (e) {
            message.channel.send('Enter valid option... Please try again.');
        }

    });
}