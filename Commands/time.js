exports.run = (client, message, args) => {
    var date = new Date();
    var offset = date.getTimezoneOffset();
    var hourOffset;
    var minuteOffset;
    if (offset == 0) {
        hourOffset = 0;
        minuteOffset = 0;
    }
    else if (offset < 0) {
        hourOffset = -(offset / 60);
        minuteOffset = -(offset % 60);
    }
    else {
        hourOffset = (offset / 60);
        minuteOffset = (offset % 60);
    }
        
    var hours = date.getHours() + hourOffset;
    var minutes = date.getMinutes() + minuteOffset;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    message.channel.send(strTime);
}