/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
let countComponents = (n, edges) =>  {
    let count = 0;

    let adjList = [];
    let marked = [];

    for (let i = 0; i < n; i++) {
        adjList.push([]);
        marked.push(false);
    }

    for (const edge of edges) {
        adjList[edge[0]].push(edge[1]);
        adjList[edge[1]].push(edge[0]);
    }


    for (let i = 0; i < adjList.length; i++) {
        if (!marked[i]) {
            dfs(adjList, marked, i);
            count++;
        }
    }

    return count;
};

let dfs = (adjList, marked, i) => {
    if (!marked[i]) {
        marked[i] = true;
        for (let k = 0; k < adjList[i].length; k++) {
            dfs(adjList, marked, adjList[i][k]);
        }
    }
}

// 2
console.log(countComponents(5, [[0,1],[1,2],[3,4]]))
// 1
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]]));
// 2
console.log(countComponents(5, [[0,1],[1,2],[0,2],[3,4]]));
// 1
console.log(countComponents(5,[[0,1],[0,2],[2,3],[2,4]]));