/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = (nums) => {
    let output = [];
    backtrack(nums, output, 0);
    return output;
};

let swap = (nums, i, index) => {
    let tmp = nums[i];
    nums[i] = nums[index];
    nums[index] = tmp;
    return nums;
}

let backtrack = (nums, output, index) => {
    if (index === nums.length) {
        output.push(Array.from(nums));
    }
    for (let i = index; i < nums.length; i++) {
        nums = swap(nums, i, index);
        console.log(`swap : ${JSON.stringify(nums)}`)
        backtrack(nums, output, index + 1);
        nums = swap(nums, i, index);
        console.log(`backtrack swap : ${JSON.stringify(nums)}`)

    }
}



// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(JSON.stringify(permute([1,2,3])))
