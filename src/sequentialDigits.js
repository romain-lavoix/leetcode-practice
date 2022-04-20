/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
let sequentialDigits = (low, high) => {
    const digits = "123456789";
    let convert = (i, j) => Number.parseInt(digits.substring(i,j));
    const lowLen = `${low}`.length;
    const highLen = `${high}`.length;
    const sequence = [];

    for (let len = lowLen; len <= highLen; len++) {
        for (let i = 0; i + len <= 9; i++) {
            const number = convert(i, i + len);
            if (number > high) {
                return sequence;
            } else if (number < low) {
                continue;
            } else {
                sequence.push(number);
            }
        }
    }

    return sequence;
};

console.log(sequentialDigits(100, 300));
console.log(sequentialDigits(1000, 13000));
console.log(sequentialDigits(58, 155));