/**
 * @param {number[][]} grid
 * @return {number}
 */
let maxAreaOfIsland = (grid) => {
    let maxArea = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                const area = dfs(grid, i, j);
                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
    }

    return maxArea;
};

let dfs = (grid, i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== 1) {
        return 0;
    } else {
        grid[i][j] = 0;
        return 1 +
            dfs(grid, i -1, j) +
            dfs(grid, i, j - 1) +
            dfs(grid, i, j + 1) +
            dfs(grid, i + 1, j);
    }
}


// 6
console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))

// 0
console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]))

// 1
console.log(maxAreaOfIsland([[1]]))