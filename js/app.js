/*-------------------------------- Constants --------------------------------*/
const gameBoard = {
    row:10,
    column:10
} //object


/*---------------------------- Variables (state) ----------------------------*/
init()


/*------------------------ Cached Element References ------------------------*/
//For the UI
const boardDisplay = document.querySelector(".board")

/*-------------------------------- Functions --------------------------------*/
function init (){
    let board = []
    for(let i=0; i<gameBoard.row; i++){
        let rowArray =[]
        if(i%2 ===0){
            return 
        }
        for(let j=0; j<gameBoard.column; j++){
            rowArray.push(j)
        }
        board.push(rowArray)
    } console.log(board);
}



/*----------------------------- Event Listeners -----------------------------*/