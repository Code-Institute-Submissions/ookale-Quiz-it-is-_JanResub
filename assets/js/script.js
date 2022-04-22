const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next");
const quizForm = document.getElementById("quiz-form");
const cancelButton = document.getElementById("cancel");
let scoreBoard = document.getElementById("scoreboard");
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
    quizForm.classList.remove("hide")
    scoreBoard.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0;
    nextQuestion()
}

nextButton.addEventListener("click", nextQuestion)

function nextQuestion() {
  /* Find the selected radiobutton */
  let selectedButton;
  radioButtons.forEach(radioButton => {
      if (radioButton.checked === true){
      selectedButton = radioButton
    }
  });

  // hitta vilken label som hör till den valda knappen
  let selectedLabel;
  radioButtonLabels.forEach(label => {
      if (label.htmlFor === selectedButton?.id) {
        selectedLabel = label
    }
  });
  console.log({selectedLabel})
  
  // radioButtons.forEach(
  //   radioButtonLabel => document.getElementById(radioButtonLabel.htmlFor)?.checked === true
  // )
  
    // spara undan nuvarande fråga i variabel
    const myQuestion = shuffledQuestions[currentQuestion]
    // spara undan alla alternativ som tillhör nuvarande fråga i en variabel
    const myAnswers = myQuestion.answers;
    // Gå igenom all alternativ och hitta det som stämmer med label texten för det valda svaret
    const myAnswer = myAnswers.forEach(
      answer => answer.text === selectedLabel?.innerText
      )
    console.log(myAnswer)
    //Kontrollera om svaret är rätt
  // checkAnswer(mittsvar)
  if (shuffledQuestions.length === currentQuestion +1)
    {nextButton.innerText = "Show Result" 
  nextButton.addEventListener("click", showResult)}
    else { 
    showQuestion (shuffledQuestions[currentQuestion])
    currentQuestion = currentQuestion +1
   }}

   function showQuestion(question) {
       questionSpace.innerText = question.question
       for (let i = 0; i < question.answers.length; i++) {
        const label = document.getElementById("optionLabel" + `${i+1}`);
        label.innerText = question.answers[i].text
      }
   }

   function showResult() {
     correctAnswers = document.getElementById("correctAnswers")
     correctAnswers.innerText = "You scored" + `${score}`
   }

   function checkAnswer(answer) {
     if (answer.correct === true)
     score = score +1
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
                    { text: "Istanbul", correct: false },
                    { text: "Belgrade", correct: false },
                    { text: "Cairo", corect: false },
                    { text: "Barcelona", correct: true }
                  ],
                },
    ]


    