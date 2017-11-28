// 2. Closest Value
// Utilize the decrease and conquer pattern to solve these problems.
//
// Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.
//
// Parameters
// Input: arr {Array of Integers}
// Input: target {Integer}
// Output: {Integer}
//
// Constraints If there are two numbers tied for the closest value, return the lowest value.
//
// Time: O(logN)
// Space: O(1)
//
// Examples
// [1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5
// [1, 2, 3], 8 --> 3
// [1, 10, 22, 59, 67, 72, 100], 70 --> 72


function closestValue(numbers, target){
  var start = 0;
  var end = numbers.length - 1;
  var mid;
  var diff = Math.abs(numbers[0] - numbers[numbers.length - 1]);
  var closest;

  while(start <= end){
    mid = Math.floor((start + end)/2);
    if(Math.abs(target - mid) < diff){
      diff = Math.abs(target - mid);
      closest = mid;
    }
    else{
      start = mid - 1;
      end = mid + 1;
    }
  }
  return closest;
}



console.log(closestValue([1, 2, 3, 5, 5, 7, 9, 10, 11], 6));
console.log(closestValue([1, 2, 3], 8));
console.log(closestValue([1, 10, 22, 59, 67, 72, 100], 70));
