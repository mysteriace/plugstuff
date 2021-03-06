##What does this do?
This is a script to change the background of plug.dj and do a few other things as well which are listed and described below.

## Installation
Following these steps will load a javascript into your browser that'll allow you to change your background and move things around the screen.

###Youtube videos
(Coming soon, eventually, maybe)

###Pictures (The old fashion way)
Firstly you'll need a copy of this, you may then proceed with the rest of the steps

``` javascript:(function(){$.getScript('https://rawgit.com/umcookies/plugstuff/master/BGChanger/BGChanger.js');}()); ```

The basic idea is that you paste the line above into the URL or Location section of a bookmark and then open the bookmark when you're in a plug.dj room, the script will stay active until you refresh your page.

####For Firefox
1- Create a new bookmark and then right click on it and select Properties, which will open this popup
[![FIREFOX](http://i.imgur.com/nuGzDE6.png)](https://github.com/umcookies/plugstuff)

-In the name box you may call the bookmark anything you like, I personally call it BGChanger

-In the location box you MUST enter the script exactly as shown above

2- If you have done everything correctly your bookmark will look like this (Remember you can call the bookmark whatever you'd like)

[![FIREFOX](http://i.imgur.com/eMyfDUi.png)](https://github.com/umcookies/plugstuff)

####For Chrome
1- Create a new bookmark, this can be done by pressing CTRL+SHIFT+O then right clicking in the white space and selecting 'New Page'

[![CHROME](http://i.imgur.com/LeijOKc.png)](https://github.com/umcookies/plugstuff)

-In the name box you may call the bookmark anything you like, I personally call it BGChanger

-In the URL box you MUST enter the script exactly as shown above

2- If you have done everything correctly your bookmark will look like this (Remember you can call the bookmark whatever you'd like)

[![CHROME](http://i.imgur.com/BvAGf6n.png)](https://github.com/umcookies/plugstuff)


##Ok, so how do I use it?
That's a fantastic question, I'm glad you asked

The script is built around the idea of being able to modify as much as possible on the fly via commands that you enter into chat, so I had better create a list of the commands that you can use, how you use them and what they actually do.
#####Commands

All commands are capital sensitive, IE they must look exactly like they do below to work

|Command |  Description |
|:------:|:--------------------------------------:|
|/background| Opens a popup that allows you to enter a URL to a picture hosted somewhere on the internet |
|/player| Opens a series of popups that will allow you to adjust where the youtube/soundcloud player is located |
|/vote| Opens a series of popups that will allow you to adjust where the vote buttons are located |
|/join| Opens a series of popups that will allow you to adjust where the waitlist join button is located |
|/avatars| Opens a series of popups that will allow you to adjust where the dance floor and DJ is located |
|/move| A redudant command when using /keeppos, should any of the things you've moved, move by themself using this command will readjust where all of them are located (Example, you move everything to where you like it and then you open the DJ history, everything will move back to their default positions, using this command will change everything back to how you set it up) |
|/keeppos| This will check once every second if anything has moved and if it has, move it back. (This is an automatic and far more useful version of /move)  |
|/savepos| Using this command will open a popup box asking you for a filename to save your settings too, it'll remember your background and the position's of everything. Allowing you to keep multiple 'profiles' or simply save your favourite layout to be used again next time you visit plug.dj|
|/loadpos| Using this command will open a popup box asking you for the filename you saved your settings too, once you enter it, it'll change everything to the way it was when the /savepos command was used|
