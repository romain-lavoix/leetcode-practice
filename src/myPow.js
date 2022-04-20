/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = (x, n) => {
    if (n < 0) {
        n = -n;
        x = 1/x;
    }

    return rec(x, n);
};

let rec = (x, n) => {
    if (n === 0) {
        return 1.0;
    }
    let half = rec(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}

console.log(myPow(2.00000, 10));
console.log(myPow(-2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));

console.log(myPow(-1.00000, 2147483647));
console.log(myPow(1.00000, 2147483647));
