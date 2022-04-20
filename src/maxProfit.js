/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [max_profit, highest_price, buying_price] = [0, 0, 0, 0]

    for (let i = 0; i < prices.length - 1; i++) {
        buying_price = prices[i];
        if (buying_price >= highest_price) {
            highest_price = 0;
            for (let j = i + 1; j < prices.length; j++) {
                highest_price = highest_price < prices[j] ? prices[j] : highest_price;
            }
        }
        max_profit = highest_price - buying_price > max_profit ? highest_price - buying_price : max_profit;
        max_profit = max_profit < 0 ? 0 : max_profit;
    }

    return max_profit;
};

console.log(maxProfit([1,2])) // 5
console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0

let ar = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let i = 1; i < 100000; i++ ) {
    ar[i] = getRndInteger(0, 10000)
}
console.log(maxProfit(ar)) // 0
