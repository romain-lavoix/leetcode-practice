/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumBruteForce = function(nums, target) {
    let a, b;
    nums.forEach((x, j) => {
        nums.forEach((y, i) => {
            if ((i !== j) && (x + y === target)) {
                a = i;
                b = j;
            }
        })
    })
    return [a, b]
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let m = new Map();
    let x, y;
    for (let index = 0; index < nums.length; index++) {
        x = nums[index];
        if (m.get(x) != null) {
            return [index, m.get(x)]
        }
        y = target - x;
        m.set(y, index);
    }
}

export { twoSum, twoSumBruteForce };

