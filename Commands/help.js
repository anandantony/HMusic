exports.run = async (client, message, args, ops) => { 
    resp = `**List of Commands:\n1. -play : input a URL or the name of the song after the command.\n2. -search : Searches for a song and provides a list to choose from.\n3. -pause / -p : Pauses the song.\n4. -resume / -r : Resumes the song.\n5. -skip : Skips the current song.\n6. -volume / -v : Sets the volume of the song.\n7. -queue / -q : Shows the current queue.\n8. -clear : Clears the queue.\n9. -stop : Stops and leaves the voice channel**`;
    message.channel.send(resp);
}