//
// ## 7. Sort Digits
//
// *Given an integer, soft the digits in ascending order and return the new integer. Ignore leading zeros.*
//
// **Parameters**
// Input: num {Integer}
// Output: {Integer}
//
// **Constraints**
// Do not convert the integer into a string or other data type.
//
// Time: O(N) where N is the number of digits.
// Space: O(1)
//
//
// **Code**
// ```
//
// ```
// **Examples**
// `8970 --> 789`
// `32445 --> 23445`
// `10101 --> 111`
//


//
// pseudocode: since we cant convert to a string, we will need to modulo to isolate the numbers
// 1. divide number by 10, then store it into a hash table.
// 2. loop backwards from 9 (9 digits), and multiply it by the power it is iterating from
// 3. add it to the number

function sortDigits(num){
  let list = {};
  var temp = null;
  var sorted = 0;
  var power = 0;

  while(num > 0){
    temp = num % 10
    if(temp !== 0 && list[temp]){
      list[temp]++;
    }
    else if (temp !== 0){
      list[temp] = 1;
    }
    num = Math.floor(num / 10);
    // console.log(list);
  }
  for(var i = 9; i >=0; i--){
    while(list[i] > 0){
      // console.log(i, power);
      sorted += i*(10**power);
      power+=1;
      list[i]--;
    }
  }
  return sorted;
}


console.log(sortDigits(8970));
console.log(sortDigits(32445));
console.log(sortDigits(10101));
