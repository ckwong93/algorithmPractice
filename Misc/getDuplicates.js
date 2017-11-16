// 8. Get Duplicates
//
// Given an array of values, return only the values that have duplicates in the array
//
// Parameters
// Input: arr {Array}
// Output: {Array}
//
// Constraints
// Time: O(N)
// Space: O(N)
//
// Examples
// [1, 2, 4, 2] --> [2]
// [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
// [1, 2, 3, 4] --> []



function getDuplicates(array){
  var counter = {};
  var dupes = [];
  for(var i = 0; i < array.length; i++){
    if(counter[array[i]]){
      counter[array[i]]++;
    }
    else{
      counter[array[i]] = 1;
    }
  }
  // console.log(counter);
  for(var item in counter){
    if(counter[item] > 1){
      dupes.push(item);
    }
  }
  return dupes;
}

console.log(getDuplicates([1,2,4,2]));
console.log(getDuplicates([3,2,3,2,3,3,4]));
console.log(getDuplicates([1,2,3,4]));
