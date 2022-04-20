/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals = intervals.sort((a,b) => {
        return (a[0] - b[0]);
    })
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >  intervals[i + 1][0]) {
            return false;
        }
    }
    return true;
};

console.log(canAttendMeetings([[0,30],[5,10],[15,20]]));
console.log(canAttendMeetings([[7,10],[2,4]]));