function computerPlay(){
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
    let outcome = ""
    if (playerSelection == "rock" && computerSelection == "rock"){
        outcome = "Tie! Rock and Rock!"
        return outcome
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        outcome = "You lose! Paper beats Rock!"
        return outcome
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        outcome = "You win! Rock beats Scissors!"
        return outcome
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        outcome = "Tie! Paper and Paper!"
        return outcome
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        outcome = "You win! Paper beats Rock!"
        return outcome
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        outcome = "You lose! Scissors beats Paper!"
        return outcome
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        outcome = "Tie! Scissors and Scissors!"
        return outcome
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        outcome = "You lose! Rock beats Scissors!"
        return outcome
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        outcome = "You win! Scissors beats Paper!"
        return outcome
    }
}

function game () {
    let i = 0;
    while (i <= 5) {
        console.log(i);
        const computerSelection = computerPlay();
        const playerSelection = "rock";
        console.log(playRound(playerSelection, computerSelection));
        i++
    }
}




