/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsWithDup = (nums) => {
    let subsets = [];
    let map = {};
    backtrack(nums, subsets, 0, [], {});
    console.log(JSON.stringify(subsets))
    return subsets;
};

let backtrack = (nums, subsets, idx= 0, candidate= [], map= {}) =>{
    if (idx === nums.length) {
        if (!map[JSON.stringify(candidate)]) {
            subsets.push(candidate);
            map[JSON.stringify(candidate)] = true;
            console.log(JSON.stringify(map));
        } else {
        }
    } else {
        backtrack(nums, subsets, idx + 1, [...candidate, nums[idx]], )
        backtrack(nums, subsets, idx + 1, candidate)
    }

}

subsetsWithDup([1,2,2])
