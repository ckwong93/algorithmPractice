// write a function that searches through an array using binary search method - meaning it will
// search the average and half the search parameters
//
// this will return position of num in the array


function binarySearch(array,target){
  var min = 0;
  var max = array.length - 1;
  var mid;

  while(min <= max){
    mid = Math.floor((min + max)/2);
    if(array[mid] === target){
      return mid;
    }
    else if(target < array[mid]){
      max = mid - 1;
    }
    else{
      min = mid + 1;
    }
  }
  return -1;
}


console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],7));
