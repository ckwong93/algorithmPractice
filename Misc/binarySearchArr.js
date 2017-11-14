// write a function that searches through an array using binary search method - meaning it will
// search the average and half the search parameters
//
// this will return position of num in the array

function binarySearch(arr,num){
  var min = 0;
  var max = arr.length -1;
  var mid;

  while(min <= max){
    mid = (min + max)/2;
    if(arr[mid] === num){
      return mid;
    }
    if(num <= arr[min]){
      min = mid + 1;
    }
    else if( num >= arr[min]){
      max = mid - 1;
    }
  }
  return -1;
}


console.log(binarySearch([1,2,3,4,5],3));
