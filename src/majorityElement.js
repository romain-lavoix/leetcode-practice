/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement_2 = function(nums) {
    let n = nums.length;
    let nums_count = [];
    let num;
    for (let i = 0; i < n; i++) {
        num = nums[i];
        if (nums_count[num] === undefined) {
            nums_count[num] = 1;
        } else {
            nums_count[num] += 1;
        }
        if (nums_count[num] > Math.floor(n / 2)) {
            return num;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b) => a - b);
    let n = nums.length;
    let max = 0;
    let num = undefined;
    for (let i = 0; i < n; i++) {
        if (num !== nums[i]) {
            num = nums[i];
            max = 1;
        } else {
            max += 1;
        }
        if (max > Math.floor(n/2)) {
            return nums[i]
        }
    }
}

export {majorityElement}