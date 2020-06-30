exports.run = (client, message, args, ops) => {
    if (!message.member.voice.channel) return message.channel.send('Please connect to a voice channel..');

    if (!message.guild.me.voice.channel) return message.channel.send('Sorry, the bot isn\'t connected to the guild...');
    let fetched = ops.active.get(message.guild.id);
    

    if (fetched) {
        fetched.dispatcher.end();
        ops.active.queue = [];
    }
    message.guild.me.voice.channel.leave();
    message.channel.send('Leaving channel...');
}