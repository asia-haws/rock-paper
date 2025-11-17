const rock = "rock";
const paper = "paper";
const scissor = "scissor";

const moves = [rock, paper, scissor];



function getComputerChoice() {
  const chooseIndex = Math.floor(Math.random() * moves.length);
  const computerMove = moves[chooseIndex];
  const theComputer = document.getElementById("computer")
  theComputer.innerText = "Computer Move: " + computerMove

  console.log("The computer chose:", computerMove);

  return computerMove;



  
}

function getUserChoice() {
  let userMove = prompt("Pick one of the following: rock, paper, or scissor:");
  if (userMove === null) {
    console.log("User cancelled the input or provided no input.");
    return null;
  }
  const theUser = document.getElementById("user")
  theUser.innerText = "The user chose: " + userMove
  userMove = userMove.toLowerCase();
  console.log("The user chose:", userMove);
  return userMove;
}


function startGame() {
  const userMove = getUserChoice();
  const computerMove = getComputerChoice();

  const resultDisplay = document.getElementById("result")

  let message = "";

  
  if (
    (userMove === rock && computerMove === paper) ||
    (userMove === paper && computerMove === scissor) ||
    (userMove === scissor && computerMove === rock)
  ) {
    message = "Uh oh, you just lost. Computer won!";
    console.log(message)
  } else if (
    (userMove === paper && computerMove === rock) ||
    (userMove === scissor && computerMove === paper) ||
    (userMove === rock && computerMove === scissor)
  ) {
    message = "Congrats! You just won! You beat the computer.";
    console.log(message)
  } else {
    message = "You tied! Wow!"
    console.log(message);
  }

  resultDisplay.textContent = "Result: " + message;
}
