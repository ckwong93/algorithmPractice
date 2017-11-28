// 5. Sorted and Rotated Array [Extra Credit]
//
// Given a array that is sorted an rotated, find out if a target value exists in the array.
//
// An sorted array is rotated by taking an unknown amount of values from the beginning and placing it at the end.
//
// [3, 4, 5, 1, 2] is rotated left by 2.
// [99, 14, 25, 78, 93] is rotated to the right by 1.
//
// Parameters
// Input: arr {Array}
// Output: {Boolean}
//
// Constraints
// Time: O(logN)
// Space: O(N)
//
// Examples
// [35, 46, 79, 102, 1, 14, 29, 31], 46 --> true [35, 46, 79, 102, 1, 14, 29, 31], 47 --> false [7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9 --> true

function sortedAndRotated(array,target){
  var start = 0;
  var end = array.length - 1;
  var mid;
  var sorted = [];

  while(start <= end){
    mid = Math.floor((start + end)/2);
    if(array[mid] >= array[mid+1]){

    }
    else{

    }
  }
}




console.log(sortedAndRotated([35, 46, 79, 102, 1, 14, 29, 31], 46));
console.log(sortedAndRotated([35, 46, 79, 102, 1, 14, 29, 31], 47));
console.log(sortedAndRotated([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9));
