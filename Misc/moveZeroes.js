// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

function moveZero (arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      var zeroes = arr.splice(i, 1);
      console.log(zeroes, 'zeroes');
      arr.push(zeroes[0]);
    }
  }
  return arr;
}

console.log(moveZero([0, 1, 0, 3, 12]));
