const startButton = document.getElementById("start-btn");
const heading = document.getElementById("intro");
const nextButton = document.getElementById("next");
const quizForm = document.getElementById("quiz-form");
const restartButton = document.getElementById("restart");
const currentQuestionCounter = document.getElementById("current-question");
const totalQuestionsCounter = document.getElementById("total-questions");
let counter = document.getElementById("counter");
const containerElements = document.getElementsByClassName("container");
const questionSpace = document.getElementById("question");
const answerOptions = document.getElementsByClassName("answer-box");
let shuffledQuestions, currentQuestion
let correctAnswers
let score = 0
let radioButtonLabel1 = document.getElementById("optionLabel1");
let radioButton1 = document.getElementById("option1");
let radioButtonLabel2 = document.getElementById("optionLabel2");
let radioButton2 = document.getElementById("option2");
let radioButtonLabel3 = document.getElementById("optionLabel3");
let radioButton3 = document.getElementById("option3");
let radioButtonLabel4 = document.getElementById("optionLabel4");
let radioButton4 = document.getElementById("option4");

let radioButtons = [
  radioButton1,
  radioButton2,
  radioButton3,
  radioButton4
];
let radioButtonLabels = [
  radioButtonLabel1,
  radioButtonLabel2,
  radioButtonLabel3,
  radioButtonLabel4
];

/* Start game */
startButton.addEventListener("click", startGame)

function startGame() {
  startButton.classList.add("hide")
  heading.classList.add("hide")
  quizForm.classList.remove("hide")
  counter.classList.remove("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestion = 0;
  showQuestion(shuffledQuestions[currentQuestion])
  totalQuestionsCounter.innerText = questions.length
}

/* Next Question */
nextButton.addEventListener("click", nextQuestion)

function nextQuestion() {
  /* Find the selected radiobutton */
  let selectedButton;
  radioButtons.forEach(radioButton => {
    if (radioButton.checked === true) {
      selectedButton = radioButton
    }
  });

  /* Find the label for the selected button */
  let selectedLabel;
  radioButtonLabels.forEach(label => {
    if (label.htmlFor === selectedButton?.id) {
      selectedLabel = label
    }
  });

  /* Find the selected answer from all option in current question */
  const myQuestion = shuffledQuestions[currentQuestion]
  const myAnswers = myQuestion.answers;
  let myAnswer;
  myAnswers.forEach(
    answer => {
      if (answer.text === selectedLabel?.innerText) {
        myAnswer = answer
      }
    });

  checkAnswer(myAnswer)

  /* Check if we reached last question */
  if (shuffledQuestions.length === currentQuestion + 1) {
    nextButton.innerText = "Show Result"
    nextButton.addEventListener("click", showResult)
    nextButton.removeEventListener("click", nextQuestion)
  } else {
    currentQuestion = currentQuestion + 1
    showQuestion(shuffledQuestions[currentQuestion])
  }
}
/* Display a question */
function showQuestion(question) {
  questionSpace.innerText = question.question
  for (let i = 0; i < question.answers.length; i++) {
    const label = document.getElementById("optionLabel" + `${i+1}`);
    label.innerText = question.answers[i].text
  }
  /* Update questioncounter */
  currentQuestionCounter.innerText = currentQuestion + 1
}
/* Show amount of correct answers */
function showResult() {
  correctAnswers = document.getElementById("correctAnswers")
  correctAnswers.innerText = "You scored"  + ` ${score}`
}

/* Add score if answer is correct */
function checkAnswer(answer) {
  if (answer.correct === true)
    score = score + 1
}

/* Questions */
let questions = [{
    question: "Which player was sent off in his final game during the final of the 2006 Football World Cup?",
    answers: [{
        text: "Zinedine Zidane",
        correct: true
      },
      {
        text: "Marco Materazzi",
        correct: false
      },
      {
        text: "Michael Ballack",
        correct: false
      },
      {
        text: "Luis Figo",
        correct: false
      }
    ],
  },
  {
    question: "What was Wayne Gretzky's nickname?",
    answers: [{
        text: "The Best One",
        correct: false
      },
      {
        text: "The First One",
        correct: false
      },
      {
        text: "The Next One",
        correct: false
      },
      {
        text: "The Great One",
        correct: true
      }
    ],
  },
  {
    question: "There is a team in the NBA from Toronto, what are they called??",
    answers: [{
        text: "The Celtics",
        correct: false
      },
      {
        text: "The Maple Leafs",
        correct: false
      },
      {
        text: "The Cobras",
        correct: false
      },
      {
        text: "The Raptors",
        correct: true
      }
    ],
  },
  {
    question: "Where was the Summer Olympics 1996 held??",
    answers: [{
        text: "Athens",
        correct: false
      },
      {
        text: "Los Angeles",
        correct: false
      },
      {
        text: "Atlanta",
        correct: true
      },
      {
        text: "Sydney",
        correct: false
      }
    ],
  },
  {
    question: "Which NBA teams does LeBronJames play for (2022)?",
    answers: [{
        text: "Miami Heat",
        correct: false
      },
      {
        text: "Los Angeles Lakers",
        correct: true
      },
      {
        text: "Golden State Warriors",
        correct: false
      },
      {
        text: "Cleveland Cavaliers",
        correct: false
      }
    ],
  },
  {
    question: "Which city does the football team 'Galatasaray' come from?",
    answers: [{
        text: "Istanbul",
        correct: true
      },
      {
        text: "Belgrade",
        correct: false
      },
      {
        text: "Cairo",
        correct: false
      },
      {
        text: "Barcelona",
        correct: false
      }
    ],
  },
]