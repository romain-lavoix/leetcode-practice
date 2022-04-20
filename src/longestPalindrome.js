/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = (s) => {
    let len = 0;
    const palindromes = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            const subStr = s.substring(i,j);
            if (isPalindrome(subStr) && (len < subStr.length)) {
                len = subStr.length;
                palindromes.push(subStr);
            }
        }
    }
    return palindromes.pop();
}

let isPalindrome = (s) => {
    if (s.length === 1) return s;
    let pivot = Math.floor(s.length / 2)

    for (let i = 0; i < pivot; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(longestPalindrome("a"))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("aa"))
console.log(longestPalindrome("aweufhsldjgaelruhawliuehaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhawliuaweufhsldjgaelruhawliuehaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhawliuehflasjdlfaiuweghliaweufhsldjgaelruha"))
console.log(longestPalindrome("aweufhsldjgaelruhawliuehaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhawliuaweufhsldjgaelruhawliuehaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhawliuehflasjdlfaiuweghliaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweawuehlaksjdhglfaiweflasjdaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiwelfaiuweghliawuehlaksjdhglfaiweehflasjdlfaiuweghliaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweawuehlaksjdhglfaiweflasjdaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiwelfaiuweghliawuehlaksjdhglfaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweawuehlaksjdhglfaiweflasjdaweufhsldjgaelruhawliuehflasjdlfaiuweghliawuehlaksjdhglfaiweaweufhsldjgaelruhaw"))