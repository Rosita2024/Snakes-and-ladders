/*-------------------------------- Constants --------------------------------*/
let board = [];

/*---------------------------- Variables (state) ----------------------------*/

// boxNumber();

/*------------------------ Cached Element References ------------------------*/
//For the UI
const boardDisplay = document.querySelector("#board");
/*-------------------------------- Start Game --------------------------------*/
init(); 
/*-------------------------------- Functions --------------------------------*/
function init() {
  resetBoard();
  render();
}

function resetBoard() {
  board = [];
  for (let i = 1; i <= 100; i++) {
    board.push(i);
  }
}
function render() {
  boardDisplay.innerHTML = "";
  board.forEach((number) => {
    const boxEl = document.createElement("div");
    boxEl.className = "box";
    boxEl.textContent = number;
    boardDisplay.append(boxEl);
  });
}
// function init (){
//     let board = []
//     for(let i=0; i<gameBoard.row; i++){
//         let rowArray =[]
//         if(i%2 ===0){
//             return
//         }
//         for(let j=0; j<gameBoard.column; j++){
//             rowArray.push(j)
//         }
//         board.push(rowArray)
//     } console.log(board);
// }
// function init() {
//     let board = [];

//     for (let i = 0; i < gameBoard.row; i++) {
//       let rowArray = [];
//       for (let j = 0; j < gameBoard.column; j++) {
//           // ! Here you have the condition for if the current row is even or not. If it's an even number (Remember that we're starting from 0), you push the numbers normally. If not, you do the reverse way via unshift.
//           if (i % 2 === 0) {
//               // ! j + (i*10) Why multiply by 10? That's because we kept adding 0-9 initially. Since the first row numbers are all less than 10, you can think of it as 0 + 1, 0 + 2, 0 + 3, etc.
//               // ! But since every new row starts with 10, 20, 30, etc, you can multiply the initial row number with 10, 1 * 10, 2 * 10, etc, then add to the current row number.
//               rowArray.push(j + (i * 10));
//           } else {
//               rowArray.unshift(j + (i * 10));
//           }
//       }
//       board.push(rowArray);
//     }
//     console.log(board);
// }

/*----------------------------- Event Listeners -----------------------------*/
