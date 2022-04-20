/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = Math.floor(nums.length / 2);

    while (i < nums.length && nums[i] > target) {
        if (nums[i] > target) {
            i = Math.floor(nums.splice(0, i) / 2);
        } else {
            i = Math.floor(nums.splice(i, nums.length - 1) / 2);
        }
    }

    return i;
};

