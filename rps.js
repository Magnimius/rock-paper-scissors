function getComputerChoice() {
    num = Math.floor(Math.random()*3);
    return numToRSP(num);
}

function numToRSP(num) {
    if (num == 0) {
        console.log('rock');
        return 'rock';
    }
    if (num == 1) {
        console.log('paper');
        return 'paper';
    }
    if (num == 2) {
        console.log('scissors');
        return 'scissors';
    }
}
function getPlayerChoice() {
    let playernum = parseInt(prompt("Enter either 0, 1 or 2 for Rock, Paper, Scissors"));
    return numToRSP(playernum);
}

let computerSelection = getComputerChoice();;
let playerSelection = getPlayerChoice();
let message;
function playRound(player, comp) {
    if (
        (player == 'rock' && comp == 'scissors') ||
        (player == 'scissors' && comp == 'paper') ||
        (player == 'paper' && comp == 'rock')
      ) {
        message = "You win!!!"
      } else if (player == comp) {
        message = "It\'s a tie :/"
      } else {
        message = "You lose :("
      }
}
playRound(playerSelection,computerSelection)
console.log(message);