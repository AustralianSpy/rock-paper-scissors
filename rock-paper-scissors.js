// Computer: selects one of 3 options at random.
// Create an array holding rock, paper, scissors.
// Run function that iterates through array, randomly picks one.
// Store result in a variable and return.
// Prompt user to enter rock, paper, or scissors.
// Keep prompting until one is chosen.
// Change selection toLowerCase for comparison just in case
// Store selection in variable.
// Compare variables for a winner, and return appropriate alert.


function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  // select a random # bw 1 and 3 for choice index
  let i = Math.floor(Math.random() * 3);
  return choices[i];
}


function playerPlay() {
  let answer;  
  
  while (true) {
        let ask = prompt("Rock, paper, or scissors?", '').toLowerCase();
     
        // should we proceed? prompt until appropriate answer.
        if (ask !== 'rock' & ask !== 'paper' & ask !== 'scissors') continue;
        return answer = ask;
      }
  return answer;
 }

function playRound() {
  const computerSelection = computerPlay();
  const playerSelection = playerPlay();
  
  //result declarations
  let resWin = `You win: ${playerSelection} beats ${computerSelection}`;
  let resDraw = `Oops, it's a draw!`;
  let resLose = `You lose: ${computerSelection} beats ${playerSelection}`;
  
  //ugly if-else sprawl:
  if (computerSelection == playerSelection){
    return resDraw;
  } else if (playerSelection == "rock"){
      if (computerSelection == "paper"){
        return resLose;
      } else {
          return resWin;
      }
  } else if (playerSelection == "paper"){
      if (computerSelection == "scissors"){
        return resLose;
      } else {
        return resWin;
      }
  } else if (playerSelection == "scissors"){
      if (computerSelection =="rock"){
        return resLose;
      } else {
        return resWin;
      }
  } else {
    return "Error!";
  }
}

function game() {
  let w = 0;
  let l = 0;
  
  for (let j = 0; j < 5; j++){
    let result = playRound();
    console.log(result);
    if (result.includes("win")){
      w++;
    } else if (result.includes("lose")) {
      l++;
    } else {
      continue;
    }
  }
  
  return ( w > l) ? console.log("Congratulations, you're the winner!") 
    : ( l > w ) ? console.log("Sorry, you lost this game!")
    : console.log("The game is a draw!");
}

game();
