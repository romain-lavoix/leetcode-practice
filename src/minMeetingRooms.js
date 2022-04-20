/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let max = 0
    let rooms = 0
    const ends = intervals.map(e=>e[1]).sort((a,b)=>a-b)
    const starts = intervals.map(e=>e[0]).sort((a,b)=>a-b)
    let [i,j] = [0,0]

    while (i < intervals.length && j < intervals.length) {
        if (starts[i] < ends[j]) {
            i++;
            rooms++
        } else {
            j++
            rooms--
        }
        max = max < rooms ? rooms : max
    }
    return max
};

console.log(minMeetingRooms([[0,20],[10,25],[22,40],[25,45],[30,50]])) // 3