function getComputerChoice() {
    const CHOICES = ['scissors', 'paper', 'rock'];
    let choice = Math.floor(Math.random() * 3);
    return CHOICES[choice];
}

function gameLogic(player, computerSelection) {
    if (player === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        return 2;
    }
    else if ((player == 'rock' || computerSelection == 'rock') && (player ==  'paper' || computerSelection == 'paper')) {
        if (player == 'paper') {
            playerScore += 1;
            return 0;
        } else {
            computerScore += 1;
            whoWon = 1;
        }
    } else if ((player ==  'scissors' || computerSelection == 'scissors') && (player ==  'paper' || computerSelection == 'paper')) {
        if (player == 'scissors') {
            playerScore += 1;
            return 0;
        } else {
            computerScore += 1;
            return 1;
        }
    } else if ((player ==  'rock' || computerSelection == 'rock') && (player ==  'scissors' || computerSelection == 'scissors')) {
        if (player == 'rock') {
            playerScore += 1;
            return 0;
        } else {
            computerScore += 1;
            return 1;
        }
    };
};

function winner(whoWon) {

    const winner = document.querySelector('.results');
    const score = document.querySelector('.score').querySelectorAll('h1');
    if (whoWon === 0) {
        winner.textContent = `Winner for this round: Player!`
    } else if (whoWon === 1) {
        winner.textContent = `Winner for this round: Computer!`
    } else {
        winner.textContent = `Winner for this round: Draw!`
    }
    score[0].textContent = `Computer: ${computerScore} pts`
    score[1].textContent = `Player: ${playerScore} pts`
};

function finalWinner(counter) {
    if (counter >= 5) {
        const allButton = document.querySelectorAll('button');
        allButton.forEach(button => button.disabled = true);

        const overall = document.querySelector('.results');
        setInterval(function(){
            if (computerScore > playerScore) {
                overall.textContent = `Computer Won! You Suck!`;
            }
            else if (computerScore < playerScore) {
                overall.textContent = `Player Won! Guess you are smarter than a bot...`;
            } else {
                overall.textContent = `Its a draw! Try again!`;
            };
        }, 1500);
    };
}

function playRound(e) {
    counter += 1;

    let player = e.target.id;
    let computerSelection = getComputerChoice()
    let whoWon;

    const round = document.querySelector('.round');
    round.textContent = `Round ${counter}`
    
    whoWon = gameLogic(player, computerSelection);
    winner(whoWon);
    finalWinner(counter)
};

let counter = 0;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');


buttons.forEach( button => button.addEventListener("click", playRound));


