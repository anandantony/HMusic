exports.run = async (client, message, args, ops) => { 
    resp = 'List of Commands:\n1. -play : input a URL or the name of the song after the command.\n2. -pause / -p : Pauses the song.\n3. -resume / -r : Resumes the song.\n4. -skip : Skips the current song.\n5. -volume / -v : Sets the volume of the song.\n6. -queue / -q : Shows the current queue.\n7. -clear : Clears the queue.\n8. -stop : Stops and leaves the voice channel';
    message.channel.send(resp);
}