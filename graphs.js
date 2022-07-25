/*
Check if there is a path between the source and destination node of the graph.
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