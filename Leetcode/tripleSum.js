// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//
// For example, given array S = [5,7,8,4,6,9],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// brute force solution 0(n^3) efficiency
// function tripleSum(arr, num){
//   var setofSuccess = new Set();
//   for(var i = 0; i < arr.length; i++){
//     for(var j = 1; j < arr.length; j++){
//       for(var k = 2; k < arr.length; k++){
//         if(arr[i] + arr[j] + arr[k] === num) {
//           setofSuccess.add([arr[i],arr[j],arr[k]]);
//         }
//       }
//     }
//   }
//   return setofSuccess;
// }

// brute force, with n^2 efficiency
function tripleSum(arr,num){
  var numberObj = {};
  var combos = [];
  var newNum = null;
  for(var i = 0; i < arr.length; i++){
    var savedNum = arr[i];
    console.log(savedNum, 'saved');
    var firstDifference = num - arr[i];
    arr[i] = null;
    for(var j = 1; j < arr.length; j++){
      var secondDifference = firstDifference - arr[j];
      var remainingNum = num - savedNum - arr[j];
      if(numberObj[secondDifference]){
        combos.push([savedNum,arr[j],remainingNum]);
      }
      else{
        numberObj[arr[j]] = true;
      }
    }
    arr[i] = savedNum;
  }
  return combos;
}
console.log(tripleSum([5,7,8,4,6,9],21));
