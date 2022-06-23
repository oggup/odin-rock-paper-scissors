let options = ["rock", "paper", "scissors"];
const winners = [];
let round = 1;
//what i seek to accomplish
//on start game click options for rock paper and scissors buttons appear on the screen and start game button is removed from
//whenever a option button is clicked add small transition to emphasize button clicked
//visual representation of round
//keep visual scoreboard
//display winner on scoreboard and start new game button

//this selects the value of button clicked
let playerOptions = document.getElementsByClassName("btn-list");
// console.log(playerOptions)
for (i = 0; i < playerOptions.length; i++) {
  let option = playerOptions[i];
  option.addEventListener("click", (e) => {
    option.style.border = "1px solid orange";
    let input = e.target.value;
    console.log("input:", e.target.value);
    playRound(round, input);
    logWins();
    round++;
  });
}

// function playerChoice(input) {
//   // let input = prompt(" Type rock, paper, or scissors");
//   // while (input == null) {
//   //   input = prompt(" choose rock, paper, or scissors");
//   // }
//   // input.toLowerCase();
//   // let inputCheck = validateInput(input);
//   // while (inputCheck == false) {
//   //   input = prompt(
//   //     "please type response correctly, capitalization does not matter"
//   //   );
//   //   while (input == null) {
//   //     input = prompt(" Type rock, paper, or scissors");
//   //   }
//   //   input = input.toLowerCase();
//   //   inputCheck = validateInput(input);
//   // }
//   return input;
// }

// function game() {
//   for (let i = 1; i <= 5; i++) {
//     playRound(i, input);
//   }
//   document.querySelector("button").textContent = "Play new game";
//   logWins();
//   b;
// }

function playRound(round, input) {
  const playerSelection = input;
  const computerSelection = computerChoice();
  const winner = compareSelections(playerSelection, computerSelection);
  winners.push(winner);
  console.log("winner of the round:", winner);
  logRounds(playerSelection, computerSelection, winner, round);
}

// function playerChoice(input) {
//   console.log(input);
//   return input;
// }

// // function validateInput(input) {
//   return options.includes(input);
// }

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
  document.getElementById("player-score").innerText = playerWins;
  console.log("computer wins:", computerWins);
  document.getElementById("computer-score").innerText = playerWins;
  console.log("ties:", ties);
}

function logRounds(playerChoice, computerChoice, winner, round) {
  document.getElementById("round-number").innerText = round;
  console.log("Round:", round);
  console.log("Player chose:", playerChoice);
  document.getElementById("player-selection").innerText = playerChoice;
  console.log("Computer chose", computerChoice);
  document.getElementById("computer-selection").innerText = computerChoice;
  console.log(winner, "won the round");
  console.log("-------------------------");
}
