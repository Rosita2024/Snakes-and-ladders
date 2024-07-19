/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let currentPlayerIndex = 0;
/*------------------------ Cached Element References ------------------------*/

const boardDisplay = document.querySelector("#board");

const players = [
  { id: "player1", position: 0, element: document.createElement("div") },
  // { id: "player2", position: 0, element: document.createElement("div") },
];
/*-------------------------------- Start Game --------------------------------*/
init();
/*-------------------------------- Functions --------------------------------*/
function init() {
  renderBoard();
}

function renderBoard() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < 10; j++) {
        const cellNum = (10 - i) * 10 - j;
        const boxEl = document.createElement("div");
        boxEl.textContent = cellNum;
        boxEl.className = "box";
        boxEl.id = `box-${cellNum}`
        boardDisplay.append(boxEl);
      }
    } else {
      for (let j = 10; j > 0; j--) {
        const cellNum = (10 - i) * 10 - j + 1;

        const boxEl = document.createElement("div");
        boxEl.textContent = cellNum;
        boxEl.className = "box";
        boxEl.id = `box-${cellNum}`
        boardDisplay.append(boxEl);
      }
    }
  }
}


/*----------------------------- Event Listeners -----------------------------*/
