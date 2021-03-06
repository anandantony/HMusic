exports.run = async (client, message, args, ops) => {
    if (!message.guild.me.voice.channel) return message.channel.send('Sorry, the bot isn\'t connected to the guild...');

    if (!message.member.voice.channel) return message.channel.send('Please connect to a voice channel...');

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There isn\'t currently any music playing here...');

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested by:** *${nowPlaying.requester}*\n\n__**Queue**__\n`;

    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
    }

    message.channel.send(resp);

}