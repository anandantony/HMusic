exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There isn\'t currently any music playing here...');

    if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('Sorry, you currently aren\'t in the same voice channel...');

    if (isNaN(args[0] || args[0] > 200 || args[0] < 0)) return message.channel.send('Please input a value between 0 and 200.');

    
    fetched.dispatcher.setVolume(args[0] / 100);
    fetched.volume = args[0] / 100;

    message.channel.send(`Volume successfully set to ${args[0]}`);

}