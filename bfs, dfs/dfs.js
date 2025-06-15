function dfsRecursive(node, graph, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  console.log(node);
  for (const neighbor of graph[node]) {
    dfsRecursive(neighbor, graph, visited);
  }
}

function dfsStack(start, graph) {
  const visited = new Set();
  const stack = [start];
  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    console.log(node);
    for (let i = graph[node].length - 1; i >= 0; i--) {
      const neighbor = graph[node][i];
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

function dfsIterative(graph, start) {
  const visited = Array(graph.length).fill(false);
  const stack = [start];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      console.log(node);
      // 인접한 노드를 뒤에서부터 넣어야 앞부터 방문됨
      for (let i = graph.length - 1; i >= 0; i--) {
        if (graph[node][i] === 1 && !visited[i]) {
          stack.push(i);
        }
      }
    }
  }
}

// dfsIterative(graph, 0);
