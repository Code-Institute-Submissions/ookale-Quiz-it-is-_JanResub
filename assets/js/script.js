const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("OK to start");

}

const scoreBoard = document.getElementsByClassName(".scoreboard");
const quizForm = document.getElementById("quiz-form");
const options = document.getElementsByClassName("all-options");
const option = document.getElementsByClassName("option");
const question = document.getElementsByClassName("quest");
const cancelButton = document.getElementById("cancel");
const nextButton = document.getElementById("next");


