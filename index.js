function shout(string) {
    return string.toUpperCase(); //HELLO
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase()) {
        return "I can\'t hear you!";
    }   
    else if (string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string == "Let\'s have dinner together!"){
        return "I would love to!";
    }
}
