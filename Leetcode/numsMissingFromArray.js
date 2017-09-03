//
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements of [1, n] inclusive that do not appear in this array.
//
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
//
// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [5,6]

function checkMissing(arr){
  var numberCount = {};
  var missing = [];

  for(var i = 1; i < arr.length + 1; i++){
    numberCount[i] = 1
  }

  // console.log(numberCount)

  for(var j = 0; j < arr.length; j++){
    numberCount[arr[j]]++
  }

  for(var k in numberCount){
    if(numberCount[k] === 1){
      missing.push(k)
    }
  }
  return missing
}

console.log(checkMissing([4,3,2,7,8,2,3,1]));
console.log(checkMissing([1,2,3,6,7,7,8,9]));
console.log(checkMissing([4,3,2,7,8,2,3,1]));
console.log(checkMissing([1,1,1,1,1]))
