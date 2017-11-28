// 4. Greater Values
//
// Given an sorted array of integers, and a target value return the number of values greater the target.
//
// Parameters
// Input: arr {Array of Integers}
// Input: target {Integer} Output: {Integer}
//
// Constraints
//
// Time: O(logN)
// Space: O(1)
//
// Examples
// [1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4
// [1, 2, 3], 4 --> 0
// [1, 10, 22, 59, 67, 72, 100], 13 --> 5

function findGreaterValues(numbers, target){
  var start = 0;
  var end = numbers.length - 1;
  var mid;
  var diff;
  while(start <= end){
    mid = Math.floor((start + end)/2);
    if(numbers[mid] > target){
      end = mid - 1;
    }
    else if(numbers[mid] <= target){
      start = mid + 1;
      diff = numbers.length - mid - 1;
    }
  }
  return diff;
}

console.log(findGreaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5));
console.log(findGreaterValues([1, 2, 3], 4 ));
console.log(findGreaterValues([1, 10, 22, 59, 67, 72, 100], 13));
console.log(findGreaterValues([1, 10, 22, 24, 37, 49, 50, 51, 59, 67, 72, 100], 13));
