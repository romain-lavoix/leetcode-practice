/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = {};
    let fromStep0 = rec(cost, 0, 0);
    let fromStep1 = rec(cost, 0, 1);

    return Math.min(fromStep0, fromStep1);
};


var rec = (cost, total, step) => {
    if (step > cost.length - 1) {
        return total;
    }
    total += cost[step];
    return Math.min(rec(cost, total, step + 1), rec(cost, total, step + 2))
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let cost = [];
for (let i = 0; i < 1000; i++) {
    cost[i] = Math.round(getRandomArbitrary(0, 999));
}

// 15
console.log(minCostClimbingStairs([10,15,20]));
// 6
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
// 193864
console.log(minCostClimbingStairs(cost));

// console.log(JSON.stringify(cost));