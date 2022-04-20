/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {
        1: 1,
        2: 2
    };

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }

    return memo[n];
};

let climbStairsBf = (n) => {
    return bruteForceRec(0, n);
}

let bruteForceRec = (i, n) => {
    if (i > n) {
        return 0;
    }
    if (i === n) {
        return 1;
    }

    const oneSteps = bruteForceRec(i + 1, n);
    const twoSteps =  bruteForceRec(i + 2, n);

    return oneSteps + twoSteps;
}

console.log(climbStairsBf(3));

