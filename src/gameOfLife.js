/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    let liveNeighbors = (board, l, c) => {
        let nb = 0;
        nb += board[l - 1] === undefined ? 0 : board[l - 1][c - 1] ? 1 : 0;
        nb += board[l - 1] === undefined ? 0 : board[l - 1][c] ? 1 : 0;
        nb += board[l - 1] === undefined ? 0 : board[l - 1][c + 1] ? 1 : 0;
        nb += board[l][c + 1] ? 1 : 0;
        nb += board[l + 1] === undefined ? 0 :board[l + 1][c + 1] ? 1 : 0;
        nb += board[l + 1] === undefined ? 0 :board[l + 1][c] ? 1 : 0;
        nb += board[l + 1] === undefined ? 0 :board[l + 1][c - 1] ? 1 : 0;
        nb += board[l][c - 1] ? 1 : 0;
        return nb;
    }

    let ln = 0;
    for (let line_number = 0; line_number< board.length; line_number++) {
        for (let column_number = 0; column_number < board[line_number].length; column_number++) {
            ln = liveNeighbors(board, line_number, column_number);
            if (board[line_number][column_number] === 1 && (ln < 2 || ln > 3)) {
                board[line_number][column_number] = 2 // should be 0, 2 is a flag
            } else if ((board[line_number][column_number] === 0) && ln === 3) {
                board[line_number][column_number] = null // should be 1, null is a flag
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = board[i][j] === 2 ? 0 : board[i][j];
            board[i][j] = board[i][j] === null ? 1 : board[i][j];
        }
    }
    // console.log(JSON.stringify(board));
};


gameOfLife([[1,1],[1,0]])
gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])