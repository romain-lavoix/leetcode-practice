/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = (nums) => {
    let output = [];
    backtrack(nums,output, [], 0);
    console.log(JSON.stringify(output))
    return output;
};

let backtrack = (nums, output, acc, idx) =>{
    if (idx === nums.length) {
        output.push(acc);
    } else {
        backtrack(nums, output, [...acc,nums[idx]], idx + 1)
        backtrack(nums, output, acc, idx + 1)
    }

}

subsets([1,2,3])
subsets([0])