exports.run = async (client, message, args, ops) => { 
    resp = `**List of Commands:\n1. -play : input a URL or the name of the song after the command.\n2. -search : Searches for a song and provides a list to choose from.\n3. -p : Pauses or Resumes the song.\n4. -skip : Skips the current song.\n5. -v / -volume : Sets the volume of the song.\n6. -q / -queue : Shows the current queue.\n7. -clear : Clears the queue.\n8. -stop : Stops and leaves the voice channel**`;
    message.channel.send(resp);
}