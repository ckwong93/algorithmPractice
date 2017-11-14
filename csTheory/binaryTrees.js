// a binary search tree is composed of a root node and leaf nodes. each node to the left of the root will be less than the value of the root. each node to the right will be greater than the root node.
// since this is true, we can traverse through a tree from left to right, and it will give us sorted numbers. in addition, when searching for a particular value, in bst's, the searched amount is halfed every time - this gives very good efficiency at 0(log n)

function Node(val){
  this.val = value;
  this.left = null;
  this.right = null;
}

function binarySearchTree(){
  this.root = null;
}


// add to binary tree non-recursive
binarySearchTree.prototype.add = function(num){
  var newNode = new Node(num);

  if(!root){
    this.root = newNode;
    return;
  }
  var currentNode = root;

  while(currentNode){
    if(num < currentNode.value){
      if(!currentNode.left){
        currentNode.left = newNode;
        break;
      }
      else{
        currentNode = currentNode.left;
      }
    }
    else{
      if(num > currentNode.value){
        if(!currentNode.right){
          currentNode.right = newNode;
          break;
        }
        else{
          currentNode = currentNode.right;
        }
      }
    }
  }
};

// add item to bst recursively
binarySearchTree.prototype.add = function(num){

  var newNode = new Node(num);

  if(!root){
    this.root = newNode;
    return;
  }
  var currentNode = this.root;

  if(num < currentNode.value){
    if(currentNode.left == null){
      currentNode.left = newNode;
    }else{
      currentNode.addNode(n);
    }
  }
  else{
    if(currentNode.right == null){
      currentNode.right = newNode;
    }else{currentNode.addNode(n);
    }
  }
};

// traverse through a tree, printing all items recursively
binarySearchTree.prototype.traverse = function(){
  var currentNode = this.root;

  if(currentNode.left != null){
    currentNode.traverse();
  }
  console.log(currentNode.value);
  if(currentNode.right != null){
    currentNode.traverse();
  }
};

// search through a tree recursively
binarySearchTree.prototype.search = function(num){
  var currentNode = this.root;
  if(currentNode.value == num){
    return 'found num' + num;
  }else if (num < currentNode.value && currentNode.left !== null){
    currentNode.left.search(num);
  }else if(num > currentNode.value &&  currentNode.right !== null){
    currentNode.right.search(num);
  }
};


// check max item in bst
binarySearchTree.prototype.getMax = function(){
  if(!root){
  return 'no root';
  }
  var currentNode = this.root;
  while(currentNode){
    currentNode = currentNode.right;
    if(currentNode.right == null){
      return currentNode.value;
    }
  }
};

// check min item in bst
binarySearchTree.prototype.getMin = function(){
  if(!root){
    return 'no root';
  }
  var currentNode = this.root;
  while(currentNode){
    currentNode = currentNode.left;
    if(currentNode.left == null){
      return currentNode.value;
    }
  }
};
