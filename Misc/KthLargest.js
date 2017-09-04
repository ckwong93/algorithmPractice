// find the kth largest item in an array
// ex: given [1,5,2,6,3,7,3,6,2,1,9], find 3rd largest => 3

function KthLargest(arr, num){
  var sortedArr = arr.sort(function(a , b){return a - b});
  var kth = sortedArr[sortedArr.length - num];
  return kth;
}
