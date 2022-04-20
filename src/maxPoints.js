/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let findSlope = (a,b) => (b[1] - a[1]) / (b[0] - a[0])
    let findYIntercept = (a, slope) => a[1] - slope * a[0]
    let max = 0;
    let slope;
    let yt;
    let point;
    let map = new Map();
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (map.get(j) === undefined) {
                map.set(j, new Set());
            }
            if (i !== j && !map.get(i).has(j) && !map.get(j).has(i)) {
                let s = map.get(i);
                s.add(j);
                map.set(i, s);
                s = map.get(i);
                s.add(i);
                map.set(i, s);

                slope = findSlope(points[i], points[j]);
                yt = findYIntercept(points[i], slope);
                let length1 = Math.abs(points[i][0] - points[j][0]);
                let length2 = Math.abs(points[i][1] - points[j][1]);
                console.log(`[${points[i][0]},${points[i][1]}],[${points[j][0]},${points[j][1]}] => (${slope},${yt}) abs = (${length1}, ${length2})`)
                if (length1 <= 1  && length2 <= 1) {
                    ++max;
                }
            }
        }
    }
    return max + 1
};

// console.log(Object.fromEntries(map))


console.log(maxPoints([[0,0],[1,-1],[1,1]])) // 2

// console.log(maxPoints([[1,0],[0,0]])) // 2
// console.log(maxPoints([[1,1]])) // 1
// console.log(maxPoints([[1,1],[2,2]])) // 2
// console.log(maxPoints([[1,1],[2,2],[3,3]])) // 3
// console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])) // 4
