const choices = ["rock", "paper", "scissors"];
const resultDiv = document.getElementById("result");

document.getElementById("rock").addEventListener("click", () => playGame(0));
document.getElementById("paper").addEventListener("click", () => playGame(1));
document.getElementById("scissors").addEventListener("click", () => playGame(2));

function playGame(userChoice) {
    const computerChoice = Math.floor(Math.random() * 3);
    const userMove = choices[userChoice];
    const computerMove = choices[computerChoice];
    let result;

    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 0 && computerChoice === 2) || // Rock beats Scissors
        (userChoice === 1 && computerChoice === 0) || // Paper beats Rock
        (userChoice === 2 && computerChoice === 1)    // Scissors beats Paper
    ) {
        result = "You Won!";
    } else {
        result = "You Lose!";
    }

    resultDiv.innerHTML = `
        You chose: ${userMove}<br>
        Computer chose: ${computerMove}<br>
        ${result}
    `;
}
