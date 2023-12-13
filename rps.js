let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    num = Math.floor(Math.random()*3);
    return numToRSP(num);
}

function numToRSP(num) {
    if (num == 0) {
        compPic.src="./images/blackrock.png";
        compPic.style.height="130px";
        compPic.style.width="120px";
        return 'rock';
    }
    if (num == 1) {
        compPic.src="./images/blackpaper.png";
        compPic.style.height="130px";
        compPic.style.width="120px";
        return 'paper';
    }
    if (num == 2) {
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

const playerPic = document.getElementById('playerPic');
const playRock = document.getElementById('rock');
const playPaper = document.querySelector('#paper');
const playScissors = document.querySelector('#scissors');

playRock.addEventListener('click',function(e) {
  playerPic.src="./images/blackrock.png";
  playerPic.style.height="130px"
  playerPic.style.widows="120px"
  playerSelection = 'rock';
  let computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
});

playPaper.addEventListener('click',function(e) {
  playerPic.src="./images/blackpaper.png";
  playerPic.style.height="130px";
  playerPic.style.widows="120px";
  playerSelection = 'paper';
  let computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
});

playScissors.addEventListener('click',function(e) {
  playerPic.src="./images/blackscissors.png";
  playerPic.style.height="130px"
  playerPic.style.widows="120px"
  playerSelection = 'scissors';
  let computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
});

/* Computer Selection */
const compPic = document.getElementById('compPic');
const usrScore = document.getElementById('usr');
const MachineScore = document.getElementById('comp');
const message = document.getElementById('gameMessage');
function playRound(player, comp) {
    if (
        (player == 'rock' && comp == 'scissors') ||
        (player == 'scissors' && comp == 'paper') ||
        (player == 'paper' && comp == 'rock')
      ) {
        playerScore+=1;
        console.log(playerScore);
      } else if (player == comp) {
        //do nothing
      } else {
        compScore+=1;
        console.log(compScore);

      }
    if (playerScore+compScore>=5) {
        //display either win or lose message
      if (playerScore > compScore) {
        message.src="./images/win.png";
        message.style.visibility="visible"
      } else {
        message.src="./images/lose.png";
        message.style.visibility="visible"
        message.style.width="37%";
        message.style.height="26%";
      }
    }
    usrScore.innerText = "PLAYER SCORE: "+String(playerScore);
    MachineScore.innerText = "COMPUTER SCORE: "+String(compScore);
}

message.addEventListener('click', function(e) {
  message.style.visibility="hidden";
})
