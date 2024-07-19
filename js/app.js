/*-------------------------------- Constants --------------------------------*/

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
/*------------------------ Cached Element References ------------------------*/

const boardDisplay = document.querySelector("#board");
const player1RollDiceBtn = document.querySelector("#Player1RollDice");
const player2RollDiceBtn = document.querySelector("#Player2RollDice");
/*-------------------------------- Start Game --------------------------------*/
init();

/*-------------------------------- Functions --------------------------------*/
function init() {
  renderBoard();
  player1RollDiceBtn.addEventListener("click", player1Turn);
  player2RollDiceBtn.addEventListener("click", player2Turn);
}

function renderBoard() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < 10; j++) {
        const cellNum = (10 - i) * 10 - j;
        const boxEl = document.createElement("div");
        boxEl.textContent = cellNum;
        boxEl.className = "box";
        boxEl.id = `box-${cellNum}`;
        boardDisplay.append(boxEl);
      }
    } else {
      for (let j = 10; j > 0; j--) {
        const cellNum = (10 - i) * 10 - j + 1;

        const boxEl = document.createElement("div");
        boxEl.textContent = cellNum;
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
  if (turn.name === "player2") {
    return;
  }
  const diceRoll = rollDice();
  player1.currentPosition += diceRoll;
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
}
function player2Turn() {
  if (turn.name === "player1") {
    return;
  }
  const diceRoll = rollDice();
  player2.currentPosition += diceRoll;
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
}
/*----------------------------- Event Listeners -----------------------------*/
