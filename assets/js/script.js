const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next");
const quizForm = document.getElementById("quiz-form");
const cancelButton = document.getElementById("cancel");
const containerElements = document.getElementsByClassName("container");
const questionSpace = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("answer-box"));

let scoreBoard = 0;
let availableQuestions = [];


startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    quizForm.classList.remove("hide")
    scoreBoard.classList.remove("hide")
    availableQuestions = [...questions];
}

nextButton.addEventListener("click", nextQuestion)

function nextQuestion() {
    scoreBoard++;
   Math.floor(Math.random() * availableQuestions.length);
}

let questions = [
    {
      question: "Which player was sent off in his final game during the final of the 2006 Football World Cup?",
        answer1: "Zinedine Zidane",
        answer2: "Marco Materazzi",      
        answer3: "Michael Ballack",
        answer4: "Luis Figo",
        answer: 1, 
    },
    {
        question: "What was Wayne Gretzky's nickname?",
          answer1: "The Next One",
          answer2: "The Best One",
          answer3: "The Great One",
          answer4: "The First One", 
          answer: 3,
    },
];

