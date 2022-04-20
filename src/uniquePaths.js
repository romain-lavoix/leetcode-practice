/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = (m, n) => {
    let matrix = new Array(m).fill(0)
    matrix = matrix.map( ar => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j];
            }
        }
    }

    return matrix[m -1][n - 1];
};


let uniquePathsBF = (m, n) => {
    if (m === 1 || n === 1) {
        return 1;
    }
    return uniquePaths(m -1, n) + uniquePaths(m, n - 1);
}



// 28
console.log(uniquePaths(3, 7))

// 3
console.log(uniquePaths(3, 2))

// 35
console.log(uniquePaths(4, 5))

console.log(uniquePaths(10, 10))
