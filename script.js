function getComputerChoice() {
    const computerChoice = ['rock','paper','scissors'];
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))];
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return `It's a tie! you both picked ${playerSelection}`;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats Scissors";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats Rock";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats Paper";
   } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
   }
}

function game () {
   const playerSelection = prompt('What is your selection')
   console.log(playRound(playerSelection, computerSelection)); // Need to figure out how to loop this later
}

// const playerSelection = prompt('What is your selection')
// const playerSelection = "rock"; 
const computerSelection = getComputerChoice();
game()
game()
game()
game()
game()
// console.log(playRound(playerSelection, computerSelection)); Going to keep this here just in case
 // This is so I want to reference a specific string in the array. This will be rock alert(computerChoice[1])

 // Got the code to work for the playRound section. I had to use a stack overflow article though and copy the code from there to get it to work though
 // Still not really getting the logic though.