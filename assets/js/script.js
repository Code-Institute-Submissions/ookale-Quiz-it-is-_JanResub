const startButton = document.getElementById("start-btn");
const quizForm = document.getElementById("quiz-form");

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    quizForm.classList.remove("hide");
}

const scoreBoard = document.getElementsByClassName(".scoreboard");
const options = document.getElementsByClassName("all-options");
const option = document.getElementsByClassName("option");
const question = document.getElementsByClassName("quest");
const cancelButton = document.getElementById("cancel");
const nextButton = document.getElementById("next");


