function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    console.log(choices[randomNumber(0,choices.length)]);
}
getComputerChoice();