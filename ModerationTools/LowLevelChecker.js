/**
 * Created by Umcookies on 11/20/2014.
 */
var lastnewUser;
API.on(API.USER_JOIN, callback);
function callback(data){
    if (data.level == 1){
        API.chatLog(data.username + " is level 1, using /ban will ban this user");
        lastnewUser = data.id;
    }
}
API.on(API.CHAT_COMMAND, commands);
function commands(data){
    if (data == "/ban"){
        API.moderateBanUser(lastnewUser, 5, API.BAN.PERMA)
    }
}
