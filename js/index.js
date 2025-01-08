alert("You will play 5 games of Rock, Paper and Scissors.");
let playerSelection = "";
let playerSelectionLower = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let lineCount = 0;
const buttons = document.querySelectorAll("#choice");
const result = document.querySelector("#results");
const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");
const playAgainButton = document.querySelector("#playAgain");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.textContent;
        playerSelectionLower = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelectionLower, computerSelection);
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    });
});
playAgainButton.addEventListener("click", () => {
    playAgain();
})
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[randomNumber(0,choices.length)];
}
function insertText(text, element) {
    const paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(text));
    element.appendChild(paragraph);
    lineCount += 1;
    if (lineCount == 3) {
        const lineBreak = document.createElement("br");
        element.appendChild(lineBreak);
        lineCount = 0;
    }
}
function playRound (playerSelection, computerSelection) {
    insertText("Your choice is: " + playerSelection, result);
    insertText("Browser's choice is: " + computerSelection, result);
    if (playerSelection == "rock" && computerSelection == "Paper") {
        insertText("You Lose! Paper beats Rock!", result);
        computerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "Rock"){
        insertText("Draw! Rock can't beat Rock!", result);
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        insertText("You Win! Rock beats Scissors!", result);
        playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        insertText("You Win! Paper beats Rock!", result);
        playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        insertText("Draw! Paper can't beat Paper!", result);
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        insertText("You Lose! Scissors beat Paper!", result);
        computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        insertText("You Lose! Rock beats Scissors!", result);
        computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        insertText("You Win! Scissors beat Paper!", result);
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        insertText("Draw! Scissors can't beat Scissors!", result);
    }
    if (playerScore >= 5 || computerScore >= 5) {
        getResults();
        playAgain();
    }
}
function callPlayAgain() {
    playAgain();
}
function playAgain() {
    let playAgain = prompt("Do you want to play more? (Yes or No)");
    if (playAgain == null) {
        callPlayAgain();
        return;
    }
    let playAgainLower = playAgain.toLowerCase();
    if (playAgainLower == "yes") {
        playerScore = 0;
        computerScore = 0;
        result.textContent = "";
        buttons.forEach((button) => {
            button.disabled = false;
        })
    } else if (playAgainLower == "no") {
        buttons.forEach((button) => {
            button.disabled = true;
        })
        getResults();
    } else {
        callPlayAgain();
    }
}
function getResults() {
    if (playerScore > computerScore) {
        alert("You beat the browser!");
    } else if (computerScore > playerScore) {
        alert("The computer beat you!");
    } else if (playerScore === computerScore) {
        alert("The game ended in a draw!");
    }
}