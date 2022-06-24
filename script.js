let options = ["rock", "paper", "scissors"];
let playerOptions = document.querySelectorAll(".btn-list");
const winners = [];
let round = 1;
// console.log(playerOptions);
//what i seek to accomplish
//on start game click options for rock paper and scissors buttons appear on the screen and start game button is removed from
//whenever a option button is clicked add small transition to emphasize button clicked
//visual representation of round
//keep visual scoreboard
//display winner on scoreboard and start new game button

//this selects the value of button clicked
playerOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    option.classList.add("active");
    let input = option.value;
    playRound(round, input);
    logWins();
    round++;

    // console.log(input);
  });
  option.addEventListener("transitionend", (e) => {
    option.classList.remove("active");
  });
});

//random computer Selection
function computerChoice() {
  let index = Math.floor(Math.random() * Math.floor(options.length));
  return options[index];
}

//function that takes computer and player inputs and compares them
function playRound(round, input) {
  const playerSelection = input;
  const computerSelection = computerChoice();
  const winner = compareSelections(playerSelection, computerSelection);
  winners.push(winner);
  logRounds(playerSelection, computerSelection, winner, round);
}

//compares user selection with computer selection
function compareSelections(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    document.getElementById("winner").innerText = "It's a draw!";
    return "TIE";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    document.getElementById("winner").innerText = "You won this round!";
    return "PLAYER";
  } else {
    document.getElementById("winner").innerText = "Jotchua won this round!";
    return "COMPUTER";
  }
}

function restartGame(winners, playerWins, computerWins) {
  location.reload();
}

function logWins() {
  let playerWins = winners.filter((item) => item == "PLAYER").length;
  let computerWins = winners.filter((item) => item == "COMPUTER").length;
  let resetButton = document.createElement("button");
  resetButton.classList.add("btn-list");
  resetButton.style.fontSize = "large";
  resetButton.innerHTML = "Play Again";
  resetButton.addEventListener("click", (e) => {
    resetButton.classList.add("active");

    restartGame();
  });
  resetButton.addEventListener("transitionend", (e) => {
    resetButton.classList.remove("active");
  });
  let ties = winners.filter((item) => item == "TIE").length;
  // console.log("Results:");
  console.log("player wins:", playerWins);
  document.getElementById("player-score").innerText = playerWins;
  console.log("computer wins:", computerWins);
  document.getElementById("computer-score").innerText = computerWins;
  // console.log("ties:", ties);
  // console.log(winners)
  if (playerWins === 5) {
    document.getElementById("winner").innerText = "YOU WON THE GAME";
    document.getElementById("player-selection").innerText = "WINNER";
    document.getElementById("computer-selection").innerText = "LOSER";
    document.getElementById("btn-list-id").innerText = "";
    document.getElementById("btn-list-id").appendChild(resetButton);
  }
  if (computerWins === 5) {
    round = 1;
    document.getElementById("winner").innerText = "JOTCHUA DEFEATED YOU";
    document.getElementById("player-selection").innerText = "LOSER";
    document.getElementById("computer-selection").innerText = "WINNER";
    document.getElementById("btn-list-id").innerText = "";
    document.getElementById("btn-list-id").appendChild(resetButton);
  }
}

function logRounds(playerChoice, computerChoice, winner, round) {
  document.getElementById("round-number").innerText = round;
  // console.log("Round:", round);
  // console.log("Player chose:", playerChoice);
  document.getElementById("player-selection").innerText = playerChoice;
  // console.log("Computer chose", computerChoice);
  document.getElementById("computer-selection").innerText = computerChoice;
  // console.log(winner, "won the round");
  // console.log("-------------------------");
}
