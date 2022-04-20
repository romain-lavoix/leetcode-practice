/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    let tmp;

    // transpose
    for (let i = 0; i < n ; i++) {
        for (let j = i + 1; j < n ; j++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp;
        }
    }

    // reflect
    for (let j = 0; j < Math.floor( n / 2); j++) {
        for (let i = 0; i < n; i++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = tmp;
        }
    }
};



rotate([[1,2,3],[4,5,6],[7,8,9]])