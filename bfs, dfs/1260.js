const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M, K] = input[0].split(" ").map(Number);

const graph = {};
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfsArray = [];
const bfsArray = [];

function dfsRecursive(node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  dfsArray.push(node);
  for (const neighbor of graph[node]) {
    dfsRecursive(neighbor, visited);
  }
}

function bfsOptimized(start) {
  const visited = new Set();
  const queue = [start];
  let index = 0;
  while (index < queue.length) {
    const node = queue[index++];
    if (visited.has(node)) continue;
    visited.add(node);
    bfsArray.push(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

dfsRecursive(K);
bfsOptimized(K);

console.log(dfsArray.join(" "));
console.log(bfsArray.join(" "));
