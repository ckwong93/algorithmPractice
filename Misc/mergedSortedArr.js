// Given two sorted arrays of integers, combine the values into one sorted array?
//
// Input: [1,3,5], [2,4,6,8,10]
//
// Output: [1,2,3,4,5,6,8,10]
//
// See if you can solve this in O(N+M) time and O(N+M) auxiliary space.




function mergeArr(arr1,arr2){
  var indexArr1 = 0;
  var indexArr2 = 0;
  var merged = [];

  while(arr1[indexArr1] || arr2[indexArr2]){
      if(arr1[indexArr1] < arr2[indexArr2]){
        merged.push(arr1[indexArr1]);
        indexArr1++;
      }
      else if(arr1[indexArr1] >= arr2[indexArr2]){
        merged.push(arr2[indexArr2]);
        indexArr2++;
      }
      else if(arr1[indexArr1] && !arr2[indexArr2]){
        merged.push(arr1[indexArr1]);
        indexArr1++;
      }
      else{
        merged.push(arr2[indexArr2]);
        indexArr2++;
      }
  }
  return merged;
}

console.log(mergeArr([1,3,5],[2,4,6,8,10]));


// alternative solution
// function mergeArr(arr1,arr2){
//   var i = 0;
//   var j = 0;
//   var merged = [];
//   var totalItems = arr1.length + arr2.length;
//   while(i + j < totalItems){
//     if(j > arr2.length || (i < arr1.length && arr1[i] < arr2[j])){
//         merged.push(arr1[i]);
//         i++;
//     }
//     else{
//       merged.push(arr2[j]);
//       j++;
//     }
//   }
//   return merged;
// }
// console.log(mergeArr([1,3,5],[2,4,6,8,10]));
