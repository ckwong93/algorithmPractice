// 7. Sort Digits
//
// Given an integer, soft the digits in ascending order and return the new integer. Ignore leading zeros.
//
// Parameters
// Input: num {Integer}
// Output: {Integer}
//
// Constraints
// Do not convert the integer into a string or other data type.
//
// Time: O(N) where N is the number of digits.
// Space: O(1)
//
// Examples
// 8970 --> 789
// 32445 --> 23445
// 10101 --> 111


function sortDigits(nums) {
  let counter = {};
  let temp = null;
  let result = "";

  while (nums > 0) {
    temp = nums % 10;
    if (temp !== 0 && counter[temp]) {
      counter[temp]++;
    } else if (temp !== 0) {
      counter[temp] = 1;
    }
    nums = Math.floor(nums / 10);
  }
  for (let i = 1; i <= 9; i++) {
    while (counter[i] > 0) {
      result += i;
      counter[i]--;
    }
  }
  return result;
}

console.log(sortDigits(8970));
console.log(sortDigits(32445));
console.log(sortDigits(10101));
