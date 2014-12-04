/**
 * Created by Umcookies on a Potato.
 */
API.on(API.chatLog("Background Changer loaded", 1));
API.on(API.chatLog("If this is the first time you're using this script, please use /cmd"));
API.on(API.CHAT_COMMAND, awesomethings);
//variables
var backgroundurl = "https://cdn.plug.dj/_/static/images/community/background.ae45269504d5329fb78e47e9bd4be2da0698f284.jpg";
var playerWhereX = document.getElementById("playback").style.left.replace("px", "");
var playerWhereY = "54";
var voteWhereX = document.getElementById("vote").style.left.replace("px", "");
var voteWhereY = document.getElementById("vote").style.top.replace("px", "");
var joinWhereX = document.getElementById("dj-button").style.left.replace("px", "");
var joinWhereY = document.getElementById("dj-button").style.top.replace("px", "");
var avatarsWhereX = document.getElementById("avatars-container").style.left.replace("px", "");
var avatarsWhereY = document.getElementById("avatars-container").style.left.replace("px", "");
var loopKeeppos = '0';
//functions
function awesomethings(data) {
    var commands = data;
    if (commands == "/background") {
        backgroundurl = prompt("Please input the URL of the picture you would like to use");
        API.chatLog("It'll take a few seconds to load the picture, if you entered a valid picture please be patient");
        document.getElementsByClassName("room-background")[0].setAttribute('style', 'background: url(' + backgroundurl + ')');
    }
    if (commands == "/player") {
        playerWhereX = prompt("Please input how many pixels from the left of the screen you would like the player", "585");
        playerWhereY = prompt("Please input how many pixels from the top of the screen you would like the player", "54");
        document.getElementById("playback").setAttribute('style', 'left:' + playerWhereX + 'px; top: ' + playerWhereY + 'px;');
    }
    if (commands == "/vote") {
        voteWhereX = prompt("How many pixels from the left hand side of the screen would you like the vote buttons to be ?", "945.5");
        voteWhereY = prompt("How many pixels from the top of the screen would you like the vote buttons to be ?", "772");
        document.getElementById("vote").setAttribute('style', 'left: ' + voteWhereX + 'px; top: ' + voteWhereY + 'px;')
    }
    if (commands == "/join") {
        joinWhereX = prompt("How many pixels from the left hand side of the screen would you like the waitlist buttons to be ?", "398.5");
        joinWhereY = prompt("How many pixels from the top of the screen would you like the waitlist button to be ?", "772");
        document.getElementById("dj-button").setAttribute('style', 'left: ' + joinWhereX + 'px; top: ' + voteWhereY + 'px;')
    }
    if (commands == "/avatars") {
        avatarsWhereX = prompt("How many pixels from the left hand side of the screen would you like the avatars to be ?", "385");
        avatarsWhereY = prompt("How many pixels from the top of the screen would you like the avatars to be ?", "544");
        document.getElementById("avatars-container").setAttribute('style', 'left: ' + avatarsWhereX + 'px; top: ' + avatarsWhereY + 'px;')
    }
    if (commands == "/move") {
        document.getElementById("playback").setAttribute('style', 'left:' + playerWhereX + 'px; top: ' + playerWhereY + 'px;');
        document.getElementById("avatars-container").setAttribute('style', 'left: ' + avatarsWhereX + 'px; top: ' + avatarsWhereY + 'px;');
        document.getElementById("dj-button").setAttribute('style', 'left: ' + joinWhereX + 'px; top: ' + voteWhereY + 'px;');
        document.getElementById("vote").setAttribute('style', 'left: ' + voteWhereX + 'px; top: ' + voteWhereY + 'px;');
    }
    if (commands == "/umcookies") {
        document.getElementsByClassName("room-background")[0].setAttribute('style', 'background: url("https://www.dropbox.com/s/buoi30nihb0het5/31151e82a4be9d4156d83d7f609b8059.png?dl=1")');
        playerWhereX = "12";
        playerWhereY = "54";
        voteWhereX = "0";
        voteWhereY = "335";
        joinWhereX = "0";
        joinWhereY = "396";
        avatarsWhereX = "-100";
        avatarsWhereY = "500";
        loopKeeppos = '1';
        loopCheck();
    }
    if (commands == "/keeppos") {
        if (loopKeeppos == '0') {
            loopKeeppos = '1';
            loopCheck();
            API.chatLog("UI element positions are now being automatically fixed")
        }
        else if (loopKeeppos == '1') {
            loopKeeppos = '0';
            API.chatLog("UI element positions are no longer being automatically fixed")
        }
    }
    if (commands == "/savepos") {
        var saveName = prompt("Please enter the name you would like to save everything under, you MUST remember this", "default");
        var umcookiesBgArray = [backgroundurl, playerWhereX, playerWhereY, voteWhereX, voteWhereY, joinWhereX, joinWhereY, avatarsWhereX, avatarsWhereY, loopKeeppos];
        localStorage.setItem(saveName, JSON.stringify(umcookiesBgArray))
    }
    if (commands == "/loadpos"){
        var saveName = prompt("What is the name of your save file?", 'default');
        backgroundurl = (JSON.parse(localStorage.getItem(saveName))[0]);
        playerWhereX = (JSON.parse(localStorage.getItem(saveName))[1]);
        playerWhereY = (JSON.parse(localStorage.getItem(saveName))[2]);
        voteWhereX = (JSON.parse(localStorage.getItem(saveName))[3]);
        voteWhereY = (JSON.parse(localStorage.getItem(saveName))[4]);
        joinWhereX = (JSON.parse(localStorage.getItem(saveName))[5]);
        joinWhereY = (JSON.parse(localStorage.getItem(saveName))[6]);
        avatarsWhereX = (JSON.parse(localStorage.getItem(saveName))[7]);
        avatarsWhereY = (JSON.parse(localStorage.getItem(saveName))[8]);
        loopKeeppos = (JSON.parse(localStorage.getItem(saveName))[9]);
        trigger()
    }
    if (commands == "/cmd"){
        API.chatLog("Please visit https://github.com/umcookies/plugstuff/tree/master/BGChanger#ok-so-how-do-i-use-it", 1)
    }
}
function loopCheck() {
        setTimeout(function () {
            if (loopKeeppos == '1') {
                document.getElementById("playback").setAttribute('style', 'left:' + playerWhereX + 'px; top: ' + playerWhereY + 'px;');
                document.getElementById("avatars-container").setAttribute('style', 'left: ' + avatarsWhereX + 'px; top: ' + avatarsWhereY + 'px;');
                document.getElementById("dj-button").setAttribute('style', 'left: ' + joinWhereX + 'px; top: ' + joinWhereY + 'px;');
                document.getElementById("vote").setAttribute('style', 'left: ' + voteWhereX + 'px; top: ' + voteWhereY + 'px;');
                loopCheck();
            }
        }, 1000)
    }
loopCheck();

function trigger(){
    document.getElementsByClassName("room-background")[0].setAttribute('style', 'background: url(' + backgroundurl + ')');
    document.getElementById("playback").setAttribute('style', 'left:' + playerWhereX + 'px; top: ' + playerWhereY + 'px;');
    document.getElementById("avatars-container").setAttribute('style', 'left: ' + avatarsWhereX + 'px; top: ' + avatarsWhereY + 'px;');
    document.getElementById("dj-button").setAttribute('style', 'left: ' + joinWhereX + 'px; top: ' + voteWhereY + 'px;');
    document.getElementById("vote").setAttribute('style', 'left: ' + voteWhereX + 'px; top: ' + voteWhereY + 'px;');
}
