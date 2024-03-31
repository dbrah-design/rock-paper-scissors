
function getComputerChoice() {
   const computerChoice = ['rock','paper','scissors'];
   return computerChoice[(Math.floor(Math.random() * computerChoice.length))];
 } 
 
 let playerScore = 0;
 let computerScore = 0;

 const rockBtn = document.querySelector(".rock-js");
 const paperBtn = document.querySelector(".paper-js");
 const scissorsBtn = document.querySelector(".scissors-js");
 const computerSelection = getComputerChoice();

 rockBtn.addEventListener('click', () => {
   (playRound("rock",computerSelection))
 })
 paperBtn.addEventListener('click', () => {
   (playRound("paper",computerSelection))
 })
 scissorsBtn.addEventListener('click', () => {
   (playRound("scissors",computerSelection))
 })
 
 function playRound(playerSelection, computerSelection) {
  let result = '';
  const displayResult = document.querySelector(".js-result")
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
    
 }
 
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