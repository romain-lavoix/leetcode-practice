/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid[0].length;
    const n = grid.length;
    let islands = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                ++islands;
                grid = dfs(grid, i, j);
            }
        }
    }

    return islands;
};

let dfs = (grid, i, j) => {
    if (!(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== '1')) {
        grid[i][j] = '-1';
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
        dfs(grid, i + 1, j);
        return grid;
    }
}

// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslandsBFS = function(grid) {
//     const m = grid[0].length;
//     const n = grid.length;
//     let islands = 0;
//     let queue = [];
//     let isValidNode = (grid, i, j) => (i >= 0 && i < n && j >=0 && j < m && grid[i][j] === '1');
//     let x,y,node;
//
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (grid[i][j] === '1') {
//                 ++islands;
//                 queue.push([i, j]);
//                 while (queue.length) {
//                     node = queue.shift();
//                     x = node[0];
//                     y = node[1];
//                     if (grid[x][y] === 'X') {
//                         continue;
//                     }
//                     grid[x][y] = 'X'; // mark as visited
//                     const neighbors = [[x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y]];
//                     const valid_neighbors = neighbors.filter(neighbor => isValidNode(grid, neighbor[0], neighbor[1]))
//                     valid_neighbors.forEach(neighbor => queue.push(neighbor));
//                 }
//             }
//         }
//     }
//     return islands;
// }

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numsIslandsDFS = function(grid) {
    const m = grid[0].length;
    const n = grid.length;
    let islands = 0;
    let stack = [];
    let isValidNode = (grid, i, j) => (i >= 0 && i < n && j >=0 && j < m && grid[i][j] === '1');
    let x,y,node;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                ++islands;
                stack.push([i, j]);
                while (stack.length) {
                    node = stack.pop();
                    x = node[0];
                    y = node[1];
                    if (grid[x][y] === 'X') {
                        continue;
                    }
                    grid[x][y] = 'X'; // mark as visited
                    const neighbors = [[x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y]];
                    const valid_neighbors = neighbors.filter(neighbor => isValidNode(grid, neighbor[0], neighbor[1]))
                    valid_neighbors.forEach(neighbor => stack.push(neighbor));
                }
            }
        }
    }
    return islands;
}


// 1
console.log(numsIslandsDFS([
    ["1","1","1","1","1"],
    ["1","1","1","1","1"],
    ["1","1","1","1","1"],
    ["1","1","1","1","1"]
]));


// 1
console.log(numsIslandsDFS([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]));

// 3
console.log(numsIslandsDFS([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["","0","0","1","1"]
]));

console.log(numsIslandsDFS([["1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","0"],["1","0","1","1","1","0","0","1","1","0","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","1","1","1","1","1","1","0","1","1","1","0","1","1","1","0","1","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","0","1","1","0","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","1","1"],["1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["0","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","1","1","1","1","1"],["1","0","1","1","1","1","1","0","1","1","1","0","1","1","1","1","0","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]))