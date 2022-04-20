/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // we buy a share on day 1
    let bottom_price = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {

    }

    return profit;
};

// // 7
// console.log(JSON.stringify(maxProfit([7,1,5,3,6,4])));
//
// // 4
// console.log(JSON.stringify(maxProfit([1,2,3,4,5])));
//
// // 0
// console.log(JSON.stringify(maxProfit([7,6,4,3,1])));

// 7
console.log(JSON.stringify(maxProfit([6,1,3,2,4,7])))