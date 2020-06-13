exports.run = async (client, message, args, ops) => {
    if (message.member.voice.channel !== message.guild.me.voice.channel) {
        await message.member.voice.channel.join();
    }
}
