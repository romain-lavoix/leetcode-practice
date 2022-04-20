/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);

    return ([...s1].filter(i => s2.has(i)));
};

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));

let ar1 = [];
let ar2 = [];

for (let i = 0; i < 1000; i++) {
    ar1.push(i);
}
for (let i = 1; i < 999; i++) {
    ar2.push(i - 1);
}

console.log(JSON.stringify(ar1));

console.log(JSON.stringify(ar2));

// console.log(intersection(ar1, ar2));
