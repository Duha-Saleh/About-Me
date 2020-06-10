'use strict'
var userName = prompt("what's your name ?");
alert(" Welcome " + userName + " Answer these questions to know more about me  ")

var six = prompt("do you think I am a Female ?").toLowerCase();
while (six != 'y' && six != 'yes' && six != 'no' && six != 'n') {
    six = prompt("do you think I am a Female ? y/yes", 'y').toLowerCase();
    // console.log(course)
}
alert("I am a Female :P ")
var grade = 0;
if (six == 'y' || six == 'yes') {

    grade++;
}
var know = prompt("is my major scientific or Literary ?").toLowerCase();
while (know != 'y' && know != 'yes' && know != 'no' && know != 'n') {
    know = prompt("is my major scientific or Literary ?", 'y').toLowerCase();

}
if (know == 'y' || know == 'yes') {

    grade++;
}

//console.log(know)
alert("My Major is physics , and its scientific as you see ")
var programming = prompt("Do I love programming ?").toLowerCase();
//console.log(programming)
while (programming != 'y' && programming != 'yes' && programming != 'no' && programming != 'n') {
    programming = prompt("Do I love programming ?", 'y').toLowerCase();
}
alert("I do love programming")
if (programming == 'y' || programming == 'yes') {

    grade++;
}

var physics = prompt("do I hate my major(physics) ?").toLowerCase();
//console.log(physics)
while (physics != 'y' && physics != 'yes' && physics != 'no' && physics != 'n') {
    physics = prompt("do I hate my major(physics) ?", 'y').toLowerCase();
}
alert("absolutly I love physics! ")
if (physics == 'y' || physics == 'yes') {

    grade++;
}

var course = prompt("is the programming course useful for my future dream and career ?").toLowerCase();
//console.log(course)
while (course != 'y' && course != 'yes' && course != 'no' && course != 'n') {
    course = prompt("is the programming course useful for my future dream and career ?", 'y').toLowerCase();

    alert("yes , so much , it will help me achieve my dream! ");

    if (course == 'y' || course == 'yes') {

        grade++;

    }
 
//     for (var x = 0; x < 4; x++) {
//         var userinput = prompt("how many top countries do I like to visit?", 'type a number');

//         if (userinput == 10) {
//             grade++;
//             alert(" the correct answer is 10 ");
//             break;


//         }
//         else if (userinput > 10) { alert("too high!"); }
//         else if (userinput < 10) { alert("too low!"); }
//     }

//     var colors = prompt("Suggest a name of a color I love?").toLowerCase();


//     var arraycolor = ["red", "blue", "white", "pink"]
//     for (var m = 0; m < 6; m++) {
//         if (colors == arraycolor[0] || colors == arraycolor[1] || colors == arraycolor[2] || colors == arraycolor[3]) {
//             grade++;
//             break;
//         }
//         else 
//         {   alert('wrong');
//              var colors = prompt("Suggest a name of a color I love?").toLowerCase();

//     }
//     }

// alert(" your grade is " + grade + "out of 7")