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

const retry = document.createElement('button');
retry.classList.add('retry')
retry.style.position = 'absolute';
retry.style.right = '35%'
retry.style.left = '35%'
retry.style.bottom = '35%'
retry.style.fontWeight = 'strong';
retry.style.fontSize = '86px';
retry.style.height = '100px'
retry.textContent = 'New game?'


gameInfo.appendChild(humanScore)
gameInfo.appendChild(pcScore)
gameInfo.appendChild(title)
gameInfo.appendChild(result)


let playerSelection;
// setting up the buttons and hooking them in to the document


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock', gameStatus()
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper', gameStatus()
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors', gameStatus()
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

function createRetryButton(){
    const retryBtn = document.querySelector('.retry');
    retryBtn.addEventListener('click', () => {
        newGame()
    });
}

function gameStatus(){
    if(playerScore < 5 && computerScore < 5){
        playRound(playerSelection, getComputerChoice())
    } else {
        endGame()
    }
}

function endGame(){
    if (playerScore == 5) {
        result.textContent = "You win the Game!"
        gameInfo.appendChild(retry)
        createRetryButton()

    }
    if (computerScore == 5) {
        result.textContent = "You Lose the Game!"
        gameInfo.appendChild(retry)
        createRetryButton()
    }
}

function newGame() {
    pcScore.textContent = 0;
    humanScore.textContent = 0;
    gameInfo.removeChild(retry)

}

function playRound(playerSelection, computerSelection){
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
        humanScore.textContent = ++ playerScore
        return
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        result.textContent = "You Tie! Paper and Paper!"
        return
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        result.textContent = "You win! Paper beats Rock!"
        humanScore.textContent = ++ playerScore
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
        humanScore.textContent = ++ playerScore
        return
    }

}
