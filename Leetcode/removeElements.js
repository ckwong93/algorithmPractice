// Given an array and a value, remove all instances of that value in place and return the new length.
// Do not allocate extra space for another array, you must do this in place with constant memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
//
// Example:
// Given input array nums = [3,2,2,3], val = 3
// Your function should return length = 2, with the first two elements of nums being 2.

function removeElement(nums, val){
  for(var i = 0; i < nums.length;){
    // third argument i++ is removed here because the loop will skip numbers this way
    if(nums[i] === val){
      nums.splice(i,1)
    }
    else{
      // having i++ here will make sure no values are skipped
      i++
    }
  }
  console.log(nums.length, 'is the new length of the array')
  return nums
}


console.log(removeElement([1,2,3,3],3))
