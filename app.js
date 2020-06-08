'use strict'
var userName = prompt ("what's your name ?");
alert (" Welcome " + userName + " Answer these questions to know more about me  ")

var six = prompt ("do you think I am a Female ?");
while(six != 'y' && six !='yes'&& six !='no' && six !='n'){
 six = prompt("do you think I am a Female ? y/yes",'y') .toLowerCase();
   // console.log(course)
}
alert("I am a Female :P ")
var know = prompt ("is my major scientific or Literary ?");
while(know != 'y' && know !='yes'&& know !='no' && know !='n'){
    know = prompt("is my major scientific or Literary ?",'y') .toLowerCase();
   
}
//console.log(know)
alert("My Major is physics , and its scientific as you see ")
var programming = prompt ("Do I love programming ?");
//console.log(programming)
while(programming != 'y' && programming !='yes'&& programming !='no' && programming !='n'){
    programming = prompt("Do I love programming ?",'y') .toLowerCase();
}
alert("I do love programming")

var physics = prompt ("do I hate my major(physics) ?");
//console.log(physics)
while(physics != 'y' && physics !='yes'&& physics !='no' && physics !='n'){
    physics = prompt("do I hate my major(physics) ?",'y') .toLowerCase();
}
alert("absolutly I love physics! ")

var course = prompt ("is the programming course useful for my future dream and career ?");
//console.log(course)
alert("yes , so much , it will help me achieve my dream! ")

alert(" Welcome to my website ")
