// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.
var findKthLargest = function(nums, k) {
  let sorted = quickSort(nums);
  return sorted[sorted.length -k]
}

function quickSort(arr){
  let pivotIndex = Math.floor(arr.length/2);
  let arrA =[];
  let arrB = [];

  if(arr.length < 2){
    return arr;
  }
  for(var i = 0; i < arr.length; i++){
    if(i !== pivotIndex){
      if(arr[i] < arr[pivotIndex]){
        arrA.push(arr[i]);
      }
      else{
        arrB.push(arr[i]);
      }
    }
  }
  return quickSort(arrA).concat(arr[pivotIndex]).concat(quickSort(arrB));
}
