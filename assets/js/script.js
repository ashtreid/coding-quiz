var introPage = document.querySelector(".introPage");
var startQuizBtn = document.getElementById("startQuizBtn");
var quizPage = document.querySelector(".quizForm");
var viewHighScoresLink = document.getElementById("hiScoreLink")
var timerEl = document.querySelector(".timer");
var questionAnswers = [
  {
    q: "Commonly used data types do NOT include: ",
    a: "Alerts"
  },
  {
    q: "The condition in an if/ else statement is enclosed with: ",
    a: "Parentheses"
  },
  {
    q: "Arrays in JavaScript can be used to store: ",
    a: "All of the above"
  },
  {
    q: "String values must be enclosed within ______ when being assigned to variables ",
    a: "Quotes"
  },
  {
    q: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    a: "console.log()"
  }
];
var choicesLabels = {
  choice1: document.querySelector('label[for="choice1"]'),
  choice2: document.querySelector('label[for="choice2"]'),
  choice3: document.querySelector('label[for="choice3"]'),
  choice4: document.querySelector('label[for="choice4"]')
};

var choicesInputs = {
  choice1: document.getElementById("choice1"),
  choice2: document.getElementById("choice2"),
  choice3: document.getElementById("choice3"),
  choice4: document.getElementById("choice4")
};

var question = document.querySelector(".question");

var nextBtn1 = document.getElementById("nextBtn1");
var nextBtn2 = document.getElementById("nextBtn2");
var nextBtn3 = document.getElementById("nextBtn3");
var nextBtn4 = document.getElementById("nextBtn4");
var nextBtn5 = document.getElementById("nextBtn5");
var nextBtn6 = document.getElementById("nextBtn6");
var nextBtn7 = document.getElementById("nextBtn7");

var submit1 = document.getElementById("submitBtn1");
var submit2 = document.getElementById("submitBtn2");
var submit3 = document.getElementById("submitBtn3");
var submit4 = document.getElementById("submitBtn4");
var submit5 = document.getElementById("submitBtn5");
var submit6 = document.getElementById("submitBtn6");
var submit7 = document.getElementById("submitBtn7");

var feedBack = document.getElementById("feedBack");
var scorePage = document.querySelector(".scorePage");
var scoreSubmitBtn = document.querySelector(".scoreSubmitBtn");
var highScoresPage = document.querySelector(".highScoresPage");
var clearScoresBtn = document.getElementById("clearBtn");
var goBackBtn = document.getElementById("goBackBtn");

var correctCounter = 0;
var wrongCounter = 0;
var timerCount = 0;
var timer;



function setUpQnA1() {
  question.textContent = questionAnswers[0].q;
  
  choicesLabels.choice1.textContent = "Strings";
  choicesLabels.choice2.textContent = "Booleans";
  choicesLabels.choice3.textContent = questionAnswers[0].a;
  choicesLabels.choice4.textContent = "Numbers";

  submit1.style.display = "block";
};

function setUpQnA2() {
  question.textContent = questionAnswers[1].q;
  
  choicesLabels.choice1.textContent = "Quotes";
  choicesLabels.choice2.textContent = "Curly Brackets";
  choicesLabels.choice3.textContent = questionAnswers[1].a;
  choicesLabels.choice4.textContent = "Square Brackets";

  submit2.style.display = "block";
};

function setUpQnA3() {
  question.textContent = questionAnswers[2].q;
  
  choicesLabels.choice1.textContent = "Numbers and strings";
  choicesLabels.choice2.textContent = "Other arrays";
  choicesLabels.choice3.textContent = "Booleans";
  choicesLabels.choice4.textContent = questionAnswers[2].a;

  submit3.style.display = "block";
};

function setUpQnA4() {
  question.textContent = questionAnswers[3].q;
  
  choicesLabels.choice1.textContent = "Commas";
  choicesLabels.choice2.textContent = "Curly Brackets";
  choicesLabels.choice3.textContent = questionAnswers[3].a;
  choicesLabels.choice4.textContent = "Parentheses";

  submit4.style.display = "block";
};

function setUpQnA5() {
  question.textContent = questionAnswers[4].q;
  
  choicesLabels.choice1.textContent = "JavaScript";
  choicesLabels.choice2.textContent = "Terminal/ bash";
  choicesLabels.choice3.textContent = "For loops";
  choicesLabels.choice4.textContent = questionAnswers[4].a;

  submit5.style.display = "block";
};

function resetQnAs(submit, next) {
  question.textContent = "";

  choicesLabels.choice1.textContent = "";
  choicesLabels.choice2.textContent = "";
  choicesLabels.choice3.textContent = "";
  choicesLabels.choice4.textContent = "";

  feedBack.textContent = "";

  submit.style.display = "none";
  next.style.display = "none";

  uncheckRadios();
  enableRadios();
};

