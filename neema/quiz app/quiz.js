let questions = [
    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Operating System",
            "Web Browser"
        ],
        answer: "Programming Language"
    },
    {
        question: "Which keyword is used to declare a variable that can be reassigned?",
        options: [
            "const",
            "let",
            "static",
            "final"
        ],
        answer: "let"
    },
    {
        question: "What is the output of typeof null?",
        options: [
            "null",
            "undefined",
            "object",
            "boolean"
        ],
        answer: "object"
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: [
            "pop()",
            "shift()",
            "unshift()",
            "push()"
        ],
        answer: "push()"
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A loop inside a function",
            "A function with access to its outer scope",
            "A method to delete variables",
            "A way to create arrays"
        ],
        answer: "A function with access to its outer scope"
    },
    {
        question: "Which method creates a new array by transforming each element?",
        options: [
            "filter()",
            "forEach()",
            "map()",
            "find()"
        ],
        answer: "map()"
    },
    {
        question: "What happens when a function calls itself repeatedly without a stopping condition?",
        options: [
            "Memory Leak",
            "Stack Overflow",
            "Syntax Error",
            "Type Error"
        ],
        answer: "Stack Overflow"
    },
    {
        question: "Which method is used to select an HTML element by its ID?",
        options: [
            "document.querySelectorAll()",
            "document.getElementById()",
            "document.createElement()",
            "document.appendChild()"
        ],
        answer: "document.getElementById()"
    }
];



let currentIndex = 0;
let score = 0;

let startPage = document.getElementById("startPage");
let quizPage = document.getElementById("quizPage");
let resultPage = document.getElementById("resultPage");

let startBtn = document.getElementById("startBtn");
let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");
let nextBtn = document.getElementById("nextBtn");
let scoreElement = document.getElementById("score");
let restartBtn = document.getElementById("restartBtn");


// Start Quiz

startBtn.addEventListener("click", function() {

    startPage.style.display = "none";
    quizPage.style.display = "block";

    showQuestion();

});


// Display Questions

function showQuestion() {

    nextBtn.disabled = true;
    optionsElement.innerHTML = "";

    let currentQuestion = questions[currentIndex];

    questionElement.textContent = 
        `Question ${currentIndex + 1}: ${currentQuestion.question}`;

    currentQuestion.options.forEach(function(option) {

        let button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", function() {

            checkAnswer(button, option);

        });

        optionsElement.appendChild(button);

    });

}


// Check Answer

function checkAnswer(selectedButton, selectedOption) {

    let correctAnswer = questions[currentIndex].answer;

    let allButtons = optionsElement.querySelectorAll("button");

    allButtons.forEach(function(button) {

        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        }

    });

    if (selectedOption === correctAnswer) {

        score++;

    } else {

        selectedButton.classList.add("wrong");

    }

    nextBtn.disabled = false;

}


// Next Question

nextBtn.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// Show Final Score

function showResult() {

    quizPage.style.display = "none";
    resultPage.style.display = "block";

    scoreElement.textContent = 
        `Your Score: ${score} / ${questions.length}`;

}


// Restart Quiz

restartBtn.addEventListener("click", function() {

    currentIndex = 0;
    score = 0;

    resultPage.style.display = "none";
    startPage.style.display = "block";

});
startBtn.addEventListener("click", function () {
    startPage.style.display = "none";
    quizPage.style.display = "block";

    showQuestion();
});