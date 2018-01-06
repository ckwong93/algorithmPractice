# 40 - Binary Trees Problem Set [Optional]
For the binary tree problems use the serialized and deserialize functions along with the TreeNode class to quickly create sample Trees to test.

## 1. Count Leaves

*Given a root node of a binary tree, count the number of leaves in the tree.*

**Parameters**
Input: node {TreeNode}
Output: {Integer}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root of following tree --> 3`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_17_ytasm9.png)

// can implement a bfs or dfs to count each leaf node
```
function countLeaf(node){
  let count = 0;
  function dfs(node){
    if(!node){
      return
    };
    count++;
    dfs(node.left);
    dfs(node.right);
  }
  return count;
}
```

## 2. Max Value

*Given a root node of a binary tree, where the values of nodes are integers, return the maximum value of a node.*

**Parameters**
Input: node {TreeNode}
Output: {Integer}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root of following tree --> 7`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_21_xcpnbc.png)


function maxValue(node){
  let greatest = node.value;
  let current = node;
  if(!node){
    return
  }
  while(current){
    if(current.right){
      current = current.right
    }
    else{
      return greatest = current.value;
    }
  }
}

## 3. Max Depth

*Given a root node of a binary tree, determine the maximum depth of the tree.*

**Parameters**
Input: node {TreeNode}
Output: {Integer}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root of following tree --> 3`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_35_o9mqp1.png)


```
function maxDepth(root){
  let depth = 0;
  function dfs(node){
    if(!node){
      return 0;
    }
    left = maxDepth(node.left) + 1;
    right = maxDepth(node.right) + 1;
    depth = Math.max(left, right);
  }
  return depth;
}
```


## 4. Get Level

*Given a root node of a binary tree, return an array of the values of all nodes at a target level.*


**Parameters**
Input: node {TreeNode}
Output: {Array of Integers}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root of following tree --> [4, 5, 6]`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_31_tml3dz.png)

## 5. Invert Tree

*Given a root node of a binary tree, return back the mirror image of that tree.*

**Parameters**
Input: node {TreeNode}
Output: {TreeNode}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root of tree on the left --> root of tree to the right`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_38_qqwuto.png)

## 6. Get Widths

*Given a root node of a binary tree, return an array of the widths at each level*

**Parameters**
Input: node {TreeNode}
Output: {Array of Integers}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root of following tree --> [[1], [2, 3], [4, 5, 6], [7]]`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_20_ivkmsq.png)

## 7. Children Sum Property

*Given a root node of a binary tree, determine if each node's value is the sum of it's childrens' values.  Leaf nodes do not have to meet this condition.*

**Parameters**
Input: node {TreeNode}
Output: {Boolean}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`see image below`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_25_bt9f2h.png)


## 8. Breadth First Spiral

*Given a root node of a binary tree, return an array of each node value in spiral breadth first order.  See example below for spiral breadth first ordering.*

**Parameters**
Input: node {TreeNode}
Output: {Array of Integers}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root of following tree --> [1,3,2,4,5,6,7]`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_22_ed5mu9.png)


## 9. Lowest Common Ancestor

*Given the root node, and two target nodes, find the lowest common ancestor of the two nodes.*

**Parameters**
Input: root {TreeNode}
Input: node1 {TreeNode}
Input: node2 {TreeNode}
Output: node {TreeNode}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root node, TreeNode 4, TreeNode 3 --> TreeNode 1`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_36_it68gy.png)

## 10. Diameter

*Given the root node of a binary tree, determine the diameter of the tree.*

The diameter of a tree is the number of nodes in path from two nodes that are furthest from each other.

**Parameters**
Input: node {TreeNode}
Output: {Integer}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root node of following tree --> 7`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_29_r8smub.png)

## 11. Symmetric Tree

*Given the root node of a binary tree, determine whether the tree is symmetric about its root.*

**Parameters**
Input: node {TreeNode}
Output: {Integer}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root node of following tree --> true`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_26_x3zewn.png)


## 12. Post-Order DFS using While Loop (Advanced)

*Given the root node of a binary tree, print the values in post-order depth first traversal using a while loop and a stack.*

**Parameters**
Input: node {TreeNode}
Output: {Void}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root node of following tree --> 9, 2, 8, 6, 4, 7, 5, 3, 1`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_19_wwearj.png)


## 13. Max Sum Path (Advanced)

*Given the root node of a binary tree, determine the sum of the values in a path that results in the greatest sum.*

**Parameters**
The path does not need to include the root node.

Input: node {TreeNode}
Output: {Integer}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root node of following tree --> 24`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_27_ye6aa7.png)


## 14. Root Path using Pure Recursion (Advanced)

*Given the root node of a binary tree and a target node, return the path of values from the root to the target.*

**Parameters**
Input: root {TreeNode}
Input: target {TreeNode}
Output: {Array of Integers}

**Constraints**
Time: O(N)
Space: O(N)

**Examples**
`root node of following tree, TreeNode 5 --> [1, 2, 5]`
![binary tree](http://res.cloudinary.com/outco/image/upload/c_scale,h_450,q_81,r_0,w_600,x_1039,y_659/v1497392714/Binary_Tree_-_28_hca26t.png)
