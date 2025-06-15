// 큐와 방문 배열 이용
function bfs(start, graph) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    console.log(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

function bfsOptimized(start, graph) {
  const visited = new Set();
  const queue = [start];
  let index = 0;
  while (index < queue.length) {
    const node = queue[index++];
    if (visited.has(node)) continue;
    visited.add(node);
    console.log(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

function bfsWithLevel(start, graph) {
  const visited = new Set([start]);
  const queue = [[start, 0]];
  while (queue.length > 0) {
    const [node, level] = queue.shift();
    console.log(`노드 ${node}는 레벨 ${level}에 위치`);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, level + 1]);
      }
    }
  }
}
