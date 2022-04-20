/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let result = 0;
    let mode60 = [];

    for (let i = 0; i < 60; i++) {
        mode60[i] = 0;
    }

    let l = mode60.length;

    for (let i = 0; i < time.length; i++) {
        const mod = time[i] % 60;
        if (!mod) {
            result++;
        } else {
            mode60[mod]++;
        }
    }


    for (let i = 1; i <= l / 2; i++) {
        while (mode60[i] && mode60[l - i]) {
            mode60[i]--;
            mode60[l - 1 - i]--;
            result++;
        }
    }

    return result;
};

// 3
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]))

// 3
console.log(numPairsDivisibleBy60([60,60,60]))