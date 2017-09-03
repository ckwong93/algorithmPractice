// given an unsorted array of numbers from 1- 100 excluding one number, find the missing number


function missingNumber(arr){
  var sum = 0;
  var n = arr.length + 1;
  var expectedSum = n*(n+1)/2;

  for(var i = 0; i < arr.length; i++){
    sum+=arr[i]
  }

  return expectedSum - sum
}

var nums = [1,2,3,4,6,7,8,9,10]
missingNumber(nums)


// explanation:
// expected sum is a formula where given a sorted set of numbers 'n', the formula
// will calculate the sum of all numbers between 0 and n.
// in this example, we know that one number is missing. we can calculate the sum
// of all the numbers in the array. we can also calculate the expected sum of the array + 1,
// the 1 extra will tell us what is missing when we subtract expected sum - sum
