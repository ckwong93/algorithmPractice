// 1. Unique
//
// Given an array of integers, return an array with all duplicates removed.
//
// Parameters
// Input: arr {Array of Integers}
// Output: {Array of Integers}
//
// Constraints
//
// Time: O(N)
// Space: O(N)
//
// Examples
// [1, 2, 3, 4, 5, 6] --> [1, 2, 3, 4, 5, 6]
// [1, 1, 2, 2, 3, 3]' --> []
// [1, 2, 3, 1, 2] --> [3]

// using hash table
function uniqueInts(numbers){
  var count = {};
  var uniques = [];

  for(var i = 0; i < numbers.length; i++){
    if(count[numbers[i]]){
      count[numbers[i]]++;
    }
    else{
      count[numbers[i]] = 1;
    }
  }
  for(var item in count){
    if(count[item] === 1){
      uniques.push(item);
    }
  }
  return uniques;
}

console.log(uniqueInts([1,2,3,4,5,6]));
console.log(uniqueInts([1,1,2,2,3,3]));
console.log(uniqueInts([1,2,3,1,2]));
