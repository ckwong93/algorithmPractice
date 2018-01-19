// You are given an array of  integers, , and a positive integer, . Find and print the number of pairs where  and  +  is divisible by .
//
// Input Format
//
// The first line contains  space-separated integers,  and , respectively.
// The second line contains  space-separated integers describing the respective values of .
//
// Constraints
//
// Output Format
//
// Print the number of  pairs where  and  +  is evenly divisible by .
//
// Sample Input
//
// 6 3
// 1 3 2 6 1 2
// Sample Output
//
//  5
// Explanation
//
// Here are the  valid pairs:
function divisibleSumPairs(n, k, ar) {
    // Complete this function
  let count = 0;
  for(var i = 0; i < ar.length - 1; i++){
    for(var j = i+1; j < ar.length; j++){
      let currSum = ar[i] + ar[j];
      if(i < j && currSum % k == 0){
        console.log(i,j);
        count++;
      }
    }
  }
  return count;
}
