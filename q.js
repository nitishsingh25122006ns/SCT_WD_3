const questions = [

    // EASY LEVEL 

    {
        question: "What is HTML used for?",
        options: [
            "Creating the structure of webpages",
            "Creating databases",
            "Editing videos",
            "Creating operating systems"
        ],
        answer: 0
    },

    {
        question: "What is CSS mainly used for?",
        options: [
            "Adding style to webpages",
            "Storing data",
            "Creating databases",
            "Running servers"
        ],
        answer: 0
    },

    {
        question: "What is JavaScript mainly used for?",
        options: [
            "Making webpages interactive",
            "Creating only images",
            "Styling text only",
            "Creating hardware"
        ],
        answer: 0
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: [
            "<p>",
            "<para>",
            "<text>",
            "<paragraph>"
        ],
        answer: 0
    },

    {
        question: "Which tag is used to display an image in HTML?",
        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used for a class selector in CSS?",
        options: [
            "#",
            ".",
            "*",
            "$"
        ],
        answer: 1
    },

    {
        question: "Which JavaScript keyword is commonly used to declare a variable?",
        options: [
            "variable",
            "let",
            "integer",
            "define"
        ],
        answer: 1
    },

    {
        question: "Which JavaScript function is used to print something in the browser console?",
        options: [
            "print()",
            "console.log()",
            "display()",
            "write.console()"
        ],
        answer: 1
    },

    {
        question: "Which HTML tag is used to create a button?",
        options: [
            "<click>",
            "<button>",
            "<btn>",
            "<inputbutton>"
        ],
        answer: 1
    }
];


// QUIZ VARIABLES 

let currentQuestion = 0;
let score = 0;


//  HTML ELEMENTS 

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");


//  SHOW QUESTION 

function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.innerText = option;
        button.classList.add("option");

        button.onclick = () => {
            selectAnswer(index, button);
        };

        optionsElement.appendChild(button);
    });
}


//  SELECT ANSWER 

function selectAnswer(selectedIndex, selectedButton) {

    const correctAnswer = questions[currentQuestion].answer;

    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === correctAnswer) {

        selectedButton.classList.add("correct");
        score++;

    } else {

        selectedButton.classList.add("wrong");
        allOptions[correctAnswer].classList.add("correct");
    }
}


//  NEXT BUTTON 

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        document.getElementById("quiz").classList.add("hide");

        document.getElementById("result").classList.remove("hide");

        document.getElementById("score").innerText =
            `Your Score: ${score} / ${questions.length}`;
    }
});


//  RESTART QUIZ 

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("result").classList.add("hide");

    document.getElementById("quiz").classList.remove("hide");

    showQuestion();
}


//  START QUIZ 

showQuestion();