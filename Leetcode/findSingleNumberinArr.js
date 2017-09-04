// Given an array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


function findSingle(arr){
  var nums = {};

  for(var i = 0; i < arr.length; i++){
    if(nums[arr[i]]){
      nums[arr[i]]++;
    }
    else{
      nums[arr[i]] = 1;
    }
  }

  for(var j in nums){
    if(nums[j] === 1){
      return j;
    }
  }
}

console.log(findSingle([1,2,3,4,5,6,7,8,9,9,8,7,6,4,3,2,1]));
