"use strict";
// var userName = prompt("what's your name ?");
// alert(
//   " Welcome " + userName + " Answer these questions to know more about me  "
// );

// var sex = prompt("do you think I am a Female ?").toLowerCase();
// while (sex != "y" && sex != "yes" && sex != "no" && sex != "n") {
//   sex = prompt("do you think I am a Female ? y/yes", "y").toLowerCase();
//   // console.log(course)
// }
// alert("I am a Female :P ");
// var grade = 0;
// if (sex == "y" || sex == "yes") {
//   grade++;
// }
// var know = prompt("is my major scientific or Literary ?").toLowerCase();
// while (know != "y" && know != "yes" && know != "no" && know != "n") {
//   know = prompt("is my major scientific or Literary ?", "y").toLowerCase();
// }
// if (know == "y" || know == "yes") {
//   grade++;
// }

// //console.log(know)
// alert("My Major is physics , and its scientific as you see ");
// var programming = prompt("Do I love programming ?").toLowerCase();
// //console.log(programming)
// while (
//   programming != "y" &&
//   programming != "yes" &&
//   programming != "no" &&
//   programming != "n"
// ) {
//   programming = prompt("Do I love programming ?", "y").toLowerCase();
// }
// alert("I do love programming");
// if (programming == "y" || programming == "yes") {
//   grade++;
// }

// var physics = prompt("do I hate my major(physics) ?").toLowerCase();
// //console.log(physics)
// while (
//   physics != "y" &&
//   physics != "yes" &&
//   physics != "no" &&
//   physics != "n"
// ) {
//   physics = prompt("do I hate my major(physics) ?", "y").toLowerCase();
// }
// alert("absolutly I love physics! ");
// if (physics == "y" || physics == "yes") {
//   grade++;
// }

// var course = prompt(
//   "is the programming course useful for my future dream and career ?"
// ).toLowerCase();
// //console.log(course)
// while (course != "y" && course != "yes" && course != "no" && course != "n") {
//   course = prompt(
//     "is the programming course useful for my future dream and career ?",
//     "y"
//   ).toLowerCase();

//   alert("yes , so much , it will help me achieve my dream! ");

//   if (course == "y" || course == "yes") {
//     grade++;
//   }

//   for (var x = 0; x < 4; x++) {
//     var userinput = prompt(
//       "how many top countries do I like to visit?",
//       "type a number"
//     );

//     if (userinput == 10) {
//       grade++;

//       break;
//     } else if (userinput > 10) {
//       alert("too high!");
//     } else if (userinput < 10) {
//       alert("too low!");
//     }
//   }
//   alert(" the correct answer is 10 ");

//   var arraycolor = ["red", "blue", "white", "pink"];
//   for (var m = 0; m < 6; m++) {
//     var colors = prompt("Suggest a name of a color I love?").toLowerCase();
//     if (
//       colors == arraycolor[0] ||
//       colors == arraycolor[1] ||
//       colors == arraycolor[2] ||
//       colors == arraycolor[3]
//     ) {
//       grade++;
//       break;
//     }
//   }
// }
// alert("the right answers are : blue white pink and red");
//alert(" your grade is " + grade + "out of 7");

// var know = ("is my major scientific or Literary ?", "y/n");
// x = know
// while (know != "y" && know != "yes" && know != "no" && know != "n") {
//   know = prompt("is my major scientific or Literary ?", "y/n").toLowerCase();
// }
// if (know == "y" || know == "yes") {
//   grade++;
// }
//condition(userInput);
//var x;
// var arrayquestion = [
//   "do you think I am a Female ?",
//   "is my major scientific or Literary ?",
//   "Do I love programming ?",
//   "do I hate my major(physics) ?",
// ];

//lab3
var grade = 0; //mentioned
var arrayquestion = [
  "do you think I am a Female ?",
  "is my major scientific or Literary ?",
  "Do I love programming ?",
  "do I hate my major(physics) ?",
  "is the programming course useful for my future dream and career ?",
];

for (var i = 0; i < arrayquestion.length; i++) {
  //   var arrayquestion = [
  //     "do you think I am a Female ?",
  //     "is my major scientific or Literary ?",
  //     "Do I love programming ?",
  //     "do I hate my major(physics) ?",
  //   ];
  var userInput = prompt(arrayquestion[i].toLowerCase());
  condition(userInput);
  function condition(userInput) {
    //userInput = x
    while (
      userInput != "y" &&
      userInput != "yes" &&
      userInput != "no" &&
      userInput != "n"
    ) {
      userInput = prompt(arrayquestion[i]).toLowerCase();
    }
    if (userInput == "y" || userInput == "yes") {
      grade++;
    }
    return userInput;
  }
  //return userInput;
}
alert(" your grade is " + grade + "out of 7");
