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
    option.classList.toggle("active");
    let input = option.value;
    playRound(round, input);
    logWins();
    round++;
    // console.log(input);
  });
});

//function that takes computer and player inputs and compares them
function playRound(round, input) {
  const playerSelection = input;
  const computerSelection = computerChoice();
  const winner = compareSelections(playerSelection, computerSelection);
  winners.push(winner);
  // console.log("winner of the round:", winner);
  logRounds(playerSelection, computerSelection, winner, round);
}

function computerChoice() {
  let index = Math.floor(Math.random() * Math.floor(options.length));
  return options[index];
}

function compareSelections(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    document.getElementById("winner").innerText = "It's a draw!";
    return "TIE";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    document.getElementById("winner").innerText = "You win!";
    return "PLAYER";
  } else {
    document.getElementById("winner").innerText = "Jotchua won this round!";
    return "COMPUTER";
  }
}

function restartGame(){
  round=1
  document.getElementById("round-number").innerText = round
  document.getElementById("player-selection").innerText ="Selection";
  // console.log("Computer chose", computerChoice);
  document.getElementById("computer-selection").innerText = "Selection";
}

function logWins() {
  let playerWins = winners.filter((item) => item == "PLAYER").length;
  let computerWins = winners.filter((item) => item == "COMPUTER").length;
  let ties = winners.filter((item) => item == "TIE").length;
  // console.log("Results:");
  // console.log("player wins:", playerWins);
  document.getElementById("player-score").innerText = playerWins;
  // console.log("computer wins:", computerWins);
  document.getElementById("computer-score").innerText = computerWins;
  // console.log("ties:", ties);
  // console.log(winners)
  if (playerWins===4){
    console.log("YOU WON FIVE TIMES")
    restartGame()
  }
  if(computerWins===4){
    console.log("Jotchua won the game")
    restartGame()
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