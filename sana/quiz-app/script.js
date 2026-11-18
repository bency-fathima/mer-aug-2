let questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "Which language makes a webpage interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which tag is used for a heading?",
        options: ["<p>", "<h1>", "<div>", "<br>"],
        answer: "<h1>"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["<!-- -->", "//", "**", "##"],
        answer: "//"
    },
    {
        question: "Which method adds an element to an array?",
        options: ["pop()", "shift()", "push()", "slice()"],
        answer: "push()"
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Method", "Digital Output Model", "Document Order Method"],
        answer: "Document Object Model"
    },
    {
        question: "Which keyword declares a variable?",
        options: ["print", "display", "var", "return"],
        answer: "var"
    }
];




let questionBox = document.getElementById("question");
let optionsBox = document.getElementById("options");
let startBtn = document.getElementById("startbtn");
let nextBtn = document.getElementById("nextbtn");
let restartBtn = document.getElementById("restartbtn");
let scoreBox = document.getElementById("score");

let score=0
let currentIndex = 0

nextBtn.style.display = "none";
restartBtn.style.display = "none";
questionBox.style.display = "none";
optionsBox.style.display = "none";
scoreBox.style.display = "none";


function displayQuestion() {

    optionsBox.innerHTML = "";
    document.getElementById("questionnumber").innerText =
    "Question " + (currentIndex + 1) + " / " + questions.length;

    questionBox.innerText = questions[currentIndex].question;

    let currentOptions = questions[currentIndex].options;
      currentOptions.forEach(function(option) {
      let btn = document.createElement("button");
      btn.innerText = option;
      optionsBox.appendChild(btn);
    btn.addEventListener("click", function() {
            checkAnswer(btn, option);
        });
    });
}






function checkAnswer(btn, option) {
    nextBtn.style.display = "block";
    let correctAnswer = questions[currentIndex].answer;
    let buttons = optionsBox.children;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    if (buttons[i].innerText == correctAnswer) {
            buttons[i].style.backgroundColor = "green";
        }
    }

    if (option == correctAnswer) {
     btn.style.backgroundColor = "green";
      score++;
    } else {
      btn.style.backgroundColor = "red";
    }
}



startBtn.addEventListener("click", function() {
 startBtn.style.display = "none";
 questionBox.style.display = "block";
 optionsBox.style.display = "block";
 document.getElementById("questionnumber").style.display = "block";
 displayQuestion();
});



nextBtn.addEventListener("click", function() {
currentIndex++;
 if (currentIndex < questions.length) {
        displayQuestion();
        nextBtn.style.display = "none";

    } else {
        questionBox.style.display = "none";
        optionsBox.style.display = "none";
        nextBtn.style.display = "none";
        scoreBox.style.display = "block";
        document.getElementById("questionnumber").style.display = "none";
        scoreBox.innerText =
            "Your Score: " + score + " / " + questions.length;
        restartBtn.style.display = "block";
    }
});



restartBtn.addEventListener("click", function() {
score = 0;
currentIndex = 0;
scoreBox.style.display = "none";
restartBtn.style.display = "none";
startBtn.style.display = "block";
questionBox.style.display = "none";
optionsBox.style.display = "none";
});
