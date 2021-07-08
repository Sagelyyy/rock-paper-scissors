let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choice = Math.floor(Math.random()*2) + 1;
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "something is wrong";
    }
}


function playRound(playerSelection, computerSelection){
    let outcome = "";
    if (playerSelection == "rock" && computerSelection == "rock"){
        outcome = "You Tie! Rock and Rock!"
        return outcome
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        outcome = "You lose! Paper beats Rock!"
        computerScore ++
        return outcome
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        outcome = "You win! Rock beats Scissors!"
        playerScore ++
        return outcome
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        outcome = "You Tie! Paper and Paper!"
        return outcome
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        outcome = "You win! Paper beats Rock!"
        playerScore ++
        return outcome
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        outcome = "You lose! Scissors beats Paper!"
        computerScore ++
        return outcome
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        outcome = "You Tie! Scissors and Scissors!"
        return outcome
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        outcome = "You lose! Rock beats Scissors!"
        computerScore ++
        return outcome
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        outcome = "You win! Scissors beats Paper!"
        playerScore ++
        return outcome
    }

}


function getPlayerChoice(){
    let playerChoice = prompt("Please choose Rock, Paper, or Scissors!");
    playerChoice = playerChoice[0].toLowerCase() + playerChoice.substring(1).toLowerCase();
    return playerChoice;
  }


function game () {
    let i = 0;
    playerScore = 0;
    computerScore = 0;
    while (i < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            i++
            console.log("Your score is: " + playerScore);
            console.log("The computers score is: " +computerScore);
        } else {
            console.log("Please choose a valid input!")
        }
    }
    if(playerScore > computerScore){
        console.log("You win!")
    } else if (playerScore == computerScore) {
        console.log("You tied the computer!")
    } else {
        console.log("You lose!")
    }
}




