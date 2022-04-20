/**
 * @param {number} capacity
 */
var LRUCache2 = function(capacity) {
    this.iteration = 0;
    this.cache = {};
    this.priority = {};
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache2.prototype.get = function(key) {
    if (this.cache[key] !== undefined) {
        this.priority[key] = this.iteration++;
        return this.cache[key];
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache2.prototype.put = function(key, value) {
    if (Object.keys(this.cache).length < this.capacity) {
        this.cache[key] = value;
        this.priority[key] = this.iteration++
    } else {
        let min = Infinity;
        let minKey;
        if (this.cache[key] !== undefined) {
            this.priority[key]++;
            this.cache[key] = value;
        } else {
            Object.keys(this.priority).forEach(key => {
                if (this.priority[key] < min) {
                    min = this.priority[key];
                    minKey = key;
                }
            });
            delete this.priority[minKey];
            this.priority[key] = this.iteration++;
            delete this.cache[minKey];
            this.cache[key] = value;
        }
    }
};

/**
 * Your LRUCache2 object will be instantiated and called as such:
 * var obj = new LRUCache2(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let lRUCache = new LRUCache2(2);
lRUCache.put(1, 1); // cache is {1=1}
console.log(JSON.stringify(lRUCache.cache))
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(JSON.stringify(lRUCache.cache))
console.log(lRUCache.get(1))    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(JSON.stringify(lRUCache.cache))
console.log(lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(JSON.stringify(lRUCache.cache))
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4
console.log('---------')
lRUCache = new LRUCache2(2);
lRUCache.put(1, 0); // cache is {1=0}
console.log(JSON.stringify(lRUCache.cache))
lRUCache.put(2, 2); // cache is {1=0, 2=2}
console.log(JSON.stringify(lRUCache.cache))
console.log(lRUCache.get(1)); // return 0
lRUCache.put(3, 3); // cache is {1=0, 2=2}
console.log(JSON.stringify(lRUCache.cache))
console.log(lRUCache.get(2)); // return 0
console.log('-------')
lRUCache = new LRUCache2(2);
console.log(lRUCache.get(2)); // return -1
lRUCache.put(2, 6); // cache is {2=6}
console.log(JSON.stringify(lRUCache.cache))
console.log(lRUCache.get(1)); // return -1
lRUCache.put(1, 5); // cache is {2=6, 1=5}
console.log(JSON.stringify(lRUCache.cache))
lRUCache.put(1, 2); // cache is {1=2, 1=5}
console.log(JSON.stringify(lRUCache.cache))
console.log(lRUCache.get(1)); // return 2
console.log(lRUCache.get(2)); // return 6
