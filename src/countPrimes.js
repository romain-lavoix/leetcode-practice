/**
 * @param {number} n
 * @return {number}
 */
var countPrimes_slow = function(n) {
    let count = 1; // we start at 2, which is a prime number
    if (n <= 2) {
        return 0;
    }
    for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (j > Math.floor(Math.sqrt(i))) {
                ++count;
                break;
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    return count;
};

var countPrimes = function(n) {
    if (n <= 2) {
        return 0
    }

    const numbers = new Uint8Array(n).fill(0);

    for (let i = 2; i <= Math.floor(Math.sqrt((n))); ++i) {
        if (!numbers[i]) {
            for (let j = i * i; j < n; j = j + i) {
                numbers[j] = 1;
            }
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!numbers[i]) {
            ++count;
        }
    }

    return count;
}

export {countPrimes}