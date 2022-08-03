/*
Check if there is a path between the source and destination node of the directed graph.
*/
const hasPath = (graph, src, dst) => {
  //   const stack = [src];

  //   while (stack.length) {
  //     const curr = stack.pop();
  //     if (curr === dst) return true;
  //     for (let neighbor of graph[curr]) {
  //       stack.push(neighbor);
  //     }
  //   }
  //   return false;

  //   const queue = [src];

  //   while (queue.length) {
  //     const curr = queue.shift();
  //     if (curr === dst) return true;
  //     for (let neighbor of graph[curr]) {
  //       queue.push(neighbor);
  //     }
  //   }
  //   return false;
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
};

/*
Check if there is a path between two nodes in an undirected graph.
*/
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  // const stack = [nodeA];
  const hasSeen = new Set();


  return findPath(graph, hasSeen, nodeA, nodeB);

  //   while (stack.length) {
  //     const curr = stack.pop();
  //     if (curr === nodeB) return true;

  //     if (!hasSeen.has(curr)) {
  //       hasSeen.add(curr);
  //     } else {
  //       continue;
  //     }

  //     for (let neighbor of graph[curr]) {
  //       stack.push(neighbor);
  //     }
  //   }

  //   return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const findPath = (graph, hasSeen, nodeA, nodeB) => {
  if (nodeA === nodeB) return true;
  if (hasSeen.has(nodeA)) return;

  hasSeen.add(nodeA);

  for (let neighbor of graph[nodeA]) {
    if (findPath(graph, hasSeen, neighbor, nodeB)) {
      return true;
    }
  }
  return false;
};

/*
Return the number of connected components within an undirected graph.
*/
const connectedComponentsCount = (graph) => {
  const hasVisited = new Set();
  let count = 0;

  for (let node in graph) {
    if (traverseComponent(graph, node, hasVisited)) {
      count++;
    }
  }

  return count;
};

const traverseComponent = (graph, curr, visited) => {
  if (visited.has(String(curr))) return false;
  visited.add(String(curr));

  for (let neighbor of graph[curr]) {
    traverseComponent(graph, neighbor, visited);
  }
  return true;
};