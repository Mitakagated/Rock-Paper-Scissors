let playerSelection = prompt("Rock, Paper or Scissors?");
let playerSelectionLower = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[randomNumber(0,choices.length)];
}
function playRound (playerSelection, computerSelection) {
    console.log("Your choice is: " + playerSelection);
    console.log("Browser's choice is: " + computerSelection);
    if (playerSelection == "rock" && computerSelection == "Paper") {
        console.log("You Lose! Paper beats Rock!");
        return computerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "Rock"){
        console.log("Draw! Rock can't beat Rock!");
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        console.log("You win! Rock beats Scissors!");
        return playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        console.log("You Win! Paper beats Rock!");
        return playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        console.log("Draw! Paper can't beat Paper!");
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        console.log("You lose! Scissors beat paper!");
        return computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        console.log("You lose! Rock beats Scissors!");
        return computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        console.log("You Win! Scissors beat Paper!");
        return playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        console.log("Draw! Scissors can't beat Scissors!");
    } else {
        let playerSelection = prompt("Please input Rock, Paper or Scissors.");
        let playerSelectionLower = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelectionLower, computerSelection);
    }
function game() {
    
}
}
playRound(playerSelectionLower, computerSelection);
