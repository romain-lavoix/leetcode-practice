/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] === 0) {
                nums[j] = nums[j + 1];
                nums[j + 1] = 0;
            }
        }
    }
    console.log(nums)
};

moveZeroes([0,1,0,3,12])
moveZeroes([0,0,1])