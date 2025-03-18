function getComputerChoice() {
    let result = Math.random() * 100;
    let computerChoice;

    if (result <= 33) {
        computerChoice = "rock";
    } else if (result > 33 && result < 66) {
        computerChoice = "paper";
    } else if (result >= 66) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?").toLowerCase()
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }

}

let computerScore = 0
let humanScore = 0

function playRound() {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    let result;

    if (humanChoice === computerChoice) {
        result = "draw";

        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) { 
            humanScore++;
            result = "Player Wins!";

        } else {
            computerScore++;
            result = "CPU Wins!";
        }
        console.log(result)
        console.log(humanScore)
        console.log(computerScore)
    }


playRound();
