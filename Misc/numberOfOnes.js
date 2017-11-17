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

function closestValue(numbers, target){
  var start = 0;
  var end = numbers.length - 1;
  var mid = Math.floor((start + end)/2);
  var diff = Math.abs(target - mid);
  var closest;

  while(start <= end){
    mid = Math.floor((start + end)/2);
    if(Math.abs(target - numbers[mid]) <= diff){
      diff = Math.min(Math.abs(target - numbers[mid]),diff);
      closest = numbers[mid];
      start = mid + 1;
    }
    else if(Math.abs(target - numbers[mid]) >= diff){
      return closest;
    }
  }
  return closest;
}



console.log(closestValue([1, 2, 3, 5, 5, 7, 9, 10, 11], 6));
console.log(closestValue([1, 2, 3], 8));
console.log(closestValue([1, 10, 22, 59, 67, 72, 100], 70));
