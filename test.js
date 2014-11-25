API.on(API.chatLog("Autojoin and Autowoot are now running"));
setInterval(function loopThatdoesstuff(){
    if (API.getUser().vote == 0){
        $('#woot').click()
    }
    if (API.getWaitListPosition() == -1){
        API.djJoin()
    }} 500);

API.on(API.chatLog("Autojoin and Autowoot are now running"));
setInterval(function loopThatdoesstuff(){
    if (API.getUser().vote == 0){
        $('#woot').click()
    }
    if (API.getWaitListPosition() == -1){
        API.djJoin()
    }}, 500);
