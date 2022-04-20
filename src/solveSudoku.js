let is_valid = (i, j, candidate, board) => {
    // line
    for (let j_loop = 0; j_loop < 9; j_loop++) {
        if (parseInt(board[i][j_loop]) === candidate) {
            return false;
        }
    }
    // column
    for (let i_loop = 0; i_loop < 9; i_loop++) {
        if (parseInt(board[i_loop][j]) === candidate) {
            return false;
        }
    }
    // square
    const i_square = Math.floor(i / 3) * 3;
    const j_square = Math.floor(j / 3) * 3;

    for (let i_loop = i_square; i_loop < i_square + 3; i_loop++)
        for (let j_loop = j_square; j_loop < j_square + 3; j_loop++) {
            if (parseInt(board[i_loop][j_loop]) === candidate) {
                return false;
            }
        }

    return true;
}

/**
 * @param {character[][]} board
 // * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const length = 9;

    if (!board || board.length == 0) {
        return;
    }

    for (let i = 0; i <= length - 1; i++) {
        for (let j = 0; j <= length - 1; j++) {
            if (board[i][j] !== '.') {
                continue;
            }

            // let's make a list of valid candidate for a single cell
            for (let candidate = 1; candidate <= 9; candidate++) {
                if (is_valid(i, j, candidate, board)) {
                    // place candidate
                    board[i][j] = candidate.toString();
                    if (solveSudoku(board)) {
                        return true;
                    } else {
                        // remove candidate
                        board[i][j] = '.';
                    }
                }
            }
            return false;
        }
    }
    return true;
}

solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])
