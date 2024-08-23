const graph: Record<string, string[]> = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};
const visited = new Set<string>();
let count = 0;
const components: Record<string, number> = {};

function dfs(node: string) {
  if (visited.has(node)) return;

  visited.add(node);
  components[node] = count;

  const neighbours = graph[node];
  for (const neighbour of neighbours) {
    dfs(neighbour);
  }
}

function findComponents() {
  for (const node of Object.keys(graph)) {
    if (!visited.has(node)) {
      count++;
      dfs(node);
    }
  }

  return { count, components };
}

const result = findComponents();
console.log(result);
