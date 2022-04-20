/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (var i = 0; i < s.length / 2; i++) {
        var tmp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = tmp;
    }
    console.log(s);
}



reverseString('romain')