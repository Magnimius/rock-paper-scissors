function getComputerChoice() {
    num = Math.floor(Math.random()*3);
    if (num == 0) {
        console.log("rock");
    }
    if (num == 1) {
        console.log("paper");
    }
    if (num == 2) {
        console.log("scissors");
    }
}
let computerSelection = getComputerChoice();
let playerSelection = "rock";
console.log(playerSelection);

function playRound(player, computer) {
    if ((player == "rock") && (computer == "scissors")) {
        return "You won!"
    }
}

console.log(playRound(playerSelection, computerSelection));