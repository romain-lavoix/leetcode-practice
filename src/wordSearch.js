/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, board, word, 0, 'start')) {
                return true;
            }
        }
    }

    return false;
}

let backtrack = (i, j, board, word, word_index, direction) => {
    const m = board.length;
    const n = board[0].length;

    if (word_index >= word.length) {
        return true;
    }
    if (i < 0 || i === m || j < 0 || j === n || board[i][j] !== word.charAt(word_index)) {
        return false
    }
    const letter = board[i][j];
    // console.log(`${direction} ${letter}=(${i},${j}) i=${word_index}`);

    let ret = false;
    board[i][j] = '#'

    const range_i = [0, -1, 0, 1];
    const range_j = [-1, 0, 1, 0];
    const directions = ['left', 'up', 'right', 'down']

    for (let d = 0; d < 4; d++) {
        if (backtrack(i + range_i[d], j + range_j[d], board, word, word_index + 1, directions[d])) {
            return true;
        }
    }

    board[i][j] = word.charAt(word_index);
    return false;
}

// true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'));

// true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE'));

// false
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'));

// true
console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]],"AAB"))

