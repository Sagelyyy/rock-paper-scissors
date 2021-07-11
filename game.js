let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#gameResults');

const gameInfo = document.createElement('div');
gameInfo.classList.add('content')
gameInfo.style.paddingTop = '20px';
gameInfo.style.bottom = '-20%'
container.appendChild(gameInfo);
const title = document.createElement('h1');
title.style.fontWeight = 'strong';
title.style.textAlign = 'center';
title.textContent = "Man vs Computer."
const result = document.createElement('h2');
result.style.fontWeight = 'strong';
result.style.textAlign = 'center';
result.textContent = ""
const humanScore = document.createElement('p');
humanScore.style.position = 'absolute';
humanScore.style.left = '120px'
humanScore.style.fontWeight = 'strong';
humanScore.style.paddingLeft = '5%';
humanScore.style.fontSize = '86px';
humanScore.textContent = playerScore
const pcScore = document.createElement('p');
pcScore.style.position = 'absolute';
pcScore.style.right = '120px'
pcScore.style.fontWeight = 'strong';
pcScore.style.paddingRight = '5%';
pcScore.style.fontSize = '86px';
pcScore.textContent = computerScore
gameInfo.appendChild(humanScore)
gameInfo.appendChild(pcScore)
gameInfo.appendChild(title)
gameInfo.appendChild(result)




const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playRound('rock',getComputerChoice())
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playRound('paper',getComputerChoice())
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playRound('scissors',getComputerChoice())
});


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
        result.textContent = "Tie! Rock and Rock"
        return
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        result.textContent = "You lose! Paper beats Rock!"
        pcScore.textContent = ++computerScore
        return
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result.textContent = "You win! Rock beats Scissors!"
        playerScore ++
        return
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        result.textContent = "You Tie! Paper and Paper!"
        return
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        result.textContent = "You win! Paper beats Rock!"
        playerScore ++
        return
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        result.textContent = "You lose! Scissors beats Paper!"
        pcScore.textContent = ++computerScore
        return
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        result.textContent = "You Tie! Scissors and Scissors!"
        return
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        result.textContent = "You lose! Rock beats Scissors!"
        pcScore.textContent = ++computerScore
        return
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        result.textContent = "You win! Scissors beats Paper!"
        playerScore ++
        return
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




