import { NodeProps } from '../interfaces/grid-interfaces';

export function dijkstra(grid: any, startNode: any, finishNode: any): NodeProps[] | undefined{
  const visitNodesinOrder: NodeProps[] = [];

  startNode.distance = 0;
  let unvisitedNodes = getAllNodes(grid);

  debugger
  while (unvisitedNodes.length) {
    unvisitedNodes = sortNodesByDistance(unvisitedNodes);

    let closestNode = unvisitedNodes.shift();

    if (closestNode && closestNode.isWall) continue;

    if (closestNode && closestNode.distance === Infinity) return visitNodesinOrder;
    
    closestNode = Object.assign({}, closestNode, {
      isVisited: true
    });
    visitNodesinOrder.push(closestNode);
    if (closestNode === finishNode) return visitNodesinOrder;
    updateUnvisitedNeighbors(closestNode, grid);
  }

  return visitNodesinOrder; 
};

function getAllNodes(grid: any): NodeProps[] {
  return grid.flat();
};

function sortNodesByDistance(nodes: any): NodeProps[] {
  return nodes.sort((nodeA: any, nodeB: any) => nodeA.distance - nodeB.distance);
};

function updateUnvisitedNeighbors(node: any, grid: any) {
  const unvisitedNeigbors = getUnvisitedNeighbors(node, grid);

  for (let neighbor of unvisitedNeigbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
};

function getUnvisitedNeighbors(node: any, grid: any) {
  let neighbors = [];
  const { col, row } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter(neighbors => !neighbors.isVisited);
}

export function getNodesInShortestPath(finishNode: any) {
  let nodesInShortPathOrder = [];
  let currentNode = finishNode;

  while (currentNode !== null) {
    nodesInShortPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }

  return nodesInShortPathOrder;
}
