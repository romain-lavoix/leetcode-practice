/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let pivot;

    while (left < right) {
        pivot = Math.floor((left + right) / 2);

        if (nums[pivot] > nums[pivot + 1]) {
            return nums[pivot + 1];
        } else if (nums[pivot] < nums[left]) {
            right = pivot - 1;
        }
    }

    return nums[right];
};

// console.log(findMin([3,4,5,1,2]))
// console.log(findMin([4,5,6,7,0,1,2]))
// console.log(findMin([11,13,15,17]))
console.log(findMin([0,1,2,3,4,5]))