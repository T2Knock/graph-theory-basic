function bfs(graph: Record<string, string[]>, start: string) {
  const queue = [start];
  const visited = new Set<string>();
  const result: any = [];

  while (queue.length) {
    const node = queue.shift() as string;

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
    }

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

bfs(graph, "A");
