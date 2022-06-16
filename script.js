let options = ["rock", "paper", "scissors"];
const winners = [];
let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Play new game";
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = compareSelections(playerSelection, computerSelection);
  winners.push(winner);
  console.log("winner of the round:", winner);
  logRounds(playerSelection, computerSelection, winner, round);
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
  return input;
}

function validateInput(input) {
  return options.includes(input);
}

function computerChoice() {
  let index = Math.floor(Math.random() * Math.floor(options.length));
  return options[index];
}

function compareSelections(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "TIE";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "PLAYER";
  } else {
    return "COMPUTER";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "PLAYER").length;
  let computerWins = winners.filter((item) => item == "COMPUTER").length;
  let ties = winners.filter((item) => item == "TIE").length;
  console.log("Results:");
  console.log("player wins:", playerWins);
  console.log("computer wins:", computerWins);
  console.log("ties:", ties);
}

function logRounds(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player chose:", playerChoice);
  console.log("Computer chose", computerChoice);
  console.log(winner, "won the round");
  console.log("-------------------------");
}
