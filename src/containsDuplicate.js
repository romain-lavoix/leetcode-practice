/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const s = new Set();
    let num;
    for (let i = 0; i < nums.length; i++) {
        num = nums[i];
        if (s.has(num)) {
            return true;
        }
        s.add(num)
    }
    return false;
};

containsDuplicate([1,2,3,4])