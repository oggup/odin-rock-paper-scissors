let options = ["rock", "paper", "scissors"];

// this function generates a randomized option for the computer player by getting random decimal from Math.random then multiplying it by the array length of the options.  When function is executed it returns a string from the array in random order. Math.floor is used to round the numbers to the closest smallest whole interger.

function computerPlay() {
  let index = Math.floor(Math.random() * Math.floor(options.length));
  console.log(options[index]);
  return options[index];
}

function rockPaperScissors(playerSelection, computerSelection) {}
