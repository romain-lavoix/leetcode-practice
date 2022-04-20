/**
 *
 * Given an integer array nums and an integer k,
 * return the k most frequent elements. You may return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    nums.forEach(num => {
        if (map.get(num) === undefined) {
            map.set(num, 1);
        } else{
            map.set(num, map.get(num) + 1);
        }
    });

    const sortedArray = [... map].sort(([key1, value1], [key2, value2]) => value2 - value1);
    const sortedMap = new Map(sortedArray)
    let keys = [...sortedMap.keys()];

    return keys.slice(0, k);
};

// [1,2]
console.log(topKFrequent([1,1,1,2,2,3]))

// [1]
console.log(topKFrequent([1], 1))

// [1,2]
console.log(topKFrequent([1,2,3,3,3], 2))