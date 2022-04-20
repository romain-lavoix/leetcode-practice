/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let low = weights.reduce((a,b) => Math.max(a,b));
    let high = weights.reduce((a,b) => a + b);
    let mid, total, res;

    while (low < high) {
        mid = Math.floor((low + high) / 2)
        total = 0;
        res = 1;
        weights.forEach(weight => {
            if (total + weight > mid) {
                res++;
                total = weight;
            } else {
                total += weight;
            }
        })
        if (res <= days) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

// 6
console.log(shipWithinDays([3,2,2,4,1,4], 3));
// // 3
// console.log(shipWithinDays([1,2,3,1,1], 4));
// // 15
// console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5));