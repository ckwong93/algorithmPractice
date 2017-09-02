// given an array of nums, check whether there are two numbers that sum up a given input

// example twoSum(5,[0,2,4,4]) => false
// example twoSum(8,[0,2,4,4]) => true



// pseudocode: we want to check if the sum of two nums exists in an array.
// we can calculate the diff between the input and our current num in the array to see whether the diff
// exists. if the diff exists, that means it is in the array. if not, we can move onto the next number

function twoSum(input,nums){
  var log = {};
  for(var i = 0; i < nums.length; i++){
    var diff = input - nums[i];
    if(log[diff]){
      return true;
    }
    else{
      log[nums[i]] = true;
    }
  }
  return false
}

// example 2: do the same, but instead of returning true & false return the numbers
function twoSum(input, nums){
  var log = {};
  var firstNum = null;
  var secondNum = null;

  for(var i = 0; i < nums.length; i++){
    var diff = input - nums[i];
    if(log[diff] === nums[i] || log[nums[i === diff]]){
      firstNum = nums[i];
      secondNum = diff;
      return [firstNum,secondNum];
    }
    else{
      log[nums[i]] = diff;
      log[diff] = nums;
    }
  }
  return 'no matches'
}
