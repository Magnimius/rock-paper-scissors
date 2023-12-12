function getComputerChoice() {
    num = Math.floor(Math.random()*3);
    return numToRSP(num);
}

function numToRSP(num) {
    if (num == 0) {
        concsole.log('rock');
        compPic.src="./images/blackrock.png";
        compPic.style.height="130px";
        compPic.style.width="120px";
        return 'rock';
    }
    if (num == 1) {
        console.log('paper');
        compPic.src="./images/blackpaper.png";
        compPic.style.height="130px";
        compPic.style.width="120px";
        return 'paper';
    }
    if (num == 2) {
        console.log('scissors');
        compPic.src="./images/blackscissors.png";
        compPic.style.height="130px";
        compPic.style.width="120px";
        return 'scissors';
    }
}
// function getPlayerChoice() {
//     let playernum = parseInt(prompt("Enter either 0, 1 or 2 for Rock, Paper, Scissors"));
//     return numToRSP(playernum);
// }

// player selection
const playerPic = document.getElementById('playerPic');
const playRock = document.getElementById('rock');
const playPaper = document.querySelector('#paper');
const playScissors = document.querySelector('#scissors');

playRock.addEventListener('click',function(e) {
  playerPic.src="./images/blackrock.png";
  playerPic.style.height="130px"
  playerPic.style.widows="120px"
  playerSelection = 'rock';
});

playPaper.addEventListener('click',function(e) {
  playerPic.src="./images/blackpaper.png";
  playerPic.style.height="130px";
  playerPic.style.widows="120px";
  playerSelection = 'paper';
});

playScissors.addEventListener('click',function(e) {
  playerPic.src="./images/blackscissors.png";
  playerPic.style.height="130px"
  playerPic.style.widows="120px"
  playerSelection = 'scissors';
});

/* Computer Selection */
const compPic = document.getElementById('compPic');
let computerSelection = getComputerChoice();;

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