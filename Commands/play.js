const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
    
    if (!message.member.voice.channel) return message.channel.send('Please connect to a voice channel...');
    
    if (message.guild.me.voice.channel) return message.channel.send('The bot is already connected to the guild...');
    
    if (!args[0]) return message.channel.send('Please input a URL following the command...');

    let validate = await ytdl.validateURL(args[0]);

    if (!validate) return message.channel.send('Sorry, please enter a valid URL...');

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voice.channel.join();

    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));

    message.channel.send(`Now playing: ${info.title}`);

}