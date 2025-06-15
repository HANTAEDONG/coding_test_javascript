const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const vertexNum = Number(input.shift());
const edgeNum = Number(input.shift());
let visitedNum = 0;
const graph = {};

for (let i = 1; i <= vertexNum; i++) {
  graph[i] = [];
}
for (let i = 0; i < edgeNum; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
console.log(graph);

function bfsOptimized(start, graph) {
  const visited = new Set();
  console.log(visited);
  const queue = [start];
  let index = 0;
  while (index < queue.length) {
    const node = queue[index++];
    if (visited.has(node)) continue;
    visited.add(node);
    ++visitedNum;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

bfsOptimized(1, graph);
console.log(visitedNum - 1);
