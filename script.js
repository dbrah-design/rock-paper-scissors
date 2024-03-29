function getComputerChoice() {
    const computerChoice = ['rock','paper','scissors'];
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))];
} 

function getComputerChoice() {
   const computerChoice = ['rock','paper','scissors'];
   return computerChoice[(Math.floor(Math.random() * computerChoice.length))];
 } 
 
 let playerScore = 0;
 let computerScore = 0;
 
 function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
    return `It's a tie! you both picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
     return "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
     return "You win! Scissors beats Paper";
  } else {
     computerScore++;
     return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
    
 }
 
 /* Code to run one round of the game
 
 const playerSelection = prompt("What is your selection?").toLowerCase(); 
 const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));
 console.log(`player score: ${playerScore} computer score: ${computerScore}`)
 */
 
 function playGame() {
    for (let i=0;i<5;i++) {
       const playerSelection = prompt("What is your selection?").toLowerCase(); 
       const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
       console.log(`player score: ${playerScore} computer score: ${computerScore}`);
    }
 }
 
 
 
  playGame()