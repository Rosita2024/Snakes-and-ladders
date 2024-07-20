/*-------------------------------- Constants --------------------------------*/
let rollingSound = new Audio('Audio/dice-142528.mp3')

/*---------------------------- Variables (state) ----------------------------*/
let currentPlayerIndex = 0;
const player1 = {
  name: "player1",
  currentPosition: 1,
  currentBoxElement: null,
};
const player2 = {
  name: "player2",
  currentPosition: 1,
  currentBoxElement: null,
};
let turn = player1;
const snakesAndLadders = { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78, 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 99 };
/*------------------------ Cached Element References ------------------------*/
const player1Dice = document.querySelector("#player1Dice")
const player2Dice = document.querySelector("#player2Dice")
const boardDisplay = document.querySelector("#board");
const player1RollDiceBtn = document.querySelector("#Player1RollDice");
const player2RollDiceBtn = document.querySelector("#Player2RollDice");
const message = document.querySelector("#message");
const newGame = document.querySelector("#newGame")
/*-------------------------------- Start Game --------------------------------*/
init();

/*-------------------------------- Functions --------------------------------*/
function init() {
  renderBoard();
  player1RollDiceBtn.addEventListener("click", player1Turn);
  player2RollDiceBtn.addEventListener("click", player2Turn);
  newGame.addEventListener("click", reset)
}

function renderBoard() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < 10; j++) {
        const cellNum = (10 - i) * 10 - j;
        const boxEl = document.createElement("div");
        // boxEl.textContent = cellNum;
        boxEl.className = "box";
        boxEl.id = `box-${cellNum}`;
        boardDisplay.append(boxEl);
      }
    } else {
      for (let j = 10; j > 0; j--) {
        const cellNum = (10 - i) * 10 - j + 1;

        const boxEl = document.createElement("div");
        // boxEl.textContent = cellNum;
        boxEl.className = "box";
        boxEl.id = `box-${cellNum}`;
        boardDisplay.append(boxEl);
      }
    }
  }
}
function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
function player1Turn() {
  message.textContent = "Player's 2 Turn" 
  if (turn.name === "player2") {
    return;
  }
  rollingSound.play();
  let newRoll = rollDice();
  player1Dice.textContent = newRoll
  player1.currentPosition += newRoll;
  if (snakesAndLadders[player1.currentPosition]) {
    player1.currentPosition = snakesAndLadders[player1.currentPosition]
  }
  const newBoxId = `box-${player1.currentPosition}`;
  const newBoxElement = document.getElementById(newBoxId);
  if (player1.currentBoxElement) {
    player1.currentBoxElement.classList.remove("player1");
  }
  if (newBoxElement) {
    newBoxElement.classList.add("player1");
  }
  player1.currentBoxElement = newBoxElement;
  turn = player2;
  if (player1.currentPosition >99){
    return message.textContent= "Congratulation Player 1 Win!"
  }
}
function player2Turn() {
  message.textContent = "Player's 1 Turn" 
  if (turn.name === "player1") {
    return;
  }
  rollingSound.play();
  let newRoll = rollDice();
  player2Dice.textContent = newRoll
  player2.currentPosition += newRoll;
  if (snakesAndLadders[player2.currentPosition]) {
    player2.currentPosition = snakesAndLadders[player2.currentPosition]
  }
  const newBoxId = `box-${player2.currentPosition}`;
  const newBoxElement = document.getElementById(newBoxId);
  if (player2.currentBoxElement) {
    player2.currentBoxElement.classList.remove("player2");
  }
  if (newBoxElement) {
    newBoxElement.classList.add("player2");
  }
  player2.currentBoxElement = newBoxElement;
  turn = player1;
  if (player2.currentPosition >99){
    return message.textContent= "Congratulation Player 2 Win!"
  }

}
function reset (){
 player1.currentPosition = 1
 player2.currentPosition = 1
 player1.currentBoxElement.classList.remove("player1");
 player2.currentBoxElement.classList.remove("player2");
 player1Dice.textContent = ""
 player2Dice.textContent = ""
 turn = player1;
}
/*----------------------------- Event Listeners -----------------------------*/
