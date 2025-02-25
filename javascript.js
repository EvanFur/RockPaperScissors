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

let computerChoice = getComputerChoice()
console.log(computerChoice)

