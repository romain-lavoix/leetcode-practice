/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let s = new Set();

    while (head) {
        if (s.has(head.val)) {
            return true;
        } else {
            s.add(head.val)
        }
        head = head.next;
    }
    return false;
};

console.log(hasCycle([3,2,0,-4]))