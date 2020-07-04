exports.run = async (client, message, args, ops) => { 

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There isn\'t currently any music playing here...');

    if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('Sorry, you currently aren\'t in the same voice channel...');

    if (fetched.dispatcher.paused) {
        fetched.dispatcher.resume();
        if (fetched.queue[0])
            message.channel.send(`Successfully resumed ${fetched.queue[0].songTitle}`);
    }
    else if(!fetched.dispatcher.paused){
        fetched.dispatcher.pause();

        message.channel.send(`Successfully paused ${fetched.queue[0].songTitle}`);
    }
}