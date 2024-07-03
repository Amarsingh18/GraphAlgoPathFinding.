export function dfs(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    const stack = [startNode];
    startNode.isVisited = true;
  
    while (stack.length) {
      const currentNode = stack.pop();
      visitedNodesInOrder.push(currentNode);
  
      if (currentNode === finishNode) return visitedNodesInOrder;
  
      const { col, row } = currentNode;
      const neighbors = getNeighbors(grid, row, col);
  
      for (const neighbor of neighbors) {
        if (!neighbor.isVisited && !neighbor.isWall) {
          neighbor.isVisited = true;
          neighbor.previousNode = currentNode;
          stack.push(neighbor);
        }
      }
    }
  
    return visitedNodesInOrder;
  }
  
  function getNeighbors(grid, row, col) {
    const neighbors = [];
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors;
  }
  