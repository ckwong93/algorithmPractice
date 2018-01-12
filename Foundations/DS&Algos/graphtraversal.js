/**
 *  Target Practice 06 - Graph Traversal
 *
 *  Instructions: Solve the following graph traversal problems.
 */

'use strict';

/**
 *  1. For the example graph below, what an expected output if we printed
 *     each vertex value from vertex 0 outwards using:
 *
 *     a. BREADTH FIRST traversal:[0,1,2,7,4,6,5,3]
 *     b. DEPTH FIRST traversal:[0,1,2,4,5,3,6,7]
 *
 *     NOTE: The traversal should take care of redundancy and not print the same
 *           vertex value twice.
 *
 *     Example Graph:
 *
 *              2
 *            /   \
 *    0 ~~~ 1       4  ~~~ 5 ~~~ 3
 *            \   /   \   /
 *              7       6
 */

// DO NOT EDIT
// Vertex class
class Vertex{
  constructor(id){
    this.id = id !== undefined? id : null;
    this.edges = [];
  }
}

// DO NOT EDIT
// generate graph from int and array of arrays
function deserialize(n, edges){
  let vertices = {};
  while (n--){
    vertices[n] = new Vertex(n);
  }
  let v1;
  let v2;
  edges.forEach(edge => {
    v1 = edge[0];
    v2 = edge[1];
    vertices[v1].edges.push(vertices[v2]);
    vertices[v2].edges.push(vertices[v1]);
  });

  return vertices[0];
}

// DO NOT EDIT
// sampleGraph is the vertex with id 0
const sampleGraph = deserialize(8, [[0, 1], [1, 2], [2, 4], [3, 5], [4, 5],
                                    [1, 7], [4, 6], [4, 7], [5, 6]]);

/**
 *  1. Implement Breadth First Search using a queue and while loop.
 *
 *  Input: {Vertex} - the starting vertex
 *  Output: {Array} - an array of vertex ids of the path
 *
 *  NOTE: You may use an array or linked list for your queue.
 *
 *  HINT: Use a set or hash table to handle redundancy
 */

function bfs(vertex){
  let result = [];
  let queue = [];
  let travelled = {};
  let current;
  // add initial value to queue and result
  queue.push(vertex.id);
  result.push(current.id);
  travelled[current.id] = true;
  while(queue.length > 0){
    // remove first item in queue
    current = queue.shift();
    // loop through current item's edges
    for(var i = 0; i < current.edges.length; i++){
      // check if travelled already
      if(!travelled[current.edges[i]]){
        // if not, add to queue, add to travelled
        queue.push(current.edges[i]);
        travelled[current.edges[i]] = true;
      }
    }
  }
  return result;
}

/**
 *  2. Implement Depth First Search using a stack and while loop.
 *
 *  Input: {Vertex} - the starting vertex
 *  Output: {Array} - an array of vertex ids of the path
 *
 *  NOTE: You may use an array for your stack.
 *
 *  HINT: Use a set or hash table to handle redundancy
 */

// same as bfs, except use stack isntead of queue and pop instead of shift
function dfs(vertex){
  let result = [];
  let stack = [];
  let travelled = {};
  let current;
  // add initial value to stack and result
  stack.push(vertex.id);
  result.push(current.id);
  travelled[current.id] = true;

  while(stack.length > 0){
    // remove first item in stack
    current = stack.pop();
    // loop through current item's edges
    for(var i = 0; i < current.edges.length; i++){
      // check if travelled already
      if(!travelled[current.edges[i]]){
        // if not, add to stack, add to travelled
        stack.push(current.edges[i]);
        travelled[current.edges[i]] = true;
      }
    }
  }
  return result;
}


////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}

function arraysMatching(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }

  let cache = {};
  for (let i = 0; i < arr1.length; i++) {
    if (cache[arr1[i]] === undefined) {
      cache[arr1[i]] = 1;
    } else {
      cache[arr1[i]]++;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (cache[arr2[j]] === undefined || cache[arr2[j]] === 0) { return false; }
    cache[arr2[j]]--;
  }
  return true;
}

function getNeighbors(vertex, visited) {
  let edges = vertex.edges;
  return edges.filter((neighbor) => {
    return visited[neighbor.id] === undefined;
  });
}

function getValues(vertices) {
  return vertices.map((vertex) => {
    return vertex.id;
  });
}

function removeVisited(vertices, visited) {
  return vertices.filter((vertex) => {
    return !visited.has(vertex);
  });
}

// takes in an array of path and a vertex start point and determines whether
// the bfs is valid
function validBfs(path, start) {
  if (path[0] !== start.id) { return false; }

  let current = start;
  let visited = {};
  visited[current.id] = current;
  for (let i = 0, j = 1; i < path.length; i++) {
    if (i >= j) { return false; }
    let neighbors = getNeighbors(current, visited);
    let values = getValues(neighbors);
//     console.log(values, i, j)
    if (!arraysMatching(values, path.slice(j, j + values.length))) {
      return false;
    }
    j += values.length;
    neighbors.forEach((vertex) => {
        visited[vertex.id] = vertex;
    });
    current = visited[path[i + 1]];
  }

  return true;
}

// takes in an array of path and a vertex start point and determines whether
// the dfs is valid
function validDfs(path, start) {
  if (path[0] !== start.id) { return false; }

  let stack = [];
  let visited = new Set();
  let moves = [start];

  for (let i = 0; i < path.length; i++) {
    let id = path[i];
    while (moves.length === 0) {
      if (stack.length === 0) { return false; }
      moves = removeVisited(stack.pop(), visited);
    }
    let current = moves.find((vertex) => {
      return vertex.id === id;
    });
    if (!current) { return false; }
    visited.add(current);
    if (moves.length) { stack.push(moves); }
    moves = removeVisited(current.edges, visited);
  }
  while (stack.length) {
    if (removeVisited(stack.pop(), visited).length) { return false; }
  }
  return true;
}


const testGraph = deserialize(8, [[0, 1], [1, 2], [2, 4], [3, 5], [4, 5],
                                  [1, 7], [4, 6], [4, 7], [5, 6]]);

console.log('Breadth First Search tests');
let testCount = [0, 0];

assert(testCount, 'able to return the elements of a graph in breadth first manner', () => {
  let results = bfs(testGraph);
  return validBfs(results, testGraph);
});

assert(testCount, 'should return only starting initial node if no edges exist in graph', () => {
  let noEdgeGraph = deserialize(8, []);
  let results = bfs(noEdgeGraph);
  return validBfs(results, noEdgeGraph);
});

assert(testCount, 'should return elements of simple graph: 0 - 1 - 2 starting at 0', () => {
  let simpleGraph = deserialize(3, [[0,1],[1,2]]);
  let results = bfs(simpleGraph);
  return validBfs(results, simpleGraph);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Depth First Search tests');
testCount = [0, 0];

assert(testCount, 'able to return the elements of a graph in depth first manner', () => {
  let results = dfs(testGraph);
  return validDfs(results, testGraph);
});

assert(testCount, 'should return only starting initial node if no edges exist in graph', () => {
  let noEdgeGraph = deserialize(8, []);
  let results = dfs(noEdgeGraph);
  return validDfs(results, noEdgeGraph);
});

assert(testCount, 'should return elements of simple graph: 0 - 1 - 2 starting at 0', () => {
  let simpleGraph = deserialize(3, [[0,1],[1,2]]);
  let results = dfs(simpleGraph);
  return validDfs(results, simpleGraph);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
