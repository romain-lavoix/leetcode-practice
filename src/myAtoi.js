/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = (s) => {
    let i = 0;

    s = s.trim();
    const negative = s[i] === '-';
    if (s[i] === '-' || s[i] === '+') {
        i++;
    }
    if (!(s[i] >= '0' && s[i] <= '9')) {
        return 0;
    }

    s = s.slice(i, s.length);
    i = 0;


    for (; i < s.length; i++) {
        if (!(s[i] >= '0' && s[i] <= "9")) {
            break;
        }
    }
    s = s.slice(0, i);
    let n = Number.parseFloat(s);
    n = negative ? -n : n;
    if (n > Math.pow(2, 31) - 1) {
        n = Math.pow(2, 31) - 1;
    }
    if (n < -Math.pow(2, 31)) {
        n = -Math.pow(2, 31);
    }
    console.log(n)
    return n;
};

myAtoi("   -42");
myAtoi("with words 1234")
myAtoi("42");
myAtoi("-42");
myAtoi("4193 with words")
myAtoi("   +0 123")

