// Suppose we had an array of n integers sorted in ascending order. How quickly could we check if a given integer is in the array?

// Because the array is sorted, we can use binary search to find the item in O(\lg{n})O(lgn) time and O(1)O(1) additional space.


// find using es6 sets
function findInSet(arr,num){
  // sets are collections of UNIQUE items - think of a set of usernames
  var set = new Set(arr);
  // this will check if the set already has an item and will return t/f if it does
  return set.has(num)
}


// find using own created method O(n) = n
function findInSet(arr,num){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === num){
      return true
    }
  }
  return false
}


// find using js built in arr functions
function findInSet(arr,num){
  // for indexOf if it doesnt exist, the default value goes to -1
  if(arr.indexOf(num) != -1){
    return true
  }
  return false
}
