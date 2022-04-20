/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let m = 0;

    nums.forEach(num => {
        if (m < 0 && num >= 0) {
            m = 0;
        }
        m += num;
        max = Math.max(max, m);
    })

    return max;
};

// // 6
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// // 1
// console.log(maxSubArray([1]));
// // 23
// console.log(maxSubArray([5,4,-1,7,8]));
// 23
console.log(maxSubArray([-2, -1, -1, 10, -3, 12, -2]));

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let ar = [];
for (let i = 0; i < 99999; i++) {
    ar[i] = Math.round(getRandomArbitrary(-9999, 9999));
}

// console.log(maxSubArray(ar));

// console.log(JSON.stringify(ar))