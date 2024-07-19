/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let currentPlayerIndex = 0;
const player = {
  currentPosition: 1,
  currentBoxElement: null,
};
/*------------------------ Cached Element References ------------------------*/

const boardDisplay = document.querySelector("#board");
const rollDiceBtn = document.querySelector("#rollDice");
/*-------------------------------- Start Game --------------------------------*/
init();

/*-------------------------------- Functions --------------------------------*/
function init() {
  renderBoard();
  rollDiceBtn.addEventListener("click", playTurn);
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
function playTurn() {
  const diceRoll = rollDice();
  player.currentPosition += diceRoll;
  const newBoxId = `box-${player.currentPosition}`;
  const newBoxElement = document.getElementById(newBoxId);
  if (player.currentBoxElement) {
    player.currentBoxElement.classList.remove("player1");
  }
  if (newBoxElement) {
    newBoxElement.classList.add("player1");
  }
  player.currentBoxElement = newBoxElement;
}
/*----------------------------- Event Listeners -----------------------------*/
