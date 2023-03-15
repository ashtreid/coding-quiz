// need to add a timer
// log answers in localStorage

var startQuizBtn = document.querySelector("#startQuiz")
var page1 = document.querySelector(".page1");
var intro = document.querySelector(".introPage");
var submitPg1 = document.querySelector(".page1Submit")

var page1Correct = document.getElementById("#alerts");
var page1Incorrect = [
  document.getElementById("#strings"), 
  document.getElementById("#booleans"), 
  document.getElementById("#numbers")
];


startQuizBtn.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("#startQuiz")) {
    intro.style.display = "none";
    page1.style.display = "block";  
  }
});

submitPg1.addEventListener("submit", function(event) {
  var element = event.target;

  if (element.matches(".page1Submit")) {
    if ()
  }
});


