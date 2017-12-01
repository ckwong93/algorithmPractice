// 1. Number of Ones
// Utilize the decrease and conquer pattern to solve these problems.
// Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.
//
// Parameters
// Input: arr {Array of Integers}
// Output: {Integer}
//
// Constraints
// Time: O(logN)
// Space: O(1)
//
// Examples
// [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8
// [0, 0, 0] --> 0
// [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7

function bitCount(array){
  let start = 0;
  let end = array.length - 1;
  let mid;

  while(start <= end){
    mid = Math.floor((start + end)/2);
    if(array[mid] === 0){
      start = mid + 1
    }
    else if(array[mid] === 1){
      end = mid - 1;
    }
  }
  return array.length - start
}



console.log(bitCount([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(bitCount([0, 0, 0]));
console.log(bitCount([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]));
