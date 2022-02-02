const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.game-btn');

const finalResultDisplay = document.getElementById('final-result');

let timer;
let userChoice;
let computerChoice;
let result;
let sec = 10;

let userScore = 0;
let computerScore = 0;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  resetTime();
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  resetTime();
    userTurnTimer();
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
    userScore = userScore + 1;
    console.log(userScore + "user win"); 
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
    computerScore = computerScore + 1;
    console.log(computerScore + "comp win");
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
    userScore = userScore + 1;
    console.log(userScore + "user win");
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
    computerScore = computerScore + 1;
    console.log(computerScore + "comp win");
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
    userScore = userScore + 1;
    console.log(userScore + "user win");
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
    computerScore = computerScore + 1;
    console.log(computerScore + "comp win");
  }


  resultDisplay.innerText += result + "\n";
  checkWinner();
}

function checkWinner() {
  if (computerScore === 2) {
    console.log("Ops you lose!");
    finalResultDisplay.innerText = "Ops you lose!"
    resetGame();
  } else if (userScore === 2) {
    console.log("you are the greates winner");
    finalResultDisplay.innerText = "Congrat you win!"
    resetGame();
  }
}

function resetGame() {
  userChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  document.getElementById('user-timer').innerHTML = "";
  resultDisplay.innerText = ""
  userChoice = "";
  computerChoice = "";
  result ="";
  userScore = 0;
  computerScore = 0;
  clearInterval(timer);
  document.getElementById("rock").disabled = true;
  document.getElementById("scissors").disabled = true;
  document.getElementById("paper").disabled = true;
  resultDisplay.innerText = "Click the start game button if you want";
}



const startGameBtn = document.getElementById('start-game-btn');
startGameBtn.addEventListener('click', userTurnTimer);
//startGameBtn.addEventListener('click', resetTime);
startGameBtn.addEventListener('click', disableGameBtns);




function disableGameBtns() {
  document.getElementById('rock').removeAttribute('disabled')
  document.getElementById('scissors').removeAttribute('disabled')
  document.getElementById('paper').removeAttribute('disabled')
}



function resetTime() {
  clearInterval(timer);
  sec = 10;
}



// function startGame() {
  
// }

function userTurnTimer(){
  sec = 10;
  timer = setInterval(function(){
      document.getElementById('user-timer').innerHTML=sec;
      sec--;
      if (sec < 0) {
         result = 'you lose!'
         computerScore = computerScore + 1;
          clearInterval(timer);
      }
  }, 1000);
}

