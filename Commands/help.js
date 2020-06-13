exports.run = async (client, message, args, ops) => { 
    resp = 'List of Commands:\n1. -play : input a URL or the name of the song after the command.\n2. -pause : Pauses the song.\n3. -resume : Resumes the song.\n4. -skip : Skips the current song.\n5. -volume : sets the volume of the song. Range 0-200\n6. -queue : Shows the current queue.\n7. -clear : Clears the queue.\n -leave : Leaves the voice channel';
    message.channel.send(resp);
}