exports.run = async (client, message, args, ops) => {
    if (message.member.voice.channel !== message.guild.me.voice.channel) {
        ops.active.connection = await message.member.voice.channel.join();
        message.channel.send('Joined...');
    }
    else if (message.member.voice.channel === message.guild.me.voice.channel) {
        message.channel.send('Already joined...');
    }
}
