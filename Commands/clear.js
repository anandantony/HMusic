exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There isn\'t currently any music playing here...');

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    if (!queue[1]) return message.channel.send('Nothing in queue to clear...');
    else {
        fetched.queue.length = 1;
        return message.channel.send('Queue cleared...');
    }

}