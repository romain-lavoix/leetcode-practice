/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const lines_length = matrix.length;
    const columns_length = matrix[0].length;
    let is_col = false;

    for (let l = 0; l < lines_length; l++) {
        if (matrix[l][0] == 0) {
            is_col = true;
        }
        for (let c = 1; c < columns_length; c++) {
            if (matrix[l][c] === 0) {
                matrix[l][0] = 0;
                matrix[0][c] = 0;
            }
        }
    }

    for (let c = 1; c < columns_length; c++) {
        if (matrix[0][c] === 0) {
            for (let l = 1; l < lines_length; l++) {
                matrix[l][c] = 0;
            }
        }
    }

    for (let l = 1; l < lines_length; l++) {
        if (matrix[l][0] === 0) {
            for (let c = 1; c < columns_length; c++) {
                matrix[l][c] = 0;
            }
        }
    }

    if (matrix[0][0] == 0) {
        for (let c = 0; c < columns_length; c++) {
            matrix[0][c] = 0;
        }
    }

    if (is_col) {
        for (let l = 0; l < lines_length; l++) {
            matrix[l][0] = 0;
        }
    }

    // console.log(JSON.stringify(matrix))
};

// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])