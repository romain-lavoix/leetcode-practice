/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)) return -1;
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value)
    return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) this.map.delete(this.map.keys().next().value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
console.log([...lRUCache.map.entries()]);
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log([...lRUCache.map.entries()]);
console.log(lRUCache.get(1))    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log([...lRUCache.map.entries()]);
console.log(lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log([...lRUCache.map.entries()]);
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4
console.log('---------')
lRUCache = new LRUCache(2);
lRUCache.put(1, 0); // cache is {1=0}
console.log([...lRUCache.map.entries()]);
lRUCache.put(2, 2); // cache is {1=0, 2=2}
console.log([...lRUCache.map.entries()]);
console.log(lRUCache.get(1)); // return 0
lRUCache.put(3, 3); // cache is {1=0, 2=2}
console.log([...lRUCache.map.entries()]);
console.log(lRUCache.get(2)); // return 0
console.log('-------')
lRUCache = new LRUCache(2);
console.log(lRUCache.get(2)); // return -1
lRUCache.put(2, 6); // cache is {2=6}
console.log([...lRUCache.map.entries()]);
console.log(lRUCache.get(1)); // return -1
lRUCache.put(1, 5); // cache is {2=6, 1=5}
console.log([...lRUCache.map.entries()]);
lRUCache.put(1, 2); // cache is {1=2, 2=6}
console.log([...lRUCache.map.entries()]);
console.log(lRUCache.get(1)); // return 2
console.log(lRUCache.get(2)); // return 6