let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// this function generates a randomized option for the computer player by getting random decimal from Math.random then multiplying it by the array length of the options.  When function is executed it returns a string from the array in random order. Math.floor is used to round the numbers to the closest smallest whole interger.
//computer choice//

function computerPlay() {
  let index = Math.floor(Math.random() * Math.floor(options.length));
  console.log(options[index]);
  return options[index];
}

function compareSelections(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
  //checking for a tie//
  if (playerSelection === computerSelection) {
    console.log("draw!");
    return;
  }
  //for player rock//
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("Player Wins");
      return;
    } else {
      console.log("Computer wins!");
      return;
    }
  }
  //for player paper//
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("Computer Wins");
      return;
    } else {
      console.log("Player wins!");
      return;
    }
  }
  //for player scissors//
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("Computer Wins");
      return;
    } else {
      console.log("Player wins!");
      return;
    }
  }
}
