// given an array of elements, find the largest sum


// using built in sort function
function largestSum(arr){
  var sorted = arr.sort();
  return sorted[arr.length -1 ] + sorted[arr.length - 2]

}

// self created function
function largestSum(arr){
  var largest = null;
  var secondLargest = null;

  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= largest){
      secondLargest = largest;
      largest = arr[i];
    }else if (arr[i] >= secondLargest){
      secondLargest = arr[i]
    }
  }
  return largest + secondLargest
}
