let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

function getComputerChoice() {
    let result = Math.random() * 100;
    if (result <= 33) return "rock"; 
    else if (result <= 66) return "paper";
    else return "scissors";
}

function playRound(humanChoice) {
    if (roundsPlayed >= maxRounds) return; // Stop if the game is over

    let computerChoice = getComputerChoice();
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) { 
        humanScore++;
        resultText = "You win this round!";
    } else {
        computerScore++;
        resultText = "CPU wins this round!";
    }

    roundsPlayed++;

    if (roundsPlayed === maxRounds) {
        announceWinner();
    }

    updateUI(resultText, humanChoice, computerChoice);
}

function announceWinner() {
    let finalMessage = "";
    
    if (humanScore > computerScore) {
        finalMessage = "🎉 Congratulations! You win the game! 🎉";
    } else if (computerScore > humanScore) {
        finalMessage = "😔 The CPU wins this time. Try again!";
    } else {
        finalMessage = "🤝 It's a draw! Play again?";
    }

    document.getElementById("result").innerHTML += `<p><strong>${finalMessage}</strong></p>`;
    disableButtons();
}

function updateUI(resultText, humanChoice, computerChoice) {
    document.getElementById("result").innerHTML = `
        <p>Round ${roundsPlayed} of ${maxRounds}</p>
        <p>${resultText}</p>
        <p>You chose: <strong>${humanChoice}</strong></p>
        <p>CPU chose: <strong>${computerChoice}</strong></p>
        <p>Score - You: ${humanScore} | CPU: ${computerScore}</p>
    `;
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
