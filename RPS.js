let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    options = ["rock", "paper", "scissors"]
    compChoice = options[Math.floor(Math.random() * 3)];
    return compChoice;
}
function playRound(playerSelection, computerSelection) { 
    if ((playerSelection.toLowerCase()) == (computerSelection.toLowerCase())) {
        playerScore ++;
        computerScore ++;
        return "it's A Tie!";
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection.toLowerCase() === 'paper')) {
        computerScore++;
        return 'You Lose! Paper beats Rock';
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection.toLowerCase() === 'scissors')) {
        return 'You Win! Rock beats Scissors';
        playerScore ++;
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection.toLowerCase() === 'scissors')) {
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection.toLowerCase() === 'rock')) {
        return 'You Win! Paper beats Rock'; 
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection.toLowerCase() === 'rock')) {
        computerScore++;
        return "You Lose! Rock beats Scissors"; 
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection.toLowerCase() === 'paper')) {
        playerScore ++;
        return 'You win! Scissors beats Paper';
    }
}
function game(){
    computerScore = 0;
    playerScore = 0;
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt('Choose Rock Paper or Scissors!');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log(`sorry! You lost ${computerScore} to ${playerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`congratulation! You won! you beat the computer ${playerScore} to ${computerScore}`);
    } else {
        console.log("It's a tie!");    
    }
}