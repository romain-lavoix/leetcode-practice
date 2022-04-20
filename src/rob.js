/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = (nums) => {
    const memo = {};

    memo[0] = nums[0];
    memo[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1])
    }

    return memo[nums.length - 1];
}

let bigArray = () => {
    return new Array(100).fill(0).map(a => Math.floor(Math.random() * 400))
}

// // 4
// console.log(rob([1,2,3]));
// // 12
// console.log(rob([2,7,9,3,1]));
// // 45
// console.log(rob([2,7,9,3,1,2,7,9,3,1,2,7,9,3,1,2,7,9,3,1]));
//
// // 12030
// console.log(rob([343, 160, 30, 30, 228, 13, 227, 233, 295, 234, 173, 368, 247, 56, 34, 285, 288, 374, 33, 396, 390, 234, 207, 259, 327, 219, 303, 268, 89, 323, 54, 151, 241, 13, 137, 331, 277, 198, 158, 314, 391, 307, 297, 216, 123, 19, 297, 337, 389, 323, 297, 383, 142, 196, 290, 34, 291, 350, 377, 302, 116, 39, 299, 125, 279, 290, 63, 212, 153, 216, 55, 347, 69, 272, 123, 194, 179, 399, 245, 105, 238, 133, 92, 107, 0, 194, 346, 112, 150, 227, 249, 391, 208, 295, 21, 16, 159, 247, 220, 206]));



/**
 * @param {number[]} nums
 * @return {number}
 */
let rob_rec = (nums, i=0) => {
    if (i >= nums.length) {
        return 0;
    }

    const left = rob(nums, i + 1);
    const right = i + 2 !== nums.length - 1 ? rob(nums, i + 2) + nums[i] : 0;

    return Math.max(left, right);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
let rob2 = (nums) => {
    const memo = {};

    memo[0] = nums[0];
    memo[1] = Math.max(memo[0], nums[1]);
    memo[2] = Math.max(memo[1], nums[2]);

    for (let i = 3; i < nums.length; i++) {
        const left = i + 2 !== nums.length - 1 ? memo[i - 2] + nums[i] : 0;
        const right = memo[i - 1];
        memo[i] = Math.max(left, right);
    }

    return memo[nums.length - 1];
}


// 1
console.log(rob_rec([1]));
// 2
console.log(rob_rec([1,2]));
// 3
console.log(rob_rec([1,2,3]));
// 6
console.log(rob_rec([4,3,2,1]));
// 6
console.log(rob_rec([1,2,3,4]));

// 12373
console.log(rob_rec([343, 160, 30, 30, 228, 13, 227, 233, 295, 234, 173, 368, 247, 56, 34, 285, 288, 374, 33, 396, 390, 234, 207, 259, 327, 219, 303, 268, 89, 323, 54, 151, 241, 13, 137, 331, 277, 198, 158, 314, 391, 307, 297, 216, 123, 19, 297, 337, 389, 323, 297, 383, 142, 196, 290, 34, 291, 350, 377, 302, 116, 39, 299, 125, 279, 290, 63, 212, 153, 216, 55, 347, 69, 272, 123, 194, 179, 399, 245, 105, 238, 133, 92, 107, 0, 194, 346, 112, 150, 227, 249, 391, 208, 295, 21, 16, 159, 247, 220, 206]));
