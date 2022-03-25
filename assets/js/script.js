const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next");
const quizForm = document.getElementById("quiz-form");
const cancelButton = document.getElementById("cancel");
let scoreBoard = document.getElementById("scoreboard");
const containerElements = document.getElementsByClassName("container");
const questionSpace = document.getElementById("question");
const answerOptions = document.getElementsByClassName("answer-box");
let shuffledQuestions, currentQuestion

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    quizForm.classList.remove("hide")
    scoreBoard.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0;
    nextQuestion()
}

nextButton.addEventListener("click", nextQuestion)

function nextQuestion() {
    showQuestion (shuffledQuestions[currentQuestion])
   }

   function showQuestion(question) {
       questionSpace.innerText = question.question
       question.answers.forEach(answer => {
         const label = document.createElement("label");
         label.innerText = answer.text
       })
   }

   
let questions = [{
        question: "Which player was sent off in his final game during the final of the 2006 Football World Cup?",
        answers: [
          { text: "Zinedine Zidane", correct: true },
          { text: "Marco Materazzi", correct: false },
          { text: "Michael Ballack", corect: false },
          { text: "Luis Figo", correct: false }
        ]
    }]


    