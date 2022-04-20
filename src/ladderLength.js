function replaceAt(s, i, c) {
    const arr = [...s];  // Convert string to array
    arr[i] = c;          // Set char c at pos i
    return arr.join(''); // Back to string
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    let map = {};
    let queue = [];
    let visited = {};
    let set = new Set();

    for (const word of wordList) {
        set.add(word);
        for (let i = 0; i < word.length; i++) {
            const w = replaceAt(word, i, '*');
            if (map[w] === undefined) {
                map[w] = [word];
            } else {
                map[w].push(word);
            }
        }
    }

    if (!set.has(endWord)) {
        return 0;
    }

    queue.push([beginWord, 1]);

    while (queue.length) {
        const [current_word, n] = queue.shift();

        if (visited[current_word]) {
            continue;
        }
        if (current_word === endWord) {
            return n;
        }

        visited[current_word] = true;
        for (let i = 0; i < current_word.length; i++) {
            const w = replaceAt(current_word, i, '*');
            if (map[w]) {
                map[w].forEach(word => queue.push([word, n + 1]))
            }
        }
    }
    return 0;
};



console.log(ladderLength("hit", "cog",["hot","dot","dog","lot","log","cog"]))
console.log(ladderLength("hit", "cog",["hot","dot","dog","lot","log"]))
