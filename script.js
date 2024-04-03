
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
   (playRound("rock",getComputerChoice()))
   console.log(getComputerChoice())
 })
 paperBtn.addEventListener('click', () => {
   (playRound("paper",getComputerChoice()))
 })
 scissorsBtn.addEventListener('click', () => {
   (playRound("scissors",getComputerChoice()))
 })
 
 function playRound(playerSelection, computerSelection) {
  let result = '';
  const displayResult = document.querySelector(".js-result");
  const displayScore = document.querySelector(".js-score");
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
  
  displayResult.textContent = result
  displayScore.textContent = `Player Score: ${playerScore} | Computer Score:${computerScore}`;
    
 }

 // Something is off with the logic for the play round function. When I click one of the buttons multiple times, it repeats the same message. Need to figure out why it's doing that. Figured it out. It had to do  with the computer selection. For some reason it kept repeating the computer selection when I had the code written like const computerSelection = getComputerChoice() outside the scope of the event listener. Once I removed it and added getComputerChoice() to playRound function inside event listener it seemed to work
 
 /* Code to run one round of the game
 
 const playerSelection = prompt("What is your selection?").toLowerCase(); 
 const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));
 console.log(`player score: ${playerScore} computer score: ${computerScore}`)
 */
 /* Logic for playing five rounds
 function playGame() {
    for (let i=0;i<5;i++) {
       const playerSelection = prompt("What is your selection?").toLowerCase(); 
       const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
       console.log(`player score: ${playerScore} computer score: ${computerScore}`);
    }
 }
 */
 
 
  // playGame()