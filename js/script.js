$(document).ready(function() {

//hover over tiled images
  $(".hoverfade").hover(function() {
    $(this).stop().animate({opacity: "0.5"}, 'slow');
  },
  function() {
    $(this).stop().animate({opacity: "1"}, 'slow');
  });

//alert button
  $("#submit").click(function() {
    alert("Thanks, you are now subscribed!");
  });

});

//Quiz

function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question1.value;
  var question3 = document.quiz.question1.value;
  var question4 = document.quiz.question1.value;
  var question5 = document.quiz.question1.value;
  var question6 = document.quiz.question1.value;
  var question7 = document.quiz.question1.value;
  var correct = 0;

  if (question1 == "correctanswer") {
    correct++;
  }
  if (question2 == "correctanswer") {
    correct++;
  }
  if (question3 == "correctanswer") {
    correct++;
  }
  if (question4 == "correctanswer") {
    correct++;
  }
  if (question5 == "correctanswer") {
    correct++;
  }
  if (question6 == "correctanswer") {
    correct++;
  }
  if (question7 == "correctanswer") {
    correct++;
  }

var messages = ["Great job!", "That's just okay", "You really need to do better"];

var pictures = ["images/clap.gif", "images/try.gif", "images/help.gif"];

var range;

  if (correct < 2) {
    range = 2;
  }

  if (correct > 2 && correct < 5) {
    range = 1;
  }

  if (correct > 5) {
    range = 0;
  }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = pictures[range];
}
