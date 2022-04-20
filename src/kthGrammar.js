/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
let kthGrammar = function(n, k) {
    if(n===1,k===1){
        return 0
    }
    let mid = Math.pow(2,n-1)/2

    if(k<= mid)
        return kthGrammar(n-1,k)
    else{
        return !kthGrammar(n-1,k-mid)
    }

};

console.log(kthGrammar(10, 20))

// 0
console.log(kthGrammar(1, 1))
// 0
console.log(kthGrammar(2, 1))
// 1
console.log(kthGrammar(2, 2))
// 1
console.log(kthGrammar(10, 2))
// 1
console.log(kthGrammar(30, 2))
// 1
console.log(kthGrammar(3, 3))
// 1
console.log(kthGrammar(30, 434991989))