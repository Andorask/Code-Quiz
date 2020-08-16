let questionsArray = [
    {question :"1. What is the largest continent?", 
    options: ["Africa", "Europe", "Australia", "North America"],
    answer: "Africa",
    },

    {question: "2. Which of these chemical elements is metallic?",
    options: ["Hydrogen", "Flourine", "Magnesium", "Xenon"],
    answer: "Magnesium",
    },

    {question: "3. What software language is this written in?",
    options: ["Python", "Javascript", "C++", "SQL"],
    answer: "Javascript",
    }
]

var startEl = document.getElementById("start");
var startButton = document.getElementById("startButton");
var questionTitle = document.getElementById("questionTitle");
var choiceEl = document.getElementById("choice");
var initials = document.getElementById("initials");
var score = document.getElementById("score");
var feedback = document.getElementById("feedback");
var timer = document.getElementById("timer");
var questions = document.getElementById("questions");
var currentQuestion = 0;
var count = 76;

function startQuiz() {
    displayQuestions(currentQuestion);
    startEl.setAttribute("class", "hide");
    questions.removeAttribute("class");
    var startTimer = setInterval(myTimer, 1000);
    function myTimer() {
    count = count - 1;
    timer.innerHTML = count;
    if (count === 0) {
    clearInterval(startTimer);
        }
    }
}

function displayQuestions(index) {
    questionTitle.innerHTML = questionsArray[index].question;
    choiceEl.innerHTML = "";
    for (var i = 0; i < questionsArray[index].options.length; i++) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", questionsArray[index].options[i]);
        choiceNode.textContent = i + 1 + ". " + questionsArray[index].options[i];
        choiceNode.onclick = checkAnswer;
        choiceEl.appendChild(choiceNode);
    }
}

function checkAnswer() {
console.log("Hello");
console.log(this.value);
if (this.value !== questionsArray[currentQuestion].answer) {
    count -= 10;
    if (count < 0) {
        count = 0;
    }
    timer.textContent = count;
    feedback.removeAttribute("class");

    feedback.textContent = "Wrong";
}
}

startButton.onclick = startQuiz;
