const startButton = document.getElementById("start-btn")
const quizForm = document.getElementById("quiz-form")
const scoreBoard = document.getElementById("scoreboard")

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    quizForm.classList.remove("hide")
    scoreBoard.classList.remove("hide")
    getNextQuestion()
}


const cancelButton = document.getElementById("cancel")
const nextButton = document.getElementById("next")
const containerElements = document.getElementsByClassName("container")

const questions = [
    {
      question: "Which player was sent off in his final game during the final of the 2006 Football World Cup?",
      answers: [
          { text: "Zinedine Zidane", correct: true },
          { text: "Marco Materazzi", correct: false},   
          { text: "Michael Ballack", correct: false},
          { text: "Luis Figo", correct: false}
      ]
    },
    {
        question: "What was Wayne Gretzky's nickname?",
        answers:[
            { text: "The Next One", correct: false },
            { text: "The Best One", correct: false },
            { text: "The Great One", correct: true },
            { text: "The First One", correct: false },
        ]
    }
]


