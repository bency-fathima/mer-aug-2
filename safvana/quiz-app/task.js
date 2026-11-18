// Questions Array

const questions = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "2. Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },

    {
        question: "3. Which language is used for web interactivity?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },

    {
        question: "4. Which HTML tag is used for a paragraph?",
        options: ["<h1>", "<p>", "<div>", "<br>"],
        answer: "<p>"
    },

    {
        question: "5. Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!-- -->", "**"],
        answer: "//"
    },

    {
        question: "6. Which keyword declares a variable in JavaScript?",
        options: ["int", "var", "string", "define"],
        answer: "var"
    },

    {
        question: "7. Which method selects an element by ID?",
        options: [
            "getElementById()",
            "getClass()",
            "queryName()",
            "getTag()"
        ],
        answer: "getElementById()"
    },

    {
        question: "8. Which method adds an element to the DOM?",
        options: [
            "remove()",
            "createElement()",
            "deleteElement()",
            "changeElement()"
        ],
        answer: "createElement()"
    }
];


// Variables

let currentIndex = 0;
let score = 0;


// DOM Elements
const startBox = document.getElementById("start-box");
const startButton = document.getElementById("start-btn");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const nextButton = document.getElementById("next-btn");
const feedbackElement = document.getElementById("feedback");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");




startButton.addEventListener("click", function() {

    startBox.style.display = "none";

    quizBox.style.display = "block";

    showQuestion();

});
// Display Question

function showQuestion() {

    let currentQuestion = questions[currentIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";

    feedbackElement.textContent = "";

    nextButton.style.display = "none";


    // Create option buttons dynamically

    currentQuestion.options.forEach(function(option) {

        let button = document.createElement("button");

        button.textContent = option;

        button.classList.add("option-btn");

        button.addEventListener("click", function() {

            checkAnswer(button, option);

        });

        optionsElement.appendChild(button);

    });

}


// Check Answer

function checkAnswer(selectedButton, selectedOption) {

    let correctAnswer = questions[currentIndex].answer;

    let allButtons = optionsElement.children;

    // Disable all buttons after selection

    for (let button of allButtons) {
        button.disabled = true;
    }

    if (selectedOption === correctAnswer) {

        selectedButton.classList.add("correct");

        feedbackElement.textContent = "Correct Answer!";

        feedbackElement.style.color = "green";

        score++;

    } else {

        selectedButton.classList.add("wrong");

        feedbackElement.textContent =
            "Wrong Answer! Correct answer: " + correctAnswer;

        feedbackElement.style.color = "red";

        // Highlight correct answer

        for (let button of allButtons) {

            if (button.textContent === correctAnswer) {
                button.classList.add("correct");
            }

        }

    }

    nextButton.style.display = "inline-block";

}


// Next Question

nextButton.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// Show Final Score

function showResult() {

    quizBox.style.display = "none";

    resultBox.style.display = "block";

    document.getElementById("final-score").textContent =
        "You scored " + score + " out of " + questions.length;

    let message = "";

    if (score >= 7) {
        message = "Excellent! Great job!";
    } 
    else if (score >= 4) {
        message = "Good effort! Keep learning!";
    } 
    else {
        message = "Keep practicing! You can do better!";
    }

    document.getElementById("message").textContent = message;

}


// Restart Quiz

document.getElementById("restart-btn").addEventListener("click", function() {

    currentIndex = 0;

    score = 0;

    resultBox.style.display = "none";

    quizBox.style.display = "block";

    showQuestion();

});


// Start Quiz

showQuestion();