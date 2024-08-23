const graph: Record<string, string[]> = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};
const visited = new Set<string>();

function dfs(node: string) {
  if (visited.has(node)) return;

  visited.add(node);

  const neighbours = graph[node];
  console.log({ node, visited, neighbours });
  for (const neighbour of neighbours) {
    dfs(neighbour);
  }
}

const start_node = "A";
dfs(start_node);
