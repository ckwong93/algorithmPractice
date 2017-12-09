// 3. Square Root
//
// Given an positive integer, find the square root.
//
// Parameters
// Input: value {Integer}
// Output: {Float}
//
// Constraints
// Do not use a native built in method.
// Ensure the result is accurate to 6 decimal places (0.000001)
//
// Time: O(logN)
// Space: O(1)
//
// Examples
// 4 --> 2.0
// 98 --> 9.899495
// 14856 --> 121.885192
//

function squareRoot(number){
  let start = 1;
  let end = number;
  let mid;

  while(start < number){
    mid = ((start + end)/2);
    if(mid * mid == number){
       return mid.toFixed(6);
    }else if(mid * mid > number){
      end = mid - 1;
      // console.log(end,'end');
    }else if (mid * mid < number){
      start = mid + 1;
      // console.log(start,'start');
    }
  }
}

console.log(squareRoot(4));
console.log(squareRoot(98));
console.log(squareRoot(14856));
console.log(squareRoot(150000));
