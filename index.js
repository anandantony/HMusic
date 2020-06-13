const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '-';

const vesionNo = '1.0';

const ownerID = process.env.OWN_TOKEN;

const active = new Map();

var servers = {};

bot.on('ready', () => {
    console.log('Yo! I am online!');
})

bot.on('message', message => {

    //vars
    let args = message.content.slice(PREFIX.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    //command handler
    try {
        delete require.cache[require.resolve(`./Commands/${cmd}.js`)];

        let ops = {
            ownerID: ownerID,
            active: active,
            volume: 1
        }

        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(bot, message, args, ops);
    } catch (e) {
        console.log(e.stack);
        message.channel.send('Unkown command. Please try -help to see list of commands.');
    }

})

bot.login(process.env.BOT_TOKEN);

function version(message) {
    message.channel.send('Version: ' + vesionNo);
}