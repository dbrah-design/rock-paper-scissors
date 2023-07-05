function getComputerChoice() {
    const computerChoice = ['rock','paper','scissors'];
    let randomChoice = computerChoice[(Math.floor(Math.random() * computerChoice.length))];
    console.log(randomChoice)
}

function playRound(playerSelection, computerSelection) {
    
}

 // This is so I want to reference a specific string in the array. This will be rock alert(computerChoice[1])