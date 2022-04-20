/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();

    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.get(sum - k)) {
            count += map.get(sum - k);
        }
        if (map.get(sum) !== undefined) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1);
        }
    }

    return count;
};

// 2
// console.log(subarraySum([1,1,1], 2));
// 2
console.log(subarraySum([1,2,3], 3));
// 1
console.log(subarraySum([1,1,1,1,1], 5));
// 0
console.log(subarraySum([1,1,1,1], 5));

let randomNumber = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));

console.log(JSON.stringify(randomNumber));