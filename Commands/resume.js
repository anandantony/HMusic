exports.run = async (client, message, args, ops) => { 

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There isn\'t currently any music playing here...');

    if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('Sorry, you currently aren\'t in the same voice channel...');

    if (!fetched.dispatcher.paused) return message.channel.send('This music isn\'t paused...');

    fetched.dispatcher.resume();

    message.channel.send(`Successfully resumed ${fetched.queue[0].songTitle}`);

}