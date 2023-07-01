function getComputerChoice() {
    const computerChoice = ['Rock','Paper','Scissors'];
    let randomChoice = computerChoice[(Math.floor(Math.random() * computerChoice.length))];
    console.log(randomChoice)
}

 // This is so I want to reference a specific string in the array. This will be rock alert(computerChoice[1])