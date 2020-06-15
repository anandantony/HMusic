const ytsearch = require('yt-search');

exports.run = async (client, message, args, ops) => { 
    
    ytsearch(args.join(' '), function (err, result) {
        if (err) return message.channel.send('Sorry, something went wrong...');

        let videos = result.videos.slice(0, 10);

        let resp = '';
        for (var i in videos) {
            resp += `**[${parseInt(i) + 1}]:** \`${videos[i].title}\`\n`;
        }

        resp += `\n**Choose a number between \`1-${videos.length}\`**`;

        message.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0;
        const collector = message.channel.createMessageCollector(filter, { max: 1 });

        try {
            collector.once('collect', function (m) {
                let commandFile = require(`./play`);
                commandFile.run(client, message, [videos[parseInt(m.content) - 1].url], ops);
            });
        } catch (e) {
            message.channel.send('Enter valid option... Please try again.');
        }

    });
}