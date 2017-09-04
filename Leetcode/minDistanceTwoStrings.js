// Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.
//
// Example 1:
// Input: "sea", "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
// Note:
// The length of given words won't exceed 500.
// Characters in given words can only be lower-case letters.

function minDistance(string1,string2){
  var letters = {};
  var firstSplit = string1.split('');
  var secondSplit = string2.split('');
  var common = [];
  var uncommon = [];

  for(var i = 0; i < secondSplit.length; i++){
      if(firstSplit.includes(secondSplit[i])){
        common+=secondSplit[i];
      }else{
        uncommon+=secondSplit[i];
      }
    }

  // console.log(common,' common');
  // console.log(uncommon,' uncommon');
for(var j = 0; j < firstSplit.length; j++){
  if(secondSplit.includes(firstSplit[j]) && !common.includes(firstSplit[j])){
    common+=firstSplit[j];
  }else if(!secondSplit.includes(firstSplit[j]) && !uncommon.includes(firstSplit[j])){
    uncommon+=firstSplit[j];
  }
}
return uncommon.length;
}

console.log(minDistance('calvin','kelvin'));
console.log(minDistance('crate','great'));
// does not work if there are multiple same letters in test ->
// console.log(minDistance('joanna','banana')) returns 3 when it should be 4
