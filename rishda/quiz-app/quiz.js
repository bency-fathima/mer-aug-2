let questions = [
    {
        question: "What is JavaScript?",
        options: ["Markup language", "Programming language", "Styling language", "Database language"],
        answer: "Programming language"
    },
    {
        question: "What is the purpose of addEventListener()?",
        options: ["To create an array", "To delete an element", "To handle events on an element", "To declare variables"],
        answer: "To handle events on an element"
    },
    {
        question: "What does the reduce() method do?",
        options: ["Filters array elements", "Removes the first element", "Sorts array elements", "Combines array elements into a single value"],
        answer: "Combines array elements into a single value"
    },
    {
        question: "Which operator is used for optional chaining?",
        options: ["??", "?.", "&&", "||"],
        answer: "?."
    },
    {
        question: "What does NaN stand for?",
        options: ["No Assigned Number", "New Array Number", "Not a Number", "Null and Number"],
        answer: "Not a Number"
    },
    {
        question: "Which method is used to get the keys of an object?",
        options: ["Object.values()", "Object.entries()", "Object.assign()", "Object.keys()"],
        answer: "Object.keys()"
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Order Method", "Data Object Method", "Document Object Model", "Digital Output Model"],
        answer: "Document Object Model"
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: "push()"
    }
];

let questionBox = document.getElementById("question");
let optionsBox = document.getElementById("options");

let startBtn = document.getElementById("startbtn");
let nextBtn = document.getElementById("nextbtn");
let restartBtn = document.getElementById("restartbtn");

let score = 0;
let currentIndex = 0;
let isAnswered = false;

nextBtn.style.visibility = "hidden";
restartBtn.style.display = "none";
questionBox.style.display = "none";
optionsBox.style.display = "none";
document.getElementById("score").style.display = "none";


function displayQuestion() {
    optionsBox.innerHTML = "";

    let currentQuestion = questions[currentIndex].question;
    questionBox.innerText = currentQuestion;

    let currentOptions = questions[currentIndex].options;
    currentOptions.forEach(option => {
        let optionElement = document.createElement("button");
        optionElement.innerText = option;
        optionElement.classList.add("option-btn");

        optionElement.addEventListener("click", function () {
            nextBtn.style.visibility = "visible";
            isAnswered = true;

            if (option == questions[currentIndex].answer) {
                optionElement.style.backgroundColor = "#28a745";
                score++;
            } else {
                optionElement.style.backgroundColor = "#dc3545";
            }

            Array.from(optionsBox.children).forEach(button => {
                button.disabled = true;

                if (button.innerText === questions[currentIndex].answer) {
                    button.style.backgroundColor = "#28a745";
                }
            });
        });
        optionsBox.appendChild(optionElement);
    });
}


startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    questionBox.style.display = "block";
    optionsBox.style.display = "flex";
    displayQuestion();
});


nextBtn.addEventListener("click", function () {
    nextBtn.style.visibility = "hidden";

    if (!isAnswered) {
        return;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        isAnswered = false;
        displayQuestion();
    } else {
        questionBox.style.display = "none";
        optionsBox.style.display = "none";
        nextBtn.style.display = "none";
        document.getElementById("score").style.display = "block";
        restartBtn.style.display = "block";

        document.getElementById("score").innerText =
            `Your score: ${score} / ${questions.length}`
    }
});


restartBtn.addEventListener("click", function () {
    currentIndex = 0;
    score = 0;
    isAnswered = false;

    startBtn.style.display = "block";
    questionBox.style.display = "none";
    optionsBox.style.display = "none";

    nextBtn.style.display = "block";
    nextBtn.style.visibility = "hidden";

    restartBtn.style.display = "none";

    document.getElementById("score").innerText = "";
    document.getElementById("score").style.display = "none";
});
