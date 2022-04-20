/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {

    let j = 0;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[j]) {
            j += 1;
            nums[j] = nums[i]
            k++;
        }
    }
    return k + 1
};

export { removeDuplicates };