function validateAnswers(expectedAnswer) {
  if (expectedAnswer.checked) {
    feedBack.textContent = "Correct!"
    correctCounter++;
    addCorrect();

  } else {
    feedBack.textContent = "Wrong!"
    wrongCounter++;
    addWrong();

    clearInterval(timer);
    timerCount += 5;
    startTimer(60); 
  };
};

function startTimer(seconds) {
  timer = setInterval(function() {
    if (timerCount >= seconds) {
      clearInterval(timer);
      timerEl.textContent = "Out of time!";
      quizPage.style.display = "none";
      scorePage.style.display = "block";
    } else {
      var decreaseCount = seconds - timerCount
      timerEl.textContent = `Seconds left: 00:${decreaseCount}`;
      timerCount++;
    }
  }, 1000);
};

function uncheckRadios() {
  var radios = document.querySelectorAll('input[name="radioChoice"]');

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radios[i].checked = false;
      break;
    }
  };
};

function disableActions(submit) {
  submit.disabled = true;

  var radios = document.getElementsByName("radioChoice");
  for (var i = 0; i < radios.length; i++) {
    radios[i].disabled = true;
  };
};

function enableRadios() {
  var radios = document.getElementsByName("radioChoice");
  for (var i = 0; i < radios.length; i++) {
    radios[i].disabled = false;
  };
};

var scoreIs = document.getElementById("finalScore");

var storedWrongPts = localStorage.getItem("wrongCount");

function setUpScorePage() {
  scoreIs.textContent = "Your final score is: " + correctCounter;
};

function addCorrect() {
  feedBack.value = correctCounter;
};

function addWrong() {
  feedBack.value = wrongCounter;
};

function addScoresLocally() {
  var initials = document.getElementById("initialsInput");

  let obj = {
    name: initials.value,
    correct: correctCounter,
    wrong: wrongCounter
  }

  let history = JSON.parse(localStorage.getItem("history")) || []
  history.push(obj)
  localStorage.setItem("history", JSON.stringify(history))
  console.log(history[0].name)
  renderHighScoreList(history);
};

function renderHighScoreList(history) {
  var highScoreList = document.querySelector(".highScoreList")
  
  for (let index = 0; index < history.length; index++) {
    var li = document.createElement("li")
    li.innerHTML = (`${history[index].name} - ${history[index].correct}`)
    highScoreList.append(li)
  }
}

// EVENT LISTENERS _____________________________________________________________________________________________________________________________________
viewHighScoresLink.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  introPage.style.display = "none";
  quizPage.style.display = "none";
  scorePage.style.display = "none";

  highScoresPage.style.display = "block";
});

startQuizBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  introPage.style.display = "none";

  quizPage.style.display = "block";
  startTimer(60);
  setUpQnA1();
  // timerStart();
  
});

submit1.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  validateAnswers(choicesInputs.choice3);
  disableActions(submit1);
  nextBtn1.style.display = "block";
});

nextBtn1.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  resetQnAs(submit1, nextBtn1);

  setUpQnA2();
});

submit2.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  validateAnswers(choicesInputs.choice3);
  disableActions(submit2);

  nextBtn2.style.display = "block";
});

nextBtn2.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();  

  resetQnAs(submit2, nextBtn2);

  setUpQnA3();
});

submit3.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  validateAnswers(choicesInputs.choice4);
  disableActions(submit3);

  nextBtn3.style.display = "block";
});

nextBtn3.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();  

  resetQnAs(submit3, nextBtn3);

  setUpQnA4();
});

submit4.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  validateAnswers(choicesInputs.choice3);
  disableActions(submit4);

  nextBtn4.style.display = "block";
});

nextBtn4.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();  

  resetQnAs(submit4, nextBtn4);

  setUpQnA5();
});

submit5.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  validateAnswers(choicesInputs.choice4);
  disableActions(submit5);

  nextBtn5.style.display = "block";
});

nextBtn5.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();  

  resetQnAs(submit5, nextBtn5);
  quizPage.style.display = "none";
  
  scorePage.style.display = "block";
  setUpScorePage();
  
});

scoreSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  scorePage.style.display = "none";
  highScoresPage.style.display = "block";

  scoreSubmitBtn.disabled = true;

  addScoresLocally();
});

clearScoresBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation(); 

  localStorage.clear();
  var highScoreList = document.querySelector(".highScoreList");
  highScoreList.textContent = "";
});

goBackBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation(); 

  window.location.reload();
});
