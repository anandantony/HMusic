exports.run = async (client, message, args, ops) => { 
    resp = `**List of Commands:\n1. -play : input the name of the song or the YouTube URL after the command (if not Pauses or Resumes the current song).
    \n2. -search : Searches for a song and provides a list to choose from.
    \n3. -p : Pauses or Resumes the song.
    \n4. -skip : Skips the current song.
    \n5. -v / -volume : Sets the volume of the song.
    \n6. -q / -queue : Shows the current queue.
    \n7. -clear : Clears the queue.
    \n8. -stop : Stops and leaves the voice channel
    
    Try to avoid special symbols in the name of the songs...
    It makes the bot a bit cranky 😐
    **`;
    message.channel.send(resp);
}