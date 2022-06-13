let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function game() {
  playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = compareSelections(playerSelection, computerSelection);
  console.log("winner of the round:",winner);
}

function playerChoice() {
  let input = prompt(" Type rock, paper, or scissors");
  while (input == null) {
    input = prompt(" Type rock, paper, or scissors");
  }
  input.toLowerCase();
  let inputCheck = validateInput(input);
  while (inputCheck == false) {
    input = prompt(
      "please type response correctly, capitalization does not matter"
    );
    while (input == null) {
      input = prompt(" Type rock, paper, or scissors");
    }
    input = input.toLowerCase();
    inputCheck = validateInput(input);
  }

  console.log("you typed", input);
  return input;
}

function validateInput(input) {
  return options.includes(input);
}

function computerChoice() {
  let index = Math.floor(Math.random() * Math.floor(options.length));
  console.log("computer chose:", options[index]);
  return options[index];
}

function compareSelections(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("it's a tie");
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("you won round");
    return "PLAYER";
  } else {
    console.log("computer won round");
    return "COMPUTER";
  }
}

game();
