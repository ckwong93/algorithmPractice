// 4. Missing Number
//
// Given range of 1 to N and an array of unique integers that are within that range, return the missing integers not found in the array
//
// Parameters
// Input: n {Integer} Input: arr {Array of Integers}
// Output: {Array of Integers}
//
// Constraints
// Time: O(N)
// Space: O(N)
//
// Examples
// 4, [1, 4, 2] --> [3]
// 8, [4, 7, 1, 6] --> [2, 3, 5, 8]
// 6, [6, 4, 2, 1] --> [3, 5]



function findMissingNumbers(number,array){
  var counter = {};
  var missing = [];

  for(var i = 1; i <= number; i++){
    counter[i] = 0;
  }
  // console.log(counter,'counter');
  for(var j = 0; j <= array.length; j++){
    counter[array[j]]++;
  }

  for(var items in counter){
    if(counter[items] === 0){
      missing.push(items);
    }
  }

  return missing;
}


console.log(findMissingNumbers(4,[1,4,2]));
console.log(findMissingNumbers(8,[4,7,1,6]));
console.log(findMissingNumbers(6,[6,4,2,1]));
