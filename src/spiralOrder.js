/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let output = [];
    const m = matrix.length; // i length
    const n = matrix[0].length; // j length
    let [i,j] = [0, 0];

    if (m === 1) {
        // matrix is a line
        return matrix[0];
    }

    while (output.length !== m * n) {

        // going right
        if (matrix[i][j] === 101) {
            j++
        }
        for (; (j < n - 1) && matrix[i][j] !== 101; j++) {
            output.push(matrix[i][j]);
            matrix[i][j] = 101;
        }
        if (matrix[i][j] === 101) {
            j--;
        }

        // going down
        if (matrix[i][j] === 101) {
            i++;
        }
        for (; (i < m - 1) && matrix[i][j] !== 101; i++) {
            output.push(matrix[i][j]);
            matrix[i][j] = 101;
        }
        if (matrix[i][j] === 101) {
            i--;
        }

        // going left
        if (matrix[i][j] === 101) {
            j--;
        }
        for (; (j > 0) && matrix[i][j] !== 101; j--) {
            output.push(matrix[i][j]);
            matrix[i][j] = 101;
        }
        if (matrix[i][j] === 101) {
            j++;
        }

        // going up
        if (matrix[i][j] === 101) {
            i--;
        }
        for (; (i > 0) && matrix[i][j] !== 101; i--) {
            output.push(matrix[i][j]);
            matrix[i][j] = 101;
        }
        if (matrix[i][j] === 101) {
            i++;
        }
    }

    return output;
};

export {spiralOrder}