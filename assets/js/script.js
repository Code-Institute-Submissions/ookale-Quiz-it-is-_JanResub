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
        ],
      },
        {
          question: "What was Wayne Gretzky's nickname?",
          answers: [
            { text: "The Best One", correct: false },
            { text: "The First One", correct: false },
            { text: "The Next One", corect: false },
            { text: "The Great One", correct: true }
          ],
        },
          {
            question: "There is a team in the NBA from Toronto, what are they called??",
            answers: [
              { text: "The Celtics", correct: false },
              { text: "The Maple Leafs", correct: false },
              { text: "The Cobras", corect: false },
              { text: "The Raptors", correct: true }
            ],
          },
            {
              question: "Where was the Summer Olympics 1996 held??",
              answers: [
                { text: "Athens", correct: false },
                { text: "Los Angeles", correct: false },
                { text: "Atlanta", corect: true},
                { text: "Sydney", correct: false }
              ],
            },
              {
                question: "Which NBA teams does LeBronJames play for (2022)?",
                answers: [
                  { text: "Miami Heat", correct: false },
                  { text: "Los Angeles Lakers", correct: true },
                  { text: "Golden State Warriors", corect: false },
                  { text: "Cleveland Cavaliers", correct: false }
                ],
              },
                {
                  question: "Which city does the football team 'Galatasaray' come from?",
                  answers: [
                    { text: "Barcelona", correct: false },
                    { text: "Belgrade", correct: false },
                    { text: "Cairo", corect: false },
                    { text: "Istanbul", correct: true }
                  ],
                },
    ]


    