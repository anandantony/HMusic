const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
    
    if (!message.member.voice.channel) return message.channel.send('Please connect to a voice channel...');
    
    if (!args[0]) return message.channel.send('Please input a URL or song name following the command...');

    let validate = await ytdl.validateURL(args[0]);

    if (!validate) {
        let commandFile = require(`./play1`);
        commandFile.run(client, message, args, ops);
        return;
    }

    let info = await ytdl.getInfo(args[0]);
    
    let data = ops.active.get(message.guild.id) || {};  //fetch active and if not defined, define with {}
    if (!data.connection) data.connection = await message.member.voice.channel.join();      //make connection, if there is not
    if (!data.queue) data.queue = [];       //make a queue if it doesn't exists
    data.guildID = message.guild.id;

    if (!data.volume) data.volume = 1;

    //adding to queue
    data.queue.push({
        songTitle: info.videoDetails.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });

    if (!data.dispatcher) play(client, ops, data);
    else {
        message.channel.send(`Added to queue: ${info.videoDetails.title} | Requested by: ${message.author.id}`);
    }

    //update map
    ops.active.set(message.guild.id, data);

}

async function play(client, ops, data) {
    client.channels.cache.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested by: ${data.queue[0].requester}`);

    if(client.channels.cache.get(data.queue[0].announceChannel).guild){
        client.user.setPresence({
        activity: {
            name: `${data.queue[0].songTitle}`,
            type: "PLAYING"
            }
        });
    }
    else{
        client.user.setPresence({
            activity: {
                name: "-help",
                type: "PLAYING"
            }
        });
    }
    

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, { filter: 'audioonly' }));
    
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.setVolume(data.volume);

    //song end
    data.dispatcher.on("finish", function () {
        finish(client, ops, data.dispatcher);
        client.user.setPresence({
            activity: {
                name: "-help",
                type: "PLAYING"
            }
        });
    });

}

function finish(client, ops, dispatcher) {
    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();

    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        play(client, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);

        let voiceChannel = client.guilds.cache.get(dispatcher.guildID).me.voice.channel;
        if (voiceChannel) voiceChannel.leave();
    }
}