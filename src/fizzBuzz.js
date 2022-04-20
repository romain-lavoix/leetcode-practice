/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const array = [];
    let element;
    for (let i = 1; i <= n; i++) {
        if (!(i % 15)) {
            element = 'FizzBuzz';
        } else if (!(i % 3)) {
            element = 'Fizz'
        } else if (!(i % 5)) {
            element = 'Buzz';
        } else {
            element = i.toString();
        }
        array.push(element)
    }
    return array;
};


export {fizzBuzz}