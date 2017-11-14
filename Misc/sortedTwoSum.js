// Given a sorted array of integers and a target value, determine if there exists two integers in the array that sum up to the target value.
//
// See if you can solve this in O(N) time and O(1) auxiliary space.


function twoSum(numbers, target){
  var left = 0;
  var right = numbers.length - 1;

  while(left <= numbers.length - 1 && right >= 0){
    console.log(right)
    if(numbers[left] + numbers[right] === target){
      return "first value is " + numbers[left] + " second value is " + numbers[right];
    }
    else if(numbers[left] + numbers[right] > target){
      right--;
    }
    else if(numbers[left] + numbers[right] < target){
      left++;
    }
  }
  return "no combo"
}

console.log(twoSum([1,3,5,7,8,9],11))
