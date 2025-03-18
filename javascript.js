console.log("Hello World")

function getComputerChoice() {
    let result = Math.random() * 100;
    let computerChoice;

    if (result <= 33) {
        computerChoice = "rock"
    } else if (result > 33 && result < 66) {
        computerChoice = "paper"
    } else if (result >= 66) {
        computerChoice = "scissors"
    }

    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?").toLowerCase()

    if (humanChoice === "rock") {
        humanChoice = "rock"
    } else if (humanChoice === "paper"){
        humanChoice = "paper"
    } else if (humanChoice === "scissors") {
        humanChoice = "scissors"
    }

}

let computerChoice = getComputerChoice()
let humanChoice = getHumanChoice()
let computerScore = 0
let humanScore = 0

if (humanChoice === computerChoice) {
    print(Draw!)
} else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore = 1+
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore = 1+
} else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore = 1+
} else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore = 1+
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore = 1+
} else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore = 1+
}



