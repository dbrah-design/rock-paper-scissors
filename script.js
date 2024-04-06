
function getComputerChoice() {
  const computerChoice = ['rock','paper','scissors'];
  return computerChoice[(Math.floor(Math.random() * computerChoice.length))];
} 

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock-js");
const paperBtn = document.querySelector(".paper-js");
const scissorsBtn = document.querySelector(".scissors-js");


rockBtn.addEventListener('click', () => {
  playRound("rock");
  
})
paperBtn.addEventListener('click', () => {
  playRound("paper");
})
scissorsBtn.addEventListener('click', () => {
  playRound("scissors");
})

function playRound(playerSelection) {
 let result = '';
 const computerSelection = getComputerChoice();
 const displayResult = document.querySelector(".js-result");
 const displayScore = document.querySelector(".js-score");
 const displayWinner = document.querySelector(".js-winner");
 
 
  if (playerSelection === computerSelection) {
   result = `It's a tie! you both picked ${playerSelection}`;
 } else if (playerSelection === "rock" && computerSelection === "scissors") {
   playerScore++
   result = "You win! Rock beats Scissors";
 } else if (playerSelection === "paper" && computerSelection === "rock") {
   playerScore++
    result = "You win! Paper beats Rock";
 } else if (playerSelection === "scissors" && computerSelection === "paper") {
   playerScore++
    result = "You win! Scissors beats Paper";
 } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
 }

 if (playerScore === 5) {
  displayWinner.textContent = "You reached 5 points. You win the game!!!!";
 } else if(computerScore === 5) {
  displayWinner.textContent = "Computer reached 5 points. You lose the game!!!";
 }
 
 displayResult.textContent = result
 displayScore.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
   
}

