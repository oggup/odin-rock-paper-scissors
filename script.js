let options = ["rock", "paper", "scissors"];
const winners = [];
let playerScore = 0;
let computerScore = 0;
//what i seek to accomplish
//on start game click options for rock paper and scissors buttons appear on the screen and start game button is removed from
//whenever a option button is clicked add small transition to emphasize button clicked
//visual representation of round
//keep visual scoreboard
//display winner on scoreboard and start new game button

//this selects the value of button clicked
let playerOptions = document.getElementsByClassName("btn-list");
for(i=0; i<playerOptions.length; i++){
  playerOptions[i].addEventListener("click",(e)=>{
    console.log(e.target)
    console.log(e.target.value)
  });
}


playerOptions[0].style.border = '1px solid orange';

  
    

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Play new game";
  logWins();
  b;
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
