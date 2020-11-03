const sptfy = require('spotify-web-api-js');
var s = new sptfy();
const { Client } = require('discord.js');

exports.run = async (client, message, args, ops) => {
    if (!message.member.voice.channel) return message.channel.send('Please connect to a voice channel...');

    if (!args[0]) {
        return message.channel.send('Please enter a url or name');
    }

    sptfy.
}